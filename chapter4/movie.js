window.onload = init();

function init() {
var movie1 = new Movie("Plan 9 from Outer Space", 
                       ["3:00pm", "7:00pm", "11:00pm"], 
                       "Cult Classic", 
                       2);

var movie2 = new Movie("Forbidden Planet", 
                       ["5:00pm", "9:00pm"], 
                       "Classic Sci-fi", 
                       5);

  alert(movie1.getNextShowing());
  alert(movie2.getNextShowing());
}

function Movie(title, showtimes, genre, rating) {
  this.title = title;
  this.showtimes = showtimes;
  this.genre = genre;
  this.rating = rating;
  this.getNextShowing = function() {
    var now = new Date().getTime();

    for (var i = 0; i < this.showtimes.length; i++) {
      var showtime = getTimeFromString(this.showtimes[i]);
      if ((showtime - now) > 0) {
        return "Next showing of " + this.title + " is " + this.showtimes[i];
      }
    }
    return null;
  } 
}


function getTimeFromString(timeString) {
  var theTime = new Date();
  var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours(parseInt(time[1])+ (time[3] ? 12 : 0));
  theTime.setMinutes(parseInt(time[2]) || 0);
  return theTime.getTime();
}

