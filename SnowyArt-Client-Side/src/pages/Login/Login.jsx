import { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/banner/img9.jpg';
// Sweetalert import
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const Login = () => {
  // Naviget, login done then go to Home
  const naviget = useNavigate();
  const location = useLocation();
  console.log(location);
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);

  const {
    twitterLogin,
    gitHubLogin,
    googleLogin,
    emlPassLogin,
    isLoading,
    userDta,
    setIsLoading,
  } = useContext(ContextAuth);

  console.log(userDta);
  useEffect(() => {
    if (userDta) {
      naviget(location?.state ? location.state : '/');
      // console.log('login to home');
    }
  }, [naviget, userDta, location.state]);

  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    // console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (pass.length < 6) {
      setPassErr('Please enter a valid password.');
      return;
    }
    // Email password Login
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
        timer: 1500,
      });
      naviget(location?.state ? location.state : '/');
      return;
    } else {
      emlPassLogin(email, pass)
        .then((res) => {
          console.log(res.user);
          Swal.fire({
            title: 'Good job!',
            text: 'Your account has been successfully logged in.',
            icon: 'success',
            timer: 2000,
          });
          naviget(location?.state ? location.state : '/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          setIsLoading(false);
          Swal.fire({
            title: 'Oops...!',
            text: `Sorry, unable to login to this account. Please login with correct email and password.`,
            icon: 'error',
            // timer: 1500,
          });
        });
    }
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    socialLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
        naviget(location?.state ? location.state : '/');
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div className="">
      <Helmet>
        <title>Login | SnowyArt</title>
      </Helmet>
      {/* Top Banner Img */}
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
          <div className="absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl text-white font-bold text-center top-28 md:top-36 w-full italic">
            <Link to={'/'}>
              <button className="italic">Home /</button>
            </Link>{' '}
            <Link to={'/login'}>
              <button className="italic">Login</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div
        data-aos="zoom-in"
        className="w-full mt-2 md:max-w-[720px] mx-auto rounded-lg p-5"
      >
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-secondColor border-redLi inline-block pr-3">
          Login Your Account
        </h1>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div>
            <label
              className={
                emailErr
                  ? 'input input-bordered flex items-center gap-2 border-red-500'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <MdEmail />
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            {emailErr && (
              <p className="text-sm text-red-500 italic pt-1">{emailErr}</p>
            )}
          </div>
          <div>
            <label className="relative input input-bordered flex items-center gap-2">
              <RiLockPasswordFill />
              <input
                type={eye ? 'text' : 'password'}
                className="grow"
                name="password"
                placeholder="Password"
              />
              <div
                onClick={() => setEye(!eye)}
                className="cursor-pointer text-xl absolute right-3"
              >
                {eye ? <FaEye /> : <FaEyeSlash />}
              </div>
            </label>{' '}
            {passErr && (
              <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="cursor-pointer form-checkbox text-redLi focus:ring-redLi h-4 w-4"
              />{' '}
              <label>Remember me</label>
            </div>

            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
          {/* <input type="submit" value="Login" /> */}
          <button className="w-full py-1 px-4 rounded-md text-center text-white bg-firstColor font-bold border-firstColor hover:text-firstColor active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-primaryColor">
            Login
          </button>
        </form>{' '}
        <p className="pt-3">
          {`Don't have an account? `}
          <Link
            to={'/register'}
            className="underline text-secondColor font-semibold"
          >
            Create Account
          </Link>
        </p>
        <div className="divider before:bg-redLi after:bg-redLi divider-secondary">
          Or
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => socialLogin(googleLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 border-redLi"
          >
            <span className=" text-2xl">
              <FcGoogle />
            </span>
            Login With Google
          </button>
          <button
            onClick={() => socialLogin(gitHubLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-black text-2xl">
              <FaGithub />
            </span>
            Login With GitHub
          </button>
          <button
            onClick={() => socialLogin(twitterLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-400-900/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-blue-400 text-2xl">
              <FaTwitter />
            </span>
            Login With Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
