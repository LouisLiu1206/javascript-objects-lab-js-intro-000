var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]:value});
}
