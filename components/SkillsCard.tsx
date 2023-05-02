export default function SkillCard({ Title, image, level }: any) {
  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-skill">
      <div className="h-10">
        <img src={image} alt="javascript " className="mr-6 rounded-full " />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{Title}</h4>
        <p className="mt-1 text-sm font-semibold text-gray-400">{level}</p>
      </div>
    </div>
  );
}
