<script>
  // fetch a random image of a dog from dog.ceo
  import { onMount } from "svelte";
  let dogImage = "";

  onMount(async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    dogImage = data;
  });
</script>

<section>
  {#if dogImage?.status === "success"}
    <h2>Here's a cute dog for you!</h2>

    <img src={dogImage.message} alt="Random Dog" />
  {:else}
    <h2>Loading...</h2>
  {/if}
</section>

<style>
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
</style>
