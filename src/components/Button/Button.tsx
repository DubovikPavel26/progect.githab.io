import React from 'react';
import { SortButton } from './styled';

type ButtonPropsType = {
    name: string
    onClick: () => void
}
const Button = (props: ButtonPropsType) => {

    const {name, onClick} = props
    
    return (
        <SortButton onClick={onClick}>{name}</SortButton>
    );
};

export default Button;