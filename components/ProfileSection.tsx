import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";

export default function Profile() {
  return (
    <section className="container mx-auto py-28 " id="profile">
      <SectionTitle>Profile</SectionTitle>
      <SectionParagraf>Mengenal saya secara singkat.</SectionParagraf>
      <div className="flex items-center w-9/12 py-10 mx-auto">
        <div className="w-5/12 mt-10">
          <img src="/profil.png" alt="profil " className="w-full" />
        </div>
        <div className="w-7/12 px-20 text-lg leading-relaxed">
          <p>
            Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
            condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
            congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
            ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
            accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
            Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
            ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas ac aliquet eros.
          </p>
          <br />
          <p>
            Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
            convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
            Mauris ut dolor posuere augue porta lobortis nec sed lacus.
            Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
            malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
            mollis, id vehicula nulla dictum.
          </p>
        </div>
      </div>
    </section>
  );
}
