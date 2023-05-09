export const getSavedBookingIds = () => {
  const savedBookingIds = localStorage.getItem('saved_bookings')
    ? JSON.parse(localStorage.getItem('saved_bookings'))
    : [];

  return savedBookingIds;
};

export const saveBookingIds = (bookingIdArr) => {
  if (bookingIdArr.length) {
    localStorage.setItem('saved_bookings', JSON.stringify(bookingIdArr));
  } else {
    localStorage.removeItem('saved_bookings');
  }
};

export const removeBookingId = (bookingId) => {
  const savedBookingIds = localStorage.getItem('saved_bookings')
    ? JSON.parse(localStorage.getItem('saved_bookings'))
    : null;

  if (!savedBookingIds) {
    return false;
  }

  const updatedSavedBookingIds = savedBookingIds?.filter((savedBookingId) => savedBookingId !== bookingId);
  localStorage.setItem('saved_bookings', JSON.stringify(updatedSavedBookingIds));

  return true;
};
