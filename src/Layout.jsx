import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"
import 'bootstrap/dist/css/bootstrap.css'
import Data from "./store/DataProvider"

const Layout = () => {
    return <>
    <Data>
        <Header/>
            <Outlet />
        <Footer/>
    </Data>

    </>

    

}

export default Layout