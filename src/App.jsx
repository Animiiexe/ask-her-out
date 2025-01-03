import React, { useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Summary from './components/Summary';
import Footer from './components/Footer';


const questions = [
  {
    question: 'Where would you like to go on our date? 🌍',
    bgColor: 'from-purple-500 to-pink-500',
    gif: 'https://media1.tenor.com/m/rkjohpeNZnAAAAAd/mochi-poke-poke-cute-cat.gif',
    options: ['Beach 🏖️', 'Restaurant 🍽️', 'Movie 🎬', 'Park 🌳'],
  },
  {
    question: 'What time should I pick you up? 🕒',
    bgColor: 'from-purple-600 to-blue-600',
    gif: 'https://media1.tenor.com/m/R74gdS_SrRYAAAAd/quby-quby-sticker.gif',
    options: ['Morning ☀️', 'Afternoon 🌤️', 'Evening 🌆', 'Night 🌙'],
  },
  {
    question: 'Should I bring flowers or chocolates? 🌹🍫',
    bgColor: 'from-green-400 to-blue-400',
    gif: 'https://media1.tenor.com/m/naWX8j8QzYsAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Flowers 🌹', 'Chocolates 🍫', 'Both 🥰', 'Surprise me! 😋'],
  },
  {
    question: 'What’s your favorite way to relax? 🛋️',
    bgColor: 'from-teal-500 to-green-500',
    gif: 'https://media1.tenor.com/m/5KrBx7BrdgMAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Chatting 💬', 'Listening to Music 🎧', 'Watching Movies 🎥', 'Exploring Outdoors 🌿'],
  },
  {
    question: 'What color should I wear on our date? 🎨',
    bgColor: 'from-pink-500 to-purple-500',
    gif: 'https://media1.tenor.com/m/v9sZ1F-gmWMAAAAd/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Red ❤️', 'Blue 💙', 'Black 🖤', 'Yellow 💛'],
  },
  {
    question: 'What genre of movie would you like to watch? 🎥',
    bgColor: 'from-blue-500 to-green-500',
    gif: 'https://media1.tenor.com/m/s3geBz_c2ogAAAAC/scary.gif',
    options: ['Action 🦸‍♀️', 'Romantic 💕', 'Comedy 😂', 'Horror 👻'],
  },
  {
    question: 'What kind of music should we listen to? 🎶',
    bgColor: 'from-orange-400 to-red-400',
    gif: 'https://media1.tenor.com/m/J8D7WFWX4pIAAAAd/listening-music-musical-notes.gif',
    options: ['Pop 🎤', 'Jazz 🎷', 'Classical 🎻', 'Rock 🎸'],
  },
  {
    question: 'What would you like to eat? 🍕',
    bgColor: 'from-yellow-500 to-orange-500',
    gif: 'https://media1.tenor.com/m/qKvWT2UBPCIAAAAd/peach-and-goma-temper-tantrum.gif',
    options: ['Pizza 🍕', 'Sushi 🍣', 'Burgers 🍔', 'Salad 🥗'],
  },
  {
    question: 'Should we end the day with dessert? 🍰',
    bgColor: 'from-red-500 to-yellow-500',
    gif: 'https://media1.tenor.com/m/42qgq33RCmkAAAAC/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Ice Cream 🍦', 'Cake 🍰', 'Donuts 🍩', 'All of the above! 😍'],
  },
  {
    question: 'Which dessert should I bake for you? 🍪',
    bgColor: 'from-pink-400 to-yellow-400',
    gif: 'https://media1.tenor.com/m/PIGeud5zZBMAAAAd/milk-and-mocha-milk-and-mocha-bear.gif',
    options: ['Cookies 🍪', 'Brownies 🍫', 'Cupcakes 🧁', 'Cheesecake 🍰'],
  },
  {
    question: 'How should we end the night? 🌌',
    bgColor: 'from-blue-800 to-purple-800',
    gif: 'https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif',
    options: ['Stargazing ✨', 'Playing Games 🎮', 'Deep Talks 🗨️', 'Dancing 💃'],
  },
  {
    question: 'What’s the perfect way to say goodbye? 💌',
    bgColor: 'from-red-400 to-pink-400',
    gif: 'https://media.tenor.com/zCpmxNoEU7IAAAAj/milk-and-mocha.gif',
    options: ['A Hug 🤗', 'A Kiss 😘', 'A High-Five ✋', 'A Promise to Meet Again 💕'],
  },
];



function App() {
  const [herName, setHerName] = useState('');
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);

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
    <div className={`min-h-screen flex flex-col text-white bg-gradient-to-br ${isNameSubmitted ? questions[currentQuestion].bgColor : 'from-gray-700 to-gray-900'}`}>
      <div className="flex-grow flex items-center justify-center">
        {!isNameSubmitted ? (
          <Header herName={herName} setHerName={setHerName} handleNameSubmit={handleNameSubmit} />
        ) : !isAnswered ? (
          <Question
            herName={herName}
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Summary questions={questions} answers={answers} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

