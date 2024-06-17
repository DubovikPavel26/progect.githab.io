import React, { useState, ChangeEvent } from 'react';
import { InputStyles } from './styled'

type InputPropsType = {
    searchTerm: string
    onSearchChange: (value: string) => void
}

const Input = (props: InputPropsType) => {
    const{searchTerm, onSearchChange } = props
    const [inputValue, setInputValue] = useState<string>(searchTerm);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        
        if (value.trim() === '') {
            setInputValue('')
            return;
        }
        onSearchChange(value);
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
