import people from './people.json';

people.forEach(person => {
  const [firstName, lastName, email, phone] = [ ...person.name.split(' '), person.email, person.phone];

  console.log(`First name: ${firstName}
               Last name: ${lastName}
               Email: ${email}
               Phone number: ${phone}`);
});
