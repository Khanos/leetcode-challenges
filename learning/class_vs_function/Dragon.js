class Dragon {
  constructor (element) {
    this.element = element;
  };

  breath(){
    return `I am breathing ${this.element}`;
  }
};

export default Dragon;