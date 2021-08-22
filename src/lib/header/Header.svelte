<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import 'tailwindcss/tailwind.css';
</script>

<header>
	<div class="flex justify-center bg-green-200">
		<nav>
			<ul class="flex py-6">
				<a class="text-xl italic px-60 text-green-800 font-bold" href="/">&lt;Austin_Wang/&gt;</a>
				<li class="mr-6">
					<a class="text-m text-black hover:text-green-600 hover:bg-green-100 px-10 py-8" href="/"
						>Home</a
					>
				</li>

				<li class="mr-6">
					<a
						class="text-m text-black hover:text-green-600 hover:bg-green-100 px-9 py-8"
						href="/projects">Projects</a
					>
				</li>
				<li class="mr-6">
					<a
						class="text-m text-black hover:text-green-600 hover:bg-green-100 px-12 py-8"
						href="/blog">Blog</a
					>
				</li>
				<li class="mr-6">
					<a
						class="text-m text-black hover:text-green-600 hover:bg-green-100 px-12 py-8"
						href="/violin">Violin</a
					>
				</li>
				<li class="mr-6">
					<a
						class="text-m text-black hover:text-green-600 hover:bg-green-100 px-11 py-8"
						href="/about">About</a
					>
				</li>
			</ul>
		</nav>
	</div>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
