export default function Button({ children, className, variant }: any) {
  const addClassName = className ? `${className}` : "";
  const variants: any = {
    "outline-yellow": `border border-yellow-500 text-yellow-500`,
    yellow: "bg-yellow-500 text-black",
  };
  const pickedVariant = variants[variant];
  return (
    <a
      className={`inline-block px-10 py-2 text-lg rounded-full font-semiboldpx-6 ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
