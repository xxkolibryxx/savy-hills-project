type LanguageSelector = (state: { language: { value: string } }) => string;

export const selectLanguage: LanguageSelector = (state) => state.language.value;
