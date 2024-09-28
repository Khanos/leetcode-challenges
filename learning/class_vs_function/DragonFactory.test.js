import Dragon from './DragonFactory';

describe('Dragon class', () => {
  const fluffy = new Dragon('fire');

  it('should have an element property', () => {
    expect(fluffy.element).toBe('fire');
  });

  it('should have a breath method', () => {
    expect(fluffy.breath()).toBe('I am breathing fire');
  });

  it('should breath fire', () => {
    const button = {
      onClick: null,
    };
    button.onClick = () => fluffy.breath();
    expect(button.onClick()).toBe('I am breathing fire');
  });

  it('should reference to different instance of the same methods', () => {
    const ratz = new Dragon('water');
    expect(ratz.breath).not.toBe(fluffy.breath);
  });
});