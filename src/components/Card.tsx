import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primery= "primery"
}

interface CardProps {
    width?: string,
    height?: string,
    variant: CardVariant,
    children?: React.ReactNode,
    onclick: (num: number) => void
}
const Card: FC<CardProps> =
    ({
         width,
         height,
        children,
        variant,
         onclick
    }) => {
    const [state, setState] = useState(0)
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primery ? 'lightgray' : ''
        }}
        onClick={() => onclick(state)}
        >
            {children}
        </div>
    );
};

export default Card;