import React from 'react';

import { Typography } from '@material-tailwind/react';
import Image from 'next/image';

interface BackgroundCardProps {
	title: string;
	children: React.ReactNode;
	imageUrl: string;
}

export function BackgroundCard({
	title,
	imageUrl,
	children,
}: BackgroundCardProps) {
	console.log('img', imageUrl);

	return (
		<div className="grid place-items-center h-full py-6 rounded-xl">
			<Image width={500} height={600} src={imageUrl} alt="deneme" />
		</div>
	);
}
export default BackgroundCard;
