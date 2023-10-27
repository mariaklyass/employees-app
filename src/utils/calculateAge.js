export const calculateAge = (date) => {
  const dateObj = new Date(date);
  const currentYear = new Date().getFullYear();
  const year = dateObj.getFullYear();
  return currentYear - year;
};
