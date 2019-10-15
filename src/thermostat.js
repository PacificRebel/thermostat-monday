// hello this is a note
'use strict';

function Thermostat () {
  this.MINIMUM_TEMP = 10;
  this._temp = 20;
  this._maximumTemp = 25;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  if  (this.isMaximumTemp()) {
    return;
  }
  this._temp += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this._temp === this.MINIMUM_TEMP;
};

Thermostat.prototype.isMaximumTemp = function() {
  return this._temp === this._maximumTemp;
}

Thermostat.prototype.powerSaveOn = function() {
  this._maximumTemp = 25;
};

Thermostat.prototype.powerSaveOff = function() {
  this._maximumTemp = 32;
};
