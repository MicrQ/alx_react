const getFullYear = () => new Date().getFullYear();
const getFooterCopy = (isIndex) => {
  return isIndex ? 'ALX' : 'ALX main dashboard';
};

export { getFullYear, getFooterCopy };
