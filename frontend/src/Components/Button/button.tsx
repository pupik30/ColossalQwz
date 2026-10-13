import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonProps {
    text: string;
    variant?: 'default' | 'purple' | 'border' | 'white';
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    to?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'default',
    bgColor,
    textColor,
    onClick,
    to,
}) => {
    const variantClass = styles[variant] || '';
    const buttonClasses = `${styles.btn} ${variantClass}`.trim();

    const customStyles = {
        '--bg-color': bgColor,
        '--text-color': textColor,
    } as React.CSSProperties;

    if (to) {
        return (
            <Link to={to} className={buttonClasses} style={customStyles}>
                {text}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} style={customStyles} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
