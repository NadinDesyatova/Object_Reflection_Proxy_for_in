export default function orderByProps(character, mainKeys) {
  const mainKeysValueArray = mainKeys.map((mainKey) => {
    return {'key': mainKey, 'value': character[mainKey]};
  });
  const additionalKeys = [];
  for (const key in character) {
    if (!mainKeys.includes(key)) {
      additionalKeys.push({'key': key, 'value': character[key]});
    }
  };
  additionalKeys.sort((current, next) => current.key.localeCompare(next.key));
  
  return [...mainKeysValueArray, ...additionalKeys];
};
