import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'First post', content: 'Hello' },
  { id: 2, title: 'Second post', content: 'Welcome to Redux' },
  { id: 3, title: 'Third post', content: 'Hello everybody' },
  { id: 4, title: 'Long story', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat nihil ab non voluptates porro nulla facere eos alias numquam, recusandae expedita dolores illo temporibus quis debitis atque aperiam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio, obcaecati, iure voluptates consequuntur quia debitis architecto aperiam voluptatem minima odit dolorem? Labore quae ex adipisci modi ipsa, itaque voluptas?' }
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdd(state, action) {
      state.push(action.payload);
    }
  }
});

export const { postAdd } = postSlice.actions;
export default postSlice.reducer;