// Date formatter
const formatDate = (args): string => {
  const date = new Date(args.value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export default formatDate;
