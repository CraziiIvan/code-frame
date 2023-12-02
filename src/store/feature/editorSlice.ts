import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TInitialValue = {
    ratio: string
    padding: string
    theme: string
    bar: string
    darkMode: boolean
    radious: number
    language: string
    font: string
}

const initialState: TInitialValue = {
    ratio: "Auto",
    padding: "32",
    theme: "pure",
    bar: "Mac Os",
    darkMode: false,
    radious: 20,
    language: "Javascript",
    font: "Fira Code"
}

export const editorSlice = createSlice({
    name: "ratio",
    initialState,
    reducers: {
        setRatio: (state, action: PayloadAction<string>) => {
            state.ratio = action.payload
        },
        setPadding: (state, action: PayloadAction<string>) => {
            state.padding = action.payload
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload
        },
        setBar: (state, action: PayloadAction<string>) => {
            state.bar = action.payload
        },
        setDarkMode: (state) => {
            state.darkMode = !state.darkMode
        },
        setRadious: (state, action: PayloadAction<number>) => {
            state.radious = action.payload
        },
        setLang: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        },
        setFont: (state, action: PayloadAction<string>) => {
            state.font = action.payload
        },
    }
})

export default editorSlice.reducer
export const { setRatio, setPadding, setTheme, setBar, setDarkMode, setRadious, setLang, setFont } = editorSlice.actions