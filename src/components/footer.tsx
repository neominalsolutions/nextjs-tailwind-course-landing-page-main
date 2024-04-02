import { Typography } from '@material-tailwind/react';

const SITEMAP = [
	{
		title: 'Company',
		links: ['Hakımızda', 'Careers', 'Eğitmenlerimiz', 'Projects'],
	},
	{
		title: 'Help Center',
		links: ['Discord', 'Twitter', 'GitHub', 'Contact Us'],
	},
	{
		title: 'Resources',
		links: ['Blog', 'Newsletter', 'Free Products', 'Affiliate Program'],
	},
	{
		title: 'Products',
		links: ['Templates', 'UI Kits', 'Icons', 'Mockups'],
	},
];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
	return (
		<footer className="relative w-full">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
					{SITEMAP.map(({ title, links }, key) => (
						<div key={key} className="w-full">
							<Typography
								variant="small"
								color="blue-gray"
								className="mb-4 font-bold uppercase opacity-50"
							>
								{title}
							</Typography>
							<ul className="space-y-1">
								{links.map((link, key) => (
									<Typography
										key={key}
										as="li"
										color="blue-gray"
										className="font-normal"
									>
										<a
											href="#"
											className="inline-block py-1 pr-2 transition-transform hover:scale-105"
										>
											{link}
										</a>
									</Typography>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
					<Typography
						variant="small"
						className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
					>
						&copy; {currentYear}{' '}
						<a href="https://material-tailwind.com/">Code Dev Academy</a>. All
						Rights Reserved.
					</Typography>
					<div className="flex gap-4 text-blue-gray-900 sm:justify-center">
						<Typography
							as="a"
							href="#"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<span className="[&>svg]:h-5 [&>svg]:w-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 448 512"
								>
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
								</svg>
							</span>
						</Typography>
						<Typography
							as="a"
							href="#"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<span className="[&>svg]:h-5 [&>svg]:w-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 576 512"
								>
									<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
								</svg>
							</span>
						</Typography>
						<Typography
							as="a"
							href="#"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
							</svg>
						</Typography>
						<Typography
							as="a"
							href="#"
							className="opacity-80 transition-opacity hover:opacity-100"
						>
							<span className="[&>svg]:h-5 [&>svg]:w-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 448 512"
								>
									<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
								</svg>
							</span>
						</Typography>
					</div>
				</div>
			</div>
		</footer>
	);
}
