<script lang="ts">
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	// import type { CardGroupProps } from '$lib/types';

	let { cardBlock } = $props();

	const assetURL = PUBLIC_DIRECTUS_URL + '/assets/';
</script>

<div class="bg-offwhite col-span-12 grid grid-cols-12 gap-5 px-10 py-20">
	<h2 class="col-span-12 pb-10 text-center text-4xl">{cardBlock.heading}</h2>
	{#each cardBlock.cards as card}
		<div
			class="bg-dark-blue text-offwhite col-span-12 flex flex-col items-center p-7 shadow-lg/20 md:col-span-4"
		>
			<img class="w-14 pb-5" src={assetURL + card.item.icon} alt="" />
			<p class="text-center">{@html card.item.content}</p>
		</div>
	{/each}
</div>
