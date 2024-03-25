import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' // Importa thunk correctamente
import userReducer from './users/userSlice'
import contentReducer from './content/contentSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;