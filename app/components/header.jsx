import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="SESI Mirandópolis - página inicial">
          <span className="brand-mark">S</span>
          <span>
            <strong>SESI</strong>
            <small>Mirandópolis</small>
          </span>
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li><Link className="active" href="/">Início</Link></li>
            <li><Link href="/cadalunos">Alunos</Link></li>
            <li><Link href="/listalunos">Lista de alunos</Link></li>
            <li><Link href="/cadnotas">Notas</Link></li>
            <li><Link href="/listnotas">Lista de notas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
