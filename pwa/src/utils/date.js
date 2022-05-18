export const getDaysBetween = (start, end) =>
  Math.ceil(Math.abs(new Date(start) - new Date(end)) / (1000 * 60 * 60 * 24));

export const convertDateToAPIFormat = (date) =>
  new Date(date).toISOString().replace(/T.*/, "").split("-").reverse().join("-");
