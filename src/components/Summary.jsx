// Summary.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Summary = ({ questions, answers }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
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
);

export default Summary;
