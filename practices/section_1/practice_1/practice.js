function collect_same_elements(collection_a, collection_b) {

  return buildSameElement(collection_a, collection_b);
}

function buildSameElement(collection_a, collection_b) {
  var same = [];

  collection_a.forEach(function (coll_a) {
    same = findSameElement(same, coll_a, collection_b);
  });

  return same;
}

function findSameElement(same, coll_a, collection_b) {
  for (var i = 0; i < collection_b.length; i++) {
    if (coll_a === collection_b[i]) {
      same.push(coll_a);
    }
  }

  return same;
}

module.exports = collect_same_elements;
