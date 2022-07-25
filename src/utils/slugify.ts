export function slugify(data: string): string {
  return data
    .toLowerCase()
    .normalize("NFD")
    .replace(/\s/g, "-")
    .replace(/[\u0300-\u036f]/g, "");
}
