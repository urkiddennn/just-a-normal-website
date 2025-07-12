import { useState } from "react";

const questions = [
  {
    question: "What is my favorite activity?",
    options: ["Singing", "Dancing", "Flying", "Cooking"],
    correct: "Singing",
  },
  {
    question: "What color is associated with me?",
    options: ["Blue", "Red", "Green", "Yellow"],
    correct: "Blue",
  },
  {
    question: "Where do I come from?",
    options: ["A lamp", "A castle", "A spaceship", "A forest"],
    correct: "A lamp",
  },
];

const App = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex, option) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  const resetGame = () => {
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-6">
        {showResult ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-purple-600 mb-4">
              You got Rick Rolled!
            </h1>
            <p className="text-lg mb-4">
              Your score: {score} out of {questions.length}
            </p>
            <div className="flex justify-center mb-6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xvFZjo5PgG0?si=uX7Sz1xtN4HeOfCj&autoplay=1"
                title="Rick Roll"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={resetGame}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
              Guess Who I Am!
            </h1>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src="https://www.clipartkey.com/mpngs/m/61-618758_genie-aladdin-png-genie-disney.png"
                  alt="Mystery Character"
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                {questions.map((q, index) => (
                  <div key={index} className="mb-6">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                      {q.question}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(index, option)}
                          className={`p-3 rounded-lg border-2 ${
                            answers[index] === option
                              ? "bg-purple-600 text-white border-purple-600"
                              : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                          } transition`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== questions.length}
                  className={`px-6 py-2 rounded-lg w-full ${
                    Object.keys(answers).length === questions.length
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  } transition`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
