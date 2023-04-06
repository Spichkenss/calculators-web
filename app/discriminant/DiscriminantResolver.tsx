'use client'
import { ChangeEvent, useState } from 'react'

const DisicriminantResolver = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    const [c, setC] = useState<number>(0)

    const [root1, setRoot1] = useState<string>('0')
    const [root2, setRoot2] = useState<string>('0')

    const [twoRoots, setTwoRoots] = useState<boolean>(true)

    const getResult = (): void => {
        let discriminant = b * b - 4 * a * c

        console.log(a, b, c)

        if (discriminant > 0) {
            const r1 = (-b + Math.sqrt(discriminant)) / (2 * a)
            const r2 = (-b - Math.sqrt(discriminant)) / (2 * a)
            setTwoRoots(true)
            setRoot1(r1.toString())
            setRoot2(r2.toString())
        } else if (discriminant === 0) {
            const r = -b / (2 * a)
            setTwoRoots(false)
            setRoot1(r.toString())
        } else {
            const r1 = (-b / (2 * a)).toFixed(2)
            const r2 = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2)
            setTwoRoots(true)
            setRoot1(r1)
            setRoot2(r2)
        }
    }

    return (
        <div className={'flex flex-col gap-3'}>
            <h1 className={'text-white font-bold text-2xl'}>
                Введите коэфициэнты квадратного уравнения
            </h1>
            <input
                type={'number'}
                placeholder={'a'}
                className={'p-2 text-bold text-2xl'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setA(parseInt(e.target.value))
                }
            />
            <input
                type={'number'}
                placeholder={'b'}
                className={'p-2 text-bold text-2xl'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setB(parseInt(e.target.value))
                }
            />
            <input
                type={'number'}
                placeholder={'c'}
                className={'p-2 text-bold text-2xl'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setC(parseInt(e.target.value))
                }
            />
            <button onClick={getResult} className={'bg-white text-2xl rounded'}>
                Решить
            </button>
            <h1
                className={'text-white font-bold text-2xl'}
            >{`Ответ: x1 = ${root1}; x2 = ${
                twoRoots ? root2 : 'Не существует'
            }`}</h1>
        </div>
    )
}

export default DisicriminantResolver
