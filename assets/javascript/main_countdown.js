moment.fn.countdown = function(other, ...args) {
  return countdown(this.toDate(), moment(other).toDate(), ...Array.from(args));
};

var countdownDate = moment("2018-11-15");

function setCountdown(){
  var countdown = countdownDate.countdown();
  countdown.days = countdownDate.diff(moment(), 'days');

  ['days', 'hours', 'minutes', 'seconds'].forEach(function(elem) {
    var timeValue = countdown[elem];
    $(".time-section." + elem + " h3").html(timeValue);
    if (timeValue == 1) {
      $(".time-section." + elem + " p").html(elem.slice(0, -1));
    } else {
      $(".time-section." + elem + " p").html(elem);
    }
  });
};

$(document).ready(function() {

  setCountdown();
  setInterval(setCountdown, 1000);

});
