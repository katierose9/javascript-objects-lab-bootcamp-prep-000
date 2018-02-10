var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(obj, key) {
  newObj = obj
  delete newObj.key;

  return newObj
}
