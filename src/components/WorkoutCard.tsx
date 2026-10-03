import Link from "next/link"
import { FiClock, FiStar } from "react-icons/fi"
import { PiFireBold } from "react-icons/pi"
import { Workout } from "@/types"

const WorkoutCard = ({ workout }: { workout: Workout }) => {
	return (
		<Link
			href={`/workout/${workout.id}`}
			className="group block bg-bg-card border border-border-base rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent/50 transition-all"
		>
			<div className="aspect-video overflow-hidden">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={workout.image}
					alt={workout.name}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
				/>
			</div>

			<div className="p-4">
				<div className="flex flex-wrap gap-2">
					{workout.muscleGroups.map((group) => (
						<span
							key={group}
							className="bg-accent text-black text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded"
						>
							{group}
						</span>
					))}
				</div>

				<h3 className="mt-3 font-display font-bold uppercase tracking-wide">
					{workout.name}
				</h3>
				<p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

				<div className="mt-4 pt-3 border-t border-border-base flex items-center gap-4 text-xs text-gray-400">
					<span className="flex items-center gap-1">
						<FiClock /> {workout.duration} min
					</span>
					<span className="flex items-center gap-1">
						<PiFireBold /> {workout.caloriesBurned} kcal
					</span>
					<span className="flex items-center gap-1">
						<FiStar className="text-accent" /> {workout.rating}
					</span>
				</div>
			</div>
		</Link>
	)
}

export default WorkoutCard