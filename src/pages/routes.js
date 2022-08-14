import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InfoPage } from "./movie-info"
import { ListPage } from "./movie-list"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ListPage />} />
                <Route exact path='/movie/:id' element={<InfoPage />} />
            </Routes>
        </BrowserRouter>
    )
}