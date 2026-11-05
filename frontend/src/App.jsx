import { useState } from "react";
import { Home } from "./pages/home/Home.jsx";
import ReflectionTagsPage from "./pages/reflectionTagsPage/ReflectionTagsPage";
import ReflectionNotePage from "./pages/reflectionNotePage/ReflectionNotePage";
import ReflectionMoodPage from "./pages/reflectionMoodPage/ReflectionMoodPage";
import ReflectionSummaryPage from "./pages/reflectionSummaryPage/ReflectionSummaryPage.jsx";
import CoachPage from "./pages/coachPage/CoachPage";

function App() {
  const [step, setStep] = useState("home");
  const [tags, setTags] = useState([]);
  const [mood, setMood] = useState(null);

  // const mood = getMoodById(2);
  const activity = {
    id: 1,
    activityName: "Cykel till jobbet",
  };

  return (
    <>
      <nav aria-label="Demovyer">
        <button type="button" onClick={() => setStep("home")}>Användarvy</button>
        <button type="button" onClick={() => setStep("coach")}>Coachvy</button>
      </nav>
      {step === "coach" && <CoachPage />}
      {step === "home" && <Home onContinue={() => setStep("mood")} />}
      {step === "mood" && (
        <ReflectionMoodPage
          onContinue={(selectedMood) => {
            setMood(selectedMood);
            setStep("tags");
          }}
        />
      )}
      {step === "tags" && (
        <ReflectionTagsPage
          activity={activity}
          mood={mood}
          initialTags={tags}
          onContinue={(selectedTags) => {
            setTags(selectedTags);
            setStep("note");
          }}
          onSkip={() => {
            setTags([]);
            setStep("note");
          }}
          onBack={() => console.log("Tillbaka till mående")}
        />
      )}

      {step === "note" && (
        <ReflectionNotePage
          activity={activity}
          mood={mood}
          tags={tags}
          onBack={() => setStep("tags")}
          onContinue={(note) => {
            console.log("Anteckning", note);
            setStep("summary");
          }}
          onSkip={() => console.log("Hoppa över anteckning")}
        ></ReflectionNotePage>
      )}
      {step === "summary" && <ReflectionSummaryPage />}
    </>
  );
}

export default App;
