export default function SectionTitle({ left, children }: any) {
  return (
    <h2
      className={`font-mono text-2xl font-semibold ${
        !left ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
