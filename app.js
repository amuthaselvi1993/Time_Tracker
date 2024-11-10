const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  loadReport("daily"); // Call your function here
});

function loadReport(reportPeriod) {
  const removeHighlight = document.querySelectorAll(".period p");
  console.log(removeHighlight);
  removeHighlight.forEach((duration) => {
    duration.classList.remove("selected");
  });
  const hightlight = document.querySelector(`#${reportPeriod}`);
  {
    hightlight.classList.add("selected");
  }
  activities.forEach((activity) => {
    const activityTile = document.getElementById(
      `${activity.title.toLowerCase().replace(/\s+/g, "")}-details`
    );
    const currentData = activityTile.querySelector(`.calculated-time`);
    currentData.textContent = `${activity[reportPeriod].current}hrs`;
    const prevData = activityTile.querySelector(`.calculated-prev-time`);
    console.log(activity[reportPeriod]);
    switch (reportPeriod) {
      case "daily": {
        prevData.textContent = `Yesterday - ${activity[reportPeriod].previous}hrs`;
        break;
      }
      case "weekly": {
        prevData.textContent = `Last Week - ${activity[reportPeriod].previous}hrs`;
        break;
      }
      case "monthly": {
        prevData.textContent = `Last Month - ${activity[reportPeriod].previous}hrs`;
        break;
      }
    }
  });
}
