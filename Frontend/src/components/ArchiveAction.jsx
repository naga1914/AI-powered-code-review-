import React from 'react';
import { FaArchive} from "react-icons/fa";
import "../App";

const ArchiveAction = () => {
    const handleArchive = () => {
        // Handle archive logic here
        alert('Review archived');
    };

    return (
        <div onClick={handleArchive}>
            <FaArchive style={{ marginRight: "8px" }} />
            Archive
        </div>
    );
};

export default ArchiveAction;
