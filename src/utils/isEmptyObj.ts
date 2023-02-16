// オブジェクトの空判定用
export const isEmpty = (obj: Record<string, never>): boolean => {
  return Object.keys(obj).length === 0;
};
