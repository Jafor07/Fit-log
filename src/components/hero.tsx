const Hero = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16">
			<div className="bg-bg-card border border-border-base rounded-2xl grid lg:grid-cols-2 items-center gap-10 p-8 md:p-14">
				<div>
					<span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full">
						Workout Library
					</span>

					<h1 className="mt-5 font-display font-bold uppercase text-4xl md:text-6xl leading-[1.05]">
						Train With Intent.
						<br />
						Log Every Set.
					</h1>

					<p className="mt-5 text-gray-400 max-w-md">
						FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
						into today&apos;s plan, and watch the week&apos;s work add up.
					</p>

					<a
						href="#library"
						className="mt-8 inline-flex items-center gap-2 bg-accent text-black font-semibold uppercase text-sm tracking-wide px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
					>
						Browse Workouts
					</a>
				</div>
				<div className="flex justify-center">
	{/* eslint-disable-next-line @next/next/no-img-element */}
	<img
		src="/assets/banner.png"
		alt="Workout illustration"
		className="w-full max-w-sm object-contain"
	/>
</div>
			</div>
		</section>
	)
}

export default Hero