import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/QuCome.png"
import bgImage from "../../assets/register.jpg"
import { FaEye, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
    const navigate = useNavigate()
    const { user, setUser, createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)

    //Google
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            navigate('/');
            toast.success('Login Successful')
        }
        catch (err) {
            // console.log(err);
            toast.error(err?.message)
        }
    }
    //Register 
    const handleSignUp = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(email, password, name, photo);
        
        if (password.length < 6) {
            toast.error('Password Should be at least 6 characters or longer')
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one Uppercase letter ')
            return;
        }
        if (!/[0-9]/.test(password)) {
            toast.error('Password must contain at least one numeric character');
            return;
        }        
        try {
            const result = await createUser(email, password)
            console.log(result);
            await updateUserProfile(name, photo)
            setUser({ ...user, photoURL: photo, displayName: name })
            navigate('/');
            toast.success('Sign Up Successful')

        }
        catch (err) {
            // console.log(err);
            toast.error(err?.message)

        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-8 md:h-20'
                            src={logo}
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Sign Up And Get Free Account 
                    </p>

                    <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                        <div className='px-4 py-2'>
                            <FaGoogle />
                        </div>

                        <span className='py-3 font-bold'>
                            Sign in with Google
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                required
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                required
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'>
                                    Password
                                </label>
                            </div>
                            <div className=" relative">
                                <div >
                                    <input
                                        id='loggingPassword'
                                        required
                                        autoComplete='current-password'
                                        name='password'
                                        type={showPass ? "text" : "password"}
                                        className=' block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'

                                    />
                                </div>
                                <span onClick={() => { setShowPass(!showPass) }} className=" absolute top-3 right-2">
                                    {
                                        showPass ? <FaEye></FaEye> : <IoEyeOffSharp></IoEyeOffSharp>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs font-semibold text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Register;