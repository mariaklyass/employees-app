const MOTH_SHORT_DAY_NUMERIC_DATE_FORMAT = {
  month: "short",
  day: "numeric",
};

export const getFormatDate = (dateString, options, locale) => {
  const date = new Date(dateString);

  return date.toLocaleDateString(locale, options);
};
