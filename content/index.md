# Why LIT is 🔥

--

> Who has used _React_, _Vue_ or _Angular_ to create UI components?

--
<div>

> Who has shared those components with _different teams_ or _projects_?

</div><!-- .element: class="fade-semi-out" -->

<div>

> Or has rewritten the project to a _new framework_?
</div><!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!--
  - Re-use (UI) components
  - Be the 3rd party; need to
  - Porting means more maintenance
-->

---

## Lucien Immink, B.eng

--

![Web component logo](/assets/lucien-immink.webp)<!-- .element: class="circle" -->

--

Software Architect &</br>
Developer Advocate @ _iO_</br>
</br>
Google Developer Expert

---

## Web Components

--

### Web Components

- Templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Custom elements<!-- .element: class="fragment fade-in-then-semi-out" -->
- Shadow DOM<!-- .element: class="fragment fade-in-then-semi-out" -->
- ❤️ CSS variables<!-- .element: class="fragment fade-in-then-semi-out" -->

---

<!-- 
  - vanilla DOM APIs are low-level
  - 99% of the time you want to do the same thing
  - tools become a library
  - close to the browser? Can we use browser APIs for templating?
  - Let's explore one of those APIs: literals
  - Note: don't spend too much time here!
-->

---

## Literals

--

Literals represent a value in JavaScript.<br /><br />
Fixed (no variable) value that you _literally_ provide in JavaScript.

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
const multiLineStr = 'Hello\nWorld'; //multi-line string 🤐
const json = '{"name":"Lucien","surname":"Immink","company":"iO","professions":["Software Architect","Developer Advocate"]}';
const concat = "Hello " + type + " world";
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

## LIT

--

Take template literals for _rendering_ templates and combine them with web components for _lifecycle management_, _event handling_ and _encapsulation_ of style and function you get LIT.

--

```js[0|1|2-4|5|6-10|12|14-16]
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    p {
      color: var(--hw-color, green);
    }
  `

  @property()
  type = 'wonderful'

  render() {
    return html`<p>Hello ${this.type} world</p>`
  }
}
```

File: hello-world.ts<!-- .element: class="filename" -->

--

```html[0|4]
<!DOCTYPE html>
<html lang="en">
  <body>
    <hello-world type="amazing">Light DOM fallback</hello-world>
  </body>
</html>
```

File: index.html<!-- .element: class="filename" -->

![extremely small overhead](/assets/hello-world-bundle-size.webp)<!-- .element: class="fragment fade-up" -->

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

File: components/my-element.ts<!-- .element: class="filename" -->

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

File: components/my-footer.ts<!-- .element: class="filename" -->

--

```js[0|4|15-20]
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './my-footer.js'

@customElement('my-page')
class MyPage extends LitElement {
  renderHeader() {
    return html`<div>Some fancy header</div>`
  }
  render() {
    return html`
      ${this.renderHeader()}
      <p>What a nice ${this.greeting()}</p>
      <my-footer brand="iO">
        <ul>
          <li><a href="/privacy-policy">Privacy policy</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </my-footer>
    `
  }
}
```

File: components/my-page.ts<!-- .element: class="filename" -->

--

### Event handling

```js[0|16|9-12|6-7|17]
import { html, LitElement } from 'lit'
import { customElement, property, eventOptions } from 'lit/decorators.js'

@customElement('my-counter')
export class HelloWorld extends LitElement {
  @property()
  counter: number = 0

  @eventOptions({ passive: true })
  addCount() {
    this.counter += 1
  }

  render() {
    return html`
      <button @click=${this.addCount}>Add more</button>
      <p>counter is now at: ${this.counter}</p>
    `
  }
}
```

File: my-counter.ts<!-- .element: class="filename" -->

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

File: my-element.ts<!-- .element: class="filename" -->

--

### Styling component

```js[0|5,6]
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

File: styles/index.ts<!-- .element: class="filename" -->

--

```js[0|3,8]
import { css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { buttonStyles } from './styles/index.ts'

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

File: my-element.ts<!-- .element: class="filename" -->

---

### Vite

--

> Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects

- A dev server using native ES Modules<!-- .element: class="fragment fade-in-then-semi-out" -->
- A build command to bundle code<!-- .element: class="fragment fade-in-then-semi-out" -->

--

```bash
npm create vite@latest my-app -- --template lit-ts
```

```javascript
{
  "scripts": {
    "dev": "vite", // start dev server
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}
```

File: package.json<!-- .element: class="filename" -->

--

### Application

```javascript
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    entry: 'index.html'
  }
});

```

File: vite.config.js<!-- .element: class="filename" -->

--

### Library

```javascript
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.ts',
      formats: ['es']
    }
  }
});

```

File: vite.config.js<!-- .element: class="filename" -->

---

### Custom Elements Manifest

--

> _Codegen_ for Web Components

- Describes the API<!-- .element: class="fragment fade-in-then-semi-out" -->
- Tools for analyzing and displaying<!-- .element: class="fragment fade-in-then-semi-out" -->
- Automated<!-- .element: class="fragment fade-in-then-semi-out" -->
- Supported in storybook since 6.4<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### Example

![fg-configurator](/assets/fg-configurator.webp)

--

## Code

<div>

```typescript
/**
 * Product identifier
 */
@property({ type: Number })
product = -1;
```

File: /src/fg-configurator.ts<!-- .element: class="filename" -->

</div><!-- .element: class="fragment fade-in-then-semi-out" -->

<div>

```javascript
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

File: vite.config.js<!-- .element: class="filename" -->

</div><!-- .element: class="fragment fade-in-then-semi-out" -->

--

### &lt;api-viewer&gt;

<api-viewer src="./assets/wc/custom-elements.json"></api-viewer>

---

### Getting started

[💡 lit.dev](https://lit.dev/) <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
[👋 github.com/lucienimmink/lit-hello-world](https://github.com/lucienimmink/lit-hello-world) <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
[🤔 custom-elements-manifest.open-wc.org](https://custom-elements-manifest.open-wc.org/)<br /><!-- .element: class="fragment fade-in-then-semi-out" -->
[⚙️ vitejs.dev/guide/](https://vitejs.dev/guide/#scaffolding-your-first-vite-project=) <br /><!-- .element: class="fragment fade-in" -->

---

## Thank you

Contact me:

[![Web component logo](/assets/io.svg)<!-- .element: class="icon" --> iodigital.com](https://www.iodigital.com) <br />
[🦜 twitter.com/lucienimmink](https://twitter.com/lucienimmink) <br />
[🏢 linkedin.com/in/lucien-immink](https://www.linkedin.com/in/lucien-immink/) <br />
