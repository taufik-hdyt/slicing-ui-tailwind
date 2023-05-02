import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillsCard";

export default function SectionSkills() {
  return (
    <section className="py-20 bg-skill" id="skills">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraf>Beberapa kemampuan saya.</SectionParagraf>
        <div className="flex flex-wrap -mx-4">
          <div className="w-4/12 px-4 pb-8">
            <SkillCard
              Title="JavaScript"
              image="/JavaScript.svg"
              level="Lanjutan"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard Title="React JS" image="/react.svg" level="Lanjutan" />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard Title="Node JS" image="/nodejs.svg" level="Lanjutan" />
          </div>

          <div className="w-4/12 px-4 pb-8">
            <SkillCard Title="Node Js" image="/nodejs.svg" level="Lanjutan" />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              Title="JavaScript"
              image="/javascript.svg"
              level="Lanjutan"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard Title="React JS" image="/react.svg" level="Lanjutan" />
          </div>

          <div className="w-4/12 px-4">
            <SkillCard Title="React JS" image="/react.svg" level="Lanjutan" />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard Title="Node JS" image="/nodejs.svg" level="Lanjutan" />
          </div>
          <div className="w-4/12 px-4">
            <SkillCard
              Title="JavaScript"
              image="/javascript.svg"
              level="Lanjutan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
