import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import "../App";

const ShareAction = () => {
    const handleShare = () => {
        const reviewLink = "https://chatgpt.com/share/"; // The shareable link for the review
        navigator.clipboard.writeText(reviewLink); // Copy to clipboard
        alert('Link copied to clipboard!');
    };

    return (
        <div onClick={handleShare}>
            <FaShareAlt style={{ marginRight: "8px" }} />
            Share
        </div>
    );
};

export default ShareAction;
