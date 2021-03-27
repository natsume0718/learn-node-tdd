export function add() {
  if (30 < arguments.length) {
    throw new Error('over limit argument');
  }
}
