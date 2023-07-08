export function isInViewport(element: any) {
  if (element) {
    const rect = element?.getBoundingClientRect();
    return rect?.top <= window?.innerHeight * 0.85;
  } else {
    return false;
  }
}
