import { add } from "../src/index";

test("adds 1 + 2 to equal 3", () => {
  const sum: any = add(1, 2);

  expect(sum).toBe(3);
});
