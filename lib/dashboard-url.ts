const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL?.trim();

export function getDashboardLoginHref() {
  if (!DASHBOARD_URL) {
    return "/enter-app";
  }

  return new URL("/login", DASHBOARD_URL).toString();
}

export function hasDashboardUrl() {
  return Boolean(DASHBOARD_URL);
}
