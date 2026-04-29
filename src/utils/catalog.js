import catalogData from '../../data.json';

export const items = catalogData;

export function groupByCategory(list) {
  const map = {};
  list.forEach((item, index) => {
    const key = item.category;
    if (!map[key]) map[key] = [];
    map[key].push({ item, index });
  });
  return map;
}

const CATEGORY_ORDER = ['Cars', 'Bikes', 'Phones', 'Computers'];

export function sortedCategoryKeys(grouped) {
  const keys = Object.keys(grouped);
  keys.sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a);
    const ib = CATEGORY_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b);
  });
  return keys;
}
