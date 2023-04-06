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
            <MyLink href={'/calculator'} title={'Калькулятор'} />
            <MyLink href={'/discriminant'} title={'Дискриминант'} />
            <MyLink href={'/system'} title={'Система'} />
        </div>
    )
}
