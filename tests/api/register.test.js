import register from "../../controllers/auth/register";
import validateRegister from "../../utils/tests/register";

jest.setTimeout(8000);

test("testing for user registration", async () => {
  const req = {
    method: "POST",
    // body: JSON.stringify({
    //   prefix: "Mr.",
    //   first_name: "Test",
    //   middle_name: "User",
    //   last_name: "2",
    //   email: "tusharnayak2626@gmail.com",
    //   mobile: {
    //     country_code: "+91",
    //     number: 4561477539,
    //   },
    //   dob: "05/06/2000",
    //   age: 22,
    //   designation: "Software Developer",
    //   gender: "male",
    //   marital_status: "single",
    //   nationality: "Indian",
    //   current_address: "B-647, QWE Colony, UNIT-N",
    //   state: "Odisha",
    //   city: "Bhubaneswar",
    //   pincode: 751001,
    //   country: "India",
    //   name_in_pan: "TEST USER 2",
    //   pan: "QWERF2134M",
    //   name_in_bank: "Test User 2",
    //   bank_name: "KOTAK MAHINDRA BANK",
    //   branch: "XYZ",
    //   account_number: "154236954234",
    //   ifsc_code: "QWDH234567",
    //   account_type: "savings",
    //   get_updates: true,
    // }),
    body: validateRegister(),
  };

  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  const res = {
    status,
  };

  await register(req, res);

  const result = json.mock.calls[0][0].success;
  console.log(json.mock.calls[0][0].error);
  expect(result).toBe(true);
});
