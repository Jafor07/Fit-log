"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { usePlan } from "@/context/PlanContext"

const links = [
	{ label: "Workouts", href: "/" },
	{ label: "My Plan", href: "/my-plan" },
]

const Navbar = () => {
	const pathname = usePathname()
	const { plan, saved } = usePlan()

	return (
		<header className="sticky top-0 z-50 bg-bg-base/95 backdrop-blur border-b border-border-base">
			<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
				<Link href="/" className="flex items-center gap-2 font-display font-semibold tracking-wide text-lg">
	{/* eslint-disable-next-line @next/next/no-img-element */}
	<img src="/assets/logo.png" alt="" className="h-5 w-5" />
	FITLOG
</Link>

				<ul className="hidden sm:flex items-center gap-8 text-sm font-medium">
					{links.map((link) => {
						const isActive = pathname === link.href
						return (
							<li key={link.href}>
								<Link
									href={link.href}
									className={
										isActive
											? "text-accent"
											: "text-gray-400 hover:text-white transition-colors"
									}
								>
									{link.label}
								</Link>
							</li>
						)
					})}
				</ul>

				<div className="flex items-center gap-3 text-sm">
					<Link
						href="/my-plan"
						className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
					>
						Plan
						<span className="bg-accent text-black font-semibold text-xs px-2 py-0.5 rounded-full">
							{plan.length}
						</span>
					</Link>
					<Link
						href="/my-plan"
						className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
					>
						Saved
						<span className="border border-gray-500 text-gray-300 font-semibold text-xs px-2 py-0.5 rounded-full">
							{saved.length}
						</span>
					</Link>
				</div>
			</nav>

			{/* mobile nav links */}
			<ul className="sm:hidden flex items-center justify-center gap-6 pb-3 text-sm font-medium">
				{links.map((link) => {
					const isActive = pathname === link.href
					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={isActive ? "text-accent" : "text-gray-400"}
							>
								{link.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</header>
	)
}

export default Navbar