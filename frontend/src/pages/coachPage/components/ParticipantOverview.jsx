import MoodFace from '../../../moodComponents/MoodFace';
import { getMoodById } from '../../../reflectionData/moods';

export default function ParticipantOverview({ reflections }) {
	return (
		<section aria-labelledby='reflections-heading'>
			<h2 id='reflections-heading'>Veckans reflektioner</h2>
			<p>Exempeldata för deltagare</p>

			{reflections.length === 0 ? (
				<p>Inga reflektioner att visa.</p>
			) : (
				reflections.map((reflection) => (
					<article className='coach-page__reflection' key={reflection.id}>
						<h3>{reflection.activityName}</h3>
						<p>{reflection.date}</p>

						<div className='coach-page__reflection-mood'>
							<MoodFace mood={getMoodById(reflection.mood)} size={28} />
							<span>{getMoodById(reflection.mood).label}</span>
						</div>
						<p>{reflection.tags.join(' · ')}</p>
						<p>{reflection.note}</p>
					</article>
				))
			)}
		</section>
	);
}
