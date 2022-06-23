import Link from "next/link";

export default function Header() {
  return (
    <header className="cabecalho">
      <nav>
        <Link href="/">
          <a className="headerLink">
            <div className="headerLinkDiv">Inicio</div>
          </a>
        </Link>
        <Link href="/sobre">
          <a className="headerLink">
            <div className="headerLinkDiv">Sobre</div>
          </a>
        </Link>
        <Link href="/projetos">
          <a className="headerLink">
            <div className="headerLinkDiv">Projetos</div>
          </a>
        </Link>
      </nav>
    </header>
  );
}
