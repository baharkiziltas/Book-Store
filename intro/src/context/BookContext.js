import {useState} from 'react'
import {createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {

  
    const books = [
        {
            "id":uuidv4(),
            "title":"insancıklar",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg",
            "author":"Dostoyevski",
            "price":30
        },
        {
            "id":uuidv4(),
            "title":"suc ve ceza",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://i.dr.com.tr/cache/500x400-0/originals/0000000222779-1.jpg",
            "author":"Dostoyevski",
            "price":45
        },
        {
            "id":uuidv4(),
            "title":"sinekli bakkal",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://cdn2.dokuzsoft.com/u/sahafsalih/img/b/s/i/sinekli-bakkalaf3188be33ba2094e8ba8d45d09149d4.jpg",
            "author":"Halide Edip Adıvar",
            "price":50
        },
        {
            "id":uuidv4(),
            "title":"suc ve ceza deneme",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://i.dr.com.tr/cache/500x400-0/originals/0000000222779-1.jpg",
            "author":"Dostoyevski",
            "price":45
        }
       

    
    ]
    
     return(
         <BookContext.Provider value ={{books}}>
             {props.children}
         </BookContext.Provider>
     )
}

export default BookContextProvider;