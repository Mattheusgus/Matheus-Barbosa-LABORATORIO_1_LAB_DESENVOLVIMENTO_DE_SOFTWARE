/* =============================================================================
 *  ✨ ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO — EDITE APENAS ESTE ARQUIVO ✨
 * =============================================================================
 *
 *  Cada membro do grupo deve criar a sua própria versão do portfólio
 *  alterando SOMENTE os valores abaixo. Nenhum componente precisa ser tocado.
 *
 *  📸 FOTOS:
 *    - Coloque suas imagens na pasta:  public/profile/
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
    name: 'Cleverson Resende Rosa',               // Nome completo (usado no rodapé, alt de imagem)
    firstName: 'Cleverson',              // Primeiro nome (saudação)
    logo: 'cleverson.dev',            // Texto do logo no cabeçalho: < seunome.dev />
    role: {
      pt: 'Analista de Sistemas',
      en: 'System Analyst',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O CLEVSON',
      en: 'HELLO, I AM CLEVSON',
    },
    bio: {
      pt: 'Olá! Sou um Analista de Sistemas apaixonado por tecnologia e desenvolvimento de soluções inovadoras. Tenho experiência em diversas linguagens de programação e frameworks, sempre buscando aprimorar minhas habilidades e contribuir para projetos desafiadores.',
      en: 'Hello! I am a System Analyst passionate about technology and innovative solution development. I have experience in various programming languages and frameworks, always seeking to improve my skills and contribute to challenging projects.',
    },
    // Texto secundário (aparece menor, abaixo da bio principal)
    bioSecondary: {
      pt: 'C#, .NET, JavaScript, React, Node.js, SQL, Git, Docker, AWS',
      en: 'C#, .NET, JavaScript, React, Node.js, SQL, Git, Docker, AWS',
    },
  },

  /* ---------------------------------------------------------------------------
   * 2) FOTO / MÍDIA DO HERO
   *    heroMedia: 'code'  -> mostra a janela de código (padrão do Figma)
   *    heroMedia: 'photo' -> mostra a sua foto de perfil
   * ------------------------------------------------------------------------ */
  hero: {
    heroMedia: 'photo', // 'photo' | 'code'
    photo: '/profile/EU_Ghibli.png', // troque pela sua foto em public/profile/
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
      id: 'Infocentre',
      year: '2014-atual',
      title: 'Infocentre',
      description: {
        pt: 'Monólito modular de gestão da Petronas Lubricants International: um ERP que se integra ao SAP, oferecendo uma interface amigável e automações para os principais módulos, como MM e SD. Além de otimizar processos, a solução reduz os custos com licenças do SAP diante do elevado número de usuários, visto que se trata de um sistema global. Seus principais módulos incluem Marketing, Financeiro, Logística e Laboratório.',
        en: 'Modular monolith management platform developed for Petronas Lubricants International. The system integrates directly with SAP, delivering intuitive UI and automated workflows for core MM and SD operations. Designed for a global environment, it significantly lowers SAP licensing expenses while delivering tailored functionality across Marketing, Finance, Logistics, and Lab Management.',
      },
      tags: ['BLAZOR/RAZOR', 'DOTNET', 'C#', 'SQL SERVER'],
      repo: 'https://github.com/cleverson-programmer/infocentre',
      demo: '',
      image: '', // ex.: '/profile/projeto1.png' (deixe vazio p/ usar o gradiente)
      preview: 'from-cyan-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      id: 'myInfocentre',
      year: '2022',
      title: 'myInfocentre',
      description: {
        pt: 'Evolução do ecossistema Infocentre para uma arquitetura distribuída em microsserviços com suporte a alta disponibilidade global. A nova versão consolida a migração da infraestrutura on-premises para serviços AWS (Lambda, Cognito, EC2 e RDS), expande o escopo de integrações nativas com módulos SAP e implementa regras de compliance fiscal em conformidade com as exigências da Receita Federal.',
        en: 'Infocentre next-generation platform, redesigned using a microservices architecture for global scalability. The initiative involves decommissioning on-premises infrastructure in favor of AWS cloud services (Lambda, Cognito, EC2, RDS), expanding SAP module integrations, and ensuring regulatory compliance with updated federal tax requirements.',
      },
      tags: ['C#', '.NET', 'AWS', 'PostgreSQL'],
      repo: 'https://github.com/cleverson-programmer/myInfocentre',
      demo: '',
      image: '',
      preview: 'from-fuchsia-500/25 via-purple-500/10 to-transparent',
    }
  ],

  /* ---------------------------------------------------------------------------
   * 4) EXPERIÊNCIAS PROFISSIONAIS
   * ------------------------------------------------------------------------ */
  experiences: [
    {
      id: 'Petronas Lubricants International',
      initials: 'E1',
      role: { pt: 'Estagiário', en: 'Intern' },
      company: 'Petronas Lubricants International',
      period: { pt: '08-2026', en: '08-2026' },
      description: {
        pt: 'Atuação focada em análise de sistemas, sustentação e evolução das plataformas Infocentre e myInfocentre. Responsável pelo desenvolvimento de novas features, automação através de aplicações Console e migração da arquitetura legada para o myInfocentre. Atuação direta na resolução de chamados de suporte, criação e otimização de queries SQL, conciliação e análise comparativa de dados entre o SAP e o banco de dados corporativo, garantindo a integridade e alta disponibilidade das informações.',
        en: 'Systems analysis and software engineering focused on the maintenance and evolution of the Infocentre and myInfocentre platforms. Responsible for developing new features, creating automated Console applications, and executing the platform migration to myInfocentre. Proven experience in resolving internal system tickets, optimizing SQL queries, and performing data reconciliation between SAP and internal databases to ensure data consistency and system efficiency.',
      },
    }
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO (cards clicáveis da seção final)
   *    icon: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'phone' | 'site'
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'cleverson.github@gmail.com',   href: 'mailto:cleverson.github@gmail.com' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', value: '+55 (33) 9937-3400',     href: 'https://wa.me/553399373400' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/cleverson-resende', href: 'https://linkedin.com/in/cleverson-resende' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/cleverson-programmer',   href: 'https://github.com/cleverson-programmer' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (ícones do rodapé)
   *    icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'site'
   * ------------------------------------------------------------------------ */
  socials: [
    { icon: 'github',   href: 'https://github.com/cleverson-programmer',      label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/cleverson-resende',  label: 'LinkedIn' }
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
