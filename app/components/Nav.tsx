import Image from "next/image";
import Link from "next/link";
import azGradient from "../../src/images/AZ-gradient.svg";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/storitve/izdelava-spletnih-strani", label: "Storitve" },
  { href: "/blog", label: "Blog" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <nav
        className="backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src={azGradient} alt="Ajda Zajc Logo" width={80} height={40} className="h-7 w-auto" />
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hidden md:inline text-[13px] tracking-wide text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              Sodelujmo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
