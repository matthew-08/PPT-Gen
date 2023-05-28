const objectKeys = <T extends Record<any, any>>(obj: T): (keyof T)[] =>
  Object.keys(obj) as (keyof T)[];

export default objectKeys;
