// Save user to localStorage
export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  // Get user from localStorage
  export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  // Save booking details
  export const saveBooking = (booking) => {
    localStorage.setItem('booking', JSON.stringify(booking));
  };
  
  // Get booking details
  export const getBooking = () => {
    return JSON.parse(localStorage.getItem('booking'));
  };
  
  // Clear booking after confirmation
  export const clearBooking = () => {
    localStorage.removeItem('booking');
  };
  