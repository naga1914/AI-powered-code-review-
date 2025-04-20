import React, { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa'; // Importing the three-dot icon
import ShareAction from './ShareAction'; // Import Share action component
import DeleteAction from './DeleteAction'; // Import Delete action component
import ArchiveAction from './ArchiveAction'; // Import Archive action component
import "../App";

const EllipsisMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle the visibility of the menu
    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <div className="code-review-actions">
            <button onClick={toggleMenu} className="ellipsis-button">
                <FaEllipsisH size={20} />
            </button>

            {showMenu && (
                <div className="menu">
                    <ul>
                        <li>
                            <ShareAction />
                        </li>
                        <li>
                            <DeleteAction />
                        </li>
                        <li>
                            <ArchiveAction />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EllipsisMenu;
