function n_args(n, func) {
  return function(stack) {
    if (stack.length < n)
      throw new Error("Stack empty");
    let args = stack.splice(stack.length - n, stack.length);
    stack.push(...func(...args));
  }
}

export default class Forth {
  constructor() {
    this.stack = [];
    this.env = {};
    this.builtin = {
      "+": n_args(2, (a, b) => [a+b]),
      "-": n_args(2, (a, b) => [a-b]),
      "*": n_args(2, (a, b) => [a*b]),
      "/": n_args(2, (a, b) => {
        if(b == 0)
          throw new Error("Division by zero");
        return [Math.floor(a/b)];
      }),
      "dup": n_args(1, a => [a, a]),
      "drop": n_args(1, a => []),
      "swap": n_args(2, (a, b) => [b, a]),
      "over": n_args(2, (a, b) => [a, b, a]),
    }
  }
  evaluate(line) {
    if (line.startsWith(': ') && line.endsWith(' ;')){
      var tokens = line.slice(2, line.length-2).split(" ");
      var head = tokens[0].toLowerCase();
      if(String(Number(head)) === head)
        throw new Error("Invalid definition");
      this.env[head] = tokens.slice(1);
      return;
    }

    var tokens = line.split(" ");
    while(0 < tokens.length) {
      let token = tokens.shift().toLowerCase();
      if(String(Number(token)) === token) {
        this.stack.push(parseInt(token));
      } else if(token in this.env) {
        tokens.push(...this.env[token]);
      } else if(token in this.builtin) {
        this.builtin[token](this.stack);
      } else {
        throw new Error('Unknown command');
      }
    }
  }
}
