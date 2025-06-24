import Body from "./Components/Body"
import Header from "./Components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestrauntMenu from "./Components/RestrauntMenu";
import {Provider} from "react-redux"
import appStore from "./Utilities/AppStore";
import Cart from "./Components/Cart";
import Checkout from "./Components/CheckoutPage";
import ThankYou from "./Components/Thankyou";
import Login from "./Components/Login";


function App() {


  return (
    <>
    <Provider store = {appStore} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/restraunts/:resId" element={<RestrauntMenu/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>

    </Provider>

     
     
    </>
  )
}

export default App
