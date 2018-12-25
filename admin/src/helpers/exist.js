export default (variable, obj = window) => {
  if (typeof obj[variable] !== "undefined") {
    return true;
  }

  return false;
};
