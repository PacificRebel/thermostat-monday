// hello this is a note
'use strict';

function Thermostat () {
  this.MINIMUM_TEMP = 10;
  this._temp = 20;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this._maximumTemp = this.MAX_LIMIT_PSM_ON;
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
  this._maximumTemp = this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.powerSaveOff = function() {
  this._maximumTemp = this.MAX_LIMIT_PSM_OFF;
};
