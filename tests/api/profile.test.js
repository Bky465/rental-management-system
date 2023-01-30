import profile from "../../pages/api/auth/profile";

jest.setTimeout(8000);

test("testing for user profile route", async () => {
  const req = {
    method: "GET",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMDJlOTdiNjk4YmJmNWQ2MDJhMWEzIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY3MjA0OTkzMH0.6cCn_ZKFE70WXzRExrAbKC6PRevWMbRG4Nbx_qOL0ZA",
    },
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

  await profile(req, res);

  const result = json.mock.calls[0][0].success;
  if (json.mock.calls[0][0].error) {
    console.log(json.mock.calls[0][0].error);
  }
  expect(result).toBe(true);
});
