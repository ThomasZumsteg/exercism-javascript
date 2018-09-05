class Zipper {
  constructor(tree, crumbs) {
    this.tree = tree;
    this.crumbs = crumbs || [];
    console.log(JSON.stringify(this));
  }
  toTree() {
    var val = this
    while (val.up() != null) {
      val = val.up();
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
    let head = this.crumbs[0];
    if (head == undefined)
      return null;
    if ('right' in head)
      head.left = this.tree;
    else if ('left' in head)
      head.right = this.tree;
    return new Zipper(head, this.crumbs.slice(1));
  }
  setValue(val) {
    this.tree.value = val;
    return this;
  }
  setLeft(leaf) {
    this.tree.left = leaf;
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
