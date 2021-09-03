import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="smartphone">
        <img
          src="https://wallshub.net/wp-content/uploads/2021/05/Baby-Groot-Wallpaper.jpg"
          class="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="cam">
          <div className="cam-format"></div>
        </div>
        <div className="relative">
          <div className="notifications">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
          <div className="mt-1.5 h-0.5 w-10 bg-white mr-7 ml-auto"></div>
          <div className="mt-2 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            <p className="mt-3 text-white text-6xl font-extralight">9:41</p>
            <p className="mt-1 text-white text-lg font-light">Sexta-feira, 03 de Setembro</p>
          </div>
          <div className="mt-4 mx-2 relative">
            <div className="h-80 bg-white p-4 bg-opacity-50 backdrop-blur rounded-3xl shadow">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs font-bold">12:21 PM</p>
                  <h2 className="text-lg font-bold">seu resumo matinal</h2>
                </div>
                <span className="bg-gray-500 rounded-full flex justify-center items-center h-8 w-8 text-white">11</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <img
                    src="https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1"
                    alt=""
                    className="rounded-lg"
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">It is a long established fact that a reader</h3>
                  <p class="mt-1 text-xs">It is a long established fact that a reader</p>
                </div>
                <div>
                  <img
                    src="https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1"
                    alt=""
                    className="rounded-lg"
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">It is a long established fact that a reader</h3>
                  <p class="mt-1 text-xs">It is a long established fact that a reader</p>
                </div>
              </div>
              <hr class="mt-4 border-black border-opacity-25" />
              <div className="mt-2 grid grid-cols-3 gap-1 items-end">
                <div className="col-span-2">
                  <h3 className="text-sm font-bold">Mais Atualizações</h3>
                  <p className="mt-0.5 text-xs">Mouse, Keyboard, CPU, Mickey, Goku</p>
                </div>
                <ul className="flex flex-row-reverse -space-x-4 space-x-reverse">
                  <li>
                    <img
                      className="h-8 w-8 rounded-xl object-cover"
                      src="https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 rounded-xl object-cover"
                      src="https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 rounded-xl object-cover"
                      src="https://i0.wp.com/pranchanova.com/wp-content/uploads/2019/12/surfing-2212948_1920.jpg?fit=1020%2C588&ssl=1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
