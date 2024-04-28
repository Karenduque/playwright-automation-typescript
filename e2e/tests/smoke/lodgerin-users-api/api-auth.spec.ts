import { test, expect } from "@playwright/test";

const BASE_URL = "";
const PATH_LOGIN = "/auth/login";
const PATH_CHECK_TOKEN = "/auth/check-token";
const PATH_LOGOUT = "/auth/logout?all=true";
import { TAGS } from "../../../helpers/utils/tags";

test.describe("API smoke suite auth", () => {
  
  test.describe.serial(() => {
    
    test("POST - Login", 
    {tag: [TAGS.REGRESSION, TAGS.API]},
    async ({ request }) => {
      console.log("Test Login");
      const response = await request.post(`${BASE_URL}${PATH_LOGIN}`, {
        data: {
          email: "admin@example.com",
          password: "password",
        },
      });

        expect(response.ok()).toBeTruthy();
        expect(await response.json()).not.toBeUndefined();
        const res = JSON.parse(await response.text());
        const token = res.data.token;
        //console.log(token);
        process.env.TOKEN = token;
        console.log("json: " + (await response.text()));
    });
    
    test("GET - Check session token",
    {tag: [TAGS.REGRESSION, TAGS.API]},
    async ({ request }) => {
      console.log("Check session token");
      const response = await request.get(`${BASE_URL}${PATH_CHECK_TOKEN}`, {
        headers: {
          Accept: "application/json",
          // Add authorization token to all requests.
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });

      //console.log('token: '+process.env.TOKEN);
      //console.log('json: '+await response.text());
      console.log("json: " + (await response.text()));

      expect(response.ok()).toBeTruthy();
      expect(await response.json()).not.toBeUndefined();
    });

    test("DELETE - Logout", 
    {tag: [TAGS.REGRESSION, TAGS.API]},
    async ({ request }) => {
      console.log("Logout");
      const response = await request.delete(`${BASE_URL}${PATH_LOGOUT}`, {
        headers: {
          Accept: "application/json",
          // Add authorization token to all requests.
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });

      //console.log('token: '+process.env.TOKEN);
      console.log("json: " + (await response.text()));

      expect(response.ok()).toBeTruthy();
      expect(await response.json()).not.toBeUndefined();
    });
    
  });
});
