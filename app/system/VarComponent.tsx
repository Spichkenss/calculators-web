import { ChangeEventHandler, FC } from 'react'

interface Props {
    value: string
    variable?: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const VarComponent: FC<Props> = ({ variable, value, onChange }) => {
    return (
        <div className={'flex flex-row gap-1'}>
            <input
                type="number"
                className={'w-14 text-center'}
                value={value}
                onChange={onChange}
            />
            <span className={'text-white text-xl'}>{variable}</span>
        </div>
    )
}

export default VarComponent
