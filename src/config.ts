export const SITE = {
  website: "https://pingos.pages.dev/",
  author: "Michel Leal",
  profile: "https://github.com/flealdev",
  desc: "Um blog pessoal sobre tecnologia e cristianismo. Que Deus o abençoe e guarde!",
  title: "Pingos",
  ogImage: "", // located in the public folder
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: false,
  showGalleriesInIndex: true, // Show galleries in the general paginated list (only if showGalleries is true)
  showBackButton: true, // show back button in post detail
  heroTerminalPrompt: {
    prefix: "~", // highlighted part on the left
    path: "/adtg", // central prompt text
    suffix: `&#10015;`, // terminal symbol on the right
  },
  backdropEffects: {
    cursorGlow: false, // cursor tracking with soft halo
    grain: true, // background visual noise layer
  },
  editPost: {
    enabled: false,
    text: "Edit this post",
    url: "https://github.com/0xdres/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "pt-BR", // html lang code. Set this empty and default will be "en"
  timezone: "America/Sao_Paulo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // show/hide intro player in home and compact player while navigating
    // src: path to file (relative to /public or absolute URL). Example: "/intro.mp3" or "https://example.com/stream"
    src: "https://stream3.svrdedicado.org/8070/stream",
    // src: "/audio/intro-web.mp3",
    isStream: true, // true for radio/live stream URLs (example: https://fluxfm.streamabc.net/flx-chillhop-mp3-128-8581707)
    label: "Gospel FM 89.3", // display label in player
    duration: 30, // duration in seconds (used for local files, ignored on streams)
  },
} as const;
