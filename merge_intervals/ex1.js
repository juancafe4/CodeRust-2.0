
let intervals = [
    {startTime: 1, endTime: 5},
    {startTime: 3, endTime: 7},
    {startTime: 4, endTime: 6},
    {startTime: 6, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 11, endTime: 13},
]

let intervals2 =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 11,  endTime: 10},
]
// Condition if curent start time metting is less or equal 
// than last meeting end time you can merge
// by keeping the last meeting start time and getting max end time from current
// and last time 
// if not add another meeting and keep updating if the first condition is true
let merge_intervals = function(intevals) {
  let mergeMeetings = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let currentMeeting = intervals[i];
    let lastMeeting = mergeMeetings[mergeMeetings.length - 1];

    if (currentMeeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(currentMeeting.endTime, lastMeeting.endTime);
    } else {
      mergeMeetings.push(currentMeeting);
    }
  }

  console.log(mergeMeetings);
}

merge_intervals(intervals);
merge_intervals(intervals2);