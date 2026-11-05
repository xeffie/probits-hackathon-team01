
import { useEffect, useState } from "react";
import ParticipantDetails from "./components/ParticipantDetails";
import ParticipantsList from "./components/ParticipantsList";
import { participants } from "../../reflectionData/participants";
import { api } from "../../api/api";
import "./coachPage.css";
import { Link } from "react-router-dom";

export default function CoachPage() {
	const [search, setSearch] = useState("");
	const [selectedParticipant, setSelectedParticipant] = useState(null);
	const [reflections, setReflections] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadReflections = async () => {
			try {
				const [reflectionData, activities] = await Promise.all([
					api.getReflections(),
					api.getActivities(),
				]);

				const formattedReflections = reflectionData
					.filter((reflection) => reflection.shared)
					.map((reflection) => {
						const activity = activities.find(
							(item) =>
								Number(item.id) === Number(reflection.activityId)
						);

						return {
							id: reflection.id,
							participantId: 1, // Anna Lind - demo
							date: reflection.createdAt?.split("T")[0] ?? "",
							activityName:
								activity?.activityName ?? "Daglig reflektion",
							mood: reflection.mood,
							tags: reflection.tags ?? [],
							note: reflection.note ?? "",
							createdAt: reflection.createdAt,
						};
					})
					.sort(
						(a, b) =>
							new Date(b.createdAt) - new Date(a.createdAt)
					);

				setReflections(formattedReflections);
			} catch (err) {
				console.error("Failed to fetch reflections:", err);
				setError("Kunde inte hämta reflektioner.");
			} finally {
				setLoading(false);
			}
		};

		loadReflections();
	}, []);

	const filteredParticipants = participants.filter((participant) =>
		participant.name.toLowerCase().includes(search.trim().toLowerCase())
	);

	if (selectedParticipant) {
		const participantReflections = reflections.filter(
			(reflection) =>
				reflection.participantId === selectedParticipant.id
		);

		return (
			<ParticipantDetails
				participant={selectedParticipant}
				reflections={participantReflections}
				onBack={() => setSelectedParticipant(null)}
			/>
		);
	}

	return (
		<main className="coach-page">
			<h1>God morgon, Berit</h1>
			<p>Här är en överblick över deltagarna den här veckan.</p>

			{loading && <p>Hämtar reflektioner...</p>}
			{error && <p role="alert">{error}</p>}

			<ParticipantsList
				participants={participants}
				filteredParticipants={filteredParticipants}
				search={search}
				onSearchChange={setSearch}
				onSelect={(participant) => {
					setSelectedParticipant(participant);
				}}
			/>

			<section className="coach-page__demo-card">
				<span className="coach-page__demo-badge">Demo</span>

				<h2>Deltagarläge</h2>

				<p>
					Se hur Anna upplever appen, registrerar sitt mående
					och tar del av coachens feedback.
				</p>

				<Link to="/" className="coach-page__demo-button">
					Byt till deltagarvyn
				</Link>
			</section>

		</main>
	);
}
