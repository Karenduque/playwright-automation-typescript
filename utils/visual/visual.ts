import { Locator, Page, expect } from "@playwright/test";

/**
 * An interface to define margin of liberty for image analysis.
 *
 * @interface VisualOptions;
 * @member mask {Locators[]} - A list of locators to exclude from the screenshot.
 * @member fullPage {boolean} - If true will take the whole page screenshot with scrolling.
 * @member maxDiffPixelRatio {number} - An acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1.
 * @member selector {string} - selector to take the screenshot over the element.
 * If is undefined the whole viewport will be used.
 * @member threshold {number} - An acceptable perceived color difference in the YIQ color space between the same pixel in compared images,
 * between zero (strict) and one (lax), default is configurable with TestConfig.expect.
 */
interface VisualOptions {
  mask?: Locator[] | undefined;
  fullPage?: boolean | undefined;
  maxDiffPixelRatio?: number | undefined;
  selector?: string | undefined;
  threshold?: number | undefined;
  soft?: boolean | false;
}

/**
 * Perform a visual analysis for a page or a selector element.
 * @param page {Page} - Playwright page object
 * @param name {string} - name of the file with teh file extension *.png || *.jpg
 * @param pageOptions {PageOptions} - page configuration for the analysis
 * (i.e. if has a selector the screenshot will be only the selected selector,
 * or if has a fullPage the screenshot will be the whole page with scrolling).
 * @param options {VisualOptions} - Visual options to change the comparison analysis default values.
 * @param soft {boolean} - If you want to perform the visual analysis as a soft expect.
 */
export async function assertVisual(page: Page, name: string, options?: VisualOptions) {
  if (!options?.selector) {
    if (options?.soft) await expect.soft(page).toHaveScreenshot(name, options !== undefined ? options : undefined);
    else await expect(page).toHaveScreenshot(name, options !== undefined ? options : undefined);
  } else {
    if (options?.soft)
      await expect
        .soft(page.locator(options.selector))
        .toHaveScreenshot(name, options !== undefined ? options : undefined);
    else
      await expect(page.locator(options.selector)).toHaveScreenshot(name, options !== undefined ? options : undefined);
  }
}
