import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/home'
import { Contato } from './pages/contato'
import { Portifolio } from './pages/portifolio'
import { Sobre } from './pages/sobre'
import { Servicos } from './pages/serviços'
export function App() {

    return (
        <>
            {/* <div className='bg-sky-700 w-full h-[50px] flex items-center '> */}
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/portifolio' element={<Portifolio />} />
                        <Route path='/servicos' element={<Servicos />} />
                        <Route path='/sobre' element={<Sobre />} />
                        <Route path='/contato' element={<Contato />} />
                    </Routes>
                </BrowserRouter>
            {/* </div> */}
        </>
    )
}