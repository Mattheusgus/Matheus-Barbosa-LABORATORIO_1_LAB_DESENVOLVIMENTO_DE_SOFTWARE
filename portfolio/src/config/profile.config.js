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
    name: 'Kaio Ferreira Soares',               // Nome completo (usado no rodapé, alt de imagem)
    firstName: 'Kaio',              // Primeiro nome (saudação)
    logo: 'kaio.dev',            // Texto do logo no cabeçalho: < seunome.dev />
    role: {
      pt: 'Desenvolvedor Full-Stack',
      en: 'Full-Stack Developer',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O KAIO',
      en: 'HELLO, I AM KAIO',
    },
    bio: {
      pt: 'Estudante de Engenharia de Software | Jovem Aprendiz de TI | Desenvolvedor Full Stack em formação',
      en: 'Software Engineering Student | Junior IT Apprentice | Full Stack Developer in training',
    },
    // Texto secundário (aparece menor, abaixo da bio principal)
    bioSecondary: {
      pt: 'Estou no início da minha jornada acadêmica, cursando Engenharia de Software na PUC Minas, e já estou inserido no mercado de trabalho como Jovem Aprendiz na área de TI na empresa Minha Casa Solar. Desde o primeiro semestre, venho me dedicando a construir uma base sólida em programação, estruturas de dados e desenvolvimento de sistemas. Meu objetivo é aplicar esse conhecimento teórico em projetos reais e contribuir para a criação de soluções tecnológicas inovadoras. Busco oportunidades que me desafiem e possibilitem meu crescimento contínuo.',
      en: 'I am at the beginning of my academic journey, studying Software Engineering at PUC Minas, and I am already entering the job market as a Junior IT Apprentice at Minha Casa Solar. Since the first semester, I have been dedicated to building a solid foundation in programming, data structures, and system development. My goal is to apply this theoretical knowledge to real projects and contribute to the creation of innovative technological solutions. I seek opportunities that challenge me and allow for my continuous growth.',
    },
  },

  /* ---------------------------------------------------------------------------
   * 2) FOTO / MÍDIA DO HERO
   *    heroMedia: 'code'  -> mostra a janela de código (padrão do Figma)
   *    heroMedia: 'photo' -> mostra a sua foto de perfil
   * ------------------------------------------------------------------------ */
  hero: {
    heroMedia: 'photo', // 'photo' | 'code'
    photo: '/profile/perfil.jfif', // troque pela sua foto em public/profile/
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
      id: 'projeto-1',
      year: '2026',
      title: 'Sistema de entrega de drones',
      description: {
        pt: 'Sistema de gestão de fretes para uma operação logística com drones. A aplicação permite cadastrar hangares, modelos, drones e entregas, preparar despachos, acompanhar rotas em um mapa cartesiano e cadastrar áreas que devem ser evitadas.',
        en: 'System for managing freight for drone logistics. The application allows registering hangars, models, drones, and deliveries, preparing shipments, tracking routes on a Cartesian map, and registering areas to be avoided.',
      },
      tags: ['React', 'Spring Boot', 'Tailwind', 'API', 'Mongo db'],
      repo: 'https://github.com/KaioFerreira13/Teste-pr-tico-dti-digital-Kaio-Ferreira.git',
      demo: '',
      image: '', // ex.: '/profile/projeto1.png' (deixe vazio p/ usar o gradiente)
      preview: 'from-cyan-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      id: 'projeto-2',
      year: '2026',
      title: 'Cadastro de pets',
      description: {
        pt: 'Aplicação web para gerenciar hospedagens de cães e gatos. O sistema permite listar, cadastrar, editar e excluir hospedagens, além de calcular a quantidade atual e prevista de diárias.',
        en: 'Web application to manage dog and cat boarding. The system allows listing, registering, editing and deleting bookings, as well as calculating the current and projected number of days.',
      },
      tags: ['Flutter', 'Dart', 'Node.js'],
      repo: 'https://github.com/KaioFerreira13/teste-pluritech-kaio-ferreira.git',
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
      id: 'exp-1',
      initials: 'E1',
      role: { pt: 'Jovem Aprendiz em TI', en: 'IT Apprentice' },
      company: 'Minha Casa Solar',
      period: { pt: 'Setembro de 2025 – Agosto de 2026', en: 'September 2025 – August 2026' },
      description: {
        pt: 'Desenvolvimento de soluções internas para otimização de processos corporativos, participação ativa em sprints ágeis e contribuição para a melhoria contínua da infraestrutura de TI.',
        en: 'Development of internal solutions to optimize business processes, active participation in agile sprints, and contribution to the continuous improvement of the IT infrastructure.',
      },
    }
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO (cards clicáveis da seção final)
   *    icon: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'phone' | 'site'
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'kaioferreirasoares78@gmail.com',   href: 'mailto:kaioferreirasoares78@gmail.com' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', value: '+55 (31) 99916-7434',     href: 'https://wa.me/5531999167434' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/kaio-ferreira-290716365/', href: 'https://www.linkedin.com/in/kaio-ferreira-290716365/' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/KaioFerreira13',   href: 'https://github.com/KaioFerreira13' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (ícones do rodapé)
   *    icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'site'
   * ------------------------------------------------------------------------ */
  socials: [
    { icon: 'github',   href: 'https://github.com/KaioFerreira13',      label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/kaio-ferreira-290716365/',  label: 'LinkedIn' },
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
