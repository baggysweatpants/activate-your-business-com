<script lang="ts">
	// import type { HeroProps, LogoProps } from '$lib/types';
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import CtaButton from '../elements/CtaButton.svelte';
	import { openModal } from '$lib/state/modalState.svelte';

	let { heroBlock } = $props();

	const assetURL: string = PUBLIC_DIRECTUS_URL + '/assets/';
	const backgroundURL: string = assetURL + heroBlock.background;
	const imageURL: string = assetURL + heroBlock.image;
</script>

<div class="relative col-span-12 grid grid-cols-12">
	<div
		class="text-offwhite bg-fit col-span-12 mt-24 flex h-[800px] flex-col justify-center bg-top px-10 pb-10"
		style:background-image={`url(${backgroundURL})`}
	>
		<div class="prose-h1:leading-15 mb-10 text-5xl md:w-1/2">{@html heroBlock.heading}</div>
		<div class="text-2xl md:w-1/2">{@html heroBlock.subheading}</div>
	</div>
	<div class="absolute bottom-0 my-5 hidden w-full text-center md:block">
		<CtaButton buttonText="Find Out More" buttonAction={openModal}></CtaButton>
	</div>
</div>

<div
	class="bg-dove prose-h2:text-2xl col-span-12 flex flex-col items-center px-10 py-10 md:flex-row"
>
	<img
		class="py-10 md:mr-10 md:max-w-1/3 md:py-0"
		src={imageURL}
		alt="woman staring into her laptop"
	/>
	<div class="flex flex-col">
		{@html heroBlock.content}
	</div>
</div>
