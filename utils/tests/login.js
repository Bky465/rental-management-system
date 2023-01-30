const details = [
  { user_id: "ADM423DMIN", password: "Test123@" },
  { user_id: "TUS654AYAK", password: "Test2625@" },
  { user_id: "TUS143AYAK", password: "Test123@" },
];

const validateLogin = () => {
  const userDetails = details[Math.floor(Math.random() * 3)];
  console.log(userDetails);
  return {
    user_id: userDetails.user_id,
    password: userDetails.password,
  };
};

export default validateLogin;
