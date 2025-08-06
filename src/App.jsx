import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./components/Login"


function App() {
  

  return (
   <>
        <BrowserRouter basename="/">
          <Routes>

              <Route path="/" element ={<Body/>}>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/test" element= {<div>Test Page</div>}/>
              </Route>
              
          </Routes>

        </BrowserRouter>
        {/* <Navbar/>
        <h1 className="text-4xl">Devnityx</h1> */}
   </>
  )
}

export default App
