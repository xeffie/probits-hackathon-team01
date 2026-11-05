/**
 * Peppande text som visas efter sparad reflektion.
 */

export function getPeppText(moodId) {
  if (moodId <= 2) return "Det är okej att ha tunga dagar. Var snäll mot dig själv idag.";
  if (moodId === 3) return "Bra att du stannar upp och känner efter.";
  return "Skönt att höra! Lägg märke till vad som hjälpte idag.";
}