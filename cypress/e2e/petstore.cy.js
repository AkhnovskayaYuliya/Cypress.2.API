import user from "../fixtures/postUser";
import updatedUser from "../fixtures/updateUser";
import responseBody from "../fixtures/responseBody";

describe("Testing pet store api", () => {
  it("Create user", () => {
    cy.createUser();
  });
  it("Update user", () => {
    cy.createUser();
    cy.request("PUT", "/${user.username}", updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).be.eql(responseBody);
    });
  });
  it("Delete user", () => {
    cy.createUser();
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
