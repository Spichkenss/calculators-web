import System from '@/app/system/System'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Система линейных уравнений. Метод крамера',
}

const SystemPage = () => {
    return <System />
}

export default SystemPage
