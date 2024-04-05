'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
	DocumentTextIcon,
	PlayCircleIcon,
	PencilSquareIcon,
	PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/solid';

import StatsCard from '@/components/home/stats-card';

const STATS = [
	{
		icon: DocumentTextIcon,
		count: '10,200+',
		title: 'Students',
	},
	{
		icon: PlayCircleIcon,
		count: '50+',
		title: 'Instructors',
	},
	{
		icon: PencilSquareIcon,
		count: '10+',
		title: 'Courses',
	},
	{
		icon: PhoneArrowDownLeftIcon,
		count: '24/7',
		title: 'Support',
	},
];

export function OutImpressiveStats() {
	return (
		<section className="px-8 pt-10">
			<div className="container mx-auto text-center lg:text-left">
				<div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
					{STATS.map((props, key) => (
						<StatsCard key={key} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
export default OutImpressiveStats;
