"use client"

import { useState } from "react"
import Link from "next/link"
import { FiClock, FiCheck, FiX, FiChevronDown } from "react-icons/fi"
import { PiFireBold } from "react-icons/pi"
import { usePlan } from "@/context/PlanContext"
import { Workout, PlanWorkout } from "@/types"

type Tab = "plan" | "saved"
type SortKey = "duration" | "calories" | "rating"

const MyPlanPage = () => {
	const { plan, saved, metrics, removeFromPlan, removeFromSaved, markAsDone } =
		usePlan()
	const [activeTab, setActiveTab] = useState<Tab>("plan")
	const [sortBy, setSortBy] = useState<SortKey>("duration")

	const currentList: (PlanWorkout | Workout)[] =
		activeTab === "plan" ? plan : saved

	// copy before sorting - .sort() mutates the original array,
	// and mutating state directly breaks React
	const sortedList = [...currentList].sort((a, b) => {
		if (sortBy === "duration") return a.duration - b.duration
		if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned
		if (sortBy === "rating") return b.rating - a.rating
		return 0
	})

	return (
		<div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
			<h1 className="font-display font-bold uppercase text-3xl">My Plan</h1>
			<p className="mt-1 text-gray-400">
				Cap of five lifts for today. Finish them, then load more.
			</p>

			<div className="mt-6 bg-bg-card border border-border-base rounded-xl grid grid-cols-3 divide-x divide-border-base">
				<div className="p-5">
					<p className="text-xs text-gray-400 uppercase tracking-wide">
						Exercises
					</p>
					<p className="mt-1 text-3xl font-bold text-accent">
						{metrics.exercises}
					</p>
				</div>
				<div className="p-5">
					<p className="text-xs text-gray-400 uppercase tracking-wide">
						Minutes
					</p>
					<p className="mt-1 text-3xl font-bold">{metrics.minutes}</p>
				</div>
				<div className="p-5">
					<p className="text-xs text-gray-400 uppercase tracking-wide">
						Calories
					</p>
					<p className="mt-1 text-3xl font-bold">{metrics.calories}</p>
				</div>
			</div>

			<div className="mt-8 flex items-center justify-between flex-wrap gap-4">
				<div className="flex items-center gap-2 bg-bg-card border border-border-base rounded-lg p-1">
					<button
						onClick={() => setActiveTab("plan")}
						className={
							activeTab === "plan"
								? "px-4 py-2 rounded-md text-sm font-semibold bg-white/10 text-white"
								: "px-4 py-2 rounded-md text-sm font-medium text-gray-400"
						}
					>
						Today&apos;s Plan
					</button>
					<button
						onClick={() => setActiveTab("saved")}
						className={
							activeTab === "saved"
								? "px-4 py-2 rounded-md text-sm font-semibold bg-white/10 text-white"
								: "px-4 py-2 rounded-md text-sm font-medium text-gray-400"
						}
					>
						Saved
					</button>
				</div>

				<div className="flex items-center gap-2 text-sm text-gray-400">
					Sort By
					<div className="relative">
						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value as SortKey)}
							className="appearance-none bg-bg-card border border-border-base rounded-lg pl-3 pr-8 py-2 text-white text-sm"
						>
							<option value="duration">Duration</option>
							<option value="calories">Calories</option>
							<option value="rating">Rating</option>
						</select>
						<FiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
					</div>
				</div>
			</div>

			<div className="mt-6 space-y-3">
				{sortedList.length === 0 ? (
					<div className="border border-dashed border-border-base rounded-xl py-20 text-center">
						<p className="font-display font-bold uppercase text-xl">
							Nothing Here Yet
						</p>
						<p className="mt-2 text-gray-400">
							Browse the library and add a lift to get today moving.
						</p>
						<Link
							href="/"
							className="mt-6 inline-block bg-accent text-black font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
						>
							Go to workouts
						</Link>
					</div>
				) : (
					sortedList.map((item) => (
						<div
							key={item.id}
							className="bg-bg-card border border-border-base rounded-xl p-4 flex flex-wrap items-center gap-4"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={item.image}
								alt={item.name}
								className="h-16 w-16 rounded-lg object-cover"
							/>

							<div className="flex-1 min-w-[160px]">
								<p className="font-display font-bold uppercase">
									{item.name}
								</p>
								<p className="text-sm text-gray-400">{item.equipment}</p>
								<div className="mt-1 flex items-center gap-3 text-xs text-gray-400">
									<span className="flex items-center gap-1">
										<FiClock /> {item.duration} min
									</span>
									<span className="flex items-center gap-1">
										<PiFireBold /> {item.caloriesBurned} kcal
									</span>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<Link
									href={`/workout/${item.id}`}
									className="border border-border-base text-sm px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
								>
									View Details
								</Link>

								{activeTab === "plan" && !(item as PlanWorkout).isDone && (
									<button
										onClick={() => markAsDone(item.id)}
										className="flex items-center gap-1 bg-accent text-black text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
									>
										<FiCheck /> Mark as Done
									</button>
								)}

								<button
									onClick={() =>
										activeTab === "plan"
											? removeFromPlan(item.id)
											: removeFromSaved(item.id)
									}
									aria-label="Remove"
									className="text-gray-400 hover:text-red-400 transition-colors p-2"
								>
									<FiX />
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default MyPlanPage