import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import TerminalStyled from "./TerminalStyled";
import FrameHeader from "containers/FrameHeader";

import {
  handleTypeOfFile,
  t,
  findKeyString,
  openFile,
  handleFocusMutualize,
} from "../../helpers";

const Terminal = ({
  terminal,
  inputValue,
  terminalInputUpdate,
  terminalHistory,
  commands,
  pushTerminalHistory,
  clearTerminalHistory,
  clearInput,
  path,
  data,
  pathUpdate,
  openTxtWithFile,
  openPdfWithFile,
  focusFileTab,
  filesOpen,
  focusOn,
  pushCmdHistory,
  cmdHistory,
  arrowCounter,
  updateArrowCounter,
  language,
}) => {
  const inputRef = useRef();

  // Focus on terminal & auto scroll
  useEffect(() => {
    if (terminal.focus === true && terminal.running === true)
      inputRef.current.focus();
    inputRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // Initial path
  useEffect(() => {
    pathUpdate("Root");
  }, [data]);

  // Focus on terminal input
  const handleFocus = () => {
    handleFocusMutualize(terminal.minimize, focusOn, "terminal");
    inputRef.current.focus();
  };

  // Remove focus on terminal input
  const handleBlur = () => {
    inputRef.current.blur();
  };

  // Save input in state
  const handleChange = (event) => {
    terminalInputUpdate(event.target.value);
  };

  // Handle LS
  const handleLsCmd = () => {
    pushTerminalHistory(
      data.Folders[path].content.map((elm) => (
        <div className={handleTypeOfFile(elm, language)} key={elm}>
          {t(elm, language)}
        </div>
      ))
    );
  };

  // handle CD
  const handleCdCmd = (cmdOption) => {
    // This is use if the directory exist and need to be check to avoid an undefined error
    let folderNameExist, folderNameWithReplaceExist;
    if (cmdOption) {
      folderNameExist = data.Folders[findKeyString(cmdOption, language)]?.name;
      folderNameWithReplaceExist =
        data.Folders[findKeyString(cmdOption, language)?.replace("../", "")]
          ?.name;
    }

    // cd .. && in root directory
    if (cmdOption === ".." && path === "Root") {
      pushTerminalHistory(t("terminal_cd_root_error", language));
    }
    // cd .. && not in root directory
    else if (cmdOption === "..") {
      pushTerminalHistory();
      pathUpdate("Root");
    }
    // No option given OR trying to cd into a .txt or .pdf
    else if (
      cmdOption === undefined ||
      cmdOption.endsWith(".txt") ||
      cmdOption.endsWith(".pdf")
    ) {
      pushTerminalHistory(t("terminal_cd_path_error", language));
    }
    // Directory exist
    else if (
      // TODO more realistic "cd ../" behavior
      folderNameExist ||
      folderNameWithReplaceExist
    ) {
      pushTerminalHistory();
      pathUpdate(findKeyString(cmdOption, language).replace("../", ""));
    }
    // Doesn't exist
    else {
      pushTerminalHistory(
        t("terminal_cd_directory_error", language).replace(
          "$CMDOPTION",
          cmdOption
        )
      );
    }
  };

  // Handle Open
  const handleOpenCmd = (cmdOption) => {
    const extensions = [".txt", ".pdf"];

    // Find the object in data file with the right name
    // "open" accept the name with or without an extension therefore we need to search if it exist with or without an extension
    // We also need to find the key string matching the cmdOption (since user typed the value and not the key)
    const findObj = data[findKeyString(cmdOption, language)]
      ? data[findKeyString(cmdOption, language)]
      : data[findKeyString(cmdOption + extensions[0], language)]
      ? data[findKeyString(cmdOption + extensions[0], language)]
      : data[findKeyString(cmdOption + extensions[1], language)]
      ? data[findKeyString(cmdOption + extensions[1], language)]
      : undefined;

    // No option given
    if (cmdOption === undefined) {
      pushTerminalHistory(t("terminal_open_name_error", language));
    }
    // File exist
    else if (findObj !== undefined) {
      pushTerminalHistory();

      // We open the pdf reader
      if (findObj.name === "cv_name") {
        openPdfWithFile();
      }
      // We open txt reader
      else {
        openFile(filesOpen, findObj, focusFileTab, openTxtWithFile);
      }
    }
    // File doesn't exist
    else {
      pushTerminalHistory(
        t("terminal_open_not_found_error", language).replace(
          "$CMDOPTION",
          cmdOption
        )
      );
    }
  };

  // Handle all the commands
  const handleSubmit = (event) => {
    event.preventDefault();
    // Push cmd typed
    pushCmdHistory(inputValue);
    // Input Trim & Split
    const cmdInput = inputValue.trim().split(" ");
    const cmdName = cmdInput[0];
    const cmdOption = cmdInput[1];

    // Search if command exist
    const userCommand = commands.find((cmd) => cmd.name === inputValue);
    // Command exist (not undefined therefore in the cmd list
    // or 'cd' or 'open' because find wouldn't find the cmd in the list)
    if (userCommand !== undefined || cmdName === "cd" || cmdName === "open") {
      // All the commands
      switch (cmdName !== undefined) {
        // Help
        case cmdName === "help":
          pushTerminalHistory(
            commands.map((cmd) => (
              <div className="help-container" key={cmd.name}>
                <span className="help-name">{cmd.name}</span>|
                <span className="help-description">{cmd.description}</span>
              </div>
            ))
          );
          break;

        // LS
        case cmdName === "ls":
          handleLsCmd();
          break;

        // CD
        case cmdName === "cd":
          handleCdCmd(cmdOption);
          break;

        // OPEN
        case cmdName === "open": {
          handleOpenCmd(cmdOption);
          break;
        }

        // Clear History
        case cmdName === "clear":
          clearTerminalHistory();
          break;

        default:
          break;
      }
    }
    // Command doesn't exist
    else {
      pushTerminalHistory(
        t("terminal_cmd_not_fount_error", language).replace(
          "$INPUTVALUE",
          inputValue
        )
      );
    }
    // Clear input in state & arrowCounter
    updateArrowCounter(0);
    clearInput();
  };

  // When a key is pressed
  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.code === "ArrowUp") {
      if (cmdHistory.length - arrowCounter > 0) {
        updateArrowCounter(arrowCounter + 1);
        terminalInputUpdate(cmdHistory[cmdHistory.length - arrowCounter - 1]);
      }
    }
    if (event.code === "ArrowDown") {
      if (arrowCounter > 0) {
        updateArrowCounter(arrowCounter - 1);
        terminalInputUpdate(cmdHistory[cmdHistory.length - arrowCounter]);
      }
    }
  };

  const handlePath = (path) => {
    return path === "Root" ? "" : `/${t(path, language)}`;
  };

  return (
    <TerminalStyled
      className="frame-container"
      terminal={terminal}
      onClick={handleFocus}
      onKeyUp={handleKeyUp}
      onBlurCapture={handleBlur}
    >
      <FrameHeader identifier="terminal" name="Terminal" />
      <div className="frame-inside terminal-inside">
        <div className="terminal-header">
          {t("terminal_header_text", language)}
        </div>
        {terminalHistory.length > 0 && (
          <>
            {terminalHistory.map((elm) => (
              <div className="terminal-content" key={elm.id}>
                <div className="terminal-prefix">
                  <span className="prefix-name">tony@portfolio</span>:
                  <span className="prefix-path">~{handlePath(elm.path)}</span>
                  <span className="terminal-spacer">$</span>
                  <span className="command-text">{elm.cmd}</span>
                </div>
                <div className="history-text">{elm.text}</div>
              </div>
            ))}
          </>
        )}
        <div className="terminal-content">
          <div className="terminal-prefix">
            <span className="prefix-name">tony@portfolio</span>:
            <span className="prefix-path">~{handlePath(path)}</span>
            <span className="terminal-spacer">$</span>
            <form className="terminal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="terminal-input"
                ref={inputRef}
                value={inputValue}
                onChange={handleChange}
                id="terminal-input"
                name="terminal-input"
              />
            </form>
          </div>
        </div>
      </div>
    </TerminalStyled>
  );
};

Terminal.propTypes = {
  terminal: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  terminalInputUpdate: PropTypes.func.isRequired,
  terminalHistory: PropTypes.array.isRequired,
  commands: PropTypes.array.isRequired,
  clearTerminalHistory: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  pushTerminalHistory: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  pathUpdate: PropTypes.func.isRequired,
  openTxtWithFile: PropTypes.func.isRequired,
  openPdfWithFile: PropTypes.func.isRequired,
  focusFileTab: PropTypes.func.isRequired,
  filesOpen: PropTypes.array.isRequired,
  focusOn: PropTypes.func.isRequired,
  pushCmdHistory: PropTypes.func.isRequired,
  cmdHistory: PropTypes.array.isRequired,
  arrowCounter: PropTypes.number.isRequired,
  updateArrowCounter: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Terminal;
