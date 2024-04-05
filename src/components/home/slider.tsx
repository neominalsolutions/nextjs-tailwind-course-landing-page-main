'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import {
	Autoplay,
	Pagination,
	Navigation,
	EffectCube,
	EffectFlip,
	EffectCreative,
} from 'swiper/modules';

import { Button, Typography, Card } from '@material-tailwind/react';
import { useRef } from 'react';

function Slider() {
	const progressCircle = useRef<any>(null);
	const progressContent = useRef<any>(null);
	const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
		if (progressCircle.current && progressContent.current) {
			progressCircle.current.style.setProperty(
				'--progress',
				(1 - progress).toString()
			);
			progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
		}
	};

	return (
		<Swiper
			grabCursor={true}
			effect={'creative'}
			creativeEffect={{
				prev: {
					shadow: true,
					translate: [0, 0, -200],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}}
			modules={[Autoplay, EffectCreative]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			onAutoplayTimeLeft={onAutoplayTimeLeft}
			className="mySwiper"
		>
			<SwiperSlide>
				<div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
					<div className="absolute inset-0 h-full w-full bg-gray-900/60" />
					<div className="grid min-h-screen px-8">
						<div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
							<Typography
								variant="h1"
								color="white"
								className="md:max-w-full lg:max-w-3xl"
							>
								Master the Power of React Beginner Course
							</Typography>
							<Typography
								variant="lead"
								color="white"
								className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
							>
								Our React Course is your gateway to becoming a proficient React
								developer. Learn to build dynamic and interactive web
								applications using one of the most popular JavaScript libraries
								in the industry.
							</Typography>
							<div>
								<Button variant="gradient" color="white">
									ENROLL TODAY
								</Button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className="relative min-h-screen w-full bg-[url('/image/coding4.jpg')] bg-cover bg-no-repeat">
					<div className="absolute inset-0 h-full w-full bg-gray-900/60" />
					<div className="grid min-h-screen px-8">
						<div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
							<Typography
								variant="h1"
								color="white"
								className="md:max-w-full lg:max-w-3xl"
							>
								Master the Power of React Beginner Course
							</Typography>
							<Typography
								variant="lead"
								color="white"
								className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
							>
								Our React Course is your gateway to becoming a proficient React
								developer. Learn to build dynamic and interactive web
								applications using one of the most popular JavaScript libraries
								in the industry.
							</Typography>
							<div>
								<Button variant="gradient" color="white">
									ENROLL TODAY
								</Button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className="relative min-h-screen w-full bg-[url('/image/coding5.jpg')] bg-cover bg-no-repeat">
					<div className="absolute inset-0 h-full w-full bg-gray-900/60" />
					<div className="grid min-h-screen px-8">
						<div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
							<Typography
								variant="h1"
								color="white"
								className="md:max-w-full lg:max-w-3xl"
							>
								Master the Power of React Beginner Course
							</Typography>
							<Typography
								variant="lead"
								color="white"
								className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
							>
								Our React Course is your gateway to becoming a proficient React
								developer. Learn to build dynamic and interactive web
								applications using one of the most popular JavaScript libraries
								in the industry.
							</Typography>
							<div>
								<Button variant="gradient" color="white">
									ENROLL TODAY
								</Button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>

			<div className="autoplay-progress" slot="container-end">
				<svg viewBox="0 0 48 48" ref={progressCircle}>
					<circle cx="24" cy="24" r="20"></circle>
				</svg>
				<span ref={progressContent}></span>
			</div>
		</Swiper>
	);
}
export default Slider;
