class DragonArrow {
  #privateElement
  constructor (element) {
    this.element = element;
    this.#privateElement = `private ${element}`;
  };

  breath = () => {
    return `I am breathing ${this.element}`;
  }
  breathPrivatly = () => {
    return `I am breathing ${this.#privateElement}`;
  }
};
// If we use an arrow function, we don't need to bind the context
// Under the hood, the constructor is doing this:
// this.breath = this.breath.bind(this);
// Is binding the context of the breath function
// to the object that is being created.
export default DragonArrow;