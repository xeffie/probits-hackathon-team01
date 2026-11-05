export default function MoodFace({ mood, size = 56 }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 56 56" width={size} height={size}>
      <circle cx="28" cy="28" r="27" fill={mood.color} />
      <circle cx="19.5" cy="21.5" r="2.5" fill="var(--color-text)" />
      <circle cx="36.5" cy="21.5" r="2.5" fill="var(--color-text)" />
      <path
        d={mood.mouth}
        fill={mood.openSmile ? "var(--color-text)" : "none"}
        stroke="var(--color-text)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}