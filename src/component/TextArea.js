import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';




export default function MaxHeightTextarea(props) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    // console.log(value)
    props.handleInput(value)


    return (
        <TextareaAutosize
            rowsMax={40}
            fullWidth
            aria-label="maximum height"
            placeholder="Insert your text"
            defaultValue="Eva, can I see bees in a cave?"
            onChange={handleChange}
            value={value}
        />
    );
}