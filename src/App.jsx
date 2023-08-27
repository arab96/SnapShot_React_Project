import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return <div className="text-4xl">
    <Header />
    <Outlet />
  </div>
}

export default App
