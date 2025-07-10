<script>
	import { fade } from 'svelte/transition';
	import CloseButton from '$lib/components/elements/CloseButton.svelte';
	import Form from '$lib/components/elements/Form.svelte';
	import { closeModal, modalState } from '$lib/state/modalState.svelte';
	let { ctaBlock } = $props();
</script>

{#if modalState.visible}
	<div transition:fade class="fixed inset-0 z-40 flex items-center justify-center">
		<div class=" from-ice to-offwhite absolute inset-0 bg-gradient-to-bl opacity-95"></div>
		<div
			class="bg-offwhite relative z-20 m-5 max-h-5/6 min-w-5/6 overflow-auto p-10 md:max-w-2/3 md:min-w-0 xl:max-w-1/3"
		>
			<button
				aria-label="Close"
				class="absolute top-5 right-5 z-50 h-10 w-10 cursor-pointer transition-transform duration-300 hover:rotate-90"
				onclick={closeModal}><CloseButton></CloseButton></button
			>
			<h2 class="py-5 pt-10 text-2xl md:text-4xl">{@html ctaBlock.form_heading}</h2>
			<div class="pb-10">{@html ctaBlock.form_content}</div>
			<Form></Form>
		</div>
	</div>
{/if}
