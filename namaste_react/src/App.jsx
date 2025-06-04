import Body from "./Components/Body"
import Header from "./Components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./Components/Offers";
import RestrauntMenu from "./Components/RestrauntMenu";

function App() {


  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/restraunts/:resId" element={<RestrauntMenu/>}></Route>
      </Routes>
    </Router>

     
     
    </>
  )
}

export default App
