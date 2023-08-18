export  function timeAgo(timestamp) {

    const currentDate = new Date();
    const pastDate = new Date(timestamp);
    const timeDifference = currentDate - pastDate;
    const seconds = Math.floor(timeDifference / 1000);
    
    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (seconds < 2592000) {
        const weeks = Math.floor(seconds / 604800);
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (seconds < 31536000) {
        const months = Math.floor(seconds / 2592000);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(seconds / 31536000);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
}

export   function getMostRecentMessage(chatData) {
    const allMessages = [...chatData.messages.from, ...chatData.messages.to];
    allMessages.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
    const mostRecentMessage = allMessages[0];

    return [mostRecentMessage.message, mostRecentMessage.timeStamp];
}

export function sortChatData(chatData) {
    const allMessages = [
        ...chatData.messages.from.map(msg => ({ ...msg, type: 'from' })),
        ...chatData.messages.to.map(msg => ({ ...msg, type: 'to' }))
    ];

    allMessages.sort((a, b) => new Date(a.timeStamp) - new Date(b.timeStamp));

    return allMessages;
}

export function getCurrentTimestampFormatted() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}





