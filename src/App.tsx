import { useMemo, useState, type ReactNode } from "react";

type Role = "Bibliotecária" | "Leitor";
type Page =
  | "dashboard"
  | "catalog"
  | "book-form"
  | "book-detail"
  | "users"
  | "profile"
  | "loans"
  | "new-loan"
  | "returns"
  | "design";

type IconName =
  | "grid"
  | "books"
  | "book"
  | "users"
  | "swap"
  | "return"
  | "user"
  | "logout"
  | "search"
  | "bell"
  | "plus"
  | "arrow"
  | "more"
  | "edit"
  | "trash"
  | "filter"
  | "calendar"
  | "check"
  | "clock"
  | "warning"
  | "chevron"
  | "upload"
  | "close"
  | "menu"
  | "eye"
  | "palette";

const iconPaths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  books: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  book: <><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11v18H4.5A2.5 2.5 0 0 0 2 22Z" /><path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13v18h6.5a2.5 2.5 0 0 1 2.5 2Z" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  swap: <><path d="m17 3 4 4-4 4" /><path d="M3 7h18" /><path d="m7 21-4-4 4-4" /><path d="M21 17H3" /></>,
  return: <><path d="m9 14-4-4 4-4" /><path d="M5 10h9a5 5 0 0 1 5 5v4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 22a8 8 0 0 1 16 0" /></>,
  logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5M21 12H9" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  arrow: <path d="m9 18 6-6-6-6" />,
  more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
  trash: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6" /></>,
  filter: <path d="M3 5h18l-7 8v5l-4 2v-7Z" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  warning: <><path d="M10.3 3.5 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.5a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  upload: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M20 15v5H4v-5" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  palette: <><circle cx="12" cy="12" r="9" /><circle cx="8" cy="9" r="1" fill="currentColor" /><circle cx="12" cy="7" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" /><path d="M15 18c-1.5 0-2-1-1.4-2.1.7-1.3 2.4-.9 3.6-1.6 2-1.2 1.9-4 .6-6" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

function Button({ children, variant = "primary", icon, onClick, disabled, type = "button" }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "danger"; icon?: IconName; onClick?: () => void; disabled?: boolean; type?: "button" | "submit" }) {
  return <button type={type} className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>{icon && <Icon name={icon} size={17} />}<span>{children}</span></button>;
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "success" | "warning" | "danger" | "info" | "neutral" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot" />{children}</span>;
}

function Avatar({ name, large = false }: { name: string; large?: boolean }) {
  const initials = name.split(" ").slice(0, 2).map((part) => part[0]).join("");
  return <span className={`avatar ${large ? "avatar-large" : ""}`}>{initials}</span>;
}

const books = [
  { id: 1, title: "Arquitetura Limpa", author: "Robert C. Martin", category: "Tecnologia", status: "Disponível", available: "4 de 5", color: "cover-navy", code: "AC" },
  { id: 2, title: "O Design do Dia a Dia", author: "Don Norman", category: "Design", status: "Disponível", available: "2 de 3", color: "cover-orange", code: "DD" },
  { id: 3, title: "Engenharia de Software", author: "Ian Sommerville", category: "Tecnologia", status: "Emprestado", available: "0 de 2", color: "cover-cyan", code: "ES" },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", category: "História", status: "Disponível", available: "3 de 4", color: "cover-red", code: "SP" },
  { id: 5, title: "Introdução à Economia", author: "N. Gregory Mankiw", category: "Economia", status: "Emprestado", available: "0 de 1", color: "cover-green", code: "EC" },
];

const loans = [
  { user: "Mariana Costa", initials: "MC", book: "Arquitetura Limpa", start: "12 mai. 2025", due: "26 mai. 2025", status: "Ativo" },
  { user: "Lucas Ribeiro", initials: "LR", book: "O Design do Dia a Dia", start: "08 mai. 2025", due: "22 mai. 2025", status: "Próximo do vencimento" },
  { user: "Beatriz Lima", initials: "BL", book: "Sapiens", start: "28 abr. 2025", due: "12 mai. 2025", status: "Atrasado" },
  { user: "Rafael Nunes", initials: "RN", book: "Código Limpo", start: "02 mai. 2025", due: "16 mai. 2025", status: "Devolvido" },
];

const users = [
  { name: "Mariana Costa", email: "mariana.costa@saojudas.edu.br", role: "Leitor", status: "Ativo", active: 2 },
  { name: "Lucas Ribeiro", email: "lucas.ribeiro@saojudas.edu.br", role: "Leitor", status: "Ativo", active: 1 },
  { name: "Beatriz Lima", email: "beatriz.lima@saojudas.edu.br", role: "Leitor", status: "Pendente", active: 1 },
  { name: "Rafael Nunes", email: "rafael.nunes@saojudas.edu.br", role: "Bibliotecário", status: "Ativo", active: 0 },
];

