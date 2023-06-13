import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
//
import { contactsDBReducer } from './contactsDB/contactsDBSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './authService/authSlice';
//

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'phonebook_auth_',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contactsDBCombine: contactsDBReducer,
    filterCombine: filterReducer,
    authCombine: authPersistedReducer,
  },
  // лечит ошибки в консоли
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
