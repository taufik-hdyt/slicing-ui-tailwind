import ProjectItem from "./ProjectItem";
import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraf>Beberapa proyek bikinan saya.</SectionParagraf>
        <div className="flex -mx-4 flex-wrap">
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi landing page"
              image="/img1.png"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Resources"
              description="Eksplorasi resource page"
              image="/img2.png"
            />
          </div>
          <div className="w-6/12 px-4 mt-10">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi landing page"
              image="/img1.png"
            />
          </div>
          <div className="w-6/12 px-4 mt-10">
            <ProjectItem
              name="Resources"
              description="Eksplorasi resource page"
              image="/img2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
