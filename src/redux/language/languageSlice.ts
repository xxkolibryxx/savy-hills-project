import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: 'ru'
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
