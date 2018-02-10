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
  var newObj = Object.assign({}, obj)
  // var newObj = {{key:value}}
  delete newObj[obj].key;

  return newObj

}
