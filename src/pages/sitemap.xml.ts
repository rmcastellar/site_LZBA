import type { APIRoute } from "astro";
import { EMPREENDIMENTOS } from "../data/empreendimentos";
import { ARTIGOS_BLOG } from "../data/artigos";

const SITE_URL = "https://lzba.com.br";

interface SitemapEntry {
  loc: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
  lastmod?: string;
}

export const GET: APIRoute = () => {
  const staticPages: SitemapEntry[] = [
    { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE_URL}/empreendimentos/`, changefreq: "weekly", priority: "0.9" },
    { loc: `${SITE_URL}/sobre/`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/blog/`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/contato/`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/trabalhe-conosco/`, changefreq: "monthly", priority: "0.6" },
    { loc: `${SITE_URL}/politica-de-privacidade/`, changefreq: "yearly", priority: "0.3" },
  ];

  const empreendimentoPages: SitemapEntry[] = EMPREENDIMENTOS.map((item) => ({
    loc: `${SITE_URL}/empreendimentos/${item.slug}/`,
    changefreq: "weekly",
    priority: item.destaque ? "0.9" : "0.7",
  }));

  const blogPages: SitemapEntry[] = ARTIGOS_BLOG.map((artigo) => ({
    loc: `${SITE_URL}/blog/${artigo.slug}/`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allEntries = [...staticPages, ...empreendimentoPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

