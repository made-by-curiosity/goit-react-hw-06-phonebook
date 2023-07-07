import { createSlice } from '@reduxjs/toolkit';
import storage from 'utils/localStorageAPI';

const STORAGE_KEY = 'phonebook_contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: storage.load(STORAGE_KEY) || [],
  reducers: {
    addContact(state, action) {
      state.unshift(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
