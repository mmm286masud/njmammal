import { expect, test } from "@playwright/test";
import { mammals } from "../../content/mammals";

test("homepage renders the scrollytelling chapters and featured mammal links", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Mammals of New Jersey" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Wildlife woven into daily life" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Five mammals, five ways of seeing the state",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Conservation starts with attention" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Explore More Wildlife" }),
  ).toBeVisible();

  for (const mammal of mammals) {
    await expect(page.getByRole("link", { name: mammal.name }).first()).toHaveAttribute(
      "href",
      new RegExp(`/mammals/${mammal.slug}/?$`),
    );
  }
});

test("about page loads project context and credits", async ({ page }) => {
  await page.goto("/about");

  await expect(
    page.getByRole("heading", {
      name: "A field guide built for curious scrolling",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Image credits and sourcing" }),
  ).toBeVisible();
});

for (const mammal of mammals) {
  test(`${mammal.name} detail page shows habitat, diet, and facts`, async ({
    page,
  }) => {
    await page.goto(`/mammals/${mammal.slug}`);

    await expect(page.getByRole("heading", { name: mammal.name })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Habitat" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Diet" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fun facts" })).toBeVisible();
  });
}
