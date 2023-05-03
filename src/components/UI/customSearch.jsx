import React from 'react';
import useInput from "../../hooks/useInput";
import {HEADER_SEARCH_LABEL, HEADER_SEARCH_PLACEHOLDER} from "../../constants/constants";

const CustomSearch = ({label, ...props}) => {
    return (
        <div className="flex items-center">
            <label className="w-60 block text-sm font-medium text-gray-900 dark:text-white pr-1">
                {HEADER_SEARCH_LABEL}
            </label>
            <input type="tel" className="max-w-screen-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...props} placeholder={HEADER_SEARCH_PLACEHOLDER} />
        </div>
    );
};

export default CustomSearch;