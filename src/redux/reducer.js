export const InitialState = {
  headerBg: false,
  hamburgerOpen: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_HEADER_BG":
      return {
        ...state,
        headerBg: action.payload,
      };
    case "SET_MOBILE_MENU":
      return {
        ...state,
        hamburgerOpen: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
