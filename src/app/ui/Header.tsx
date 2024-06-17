import Link from "next/link";

export default function Header() {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "about the team",
      path: "/about/team",
    },
  ];
  return (
    <div>
      <ul className="flex flex-row">
        {links.map((l) => (
          <li className="mx-4" key={l.name}>
            <Link href={l.path}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
