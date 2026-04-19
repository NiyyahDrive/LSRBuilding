/**
 * Prepend de basePath aan een asset-URL.
 *
 * next/image + output:"export" + unoptimized prepend de basePath NIET
 * automatisch aan de src. Dus op GitHub Pages (basePath=/LSRBuilding)
 * komen `<Image src="/logo.svg">` requests uit op de root in plaats
 * van onder /LSRBuilding/ — resultaat: 404.
 *
 * Gebruik deze helper overal waar je een statisch asset uit /public
 * rendert via <Image> of <img>.
 *
 * Voorbeeld:
 *   <Image src={asset('/logo.svg')} alt="..." />
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!path.startsWith('/')) return `${base}/${path}`;
  return `${base}${path}`;
}
