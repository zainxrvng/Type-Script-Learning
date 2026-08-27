function getChai (kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`
  }
    return `making order: ${kind}`
}

