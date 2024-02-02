import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import SignIn from './components/SignIn'
import SendMoney from './components/SendMoney'
import Profile from "./components/Profile"
import Dashboard from "./components/Dashboard/Dashboard"
// import SideBar from './components'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
