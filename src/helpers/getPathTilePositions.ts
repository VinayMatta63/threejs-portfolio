export const getPathTilePositions = (
  start: number,
  count: number,
  x?: number,
  z?: number
) => {
  const pathArray: [number, number, number][] = [];

  let i = start;
  while (count--) {
    let position: [number, number, number];
    position =
      i % 2 === 0
        ? [x ? x : i * 4, 0, z ? z : i * 4]
        : [x ? x - 3 : i * 4, 0, z ? z + 3 : i * 4];
    pathArray.push(position);
    i += 1;
  }

  return pathArray;
};
