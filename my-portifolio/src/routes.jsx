/* Rotas para as pages do site */
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home' /* importando as paginas home para rotas */
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Sobre from './pages/Sobre'
import Page404 from './pages/Pages404'
import PageBase from './pages/PageBase'

function AppRoutes () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase />}>
                    <Route index element={ <Home /> } ></Route>
                    <Route path="/projetos" element={ <Projetos /> } ></Route>
                    <Route path="/contatos" element={ <Contatos /> } ></Route>
                    <Route path="/sobre" element={ <Sobre /> } ></Route>
                    <Route path="*" element={ <Page404 /> } ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes