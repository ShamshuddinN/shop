import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useContext, useEffect } from "react";
import { DataContext } from "../store/DataProvider";

const ProductsPage = () => {
    const {productname} = useParams()

    const {prodBycategory, dyfettch, makeCart} = useContext(DataContext)

    useEffect(() => {
        
        dyfettch(productname);
    }, [productname])

    const sendProduct = (pid) => {
        let targetProduct = prodBycategory.filter(prod => prod.id === pid);
        targetProduct[0].cartQty = 1
        makeCart(targetProduct);
    }


    return <div className="container-fluid" >
        <div className="row">
            <h2 className="text-center p-3 text-primary bg-warning bg-opacity-50" >{productname}</h2>
        </div>
        {!prodBycategory && <center className="p-2 mt-3 mb-3" ><Loading></Loading></center>} 

        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-sm-12 col-12 d-flex flex-wrap justify-content-center">
                {prodBycategory && prodBycategory.map((pr) => (<div key={pr.id} className="card m-3" style={{ width: "18rem"  }}> <img src= {pr.images[0]}  className="card-img-to" alt={pr.title} /> <div className="card-body mt-3"> <h5 className="card-title">{pr.title}</h5> <p className="card-text"> {pr.description} </p> <button className="btn btn-success" >Buy Now</button> <button onClick={() => {sendProduct(pr.id)}} className="btn btn-primary" >Add to Cart</button> </div> </div>))}
            </div>
        </div>
    </div>
}

export default ProductsPage;