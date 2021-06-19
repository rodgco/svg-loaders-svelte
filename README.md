This is a zero-dependency Svelte adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library. Highly influenced by ajwann [SVG Loaders React](https://github.com/ajwann/svg-loaders-react) adaptation.

And with a few additions of free spinners from [loading.io](http://loading.io).

# Usage

## Install from NPM

```bash
npm install svg-loaders-svelte
```

## Import the SVGLoaders components

You can import a single loader in your Svelte page (or any other component)

```html
<script>
  import { Bars } from "svg-loaders-svelte";
</script>

<Bars />
```

## Components

`<Audio />`

`<BallTriangle />`

`<Bars />`

`<Circles />`

`<Disk />`

`<DualRing />`

`<Grid />`

`<Hearts />`

`<Infinity />`

`<Oval />`

`<Puff />`

`<Rings />`

`<Spinner />`

`<SpinningCircles />`

`<TailSpin />`

`<ThreeDots />`

# Options

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props.

Loaders SVGs will be inlined which enabled the use of `fill="currentColor"`, and makes it easier to style the loader from CSS.

A `color` prop makes it easier to define a color, which may be a `fill` or a `stroke` within each component.

A `width` and/or `height` can be passed as number only props, will be treated as px, if only one is passed aspect ratio will be enforced.

# Common Usage

```Javascript
// using currentColor through CSS
<span style="color: #ff3e00">
  <Audio />
</span>

// using the color prop
<Rings color="#ff3e00" /> // uses stroke for color
<Hearts color="#ff3e00" /> // uses fill for color

// passing a width, height will be calculated respecting aspect ratio
<Hearts width="100">

// render the Puff loader with a stroke opacity of .125
<Puff strokeOpacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" strokeOpacity=".125"/>
```
