// Format date in a consistent way that won't change between server and client
export const formatDate = (isoString: string) => {
  // Ensure we're working with UTC time
  const date = new Date(isoString);
  
  // Create fixed-format date parts
  const parts = {
    year: date.getUTCFullYear(),
    month: String(date.getUTCMonth() + 1).padStart(2, '0'),
    day: String(date.getUTCDate()).padStart(2, '0'),
    hours: String(date.getUTCHours()).padStart(2, '0'),
    minutes: String(date.getUTCMinutes()).padStart(2, '0'),
    seconds: String(date.getUTCSeconds()).padStart(2, '0')
  };

  return parts;
};