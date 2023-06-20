const genRandomName = () => {
  return `Template-${Math.floor(Math.random() * 10000) + 1}`;
};

export default genRandomName;
