function BinarySearch(items) {
  this.items = items;
};

BinarySearch.prototype = {
  get array() {
    if ( this.sorted !== undefined  ){
      return this.sorted;
    }
    for ( var i = 1; i < this.items.length; i++ ) {
      if ( this.items[i] < this.items[i-1] ) {
        return undefined; 
      }
    }
    this.sorted = true;
    return this.items;
  },

  indexOf: function(item) {
    for (var min = -1, max = this.items.length; min < max;) {
      mid = Math.floor(( min + max) / 2);
      if (this.items[mid] < item ) {
        min = mid + 1;
      } else if (item < this.items[mid]) {
        max = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  },
};

module.exports = BinarySearch;
