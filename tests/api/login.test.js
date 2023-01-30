import login from "../../controllers/auth/login";
import validateLogin from "../../utils/tests/login";

jest.setTimeout(8000);

test("testing for user login", async () => {
  const req = {
    method: "POST",
    body: validateLogin(),
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

  await login(req, res);

  const result = json.mock.calls[0][0].success;
  if (json.mock.calls[0][0].error) {
    console.log(json.mock.calls[0][0].error);
  }
  expect(result).toBe(true);
});
