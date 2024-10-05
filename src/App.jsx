import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/Layout/MainLayout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import FAQ from "./Pages/FAQ/FAQ"
import ServicesPage from "./Pages/FAQ/Services/Services"
import PortfolioPage from "./Pages/Portfolio/Portfolio"
import Blog from "./Pages/Blog/Blog"
import Contact from "./Pages/Contact/Contact"
import Web from "./Pages/Web/Web"
import Busniness from "./Pages/Busniness/Busniness"
import Mobile from "./Pages/Mobile/Mobile"
import Marketing from "./Pages/Marketing/Marketing"
import SEO from "./Pages/SEO/SEO"
import Social from "./Pages/Sochial/Social"
import Writing from "./Pages/Writing/Writing"
import Graphics from "./Pages/Graphics/Graphics"



function App() {
  
  const router = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <Home /> } ,
        { path: '/about', element: <About /> } ,
        { path: '/services', element: <ServicesPage /> } ,
        { path: '/web', element: <Web /> } ,
        { path: '/busniness', element: <Busniness /> } ,
        { path: '/mobile', element: <Mobile /> } ,
        { path: '/marketing', element: <Marketing /> } ,
        { path: '/seo', element: <SEO /> } ,
        { path: '/social', element: <Social /> } ,
        { path: '/writing', element: <Writing /> } ,
        { path: '/graphics', element: <Graphics /> } ,
        { path: '/portfolio', element: <PortfolioPage /> } ,
        { path: '/blog', element: <Blog /> } ,
        { path: '/faq', element: <FAQ /> } ,
        { path: '/contact', element: <Contact /> } ,
      ]
    }
  ])

  return <RouterProvider router={router}>
  </RouterProvider>

}

export default App