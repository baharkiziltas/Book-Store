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
            "imageURL":"https://www.kitap365.com/Content/global/images/products/8/8087/insanciklar.jpg",
            "author":"Dostoyevski",
            "price":30,
            "page": 350

        },
        {
            "id":uuidv4(),
            "title":"suc ve ceza",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://www.ayrintiyayinlari.com.tr/u/ayrintiyayinlari/img/c/s/u/suc-ve-ceza-on-kapak-1598944200.jpg",
            "author":"Dostoyevski",
            "price":45,
            "page": 500
        
        },
        {
            "id":uuidv4(),
            "title":"sinekli bakkal",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://cdn2.dokuzsoft.com/u/sahafsalih/img/b/s/i/sinekli-bakkalaf3188be33ba2094e8ba8d45d09149d4.jpg",
            "author":"Halide Edip Adıvar",
            "price":50,
            "page": 750
        },
        {
            "id":uuidv4(),
            "title":"Yalnızız",
            "overview":"lorem ipsum dolor sit",
            "imageURL":"https://yazarokur-kitap.s3.eu-central-1.amazonaws.com/yalniziz.jpg",
            "author":"Peyami Safa",
            "price":45,
            "page": 235
        }
       

    
    ]
    
     return(
         <BookContext.Provider value ={{books}}>
             {props.children}
         </BookContext.Provider>
     )
}

export default BookContextProvider;