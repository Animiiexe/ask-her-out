
import React from 'react';

const Header = ({ herName, setHerName, handleNameSubmit }) => (
  <div className="text-center space-y-6">
    <h1 className="text-4xl font-bold">Hello! ❤️</h1>
    <p className="text-lg ">What’s your name?</p>
    <form onSubmit={handleNameSubmit} className="space-y-4">
      <input
        type="text"
        value={herName}
        onChange={(e) => setHerName(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 mr-4 rounded-lg text-black text-center"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition"
      >
        Let’s Start!
      </button>
    </form>
  </div>
);

export default Header;
