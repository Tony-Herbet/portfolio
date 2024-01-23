import { connect } from 'react-redux';

import Folder from 'components/Folder';

import { 
  focusOn,
  openTxtWithFile,
  openPdfWithFile,
} from 'actions/utils';

import { focusFileTab } from 'actions/txtReader';

import { folderElementFocused, updateFolderOpenedData} from 'actions/folder';

// === mapStateToProps
const mapStateToProps = (state) => ({
  folder: state.utils.folder,
  data: state.data,
  filesOpen: state.txtReader.filesOpen,
  elementFocused: state.folder.elementFocused,
  folderOpenedData: state.folder.folderOpenedData,
  language: state.utils.language,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  openTxtWithFile: (file) => {
    dispatch(openTxtWithFile(file));
  },
  openPdfWithFile: () => {
    dispatch(openPdfWithFile());
  },
  focusFileTab: (name) => {
    dispatch(focusFileTab(name));
  },
  focusOn: (identifier) => {
    dispatch(focusOn(identifier));
  },
  folderElementFocused: (name) => {
    dispatch(folderElementFocused(name));
  },
  updateFolderOpenedData: (name) => {
    dispatch(updateFolderOpenedData(name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
