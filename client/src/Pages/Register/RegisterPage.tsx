import React, { useState } from 'react';
import '../../tailwind.output.css';

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    return (
    <div className="min-h-screen flex items-center justify-start bg-gray-50 px-36 bg-cover">
      <div className="max-w-md w-full space-y-8 shadow-2xl bg-white border-solid border-2 p-8 rounded-2xl">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600">Register yourself here</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm
                `}
                placeholder="Username"
                onChange={handleUsernameChange}
              />
              {/* ${state.isUsernameError ? 'border border-red-500' : ''}
              {state.isUsernameError && <span className="text-xs text-red-500">Username is required</span>} */}
            </div>
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
              {/* ${state.isEmailError ? 'border border-red-500' : ''}
              {state.isEmailError && <span className="text-xs text-red-500">{state.isEmailErrorText}</span>} */}
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
              {/* ${state.isPasswordError ? 'border border-red-500' : ''}
              {state.isPasswordError && <span className="text-xs text-red-500">Password is required</span>} */}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="cnfpassword"
                type="password"
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm
                `}
                placeholder="Confirm Password"
                onChange={handleConfirmPasswordChange}
              />
              {/* ${state.isConfirmPasswordError ? 'border border-red-500' : ''}
              {state.isConfirmPasswordError && <span className="text-xs text-red-500">{state.isPasswordErrorText}</span>} */}
            </div>
          </div>
          <div>
          {/* ${state.isButtonDisabled ? 'btn-opacity' : 'btn-opacity-none'} */}
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border 
              border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 
              `}
              disabled={loading}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
              Register
            </button>
          </div>
          <div>
          <a href="/login"><span className="text-indigo-600 underline text-xs hover:text-indigo-300">Back to Login</span></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
