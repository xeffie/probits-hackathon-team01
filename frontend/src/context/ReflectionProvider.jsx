import { useState } from "react";
import { ReflectionContext } from "./ReflectionContext";

export function ReflectionProvider({ children }) {
  const [mood, setMood] = useState(null);
  const [tags, setTags] = useState([]);
  const [note, setNote] = useState("");
  const [activity, setActivity] = useState(null);

  const reset = () => {
    setMood(null);
    setTags([]);
    setNote("");
    setActivity(null);
  };

  return (
    <ReflectionContext.Provider
      value={{ mood, setMood, tags, setTags, note, setNote, activity, setActivity, reset }}
    >
      {children}
    </ReflectionContext.Provider>
  );
}