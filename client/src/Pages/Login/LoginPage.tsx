import React, { Dispatch, useState } from 'react';
import '../../tailwind.output.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/AuthActions';
import { Redirect } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.message);
  
  useSelector((state: any) => console.log(state));
  
  const history = useHistory();
  const dispatch = useDispatch<any>();

  const handleEmailChange = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (username && password) {
      dispatch(login(username, password))
        .then(function() {
            history.push("/dashboard");
          })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    console.log(message);
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />; 
  }

    return (
    <div className="min-h-screen flex items-center justify-start bg-gray-50 py-20 px-36 bg-cover">
      <div className="max-w-md w-full space-y-8 shadow-2xl bg-white border-solid border-2 p-8 rounded-2xl">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600">Sign in to your account</h2>
        </div>
        {message && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">{message}</strong>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
          </div>
          )}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm
                `}
                placeholder="Email address"
                onChange={handleEmailChange}
              />
              {/* ${state.isEmailError ? 'border border-red-500' : ''} */}
              {/* {state.isEmailError && <span className="text-xs text-red-500">{state.isEmailErrorText}</span>} */}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm
                `}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              {/* ${state.isPasswordError ? 'border border-red-500' : ''} */}
              {/* {state.isPasswordError && <span className="text-xs text-red-500">Password is required</span>} */}
            </div>
          </div>
          <div>
          <button type="submit" className={`group relative w-full flex justify-center py-2 px-4 
          inline-flex items-center px-4 py-2 border w-full
          border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 
          hover:bg-indigo-500 focus:border-indigo-600 active:bg-indigo-600 transition ease-in-out duration-150 
          cursor-not-allowed`} disabled={loading}>
            { loading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>}
            <span>Login</span>
          </button>
          </div>
          
          <div>
          <a href="/register"><span className="text-indigo-600 underline text-xs hover:text-indigo-300">Register here?</span></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
