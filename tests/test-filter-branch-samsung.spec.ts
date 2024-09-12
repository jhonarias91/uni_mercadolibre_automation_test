import { test, expect } from '@playwright/test';

test('test-filter-branch-samsung', async ({ page }) => {

  // Navegar al sitio web
  await page.goto('https://www.mercadolibre.com.co/');

  // Buscar un producto
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill('televisor');
  await page.getByRole('button', { name: 'Buscar' }).click();

  // Esperar que los filtros de precios estén visibles
  await page.waitForSelector('.ui-search-price-filter-container');

  await page.getByRole('button', { name: 'full te da envío gratis En' }).click();

  // Capturar el elemento del filtro con el texto "Samsung"
  const samsungFilter = await page.locator('span.ui-search-filter-name', { hasText: 'Samsung' });

    // Validar que el elemento existe
    await expect(samsungFilter).toBeVisible();

    // Validar que el texto del filtro sea "Samsung"
    const filterText = await samsungFilter.innerText();
    expect(filterText).toBe('Samsung');
});
