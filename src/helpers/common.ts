export const delay = async (ms: number): Promise<void> => {
  return new Promise(res => setTimeout(res, ms));
};
