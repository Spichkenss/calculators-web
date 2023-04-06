'use client'
import Expression from '@/app/system/Expression'
import { useState } from 'react'

const System = () => {
    const [values1, setValues1] = useState<{
        x1: string
        x2: string
        eq: string
    }>({
        x1: '0',
        x2: '0',
        eq: '0',
    })

    const [values2, setValues2] = useState<{
        x1: string
        x2: string
        eq: string
    }>({
        x1: '0',
        x2: '0',
        eq: '0',
    })

    const [root1, setRoot1] = useState<string>('0')
    const [root2, setRoot2] = useState<string>('0')

    const getResult = () => {
        const delta =
            parseInt(values1.x1) * parseInt(values2.x2) -
            parseInt(values2.x1) * parseInt(values1.x2)

        const delta1 =
            parseInt(values1.eq) * parseInt(values2.x2) -
            parseInt(values2.eq) * parseInt(values1.x2)

        const delta2 =
            parseInt(values1.x1) * parseInt(values2.eq) -
            parseInt(values2.x1) * parseInt(values1.eq)

        const r1 = delta1 / delta
        setRoot1(r1.toString())

        const r2 = delta2 / delta
        setRoot2(r2.toString())
    }

    return (
        <div className={'flex flex-col gap-3 justify-center items-center'}>
            <h1 className={'text-white font-bold text-2xl'}>
                Заполните систему линейных уравнений
            </h1>
            <Expression
                values={{ x1: values1.x1, x2: values1.x2, eq: values1.eq }}
                setValue={setValues1}
            />
            <Expression
                values={{ x1: values2.x1, x2: values2.x2, eq: values2.eq }}
                setValue={setValues2}
            />
            <button onClick={getResult} className={'bg-white text-2xl rounded'}>
                Решить
            </button>
            <h1
                className={'text-white font-bold text-2xl'}
            >{`Ответ: x1 = ${root1}; x2 = ${root2}`}</h1>
        </div>
    )
}

export default System
