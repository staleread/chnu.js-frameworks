type GlassType = 'BIG' | 'SMALL';
type Filling = 'Chocolate' | 'Caramel' | 'Berries';

type IceCreamData = {
  glassType: GlassType;
  fillings: Array<Filling>;
  hasMarshmello: boolean;
};

function isGlassType(maybeGlassType: unknown): maybeGlassType is GlassType {
  return typeof maybeGlassType === 'string' &&
    ['BIG', 'SMALL'].includes(maybeGlassType);
}

function isFilling(maybeFilling: unknown): maybeFilling is Filling {
  return typeof maybeFilling === 'string' &&
    ['Chocolate', 'Caramel', 'Berries'].includes(maybeFilling);
}

function getIceCreamData(): IceCreamData {
  const maybeGlassType: unknown = prompt('Enter glass type');

  if (!isGlassType(maybeGlassType))
    throw new Error('Invalid glass type')

  const fillings: Filling[] = [];
  var maybeFilling: unknown;

  while (maybeFilling = prompt('Enter next filling (enter if no more')) {
    if (!isFilling(maybeFilling))
      throw new Error('Invalid filling');

    fillings.push(maybeFilling);
  }

  if (fillings.length < 1)
    throw new Error('There should be at least one filling');

  const hasMarshmello = prompt('Wanna marshmello? y/N', 'n') === 'y';

  return {
    glassType: maybeGlassType,
    fillings,
    hasMarshmello,
  }
}

function calcIceCreamPrice(data: IceCreamData): number {
  var price = 0;

  switch (data.glassType) {
    case 'BIG':
      price += 10;
      break;
    case 'SMALL':
      price += 25;
      break;
  }

  for (let fill of data.fillings) {
    switch (fill) {
      case 'Chocolate':
        price += 5;
        break;
      case 'Caramel':
        price += 6;
        break;
      case 'Berries':
        price += 10;
        break;
    }
  }
  
  if (data.hasMarshmello) price += 5;
  return price;
}
