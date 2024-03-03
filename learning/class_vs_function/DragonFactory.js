const DragonFactory = function(element) {
  return {
    element,
    breath() {
      return `I am breathing ${this.element}`;
    }
  };
};

module.exports = DragonFactory;