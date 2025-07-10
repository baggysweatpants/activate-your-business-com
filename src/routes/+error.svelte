<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="col-span-12 flex h-[90vh] flex-col items-center justify-center">
	<img src="/error/error-robot.webp" alt="robot encountering error" class="w-1/2 md:w-1/4" />
	<p class="py-10 text-center text-4xl font-bold">Something went wrong:</p>
	<h2 class="text-4xl">{page.status} - {page.error?.message}</h2>
	<a href="/" class="py-10 text-xl underline">Back to home.</a>
</div>
