const Footer = () => {
	return (
		<footer className="border-t border-border-base">
			<div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
				<div className="flex items-center gap-2 font-display font-semibold tracking-wide">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/assets/logo.png" alt="" className="h-5 w-5" />
					FITLOG
				</div>
				<p className="text-sm text-gray-400 text-center sm:text-right">
					© 2026 FitLog — Workout Library. Train hard, log honest.
				</p>
			</div>
		</footer>
	)
}

export default Footer