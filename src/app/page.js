import Link from 'next/link';
import LogInForm from '@/components/logInForm';



export default function LogIn() {
  return (
    <main className='grid grid-cols-1 justify-center items-center h-screen'>
      <section>
        <LogInForm />

        <p className='py-6 text-slate-800 font-medium flex text-lg items-center justify-center'>
          ¿Nuevo por aquí?

          <Link href={'/signUp'} className='text-sky-600 font-semibold cursor-pointer text-lg ml-3'>
            Unete ya
          </Link>


        </p>
      </section>
    </main>
  );
}