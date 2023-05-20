export const isBrowser = typeof window !== "undefined";

export const ensureArray = (data: unknown): Array<any> =>
  Array.isArray(data) ? data : [];

// export const ensureArray = <T>(data: T): T | [] =>Array.isArray(data) ? data : [];
export const isEmptyObject = (object: object): boolean => {
  return (
    !object ||
    (Object.keys(object).length === 0 && object.constructor === Object)
  );
};

export const isObject = (obj: object): boolean =>
  obj && typeof obj === "object" && !Array.isArray(obj);

export const parseBoolean = (val: unknown): boolean =>
  !val ||
  val === "false" ||
  val === "null" ||
  val === "undefined" ||
  val === "0"
    ? false
    : true;

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const isPromise = (func: Promise<unknown>): boolean =>
  func && typeof func.then === "function";
