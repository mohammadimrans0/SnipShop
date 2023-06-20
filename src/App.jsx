import Brands from "./components/Brands"
import Footer from "./shared/Footer"
import Testimonial from "./components/Testimonial"
import TrendingProducts from "./components/TrendingProducts"
import Products from "./components/products"
import Navbar from "./shared/Navbar"
import Banner from "./components/Banner"

function App() {

  return (
    <div className="bg-[#f5f3f3]">
      <Navbar />
      <Banner/>
      <TrendingProducts />
      <Products />
      <Brands/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
