import MyLink from '@/app/components/MyLink'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Главная',
}

export default function Home() {
    return (
        <div className={'flex flex-col gap-3 text-center'}>
            <h1 className={'text-white text-xl'}> Сделали:</h1>
            <h1 className={'text-white text-xl'}>
                Богачевы Егор Романович и Алена Сергеевна
            </h1>
            <MyLink href={'/calculator'} title={'Калькулятор'} />
            <MyLink href={'/discriminant'} title={'Дискриминант'} />
            <MyLink href={'/system'} title={'Система'} />
        </div>
    )
}
