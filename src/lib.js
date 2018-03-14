export const createBlock = (index, previoushash, timestamp, data, hash) => {
  return {
    index,
    previoushash,
    timestamp,
    data,
    hash: hash.toString()
  };
}
