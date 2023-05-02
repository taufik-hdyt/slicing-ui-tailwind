export default function Field({ label, name, type }: any) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold ">
        {label}
      </label>

      {type ? (
        <textarea className="bg-transparent border border-gray-300 py-3 px-6 w-full" />
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          className="bg-transparent border border-gray-300 py-3 px-6 w-full"
        />
      )}
    </div>
  );
}
