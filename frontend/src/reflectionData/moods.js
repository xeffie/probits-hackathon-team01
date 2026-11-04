/**
 * Måendeskalan som används i reflektionen (steg 1) och i kalendern.
 * Fem nivåer, från sämst (1) till bäst (5).
 *
 * Varje objekt innehåller:
 *  - id:        Värdet 1–5 som sparas i reflektionen och skickas till backend.
 *  - label:     Texten som visas för användaren och läses upp av skärmläsare.
 *  - color:     Ansiktets fyllnadsfärg, hämtad från theme.css (--mood-1 … --mood-5).
 *  - mouth:     SVG-path för munnen, ritad i en 56 × 56 viewBox (se MoodFace.jsx).
 *  - openSmile: (valfri) true = munnen fylls i, för ett öppet leende.
 */

export const moods = [
  { id: 1, label: "Mycket dåligt", color: "var(--mood-1)", mouth: "M17 35 Q28 23 39 35" },
  { id: 2, label: "Dåligt",        color: "var(--mood-2)", mouth: "M18 34 Q28 27 38 34" },
  { id: 3, label: "Okej",          color: "var(--mood-3)", mouth: "M19 31 H37" },
  { id: 4, label: "Bra",           color: "var(--mood-4)", mouth: "M18 29 Q28 38 38 29" },
  { id: 5, label: "Mycket bra",    color: "var(--mood-5)",
    mouth: "M17 28 Q28 42 39 28 Q37 40 28 41 Q19 40 17 28", openSmile: true },
];

export const getMoodById = (id) => moods.find((mood) => mood.id === id) ?? null;