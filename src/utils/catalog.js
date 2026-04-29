import catalogData from '../../data.json';

/** @typedef {{ label: string; value: string }} ItemProp */
/** @typedef {{ itemname: string; category: string; image: string; itemprops: ItemProp[] }} CatalogItem */

/** @type {CatalogItem[]} */
export const items = catalogData;

/**
 * @param {CatalogItem[]} list
 * @returns {Record<string, { item: CatalogItem; index: number }[]>}
 */
export function groupByCategory(list) {
  /** @type {Record<string, { item: CatalogItem; index: number }[]>} */
  const map = {};
  list.forEach((item, index) => {
    const key = item.category;
    if (!map[key]) map[key] = [];
    map[key].push({ item, index });
  });
  return map;
}

/** Category display order for consistent layout */
const CATEGORY_ORDER = ['Cars', 'Bikes', 'Phones', 'Computers'];

/**
 * @param {Record<string, { item: CatalogItem; index: number }[]>} grouped
 */
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
