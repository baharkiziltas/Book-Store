import React from 'react'
import { BookContext } from '../context/BookContext'
import { useContext } from 'react'
import { useParams,} from 'react-router-dom'

export default function ProductDetail({id,title,imageURL,author,price }) {
    

   const {product_id} = useParams();
   console.log(product_id)
   const detail = product_id.id; 

    const { books, items } = useContext(BookContext);

    const findDetailItem = books.find((element, detail) => element.id === product_id);

     return(
     <div>{findDetailItem ? "geldi" : product_id }</div>
     )   
                    
                    
                       
                    
                    
    };     
                
                
            

    
    
       

      
    
    

     


  



