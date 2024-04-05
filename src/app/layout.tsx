import './globals.css';

import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { ComplexNavbar, FooterWithSitemap, MainLayout } from '@/components';
import { ScrollUp } from '@/components/layout/scroll-up';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { usePathname } from 'next/navigation';

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
			<body className={`${roboto.className} max-w-full`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
