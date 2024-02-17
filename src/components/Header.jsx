import { useContext, useEffect, useState } from "react";
import { DataContext } from "../store/DataProvider";
import { Link, NavLink } from "react-router-dom";
import Styles from './Header.module.css'

const Header = () => {
  const {productCategories, categoriesFetch, cartItems} = useContext(DataContext);

  useEffect(() => {
    categoriesFetch()
  }, [])
  
  const [hoverCategory, setHoverCategory] = useState(false);

  const handleCatHover = (msg) => {
    if (msg === 'entered') {
      setHoverCategory(true);
    } else if (msg === 'left') {
      setHoverCategory(false);
    };
  }

  return (
    <div onMouseLeave={() => {handleCatHover('left')}} className="container-fluid bg-secondary p-3 mt-1 bg-opacity-10">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-6 align-middle p-1">
          <h4 className="mb-0 ms-2"> <i className="bi bi-shop-window"></i> Shop  </h4>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="d-flex justify-content-center">
          <NavLink to='/' className= {({isActive}) => `p-2 list-group-item rounded ${isActive && 'bg-secondary bg-opacity-25'}`} >Home</NavLink>



        {/* Categories Section */}

          <div onMouseEnter={() => handleCatHover('entered')} className={`p-2 list-group-item position-relative ms-1 ${Styles.pointer}`} >

            Categories <span className="dropdown-toggle align-middle" ></span>


              <div className={` ${Styles.categorydim} list-group position-absolute mt-1 ms-3 text-center  ${!hoverCategory && 'd-none'}`}>

                {productCategories.map((category) => (
                  <NavLink key={category} to= {`products/${category}`} className={({isActive}) => `list-group-item list-group-item-action ${isActive && 'active'}` }  > {category} </NavLink>
                ))}

              </div>
              {/* remove */}
          </div>

          {/* End of categories section */}


        </div>
        </div>
        
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="row justify-content-center">
            <div className="col align-middle">
              <button className="btn btn-primary" >Login</button>
              <button className="btn btn-light ms-2" >Signup</button>
            </div>

            <div className="col mt-1 ">
              <Link to={'cart'} >  <i className="bi bi-bag-fill bg-primary text-info fs-5 bg-opacity-10 p-1 px-2 rounded align-middle position-relative ">  
                <span className= {`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success ${cartItems.length === 0 && 'd-none'} `}> {cartItems.length} </span>
              </i> </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
