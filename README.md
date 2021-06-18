This is a zero-dependency Svelte adaptation of Sam Herberts [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) library. Highly influenced by ajwann [SVG Loaders React](https://github.com/ajwann/svg-loaders-react) adaptation.

# Usage

## Install from NPM

```bash
npm install svg-loaders-svelte
```

## Import the SVGLoaders components

### Import all the loaders in a namespaced fashion

You can import all the loaders at once:

```js
import * as SVGLoaders from "svg-loaders-svelte";
```

and use them in a namespaced manner:

```js
<SVGLoaders.Bars />
```

### Import an individual loader

You can also import a single loader:

```js
import { Bars } from "svg-loaders-svelte";
```

and use it without any fancy namespacing:

```js
<Bars />
```

## Components

`<Audio />`

`<BallTriangle />`

`<Bars />`

`<Circles />`

`<Grid />`

`<Hearts />`

`<Oval />`

`<Puff />`

`<Rings />`

`<SpinningCircles />`

`<TailSpin />`

`<ThreeDots />`

# Options

Each of these components should be able to accept any [SVG tag presentation attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) as props.

Loaders SVGs will be inlined which enabled the use of `fill="currentColor"`, and makes it easier to style the loader from CSS.

A `color` prop makes it easier to define a color, which may be a `fill` or a `stroke` within each component.

# Common Usage

```Javascript
// using currentColor through CSS
<span style="color: #ff3e00">
  <Audio />
</span>

// Using the color prop
<Rings color="#ff3e00" /> // uses stroke for color
<Hearts color="#ff3e00" /> // uses fill for color

// render the Puff loader with a stroke opacity of .125
<Puff strokeOpacity=".125" />

// render the Puff loader with a stroke of mint green
<Puff stroke="#98ff98" />

// render the Puff loader with a stroke of mint green and a stroke opactiy of .125
<Puff stroke="#98ff98" strokeOpacity=".125"/>
```
