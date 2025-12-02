export function messageFormatter(message, data) {
  return `${message}: ${JSON.stringify(data)}`;
}
