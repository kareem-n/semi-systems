import { useEffect } from "react"
import About from "../../Components/About/About"
import Banner from "../../Components/Banner/Banner"
import Faq from "../../Components/Blog/Blog"
import Feedback from "../../Components/FeedBacks/Feedback"
import Footer from "../../Components/Footer/Footer"
import Hero from "../../Components/Hero/Hero"
import Offer from "../../Components/Offer/Offer"
import Portfolio from "../../Components/Portfolio/Portfolio"
import Services from "../../Components/Services/Services"
import WhyUs from "../../Components/WhyUs/WhyUs"
import Blog from "../../Components/Blog/Blog"

function Home() {



  return (
    <div>

      <Hero />
      <Services />
      <About />
      <Offer />
      <WhyUs />
      <Portfolio />
      <Feedback />
      <Blog />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home