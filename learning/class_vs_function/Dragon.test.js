const Dragon = require('./Dragon');

describe('Dragon class', () => {
  const fluffy = new Dragon('fire');
 
  it('should have an element property', () => {
    expect(fluffy.element).toBe('fire');
  });

  it('should have a breath method', () => {
    expect(fluffy.breath()).toBe('I am breathing fire');
  });

  it('should return undefined on the element', () => {
    const button = {
      onClick: null,
    };
    button.onClick = fluffy.breath;
    expect(

      button.onClick()

    ).toBe('I am breathing undefined');
    // This is undefined:
    // because the context of the breath function
    // is the button object, not the fluffy object ("Class")
  });

  it('should reference to the same method', () => {
    const ratz = new Dragon('water');
    expect(ratz.breath).toBe(fluffy.breath);
  })

  it('should point to the right context', () => {
    const button = {
      onClick: null,
    };
    button.onClick = fluffy.breath.bind(fluffy);
    expect(button.onClick()).toBe('I am breathing fire');
    // This is fire:
    // because we are binding the context of the breath function
    // to the fluffy object ("Class")
  });

  it('should breath fire', () => {
    const button = {
      onClick: null,
    };
    button.onClick = () => fluffy.breath();
    expect(button.onClick()).toBe('I am breathing fire');
  });
});