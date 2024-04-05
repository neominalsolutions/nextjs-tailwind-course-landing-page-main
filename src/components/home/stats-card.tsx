import React from 'react';
import { Card, Typography } from '@material-tailwind/react';

interface StatsCardProps {
	icon: React.ElementType;
	count: string;
	title: string;
}

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
	return (
		<Card color="transparent" shadow={false} className="items-center">
			<Icon className="h-10 w-10 text-blue-800" />
			<Typography variant="h1" className="mb-4 mt-4 text-5xl text-black">
				{count}
			</Typography>
			<Typography
				variant="h6"
				className="mb-2 font-normal text-gray-800 font-bold"
			>
				{title}
			</Typography>
		</Card>
	);
}

export default StatsCard;
