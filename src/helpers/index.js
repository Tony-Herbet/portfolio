import React from "react";
import background1 from "assets/images/backgrounds/1.png";
import background2 from "assets/images/backgrounds/2.jpg";
import background3 from "assets/images/backgrounds/3.jpg";
import background4 from "assets/images/backgrounds/4.jpg";

import Experience from "components/TxtReader/Experience";

import WORDING from "../wording/index";

const handleCurrentBackground = (background) => {
  return background === "background1"
    ? background1
    : background === "background2"
    ? background2
    : background === "background3"
    ? background3
    : background === "background4"
    ? background4
    : background1;
};

// Use to handle className and therefore the css
const handleTypeOfFile = (file, language) => {
  if (t(file, language).endsWith(".txt")) {
    return "txt";
  } else if (t(file, language).endsWith(".pdf")) {
    return "pdf";
  } else {
    return "folder";
  }
};

// Short for traduction, since i'll be using it a lot
const t = (key, language) => {
  return WORDING[language][key];
};

// Find the traduction key string from it's value, it's use in terminal to find the cmdOption associated key
const findKeyString = (value, language) => {
  const object = WORDING[language];
  const wordingSelected = Object.keys(object);
  const keyString = wordingSelected.find((key) => object[key] === value);
  return keyString;
};

// dangerouslySetInnerHTML should not be use if possible.
// since files other than experiences are too different, it was getting overly complicated and code became harder to read
// so i settle and use dangerouslySetInnerHTML for them and i've use a component for the experiences
// i've also use dangerouslySetInnerHTML inside experience for the description for the same reason
const txtReaderTextComponent = (name, text, language) => {
  switch (name) {
    case "presentation_name":
    case "competences_name":
    case "diplomas_name":
      return (
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          className="txtReader-text"
        ></div>
      );

    default:
      return <Experience text={text} language={language} />;
  }
};

// Use in Terminal and Folder to open file in txtReader
const openFile = (files, file, focusFileTab, openTxtWithFile) => {
  // Send obj to TxtReader
  // if file is already open just focus on TxtReader and tab
  if (files.find((fileObj) => fileObj === file)) {
    // focusOn("txtReader");
    focusFileTab(file.name);
  }
  // else send file to txtReader and focus tab
  else {
    openTxtWithFile(file);
    focusFileTab(file.name);
  }
};

export {
  handleCurrentBackground,
  handleTypeOfFile,
  t,
  findKeyString,
  txtReaderTextComponent,
  openFile,
};
