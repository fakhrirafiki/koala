import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';




export default function MaxHeightTextarea() {
    return (
        <TextareaAutosize
            rowsMax={40}
            fullWidth
            aria-label="maximum height"
            placeholder="Insert your text"
            defaultValue="Eva, can I see bees in a cave?"
        />
    );
}