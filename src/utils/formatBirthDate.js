export const formatBirthDate = (date, type) => {
  const dateObj = new Date(date);
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = dateObj.getFullYear();
  const monthDay = dateObj.getDate();
  const month = dateObj.getMonth();
  return type === "shortened"
    ? `${monthDay} ${monthsArray[month].slice(0, 3)}`
    : `${monthDay} ${monthsArray[month]} ${year} year`;
};
