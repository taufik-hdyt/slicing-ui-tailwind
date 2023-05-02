export default function ProjectItem({ name, description, image }: any) {
  return (
    <article className="text-center">
      <img src={image} alt="img" className="w-full rounded-lg" />
      <h3 className="mb-1 text-xl font-semibold mb-1 mt-4">{name}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </article>
  );
}
