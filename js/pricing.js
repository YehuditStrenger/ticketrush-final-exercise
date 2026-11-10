// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_DISCOUNT = 0.2;
const STUDENT_DISCOUNT = 0.15;

function maxTickets(isMember) {
  return isMember ? 6 : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  const discount = isMember ? MEMBER_DISCOUNT : (isStudent ? STUDENT_DISCOUNT : 0);
  const ticketPrice = TICKET_PRICE * (1 - discount);
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_DISCOUNT, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
