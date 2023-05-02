export default function ContactItem({ icon, label, value, className }: any) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`flex items-start ${addClassName}`}>
      <img src={icon} className="w-10" alt="icon" />
      <div className="ml-4">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
