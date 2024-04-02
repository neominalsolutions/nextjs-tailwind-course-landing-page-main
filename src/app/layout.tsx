import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import {
	Layout,
	FixedPlugin,
	ComplexNavbar,
	FooterWithSitemap,
} from '@/components';
import { ScrollUp } from '@/components/scroll-up';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'NextJS Tailwind Course Landing Page',
	description:
		'Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<script
					defer
					data-site="YOUR_DOMAIN_HERE"
					src="https://api.nepcha.com/js/nepcha-analytics.js"
				></script>
				<link rel="shortcut icon" href="/favicon.png" type="image/png" />
			</head>
			<body className={roboto.className}>
				<Layout>
					<ComplexNavbar />
					{children}
					<ScrollUp />
					<FooterWithSitemap />
				</Layout>
			</body>
		</html>
	);
}
