// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const URL_IMAGES_PREFIX = 'https://images.dog.ceo/breeds/';
test('app show random breed and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const breed = await page.getByTestId('breedSpan');
  const image = await page.getByRole('img');

  const breedContent = await breed.textContent();
  const imageSrc = await image.getAttribute('src');

  // consulta si el contenido de breed es distinto de vacio
  await expect(breedContent?.length).toBeGreaterThan(0);
  //comprueba si el inicio del src de la imagen es igual a la constante URL_IMAGES_PREFIX
  await expect(imageSrc?.startsWith(URL_IMAGES_PREFIX)).toBeTruthy();
});
