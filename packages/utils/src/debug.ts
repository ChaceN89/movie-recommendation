export function logDebug(message: string): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(`[DEBUG] ${message}`);
  }
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}
