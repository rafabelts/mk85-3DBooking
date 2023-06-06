import Image from 'next/image'
import headerLogo from '../../images/logo.png';
import '../pages/styles.css'


export default function SignUpForm() {
    return (
        <section className='flex flex-col'>
            <div className='bg-slate-100 max-w-[500px] w-full mx-auto p-5 px-10 shadow-2xl backdrop-blur-custom rounded-2xl'>
                <header>
                    <h1 className='py-6 text-4xl text-slate-800 font-medium text-center'>
                        Crear cuenta
                    </h1>

                    <p className='text-base pb-4 text-slate-700 font-medium text-center'>
                        Crea tu cuenta para poder reservar el uso de una impresora 3D de MK85.
                    </p>
                </header>


                <div className='flex flex-col py-4 text-slate-800'>
                    <input
                        className='rounded-lg bg-slate-300 mt-2 p-3 focus:outline-none placeholder-slate-600'
                        placeholder='Nombre'
                    />
                </div>

                <div className='flex flex-col py-4 text-slate-800'>
                    <input
                        className='rounded-lg bg-slate-300 mt-2 p-3  focus:outline-none placeholder-slate-600'
                        placeholder='No. Control'
                    />
                </div>

                <div className='flex flex-col py-4 text-slate-800'>
                    <input
                        className='rounded-lg bg-slate-300 mt-2 p-3 focus:outline-none placeholder-slate-600'
                        placeholder='Correo electrónico'
                    />
                </div>

                <div className='flex flex-col py-4 text-slate-800'>
                    <input
                        className='rounded-lg bg-slate-300 mt-2 p-3 focus:outline-none placeholder-slate-600'
                        placeholder='Contraseña'
                    />
                </div>
                <div className='flex flex-col py-4 text-slate-800'>
                    <input
                        className='rounded-lg bg-slate-300 mt-2 p-3 focus:outline-none placeholder-slate-600'
                        placeholder='Confirmar contraseña'
                    />
                </div>

                <div className='flex flex-col pt-10'>
                    <button className='bg-sky-600 p-3 rounded-lg text-background font-bold text-3xl'>
                        Continuar
                    </button>
                </div>
            </div>
        </section >
    );
}
