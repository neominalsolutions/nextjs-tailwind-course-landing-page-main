'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
	ChartPieIcon,
	CloudArrowDownIcon,
	CloudIcon,
	Cog6ToothIcon,
	KeyIcon,
	UsersIcon,
} from '@heroicons/react/24/solid';
import BackgroundCard from './background-card';

import sektorImage from '../../../public/image/sektor-deneyim (1).png';
import egitimMetodojiImage from '../../../public/image/egitim-metodologi.png';

interface OptionProps {
	icon: React.ElementType;
	title: string;
	children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
	return (
		<div className="flex gap-4">
			<div className="mb-4">
				<Icon className="text-gray-900 h-6 w-6" />
			</div>
			<div>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
					{children}
				</Typography>
			</div>
		</div>
	);
}

export function WhyChooseUs() {
	return (
		<section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
			<Typography variant="h2" className="text-center mb-2 text-indigo-600">
				Neden Code Dev Academy ?
			</Typography>
			<Typography
				variant="lead"
				className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
			>
				<div className="my-4 rounded-lg border-l-4 border-indigo-600 bg-indigo-100 p-4 italic text-black shadow-lg">
					<p className="text-lg font-semibold">
						&quot;Yeteneklerini geliştir, standartlarını değiştir.&quot;
					</p>
				</div>
			</Typography>
			<div className="mt-8">
				<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
					<BackgroundCard title="Sektör Deneyimi" imageUrl={sektorImage.src}>
						Her biri kendi alanında uzmanlanmış eğitmen kadrosu
					</BackgroundCard>
					<div className="space-y-8">
						<div className="my-4">
							<Option icon={CloudIcon} title="Uzman Eğitmen Kadrosu">
								Sektörün içinde gelen profesyoneller ile hayallerine bir adım
								daha yaklaş.
							</Option>
						</div>
						<div className="mb-4 flex gap-4">
							<Option icon={ChartPieIcon} title="Mentör Desteği">
								Alanında uzman mentörlerimiz ile yetenek yönetim planlaması
								yaparak sizlerin doğru alanda uzmanlaşacak profesyoneller
								olmanıza destek oluyoruz.
							</Option>
						</div>
						<Option icon={Cog6ToothIcon} title="Çevik Eğitim Metadolojisi">
							Yeni nesil çevik eğitim metodolojimiz ile rakiplerinizden her
							zaman bir adım önde olmanız için gece gündüz çalışıyoruz.
						</Option>
					</div>
				</div>
				<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
					<div className="space-y-8">
						<div className="my-4">
							<Option icon={KeyIcon} title="Kariyer Koçluğu">
								Uzman IK ekibimiz tarafından hazırlanan Kariyer Planlama ve
								Destekleme eğitimleri ile sizleri profesyonel iş hayatına
								hazırlıyoruz.
							</Option>
						</div>
						<div className="mb-4 flex gap-4">
							<Option icon={UsersIcon} title="Demo Eğitim">
								Kendimize güveniyoruz. İlk 2 saatlik eğitimlere ücretsiz
								katılarak, hayalinizdeki eğitimi satın almadan önce eğitim
								kalitemizi tecrübe edinebilirsiniz
							</Option>
						</div>
						<Option icon={CloudArrowDownIcon} title="Teknik İngilizce">
							Ücretsiz Teknik İngilizce eğitimi ile becerilerini güçlendir, yurt
							dışı fırsatları değerlendir.
						</Option>
					</div>
					<BackgroundCard
						title="Eğitim Metodolojimiz"
						imageUrl={egitimMetodojiImage.src}
					>
						Code Dev Academy eğitim programları en yüksek seviye verim elde
						edilebilmesi için tasarlanmış ve modellemiştir.
					</BackgroundCard>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
