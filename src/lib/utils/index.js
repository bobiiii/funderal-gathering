// lib/utils.ts
export function generateAccessCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export function validateImageFile(file) {
  if (!file) return false;
  return file.type.startsWith("image/");
}
