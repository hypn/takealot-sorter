(function() {
  // find all of the search results
  var results = document.getElementsByClassName("small-3");

  // sort them by number of reviews
  var array = [];
  for (var i=0; i<results.length; i++) {
    elem = results[i];
    array.push({
      elem: elem,
      reviews: elem.getElementsByClassName("rating-module_review-count_3g6zO")[0] ? parseInt(elem.getElementsByClassName("rating-module_review-count_3g6zO")[0].innerText.replace(' (', '').replace(')', '')) : 0
    });
  }
  var sorted = array.sort(function(a, b) {
    return (a.reviews > b.reviews) ? 1 : ((b.reviews > a.reviews) ? -1 : 0)
  }).reverse();

  // find the partent container
  var parent = sorted[0].elem.parentElement;

  // remove all of the results
  for (var i=0; i<sorted.length; i++) {
    if (parent) {
      parent.removeChild(sorted[i].elem)
    }
  }

  // remove excess "related" rows
  while (parent.childElementCount > 1) {
    parent.removeChild(parent.lastChild);
  }

  // add the results back
  for (var i=0; i<sorted.length; i++) {
    if (parent) {
      parent.appendChild(sorted[i].elem);
    }
  }

  // force images to reload
  window.scrollBy(1,1);
  window.scrollBy(-1,-1);
})();