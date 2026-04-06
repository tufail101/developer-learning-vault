// This example narrows a union type in a few different ways.

type ApiSuccess = { ok: true; data: string[] };
type ApiError = { ok: false; message: string };
type ApiResult = ApiSuccess | ApiError;

function isSuccess(result: ApiResult): result is ApiSuccess {
  return result.ok === true;
}

function handleResult(result: ApiResult) {
  if (isSuccess(result)) {
    console.log("Items:", result.data.join(", "));
    return;
  }

  console.log("Error:", result.message);
}

handleResult({ ok: true, data: ["HTML", "CSS", "TypeScript"] });
handleResult({ ok: false, message: "Could not load data" });
