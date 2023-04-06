import { FC } from 'react'

interface Props {
    expression: string
    result: string
}

const Screen: FC<Props> = ({ expression, result }) => {
    return (
        <div
            className={
                'flex flex-col items-end justify-end ale bg-gray-800 rounded py-4 px-2 select-none max-w-full overflow-ellipsis overflow-hidden whitespace-nowrap'
            }
        >
            <div className={'text-gray-500 font-normal text-2xl'}>
                {expression}
            </div>
            <div className={'text-white font-bold text-8xl'}>{result}</div>
        </div>
    )
}

export default Screen
