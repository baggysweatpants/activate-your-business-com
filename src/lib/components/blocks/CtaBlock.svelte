<script lang="ts">
	// import type { CtaProps } from '$lib/types';
	import CtaButton from '../elements/CtaButton.svelte';
	import { openModal } from '$lib/state/modalState.svelte';

	let { ctaBlock } = $props();
</script>

<div class="bg-sand/10 col-span-12 px-10 py-20 text-center md:px-30">
	<div class="pb-10 text-4xl">{@html ctaBlock.heading}</div>
	<div class="flex flex-col gap-10 px-10">
		<div class="mx-auto w-1/2">{@html ctaBlock.content}</div>
		<div>
			<CtaButton buttonAction={openModal} buttonText={ctaBlock.cta_button}></CtaButton>
		</div>
	</div>
</div>
