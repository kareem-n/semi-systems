import About from "../../Components/About/About"
import Banner from "../../Components/Banner/Banner"
import Feedback from "../../Components/FeedBacks/Feedback"
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
      <Services rocket={true} />
      <About />
      <Offer />
      <WhyUs />
      <Portfolio />
      <Feedback />
      <Blog />
      <Banner />

    </div>
  )
}

export default Home