import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InfoPage } from "./movie-info"
import { ListPage } from "./movie-list"
import { SearchPage } from "./movie-search"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ListPage />} />
                <Route exact path='/movie/:id' element={<InfoPage />} />
                <Route exact path='/movie/search' element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}