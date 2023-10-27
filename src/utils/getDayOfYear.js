export const getDayOfYear = (date) => {
  const delta = date.getTime() - new Date(date.getFullYear(), 0, 0).getTime();
  return Math.floor(delta / (1000 * 60 * 60 * 24));
};
