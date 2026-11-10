function joinWaitlist(list, email) {
  const result = list.slice();
  if (typeof email !== 'string') return result;

  const normalized = email.trim().toLowerCase();
  const at = normalized.indexOf('@');
  if (at <= 0 || normalized.indexOf('.', at + 1) === -1) return result;

  const exists = result.some(function (item) {
    return typeof item === 'string' && item.trim().toLowerCase() === normalized;
  });
  return exists ? result : result.concat(normalized);
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
