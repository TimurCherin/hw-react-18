import React, { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const addGoodFeedback = () => setFeedback((prev) => ({ ...prev, good: prev.good + 1 }));
    const addNeutralFeedback = () => setFeedback((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    const addBadFeedback = () => setFeedback((prev) => ({ ...prev, bad: prev.bad + 1 }));

    return (
        <FeedbackContext.Provider value={{ feedback, addGoodFeedback, addNeutralFeedback, addBadFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};