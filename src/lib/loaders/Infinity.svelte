<script>
  import { scaleLength } from "$lib/support";

  export let width = "100px";
  export let height = "100px";
  export let color = "currentColor";

  let aspectRatio = 1;

  if ($$props.width && !$$props.height) height = scaleLength(width, 1 / aspectRatio);
  if ($$props.height && !$$props.width) width = scaleLength(height, aspectRatio);
</script>

<svg
  {width}
  {height}
  fill={color}
  {...$$restProps}
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <path
    fill="none"
    stroke={color}
    stroke-width="8"
    stroke-dasharray="42.76482137044271 42.76482137044271"
    d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
    stroke-linecap="round"
    style="transform:scale(0.8);transform-origin:50px 50px"
  >
    <animate
      attributeName="stroke-dashoffset"
      repeatCount="indefinite"
      dur="1s"
      keyTimes="0;1"
      values="0;256.58892822265625"
    />
  </path>
  <!-- [ldio] generated by https://loading.io/ --></svg
>
