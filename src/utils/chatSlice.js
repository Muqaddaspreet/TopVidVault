import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT } from "../Constants";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length === OFFSET_LIVECHAT)
        state.messages.splice(0, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
