<script>
  export let width = 100;
  export let height = 100;
  export let color = "currentColor";
</script>

<svg
  {width}
  {height}
  {...$$restProps}
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="margin: auto; background: none; display: block; shape-rendering: auto;"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <g transform="translate(50,50)">
    <path
      fill={color}
      d="M -0.101562,-34.999963 A 35,35 0 0 0 -35,3.7e-5 a 35,35 0 0 0 35,35 35,35 0 0 0 35,-35 35,35 0 0 0 -35,-35 35,35 0 0 0 -0.101562,0 z m -0.01465,4.90039 a 10.5,10.5 0 0 1 0.11621100015543,0 A 10.5,10.5 0 0 1 10.499999,-19.599573 10.5,10.5 0 0 1 -9.9984457e-7,-9.099573 10.5,10.5 0 0 1 -10.500001,-19.599573 a 10.5,10.5 0 0 1 10.383789,-10.5 z"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 0 0;360 0 0"
      />
    </path>
  </g>
</svg>
