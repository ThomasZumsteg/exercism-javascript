export class InputCell {
  constructor(value) {
    this.value = value;
    this.updateCells = [];
    this.callbacks = [];
  }
  setValue(value) {
    if (this.value != value) {
      this.value = value;
      for (let cell of this.updateCells) {
        cell.setValue(cell.func(cell.cells));
      }
      for (let callback of this.callbacks) {
        console.log(callback);
        callback.values.push(this.value);
      }
    }
  }
  addCallback(callback) {
    this.callbacks.push(callback);
  }
}

export class ComputeCell extends InputCell {
  constructor(cells, func) {
    super(func(cells));
    this.func = func;
    this.cells = cells;
    for (let cell of cells) {
      cell.updateCells.push(this);
    }
  }
}

export class CallbackCell {
  constructor(func) {
    this.values = [];
  }
}
