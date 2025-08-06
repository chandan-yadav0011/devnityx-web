import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Signup from "./components/Signup"
import Profile from "./components/Profile"


function App() {
  

  return (
   <>   
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>

              <Route path="/" element ={<Body/>}>
                  <Route path="/" element={<Feed/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element= {<Profile/>}/>
              </Route>
              
          </Routes>

        </BrowserRouter>
        </Provider>
        {/* <Navbar/>
        <h1 className="text-4xl">Devnityx</h1> */}
   </>
  )
}

export default App
