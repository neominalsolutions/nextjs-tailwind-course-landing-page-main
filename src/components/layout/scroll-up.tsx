'use client';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { Link as ScrollLink } from 'react-scroll';

export function ScrollUp() {
	return (
		<>
			<ScrollLink
				className="fixed bottom-20 right-5 z-50"
				to="navbar"
				smooth
				duration={500}
			>
				<IconButton
					className="
rounded bg-indigo-800 hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10 opacity-80"
				>
					<ChevronUpIcon className="h-6 w-6" />
				</IconButton>
			</ScrollLink>
		</>
	);
}
