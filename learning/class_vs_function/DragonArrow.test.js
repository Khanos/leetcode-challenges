const Dragon = require('./DragonArrow');

describe('Dragon class', () => {
  const fluffy = new Dragon('fire');

  it('should return undefined on the element', () => {
    const button = {
      element: 'ice',
      onClick: null,
    };
    button.onClick = fluffy.breath;
    expect(

      button.onClick()

    ).toBe('I am breathing fire');
    // This is fire:
    // because the context of the breath function
    // is the fluffy object ("Class")
  });

  it('should reference to different instance of the same methods', () => {
    const ratz = new Dragon('water');
    expect(ratz.breath).not.toBe(fluffy.breath);
  });
});