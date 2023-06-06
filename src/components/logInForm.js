import Image from 'next/image'
import headerLogo from '../../images/logo.png';
import '../pages/styles.css'


export default function LogInForm() {
    return (
        <section className='flex flex-col'>
            <div className='bg-slate-100 max-w-[450px] w-full mx-auto p-5 px-10 shadow-2xl backdrop-blur-custom rounded-2xl'>
                <header>
                    <div className='max-w-[100%] flex justify-center items-center'>
                        <Image
                            src={headerLogo}
                            alt='Logo del header'
                            width={400}

                        />
                    </div>

                    <h1 className='py-6 text-4xl text-slate-800 font-medium text-center'>
                        Bienvenido!
                    </h1>

                    <p className='text-base pb-4 text-slate-700 font-medium text-center'>
                        Inicia sesión para poder reservar el uso de una impresora 3D del área de mecatrónica.
                    </p>
                </header>



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

                <div className='flex flex-col pt-10'>
                    <button className='bg-sky-600 p-3 rounded-lg text-background font-bold text-3xl'>
                        Iniciar Sesión
                    </button>
                </div>

                <div className='py-10 flex justify-between'>
                    {/* <p className='flex items-center text-slate-600'>
                        <input className='accent-sky-600 cursor-pointer rounded mr-3 h-4 w-4' type='checkbox' />
                        Recuérdame
                    </p> */}

                    <button className='text-sky-700 font-semibold text-base'>
                        ¿Necesitas ayuda?
                    </button>
                </div>
            </div>
        </section >
    );
}