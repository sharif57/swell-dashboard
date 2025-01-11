import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../features/userSlice'; // Adjust the path
import { authApi } from '../features/authSlice';
import { PolicyApi } from '../features/PolicySlice';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // Add userApi reducer
    [authApi.reducerPath]: authApi.reducer, // Add authApi reducer
    [PolicyApi.reducerPath]: PolicyApi.reducer, // Add authApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, authApi.middleware, PolicyApi.middleware), 
});

export default store;
