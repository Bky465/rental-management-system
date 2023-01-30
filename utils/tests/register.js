const prefix = ["Mr.", "Mrs.", "Miss", null];
const first_name = ["Test1", "Test2", "Test3", "Test4", "undefined"];
const middle_name = ["User1", "User2", "User3", "User4", "undefined"];
const last_name = ["1", "2", "3", "4", "undefined"];
const email = [
  "tusharnayak2626@gmail.com",
  "test1@gmail.com",
  "abc@gmail.com",
  "abcd@gmail.com",
  "invalid",
];
const mobile = [
  { country_code: "+91", number: 4521367546 },
  { country_code: "+91", number: 1547862395 },
  { country_code: "+461", number: 7536452178 },
  { country_code: "+91", number: 1546327890 },
  { country_code: "+91", number: null },
];
const dob = [
  "01/02/2000",
  "12/10/1997",
  "08/04/2000",
  "02/04/1965",
  "04/11/2004",
];
const age = [22, 25, 22, 57, 18];
const designation = [
  "Software Developer",
  "Doctor",
  "Prof.",
  "null",
  "undefined",
];
const gender = ["male", "female", "other", "invalid", "undefined"];
const marital_status = [
  "single",
  "married",
  "divorced",
  "separated",
  "widowed",
  "invalid",
];
const nationality = ["Indian", "Russsian", "American", "Sri Lankan", null];
const current_address = [
  "B-647, QWE Colony, UNIT-N",
  "X-123, PLJ Colony, UNIT-X",
  "D-143, DCW Colony, UNIT-7",
  "P-678, PQR Colony, UNIT-P",
  null,
];
const state = ["Odisha", "Delhi", "J&K", "Punjab", null];
const city = ["Bhubaneswar", "Noida", "Srinagar", "Amritsar", null];
const pincode = [890765, 770012, 876567, 751001, null];
const country = ["India", "Russia", "America", "Sri Lanka", null];
const name_in_pan = [
  "TEST1 USER1 1",
  "TEST1 USER2 1",
  "TEST1 USER3 1",
  "TEST1 USER4 1",
  null,
];
const pan = ["ASDFL8734R", "QWDFG2341O", "POIUH1298Y", "undefined", null];
const name_in_bank = [
  "Test1 User1 1",
  "Test1 User2 1",
  "Test1 User3 1",
  "Test1 User4 1",
  null,
];
const bank_name = ["UCO Bank", "SBI", "HDFC Bank", "undefined", null];
const branch = ["XYZ", "ABC", "QWE", "PQR", null];
const account_number = [
  "154236954234",
  "145865239754",
  "102934876109",
  "undefined",
  null,
];
const ifsc_code = ["QWDH234567", "QWDH234908", "POQH908567", "undefined", null];
const account_type = ["savings", "current", "invalid", "undefined", null];
const get_updates = [true, false, null, "undefined", "invalid"];

const validateRegister = () => {
  const name_bank = name_in_bank[Math.floor(Math.random() * 5)];
  return {
    prefix: prefix[Math.floor(Math.random() * 5)],
    first_name: first_name[Math.floor(Math.random() * 5)],
    middle_name: middle_name[Math.floor(Math.random() * 5)],
    last_name: last_name[Math.floor(Math.random() * 5)],
    email: email[Math.floor(Math.random() * 5)],
    mobile: mobile[Math.floor(Math.random() * 5)],
    dob: dob[Math.floor(Math.random() * 5)],
    age: age[Math.floor(Math.random() * 5)],
    designation: designation[Math.floor(Math.random() * 5)],
    gender: gender[Math.floor(Math.random() * 5)],
    marital_status: marital_status[Math.floor(Math.random() * 5)],
    nationality: nationality[Math.floor(Math.random() * 5)],
    current_address: current_address[Math.floor(Math.random() * 5)],
    state: state[Math.floor(Math.random() * 5)],
    city: city[Math.floor(Math.random() * 5)],
    pincode: pincode[Math.floor(Math.random() * 5)],
    country: country[Math.floor(Math.random() * 5)],
    name_in_pan: name_bank,
    pan: pan[Math.floor(Math.random() * 5)],
    name_in_bank: name_in_bank[name_in_pan.indexOf(name_bank)],
    bank_name: bank_name[Math.floor(Math.random() * 5)],
    branch: branch[Math.floor(Math.random() * 5)],
    account_number: account_number[Math.floor(Math.random() * 5)],
    ifsc_code: ifsc_code[Math.floor(Math.random() * 5)],
    account_type: account_type[Math.floor(Math.random() * 5)],
    get_updates: get_updates[Math.floor(Math.random() * 5)],
  };
};

export default validateRegister;
