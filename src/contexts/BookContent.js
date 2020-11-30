import React,{createContext,useState,useReducer} from 'react'
import uuid from 'react-uuid'
import { bookReducer } from '../reducers/bookReducer';
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [books,dispatch]=useReducer(bookReducer,[
        
    ]);
    
    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider