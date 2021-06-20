<script>
  import {
    Audio,
    BallTriangle,
    Bars,
    Circles,
    Disk,
    DualRing,
    Grid,
    Hearts,
    Infinity,
    Oval,
    Puff,
    Rings,
    Spinner,
    SpinningCircles,
    TailSpin,
    ThreeDots
  } from "$lib";
</script>

<svelte:head>
  <title>SVG Loaders Svelte - Rodrigo Couto</title>
</svelte:head>

<ul>
  <li>
    <DualRing width="2rem" />
  </li>
  <li>
    <Disk width="2rem" />
  </li>
  <li>
    <Spinner width="2rem" />
  </li>
  <li>
    <Infinity width="2rem" />
  </li>
  <li>
    <Audio width="2rem" />
  </li>
  <li>
    <Rings width="2rem" />
  </li>
  <li>
    <Grid width="2rem" />
  </li>
  <li>
    <Hearts width="2rem" />
  </li>
  <li>
    <Oval width="2rem" />
  </li>
  <li>
    <ThreeDots width="2rem" />
  </li>
  <li>
    <SpinningCircles width="2rem" />
  </li>
  <li>
    <Puff width="2rem" />
  </li>
  <li>
    <Circles width="2rem" />
  </li>
  <li>
    <TailSpin width="2rem" />
  </li>
  <li>
    <Bars width="2rem" />
  </li>
  <li>
    <BallTriangle width="2rem" />
  </li>
  <div style="clear: both" width="2rem" />
</ul>

<div style="clear: both" width="2rem" />

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
