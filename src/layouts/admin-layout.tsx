'use-client';

import React from 'react';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@material-tailwind/react';
import { ComplexNavbar } from '@/components';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

export function AdminLayout({ children }: { children: any }) {
	return (
		<ThemeProvider>
			<ComplexNavbar />
			{children}
		</ThemeProvider>
	);
}

export default AdminLayout;
