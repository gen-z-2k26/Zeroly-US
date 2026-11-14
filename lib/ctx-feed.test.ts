import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { feedStoreOrigin, PUBLIC_STORE_ORIGIN, rewriteProductLinks } from "./ctx-feed.ts";

const item = `<item>
<link><![CDATA[https://wp.zeroly.us/product/dyson-airblade-v-hand-dryer/]]></link>
<g:image_link><![CDATA[https://wp.zeroly.us/wp-content/uploads/2026/11/1.jpg]]></g:image_link>
<g:canonical_link><![CDATA[https://wp.zeroly.us/product/dyson-airblade-v-hand-dryer/]]></g:canonical_link>
</item>`;

describe("CTX feed links", () => {
  it("uses zeroly.us when the public URL is the WordPress host", () => {
    assert.equal(
      feedStoreOrigin("https://wp.zeroly.us", "https://wp.zeroly.us"),
      PUBLIC_STORE_ORIGIN,
    );
    assert.equal(feedStoreOrigin("https://wp.zeroly.us", "https://zeroly.us"), PUBLIC_STORE_ORIGIN);
    assert.equal(
      feedStoreOrigin("https://wp.zeroly.us", "https://www.zeroly.us"),
      PUBLIC_STORE_ORIGIN,
    );
  });

  it("keeps a non-production storefront origin", () => {
    assert.equal(
      feedStoreOrigin("https://wp.zeroly.us", "http://localhost:3000"),
      "http://localhost:3000",
    );
  });

  it("rewrites product and home links and leaves images on WordPress", () => {
    const xml = `<channel><link><![CDATA[ https://wp.zeroly.us ]]></link>${item}</channel>`;
    const out = rewriteProductLinks(xml, "https://wp.zeroly.us", PUBLIC_STORE_ORIGIN);
    assert.match(out, /<link>https:\/\/zeroly\.us\/<\/link>/);
    assert.match(
      out,
      /<link>https:\/\/zeroly\.us\/products\/dyson-airblade-v-hand-dryer<\/link>/,
    );
    assert.match(
      out,
      /<g:canonical_link>https:\/\/zeroly\.us\/products\/dyson-airblade-v-hand-dryer<\/g:canonical_link>/,
    );
    assert.match(out, /wp\.zeroly\.us\/wp-content\/uploads/);
    assert.equal(out.includes("/product/"), false);
  });
});
