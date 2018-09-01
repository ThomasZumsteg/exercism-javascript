class Zipper {
  constructor(tree, crumbs) {
    this.tree = tree;
    this.crumbs = crumbs || [];
  }
  toTree() {
    var val = this;
    while (val.up() != null)
      val = val.up()
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
    if ('left' in head)
      head.right = this.tree;
    else if ('right' in head)
      head.left = this.tree;
    return new Zipper(head, this.crumbs.slice(1));
  }
}

module.exports = {
  fromTree(items) {
    return new Zipper(items);
  },
}
