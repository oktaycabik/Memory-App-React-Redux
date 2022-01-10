import {configureStore} from "@reduxjs/toolkit" 
import  memorySlice  from "./memoryGame/memoryGameSlice"
export const store =configureStore({
    reducer:{
        memory:memorySlice
    }
})