const full_name = 'John Tanaka';

const profile = {
  full_name,
  first_name: full_name.split(' ')[0],
  last_name: full_name.split(' ')[1],
};

export default profile;
