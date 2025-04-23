import React, { useState } from 'react'

const questions = [
    { code: "console.log( 2 + '2' );", answer: "22" },
    { code: "console.log( typeof NaN );", answer: "number" },
    { code: "console.log( 1 == '1' );", answer: "true" },
    { code: "console.log( [] +  [] );", answer: '""' },
    { code: "console.log( 1 +  true );", answer: '2' },
];


export default function GuessOutput() {
    const [index, setIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState(null);

    const checkAnswer = () => {
        if (userAnswer.trim() === questions[index].answer) {
            setResult("Correct");
        } else {
            setResult(`Incorrect! Expected: ${questions[index].answer}`);
        }
    };

    const nextQuestion = () => {
        setIndex((prev) => (prev + 1) % questions.length);
        setUserAnswer("");
        setResult(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-3">Find the Output:</h2>
                <pre className="bg-gray-200 p-3 rounded-md">{questions[index].code}</pre> {/*  this tell me Question*/}
                <input
                    type="text"
                    className="w-full p-2 border mt-3 rounded-md"
                    placeholder="Enter your answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md w-full"
                    onClick={checkAnswer}
                >
                    Check Answer
                </button>
                {result && <p className="mt-3 font-semibold">{result}</p>}
                <button
                    className="bg-gray-500 text-white px-4 py-2 mt-3 rounded-md w-full"
                    onClick={nextQuestion}
                >
                    Next Question
                </button>
            </div>
        </div>
    );
}
