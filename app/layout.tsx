import type { Metadata } from 'next';
import React from 'react';

const metadata: Metadata = {
    title: 'MiniGallery',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
