import { createSlice } from "@reduxjs/toolkit";

let initialState: any = {
  properties: null,
  property: null,
};
if (typeof window !== "undefined") {
  if (localStorage.getItem("investay_property")) {
    initialState.property = JSON.parse(
      localStorage.getItem("investay_property")
    );
  } else {
    initialState.property = null;
  }
}

export const getPropertiesReducer = createSlice({
  name: "getProperties",
  initialState,
  reducers: {
    set_getProperties: (state, action) => {
      console.log("get properties action----", action.payload);
      state = { ...state, properties: action.payload };
      return state;
    },
    setProperty: (state, action) => {
      console.log(state);
      state = { ...state, property: action.payload };
      return state;
    },
  },
});

export const { set_getProperties, setProperty } = getPropertiesReducer.actions;
export default getPropertiesReducer.reducer;
