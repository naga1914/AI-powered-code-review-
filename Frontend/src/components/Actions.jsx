import React from 'react';
import "../App";
import EllipsisMenu from './EllipsiMenu';
import ShareAction from './ShareAction';
import DeleteAction from './DeleteAction';
import ArchiveAction from './ArchiveAction';

const CodeReviewActions = () => {
    return (
        <div>
            <EllipsisMenu 
                onShare={() => alert("Share action triggered!")}
                onDelete={() => alert("Delete action triggered!")}
                onArchive={() => alert("Archive action triggered!")}
            />
        </div>
    );
};

export default CodeReviewActions;
