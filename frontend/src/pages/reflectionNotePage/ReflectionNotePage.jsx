import { useState } from 'react';
import './reflectionNotePage.css';

function ReflectionNotePage() {
	const [note, setNote] = useState('');
	return (
		<main className='reflection-note'>
			<h1 className='reflection-note__title'>Vill du lägga till något?</h1>

			<p className='reflection-note__description'>
				Skriv en tanke om din dag - vad hände, vad vill du komma ihåg?
			</p>

			<div className='reflection-note__field'>
				<label htmlFor='reflection-note'>Din anteckning (valfritt)</label>

				<textarea
					id='reflection-note'
					className='reflection-note__input'
					placeholder='T.ex. Sov dåligt men prommenaden hjälpte'
					maxLength={250}
					value={note}
					onChange={(event) => setNote(event.target.value)}
				/>

				<p className='reflection-note__count'>{note.length}/250</p>
			</div>
			<div className='reflection-note__actions'>
				<button className='reflection-note__continue' type='button'>
					Fortsätt
				</button>

				<button className='reflection-note__skip' type='button'>
					Hoppa över
				</button>
			</div>
		</main>
	);
}

export default ReflectionNotePage;
