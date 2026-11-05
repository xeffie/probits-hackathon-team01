import { coachPlans } from '../../../reflectionData/coachPlans';

export default function ParticipantPlanning({
	participantId,
	participantName,
}) {
	const plans = coachPlans.filter(
		(plan) => plan.participantId === participantId,
	);

	return (
		<section className='coach-page__planning'>
			<h2>Planera nästa vecka</h2>
			<p>
				Skapa en enkel och realistisk plan tillsammans med {participantName}.
			</p>

			<h3>Planerade vanor</h3>

			<ul className='coach-page__plans'>
				{plans.map((plan) => (
					<li key={plan.id}>
						<strong>{plan.title}</strong>
						<p>{plan.days.join(' och ')}</p>
					</li>
				))}
			</ul>

			{plans.length === 0 && <p>Inga planerade vanor ännu.</p>}
		</section>
	);
}
