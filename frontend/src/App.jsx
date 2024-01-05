import styles from "./style"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./components"
import { Landing, NoPage, Dashboard, DeleteCookies } from "./pages"
import { useGoogleLogin } from "@react-oauth/google"
import Cookies from "js-cookie"

import { } from "./assets"

const App = () =>  (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element= {<Landing />} />
        <Route path ="*" element = { <NoPage />} />
        <Route path ="delete" element = { <DeleteCookies /> } />
        <Route element = { <ProtectedRoute /> }>
          <Route path="dashboard" element = { <Dashboard /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App