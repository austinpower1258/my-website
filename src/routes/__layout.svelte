<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import 'tailwindcss/tailwind.css';
</script>

<Header />
<main class="bg-green-100">
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
