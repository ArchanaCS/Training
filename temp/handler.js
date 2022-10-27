"use strict";

module.exports.login = async (event) => {
  let req = event.body;
  if (req.username == "") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        Message: "username  missing failed",
      }),
    };
  } else if (req.password == "") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "error",
        Message: "password  missing",
      }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        Message: "Successfully Done!",
      }),
    };
  }
};
