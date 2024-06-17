import React, { useState, ChangeEvent,useEffect } from 'react';
import { InputStyles } from './styled'

type InputPropsType = {
    searchTerm: string
    onSearchChange: (value: string) => void
}

const Input = (props: InputPropsType) => {
    const{searchTerm, onSearchChange } = props
    const [inputValue, setInputValue] = useState<string>(searchTerm);
    const debounceDelay = 600;
    const [lastTypedValue, setLastTypedValue] = useState<string>(inputValue);

    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            if (inputValue === lastTypedValue) {
                onSearchChange(inputValue.trim()); 
            }
        }, debounceDelay);
        return () => {
            clearTimeout(debounceSearch);
        };
    }, [inputValue, lastTypedValue, onSearchChange, debounceDelay]);


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setLastTypedValue(value);
    }

    return (
        <div>
            <InputStyles
                type='text'
                placeholder="Search art, artist, work..."
                value={inputValue}
                onChange={onChangeInputHandler}
            />
        </div>
    );
};

export default Input;
