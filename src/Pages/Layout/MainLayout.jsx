import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { FaCopyright } from "react-icons/fa"

function MainLayout() {
    return (
        <>
            <Navbar />
            
            <Outlet />

            <Footer />
            <div className="text-center flex items-center gap-x-3  justify-center py-3 capitalize text-sm text-gray-500">
                <FaCopyright size={20} />
                 all right reversed copy right
            </div>

        </>
    )
}

export default MainLayout