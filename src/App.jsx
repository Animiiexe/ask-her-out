import React, { useState } from 'react';
import { motion } from 'framer-motion';


const questions = [
  {
    question: 'Where would you like to go on our date? 🌍',
    bgColor: 'from-purple-500 to-pink-500',
    gif: 'https://media1.tenor.com/m/rkjohpeNZnAAAAAd/mochi-poke-poke-cute-cat.gif', // Example GIF URL
    options: ['Beach 🏖️', 'Restaurant 🍽️', 'Movie 🎬', 'Park 🌳'],
  },
  {
    question: 'What would you like to eat? 🍕',
    bgColor: 'from-yellow-500 to-orange-500',
    gif: 'https://media1.tenor.com/m/qKvWT2UBPCIAAAAd/peach-and-goma-temper-tantrum.gif',
    options: ['Pizza 🍕', 'Sushi 🍣', 'Burgers 🍔', 'Salad 🥗'],
  },
  {
    question: 'What genre of movie would you like to watch? 🎥',
    bgColor: 'from-blue-500 to-green-500',
    gif: 'https://media1.tenor.com/m/s3geBz_c2ogAAAAC/scary.gif',
    options: ['Action 🦸‍♀️', 'Romantic 💕', 'Comedy 😂', 'Horror 👻'],
  },
];


function App() {
  const [herName, setHerName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (herName.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const handleAnswer = (option) => {
    setAnswers((prevAnswers) => [...prevAnswers, option]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnswered(true);
    }
  };

  return (
    <div>
    <div className={`min-h-screen flex items-center justify-center text-white transition-all duration-500 bg-gradient-to-br ${
      isNameSubmitted ? questions[currentQuestion].bgColor : 'from-gray-700 to-gray-900'
    }`}
    >
      {!isNameSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold">Hello! ❤️</h1>
          <p className="text-lg">What’s your name?</p>
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
              className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition "
            >
              Let’s Start!
            </button>
          </form>
        </motion.div>
      ) : !isAnswered ? 
       (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <h1 className="text-4xl font-bold mb-6">Hey {herName}, ❤️</h1>
          <motion.img
            src={questions[currentQuestion].gif}
            alt="GIF"
            className="w-64 h-64 rounded-lg mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-8 text-center"
          >
            {questions[currentQuestion].question}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-white text-pink-500 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Yay! 🎉</h1>
          <p className="text-xl">Here’s what we planned:</p>
          <div className="mt-4 space-y-4 text-lg">
            {answers.map((answer, index) => (
              <p key={index}>
                {questions[index].question} <strong>{answer}</strong>
              </p>
            ))}
          </div>
        </motion.div>
      )}
      </div>
      <div className="flex items-center justify-center bg-black text-white py-4 text-sm">
        <h1>2024 | Designed and Coded with ❤ by Animesh.</h1>
      </div>
    </div>
  );
}

export default App;


