import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

function MainLayout() {
    return (
        <>
            <Navbar />
            
            <Outlet />

            <Footer />

        </>
    )
}

export default MainLayout