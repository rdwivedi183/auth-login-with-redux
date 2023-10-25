import React from 'react';
import CustomButton from './ButtonStyle';

interface ButtonProps {
    name: string,
    type: string,
}

const Button: React.FC<ButtonProps> = ({ name, type }) => {
    return (
        <div>
            <CustomButton>{name}</CustomButton>
        </div>
    )
}

export default Button;