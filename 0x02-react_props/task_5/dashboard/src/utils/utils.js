/* full-year */
export const getFullYear = () => new Date().getFullYear();

/* footer-copy */
export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

/* notifications */
export const getLatestNotification = () => {
	return "<strong>Urgent requirement</strong> - complete by EOD";
};
