"use client"

import { useEffect, useState } from "react"
import { Workout } from "@/types"
import { getAllWorkouts } from "@/utils/api"
import WorkoutCard from "@/components/WorkoutCard"

const LibrarySection = () => {
	const [workouts, setWorkouts] = useState<Workout[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadData() {
			try {
				const data = await getAllWorkouts()
				setWorkouts(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}
		loadData()
	}, [])

	return (
		<section id="library" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
			<h2 className="font-display font-bold uppercase text-3xl">The Library</h2>
			<p className="mt-1 text-gray-400">
				Twelve lifts covering every major muscle group.
			</p>

			<div className="mt-8">
				{loading ? (
					<div className="flex items-center justify-center py-24">
						<div className="h-10 w-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{workouts.map((workout) => (
							<WorkoutCard key={workout.id} workout={workout} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default LibrarySection