/**
 * Tillfällig data för att bygga sammanfattningen innan
 * ReflectionContext finns. Byter mot riktig data senare.
 */
export const mockReflection = {
  moodId: 4,
  tags: ["Sömn", "Rörelse i vardagen"],
  note: "Sov bra och tog en promenad på lunchen.",
  activity: null, // testa även: { id: 101, name: "Promenad", duration: "30 min", date: "Idag", time: "07:45" }
  dateLabel: "Tor 5 nov",
};

export const mockCoach = { id: 1, name: "Berit", initials: "BK" };
export const mockGroup = { id: 1, name: "Morgonpromenaderna", memberCount: 6 };