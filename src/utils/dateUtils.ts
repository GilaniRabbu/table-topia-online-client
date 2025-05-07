
import { format, addDays } from 'date-fns';

// Generate an array of dates for the next 7 days
export const getNextWeekDates = () => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(new Date(), i);
    dates.push({
      date,
      day: format(date, 'EEE'),
      dayOfMonth: format(date, 'd'),
      month: format(date, 'MMM'),
      fullDate: format(date, 'yyyy-MM-dd')
    });
  }
  return dates;
};

// Generate available time slots
export const getAvailableTimeSlots = () => {
  const timeSlots = [];
  const startHour = 11; // 11 AM
  const endHour = 22; // 10 PM
  const interval = 30; // 30 minutes

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = `${hour % 12 === 0 ? 12 : hour % 12}:${minute === 0 ? '00' : minute} ${hour < 12 ? 'AM' : 'PM'}`;
      timeSlots.push(time);
    }
  }

  return timeSlots;
};

// Format the date for display
export const formatDisplayDate = (date: Date) => {
  return format(date, 'EEEE, MMMM d, yyyy');
};

// Generate a confirmation code
export const generateConfirmationCode = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};
