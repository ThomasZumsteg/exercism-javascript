class Zipper {
  constructor(tree, crumbs) {
    this.tree = tree;
    this.crumbs = crumbs || [];
  }
  toTree() {
    var val = this
    var next = this.up()
    while (next != null) {
      val = next;
      next = val.up();
    }
    return val.tree;
  }
  left() {
    if (!this.tree['left'])
      return null;
    return new Zipper(this.tree['left'],
        [{ right: this.tree['right'], value: this.tree['value'] }, ...this.crumbs]);
  }
  right() {
    if (!this.tree['right'])
      return null;
    return new Zipper(this.tree['right'],
        [{ left: this.tree['left'], value: this.tree['value'] }, ...this.crumbs]);
  }
  value() {
    return this.tree['value'];
  }
  up() {
    if (this.crumbs.length <= 0)
      return null;
    let head = JSON.parse(JSON.stringify(this.crumbs[0]));
    if (!('right' in head)) {
      head.right = this.tree;
    } 
    if (!('left' in head)) {
      head.left = this.tree;
    }
    return new Zipper(head, this.crumbs.slice(1));
  }
  setValue(val) {
    this.tree.value = val;
    return this;
  }
  setLeft(leaf) {
    console.log('befor: ' + JSON.stringify(this));
    this.tree.left = leaf;
    console.log('after: ' + JSON.stringify(this));
    return this;
  }
  setRight(leaf) {
    this.tree.right = leaf;
    return this;
  }
}

module.exports = {
  fromTree(items) {
    return new Zipper(items);
  },
}
