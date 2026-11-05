/**
 * Mockade aktiviteter för startsidan.
 * moodId = måendet om aktiviteten redan är reflekterad, annars null.
 */
export const activities = [
  { id: 101, name: "Promenad", area: "training", duration: "30 min", date: "Idag", time: "07:45", moodId: null },
  { id: 102, name: "Lunch på fast tid", area: "lunch", duration: "30 min", date: "Idag", time: "12:00", moodId: 4 },
  { id: 103, name: "Styrketräning", area: "training", duration: "45 min", date: "Tor 5 nov", time: "18:00", moodId: 5 },
  { id: 104, name: "Kvällsvila utan skärm", area: "other", duration: "20 min", date: "Tis 3 nov", time: "18:45", moodId: 3 },
  { id: 105, name: "Cykel till jobbet", area: "training", duration: "25 min", date: "Tis 3 nov", time: "07:45", moodId: null },
];