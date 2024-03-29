import styles from "./style"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./components"
import { Landing, NoPage, Dashboard, DeleteCookies, SignIn } from "./pages"

import { } from "./assets"

const App = () =>  (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element= {<Landing />} />
        <Route path ="*" element = { <NoPage />} />
        <Route path ="delete" element = { <DeleteCookies /> } />
        <Route path = "sign-in" element = { <SignIn /> } />
        <Route element = { <ProtectedRoute /> }>
          <Route path="dashboard" element = { <Dashboard /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App