function BookCover({ book, large = false }: { book: (typeof books)[number]; large?: boolean }) {
  return <div className={`book-cover ${book.color} ${large ? "book-cover-large" : ""}`}><span>{book.code}</span><small>DEV<span>RK</span></small></div>;
}

function statusTone(status: string): "success" | "warning" | "danger" | "info" | "neutral" {
  if (["Disponível", "Ativo", "Devolvido"].includes(status)) return "success";
  if (["Próximo do vencimento", "Pendente"].includes(status)) return "warning";
  if (["Atrasado", "Emprestado", "Inativo"].includes(status)) return "danger";
  return "neutral";
}

function PageTitle({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: ReactNode }) {
  return <div className="page-title"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1><p>{description}</p></div>{action && <div className="page-actions">{action}</div>}</div>;
}

function Sidebar({ page, setPage, role, open, onClose, onLogout }: { page: Page; setPage: (page: Page) => void; role: Role; open: boolean; onClose: () => void; onLogout: () => void }) {
  const adminNav: { label: string; icon: IconName; page: Page }[] = [
    { label: "Dashboard", icon: "grid", page: "dashboard" },
    { label: "Acervo", icon: "books", page: "catalog" },
    { label: "Livros", icon: "book", page: "book-form" },
    { label: "Usuários", icon: "users", page: "users" },
    { label: "Empréstimos", icon: "swap", page: "loans" },
    { label: "Devoluções", icon: "return", page: "returns" },
  ];
  const readerNav = adminNav.filter((item) => ["dashboard", "catalog"].includes(item.page));
  const navigate = (next: Page) => { setPage(next); onClose(); };
  return <>
    {open && <div className="mobile-overlay" onClick={onClose} />}
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand"><div className="brand-mark"><span>D</span></div><div><strong>Dev<span>RK</span></strong><small>Gestão de Biblioteca</small></div><button className="icon-btn sidebar-close" onClick={onClose} aria-label="Fechar menu"><Icon name="close" /></button></div>
      <nav className="nav">
        <span className="nav-label">NAVEGAÇÃO</span>
        {(role === "Bibliotecária" ? adminNav : readerNav).map((item) => <button key={item.page} className={`nav-item ${page === item.page ? "active" : ""}`} onClick={() => navigate(item.page)}><Icon name={item.icon} /><span>{item.label}</span>{item.page === "loans" && <small>8</small>}</button>)}
        <span className="nav-label nav-label-spaced">CONTA</span>
        <button className={`nav-item ${page === "profile" ? "active" : ""}`} onClick={() => navigate("profile")}><Icon name="user" /><span>Meu perfil</span></button>
        {role === "Bibliotecária" && <button className={`nav-item ${page === "design" ? "active" : ""}`} onClick={() => navigate("design")}><Icon name="palette" /><span>Design system</span></button>}
      </nav>
      <div className="sidebar-footer"><div className="institution"><span>USJT</span><p>Universidade<br />São Judas Tadeu</p></div><button className="nav-item logout" onClick={onLogout}><Icon name="logout" /><span>Sair</span></button></div>
    </aside>
  </>;
}

function Header({ role, setRole, onMenu }: { role: Role; setRole: (role: Role) => void; onMenu: () => void }) {
  return <header className="header"><button className="icon-btn menu-btn" onClick={onMenu} aria-label="Abrir menu"><Icon name="menu" /></button><div className="header-search"><Icon name="search" /><input aria-label="Buscar no sistema" placeholder="Buscar livros, usuários..." /><kbd>⌘ K</kbd></div><div className="header-actions"><button className="icon-btn notification" aria-label="Notificações"><Icon name="bell" /><span /></button><div className="profile-switch"><Avatar name={role === "Bibliotecária" ? "Ana Martins" : "Mariana Costa"} /><div><strong>{role === "Bibliotecária" ? "Ana Martins" : "Mariana Costa"}</strong><select value={role} onChange={(event) => setRole(event.target.value as Role)} aria-label="Alternar perfil"><option>Bibliotecária</option><option>Leitor</option></select></div><Icon name="chevron" size={14} /></div></div></header>;
}

