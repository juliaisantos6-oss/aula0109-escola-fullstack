import Link from "next/link";
import Header from "../components/header";

const features = [
  { icon: "01", title: "Cadastro de alunos", text: "Registre e mantenha os dados dos estudantes organizados em um só lugar.", href: "/cadalunos" },
  { icon: "02", title: "Lista de alunos", text: "Consulte rapidamente os alunos cadastrados e encontre as informações necessárias.", href: "/listalunos" },
  { icon: "03", title: "Cadastro de notas", text: "Lance avaliações de forma prática e acompanhe o desempenho acadêmico.", href: "/cadnotas" },
  { icon: "04", title: "Lista de notas", text: "Visualize os registros de notas para facilitar o acompanhamento escolar.", href: "/listnotas" },
];

export default function Principal() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">GESTÃO ESCOLAR • SESI MIRANDÓPOLIS</span>
            <h1>Organização escolar com <span>praticidade</span> e cuidado.</h1>
            <p>
              Uma plataforma simples para centralizar informações de alunos e notas,
              deixando a rotina escolar mais organizada, rápida e eficiente.
            </p>
            <div className="hero-actions">
              <Link href="/cadalunos" className="btn btn-primary">Cadastrar aluno <span>→</span></Link>
              <a href="#recursos" className="btn btn-light">Conhecer recursos</a>
            </div>
            <div className="hero-note"><span>✓</span> Interface pensada para facilitar o dia a dia da escola</div>
          </div>

          <div className="hero-visual" aria-label="Ilustração de gestão escolar">
            <div className="decor decor-one" />
            <div className="decor decor-two" />
            <div className="school-card">
              <div className="card-top"><span className="mini-logo">S</span><span>PAINEL ESCOLAR</span><b>•••</b></div>
              <div className="student-illustration">
                <div className="sun">✦</div>
                <div className="person person-one"><i></i><b></b><span></span></div>
                <div className="person person-two"><i></i><b></b><span></span></div>
                <div className="book">▱</div>
              </div>
              <div className="card-info">
                <div><small>Alunos</small><strong>Organizados</strong></div>
                <div><small>Notas</small><strong>Atualizadas</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="welcome" id="sobre">
          <div>
            <span className="section-label">SOBRE O SISTEMA</span>
            <h2>Feito para deixar a rotina <em>mais leve.</em></h2>
          </div>
          <p>
            O Sistema Escolar SESI foi pensado para reunir tarefas importantes da gestão
            acadêmica em uma experiência clara e intuitiva. Menos tempo procurando dados,
            mais tempo dedicado ao que realmente importa: a educação.
          </p>
        </section>

        <section className="features" id="recursos">
          <div className="section-heading">
            <div><span className="section-label">RECURSOS</span><h2>Tudo mais organizado</h2></div>
            <p>Escolha uma área para começar.</p>
          </div>
          <div className="feature-grid">
            {features.map((item) => (
              <Link href={item.href} className="feature-card" key={item.title}>
                <span className="feature-number">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="feature-link">Acessar <b>↗</b></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="stats">
          <div><strong>01</strong><span>ambiente<br />centralizado</span></div>
          <div><strong>04</strong><span>recursos<br />principais</span></div>
          <div><strong>100%</strong><span>foco em<br />praticidade</span></div>
          <div className="quote">“Tecnologia que aproxima a escola de uma rotina mais simples.”</div>
        </section>

        <section className="cta-section">
          <div className="cta-flower">✿</div>
          <span className="section-label">COMECE AGORA</span>
          <h2>Pronto para organizar<br /><span>sua rotina escolar?</span></h2>
          <p>Acesse os recursos do sistema e torne suas tarefas mais simples.</p>
          <Link href="/cadalunos" className="btn btn-primary">Começar agora <span>→</span></Link>
        </section>
      </main>

      <footer className="footer">
        <div><strong>SESI Mirandópolis</strong><span>Sistema Escolar</span></div>
        <p>© 2026 • Todos os direitos reservados</p>
      </footer>
    </>
  );
}
