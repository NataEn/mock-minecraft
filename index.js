const $ = (x) => document.querySelector(x);
const mincraftElements = {
  navigationButtons: {
    instructions: $(".instructions"),
    startGame: $(".start-game"),
    close: $(".close"),
  },
};
const createWorld = () => {
  const elementsMap = {
    sky: 0,
    rocks: 1,
    tree: 2,
  };
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
};

class WorldElement {
  constructor(bgImageURL, tool, name) {
    this._bgImageURL = bgImageURL;
    this._tool = tool;
    this._name = name;
  }
  createElement() {
    const element = document.createElement("div");
    element.setAttribute("data-element", this._name);
    element.setAttribute("data-tool", this._tool);
    return element;
  }
  get counter() {
    return this._counter;
  }
}

class Sky extends WorldElement {}
Sky.prototype._counter = (Sky.prototype._counter || 0) + 1;
class Grass extends WorldElement {}
Grass.prototype._counter = (Grass.prototype._counter || 0) + 1;
class Tree extends WorldElement {}
Tree.prototype._counter = (Tree.prototype._counter || 0) + 1;
class Rock extends WorldElement {}
Rock.prototype._counter = (Rock.prototype._counter || 0) + 1;
class Lava extends WorldElement {}
Lava.prototype._counter = (Lava.prototype._counter || 0) + 1;
class ElementGroup {
  constructor(name, startRow, endRow, startCol, endCol) {
    this._name = name;
    this._map = this.constructor._map;
    ElementGroup.prototype.constructor._appendToMap(
      this._name,
      startRow,
      endRow,
      startCol,
      endCol
    );
  }
  get map() {
    return this._map;
  }
}
ElementGroup.prototype.constructor._map = {};
ElementGroup.prototype.constructor._appendToMap = function (name) {
  ElementGroup.prototype.constructor._map[name] = 0;
  return ElementGroup.prototype.constructor._map[name]++;
};
class World {
  constructor(rows, columns) {
    this._rows = rows;
    this._columns = columns;
    this._grid = [];
  }

  generateGrid() {
    for (let row = 0; row <= this._rows; row++) {
      const newRow = [];
      this._grid.push(newRow);
      for (let col = 0; col <= this._columns; col++) {
        newRow.push(0);
      }
    }
    this._grid = grid;
    return this._grid;
  }
  get Grid() {
    return this._grid;
  }
  set elementArea(startRow, endRow, startCol, endCol) {}
  populateGridWithElements(elementsMap) {
    for (let row = 0; row <= this._rows; row++) {
      const newRow = [];
      grid.push(newRow);
      for (let col = 0; col <= this._columns; col++) {
        newRow.push(0);
      }
    }
  }
}
