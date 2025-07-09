<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="from-ice to-offwhite sticky min-h-screen bg-gradient-to-tr bg-cover bg-fixed bg-no-repeat"
>
	<div id="twelve-grid" class="bg-offwhite max-w-8xl mx-auto grid grid-cols-12">
		{@render children()}
	</div>
</div>

{@render children()}
