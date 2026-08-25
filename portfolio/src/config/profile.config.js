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
    name: 'Seu Nome',               // Nome completo (usado no rodapé, alt de imagem)
    firstName: 'Nome',              // Primeiro nome (saudação)
    logo: 'seunome.dev',            // Texto do logo no cabeçalho: < seunome.dev />
    role: {
      pt: 'Sua Profissão',
      en: 'Your Role',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O SEU NOME',
      en: 'HELLO, I AM YOUR NAME',
    },
    bio: {
      pt: 'Escreva aqui uma apresentação sobre você: sua área de atuação, principais habilidades e o que você faz de melhor.',
      en: 'Write a short introduction about yourself here: your field, main skills and what you do best.',
    },
    // Texto secundário (aparece menor, abaixo da bio principal)
    bioSecondary: {
      pt: 'Uma frase complementar sobre seus valores, foco ou objetivos profissionais.',
      en: 'A complementary sentence about your values, focus or professional goals.',
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
      id: 'projeto-1',
      year: '2024',
      title: 'Nome do Projeto 1',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['React', 'Node.js', 'Tailwind', 'API'],
      repo: 'https://github.com/seu-usuario/projeto-1',
      demo: '',
      image: '', // ex.: '/profile/projeto1.png' (deixe vazio p/ usar o gradiente)
      preview: 'from-cyan-500/20 via-fuchsia-500/10 to-transparent',
    },
    {
      id: 'projeto-2',
      year: '2023',
      title: 'Nome do Projeto 2',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
      repo: 'https://github.com/seu-usuario/projeto-2',
      demo: '',
      image: '',
      preview: 'from-fuchsia-500/25 via-purple-500/10 to-transparent',
    },
    {
      id: 'projeto-3',
      year: '2022',
      title: 'Nome do Projeto 3',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['JavaScript', 'Docker', 'MongoDB'],
      repo: 'https://github.com/seu-usuario/projeto-3',
      demo: '',
      image: '',
      preview: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    },
    {
      id: 'projeto-4',
      year: '2021',
      title: 'Nome do Projeto 4',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['React', 'GraphQL', 'Jest'],
      repo: 'https://github.com/seu-usuario/projeto-4',
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
      id: 'exp-1',
      initials: 'E1',
      role: { pt: 'Seu Cargo', en: 'Your Role' },
      company: 'Nome da Empresa',
      period: { pt: 'Mês Ano – Atual', en: 'Month Year – Present' },
      description: {
        pt: 'Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nesta posição.',
        en: 'Describe your main responsibilities, technologies used and results achieved in this position.',
      },
    },
    {
      id: 'exp-2',
      initials: 'E2',
      role: { pt: 'Seu Cargo', en: 'Your Role' },
      company: 'Nome da Empresa',
      period: { pt: 'Mês Ano – Mês Ano', en: 'Month Year – Month Year' },
      description: {
        pt: 'Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nesta posição.',
        en: 'Describe your main responsibilities, technologies used and results achieved in this position.',
      },
    },
    {
      id: 'exp-3',
      initials: 'E3',
      role: { pt: 'Seu Cargo', en: 'Your Role' },
      company: 'Nome da Empresa',
      period: { pt: 'Mês Ano – Mês Ano', en: 'Month Year – Month Year' },
      description: {
        pt: 'Descreva suas principais responsabilidades, tecnologias utilizadas e resultados alcançados nesta posição.',
        en: 'Describe your main responsibilities, technologies used and results achieved in this position.',
      },
    },
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO (cards clicáveis da seção final)
   *    icon: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'phone' | 'site'
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'seu-email@example.com',   href: 'mailto:seu-email@example.com' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'whatsapp', value: '+55 (00) 00000-0000',     href: 'https://wa.me/5500000000000' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/seu-perfil', href: 'https://linkedin.com/in/seu-perfil' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/seu-usuario',   href: 'https://github.com/seu-usuario' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (ícones do rodapé)
   *    icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'site'
   * ------------------------------------------------------------------------ */
  socials: [
    { icon: 'github',   href: 'https://github.com/seu-usuario',      label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/seu-perfil',  label: 'LinkedIn' },
    { icon: 'twitter',  href: 'https://twitter.com/seu-usuario',     label: 'Twitter' },
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
