'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases the temp with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases the temp with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('if power saving mode is on, maximum temp is 25', function () {
    thermostat.powerSaveOn();
    expect(thermostat._maximumTemp).toEqual(25)
  });

  it('if power saving mode is on by default, maximum temp is 25', function () {
    expect(thermostat._maximumTemp).toEqual(25)
  });

  it('if power saving mode is off, maximum temp is 32', function () {
    thermostat.powerSaveOff();
    expect(thermostat._maximumTemp).toEqual(32)
  });

  it('turns power save off if on', function () {
    thermostat.powerSave();
    expect(thermostat._maximumTemp).toEqual(32)
  });

  it('turns power save on if off', function () {
    thermostat.powerSaveOff();
    thermostat.powerSave();
    expect(thermostat._maximumTemp).toEqual(25)
  });

  it('user cannot increase temperature beyond 32', function () {
    thermostat.powerSaveOff();
    for (var i = 20; i < 33; i++) {
      thermostat.up();
    }
  expect(thermostat.getCurrentTemp()).toEqual(32)
  });

  it('user can reset and bring the temperature back to 20', function (){
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21)
    thermostat.reset();
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });

it('tells the user enegry usage is low', function(){
  for (var i = 20; i > 17; i--) {
    thermostat.down();
  }
  expect(thermostat.getCurrentTemp()).toEqual(17)
  expect(thermostat.getEnergyUsage()).toEqual('low-usage')
});

it('tells the user enegry usage is medium', function(){
  expect(thermostat.getCurrentTemp()).toEqual(20)
  expect(thermostat.getEnergyUsage()).toEqual('medium-usage')
});

it('tells the user enegry usage is high', function(){
  thermostat.powerSaveOff();
  for (var i = 20; i < 26; i++) {
    thermostat.up();
  }
  expect(thermostat.getCurrentTemp()).toEqual(26)
  expect(thermostat.getEnergyUsage()).toEqual('high-usage')
});

});
