import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero h-[680px]">
      <div className="container mx-auto">
        <div className="text-center ">
          <Navbar />
          <h1 className="w-8/12 mx-auto font-mono text-3xl font-semibold leading-relaxed text-white">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="w-4/12 mx-auto mt-6 text-lg leading-relaxed text-white text-opacity-60">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button className="mt-10" variant="yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
