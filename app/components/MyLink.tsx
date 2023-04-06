import Link from 'next/link'
import { FC } from 'react'

interface Props {
    href: string
    title: string
}

const MyLink: FC<Props> = ({ title, href }) => {
    return (
        <Link
            href={`${href}`}
            className={'bg-white p-2 rounded text-2xl font-bold'}
        >
            {title}
        </Link>
    )
}

export default MyLink
