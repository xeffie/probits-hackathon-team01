
import MoodFace from "../../../moodComponents/MoodFace";
import { getMoodById } from "../../../reflectionData/moods";

export default function ParticipantOverview({ reflections }) {
	return (
		<section aria-labelledby="reflections-heading">
			<h2 id="reflections-heading">Delade reflektioner</h2>

			{reflections.length === 0 ? (
				<p>Inga delade reflektioner att visa.</p>
			) : (
				reflections.map((reflection) => {
					const mood = getMoodById(reflection.mood);

					return (
						<article
							className="coach-page__reflection"
							key={reflection.id}
						>
							<h3>{reflection.activityName}</h3>
							<p>{reflection.date}</p>

							{mood && (
								<div className="coach-page__reflection-mood">
									<MoodFace mood={mood} size={28} />
									<span>{mood.label}</span>
								</div>
							)}

							{reflection.tags.length > 0 && (
								<p>{reflection.tags.join(" · ")}</p>
							)}

							{reflection.note && <p>{reflection.note}</p>}
						</article>
					);
				})
			)}
		</section>
	);
}
