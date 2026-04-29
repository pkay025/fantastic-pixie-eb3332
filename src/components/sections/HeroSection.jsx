import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Input from '../ui/Input';

const HeroSection = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/learn');
	};

	return (
		<section className="py-12 md:py-20 bg-white">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-5 md:gap-16">
					{/* Left: App Screenshot — 50% on desktop, 1:1 aspect ratio */}
					<div className="w-full md:w-1/2 md:flex-[0_0_50%]">
						<div className="mx-auto md:mx-0 overflow-hidden rounded-[40px]">
							<picture>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=avif&w=1800&h=1800&q=65"
									type="image/avif"
								/>
								<source
									srcSet="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png?fm=webp&w=1800&h=1800&q=75"
									type="image/webp"
								/>
								<img
									src="https://images.ctfassets.net/o10es7wu5gm1/4lbSrfvF333XkPz7WycixQ/afbeefb68eab9405594b2e9bfbb9a152/Hero__4_.png"
									alt="Coinbase"
									loading="eager"
									width="1800"
									height="1800"
									className="w-full aspect-square object-cover"
								/>
							</picture>
						</div>
						<p className="text-legal text-gray-60 mt-3 max-w-[900px]">
							Stocks and prediction markets not available in your jurisdiction.
						</p>
					</div>

					{/* Right: CTA — 50% on desktop */}
					<div className="order-1 lg:order-2 flex flex-col items-start w-full lg:pl-4 xl:pl-8">
						<h1 className="text-[3.5rem] sm:text-6xl lg:text-[4.5rem] font-extralight text-[#050f19] tracking-tight leading-[1.05] mb-4">
							The future of<br /> finance is here.
						</h1>
						<p className="text-lg lg:text-[1.3rem] text-[#050f19] mb-4 font-extralight max-w-[500px] whitespace-nowrap">
							Trade crypto and more on a platform you can trust.
						</p>
						<form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={handleSubmit}>
							<div className="flex flex-col sm:flex-row w-full max-w-[500px] gap-3">
								<Input
									placeholder="satoshi@nakamoto.com"
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									className="flex-grow w-full px-4 py-[15px] border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] placeholder-gray-500 font-normal outline-none"
								/>
							</div>
							<Button className="px-8 py-[15px] bg-[#0052FF] hover:bg-[#0040C5] text-white text-[1rem] font-semibold rounded-full flex-shrink-0 transition-colors duration-200" variant="primary" size="md" type="submit">
								Sign up
							</Button>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HeroSection;
