"use client";

import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

type Question = {
    question: string;
    answer?: string;
    id: number;
};

const Faq: React.FC = () => {
    const [showAnswer, setShowAnswer] = useState<Question[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const questions: Question[] = [
        {
            question: 'What is Next.js?',
            answer: "'Next.js is a React framework for building web applications.'",
            id: 0,
        },
        {
            question: 'How does Tailwind CSS work?',
            answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
            id: 1,
        },
        {
            question: 'What is the purpose of getStaticProps?',
            answer: "'getStaticProps is used to fetch data at build time in Next.js.'",
            id: 2,
        },
    ];

    const showMe = (item: Question) => {
        setShowAnswer((prev) => {
            // Toggle the visibility of the answer
            const isAlreadyVisible = prev.some((me) => me.id === item.id);
            if (isAlreadyVisible) {
                return prev.filter((me) => me.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const filteredQuestions = questions.filter(q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto space-y-4 px-2">
            <h1 className="text-4xl text-gray-800">Frequently Asked Questions</h1>
            <p>If you have any future questions, please contact us</p>
            <div>
                <input type="text" value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} placeholder="search question" className="bg-white space-x-2 px-1 py-2 rounded-md border border-gray-800 m-2 w-full text-black" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
                {filteredQuestions.map((item) => (
                    <div
                        onClick={() => showMe(item)}
                        key={item.id}
                        className={`bg-white space-x-2 px-1 py-2 rounded-md border border-gray-800 m-2 ${!item.answer ? 'max-h-[50px]' : ''}`}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-normal text-sm text-black">{item.question}</h1>

                        </div>
                        {!!showAnswer.find((me) => me.id === item.id) && item.answer && (
                            <p className="text-xs leading-[20px] text-gray-500">
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;


