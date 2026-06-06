import { Route, Routes } from "react-router-dom"
import { HondurasPage } from "../pages/HondurasPage"
import { Footer } from "../components"

export const DestinationsRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="honduras" element={<HondurasPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
