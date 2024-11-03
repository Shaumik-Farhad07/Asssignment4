function formatFullName({ firstName, lastName, middleName = '', title = '' }) {
    let fullName = `${firstName} ${middleName} ${lastName}`.trim().replace(/\s+/g, ' ');
    return title ? `${title} ${fullName}` : fullName;
  }
  console.log(formatFullName({ firstName: 'John', lastName: 'Doe' })); // "John Doe"
  console.log(formatFullName({ firstName: 'John', middleName: 'Michael', lastName: 'Doe' })); // "John Michael Doe"
  console.log(formatFullName({ title: 'Dr.', firstName: 'Jane', lastName: 'Doe' })); // "Dr. Jane Doe"
  console.log(formatFullName({ title: 'Mr.', firstName: 'John', middleName: 'Michael', lastName: 'Doe' })); // "Mr. John Michael Doe"
  