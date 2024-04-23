export function getResponseData(res) {
  let response;

  if (res.status == 1) {
    response = {
      status: true,
      data: res["result"],
      message: res["message"],
    };
    return { response };
  } else {
    response = {
      status: false,
      data: {},
      message: res["message"],
    };
    return { response };
  }
}
