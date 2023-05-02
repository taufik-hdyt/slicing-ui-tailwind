export default function SectionParagraf({ left, children }: any) {
  return (
    <p className={`mt-2 text-gray-600 text-md ${!left ? "text-center" : ""} `}>
      {children}
    </p>
  );
}
