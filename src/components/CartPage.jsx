import { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/DataProvider";

const CartPage = () => {
  const {cartItems, addQuantity} = useContext(DataContext);
  const [count, setCount] = useState(0)

  const callQuantity = (pid, act) => {
    addQuantity(pid, act)
    setCount((count) => count += 1)
  }
  

    return <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    <div className="list-group">

      {cartItems.length ? cartItems.map((item) => ( <div key={item[0].id} > <span className="badge bg-secondary mt-2">Qty: {item[0].cartQty} </span> <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true"> <img src= {item[0].images[0]} alt="twbs" width="64" height="64" className="rounded flex-shrink-0"/> <div className="d-flex gap-2 w-100 justify-content-between"> <div> <h6 className="mb-0"> {item[0].title} </h6> </div> </div> <button onClick={() => {callQuantity(item[0].id, 'add') }} className="btn btn-success border" > + </button>  <button onClick={() => {callQuantity(item[0].id, 'subtract') }} className="btn btn-secondary border ms-2" > - </button> <button onClick={() => {callQuantity(item[0].id, 'delete') }} className="btn btn-light text-danger border border-danger border-2 py-1 " > <i className="bi bi-trash-fill"></i> </button> </div> </div> )) : <p>Cart is empty </p> } 
    </div>
  </div>
}

export default CartPage;