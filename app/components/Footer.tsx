import Image from "next/image";
import Link from "next/link";
import azGradient from "../../src/images/AZ-gradient.svg";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 dark:border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/">
            <Image src={azGradient} alt="Ajda Zajc" width={80} height={40} className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-6 text-[13px] text-gray-400 dark:text-gray-500">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Domov</Link>
            <Link href="/storitve/izdelava-spletnih-strani" className="hover:text-gray-900 dark:hover:text-white transition-colors">Storitve</Link>
            <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</Link>
            <Link href="/#kontakt" className="hover:text-gray-900 dark:hover:text-white transition-colors">Kontakt</Link>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://github.com/ajda00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ajda-zajc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-[12px] text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Ajda Zajc s.p. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
}
