import { FC } from 'react'

interface Props {
    symbol: string
    onClick: () => void
    className?: string
}

const Button: FC<Props> = ({ symbol, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`p-3 bg-white text-8xl text-center rounded cursor-pointer hover:bg-gray-300 select-none ${className}`}
        >
            {symbol}
        </button>
    )
}

export default Button
