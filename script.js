// script.js

document.addEventListener("DOMContentLoaded", function () {
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  
    function updateUTCTime() {
      const currentDate = new Date();
      const hour = String(currentDate.getUTCHours()).padStart(2, "0");
      const minute = String(currentDate.getUTCMinutes()).padStart(2, "0");
      const second = String(currentDate.getUTCSeconds()).padStart(2, "0");
      const millisecond = String(currentDate.getUTCMilliseconds()).padStart(3, "0");
  
      const currentTimeString = {hours}:{minutes}:{seconds}:{milliseconds};
      currentUTCTimeElement.textContent = currentTimeString;
    }
  
    // Update the UTC time every millisecond
    setInterval(updateUTCTime, 1);
  
    // Initial call to set the time immediately
    updateUTCTime();
  });
