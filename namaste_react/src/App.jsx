import Body from "./Components/Body"
import Header from "./Components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestrauntMenu from "./Components/RestrauntMenu";
import SearchPage from "./Components/SearchBar";

function App() {


  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/restraunts/:resId" element={<RestrauntMenu/>}></Route>

      </Routes>
    </Router>

     
     
    </>
  )
}

export default App
