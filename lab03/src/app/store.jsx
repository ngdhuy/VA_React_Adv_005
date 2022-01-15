import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterReducer';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})w