/**
 * Ensures internal links and local `/images/...` assets work seamlessly whether the site is hosted at:
 * - http://localhost:4321/ (local VS Code preview)
 * - https://<username>.github.io/<repo-name>/ (GitHub Pages project URL)
 * - https://<username>.github.io/ or a custom domain (root URL)
 */
export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath === '/' ? `${base}/` : `${base}${cleanPath}`;
}
