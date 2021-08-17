<script context="module" lang="ts">
	export const prerender = true;
	import Milky_Way from '/src/assets/milkywaygalaxy.png';
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="max-w-prose mx-auto bg-green-100">
	<section>
		<h1 class="font-bold text-5xl lg:text-6xl py-6 text-green-600">Hi, I'm Austin Wang</h1>
		<div>
			<p>I love astronomy!</p>
			<img src={Milky_Way} alt="The Milky Way" />
		</div>
	</section>
</main>
