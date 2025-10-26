import { MouseEventHandler } from 'react';

type ButtonType = {
    buttonType?: "primary" | "success" | "warning" | "error" | "disabled";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

export const Button = ({ buttonType, handleClick, children }: ButtonType) => {
    const typeClass = buttonType ? `is-${buttonType}` : '';

    return (
        <div>
            <button
                type="button"
                className={`nes-btn ${typeClass}`}
                onClick={handleClick}
            >
                {children}
            </button>
        </div>
    )
}