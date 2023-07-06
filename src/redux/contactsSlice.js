const { createSlice } = require("@reduxjs/toolkit");

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {items: []},
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload.id)
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;