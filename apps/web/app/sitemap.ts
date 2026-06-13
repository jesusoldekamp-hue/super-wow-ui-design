import type { MetadataRoute } from "next"

import { resources } from "@/lib/catalog"
import { guides } from "@/lib/guides"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://super-wow-ui-design.vercel.app"
  const routes = ["", "/componentes", "/plantillas", "/recursos", "/guias"]

  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...resources.map((item) => ({ url: `${base}/recursos/${item.slug}`, lastModified: new Date() })),
    ...guides.map((guide) => ({ url: `${base}/guias/${guide.slug}`, lastModified: new Date() })),
  ]
}
