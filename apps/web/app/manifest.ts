import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Awesome Modern UI",
    short_name: "AMUI",
    description: "Recursos visuales para diseñar páginas web y aplicaciones modernas.",
    start_url: "/",
    display: "standalone",
    background_color: "#080d18",
    theme_color: "#7057ff",
  }
}
