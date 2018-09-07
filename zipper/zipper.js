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
    let head = this.crumbs[0];
    if (!('right' in head)) {
      head.right = this.tree;
    } 
    if (!('left' in head)) {
      head.left = this.tree;
    }
    return new Zipper(head, this.crumbs.slice(1));
  }
  setValue(val) {
    return new Zipper({
        value: val,
        left: this.tree.left,
        right: this.tree.right
    }, this.crumbs);
  }
  setLeft(leaf) {
    return new Zipper({
        value: this.tree.value,
        left: leaf,
        right: this.tree.right
    }, this.crumbs);
  }
  setRight(leaf) {
    return new Zipper({
        value: this.tree.value,
        left: this.tree.left,
        right: leaf
    }, this.crumbs);
  }
}

module.exports = {
  fromTree(items) {
    return new Zipper(items);
  },
}
