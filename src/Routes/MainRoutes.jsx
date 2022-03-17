import { Route, Routes } from "react-router-dom"
import { About } from "../components/About"
import { Home } from "../components/Home"
import { MoviesDashboard } from "../components/MoviesDashboard"

export const MainRoutes = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<MoviesDashboard />} />
               
        </Routes>
        </>
    )
}