import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
];

test.describe("Corporate Website End-to-End Journeys & Audits", () => {
  test("Journey A: Home -> Products -> Product Detail -> Preselected RFQ Enquiry", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Engineered Process Equipment for Sugar Mills/i,
      })
    ).toBeVisible();

    await page.getByRole("link", { name: /Explore Our Products/i }).click();
    await expect(page).toHaveURL(/\/products/);

    const searchBox = page.getByRole("searchbox");
    await searchBox.fill("Cane Milling");
    await expect(
      page.getByRole("link", { name: /4-Roller Heavy-Duty Cane Milling Tandem/i }).first()
    ).toBeVisible();

    await page
      .getByRole("link", { name: /4-Roller Heavy-Duty Cane Milling Tandem/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/products\/heavy-duty-cane-milling-tandem/);
    await expect(page.getByRole("table")).toBeVisible();

    await page
      .getByRole("link", { name: /Request Quote for This Equipment/i })
      .click();
    await expect(page).toHaveURL(
      /\/contact\?type=rfq&product=heavy-duty-cane-milling-tandem/
    );

    const productSelect = page.getByLabel(/Equipment \/ Product Selection/i);
    await expect(productSelect).toHaveValue("heavy-duty-cane-milling-tandem");
  });

  test("Journey B: Home -> About Us -> Capabilities -> Projects -> Quality -> Resources", async ({
    page,
  }) => {
    await page.goto("/");

    const desktopNav = page.getByRole("navigation", { name: "Primary" });
    await desktopNav.getByRole("link", { name: "About Us" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/About/i);

    await desktopNav.getByRole("link", { name: "Capabilities" }).click();
    await expect(page).toHaveURL("/capabilities");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Capabilities/i);

    await desktopNav.getByRole("link", { name: "Projects" }).click();
    await expect(page).toHaveURL("/projects");
    await page.getByRole("link", { name: /Review Case Study|View Project Case Study/i }).first().click();
    await expect(page).toHaveURL(/\/projects\/.+/);

    await desktopNav.getByRole("link", { name: "Quality" }).click();
    await expect(page).toHaveURL("/quality");
    await expect(page.getByText(/Certifications & Compliance Disclosure/i)).toBeVisible();

    await desktopNav.getByRole("link", { name: "Resources" }).click();
    await expect(page).toHaveURL("/resources");
    await expect(page.getByRole("link", { name: /Download/i }).first()).toBeVisible();
  });

  test("Journey C: Contact RFQ Form validation, file upload & server submission", async ({
    page,
  }) => {
    await page.goto("/contact");

    // Verify client-side validation blocks incomplete submission
    await page.getByRole("button", { name: /Submit Technical RFQ/i }).click();
    await expect(
      page.getByText(/Please enter your full name/i)
    ).toBeVisible();

    // Fill valid RFQ payload
    await page.getByLabel(/Full Name/i).fill("Vikram Patil");
    await page.getByLabel(/Company \/ Sugar Mill Name/i).fill("Krishna Valley Sugar Co.");
    await page.getByLabel(/Corporate Email/i).fill("vikram.patil@example.com");
    await page.getByLabel(/Phone \/ Mobile Number/i).fill("+91 98230 11223");
    await page.getByLabel(/Country \/ Plant Location/i).fill("India");
    await page
      .getByLabel(/Equipment \/ Product Selection/i)
      .selectOption("robert-type-falling-film-evaporator");
    await page
      .getByLabel(/Target Plant Capacity/i)
      .fill("5,000 TCD");
    await page
      .getByLabel(/Technical Scope & Enquiry Details/i)
      .fill("Need technical sizing proposal for 4,500 m2 falling film evaporator body.");

    // Attach sample specification buffer
    await page.locator('input[type="file"]').setInputFiles({
      name: "plant-steam-balance.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 sample specification"),
    });

    await page.getByRole("button", { name: /Submit Technical RFQ/i }).click();

    await expect(
      page.getByText(/Enquiry Recorded \(Development Preview Mode\)/i)
    ).toBeVisible();
    await expect(page.getByText(/Reference ID: ENQ-/)).toBeVisible();
    await expect(page.getByText(/plant-steam-balance\.pdf/)).toBeVisible();
  });

  for (const vp of VIEWPORTS) {
    test(`Responsive layout & zero horizontal overflow check at ${vp.width}px (${vp.name})`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("pageerror", (err) => {
        consoleErrors.push(err.message);
      });

      await page.setViewportSize({ width: vp.width, height: vp.height });

      for (const route of [
        "/",
        "/products",
        "/products/heavy-duty-cane-milling-tandem",
        "/contact",
      ]) {
        await page.goto(route);

        const overflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return {
            hasOverflow: doc.scrollWidth > window.innerWidth,
            scrollWidth: doc.scrollWidth,
            innerWidth: window.innerWidth,
          };
        });
        expect(
          overflow.hasOverflow,
          `Horizontal overflow detected at ${vp.width}px on ${route} (scrollWidth=${overflow.scrollWidth}, innerWidth=${overflow.innerWidth})`
        ).toBe(false);

        // Scroll through the page so lazy-loaded below-the-fold images fetch before validating
        const imgCount = await page.locator("img").count();
        for (let i = 0; i < imgCount; i++) {
          const img = page.locator("img").nth(i);
          await img.scrollIntoViewIfNeeded();
          await expect
            .poll(
              () =>
                img.evaluate((el) => {
                  const image = el as HTMLImageElement;
                  return image.complete && image.naturalWidth > 0;
                }),
              { timeout: 5000 }
            )
            .toBe(true);
        }
      }

      if (vp.width < 1024) {
        await page.goto("/");
        const menuBtn = page.getByRole("button", { name: /Open navigation menu/i });
        await expect(menuBtn).toBeVisible();
        await menuBtn.click();
        await expect(
          page.getByRole("navigation", { name: /Mobile Primary/i })
        ).toBeVisible();
      }

      expect(consoleErrors).toEqual([]);
    });
  }
});
