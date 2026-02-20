import { NavLink } from "react-router-dom";

export function Sobre() {

    return (
        <>
            <div className="bg-sky-700 w-full h-[50px] flex items-center justify-between gap-8">
                <NavLink to={'/'}>
                    <h1 className="text-gray-50 ml-8 font-bold font-[Monaco] text-4xl ">
                        Sistema.
                    </h1>
                </NavLink>
                <div className="flex gap-8 mr-8">

                    <NavLink className='text-xs text-cyan-100 underline' to={'/'}> home</NavLink>
                    <NavLink className='text-xs text-cyan-100 underline' to={'/servicos'}> servicos</NavLink>
                    <NavLink className='text-xs text-cyan-100 underline' to={'/portifolio'}> portifolio</NavLink>
                    <NavLink className='text-xs text-cyan-100 underline' to={'/sobre'}>sobre</NavLink>
                    <NavLink className='text-xs text-cyan-100 underline' to={'/contato'}>contato</NavLink>
                </div>
            </div>
            <div className='bg-gray-100 w-full h-[calc(100vh-50px)] flex flex-col items-center justify-center'>
                <div className=' bg-white w-md h-92 flex flex-col rounded-[24px] shadow-lg shadow-gray-300 overflow-hidden '>
                    <div className=" bg-sky-700 w-full h-[12px] flex flex-col"></div>
                        <div className=' bg-amber-100 text-amber-400 w-24 flex items-center justify-center m-8 rounded-lg'>
                            SOBRE
                        </div>
                        <div className=' flex flex-col gap-4'>

                            <div className='mx-8'>
                                <h1 className=' text-5xl'>
                                    👤
                                </h1>
                                <h1 className=' text-3xl'>
                                    Sobre Nós
                                </h1>
                                <p className='text-gray-400'>
                                    Conheça nossa história · About
                                </p>
                            </div>
                            <hr />
                            <div className='ml-8 mr-8'>
                                <p>Somos uma equipe dedicada a criar soluções inovadoras e eficientes. Fundada em 2020, nossa missão é transformar ideias em produtos digitais de alta qualidade, sempre com foco na experiência do usuário e na excelência técnica.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}