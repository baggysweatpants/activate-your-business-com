import getPage from "../helper/content-api/getPage";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ()=> {
    const page = await getPage()
     if (!page) {
        throw error(404, 'Page Not Found')
    }
    return { page }
}