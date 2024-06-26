import React from 'react';
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	Card,
	IconButton,
} from '@material-tailwind/react';
import {
	CubeTransparentIcon,
	UserCircleIcon,
	CodeBracketSquareIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	RocketLaunchIcon,
	Bars2Icon,
	CalendarDaysIcon,
	AcademicCapIcon,
	ChatBubbleLeftIcon,
	PhoneIcon,
} from '@heroicons/react/24/solid';

import logo from '../../../public/image/logo/logo-org.png';
import course from '../../../public/image/Ozan Kebap.gif';

import Image from 'next/image';

console.log('logo', logo.src);

// profile menu component
const profileMenuItems = [
	{
		label: 'My Profile',
		icon: UserCircleIcon,
	},
	{
		label: 'Edit Profile',
		icon: Cog6ToothIcon,
	},
	{
		label: 'Inbox',
		icon: InboxArrowDownIcon,
	},
	{
		label: 'Help',
		icon: LifebuoyIcon,
	},
	{
		label: 'Sign Out',
		icon: PowerIcon,
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="indigo"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
				>
					<Avatar
						variant="circular"
						size="sm"
						alt="tania andrew"
						className="border-gray-900 p-0.5"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
									: ''
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? 'red' : 'indigo'}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

// nav list menu
const navListMenuItems = [
	{
		title: 'Backend Kariyer Eğitimleri',
		description:
			'Learn how to use @material-tailwind/html, packed with rich components and widgets.',
	},
	{
		title: 'Frontend Kariyer Eğitimleri',
		description:
			'Learn how to use @material-tailwind/react, packed with rich components for React.',
	},
	{
		title: 'Uygulama Geliştirme Eğitimleri',
		description:
			'A complete set of UI Elements for building faster websites in less time.',
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			<MenuItem>
				<Typography variant="h6" color="blue-gray" className="mb-1">
					{title}
				</Typography>
				<Typography variant="small" color="gray" className="font-normal">
					{description}
				</Typography>
			</MenuItem>
		</a>
	));

	return (
		<React.Fragment>
			<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
				<MenuHandler>
					<Typography as="a" href="#" variant="small" className="font-normal">
						<MenuItem className="hidden items-center gap-2 font-medium text-indigo-800 lg:flex lg:rounded-full">
							<AcademicCapIcon className="h-[18px] w-[18px] text-#148bcb" />{' '}
							Eğitimler{' '}
							<ChevronDownIcon
								strokeWidth={2}
								className={`h-3 w-3 transition-transform ${
									isMenuOpen ? 'rotate-180' : ''
								}`}
							/>
						</MenuItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[36rem] grid-cols-8 gap-3 overflow-visible lg:grid border-none outline-none">
					<Card
						color="white"
						shadow={false}
						variant="gradient"
						className="col-span-4 grid h-full w-full place-items-center rounded-md outline-none"
					>
						<Image
							className="h-96 w-96 "
							src={course.src}
							alt="logo"
							height={25}
							width={150}
						/>

						{/* <Image src={course.src} heig />
						<RocketLaunchIcon strokeWidth={1} className="h-28 w-28" /> */}
					</Card>
					<ul className="col-span-4 border-none flex w-full flex-col gap-1 outline-none">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
				<AcademicCapIcon className="h-[18px] w-[18px] text-blue-gray-500" />{' '}
				Eğitimler{' '}
			</MenuItem>
			<ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
				{renderItems}
			</ul>
		</React.Fragment>
	);
}

// nav list component
const navListItems = [
	{
		label: 'Etkinlikler',
		icon: CalendarDaysIcon,
	},
	{
		label: 'Makaleler',
		icon: ChatBubbleLeftIcon,
	},
	{
		label: 'İletişim',
		icon: PhoneIcon,
	},
];

function NavList() {
	return (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center justify-center">
			<div className="self-center mr-2">
				<Image
					className="self-center"
					src={logo.src}
					alt="logo"
					height={25}
					width={150}
				/>
			</div>

			<NavListMenu />

			{navListItems.map(({ label, icon }, key) => (
				<Typography
					key={label}
					as="a"
					href="#"
					variant="small"
					color="gray"
					className="font-medium text-indigo-600"
				>
					<MenuItem className="flex items-center gap-2 lg:rounded-full">
						{React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
						<span className="text-indigo-800"> {label}</span>
					</MenuItem>
				</Typography>
			))}
		</ul>
	);
}

export function ComplexNavbar() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	return (
		<div>
			<Navbar
				id="navbar"
				className="max-w-full mx-auto rounded-none bg-white text-indigo-800"
			>
				<div className="relative mx-auto flex items-center justify-between text-indigo-800">
					<div className="hidden lg:block">
						<NavList />
					</div>
					<IconButton
						size="sm"
						color="blue-gray"
						variant="text"
						onClick={toggleIsNavOpen}
						className="ml-auto mr-2 lg:hidden"
					>
						<Bars2Icon className="h-6 w-6" />
					</IconButton>

					<ProfileMenu />

					<Button size="sm" variant="text">
						<span className="text-indigo-800">Log In</span>
					</Button>
				</div>
				<MobileNav open={isNavOpen} className="overflow-scroll">
					<NavList />
				</MobileNav>
			</Navbar>
		</div>
	);
}
