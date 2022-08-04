const choice = (items) => items[Math.floor(Math.random() * items.length)];

const remove = (items, item) => {
  const toRemove = items.find((i) => i === item);

  const index = items.indexOf(toRemove);
  if (index !== -1) {
    items.splice(index, 1);
  }

  return items;
};

const add = (x, y) => x + y;
export { choice, remove, add };
