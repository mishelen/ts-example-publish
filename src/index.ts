const Greeter = (name: string) => `Hello ${name}`;

class Greeting {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public greeter(): string {
    return Greeter(this.name);
  }
}

export {
  Greeting, Greeter
}
