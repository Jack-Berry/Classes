class Instrument {
  constructor(price, stock, brand, model) {
    this.price = price;
    this.stock = stock;
    this.brand = brand;
    this.model = model;
  }
  title() {
    let title = this.brand + " - " + this.model;
    return title;
  }
}

class Guitar extends Instrument {
  constructor(price, stock, brand, model, numStrings) {
    super(price, stock, brand, model);
    this.numStrings = numStrings;
  }
}

class Keyboard extends Instrument {
  constructor(price, stock, brand, model, numKeys, midi) {
    super(price, stock, brand, model);
    this.numKeys = numKeys;
    this.midi = midi;
  }
}

class ElectricGuitar extends Guitar {
  constructor(price, stock, brand, model, numStrings, pickups) {
    super(price, stock, brand, model, numStrings);
    this.pickups = pickups;
  }
}

const strat = new ElectricGuitar(
  450,
  5,
  "fender",
  "stratocaster",
  6,
  "singlecoil"
);
console.log(strat.title());
