document.addEventListener('DOMContentLoaded', () => {
  function createCalendar(containerId, highlightDays) {
      const calendarContainer = document.getElementById(containerId);
      const calendar = calendarContainer.querySelector(`#${containerId} div[id^="calendar-"]`);
      const monthYear = calendarContainer.querySelector(`#${containerId} span[id^="month-year-"]`);
      const prevMonthButton = calendarContainer.querySelector(`#${containerId} button[id^="prev-month-"]`);
      const nextMonthButton = calendarContainer.querySelector(`#${containerId} button[id^="next-month-"]`);

      let date = new Date();
      if (containerId == 'calendar-container-2') {
        date.setMonth(date.getMonth() + 1);
    }
      function renderCalendar() {
          calendar.innerHTML = ''; // Clear previous calendar
          const year = date.getFullYear();
          const month = date.getMonth();
          const today = new Date().getDate();
          const isCurrentMonth = new Date().getFullYear() === year && new Date().getMonth() === month;

          const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const monthDays = new Date(year, month + 1, 0).getDate();
          monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

          // Generate calendar header
          daysOfWeek.forEach(day => {
              const dayHeader = document.createElement('div');
              dayHeader.classList.add('header');
              dayHeader.innerText = day;
              calendar.appendChild(dayHeader);
          });

          // Generate empty cells for days of the week before the first day of the month
          const firstDay = new Date(year, month, 1).getDay();
          for (let i = 0; i < firstDay; i++) {
              const emptyCell = document.createElement('div');
              calendar.appendChild(emptyCell);
          }

          // Generate days of the month
          for (let day = 1; day <= monthDays; day++) {
              const dayCell = document.createElement('div');
              dayCell.innerText = day;
              if (isCurrentMonth && day === today) {
                  dayCell.classList.add('today');
              } else if (highlightDays[month] && highlightDays[month].includes(day)) {
                  dayCell.classList.add('highlight');
              }
              calendar.appendChild(dayCell);
          }
      }

    //   prevMonthButton.addEventListener('click', () => {
    //       date.setMonth(date.getMonth() - 1);
    //       renderCalendar();
    //   });

    //   nextMonthButton.addEventListener('click', () => {
    //       date.setMonth(date.getMonth() + 1);
    //       renderCalendar();
    //   });

      renderCalendar(); // Initial render
  }

//   const highlightDays1 = {
//       5: [18, 20], // June (0-indexed, so month 5 is June)
//       6: [2, 10], // June (0-indexed, so month 5 is June)
//   };

//   const highlightDays2 = {
//       5: [12, 15, 16, 21], // July (0-indexed, so month 6 is July)
//   };

  createCalendar('calendar-container-1', highlightDates);
  createCalendar('calendar-container-2', highlightDates);
});