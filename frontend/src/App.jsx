import styles from "./style"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing, NoPage } from "./pages"

import { } from "./assets"

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element= {<Landing />} />
        <Route path ="*" element = { <NoPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App