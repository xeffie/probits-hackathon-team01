// import { useState } from 'react';
// import MoodFace from '../../moodComponents/MoodFace';
// import './reflectionTagsPage.css';

// const tagGroups = [
// 	{
// 		title: 'Fysisk aktivitet',
// 		tags: ['Rörelse i vardagen', 'Träning', 'Orkade inte röra mig'],
// 	},
// 	{
// 		title: 'Matvanor',
// 		tags: ['Regelbundna mattider', 'Socker', 'Tröstätande'],
// 	},
// 	{
// 		title: 'Balans i livet',
// 		tags: ['Återhämtning', 'Sömn', 'Stress', 'Psykiskt mående'],
// 	},
// ];

// function ReflectionTagsPage({
// 	activity = null,
// 	mood = null,
// 	initialTags = [],
// 	currentStep = 2,
// 	totalSteps = 4,
// 	onContinue,
// 	onSkip,
// 	onBack,
// }) {
// 	const [selectedTags, setSelectedTags] = useState(initialTags);

// 	function toggleTag(tag) {
// 		setSelectedTags((previousTags) =>
// 			previousTags.includes(tag)
// 				? previousTags.filter((selectedTag) => selectedTag !== tag)
// 				: [...previousTags, tag],
// 		);
// 	}

// 	return (
// 		<main className='reflection-tags'>
// 			<button
// 				className='reflection-tags__back'
// 				type='button'
// 				aria-label='Tillbaka till föregående steg'
// 				onClick={() => onBack?.()}>
// 				<span aria-hidden='true'>←</span>
// 			</button>

// 			{activity && (
// 				<p className='reflection-tags__activity'>{activity.activityName}</p>
// 			)}

// 			<div
// 				className='reflection-tags__progress'
// 				role='progressbar'
// 				aria-label='Reflektionsflöde'
// 				aria-valuemin={0}
// 				aria-valuemax={totalSteps}
// 				aria-valuenow={currentStep}
// 				aria-valuetext={`Steg ${currentStep} av ${totalSteps}`}>
// 				{Array.from({ length: totalSteps }, (_, index) => (
// 					<span
// 						key={index}
// 						className={index < currentStep ? 'is-active' : ''}
// 					/>
// 				))}
// 			</div>

// 			<h1>Vad påverkar ditt mående?</h1>
// 			<p>Välj det som hänger ihop med hur du mår idag. Du kan välja flera.</p>

// 			{mood && (
// 				<div className='reflection-tags__mood'>
// 					<MoodFace mood={mood} size={24} />
// 					<span>{mood.label}</span>
// 				</div>
// 			)}

// 			{tagGroups.map((group) => (
// 				<fieldset key={group.title}>
// 					<legend>{group.title}</legend>

// 					<div className='reflection-tags__choices'>
// 						{group.tags.map((tag) => (
// 							<button
// 								key={tag}
// 								type='button'
// 								aria-pressed={selectedTags.includes(tag)}
// 								onClick={() => toggleTag(tag)}>
// 								{tag}
// 							</button>
// 						))}
// 					</div>
// 				</fieldset>
// 			))}

// 			<div className='reflection-tags__actions'>
// 				<button type='button' onClick={() => onContinue?.(selectedTags)}>
// 					Fortsätt
// 				</button>

// 				<button type='button' onClick={() => onSkip?.()}>
// 					Hoppa över
// 				</button>
// 			</div>
// 		</main>
// 	);
// }

// export default ReflectionTagsPage;

import { Navigate, useNavigate } from 'react-router-dom';
import MoodFace from '../../moodComponents/MoodFace';
import { useReflection } from '../../context/useReflection';
import './reflectionTagsPage.css';

const tagGroups = [
	{
		title: 'Fysisk aktivitet',
		tags: ['Rörelse i vardagen', 'Träning', 'Orkade inte röra mig'],
	},
	{
		title: 'Matvanor',
		tags: ['Regelbundna mattider', 'Socker', 'Tröstätande'],
	},
	{
		title: 'Balans i livet',
		tags: ['Återhämtning', 'Sömn', 'Stress', 'Psykiskt mående'],
	},
];

const currentStep = 2;
const totalSteps = 4;

function ReflectionTagsPage() {
	const navigate = useNavigate();
	const { mood, tags, setTags, activity } = useReflection();

	// Öppnas sidan direkt utan valt mående, gå till första steget
	if (!mood) return <Navigate to='/reflection/mood' replace />;

	function toggleTag(tag) {
		setTags((previousTags) =>
			previousTags.includes(tag)
				? previousTags.filter((selectedTag) => selectedTag !== tag)
				: [...previousTags, tag],
		);
	}

	function skip() {
		setTags([]);
		navigate('/reflection/note');
	}

	return (
		<main className='reflection-tags'>
			<button
				className='reflection-tags__back'
				type='button'
				aria-label='Tillbaka till föregående steg'
				onClick={() => navigate('/reflection/mood')}>
				<span aria-hidden='true'>←</span>
			</button>

			{activity && (
				<p className='reflection-tags__activity'>{activity.name}</p>
			)}

			<div
				className='reflection-tags__progress'
				role='progressbar'
				aria-label='Reflektionsflöde'
				aria-valuemin={0}
				aria-valuemax={totalSteps}
				aria-valuenow={currentStep}
				aria-valuetext={`Steg ${currentStep} av ${totalSteps}`}>
				{Array.from({ length: totalSteps }, (_, index) => (
					<span
						key={index}
						className={index < currentStep ? 'is-active' : ''}
					/>
				))}
			</div>

			<h1>Vad påverkar ditt mående?</h1>
			<p>Välj det som hänger ihop med hur du mår idag. Du kan välja flera.</p>

			<div className='reflection-tags__mood'>
				<MoodFace mood={mood} size={24} />
				<span>{mood.label}</span>
			</div>

			{tagGroups.map((group) => (
				<fieldset key={group.title}>
					<legend>{group.title}</legend>

					<div className='reflection-tags__choices'>
						{group.tags.map((tag) => (
							<button
								key={tag}
								type='button'
								aria-pressed={tags.includes(tag)}
								onClick={() => toggleTag(tag)}>
								{tag}
							</button>
						))}
					</div>
				</fieldset>
			))}

			<div className='reflection-tags__actions'>
				<button type='button' onClick={() => navigate('/reflection/note')}>
					Fortsätt
				</button>

				<button type='button' onClick={skip}>
					Hoppa över
				</button>
			</div>
		</main>
	);
}

export default ReflectionTagsPage;