const AccessControl = require("accesscontrol");
const ac = new AccessControl();

const roles = (function () {
  ac.grant("user")
    .readOwn("profile")
    .updateOwn("profile")
    .updateOwn("password")
    .readAny("property")
    .createOwn("property")
    .updateOwn("property")
    .createOwn("gallery")
    .updateOwn("gallery")
    .createOwn("review")
    .readAny("review")
    .updateOwn("review")
    .deleteOwn("review")
    .readOwn("shortlist")
    .updateOwn("shortlist")
    .createOwn("visit")
    .readOwn("visit")
    .createOwn("payment")
    .readOwn("payment")
    .createOwn("feedback");

  ac.grant("admin")
    .extend("user")
    .readAny("profile")
    .updateAny("profile")
    .updateAny("property")
    .updateAny("review")
    .deleteAny("review")
    .readAny("visit")
    .readAny("payment")
    .readAny("feedback");

  return ac;
})();

export default roles;
