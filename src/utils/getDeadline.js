export const getDeadline = (time) => {
  const currentDate = new Date();
  // TODO: Check time (int) is in minutes
  const deadline = new Date(currentDate.getTime() + time * 60000)
  return deadline.toTimeString().substr(0, 5)
}