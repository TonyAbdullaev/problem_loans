import React, {useState} from 'react';

const UseInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => setValue(e.target.value)

    return {value, onChange};
};

export default UseInput;