function Dashboard({ setPage, role }: { setPage: (page: Page) => void; role: Role }) {
  if (role === "Leitor") return <ReaderDashboard setPage={setPage} />;
  const stats = [
    { label: "Total de livros", value: "2.438", note: "+32 este mês", icon: "books" as IconName, tone: "blue" },
    { label: "Livros disponíveis", value: "1.847", note: "75,8% do acervo", icon: "check" as IconName, tone: "green" },
    { label: "Livros emprestados", value: "591", note: "24,2% do acervo", icon: "swap" as IconName, tone: "orange" },
    { label: "Usuários cadastrados", value: "1.206", note: "+18 este mês", icon: "users" as IconName, tone: "purple" },
  ];
  return <div className="page">
    <PageTitle eyebrow="VISÃO GERAL" title="Bom dia, Ana" description="Acompanhe os principais indicadores da biblioteca." action={<><Button variant="secondary" icon="plus" onClick={() => setPage("book-form")}>Cadastrar livro</Button><Button icon="plus" onClick={() => setPage("new-loan")}>Novo empréstimo</Button></>} />
    <div className="stats-grid">{stats.map((stat) => <div className="stat-card" key={stat.label}><div className={`stat-icon ${stat.tone}`}><Icon name={stat.icon} /></div><div><span>{stat.label}</span><strong>{stat.value}</strong><small className={stat.tone === "orange" ? "" : "positive"}>{stat.note}</small></div></div>)}</div>
    <div className="alert alert-warning"><span className="alert-icon"><Icon name="warning" /></span><div><strong>5 empréstimos próximos do prazo</strong><p>Existem devoluções previstas para os próximos 2 dias.</p></div><Button variant="ghost" onClick={() => setPage("loans")}>Ver empréstimos <Icon name="arrow" size={15} /></Button><button className="icon-btn"><Icon name="close" size={16} /></button></div>
    <div className="content-grid">
      <section className="panel panel-wide"><div className="panel-head"><div><h2>Empréstimos recentes</h2><p>Últimas movimentações registradas</p></div><button className="text-action" onClick={() => setPage("loans")}>Ver todos <Icon name="arrow" size={14} /></button></div><LoanTable compact /></section>
      <section className="panel"><div className="panel-head"><div><h2>Atalhos rápidos</h2><p>Ações mais utilizadas</p></div></div><div className="quick-actions"><button onClick={() => setPage("book-form")}><span className="quick-icon blue"><Icon name="book" /></span><div><strong>Cadastrar livro</strong><small>Adicionar ao acervo</small></div><Icon name="arrow" /></button><button onClick={() => setPage("new-loan")}><span className="quick-icon green"><Icon name="swap" /></span><div><strong>Novo empréstimo</strong><small>Registrar uma retirada</small></div><Icon name="arrow" /></button><button onClick={() => setPage("users")}><span className="quick-icon purple"><Icon name="users" /></span><div><strong>Cadastrar usuário</strong><small>Adicionar novo leitor</small></div><Icon name="arrow" /></button></div></section>
    </div>
    <section className="panel"><div className="panel-head"><div><h2>Adicionados recentemente</h2><p>Novos títulos disponíveis no acervo</p></div><button className="text-action" onClick={() => setPage("catalog")}>Ver acervo <Icon name="arrow" size={14} /></button></div><div className="recent-books">{books.slice(0, 4).map((book) => <button key={book.id} className="recent-book" onClick={() => setPage("book-detail")}><BookCover book={book} /><div><strong>{book.title}</strong><span>{book.author}</span><Badge tone={statusTone(book.status)}>{book.status}</Badge></div></button>)}</div></section>
  </div>;
}

function ReaderDashboard({ setPage }: { setPage: (page: Page) => void }) {
  return <div className="page"><PageTitle eyebrow="ÁREA DO LEITOR" title="Olá, Mariana" description="Encontre sua próxima leitura e acompanhe seus empréstimos." action={<Button icon="search" onClick={() => setPage("catalog")}>Explorar acervo</Button>} />
    <div className="reader-hero"><div><span className="eyebrow light">ACERVO DIGITAL</span><h2>Conhecimento para transformar o seu caminho.</h2><p>Explore mais de 2.400 títulos disponíveis na biblioteca São Judas.</p><div className="hero-search"><Icon name="search" /><input placeholder="Busque por título, autor ou ISBN" /><Button onClick={() => setPage("catalog")}>Buscar</Button></div></div><div className="hero-books"><BookCover book={books[1]} large /><BookCover book={books[0]} large /><BookCover book={books[3]} large /></div></div>
    <div className="stats-grid reader-stats"><div className="stat-card"><div className="stat-icon blue"><Icon name="books" /></div><div><span>Empréstimos ativos</span><strong>2</strong><small>de 3 permitidos</small></div></div><div className="stat-card"><div className="stat-icon orange"><Icon name="clock" /></div><div><span>Próxima devolução</span><strong className="stat-date">22 mai.</strong><small>faltam 4 dias</small></div></div><div className="stat-card"><div className="stat-icon green"><Icon name="check" /></div><div><span>Histórico de leituras</span><strong>18</strong><small className="positive">livros devolvidos</small></div></div></div>
    <section className="panel"><div className="panel-head"><div><h2>Meus empréstimos</h2><p>Acompanhe seus livros e prazos</p></div><button className="text-action" onClick={() => setPage("profile")}>Ver histórico <Icon name="arrow" size={14} /></button></div><LoanTable compact reader /></section>
  </div>;
}

