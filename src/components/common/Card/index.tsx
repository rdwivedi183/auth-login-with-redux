import React from 'react'
import CardWrapper from './Card.style';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}

export default Card;