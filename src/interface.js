$(document).ready(function(){
  var thermostat = new Thermostat();

  updateTemperature();
  updateStatus();

  $('#increase').click(function(){
    thermostat.up();
    updateTemperature();
  })

  $('#decrease').click(function(){
    thermostat.down();
    updateTemperature();
  })

  $('#reset_temperature').click(function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#powersave').click(function(){
    thermostat.powerSave();
    updateStatus();
  })

  function updateStatus() {
    $('#powersave_status').text(thermostat._maximumTemp);
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
  };

});