import directus from "../directusClient";
import { readItems } from "@directus/sdk";

export async function getPage(){
    const pages = await directus.request(
        readItems('pages', {
            fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: [
								'*',
								{
									cards: [
										'*',
										{
											item: ['*']
										}
									],
									questions: [
										'*',
										{
											item: ['*']
										}
									],
									benefits: [
										'*',
										{
											item: ['*']
										}
									],
								}
							],						
						}
					]
				}
			]
        })

    );
    const page = pages[0]
    return page
}

export default getPage