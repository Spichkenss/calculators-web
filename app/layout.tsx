import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={'flex h-screen w-screen bg-gray-900 p-4'}>
                <div className={'m-auto'}>{children}</div>
            </body>
        </html>
    )
}
