/**
 * @jest-environment jsdom
 */

import BrowseEverything from "../src/lib/browse_everything";

test("BrowseEverything", () => {
  const browseEverything: BrowseEverything = new BrowseEverything(
    window.document
  );
  expect(browseEverything).not.toBeNull();
});
