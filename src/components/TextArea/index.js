import React from 'react';


const TextArea = ({ text, onChange }) => {
    const onInput = (e) => {
        onChange(e.target.value);
    }

    return (<textarea onInput={onInput} defaultValue={text} />)
};

export default TextArea;