export const getStorageData = () => {
  const savedItem = localStorage.getItem('tasks') as string;
  const parsedItem = JSON.parse(savedItem);
  
  return parsedItem || [];
};