import Link from "next/link"

export default function NotFound() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-32 text-center">
			<p className="font-display font-bold text-accent text-7xl">404</p>
			<h1 className="mt-4 font-display font-bold uppercase text-2xl">
				Page Not Found
			</h1>
			<p className="mt-2 text-gray-400">
				The page you&apos;re looking for doesn&apos;t exist or was moved.
			</p>
			<Link
				href="/"
				className="mt-6 inline-block bg-accent text-black font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
			>
				Back to Home
			</Link>
		</div>
	)
}