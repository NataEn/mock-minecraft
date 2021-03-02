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
  static minedElementCounter() {}
}

class Grass extends WorldElement {}
Grass.prototype._counter = (Grass.prototype._counter || 0) + 1;
class Tree extends WorldElement {}
Tree.prototype._counter = (Tree.prototype._counter || 0) + 1;
class Rock extends WorldElement {}
Rock.prototype._counter = (Rock.prototype._counter || 0) + 1;
class Lava extends WorldElement {}
Lava.prototype._counter = (Lava.prototype._counter || 0) + 1;
class ElementGroup {
  constructor(name, startRow, startCol) {
    this._name = name;
    this._map = this.constructor._map;
    ElementGroup.prototype.constructor._appendToMap(
      this._name,
      startRow,
      startCol
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
      const elemArray = new Array(data.counter).fill(elemName);
      for (let i = data.startRow; i < data.counter; i++) {
        this._grid[i].slice(
          data.startCol,
          data.startCol + data.counter,
          elemArray
        );
      }
    }
    return this._grid;
  }
  populateDomWithElements() {
    const container = $(".game__world");
    for (let elem of this._grid) {
      const child = new elem.class(elemProp);
      container.appendChild(child);
    }
  }
  attachEventListener() {
    const container = $(".game__world");
    container.addEventListener("click", function (event) {
      //get the identity of target block
      //if target block is a tool -> set current tool in this state allow to mine specific target
      //increase specific counter by 1
      //replace the identity of target block to sky
      //event.target.dataset
    });
  }
}
class Game {
  constructor(world) {
    this.state = {
      tools: [],
      blocks: [],
    };
    this._world = world;
  }
  resetGame() {}
}
// ToDo: use the elementGroup map to populate the world grid
// in the map: {'name'}
