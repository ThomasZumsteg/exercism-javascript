export default class Forth {
  constructor() {
    this.stack = [];
  }
  evaluate(line) {
    for(let token of line.split(" ")) {
      if(["+", "-", "*", "/", "swap", "over"].includes(token)) {
        let b = this.stack.pop();
        let a = this.stack.pop();
        if(b == undefined || a == undefined)
          throw new Error("Stack empty");
        switch (token) {
          case ('+'):
            this.stack.push(a + b);
            break;
          case ('-'):
            this.stack.push(a - b);
            break;
          case ('*'):
            this.stack.push(a * b);
            break;
          case ('/'):
            if ( b == 0 )
              throw new Error("Division by zero");
            this.stack.push(Math.floor(a / b));
            break;
          case ("swap"):
            this.stack.push(b);
            this.stack.push(a);
            break;
          case ("over"):
            this.stack.push(a);
            this.stack.push(b);
            this.stack.push(a);
            break;
        }
      } else if (["dup", "drop"].includes(token)) {
        let a = this.stack.pop();
        if(a == undefined)
          throw new Error("Stack empty");
        switch(token) {
          case ("dup"):
            this.stack.push(a);
            this.stack.push(a);
            break;
          case ("drop"):
            break;
        }
      } else if(String(Number(token)) === token) {
        this.stack.push(parseInt(token));
      } else {
        console.log(token);
      }
    }
  }
}
