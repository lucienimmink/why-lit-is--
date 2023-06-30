# Why Lit is 🔥

<!-- .slide: data-theme="blue" -->

--

> Who is familiar with _web components_?

--

> Who is familiar with _template literals_?

--

## 🤔 What if we _use_ Web Components and template literals together?

---

<!-- .slide: data-theme="calm-green" -->

## Lucien Immink, B.Eng.

--

![Lucien Immink](/assets/lucien-immink.webp)<!-- .element: class="circle" style="max-height: 20vh" -->

Software Architect &</br>
Developer Advocate @ _iO_</br>
</br>
Google Developer Expert

---

## Upcoming

- Web, the platform<!-- .element: class="fragment fade-in" -->
- Lit, the library<!-- .element: class="fragment fade-in" -->
- Lit Labs, the experiments<!-- .element: class="fragment fade-in" -->
- Custom Elements Manifest, the codegen<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-theme="calm-pink" -->
## Use the platform

--

### Web Components

- Templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Custom elements<!-- .element: class="fragment fade-in-then-semi-out" -->
- Shadow DOM<!-- .element: class="fragment fade-in-then-semi-out" -->
- ❤️ CSS variables<!-- .element: class="fragment fade-in-then-semi-out" -->

--

## Literals

--

Literals represent a value in JavaScript.<br /><br />
> Fixed (no variable) value that you _literally_ provide in JavaScript.

--
<div>
Array literals

```javascript
let list = ['cat', 'dog', 'catdog']
let anotherList = [1, null, { "property": "value" }]
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

<div>
Boolean literals

```javascript
true || false
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

<div>
Numeric literals

```javascript
let number = 1337
let hexadecimalNumber = 0x2FF
let octalNumber = 0o713
let binaryNumber = 0b01011001
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<div>
Object literals

```javascript
const person = {
    name: 'Lucien',
    surname: 'Immink',
    company: 'iO',
    professions: [ 'Software Architect', 'Developer Advocate' ],
    currentLocation: 'WeAreDevelopers World Congress'
}
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

<div>
RegExp literals

```javascript
let regexp = /ab+c/g
let simpleRegexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

<div>
String literals

```javascript
const str = 'Hello';
const multiLineStr = 'Hello\nWorld';
const json = '{"name":"Lucien","surname":"Immink","company":"iO","professions":["Software Architect","Developer Advocate"], "currentLocation": "WeAreDevelopers World Congress"}';
const concat = 'Hello ' + type + ' world';
```

</div>
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

Template literals

```javascript[1-6|7]
const str = `Hello`;
const multiLineStr = `
Hello 
World
`; 
const template = `Hello ${type} world`;
taggedFunction`Hello ${type} world`
```

```javascript
const taggedFunction = (template, ...values) => {
    // template = ['Hello ', ' world']
    // values = ['wonderful']
}
```
<!-- .element: class="fragment fade-in" -->

---

## Evolution of a library

- Web platform APIs are low-level <!-- .element: class="fragment fade-in-then-semi-out" -->
- Add utility functions to wrap the APIs <!-- .element: class="fragment fade-in-then-semi-out" -->
- Utility functions become a library<!-- .element: class="fragment fade-in-then-semi-out" -->
- That stays close to the web platform APIs <!-- .element: class="fragment fade-in-then-semi-out" -->
- That evolves with the web platform <!-- .element: class="fragment fade-in-then-semi-out" -->

---

<!-- .slide: data-theme="calm-green" -->

## Lit

--

Take template literals for _rendering_ templates and combine them with web components for _lifecycle management_, _event handling_ and _encapsulation_ of style and function you get Lit.

--

```js[0|1|2-4|5|6-10|12|15-17]
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    p {
      color: var(--hw-color, green);
    }
  `;

  @property()
  type = 'wonderful';

  render() {
    return html`<p>Hello ${this.type} world</p>`;
  }
}
```

hello-world.ts<!-- .element: class="filename" -->

--

```html[0|4]
<!DOCTYPE html>
<html lang="en">
  <body>
    <hello-world type="amazing">Light DOM fallback</hello-world>
  </body>
</html>
```

index.html<!-- .element: class="filename" -->

![extremely small overhead](/assets/hello-world-bundle-size.webp)<!-- .element: class="fragment fade-up" -->

<video src="/assets/amazing-developer-amazing.mp4" data-autoplay loop><!-- .element: class="fragment fade-up" -->

--

```js[0|6|1-3|8]
renderHeader() {
  return html`<div>Some fancy header</div>`
}
render() {
  return html`
    ${this.renderHeader()}
    <p>What a nice ${new Date().getHours() < 12 ? html`morning` : html`day`} </p>
    <div>Some fancy footer</div>
  `
}
```

components/my-element.ts<!-- .element: class="filename" -->

--

```js[0|7,8|19]
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-footer')
export class MyFooter extends LitElement {

  @property({ attribute: 'brand-name'})
  brandName: string;
  year: number;

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  render() {
    return html`<div>
      &copy; ${this.year} ${this.brandName}
      <slot></slot>
    </div>`
  }
}
```

components/my-footer.ts<!-- .element: class="filename" -->

--

