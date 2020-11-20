/* eslint-disable */
/**
 * Helper function to help generate ellpsis in the middle of text
 */
export const formatHash = (str:string) => {
  if (str.length > 15) {
    return str.substr(0, 8) + '...' + str.substr(str.length-3, str.length);
  }
  return str;
}
