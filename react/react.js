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
   this._func = func;
   this._cells = cells;
   this._callbacks = [];
   this._val = this._func(this._cells);
 }
 get value() {
   let newval = this._func(this._cells);
   if (newval != this._val) {
     this._val = newval;
     for (let call of this._callbacks) {
       call(newval);
     }
   }
   return newval;
 }
 addCallback(func) {
   this._callbacks.push(func);
 }
}

export class CallbackCell {
}
