import React, {useState} from 'react';
import {Heading} from "../components/UI/Headings";
import {Label} from "../components/UI/Label";
import {Input} from "../components/UI/Inputs";

const Client = () => {
    const [val, set] = useState('');

    return (
        <div>
            <Heading bold="font-extrabold" size="text-2xl">Client</Heading>
            <div className="w-96 flex items-center justify-between">
                <Label>First name</Label>
                <Input 
                    type="text"
                    placeholder="John"
                    required
                />
            </div>
        </div>
    );
};

export default Client;