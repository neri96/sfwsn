export const capitalize = (str: string) => {
  return str
    .split(" ")
    .map(
      (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    )
    .join(" ");
};
