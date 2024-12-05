import React, { useContext } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import { Wrap, List } from "./ExpressoFeedback.styled";

export const Options = () => {
    const { addGoodFeedback, addNeutralFeedback, addBadFeedback } = useContext(FeedbackContext);

    return (
        <Wrap>
            <List>
                <h2>Please leave feedback</h2>
                <li>
                    <button onClick={addGoodFeedback}>Good</button>
                    <button onClick={addNeutralFeedback}>Neutral</button>
                    <button onClick={addBadFeedback}>Bad</button>
                </li>
            </List>
        </Wrap>
    );
};