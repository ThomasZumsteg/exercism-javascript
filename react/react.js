export class InputCell {
  constructor(value) {
    this.value = value;
  }
  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
 constructor(cells, func) {
   this.value = func(cells);
 }
}

export class CallbackCell {
}
