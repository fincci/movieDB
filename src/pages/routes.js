import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MoviePage } from "./movie-info"
import { ListPage } from "./movie-list"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ListPage />} />
                <Route exact path='/movie/:title' element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    )
}