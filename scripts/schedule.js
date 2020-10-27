
document.addEventListener("DOMContentLoaded", () => {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    events: [ // put the array in the `events` property
    {
      title  : 'Hot yoga',
      daysOfWeek: [ '4' ],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    {
      title: "HIIT",
      daysOfWeek: [ '2' ],
      startTime: '13:00:00',
      endTime: '14:45:00',
    },
    {
      title: "HIIT",
      daysOfWeek: [ '3' ],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    {
      title  : 'Muay Thai',
      daysOfWeek: [ '4' ],
      startTime: '13:00:00',
      endTime: '14:45:00',
    },
    {
      title  : 'Muay Thai',
      daysOfWeek: [ '2' ],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    {
      title  : 'Muay Thai',
      daysOfWeek: [ '1' ],
      startTime: '13:00:00',
      endTime: '14:45:00',
    },
    {
      title: "HIIT",
      daysOfWeek: [ '1' ],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    {
      title: "Ju Jitsu",
      daysOfWeek: [ '5' ],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    {
      title: "Ju Jitsu",
      daysOfWeek: [ '1' ],
      startTime: '08:45:00',
      endTime: '10:30:00',
    },
    {
      title: "Zumba",
      daysOfWeek: [ '3' ],
      startTime: '08:45:00',
      endTime: '10:30:00',
    },
    {
      title: "Zumba",
      daysOfWeek: [ '5' ],
      startTime: '08:45:00',
      endTime: '10:30:00',
    }
  ],
    
    slotMinTime: "06:00",
    slotMaxTime: "22:00",
    allDaySlot: false,
    expandRows: true,
    height: "100%",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "timeGridWeek,timeGridDay",
    },
    initialView: "timeGridWeek",
    navLinks: true, // can click day/week names to navigate views
    nowIndicator: true,
    businessHours: {
  // days of week. an array of zero-based day of week integers (0=Sunday)
  daysOfWeek: [ 0,1, 2, 3, 4, 5, 6 ], 

  startTime: '8:00', // a start time (10am in this example)
  endTime: '21:00', // an end time (6pm in this example)
},
// eventClick pop-up
eventClick: (event, jsEvent, view) => {
   console.log(event.event);
   const eventTitle = event.event.title;

    // Format date

   const eventStart = event.event.start;
   const eventEnd = event.event.end;
  
$('.modal').modal('show');
$('.modal-title').html(eventTitle);
$('.modal-body').html("Start: " + eventStart + " End: " + eventEnd );
},
  
   
  });
  calendar.render();
});
console.log(events);

