import { createSlice } from '@reduxjs/toolkit';

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    value: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    deleteContact: (state, action) => {
      return {
        value: state.value.filter(contact => contact.id !== action.payload),
      };
    },
    addNewContact: (state, { payload }) => {
      let arrContacts = [...state.value];
      arrContacts.push(payload);
      return { value: arrContacts };
    },
  },
});

export const { deleteContact, addNewContact } = contactsReducer.actions;

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
