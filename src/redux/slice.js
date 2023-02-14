import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, deleteContact } from './contactsOperations';

const pendingFunc = state => {
  state.isLoading = true;
};

const rejectedFunc = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: pendingFunc,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    },
    [getContacts.rejected]: rejectedFunc,
    [addContact.pending]: pendingFunc,
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
      state.error = null;
    },
    [addContact.rejected]: rejectedFunc,
    [deleteContact.pending]: pendingFunc,
    [deleteContact.fulfilled]: (state, { payload }) => {
      let contacts = state.items.filter(contact => contact.id !== payload.id);
      state.isLoading = false;
      state.error = null;
      state.items = contacts;
    },
    [deleteContact.rejected]: rejectedFunc,
  },
});

export const filterReducer = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    handleChangeFilter: (state, action) => {
      return { value: action.payload };
    },
  },
});

export const { handleChangeFilter } = filterReducer.actions;
