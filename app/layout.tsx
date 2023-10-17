import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MDX Blog',
    description: 'Created by blitzstriker',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark:bg-slate-800`}>
                <Navbar />
                <Profile />
                {children}
            </body>
        </html>
    );
}
