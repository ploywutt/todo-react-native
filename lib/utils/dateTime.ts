export const formatDate = (value: Date) => {
  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatTime = (value: Date) => {
  const hours = `${value.getHours()}`.padStart(2, "0");
  const minutes = `${value.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes}`;
};
