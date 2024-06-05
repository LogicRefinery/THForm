import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/survey", () => {
    return HttpResponse.json({
      status: 200,
    });
  }),
  http.post("/api/survey", () => {
    return HttpResponse.json({
      status: 200,
    });
  }),
  http.patch("/api/survey", () => {
    return HttpResponse.json({
      status: 200,
    });
  }),
  http.delete("/api/survey", () => {
    return HttpResponse.json({
      status: 200,
    });
  }),
];
