'use client';

import styles from './page.module.css';

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	Button,
	Card,
	CardBody,
	Rating,
	Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function CourseDetailPage() {
	const [open, setOpen] = React.useState(1);
	const [menu, setMenu] = React.useState<string>('');

	const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

	return (
		<>
			<div className="container-lg  bg-blue-gray-50 w-full">
				<div className="h-auto bg-gradient-to-b from-blue-100 to-purple-100">
					<div className="container mx-auto p-10">
						<div className="w-6/12">
							<Typography
								variant="h1"
								color="black"
								className="text-start  p-5"
							>
								The Complete Histudy 2023: From Zero to Expert!
							</Typography>

							<Typography color="black" className=" p-5">
								Master Python by building 100 projects in 100 days. Learn data
								science, automation, build websites, games and apps!
							</Typography>

							<div className="flex items-center  p-5">
								<div>
									<Button
										variant="outlined"
										className="rounded-full bg-opaque border-white text-black mr-2"
									>
										Kayıt Ol
									</Button>
								</div>
								<div>4.7</div>
								<div>
									<Rating className="p-2" value={4} readonly />
								</div>

								<div>
									<Typography
										color="blue-gray"
										className="font-medium text-blue-gray-600"
									>
										Based on 500 Reviews
									</Typography>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center">
					<main className="w-full lg:w-6/12 mx-auto mt-4">
						<Card shadow={true} className="mb-4 rounded">
							<CardBody>
								<figure className="relative flex justify-center">
									<Image
										className="h-auto w-full rounded-xl object-cover object-center"
										width={400}
										height={400}
										src="/image/course-01.jpg"
										alt="nature image"
									/>
								</figure>
							</CardBody>
						</Card>

						<Card id="tab" shadow={false} className="mb-4 rounded">
							<CardBody className="p-2">
								<div className="w-full justify-center flex sm:flex-col lg:flex-row border-0 sm:items-center">
									<ScrollLink to="overview" smooth duration={700} delay={700}>
										<Button
											variant="text"
											onClick={() => {
												setMenu('Overview');
											}}
											className={`rounded mx-1 sm:my-2 p-4 ${
												menu === 'Overview'
													? 'bg-blue-700 text-white'
													: 'bg-gray-300 text-black'
											}`}
										>
											Overview
										</Button>
									</ScrollLink>
									<ScrollLink to="course" smooth duration={700} delay={700}>
										<Button
											variant="text"
											onClick={() => {
												setMenu('Content');
											}}
											className={`rounded mx-1 sm:my-2 p-4 ${
												menu === 'Content'
													? 'bg-blue-700 text-white'
													: 'bg-gray-300 text-black'
											}`}
										>
											Content
										</Button>
									</ScrollLink>
									<ScrollLink to="details" smooth duration={700} delay={700}>
										<Button
											variant="text"
											onClick={() => {
												setMenu('Details');
											}}
											className={`rounded mx-1 sm:my-2 p-4 ${
												menu === 'Details'
													? 'bg-blue-700 text-white'
													: 'bg-gray-300 text-black'
											}`}
										>
											Details
										</Button>
									</ScrollLink>
									<ScrollLink to="instructor" smooth duration={700} delay={700}>
										<Button
											variant="text"
											onClick={() => {
												setMenu('Instructor');
											}}
											className={`rounded mx-1 sm:my-2 p-4 ${
												menu === 'Instructor'
													? 'bg-blue-700 text-white'
													: 'bg-gray-300 text-black'
											}`}
										>
											Instructor
										</Button>
									</ScrollLink>
								</div>
							</CardBody>
						</Card>

						<Card shadow={true} id="overview" className="rounded mb-4">
							<CardBody>
								<Typography variant="h4" color="blue-gray" className="p-3">
									What you will learn ?
								</Typography>
								<Typography
									color="black"
									className="mb-2 p-2 border-t-2  border-gray-100"
								>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Voluptate ut, mollitia sapiente totam molestias odit
									dignissimos voluptas, quos ratione suscipit necessitatibus
									inventore repudiandae reiciendis vitae eius unde quibusdam
									error porro? Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Dignissimos excepturi voluptates ea delectus
									eligendi. Hic inventore voluptatum tempora consequuntur
									temporibus voluptatem alias? Aliquam animi quos, error
									consectetur sed quisquam culpa?
								</Typography>
							</CardBody>
						</Card>

						<Card shadow={true} id="course" className="rounded mb-4">
							<CardBody>
								<Typography variant="h4" color="blue-gray" className="p-3">
									Course Content
								</Typography>

								<div className="p-5 border-t-2  border-gray-100">
									<Accordion open={open === 1}>
										<AccordionHeader onClick={() => handleOpen(1)}>
											What is Material Tailwind?
										</AccordionHeader>
										<AccordionBody>
											We&apos;re not always in the position that we want to be
											at. We&apos;re constantly growing. We&apos;re constantly
											making mistakes. We&apos;re constantly trying to express
											ourselves and actualize our dreams.
										</AccordionBody>
									</Accordion>
									<Accordion open={open === 2}>
										<AccordionHeader onClick={() => handleOpen(2)}>
											How to use Material Tailwind?
										</AccordionHeader>
										<AccordionBody>
											We&apos;re not always in the position that we want to be
											at. We&apos;re constantly growing. We&apos;re constantly
											making mistakes. We&apos;re constantly trying to express
											ourselves and actualize our dreams.
										</AccordionBody>
									</Accordion>
									<Accordion open={open === 3}>
										<AccordionHeader onClick={() => handleOpen(3)}>
											What can I do with Material Tailwind?
										</AccordionHeader>
										<AccordionBody>
											We&apos;re not always in the position that we want to be
											at. We&apos;re constantly growing. We&apos;re constantly
											making mistakes. We&apos;re constantly trying to express
											ourselves and actualize our dreams.
										</AccordionBody>
									</Accordion>
								</div>
							</CardBody>
						</Card>

						<Card shadow={true} id="details" className="rounded mb-4">
							<CardBody>
								<Typography variant="h4" color="blue-gray" className="p-3">
									Requirements
								</Typography>

								<Typography className="border-t-2 border-gray-100 p-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatem, nemo sapiente! Praesentium officiis, possimus odit
									repudiandae unde sit blanditiis soluta optio impedit sequi
									sunt quasi saepe rerum molestias aspernatur adipisci?
								</Typography>

								<Typography className="p-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatem, nemo sapiente! Praesentium officiis, possimus odit
									repudiandae unde sit blanditiis soluta optio impedit sequi
									sunt quasi saepe rerum molestias aspernatur adipisci?
								</Typography>

								<Typography className="p-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatem, nemo sapiente! Praesentium officiis, possimus odit
									repudiandae unde sit blanditiis soluta optio impedit sequi
									sunt quasi saepe rerum molestias aspernatur adipisci?
								</Typography>
							</CardBody>
						</Card>

						<Card shadow={true} id="instructor" className="rounded mb-4">
							<CardBody>
								<Typography variant="h4" color="blue-gray" className="p-3 ">
									Instructor
								</Typography>

								<div className="border-t-2 border-gray-100">
									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatem, nemo sapiente! Praesentium officiis, possimus
										odit repudiandae unde sit blanditiis soluta optio impedit
										sequi sunt quasi saepe rerum molestias aspernatur adipisci?
									</Typography>

									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatem, nemo sapiente! Praesentium officiis, possimus
										odit repudiandae unde sit blanditiis soluta optio impedit
										sequi sunt quasi saepe rerum molestias aspernatur adipisci?
									</Typography>

									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatem, nemo sapiente! Praesentium officiis, possimus
										odit repudiandae unde sit blanditiis soluta optio impedit
										sequi sunt quasi saepe rerum molestias aspernatur adipisci?
									</Typography>
								</div>
							</CardBody>
						</Card>
					</main>

					<aside className="w-full lg:w-3/12 lg:sticky lg:h-screen lg:right-5 lg:-my-[10rem] lg:mx-[5rem] lg:top-0 mb-2">
						<Card
							shadow={false}
							className="border-solid border-2 h-auto lg:border-purple-500"
						>
							<CardBody>
								<figure className="relative h-48 w-full mb-2 flex items-center justify-center">
									<div
										className={`${styles['play-button']} rounded-full bg-gray-600 z-0`}
									>
										<div className={`${styles['play-icon']}`}></div>
									</div>

									<Image
										className="h-full w-full rounded-xl object-cover object-center"
										width={300}
										height={200}
										src="/image/video-01.jpg"
										alt="Video Images"
									/>
									<figcaption className="absolute bottom-0 flex saturate-200 backdrop-blur-sm w-full justify-center bg-white/75 border-gray">
										<div>Preview </div>
									</figcaption>
								</figure>

								<div></div>

								<Typography className="mb-2">
									<Button
										variant="gradient"
										color="purple"
										className="w-full bg-gradient-to-r from-purple-400 to-blue-300 p-2
										"
									>
										Add to Cart
									</Button>
								</Typography>

								<Typography className="mb-2">
									<Button
										variant="outlined"
										color="blue"
										className="w-full bg-white p-2  hover:bg-blue-700 hover:text-white"
									>
										By Now
									</Button>
								</Typography>

								<div className="max-w-md mx-auto">
									<ul className="divide-y divide-gray-300">
										<li className="py-1 flex items-center justify-between">
											<span className="text-left  text-blue-gray-600">
												Başlangıç Tarihi
											</span>
											<span className="text-right px-2 py-1 bg-gray-300 text-gray rounded text-xs">
												14 Mayıs 2024
											</span>
										</li>
										<li className="py-1 flex items-center justify-between">
											<span className="text-left text-blue-gray-600">Süre</span>
											<span className="text-right px-2 py-1 bg-gray-300 text-gray rounded text-xs">
												60 saat
											</span>
										</li>
										<li className="py-1 flex items-center justify-between">
											<span className="text-left text-blue-gray-600">
												Seviye
											</span>
											<span className="text-right px-2 py-1 bg-gray-300 text-gray rounded text-xs">
												Başlangıç
											</span>
										</li>
									</ul>
								</div>
							</CardBody>
						</Card>
					</aside>
				</div>
			</div>
		</>
	);
}
