import { createSlice } from "@reduxjs/toolkit";

export const memorySlice = createSlice({
  name: "memory",
  initialState: {
    items: [
      { id: 1, name: "vue", stat: "" },
      { id: 2, name: "vue", stat: "" },
      { id: 3, name: "angular2", stat: "" },
      { id: 4, name: "angular2", stat: "" },
      { id: 5, name: "react", stat: "" },
      { id: 6, name: "react", stat: "" },
      { id: 7, name: "grunt", stat: "" },
      { id: 8, name: "grunt", stat: "" },
      { id: 9, name: "phantomjs", stat: "" },
      { id: 10, name: "phantomjs", stat: "" },
      { id: 11, name: "ember", stat: "" },
      { id: 12, name: "ember", stat: "" },
      { id: 13, name: "babel", stat: "" },
      { id: 14, name: "babel", stat: "" },
      { id: 15, name: "ionic", stat: "" },
      { id: 16, name: "ionic", stat: "" },
      { id: 17, name: "gulp", stat: "" },
      { id: 18, name: "gulp", stat: "" },
      { id: 19, name: "meteor", stat: "" },
      { id: 20, name: "meteor", stat: "" },
      { id: 21, name: "yeoman", stat: "" },
      { id: 22, name: "yeoman", stat: "" },
      { id: 23, name: "yarn", stat: "" },
      { id: 24, name: "yarn", stat: "" },
      { id: 25, name: "nodejs", stat: "" },
      { id: 26, name: "nodejs", stat: "" },
      { id: 27, name: "bower", stat: "" },
      { id: 28, name: "bower", stat: "" },
      { id: 29, name: "browserify", stat: "" },
      { id: 30, name: "browserify", stat: "" },
    ].sort(() => Math.random() - 0.5),
    openItems: [],
    openCopyItems: [],

    score: 0,
  },
  reducers: {
    openCard: (state, data) => {
      if (state.openItems.length === 0) {
        state.openItems.push(data.payload);
        let { id: openid } = state.openItems[0];
        const index = state.items.findIndex((item) => item.id === openid);
        state.items[index].stat = "active";
      } else if (state.openItems.length === 1) {
        state.openCopyItems.push(data.payload);
        if (state.openItems[0].name === state.openCopyItems[0].name) {
          let { id: openid } = state.openItems[0];
          let { id: copyid } = state.openCopyItems[0];
          const index = state.items.findIndex((item) => item.id === openid);

          const Copyindex = state.items.findIndex((item) => item.id === copyid);
          state.items[index].stat = "correct";
          state.items[Copyindex].stat = "correct";
          state.score += 50;
          state.openItems = [];

          state.openCopyItems = [];
        } else {
          let { id: openid } = state.openItems[0];
          let { id: copyid } = state.openCopyItems[0];
          const index = state.items.findIndex((item) => item.id === openid);

          const Copyindex = state.items.findIndex((item) => item.id === copyid);
          state.items[index].stat = "wrong";
          state.items[Copyindex].stat = "wrong";
          state.score -= 10;
          state.items = [...state.items];
        }
      }
    },

    closeCard: (state) => {
      if (state.openItems.length === 1 && state.openCopyItems.length === 1) {
        const { id: openid } = state.openItems[0];
        const { id: copyid } = state.openCopyItems[0];

        const index = state.items.findIndex((item) => item.id === openid);

        const Copyindex = state.items.findIndex((item) => item.id === copyid);

        state.items[index].stat = "";
        state.items[Copyindex].stat = "";

        state.openItems = [];
        state.openCopyItems = [];
      }
    },
    resetCard: (state, data) => {
      state.items = [...state.items].sort(() => Math.random() - 0.5);

      const index = state.items.findIndex((item) => item.stat === "correct");

      
      
     
      if (index!==-1) {
        state.items[index].stat = "";
        
        state.score = 0;
      }
    },
  },
});

export default memorySlice.reducer;
export const { openCard } = memorySlice.actions;
export const { resetCard } = memorySlice.actions;
export const { closeCard } = memorySlice.actions;
