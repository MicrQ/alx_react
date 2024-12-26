const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
  return isIndex ? 'ALX' : 'ALX main dashboard';
};

const getLatestNotification = () => {
  return ('<strong>Urgent requirement</strong> - complete by EOD')
};

export { getFullYear, getFooterCopy, getLatestNotification };
