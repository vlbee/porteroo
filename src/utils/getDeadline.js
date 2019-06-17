export const getDeadline = (time) => {
  if (!time) return ""
  return time.split(" ")[1].substr(0, 5);
}