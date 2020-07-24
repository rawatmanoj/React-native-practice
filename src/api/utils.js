export const shortAnimeName = (name, size) => {
  if (name.length < size) {
    return name;
  } else {
    return name.substr(0, size) + '...';
  }
};
