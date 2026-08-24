/* =============================================================================
 *  ✨ ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO — EDITE APENAS ESTE ARQUIVO ✨
 * =============================================================================
 *
 *  Versão preenchida com os dados reais do Matheus Barbosa (extraídos do LinkedIn).
 *
 *  📸 FOTO:
 *    - A foto abaixo aponta para o LinkedIn (pode expirar). RECOMENDADO:
 *      1) Baixe sua foto e salve em  public/profile/matheus.jpg
 *      2) Troque  hero.photo  para  "/profile/matheus.jpg"
 *
 *  🌐 IDIOMAS: campos { pt, en } são bilíngues (toggle PT/EN no topo).
 * ========================================================================== */

export const profile = {
  /* ---------------------------------------------------------------------------
   * 1) IDENTIDADE
   * ------------------------------------------------------------------------ */
  identity: {
    name: 'Matheus Barbosa',
    firstName: 'Matheus',
    logo: 'Matheus.dev',
    role: {
      pt: 'Software Quality Assurance',
      en: 'Software Quality Assurance',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O MATHEUS BARBOSA',
      en: 'HELLO, I AM MATHEUS BARBOSA',
    },
    // Headline oficial do LinkedIn
    bio: {
      pt: 'Sou analista de Qualidade de Software na Jabil, onde ajudo a manter sistemas de manufatura confiáveis e prontos para o chão de fábrica. Meu dia a dia é transformar cenários complexos em testes automatizados sólidos com Cypress e Playwright, sempre buscando o equilíbrio entre velocidade de entrega e confiança no produto.',
      en: `I'm a Software Quality Assurance analyst at Jabil, where I help keep manufacturing systems reliable and ready for the factory floor. My day-to-day is turning complex scenarios into solid automated tests with Cypress and Playwright, always seeking the balance between delivery speed and product confidence.`,
    },
    bioSecondary: {
      pt: 'Com uma base técnica do CEFET-MG e cursando Engenharia de Software na PUC Minas, aplico o pensamento analítico para resolver desafios complexos.',
      en: 'With a technical foundation from CEFET-MG and ongoing Software Engineering studies at PUC Minas, I apply analytical thinking to solve complex.',
    },
  },

  /* ---------------------------------------------------------------------------
   * 2) FOTO / MÍDIA DO HERO
   * ------------------------------------------------------------------------ */
  hero: {
    heroMedia: 'photo', // 'photo' | 'code'
    // ⚠️ URL do LinkedIn pode expirar — baixe e use "/profile/matheus.jpg"
    photo:
      'https://media.licdn.com/dms/image/v2/D4D03AQFyJW6SLvu1vQ/profile-displayphoto-scale_400_400/B4DZwp9BngGQAo-/0/1770230391028?e=1788998400&v=beta&t=Son9Qfp4fJYfa6w7GVI2Z8l03oexITbaaj6HRwBH6w4',
    favicon: null,
    cta: {
      primary: { pt: 'Ver Projetos', en: 'View Projects' },
      secondary: { pt: 'Entrar em Contato', en: 'Get in Touch' },
    },
  },

  /* ---------------------------------------------------------------------------
   * 3) PROJETOS EM DESTAQUE (baseados na sua atuação real em QA/Automação)
   * ------------------------------------------------------------------------ */
  projects: [
    {
      id: 'mes-automation-playwright',
      year: '2025',
      title: 'Automação MES (OBA) com Playwright',
      description: {
        pt: 'Automação de geração de dados de teste complexos para features do MES (JEMSMM), como OBA Mendix. Refatoração com princípios SOLID e camada de clientes de API (ERP, core e externas).',
        en: 'Test data automation for complex MES (JEMSMM) features such as OBA Mendix. Refactored with SOLID principles and an API client layer (ERP, core and external).',
      },
      tags: ['Playwright', 'TypeScript', 'SOLID', 'API'],
      repo: 'https://github.com/Mattheusgus',
      demo: '',
      image: '',
      preview: 'from-cyan-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      id: 'cypress-regression',
      year: '2024',
      title: 'Suíte de Regressão com Cypress',
      description: {
        pt: 'Testes automatizados de aplicações web voltadas ao chão de fábrica (MES), cobrindo testes funcionais, de regressão e de API para garantir a confiabilidade das entregas.',
        en: 'Automated tests for factory-floor web applications (MES), covering functional, regression and API testing to ensure delivery reliability.',
      },
      tags: ['Cypress', 'JavaScript', 'API Testing', 'CI'],
      repo: 'https://github.com/Mattheusgus',
      demo: '',
      image: '',
      preview: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    },
    {
      id: 'qa-standardization',
      year: '2024',
      title: 'Padronização de Processos de QA',
      description: {
        pt: 'Melhoria e implementação do processo de padronização de qualidade, suporte ao time de SQA, criação de casos de teste com rastreabilidade a critérios de aceite e mentoria técnica.',
        en: 'Improvement and rollout of the QA standardization process, SQA team support, test case creation with traceability to acceptance criteria and technical mentoring.',
      },
      tags: ['Test Case', 'SQL', 'Agile', 'Mentoring'],
      repo: 'https://github.com/Mattheusgus',
      demo: '',
      image: '',
      preview: 'from-fuchsia-500/25 via-purple-500/10 to-transparent',
    },
    {
      id: 'portfolio-lab',
      year: '2026',
      title: 'Portfólio Profissional (Lab de Software)',
      description: {
        pt: 'Website de portfólio desenvolvido para a disciplina de Projeto de Software (Lab 1) com React, Tailwind e Material UI. Arquitetura orientada a configuração e 100% responsivo.',
        en: 'Portfolio website built for the Software Project course (Lab 1) with React, Tailwind and Material UI. Config-driven architecture, fully responsive.',
      },
      tags: ['React', 'Tailwind', 'Material UI', 'Vite'],
      repo: 'https://github.com/Mattheusgus/Matheus-Barbosa-LABORATORIO_1_LAB_DESENVOLVIMENTO_DE_SOFTWARE',
      demo: '',
      image: '',
      preview: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
  ],

  /* ---------------------------------------------------------------------------
   * 4) EXPERIÊNCIAS PROFISSIONAIS (LinkedIn)
   * ------------------------------------------------------------------------ */
  experiences: [
    {
      id: 'sqa-mid',
      initials: 'JB',
      role: {
        pt: 'Software Quality Assurance Mid-level',
        en: 'Software Quality Assurance Mid-level',
      },
      company: 'Jabil',
      period: { pt: 'out 2025 – o momento', en: 'Oct 2025 – Present' },
      description: {
        pt: 'Testes de aplicações web para o chão de fábrica (MES). Melhoria do processo de padronização de qualidade, suporte e recrutamento do time de SQA, testes manuais e automatizados (Cypress/Playwright), regressão, API, casos de teste, SQL e metodologia ágil.',
        en: 'Testing web applications for the factory floor (MES). Improved quality standardization, SQA team support and hiring, manual and automated testing (Cypress/Playwright), regression, API, test cases, SQL and agile methodology.',
      },
    },
    {
      id: 'sqa-jr',
      initials: 'JB',
      role: {
        pt: 'Software Quality Assurance Junior',
        en: 'Software Quality Assurance Junior',
      },
      company: 'Jabil',
      period: { pt: 'nov 2023 – out 2025', en: 'Nov 2023 – Oct 2025' },
      description: {
        pt: 'Testes de aplicações web voltadas ao MES: testes manuais e automatizados (Cypress), regressão, API, casos de teste, SQL e metodologia ágil.',
        en: 'MES web application testing: manual and automated testing (Cypress), regression, API, test cases, SQL and agile methodology.',
      },
    },
    {
      id: 'process-eng',
      initials: 'JB',
      role: { pt: 'Estágio em Engenharia de Processos', en: 'Process Engineering Intern' },
      company: 'Jabil',
      period: { pt: 'mai 2022 – nov 2023', en: 'May 2022 – Nov 2023' },
      description: {
        pt: 'Suporte às linhas PTH e SMT, documentação de processos, treinamento de operadores em SOPs, monitoramento de scrap/produtividade e KPIs, projetos de melhoria contínua e representação no Material Review Board (MRB) usando o MES.',
        en: 'Support for PTH and SMT lines, process documentation, operator training on SOPs, scrap/productivity and KPI monitoring, continuous improvement projects and MRB representation using the MES.',
      },
    },
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO
   *    ⚠️ Atualize o e-mail/WhatsApp reais que quiser expor publicamente.
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'augustomatheus1206@gmail.com',        href: 'mailto:augustomatheus1206@gmail.com' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/omatheusaugusto', href: 'https://www.linkedin.com/in/omatheusaugusto' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/Mattheusgus',         href: 'https://github.com/Mattheusgus' },
    { id: 'location', label: 'Localização', icon: 'site',  value: 'Betim, Minas Gerais, Brasil',    href: '#' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (rodapé)
   * ------------------------------------------------------------------------ */
  socials: [
    { icon: 'github',   href: 'https://github.com/Mattheusgus',                  label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/omatheusaugusto',     label: 'LinkedIn' },
  ],

  /* ---------------------------------------------------------------------------
   * 7) TEXTOS DA SEÇÃO DE CONTATO
   * ------------------------------------------------------------------------ */
  contactSection: {
    lead: {
      pt: 'Fique à vontade para entrar em contato se você tiver uma proposta de projeto, quiser falar sobre QA, automação de testes ou simplesmente dar um alô.',
      en: 'Feel free to reach out if you have a project proposal, want to talk about QA, test automation, or simply say hi.',
    },
  },
}

export default profile
