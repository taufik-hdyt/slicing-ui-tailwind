import NavItem from "./Navitem";

export default function Nav() {
  return (
    <ul className="flex justify-center py-20 space-x-4">
      <NavItem href="#profile">Profile</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </ul>
  );
}
