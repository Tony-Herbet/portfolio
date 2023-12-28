export const FOLDER_ELEMENT_FOCUSED = 'FOLDER_ELEMENT_FOCUSED';
export const UPDATE_FOLDER_OPENED_DATA = 'UPDATE_FOLDER_OPENED_DATA';

export const folderElementFocused = (name) => ({
  type: FOLDER_ELEMENT_FOCUSED,
  name,
}); 

export const updateFolderOpenedData = (data) => ({
  type: UPDATE_FOLDER_OPENED_DATA,
  data
})