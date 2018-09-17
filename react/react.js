let locked = false;
let callbackQueue = {};

export class InputCell {
  constructor(value) {
    this.value = value;
    this.updateCells = [];
    this.callbacks = {};
  }
  setValue(value) {
    if (this.value != value) {
      if (!locked) {
        this.locked = true;
        locked = true;
      }

      this.value = value;
      for (let cell of this.updateCells) {
        cell.setValue(cell.func(cell.cells));
      }
      for (let key of Object.keys(this.callbacks)) {
        callbackQueue[key] = () => this.callbacks[key].values.push(value);
      }

      if (this.locked) {
        for (let key of Object.keys(callbackQueue)) {
          callbackQueue[key]();
        }
        callbackQueue = {};
        this.locked = false;
        locked = false
      }
    }
  }
  addCallback(callback) {
    this.callbacks[callback.id] = callback;
  }
  removeCallback(callback) {
    delete this.callbacks[callback.id];
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

var callbackIDs = 0;

export class CallbackCell {
  constructor(func) {
    this.values = [];
    this.id = callbackIDs;
    callbackIDs += 1;
  }
}
