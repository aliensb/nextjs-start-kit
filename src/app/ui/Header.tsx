"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "About the Team",
      path: "/about/team",
    },
  ];
  const path = usePathname();
  const router = useRouter();
  const handleLinkClick = () => {
    router.push("/posts");
  };
  return (
    <header className="sticky top-0 flex h-20 flex-row items-center justify-center border-b-2 border-slate-400 bg-gray-400 font-bold">
      {links.map((l) => (
        <div className="mx-4" key={l.name}>
          <Link
            className={path === l.path ? "text-lime-600" : ""}
            href={l.path}
          >
            {l.name}
          </Link>
        </div>
      ))}
      <div className="mx-4">
        <a
          href="#"
          className={path.startsWith("/posts") ? "text-lime-600" : ""}
          onClick={handleLinkClick}
        >
          Posts
        </a>
      </div>
    </header>
  );
}
