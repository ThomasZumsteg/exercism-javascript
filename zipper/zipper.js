class Left {
}

class Right {
}

class Zipper {
  constructor(tree) {
    self.value = tree.value;
    self.left = tree.left;
    self.right = tree.right;
  }
  toTree(items) {
    return {
      value: self.value,
      left: self.left,
      right: self.right
    }
  }
  left() {
    if(self.left == null)
      return null;
    return new Zipper(self.left);
  }
  right() {
    if(self.right == null)
      return null;
    return new Zipper(self.right);
  }
  value() {
    return self.value;
  }
}

module.exports = {
  fromTree(items) {
    return new Zipper(items);
  },
}
