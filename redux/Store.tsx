import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Slice';
import {ContactApi} from '../apicall/ContactApi';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    [ContactApi.reducerPath]: ContactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ContactApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
