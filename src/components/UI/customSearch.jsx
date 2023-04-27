import React from 'react';
import useInput from "../../hooks/useInput";
import {HEADER_SEARCH_PLACEHOLDER} from "../../constants/constants";

const CustomSearch = ({label}) => {
    const search = useInput();

    return (
        <div className="custom__input_wrapper">
            <div className='input__label'>
                <p>{label}</p>
            </div>
            <input type="text" className="custom__input" {...search} placeholder={HEADER_SEARCH_PLACEHOLDER} />
        </div>
    );
};

export default CustomSearch;