function LoanTable({ compact = false, reader = false, returns = false }: { compact?: boolean; reader?: boolean; returns?: boolean }) {
  const data = reader ? loans.slice(0, 2) : returns ? loans.slice(0, 3) : compact ? loans.slice(0, 4) : loans;
  return <div className="table-wrap"><table><thead><tr>{!reader && <th>Usuário</th>}<th>Livro</th><th>Data do empréstimo</th><th>Prazo</th><th>Status</th>{!compact && <th className="align-right">Ações</th>}</tr></thead><tbody>{data.map((loan, index) => <tr key={`${loan.book}-${index}`}>{!reader && <td><div className="table-user"><Avatar name={loan.user} /><div><strong>{loan.user}</strong><small>RA 24{804 + index}91</small></div></div></td>}<td><strong className="book-cell">{loan.book}</strong></td><td>{loan.start}</td><td>{loan.due}</td><td><Badge tone={statusTone(loan.status)}>{loan.status}</Badge></td>{!compact && <td className="align-right">{returns ? <Button variant="secondary" icon="return">Registrar devolução</Button> : <button className="icon-btn"><Icon name="more" /></button>}</td>}</tr>)}</tbody></table></div>;
}

function Catalog({ setPage, role }: { setPage: (page: Page) => void; role: Role }) {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"table" | "grid">("table");
  const filtered = books.filter((book) => `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="page"><PageTitle eyebrow="ACERVO" title="Catálogo de livros" description="Consulte e gerencie todos os títulos da biblioteca." action={role === "Bibliotecária" ? <Button icon="plus" onClick={() => setPage("book-form")}>Adicionar livro</Button> : undefined} />
    <section className="panel filter-panel"><div className="catalog-tools"><label className="search-input"><Icon name="search" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por título, autor ou ISBN..." /></label><select><option>Todas as categorias</option><option>Tecnologia</option><option>Design</option><option>História</option></select><select><option>Disponibilidade</option><option>Disponível</option><option>Emprestado</option></select><Button variant="secondary" icon="filter">Mais filtros</Button><div className="view-toggle"><button className={view === "table" ? "active" : ""} onClick={() => setView("table")}><Icon name="menu" /></button><button className={view === "grid" ? "active" : ""} onClick={() => setView("grid")}><Icon name="grid" /></button></div></div></section>
    <div className="results-head"><p><strong>{filtered.length}</strong> livros encontrados</p><select><option>Mais recentes</option><option>A–Z</option></select></div>
    {filtered.length === 0 ? <EmptyState icon="search" title="Nenhum livro encontrado" description="Tente ajustar os termos de busca ou remover os filtros." action="Limpar busca" onAction={() => setQuery("")} /> : view === "grid" ? <div className="book-grid">{filtered.map((book) => <article className="book-card" key={book.id}><BookCover book={book} large /><div><Badge tone={statusTone(book.status)}>{book.status}</Badge><h3>{book.title}</h3><p>{book.author}</p><small>{book.category} · {book.available}</small><Button variant="secondary" onClick={() => setPage("book-detail")}>Ver detalhes</Button></div></article>)}</div> : <section className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>Livro</th><th>Categoria</th><th>Disponibilidade</th><th>Exemplares</th><th className="align-right">Ações</th></tr></thead><tbody>{filtered.map((book) => <tr key={book.id}><td><div className="book-row"><BookCover book={book} /><div><strong>{book.title}</strong><span>{book.author}</span><small>ISBN 978-85-7522-{book.id}24-1</small></div></div></td><td>{book.category}</td><td><Badge tone={statusTone(book.status)}>{book.status}</Badge></td><td><strong>{book.available}</strong></td><td><div className="row-actions"><Button variant="ghost" icon="eye" onClick={() => setPage("book-detail")}>Detalhes</Button>{role === "Bibliotecária" && <><button className="icon-btn"><Icon name="edit" /></button><button className="icon-btn danger"><Icon name="trash" /></button></>}</div></td></tr>)}</tbody></table></div><Pagination /></section>}
  </div>;
}

function BookForm({ setPage }: { setPage: (page: Page) => void }) {
  const [saved, setSaved] = useState(false);
  return <div className="page narrow-page"><div className="back-link"><button onClick={() => setPage("catalog")}><Icon name="arrow" /> Voltar para o acervo</button></div><PageTitle eyebrow="GESTÃO DO ACERVO" title="Cadastrar novo livro" description="Preencha os dados bibliográficos e a disponibilidade do título." />
    {saved && <div className="alert alert-success"><span className="alert-icon"><Icon name="check" /></span><div><strong>Livro cadastrado com sucesso</strong><p>O título já está disponível no acervo.</p></div><button className="icon-btn" onClick={() => setSaved(false)}><Icon name="close" /></button></div>}
    <form className="panel form-panel" onSubmit={(event) => { event.preventDefault(); setSaved(true); }}><div className="form-section"><div className="section-number">1</div><div className="form-content"><h2>Informações principais</h2><p>Dados de identificação do livro.</p><div className="form-grid"><Field label="Título do livro" required placeholder="Ex.: Arquitetura Limpa" wide /><Field label="Autor" required placeholder="Nome do autor" /><Field label="ISBN" required placeholder="978-00-0000-000-0" /><label className="field"><span>Categoria <b>*</b></span><select required><option value="">Selecione uma categoria</option><option>Tecnologia</option><option>Design</option><option>História</option></select></label><Field label="Editora" placeholder="Nome da editora" /><Field label="Ano de publicação" placeholder="2025" /><Field label="Quantidade" required placeholder="1" type="number" /></div></div></div><div className="form-divider" /><div className="form-section"><div className="section-number">2</div><div className="form-content"><h2>Capa do livro</h2><p>Formatos JPG ou PNG. Tamanho máximo de 5 MB.</p><label className="upload-area"><input type="file" accept="image/*" /><span className="upload-icon"><Icon name="upload" /></span><strong>Arraste uma imagem ou <u>selecione do computador</u></strong><small>Recomendado: proporção 2:3, mínimo 400 × 600</small></label></div></div><div className="form-footer"><Button variant="secondary" onClick={() => setPage("catalog")}>Cancelar</Button><Button type="submit" icon="check">Salvar livro</Button></div></form>
  </div>;
}

function Field({ label, required, placeholder, wide, type = "text", error }: { label: string; required?: boolean; placeholder: string; wide?: boolean; type?: string; error?: string }) {
  return <label className={`field ${wide ? "field-wide" : ""} ${error ? "field-error" : ""}`}><span>{label} {required && <b>*</b>}</span><input type={type} placeholder={placeholder} required={required} />{error && <small>{error}</small>}</label>;
}

function BookDetail({ setPage, role }: { setPage: (page: Page) => void; role: Role }) {
  const book = books[0];
  return <div className="page"><div className="back-link"><button onClick={() => setPage("catalog")}><Icon name="arrow" /> Voltar para o acervo</button></div><div className="detail-card panel"><div className="detail-cover"><BookCover book={book} large /></div><div className="detail-main"><div className="detail-top"><div><Badge tone="success">Disponível</Badge><h1>{book.title}</h1><p>por <strong>{book.author}</strong></p></div>{role === "Bibliotecária" && <div className="page-actions"><Button variant="secondary" icon="edit" onClick={() => setPage("book-form")}>Editar</Button><Button variant="danger" icon="trash">Excluir</Button></div>}</div><div className="metadata"><div><span>ISBN</span><strong>978-85-7522-724-9</strong></div><div><span>Categoria</span><strong>Tecnologia</strong></div><div><span>Editora</span><strong>Alta Books</strong></div><div><span>Publicação</span><strong>2019</strong></div></div><div className="availability"><div><span className="availability-icon"><Icon name="books" /></span><div><span>Disponibilidade</span><strong>4 exemplares disponíveis</strong><small>de 5 exemplares no total</small></div></div><div className="progress"><span /></div></div><div className="detail-description"><h2>Sobre este livro</h2><p>Um guia essencial sobre princípios e práticas para construir sistemas de software robustos, flexíveis e de fácil manutenção. Robert C. Martin apresenta conceitos fundamentais para profissionais e estudantes de tecnologia.</p></div><div className="detail-actions"><Button icon="swap" onClick={() => setPage("new-loan")}>{role === "Leitor" ? "Ver disponibilidade" : "Realizar empréstimo"}</Button></div></div></div>
  </div>;
}

function Users({ setPage }: { setPage: (page: Page) => void }) {
  return <div className="page"><PageTitle eyebrow="ADMINISTRAÇÃO" title="Usuários" description="Gerencie leitores e membros da equipe." action={<Button icon="plus">Adicionar usuário</Button>} /><section className="panel filter-panel"><div className="catalog-tools"><label className="search-input"><Icon name="search" /><input placeholder="Buscar por nome ou e-mail..." /></label><select><option>Todos os perfis</option><option>Leitor</option><option>Bibliotecário</option></select><select><option>Todos os status</option><option>Ativo</option><option>Pendente</option></select><Button variant="secondary" icon="filter">Filtrar</Button></div></section><section className="panel table-panel"><div className="table-wrap"><table><thead><tr><th>Usuário</th><th>Perfil</th><th>Status</th><th>Empréstimos ativos</th><th className="align-right">Ações</th></tr></thead><tbody>{users.map((user) => <tr key={user.email}><td><div className="table-user"><Avatar name={user.name} /><div><strong>{user.name}</strong><small>{user.email}</small></div></div></td><td>{user.role}</td><td><Badge tone={statusTone(user.status)}>{user.status}</Badge></td><td><strong>{user.active}</strong> / 3</td><td><div className="row-actions"><Button variant="ghost" icon="eye" onClick={() => setPage("profile")}>Ver perfil</Button><button className="icon-btn"><Icon name="edit" /></button><button className="icon-btn danger"><Icon name="trash" /></button></div></td></tr>)}</tbody></table></div><Pagination /></section></div>;
}

function Profile({ role }: { role: Role }) {
  const name = role === "Bibliotecária" ? "Ana Martins" : "Mariana Costa";
  return <div className="page"><PageTitle eyebrow="CONTA" title="Meu perfil" description="Dados pessoais e histórico de atividades." action={<Button variant="secondary" icon="edit">Editar perfil</Button>} /><div className="profile-grid"><section className="panel profile-card"><Avatar name={name} large /><h2>{name}</h2><p>{role === "Bibliotecária" ? "ana.martins@devrk.edu.br" : "mariana.costa@saojudas.edu.br"}</p><Badge tone="success">Conta ativa</Badge><div className="profile-info"><div><span>Perfil</span><strong>{role}</strong></div><div><span>Registro</span><strong>{role === "Bibliotecária" ? "BIB-0042" : "RA 2480491"}</strong></div><div><span>Membro desde</span><strong>Fevereiro de 2024</strong></div></div></section><section className="panel profile-loans"><div className="panel-head"><div><h2>Empréstimos ativos</h2><p>Livros atualmente com você</p></div><Badge tone="info">2 de 3</Badge></div><div className="active-loan-list">{books.slice(0, 2).map((book, index) => <div className="active-loan" key={book.id}><BookCover book={book} /><div><strong>{book.title}</strong><span>{book.author}</span><small><Icon name="calendar" size={14} /> Devolução em {index ? "29 mai. 2025" : "22 mai. 2025"}</small></div><Badge tone={index ? "success" : "warning"}>{index ? "Ativo" : "Próximo do prazo"}</Badge></div>)}</div></section></div><section className="panel"><div className="panel-head"><div><h2>Histórico de empréstimos</h2><p>Todos os registros de retirada e devolução</p></div><Button variant="secondary" icon="filter">Filtrar período</Button></div><LoanTable compact={false} reader /></section></div>;
}

function Loans({ setPage }: { setPage: (page: Page) => void }) {
  return <div className="page"><PageTitle eyebrow="CIRCULAÇÃO" title="Empréstimos" description="Controle retiradas, prazos e devoluções." action={<Button icon="plus" onClick={() => setPage("new-loan")}>Novo empréstimo</Button>} /><div className="mini-stats"><div><span className="dot blue" /><p><strong>8</strong> ativos</p></div><div><span className="dot yellow" /><p><strong>5</strong> próximos do prazo</p></div><div><span className="dot red" /><p><strong>3</strong> atrasados</p></div><div><span className="dot green" /><p><strong>42</strong> devolvidos este mês</p></div></div><section className="panel filter-panel"><div className="catalog-tools"><label className="search-input"><Icon name="search" /><input placeholder="Buscar usuário ou livro..." /></label><select><option>Todos os status</option><option>Ativo</option><option>Atrasado</option></select><label className="date-filter"><Icon name="calendar" /><span>Este mês</span></label><Button variant="secondary" icon="filter">Filtrar</Button></div></section><section className="panel table-panel"><LoanTable /><Pagination /></section></div>;
}

function NewLoan({ setPage }: { setPage: (page: Page) => void }) {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  if (confirmed) return <div className="page center-page"><div className="success-card panel"><span className="success-mark"><Icon name="check" size={32} /></span><span className="eyebrow">EMPRÉSTIMO CONFIRMADO</span><h1>Tudo certo!</h1><p>O empréstimo de <strong>Arquitetura Limpa</strong> para <strong>Mariana Costa</strong> foi registrado.</p><div className="receipt"><div><span>Retirada</span><strong>18 mai. 2025</strong></div><Icon name="arrow" /><div><span>Devolução prevista</span><strong>01 jun. 2025</strong></div></div><Button onClick={() => setPage("loans")}>Ver empréstimos</Button><Button variant="ghost" onClick={() => { setConfirmed(false); setStep(1); }}>Registrar outro</Button></div></div>;
  return <div className="page narrow-page"><div className="back-link"><button onClick={() => setPage("loans")}><Icon name="arrow" /> Voltar para empréstimos</button></div><PageTitle eyebrow="CIRCULAÇÃO" title="Novo empréstimo" description="Selecione o leitor e o livro para registrar a retirada." /><div className="stepper">{["Selecionar usuário", "Selecionar livro", "Confirmar"].map((label, index) => <div className={step >= index + 1 ? "active" : ""} key={label}><span>{step > index + 1 ? <Icon name="check" size={14} /> : index + 1}</span><strong>{label}</strong></div>)}</div><section className="panel loan-flow">{step === 1 && <><div className="flow-head"><span className="section-number">1</span><div><h2>Quem realizará o empréstimo?</h2><p>Busque pelo nome, e-mail ou número de registro.</p></div></div><label className="search-input large-search"><Icon name="search" /><input placeholder="Buscar usuário..." autoFocus /></label><button className="selection-card selected"><Avatar name="Mariana Costa" large /><div><strong>Mariana Costa</strong><span>mariana.costa@saojudas.edu.br · RA 2480491</span><small><Badge tone="success">Conta ativa</Badge> 2 de 3 empréstimos ativos</small></div><span className="radio"><Icon name="check" size={13} /></span></button><div className="flow-footer"><span /><Button onClick={() => setStep(2)}>Continuar <Icon name="arrow" size={15} /></Button></div></>}{step === 2 && <><div className="flow-head"><span className="section-number">2</span><div><h2>Qual livro será emprestado?</h2><p>Apenas exemplares disponíveis podem ser selecionados.</p></div></div><label className="search-input large-search"><Icon name="search" /><input placeholder="Buscar título, autor ou ISBN..." autoFocus /></label>{books.slice(0, 3).map((book, index) => <button className={`selection-card ${index === 0 ? "selected" : ""} ${index === 2 ? "disabled" : ""}`} disabled={index === 2} key={book.id}><BookCover book={book} /><div><strong>{book.title}</strong><span>{book.author} · {book.category}</span><small><Badge tone={statusTone(book.status)}>{book.status}</Badge> {book.available} exemplares</small></div>{index === 0 && <span className="radio"><Icon name="check" size={13} /></span>}</button>)}<div className="flow-footer"><Button variant="secondary" onClick={() => setStep(1)}>Voltar</Button><Button onClick={() => setStep(3)}>Continuar <Icon name="arrow" size={15} /></Button></div></>}{step === 3 && <><div className="flow-head"><span className="section-number">3</span><div><h2>Revise e confirme</h2><p>Confira os dados antes de registrar o empréstimo.</p></div></div><div className="loan-summary"><div className="summary-person"><Avatar name="Mariana Costa" large /><div><span>LEITOR</span><strong>Mariana Costa</strong><small>RA 2480491</small></div></div><div className="summary-book"><BookCover book={books[0]} /><div><span>LIVRO</span><strong>Arquitetura Limpa</strong><small>Robert C. Martin</small></div></div><div className="summary-dates"><div><Icon name="calendar" /><span>Data da retirada<strong>18 mai. 2025</strong></span></div><Icon name="arrow" /><div><Icon name="calendar" /><span>Prazo de devolução<strong>01 jun. 2025</strong></span></div></div></div><div className="alert alert-info"><span className="alert-icon"><Icon name="check" /></span><div><strong>Empréstimo permitido</strong><p>O livro está disponível e o leitor está dentro do limite.</p></div></div><div className="flow-footer"><Button variant="secondary" onClick={() => setStep(2)}>Voltar</Button><Button icon="check" onClick={() => setConfirmed(true)}>Confirmar empréstimo</Button></div></>}</section></div>;
}

function Returns() {
  const [returned, setReturned] = useState(false);
  return <div className="page"><PageTitle eyebrow="CIRCULAÇÃO" title="Devoluções" description="Registre devoluções e atualize o acervo." />{returned && <div className="alert alert-success"><span className="alert-icon"><Icon name="check" /></span><div><strong>Devolução registrada com sucesso</strong><p>O exemplar já consta como disponível no acervo.</p></div><button className="icon-btn" onClick={() => setReturned(false)}><Icon name="close" /></button></div>}<section className="panel filter-panel"><div className="catalog-tools"><label className="search-input"><Icon name="search" /><input placeholder="Buscar empréstimo por usuário ou livro..." /></label><select><option>Todos os prazos</option><option>No prazo</option><option>Atrasado</option></select><Button variant="secondary" icon="filter">Filtrar</Button></div></section><section className="panel table-panel" onClick={(event) => { if ((event.target as HTMLElement).closest(".btn")) setReturned(true); }}><LoanTable returns /><Pagination /></section></div>;
}

function DesignSystem() {
  return <div className="page"><PageTitle eyebrow="DEV RK" title="Design system" description="Fundamentos e componentes para uma experiência consistente." /><section className="design-section"><h2>Fundamentos</h2><div className="ds-grid"><div className="panel ds-card"><span className="ds-label">CORES</span><div className="swatches"><div className="swatch primary"><span>Azul petróleo</span><small>Principal</small></div><div className="swatch ink"><span>Azul escuro</span><small>Texto</small></div><div className="swatch success"><span>Verde sálvia</span><small>Destaque</small></div><div className="swatch danger"><span>Azul acinzentado</span><small>Secundária</small></div></div></div><div className="panel ds-card"><span className="ds-label">TIPOGRAFIA</span><div className="type-sample"><h1>Interface clara.</h1><h2>Hierarquia funcional</h2><p>Inter, sans-serif · Texto de interface compacto e legível.</p><small>Legenda e metadados</small></div></div></div></section><section className="design-section"><h2>Componentes</h2><div className="panel components-card"><div className="component-group"><span className="ds-label">BOTÕES</span><div className="inline-components"><Button>Primário</Button><Button variant="secondary">Secundário</Button><Button variant="ghost">Terciário</Button><Button variant="danger">Excluir</Button><Button disabled>Desabilitado</Button></div></div><div className="component-group"><span className="ds-label">STATUS</span><div className="inline-components"><Badge tone="success">Disponível</Badge><Badge tone="info">Em andamento</Badge><Badge tone="warning">Próximo do prazo</Badge><Badge tone="danger">Atrasado</Badge><Badge>Neutro</Badge></div></div><div className="component-group"><span className="ds-label">CAMPOS</span><div className="form-grid ds-form"><Field label="Campo padrão" placeholder="Digite uma informação" /><Field label="Estado de erro" placeholder="ISBN" error="Informe um ISBN válido." /><label className="field"><span>Seleção</span><select><option>Selecione uma opção</option></select></label></div></div></div></section><section className="design-section"><h2>Estados de interface</h2><div className="states-grid"><EmptyState icon="books" title="Nenhum item por aqui" description="Os livros cadastrados aparecerão nesta lista." action="Adicionar livro" /><div className="panel loading-card"><div className="skeleton skeleton-title" /><div className="skeleton" /><div className="skeleton" /><div className="skeleton skeleton-short" /><span>Carregando conteúdo...</span></div><div className="panel no-results"><Icon name="search" size={32} /><strong>Busca sem resultados</strong><p>Revise a ortografia ou tente outro termo.</p></div></div></section></div>;
}

function Pagination() {
  return <div className="pagination"><span>Mostrando 1–5 de 2.438</span><div><button disabled><Icon name="arrow" /></button><button className="active">1</button><button>2</button><button>3</button><span>…</span><button>488</button><button><Icon name="arrow" /></button></div></div>;
}

function EmptyState({ icon, title, description, action, onAction }: { icon: IconName; title: string; description: string; action: string; onAction?: () => void }) {
  return <div className="panel empty-state"><span><Icon name={icon} size={28} /></span><h2>{title}</h2><p>{description}</p><Button variant="secondary" onClick={onAction}>{action}</Button></div>;
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [error, setError] = useState(false);
  return <main className="login-page"><div className="login-brand-panel"><div className="login-brand"><div className="brand-mark"><span>D</span></div><strong>Dev<span>RK</span></strong></div><div className="login-message"><span className="eyebrow light">UNIVERSIDADE SÃO JUDAS TADEU</span><h1>Conhecimento organizado.<br />Acesso simplificado.</h1><p>Uma plataforma completa para conectar pessoas, livros e novas possibilidades.</p></div><div className="login-footer">Desenvolvido pela equipe DevRK · 2025</div></div><div className="login-form-side"><form className="login-card" onSubmit={(event) => { event.preventDefault(); if (error) onLogin(); else setError(true); }}><div className="mobile-login-brand"><div className="brand-mark"><span>D</span></div><strong>Dev<span>RK</span></strong></div><span className="eyebrow">BEM-VINDO DE VOLTA</span><h2>Gestão de Biblioteca</h2><p>Entre com suas credenciais para acessar a plataforma.</p>{error && <div className="login-error"><Icon name="warning" /><span><strong>Credenciais inválidas</strong><small>Verifique seu usuário e senha. Clique novamente para entrar na demonstração.</small></span></div>}<label className="field"><span>E-mail ou usuário</span><input type="email" placeholder="seu.nome@saojudas.edu.br" defaultValue="ana.martins@devrk.edu.br" /></label><label className="field"><span>Senha</span><div className="password-field"><input type="password" placeholder="Digite sua senha" defaultValue="demonstracao" /><Icon name="eye" /></div></label><div className="login-options"><label><input type="checkbox" /> Lembrar de mim</label><button type="button">Esqueci minha senha</button></div><Button type="submit">Entrar</Button><small className="login-help">Precisa de ajuda? <strong>Fale com o suporte</strong></small></form></div></main>;
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [page, setPage] = useState<Page>("dashboard");
  const [role, setRole] = useState<Role>("Bibliotecária");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = useMemo(() => {
    const pages: Record<Page, ReactNode> = {
      dashboard: <Dashboard setPage={setPage} role={role} />,
      catalog: <Catalog setPage={setPage} role={role} />,
      "book-form": <BookForm setPage={setPage} />,
      "book-detail": <BookDetail setPage={setPage} role={role} />,
      users: <Users setPage={setPage} />,
      profile: <Profile role={role} />,
      loans: <Loans setPage={setPage} />,
      "new-loan": <NewLoan setPage={setPage} />,
      returns: <Returns />,
      design: <DesignSystem />,
    };
    return pages[page];
  }, [page, role]);
  if (!loggedIn) return <Login onLogin={() => { setLoggedIn(true); setPage("dashboard"); }} />;
  return <div className="app-shell"><Sidebar page={page} setPage={setPage} role={role} open={menuOpen} onClose={() => setMenuOpen(false)} onLogout={() => setLoggedIn(false)} /><div className="main-shell"><Header role={role} setRole={(nextRole) => { setRole(nextRole); setPage("dashboard"); }} onMenu={() => setMenuOpen(true)} /><main className="main-content">{content}</main></div></div>;
}
