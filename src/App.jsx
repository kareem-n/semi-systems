import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Pages/Layout/MainLayout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import FAQ from "./Pages/FAQ/FAQ"
import Contact from "./Pages/ContactUs/Contact"


function App() {
  
  const router = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <Home /> } ,
        { path: '/about', element: <About /> } ,
        { path: '/faq', element: <FAQ /> } ,
        { path: '/contact', element: <Contact /> } ,
      ]
    }
  ])

  return <RouterProvider router={router}>
  </RouterProvider>

}

export default App