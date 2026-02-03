export function generateApiKey() {
  return "gfx_" + Math.random().toString(36).substring(2, 15);
}
