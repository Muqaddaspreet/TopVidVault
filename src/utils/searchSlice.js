import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // We keep it similar to the format: "ip": ["iphone", "iphone pro max", "iphone 16"] and so on.
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// Cache:
// time complexity to search in array = O(n)
// time complexity to search in Object = O(1)
// If we use the Map class, then it is even further optimized.
