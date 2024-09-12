import { test, expect } from '@playwright/test';

test('Validate product Samsung Galaxy S24', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Samsung s24');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.locator('li').filter({ hasText: 'Samsung Galaxy S24' }).first().click();  
  
  await page.getByRole('heading', { name: 'Samsung Galaxy' }).click();

  // Select the locator for 'ui-pdp-title'
  const heading = page.locator('h1.ui-pdp-title');

  // Check heading contains 'Samsung Galaxy S24'
  await expect(heading).toContainText('Samsung Galaxy S24');
});


