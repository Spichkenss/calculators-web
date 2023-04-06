'use client'
import Button from '@/app/components/calculator/Button'
import { buttons, IButton } from '@/app/components/calculator/buttons'
import Screen from '@/app/components/calculator/Screen'
import { useState } from 'react'

function isInt(value: string) {
    const x = parseFloat(value)
    return (x | 0) === x
}

const Calculator = () => {
    const [expression, setExpression] = useState<string>('0')
    const [result, setResult] = useState<string>('0')
    const [wasSolved, setWasSolved] = useState<boolean>(false)

    const handleClick = (item: IButton): void => {
        if (item.symbol === 'C') {
            clearResultAndExpression()
            return
        }
        if (item.symbol === '%') {
            const res = Number.parseInt(expression) / 100.0
            setResult(res.toString())
            setExpression(expression + '/100')
            return
        }

        if (item.symbol === ',') {
            setExpression(prevState => prevState + '.')
            return;
        }

        if (wasSolved) {
            setExpression(result)
            setWasSolved(false)
        }

        setExpression((prevState) =>
            prevState === '0' ? '' + item.symbol : prevState + item.symbol
        )
    }

    const getResult = (): void => {
        setWasSolved(false)
        const result = eval(expression)

        if (isInt(result)) setResult(result)
        else setResult(eval(result).toFixed(2).toString())
        setWasSolved(true)
    }

    const clearResultAndExpression = () => {
        setExpression('0')
        setResult('0')
    }

    return (
        <div className={'flex gap-3 flex-col max-w-[500px]'}>
            <Screen expression={expression} result={result}/>
            <div className={'grid grid-cols-4 gap-3'}>
                {buttons.map((item: IButton, index) => (
                    <Button
                        key={index}
                        symbol={item.symbol}
                        onClick={() => handleClick(item)}
                    />
                ))}
                <Button
                    symbol={'='}
                    onClick={getResult}
                    className={'bg-orange-500 hover:bg-orange-400 w-[372px]'}
                />
            </div>
        </div>
    )
}
export default Calculator
