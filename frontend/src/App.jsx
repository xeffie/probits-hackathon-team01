import { useState } from "react";
import { Home } from "./pages/home/Home.jsx";
import ReflectionTagsPage from "./pages/reflectionTagsPage/ReflectionTagsPage";
import ReflectionNotePage from "./pages/reflectionNotePage/ReflectionNotePage";
import ReflectionMoodPage from "./pages/reflectionMoodPage/ReflectionMoodPage";
import ReflectionSummaryPage from "./pages/reflectionSummaryPage/ReflectionSummaryPage.jsx";
import { getMoodById } from "./reflectionData/moods";
import { BottomMenu } from "./components/bottomMenu/BottomMenu.jsx";

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
      <BottomMenu onHome={() => setStep("home")} />
    </>
  );
}

export default App;
