import React from 'react'
import '../style/Cart.css'
import { useContext } from 'react'
import { useBasket } from '../context/BasketContext'
import { Link } from 'react-router-dom'



export default function Cart(props) {


  const { items } = useBasket();
  console.log(items)

  return (
    <div>
      <div>{items.length < 1 && (<div style={{height: 50, backgroundColor: "orange"}}><p style={{color:"black", fontSize:"large", fontWeight:"bold", textAlign: "center", marginTop:"2%"}}>SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR!</p></div>)}

        {items.length > 0 &&
          <section class="h-100" style={{ backgroundColor: "#eee" }}>
            <div class="container h-100 py-5">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>

                  </div>

                  {items.map((item, i) => (
                    <div key={item.id} class="card rounded-3 mb-4">
                      <div class="card-body p-4">
                        <div class="row d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.imageURL}
                              class="img-fluid rounded-3" alt="" />
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <p class="lead fw-normal mb-2">{item.title}</p>
                            <p><span class="text-muted">Sayfa: </span>{item.page}<span class="text-muted"> </span></p>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                            >
                              <i class="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value="1" type="number"
                              class="form-control form-control-sm" />

                            <button class="btn btn-link px-2">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">{item.price} TL</h5>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}



                  <div class="card">
                    <div class="card-body">
                      <button type="button" class="btn btn-warning btn-block btn-lg">Sepeti Onayla</button>

                      <button type="button" style={{ marginLeft: "1%" }} class="btn btn-warning btn-block btn-lg"><Link to="/" style={{ color: "black", textDecoration: "none" }} >Alışverişe Devam Et</Link></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>


        }

      </div>
    </div>









  )
}


