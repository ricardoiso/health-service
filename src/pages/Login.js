import React from 'react';
import background from '../images/login.jpg';

function Login() {
  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div className="h-screen w-full">
        <div
          className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-auto"
          style={{ marginTop: "150px" }}
        >

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Por favor ingresa tu contraseña.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
