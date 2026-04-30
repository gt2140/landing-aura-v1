export function getInPageTarget(href: string) {
  if (!href.startsWith("#")) {
    return null;
  }

  const sectionId = href.slice(1).trim();
  return sectionId || null;
}
