export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;
  const employeeNames = Object.values(allEmployees).flatMap(names => names).join(' | ');
  return employeeNames;
}

