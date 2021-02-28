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
ElementGroup.prototype.constructor._appendToMap = function (
  name,
  startRow,
  endRow,
  startCol,
  endCol
) {
  return (ElementGroup.prototype.constructor._map[name] = {
    startRow,
    endRow,
    startCol,
    endCol,
  });
};
class SkyGroup extends ElementGroup {}
class GrassGroup extends ElementGroup {}
class TreeGroup extends ElementGroup {}
class RockGroup extends ElementGroup {}
class LavaGroup extends ElementGroup {}
class World {
  constructor(rows, columns) {
    this._rows = rows;
    this._columns = columns;
    this._grid = new Array(this._rows).fill(
      new Array(this._columns).fill("sky")
    );
  }

  get grid() {
    return this._grid;
  }

  set elementArea(startRow, endRow, startCol, endCol) {}
  /**
   * Populates the World grid with names of elements
   * @param {class ElementGroup } elementsMap
   * @returns {Array} grid
   * if name is not set then it remains to be the sky element
   */
  populateGridWithElements(elementsMap) {
    //elementsMap=ElementGroup.map
    for (const [elemName, data] of Object.entries(elementsMap)) {
      const tempFill = new Array(data.endCol - data.startCol).fill(elemName);
      for (let i = data.startRow; i < data.endRow; i++) {
        this._grid[i].slice(data.endCol, data.startCol, tempFill);
      }
    }
    return this._grid;
  }
}
// ToDo: use the elementGroup map to populate the world grid
// in the map: {'name'}
