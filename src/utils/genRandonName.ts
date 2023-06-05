const genRandomName = () => {
  return `Template-${Math.floor(Math.random() * 1000) + 1}`;
};

export default genRandomName;
