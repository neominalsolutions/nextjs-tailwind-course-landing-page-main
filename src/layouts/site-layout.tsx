'use-client';

import React from 'react';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@material-tailwind/react';
import { ComplexNavbar } from '../components/layout/navbar';
import { FooterWithSitemap } from '../components/layout/footer';
import { ScrollUp } from '../components/layout/scroll-up';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

export function SiteLayout({ children }: { children: any }) {
	return (
		<ThemeProvider>
			<ComplexNavbar />
			{children}
			<ScrollUp />
			<FooterWithSitemap />
		</ThemeProvider>
	);
}

export default SiteLayout;
