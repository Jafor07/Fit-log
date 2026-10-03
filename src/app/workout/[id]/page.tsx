"use client"

import { use, useEffect, useState } from "react"
import { FiCalendar, FiBookmark } from "react-icons/fi"
import { usePlan } from "@/context/PlanContext"
import { getWorkoutById } from "@/utils/api"
import { Workout } from "@/types"

type Params = Promise<{ id: string }>

export default function WorkoutDetails({ params }: { params: Params }) {
	const { id } = use(params)

	const { plan, addToPlan, addToSaved } = usePlan()
	const [workout, setWorkout] = useState<Workout | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadWorkout() {
			try {
				const data = await getWorkoutById(id)
				setWorkout(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}
		loadWorkout()
	}, [id])

	if (loading) {
		return (
			<div className="flex items-center justify-center py-32">
				<div className="h-10 w-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
			</div>
		)
	}

	if (!workout) {
		return (
			<div className="max-w-7xl mx-auto px-4 py-32 text-center">
				<p className="text-gray-400">Workout not found.</p>
			</div>
		)
	}

	const isPlanFull = plan.length >= 5
	const isAlreadyInPlan = plan.some((item) => item.id === workout.id)

	const specs = [
		{ label: "Equipment", value: workout.equipment },
		{ label: "Difficulty", value: workout.difficulty },
		{ label: "Sets", value: workout.sets },
		{ label: "Reps", value: workout.reps },
		{ label: "Duration", value: `${workout.duration} min` },
		{ label: "Calories", value: `${workout.caloriesBurned} kcal` },
		{ label: "Rating", value: workout.rating },
	]

	return (
		<div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid lg:grid-cols-2 gap-10">
			<div className="rounded-xl overflow-hidden">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={workout.image}
					alt={workout.name}
					className="w-full h-full object-cover"
				/>
			</div>

			<div>
				<h1 className="font-display font-bold uppercase text-3xl md:text-4xl">
					{workout.name}
				</h1>
				<p className="mt-3 text-gray-400">{workout.description}</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{workout.muscleGroups.map((group) => (
						<span
							key={group}
							className="bg-accent text-black text-xs font-bold uppercase px-3 py-1 rounded-full"
						>
							{group}
						</span>
					))}
				</div>

				<div className="mt-6 bg-bg-card border border-border-base rounded-xl divide-y divide-border-base">
					{specs.map((spec) => (
						<div
							key={spec.label}
							className="flex items-center justify-between px-4 py-3 text-sm"
						>
							<span className="text-gray-400 uppercase tracking-wide text-xs">
								{spec.label}
							</span>
							<span className="font-medium">{spec.value}</span>
						</div>
					))}
				</div>

				<div className="mt-6">
					<h2 className="font-display font-bold uppercase text-lg">
						Instructions
					</h2>
					<ol className="mt-3 space-y-2 text-sm text-gray-300 list-decimal list-inside">
						{workout.instructions.map((step, index) => (
							<li key={index}>{step}</li>
						))}
					</ol>
				</div>

				<div className="mt-8 flex flex-wrap gap-3">
					<button
						onClick={() => addToPlan(workout)}
						disabled={isPlanFull || isAlreadyInPlan}
						className="flex items-center gap-2 bg-accent text-black font-semibold text-sm px-5 py-3 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
					>
						<FiCalendar />
						{isAlreadyInPlan
							? "Already in Plan"
							: isPlanFull
							? "Plan Full"
							: "Add to today's plan"}
					</button>
					<button
						onClick={() => addToSaved(workout)}
						className="flex items-center gap-2 border border-border-base text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-bg-card transition-colors"
					>
						<FiBookmark />
						Save for later
					</button>
				</div>
			</div>
		</div>
	)
}