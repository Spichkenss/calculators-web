'use client'
import VarComponent from '@/app/system/VarComponent'
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

interface Props {
    values: { x1: string; x2: string; eq: string }
    setValue: Dispatch<SetStateAction<{ x1: string; x2: string; eq: string }>>
}

const Expression: FC<Props> = ({ values, setValue }) => {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-row gap-1'}>
                <VarComponent
                    variable={'x1'}
                    value={values.x1}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue({ ...values, x1: e.target.value })
                    }
                />
                <span className={'text-white text-xl'}>+</span>
                <VarComponent
                    variable={'x2'}
                    value={values.x2}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue({ ...values, x2: e.target.value })
                    }
                />
                <span className={'text-white text-xl'}>=</span>
                <VarComponent
                    value={values.eq}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setValue({ ...values, eq: e.target.value })
                    }
                />
            </div>
        </div>
    )
}

export default Expression
