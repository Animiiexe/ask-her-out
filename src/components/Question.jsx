// Questionnaire.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Question = ({ herName, question, handleAnswer }) => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <h1 className="text-4xl font-bold mb-6">Hey {herName}, ❤️</h1>
    <motion.img
      src={question.gif}
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
      {question.question}
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
      {question.options.map((option, index) => (
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
  </div>
);

export default Question;
