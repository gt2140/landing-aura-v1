const DEFAULT_DASHBOARD_URL = "https://app-eta-rosy-34.vercel.app";
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL?.trim();

function getDashboardBaseUrl() {
  return DASHBOARD_URL || DEFAULT_DASHBOARD_URL;
}

export function getDashboardLoginHref() {
  return new URL("/login", getDashboardBaseUrl()).toString();
}

export function hasDashboardUrl() {
  return Boolean(getDashboardBaseUrl());
}
