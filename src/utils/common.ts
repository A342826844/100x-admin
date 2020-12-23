export const itemLbaleForMap = (arr: Array<ItemValue>): CommonMap => {
  const map: CommonMap = {};
  arr.forEach(((item) => {
    map[item.key] = item.value;
  }));
  return map;
};

export const TODO = 'TODO:';
