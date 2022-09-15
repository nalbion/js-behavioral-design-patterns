/**
 * @typedef Path
 * @property {string} color
 * @property {string} d
 */

const DEG_TO_RAD = Math.PI / 180;

class Receiver {
  /** @type {{ x: number, y: number }} */
  _position;
  /** @type {{ x: number, y: number }} */
  _vector;
  /** @type {{ x: number, y: number }} */
  _max;
  /** @type {number} */
  _currentAngle;
  /** @type {Path[]} */
  _paths;
  /** @type {Path} */
  _currentPath;
  /** @type {boolean} */
  _pen;
  /** @type {boolean} */
  _defaultUsed;

  constructor() {
    this._position = { x: 0, y: 0 };
    this._vector = { x: 0, y: 1 };
    this._max = { x: 0, y: 0 };
    this._currentAngle = 0;
    this._pen = true;
    this.setColor('black');
  }

  setSize(x, y) {
    this._max = { x, y };
  }

  /**
   * @param {string} color
   * @param {string || boolean} fill
   */
  setColor(color, fill = false) {
    if (!this._defaultUsed){
      this._paths = [];
    }
    if (fill === true) {
      fill = color;
    }
    const newPath = {
      color: color,
      fill: fill,
      d: 'M ' + this._position.x + ' ' + this._position.y + ' ',
    };
    this._paths.push(newPath);
    this._currentPath = newPath;
  }

  /**
   * @param {boolean} pen
   */
  penDown(pen = true) {
    this._pen = pen;
  }

  /**
   * @param {number} distance
   */
  move(distance) {
    const x = distance * this._vector.x;
    const y = distance * this._vector.y;

    this._positionBy(x, y);
    this._updatePath(x, y, this._pen ? 'l ' : 'm ');
  };

  /**
   * @param {number} x
   * @param {number} y
   */
  moveTo(x, y) {
    this._positionTo(x, y);
    this._updatePath(x, y, this._pen ? 'L ' : 'M ');
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  moveBy(x, y) {
    this._positionBy(x, y);
    this._updatePath(x, y, this._pen ? 'l ' : 'm ');
  };

  /**
   * @param {number} degrees
   */
  turn(degrees) {
    this._currentAngle += degrees;
    const radians = DEG_TO_RAD * this._currentAngle;

    this._vector.x = Math.sin(radians);
    this._vector.y = Math.cos(radians);
  }

  generateSvg(name) {
    let svg = `<svg id="${name}-svg" xmlns="http://www.w3.org/2000/svg" 
        width="${Math.ceil(this._max.x)}" height="${Math.ceil(this._max.y)}">\n`;

    for (let i = 0; i < this._paths.length; i++) {
      const path = this._paths[i];
      svg += `  <path id="${name}-path-${i}" stroke="${path.color}" fill="${path.fill ? path.fill : 'none'}"
        d="${path.d}"/>\n`;
    }
    svg += '</svg>';
    return svg;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @private
   */
  _positionTo(x, y) {
    this._position.x = x;
    this._position.y = y;
    this._max.x = Math.max(this._max.x, this._position.x);
    this._max.y = Math.max(this._max.y, this._position.y);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @private
   */
  _positionBy(x, y) {
    this._positionTo(this._position.x + x, this._position.y + y);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {string} command - 'L ' (Line To) or 'M ' (Move).
   * Uppercase: absolute, Lowercase: delta
   * @private
   */
  _updatePath(x, y, command = 'M ') {
    this._currentPath.d += command + this._round(x) + ' ' + this._round(y) + ' ';
  }

  /**
   * @param {number} value
   * @private
   */
  _round(value) {
    return Math.round(value * 100) / 100;
  }
}

module.exports = Receiver;
