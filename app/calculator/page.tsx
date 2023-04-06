import Calculator from '@/app/components/calculator/Calculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Калькулятор',
}

const CalculatorPage = () => {
    return <Calculator />
}

export default CalculatorPage
