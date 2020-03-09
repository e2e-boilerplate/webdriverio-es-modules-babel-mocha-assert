import assert from "assert";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1").getText();

    assert.strictEqual(title, "Sandbox");
    assert.strictEqual(header, "Sandbox");
  });
});
