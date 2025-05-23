import React from 'react';
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{backgroundImage: `url(${assets.homeimage})`}}
      
    >
      <div
  className="bg-black/40 p-8 rounded-2xl shadow-lg text-center max-w-xl"
>
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to BookNest</h1>
  {/* <p className="text-lg md:text-xl mb-6">
    Discover, borrow, and manage books with ease.
  </p> */}
  <a
    href="/login"
    className="inline-block bg-orange-700 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
  >
    Get Started
  </a>
</div>

    </div>
  );
};

export default Home;
