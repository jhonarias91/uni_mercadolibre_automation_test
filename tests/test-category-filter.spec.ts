import { test, expect } from '@playwright/test';

test('test-category-filter', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByRole('button', { name: 'Categorías' }).click();
  await page.getByRole('link', { name: 'Vehículos', exact: true }).click();
  await page.getByRole('link', { name: 'Carros Usados Usados' }).click();

  // Verificar si el texto "Usado" está presente en cualquier parte
  const usedFilter = page.getByText('Usado', { exact: true });

 await expect(usedFilter).toBeVisible({ timeout: 5000 });

});