'use-client';

import React from 'react';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@material-tailwind/react';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

export function AuthLayout({ children }: { children: any }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

export default AuthLayout;
