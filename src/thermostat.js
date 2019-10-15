// hello this is a note
'use strict';

function Thermostat () {
  this.MINIMUM_TEMP = 10;
  this.DEFAULT_TEMP = 20;
  this._temp = this.DEFAULT_TEMP;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.LOW_USAGE_UPPER_LIMIT = 18;
  this.MEDIUM_USAGE_UPPER_LIMIT = 25;
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
  this._temp = 25;
};

Thermostat.prototype.powerSaveOff = function() {
  this._maximumTemp = this.MAX_LIMIT_PSM_OFF;
};

Thermostat.prototype.powerSave = function() {
  if (this._maximumTemp === this.MAX_LIMIT_PSM_OFF){
    this.powerSaveOn();
  }
  else {
    this.powerSaveOff();
  };
};

Thermostat.prototype.reset = function() {
  this._temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.getEnergyUsage = function(){
  if (this._temp < this.LOW_USAGE_UPPER_LIMIT) {
    return 'low-usage'
  }
    else if(this._temp < this.MEDIUM_USAGE_UPPER_LIMIT) {
    return 'medium-usage'
  }  
  return 'high-usage'
};