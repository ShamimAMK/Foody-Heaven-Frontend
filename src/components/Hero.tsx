"use client";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const data = [
	"/images/slide-01.jpg",
	"/images/slide-02.jpg",
	"/images/slide-03.jpeg",
	"/images/slide-04.jpg",
];

const Hero = () => {
	return (
		<div className="w-full h-[calc(100vh-82px)]">
			<Swiper
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				loop={true}
				grabCursor={true}
				navigation={true}
				speed={500}
				modules={[Autoplay, Navigation, Pagination]}
				className="w-full h-full"
			>
				{data.map((url, i) => (
					<SwiperSlide key={i + url}>
						<div className="w-full h-full relative">
							<Image
								src={url}
								alt="Food"
								fill
								priority
								className="w-full h-full object-cover"
							/>
							<div className="absolute z-[1] top-0 right-0 left-0 bottom-0 h-full w-full  bg-black/20"></div>
							<div className="absolute z-2 top-0 right-0 left-0 bottom-0 h-full w-full container mx-auto text-center flex flex-col gap-5 items-center justify-center text-white md:p-20">
								<h1 className="text-5xl md:text-7xl font-bold">
									Discover YUMMI Food like never before{" "}
								</h1>
								<p className="md:text-xl">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
									nobis, quis officia minus quaerat animi fugit soluta
									laboriosam quia mollitia natus voluptates numquam placeat
									laborum quasi quidem quae sed unde!
								</p>
								<Link href="/">
									<Button size="lg" className="md: text-xl bg-pink-500">
										Get Started
									</Button>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
