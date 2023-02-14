export const substring = (string, length = 20) => {
  return string.length > length ? string.substr(0, length) + "..." : string;
};
