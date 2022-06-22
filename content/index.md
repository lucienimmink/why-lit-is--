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

> And had to _rewrite_ components?

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

## Web components

![Web component logo](/assets/wb%20component%20logo.webp)

--

Web components consist of:

- Templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Custom elements<!-- .element: class="fragment fade-in-then-semi-out" -->
- Shadow DOM<!-- .element: class="fragment fade-in-then-semi-out" -->
- and love CSS variables<!-- .element: class="fragment fade-in-then-semi-out" -->

---

## Literals

--

Literals represent a value in JavaScript.</br>
Fixed (no variable) value that you _literally_ provide in JavaScript.

--

Array literals

```javascript
let list = ['cat', 'dog', 'catdog']
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
let list = [1, null, { "property": "value:" }]
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

Boolean literals

```javascript
true
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
false
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

Numeric literals

```javascript
let number = 1337
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript[1|2|3]
let hexadecimalNumber = 0x2FF
let octalNumber = 0o713
let binaryNumber = 0b01011001
```
<!-- .element: class="fragment fade-in" -->

01011001 = "Y", an album by Ayreon (Arjen Lucassen) <!-- .element: class="fragment fade-in small muted" -->

--

Object literals

```javascript
const person = {
    name: 'Lucien',
    surname: 'Immink',
    company: 'iO',
    professions: [ 'Software Architect', 'Developer Advocate' ],
}
```
<!-- .element: class="fragment fade-in-then-semi-out" -->
⚠️ JSON is not an Object Literal <!-- .element: class="fragment fade-in" -->

--

RegExp literals

```javascript
let regexp = /ab+c/g
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
let regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

a yes the regular expression for a URL  <!-- .element: class="fragment fade-in small muted" -->

--

String literals

```javascript[1|2|3|4]
const str = 'Hello';
const multiLineStr = 'Hello\nWorld'; //multi-line string 🤐
const json = '{"name":"Lucien","surname":"Immink","company":"iO","professions":["Software Architect","Developer Advocate"]}';
const concat = "Hello " + type + " world";
```
<!-- .element: class="fragment fade-in" -->

--

Template literals

```javascript
const str = `Hello`;
```

```javascript[1-5|6|7]
//multi-line string 😃
const multiLineStr = `
Hello 
World
`; 
const template = `Hello ${type} world`;
taggedFunction`Hello ${type} world`
```
<!-- .element: class="fragment fade-in" -->

```javascript
const taggedFunction = (template, ...values) => {
    // template = ['Hello ', ' world']
    // values = ['wonderful']
}
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

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

--

```js[0]
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-header')
export class MyHeader extends LitElement {

  @property()
  adjective: string;

  render() {
    return html`<div>Some ${this.adjective} header</div>`
  }
}
```

File: components/my-header.ts<!-- .element: class="filename" -->

--

```js[0|4,5|17,19]
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './my-header.js'
import './my-footer.js'

@customElement('my-page')
class MyPage extends LitElement {
  greeting() {
    if (new Date().getHours() < 12) {
      return html`morning`;
    }
    return html`day`;
  }
  render() {
    return html`
      <my-header adjective="fancy"></my-header>
      <p>What a nice ${this.greeting()}</p>
      <my-footer></my-footer>
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

### Demo

```html
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
```

<div data-edit>
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
</div>
<!-- if using in combination with the reveal.js editor plguin this will transform into live coding -->

---

### Getting started

[💡 lit.dev](https://lit.dev/) <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
[👋 Hello World example](https://github.com/lucienimmink/lit-hello-world) <br /><!-- .element: class="fragment fade-in-then-semi-out" -->
[⚙️ Open Web Components Generator](https://open-wc.org/docs/development/generator/) <br /><!-- .element: class="fragment fade-in" -->

---

## Thank you

Contact me:

[![Web component logo](/assets/io.svg)<!-- .element: class="icon" -->](https://www.iodigital.com) <br />
[🦜 Twitter](https://twitter.com/lucienimmink) <br />
[🏢 LinkedIn](https://www.linkedin.com/in/lucien-immink/) <br />