const DragonFactory = function(element) {
  return {
    element,
    breath() {
      return `I am breathing ${this.element}`;
    }
  };
};

export default DragonFactory;