```js[0|4|15-20]
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './my-footer'

@customElement('my-page')
class MyPage extends LitElement {
  renderHeader() {
    return html`<div>Some fancy header</div>`
  }
  render() {
    return html`
      ${this.renderHeader()}
      <p>What a nice ${this.greeting()}</p>
      <my-footer brand-name="iO">
        <ul>
          <li><a href="/privacy-policy">Privacy policy</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </my-footer>
    `
  }
}
```

components/my-page.ts<!-- .element: class="filename" -->

--

### Event handling

```js[0|16|9-12|6-7|17]
import { html, LitElement } from 'lit';
import { customElement, state, eventOptions } from 'lit/decorators.js';

@customElement('my-counter')
export class HelloWorld extends LitElement {
  @state()
  counter = 0;

  @eventOptions({ passive: true })
  addCount() {
    this.counter += 1;
  }

  render() {
    return html`
      <button @click=${this.addCount}>Add more</button>
      <p>counter is now at: ${this.counter}</p>
    `;
  }
}
```

my-counter.ts<!-- .element: class="filename" -->

--

<video src="/assets/counter.mp4" data-autoplay loop>

--

### Styling

```js[0|6-15|17]
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      font-size: 2em;
      padding: 1em;
      border: 0.25em solid var(--blue, blue);
    }
    p {
      color: var(--blue, blue);
    }
  `
  render() {
    return html`<p>I am blue da ba dee! ®eiffel 65</p>`
  }
}
```

my-element.ts<!-- .element: class="filename" -->

--

### Styling component

```js[0]
import { css } from 'lit'

export const buttonStyles = css`
  .primary-button {
    color: var(--text-colour);
    color: var(--primary-colour);
  }
  .primary-button:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`
```

styles/index.ts<!-- .element: class="filename" -->

--

```js[0|3,8]
import { css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { buttonStyles } from './styles'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [
    buttonStyles,
    css`
      :host {
        display: block;
        border: 1px solid black;
      }
    `,
  ]
}
```

my-element.ts<!-- .element: class="filename" -->

---

## Lit Labs

- Lit labs publish using the @lit-labs npm scope.<!-- .element: class="fragment fade-in-then-semi-out" -->
- Breaking changes are likely to occur more frequently<!-- .element: class="fragment fade-in-then-semi-out" -->
- Once graduated only @lit will receive updates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Can be deprecated<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### Lit Labs

- react: react integration helpers<!-- .element: class="fragment fade-in-then-semi-out" -->
- motion: Animation helpers for Lit templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- SSR: server-side rendering templates and components<!-- .element: class="fragment fade-in-then-semi-out" -->
- task: Reactive controller for handling async tasks<!-- .element: class="fragment fade-in-then-semi-out" -->
- testing: testing utilities for Lit<!-- .element: class="fragment fade-in-then-semi-out" -->
- virtualizer: viewport-based virtualization<!-- .element: class="fragment fade-in-then-semi-out" -->
- router: component-oriented router API<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<video src="/assets/virtualizer.mp4" data-autoplay loop>

---

### Custom Elements Manifest

<!-- .slide: data-theme="calm-beige" -->

--

> _Codegen_ for Web Components

- Describes the API<!-- .element: class="fragment fade-in-then-semi-out" -->
- Tools for analyzing and displaying<!-- .element: class="fragment fade-in-then-semi-out" -->
- Automated<!-- .element: class="fragment fade-in-then-semi-out" -->
- Supported in storybook since 6.4<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### Skeleton component example

![fg-configurator](/assets/fg-configurator.webp)

--

### Code example

<div>

```typescript
/**
 * Product identifier
 */
@property({ type: Number })
product = -1;
```

/src/fg-configurator.ts<!-- .element: class="filename" -->

</div><!-- .element: class="fragment fade-in-then-semi-out" -->

<div>

```javascript[0|7]
import VitePluginCustomElementsManifest from 'vite-plugin-cem';
export default defineConfig({
  ...
  plugins: [
    VitePluginCustomElementsManifest({
      files: ['./src/fg-configurator.ts'],
      lit: true,
    }),
  ],
});

```

vite.config.js<!-- .element: class="filename" -->

</div><!-- .element: class="fragment fade-in" -->

--

<!-- .slide: data-theme="calm-beige" -->

### &lt;api-viewer&gt;

<api-viewer src="./assets/wc/custom-elements.json"></api-viewer>

---

### Getting started

<!-- .slide: data-theme="blue" -->

<span>💡 [lit.dev](https://lit.dev/) </span> <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>⚙️ [lit.dev/docs/libraries/labs/](https://lit.dev/docs/libraries/labs/) </span> <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>🤔 [custom-elements-manifest.open-wc.org](https://custom-elements-manifest.open-wc.org/) </span> <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>👋 [github.com/lucienimmink/lit-hello-world](https://github.com/lucienimmink/lit-hello-world) </span> <br /><!-- .element: class="fragment fade-in" -->

---

## Thank you

Contact me:

![iO logo](/assets/io.svg)<!-- .element: class="icon icon-inline" --> [iodigital.com](https://www.iodigital.com) <br />
🦜 [twitter.com/lucienimmink](https://twitter.com/lucienimmink) <br />
🏢 [linkedin.com/in/lucien-immink](https://www.linkedin.com/in/lucien-immink/) <br />
