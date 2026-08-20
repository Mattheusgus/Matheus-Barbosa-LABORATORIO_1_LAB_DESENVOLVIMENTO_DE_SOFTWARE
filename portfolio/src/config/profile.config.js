/* =============================================================================
 *  ✨ ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO — EDITE APENAS ESTE ARQUIVO ✨
 * =============================================================================
 *
 *  Cada membro do grupo deve criar a sua própria versão do portfólio
 *  alterando SOMENTE os valores abaixo. Nenhum componente precisa ser tocado.
 *
 *  📸 FOTOS:
 *    - Coloque suas imagens na pas:  public/profile/
 *    - Referencie começando com "/profile/..."  (ex.: "/profile/minha-foto.jpg")
 *    - Já existe um placeholder pronto: "/profile/avatar-placeholder.svg"
 *
 *  🌐 IDIOMAS:
 *    - Campos com { pt: "...", en: "..." } são bilíngues (toggle PT/EN no topo).
 *    - Se não quiser tradução, basta repetir o mesmo texto nos dois.
 *
 * ========================================================================== */

export const profile = {
  /* ---------------------------------------------------------------------------
   * 1) IDENTIDADE
   * ------------------------------------------------------------------------ */
  identity: {
    name: 'Matheus Barbosa',        // Nome completo (usado no rodapé, alt de imagem)
    firstName: 'Matheus',           // Primeiro nome (saudação)
    logo: 'Matheus.dev',            // Texto do logo no cabeçalho: < Matheus.dev />
    role: {
      pt: 'Desenvolvedor Full Stack',
      en: 'Full Stack Developer',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O MATHEUS BARBOSA',
      en: 'HELLO, I AM MATHEUS BARBOSA',
    },
    bio: {
      pt: 'Desenvolvedor experiente focado em construir soluções web eficientes, escaláveis e de alta performance. Especialista na criação de arquiteturas completas que unem front-ends fluidos e sistemas backend robustos com foco na melhor experiência de usuário.',
      en: 'Experienced full-stack engineer focused on building efficient, scalable, and high-performance web systems. Specialist in crafting comprehensive architectures that join smooth front-ends with robust backend infrastructures.',
    },
    // Texto secundário (aparece menor, abaixo da bio principal)
    bioSecondary: {
      pt: 'Apaixonado por código limpo, boas práticas e por transformar ideias em produtos reais.',
      en: 'Passionate about clean code, best practices, and turning ideas into real products.',
    },
  },

  /* ---------------------------------------------------------------------------
   * 2) FOTO / MÍDIA DO HERO
   *    heroMedia: 'code'  -> mostra a janela de código (padrão do Figma)
   *    heroMedia: 'photo' -> mostra a sua foto de perfil
   * ------------------------------------------------------------------------ */
  hero: {
    heroMedia: 'photo', // 'photo' | 'code'
    photo: '/profile/avatar-placeholder.svg', // troque pela sua foto em public/profile/
    // Favicon do navegador (opcional). Deixe null para usar o padrão < / >
    favicon: null,
    cta: {
      primary: { pt: 'Ver Projetos', en: 'View Projects' },
      secondary: { pt: 'Entrar em Contato', en: 'Get in Touch' },
    },
  },

  /* ---------------------------------------------------------------------------
   * 3) PROJETOS EM DESTAQUE
   *    - preview: gradiente Tailwind do cartão (ou use "image" com uma foto).
   *    - image (opcional): caminho em /profile/... para usar imagem real.
   * ------------------------------------------------------------------------ */
  projects: [
    {
      id: 'financas-ai',
      year: '2024',
      title: 'Finanças AI',
      description: {
        pt: 'Dashboard financeiro inteligente que utiliza inteligência artificial para categorizar despesas automáticas e gerar previsões de orçamento com modelos preditivos.',
        en: 'Intelligent financial dashboard that uses AI to automatically categorize expenses and generate budget forecasts with predictive models.',
      },
      tags: ['React', 'Python', 'Tailwind', 'FastAPI'],
      repo: 'https://github.com/seu-usuario/financas-ai',
      demo: '',
      image: '', // ex.: '/profile/projeto1.png' (deixe vazio p/ usar o gradiente)
      preview: 'from-cyan-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      id: 'taskflow-kanban',
      year: '2023',
      title: 'TaskFlow Kanban',
      description: {
        pt: 'Gerenciador de tarefas em tempo real focado em equipes ágeis, com atualizações instantâneas via WebSockets, painel drag-and-drop avançado e metas integradas.',
        en: 'Real-time task manager focused on agile teams, with instant WebSocket updates, advanced drag-and-drop board and integrated goals.',
      },
      tags: ['TypeScript', 'NestJS', 'Next.js', 'WebSockets'],
      repo: 'https://github.com/seu-usuario/taskflow',
      demo: '',
      image: '',
      preview: 'from-fuchsia-500/25 via-purple-500/10 to-transparent',
    },
    {
      id: 'devcommerce-api',
      year: '2022',
      title: 'DevCommerce API',
      description: {
        pt: 'API RESTful robusta para plataformas de comércio eletrônico, capaz de processar milhares de pedidos simultâneos, integrada com gateways de pagamentos.',
        en: 'Robust RESTful API for e-commerce platforms, able to process thousands of simultaneous orders, integrated with payment gateways.',
      },
      tags: ['Node.js', 'PostgreSQL', 'Docker', 'Redis'],
      repo: 'https://github.com/seu-usuario/devcommerce',
      demo: '',
      image: '',
      preview: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    },
    {
      id: 'syncstate-engine',
      year: '2021',
      title: 'SyncState Engine',
      description: {
        pt: 'Biblioteca leve para sincronização de estado global descentralizado, reduzindo chamadas a APIs ao mínimo absoluto por cache inteligente.',
        en: 'Lightweight library for decentralized global state synchronization, reducing API calls to an absolute minimum via smart caching.',
      },
      tags: ['JavaScript', 'GraphQL', 'MongoDB', 'Jest'],
      repo: 'https://github.com/seu-usuario/syncstate',
      demo: '',
      image: '',
      preview: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
  ],

  /* ---------------------------------------------------------------------------
   * 4) EXPERIÊNCIAS PROFISSIONAIS
   * ------------------------------------------------------------------------ */
  experiences: [
    {
      id: 'techglow',
      initials: 'TG',
      role: { pt: 'Senior Full Stack Developer', en: 'Senior Full Stack Developer' },
      company: 'TechGlow Corp',
      period: { pt: 'Jan 2023 – Atual', en: 'Jan 2023 – Present' },
      description: {
        pt: 'Liderança técnica na modernização da arquitetura de microsserviços. Implementei novos microsserviços com NestJS reduzindo o tempo de carregamento das telas principais em 40%.',
        en: 'Technical leadership in modernizing the microservices architecture. Implemented new NestJS microservices reducing main screen load time by 40%.',
      },
    },
    {
      id: 'inova',
      initials: 'IS',
      role: { pt: 'Full Stack Developer', en: 'Full Stack Developer' },
      company: 'Inova Software',
      period: { pt: 'Mar 2021 – Dez 2022', en: 'Mar 2021 – Dec 2022' },
      description: {
        pt: 'Desenvolvimento de APIs RESTful estruturadas em Node.js integradas a interfaces ricas com React.js. Atuei no monitoramento de logs e otimização de queries Postgres SQL.',
        en: 'Development of structured RESTful APIs in Node.js integrated with rich React.js interfaces. Worked on log monitoring and Postgres SQL query optimization.',
      },
    },
    {
      id: 'aerotech',
      initials: 'AL',
      role: { pt: 'Front-End Intern', en: 'Front-End Intern' },
      company: 'AeroTech Lab',
      period: { pt: 'Ago 2020 – Fev 2021', en: 'Aug 2020 – Feb 2021' },
      description: {
        pt: 'Estágio voltado ao desenvolvimento de landing pages interativas utilizando HTML, CSS, React e Sass. Implementação de melhorias de acessibilidade digital WCAG.',
        en: 'Internship focused on building interactive landing pages using HTML, CSS, React and Sass. Implemented WCAG digital accessibility improvements.',
      },
    },
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO (cards clicáveis da seção final)
   *    icon: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'phone' | 'site'
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'matheus@example.com',    href: 'mailto:matheus@example.com' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', value: '+55 (11) 99999-9999',    href: 'https://wa.me/5511999999999' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/matheus', href: 'https://linkedin.com/in/matheus' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/matheus',      href: 'https://github.com/matheus' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (ícones do rodapé)
   *    icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'site'
   * ------------------------------------------------------------------------ */
  socials: [
    { icon: 'github',   href: 'https://github.com/matheus',      label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/matheus', label: 'LinkedIn' },
    { icon: 'twitter',  href: 'https://twitter.com/matheus',     label: 'Twitter' },
  ],

  /* ---------------------------------------------------------------------------
   * 7) TEXTOS DA SEÇÃO DE CONTATO + RODAPÉ
   * ------------------------------------------------------------------------ */
  contactSection: {
    lead: {
      pt: 'Fique à vontade para entrar em contato se você tiver uma proposta de projeto, se quiser discutir sobre tecnologia, ou simplesmente dar um alô.',
      en: 'Feel free to reach out if you have a project proposal, want to discuss technology, or simply say hi.',
    },
  },
}

export default profile
