import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  type PageSeo,
} from "@/lib/seo";

type SeoProps = PageSeo & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data: SeoProps["jsonLd"]) {
  const id = "page-json-ld";
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const el =
    existing ??
    Object.assign(document.createElement("script"), {
      id,
      type: "application/ld+json",
    });
  el.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(el);
}

export function Seo({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
}: SeoProps) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const canonical = absoluteUrl(path);
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertJsonLd(jsonLd ? JSON.parse(jsonLdKey) : undefined);
  }, [title, description, path, noindex, ogType, ogImage, jsonLdKey]);

  return null;
}

export { SITE_URL };
