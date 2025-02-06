import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <Link href="/" className="app-header__btn">
          <Image
            src="/logo.svg"
            alt="Next.js logo"
            width={24}
            height={24}
            className="app-header__logo"
          />
        </Link>
      </nav>
    </header>
  );
}
