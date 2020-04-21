export const WIDTH_CHANGE = 'WIDTH_CHANGE';
export const TOGGLE_POPUP = 'TOGGLE_POPUP';

export const widthChange = (data) => {
  return { type: WIDTH_CHANGE, data };
};
export const togglePopup = (ids) => {
  return { type: TOGGLE_POPUP, ids };
};
