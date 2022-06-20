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

```javascript
let list = ['cat', 'dog', 'catdog']
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
true
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
let number = 1337
let hexadecimalNumber = 0x2FF
let octalNumber = 0o713
let binaryNumber = 0b01011001
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

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

```javascript
let regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

```javascript
const str = 'Hello';
const multiLineStr = 'Hello\nWorld'; //multi-line string 🤐
const concat = "Hello " + type + " world";
```
<!-- .element: class="fragment fade-in-then-semi-out" -->

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
<!-- .element: class="fragment fade-in" -->

---

## LIT

--

Take template literals for rendering templates and combine them with web components for lifecycle management, event handling and encapsulation of style and function you get LIT.

--

```js[0|1|2-4|5|6-10|12|14-16]
import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-world')
export class HelloWorld extends LitElement {
  static styles = css`
    p {
      color: green;
    }
  `

  @property()
  type = 'wonderful'

  render() {
    return html`<p>Hello ${this.type} world</p>`
  }
}
```

--

```html[0|4]
<!DOCTYPE html>
<html lang="en">
  <body>
    <hello-world type="amazing">Light DOM fallback</hello-world>
  </body>
</html>
```

![extremely small overhead](/assets/hello-world-bundle-size.webp)<!-- .element: class="fragment fade-up" -->

--

```js[0|8-14|10,12|1-3|4-6|11]
renderHeader() {
    return html`<div>Some fancy header</div>`
}
renderFooter() {
    return html`<div>Some fancy footer</div>`
}

render() {
    return html`
        ${this.renderHeader()}
        <p>What a nice ${new Date().getHours() < 12 ? html`morning` : html`day`} </p>
        ${this.renderFooter()}
    `
}
```

--

## &lt;my-header&gt;

```js
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-header')
export class MyHeader extends LitElement {
  render() {
    return html`<div>Some fancy header</div>`
  }
}
```

--

```js[0|4,5|11,13]
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './my-header.js'
import './my-footer.js'

@customElement('my-page')
class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <p>What a nice ${new Date().getHours() < 12 ? html`morning` : html`day`}</p>
      <my-footer></my-footer>
    `
  }
}
```

--

## Event handling

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

--

## Styling

```js[0|6-15|17]
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      font-size: 2em;
      padding: 1em;
      border: 0.25em solid var(--blue);
    }
    p {
      color: var(--blue);
    }
  `
  render() {
    return html`<p>I am blue da ba dee! ®eiffel 65</p>`
  }
}
```

--

## styling component

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

--

```js[0|3,8 ]
import { css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { buttonStyles } from './button-styles.ts'

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
