import DiscriminantResolver from '@/app/discriminant/DiscriminantResolver'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Решение квадратных уравнений через дискриминант',
}

const DescriminantePage = () => {
    return <DiscriminantResolver />
}

export default DescriminantePage
