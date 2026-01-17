import { create } from 'zustand';

export const languages = [
    {
        code: "en",
        label: "English",
        flag: "https://flagcdn.com/w20/us.png",
    },
    {
        code: "ar",
        label: "العربية",
        flag: "https://flagcdn.com/w20/eg.png",
    },
];

const useLanguageStore = create((set) => ({
    language: "en",
    setLanguage: (code) => set({ language: code }),
}));

export default useLanguageStore;
