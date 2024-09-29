
import { Josefin_Sans } from 'next/font/google';
import '@/globals.scss';
import { Store } from '@/context/store';
const inter = Josefin_Sans({
    weight: ['100', '200', '300', '500', '600', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'GamePair.',
    description: 'GamePair - Pair your games with fun!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Store>
            {children}
        </Store>
        </body>
        </html>
    );
}
