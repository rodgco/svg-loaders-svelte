<script>
  import Audio from "$lib/Audio.svelte";
  import BallTriangle from "$lib/BallTriangle.svelte";
  import Bars from "$lib/Bars.svelte";
  import Circles from "$lib/Circles.svelte";
  import Disk from "$lib/Disk.svelte";
  import DualRing from "$lib/DualRing.svelte";
  import Grid from "$lib/Grid.svelte";
  import Hearts from "$lib/Hearts.svelte";
  import Infinity from "$lib/Infinity.svelte";
  import Oval from "$lib/Oval.svelte";
  import Puff from "$lib/Puff.svelte";
  import Rings from "$lib/Rings.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import SpinningCircles from "$lib/SpinningCircles.svelte";
  import TailSpin from "$lib/TailSpin.svelte";
  import ThreeDots from "$lib/ThreeDots.svelte";
</script>

<svelte:head>
  <title>SVG Loaders Svelte - Rodrigo Couto</title>
</svelte:head>

<ul>
  <li>
    <DualRing />
  </li>
  <li>
    <Disk />
  </li>
  <li>
    <Spinner />
  </li>
  <li>
    <Infinity />
  </li>
  <li>
    <Audio width="40" height="58" alt="" />
  </li>
  <li>
    <Rings width="60" height="60" alt="" />
  </li>
  <li>
    <Grid width="40" height="40" alt="" />
  </li>
  <li>
    <Hearts width="80" height="36" alt="" />
  </li>
  <li>
    <Oval width="50" height="50" alt="" />
  </li>
  <li>
    <ThreeDots width="60" height="60" alt="" />
  </li>
  <li>
    <SpinningCircles width="50" height="50" alt="" />
  </li>
  <li>
    <Puff width="50" height="50" alt="" />
  </li>
  <li>
    <Circles width="50" hight="50" alt="" />
  </li>
  <li>
    <TailSpin width="50" height="50" alt="" />
  </li>
  <li>
    <Bars width="40" height="40" alt="" />
  </li>
  <li>
    <BallTriangle width="50" height="50" alt="" />
  </li>
  <div style="clear: both" />
</ul>

<div style="clear: both" />

<div class="attr">
  Made by <a href="https://twitter.com/sherb">Sam</a>, for everyone. Adapted by
  <a href="https://twitter.com/rodg_co">Rodgco</a>, for the <a href="http://svelte.dev">Svelte</a> Community
</div>

<style>
  ul {
    color: #fff;
    background: #fff0;
    max-width: 720px;
    margin: auto;
    margin-top: 60px;
    list-style: none;
    padding: 0;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.37);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  ul li {
    min-width: 180px;
    min-height: 180px;
    aspect-ratio: 1/1;
    line-height: 176px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
  }
  li:nth-child(12n + 1) {
    background-color: #1abc9c;
  }
  li:nth-child(12n + 2) {
    background-color: #34495e;
  }
  li:nth-child(12n + 3) {
    background-color: #f39c12;
  }
  li:nth-child(12n + 4) {
    background-color: #9b59b6;
  }
  li:nth-child(12n + 5) {
    background-color: #3498db;
  }
  li:nth-child(12n + 6) {
    background-color: #e74c3c;
  }
  li:nth-child(12n + 7) {
    background-color: #2ecc71;
  }
  li:nth-child(12n + 8) {
    background-color: #2c3e50;
  }
  li:nth-child(12n + 9) {
    background-color: #f1c40f;
  }
  li:nth-child(12n + 10) {
    background-color: #8e44ad;
  }
  li:nth-child(12n + 11) {
    background-color: #2980b9;
  }
  li:nth-child(12n) {
    background-color: #e74c3c;
  }

  .attr {
    color: #fff;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 20px;
  }
</style>
