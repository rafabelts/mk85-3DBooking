import './styles.css'
import SignUpForm from '@/components/signUpForm.js';


export default function SignUp() {
    return (

        <main className='grid grid-cols-1  justify-center items-center h-screen'>
            <section>
                <SignUpForm />

            </section>

        </main>
    );
}