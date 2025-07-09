<script lang="ts">
	let { data } = $props();
	import Modal from '$lib/components/blocks/Modal.svelte';
</script>

<Modal></Modal>
<h1>{data.page.title}</h1>
