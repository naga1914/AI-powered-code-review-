import React from 'react';
import { FaTrash} from "react-icons/fa";
import "../App";

const DeleteAction = () => {
    const handleDelete = () => {
        // Handle deletion logic here
        alert('Review deleted');
    };

    return (
        <div onClick={handleDelete}>
            <FaTrash style={{ marginRight: "8px", color: "red" }} />
            Delete
        </div>
    );
};

export default DeleteAction;
