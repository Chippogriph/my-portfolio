const basePath = process.env.NODE_ENV === "production"
  ? "/my-portfolio"
  : "";

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}