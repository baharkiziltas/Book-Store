import React from 'react'
import '../style/Cart.css'
import { useContext } from 'react'
import { useBasket } from '../context/BasketContext'



export default function Cart({ id, imageUrl, title, price }) {

  
  const { items } = useBasket();
  console.log(items)

  return (
    <div>
      <div>{items.length < 1 && (<p>Sepetiniz boş</p>)}

        {items.length > 0 &&
          <>
            <ul>
              {items.map((item, i) => (
                <div key={item.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title"> {item.title}</h5>
                  </div>
                </div>
              ))}
            </ul>
          </>
          }
      </div>
    </div>
  )
}
