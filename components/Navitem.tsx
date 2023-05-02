export default function NavItem({ href, children }: any) {
  return (
    <li>
      <a
        href={href}
        className="flex justify-center space-x-4 font-semibold text-white text-opacity-60"
      >
        {children}
      </a>
    </li>
  );
}
