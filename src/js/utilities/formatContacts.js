import contacts from "./contacts.json";

const formatContactsData = () => {
  /**
   * pick the first character and create a hashmap, see if exists append to the map else add new aray
   */
  const outputMap = {};
  for (let item of contacts) {
    const firstCharacter = item.name[0];
    appendToMap(firstCharacter, item);
  }

  function appendToMap(char, value) {
    const exists = outputMap[char];
    if (exists) {
      exists.push(value);
      outputMap[char] = exists;
    } else {
      outputMap[char] = [value]
    }
  }
  /**
   * sort the array alphabet wise
   */
  const array = Object.entries(outputMap)
  array.sort(function (a, b) {
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  })
  return array;
}

export default formatContactsData;