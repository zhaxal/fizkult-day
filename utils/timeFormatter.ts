const dateTimeFormatter = (data: string) => {
  return new Date(data).toISOString().slice(0, 16);
};

export { dateTimeFormatter };
