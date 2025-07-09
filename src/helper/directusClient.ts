import { createDirectus, staticToken, rest } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import { DIRECTUS_TOKEN } from '$env/static/private';


const directus = createDirectus(PUBLIC_DIRECTUS_URL)
  .with(staticToken(DIRECTUS_TOKEN))
  .with(rest());


export default directus