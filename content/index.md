# Why Lit is 🔥

<!-- .slide: data-theme="black" -->

<span>📖 [why-lit-is-lit.netlify.app](https://why-lit-is-lit.netlify.app/) </span> <br ><!-- .element: class="fragment fade-in" -->

--

### Who is familiar with _web components_?

--

### With _vanilla_ DOM manipulation?

--

### What about _template literals_?

--

### 🤔 What if we use _template literals_ for DOM manipulation...

--

### _inside_ web components! 💡

---

<!-- .slide: data-theme="yellow" -->

## Lucien Immink, B.Eng.

--

![Lucien Immink](/assets/lucien-2024.jpg)<!-- .element: class="circle" style="max-height: 20vh" -->

### Principal Consultant @ Team Rockstars IT

#### Google Developer Expert

---

## Upcoming

- Web, the platform<!-- .element: class="fragment fade-in" -->
- Lit, the library<!-- .element: class="fragment fade-in" -->
- Lit Labs, the experiments<!-- .element: class="fragment fade-in" -->
- Examples<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-theme="black" -->
## Use the platform

--

![Netscape navigator](/assets/netscape.webp)<!-- .element: class="image" -->

--

![Internet Explorer](/assets/ie6.webp)<!-- .element: class="image h-90" -->

--

![Real media](/assets/real-media.webp)<!-- .element: class="image" -->

--

![Sifr](/assets/sifr.webp)<!-- .element: class="image" -->

--

<!-- .slide: data-background-image="/assets/flash-dead.webp" -->

--

# The platform is evolving

--

### What about

![nested divs](/assets/nested-divs.webp)<!-- .element: class="image" -->

--

### Web Components

- Templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Custom elements<!-- .element: class="fragment fade-in-then-semi-out" -->
- Shadow DOM<!-- .element: class="fragment fade-in-then-semi-out" -->
- ❤️ CSS variables<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### What about

```js
document.body.onload = addElement;
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hello Veldhoven");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> ancient-code/vanilla-dom-manipulation.js
</p><!-- .element: class="filename" -->

--

```js[0|5,9]
$(document).ready(function(){
  $.getJSON('https://some-api', function (data) {
    var items = [];
    $.each(data, function (key, value) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
});
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> old-code/jquery.js
</p><!-- .element: class="filename" -->

--

```jsx[0|2|12]
return (
  <div className="App">
    <h1>Map do Array</h1>
    <ul>
      {(array || sliced ) && array.map((item, id) =>{
        return <li key={id}>{item.name}
        <button onClick={() => handleEdit(item)}>edit</button>
        </li>
      })}
    </ul>
  
    <div style={{marginTop: "50px"}}> 
      <input type="text" value={word || ''} onChange={e => setWord(e.target.value)}/>
      <input type="submit" value="ADD" onClick={() => handleSubmit(word)}/>
      {editing && <input type="submit" value="submit" onClick={sendEdition} />}
    </div>
  </div>
);
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> new-code/jsx.js
</p><!-- .element: class="filename" -->

--

## Literals

--

Literals represent a value in JavaScript.<br /><br />
> Fixed (no variable) value that you _literally_ provide in JavaScript.

--

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

<div>
Array literals

```javascript
let list = ['cat', 'dog', 'catdog']
let anotherList = [1, null, { "property": "value" }]
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
    company: 'Team Rockstars IT',
    professions: [ 'Principal Consultant', "Google Developer Expert" ],
    currentLocation: 'ASML, Veldhoven',
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
const json = '{"name":"Lucien","surname":"Immink","company":"Team Rockstars IT","professions":["Principal Consultant","Google Developer Expert"], "currentLocation": "ASML, Veldhoven"}';
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

<!-- .slide: data-theme="black" -->

## Lit

--

> Take template literals for _rendering_ templates and combine them with web components for _lifecycle management_, _event handling_ and _encapsulation_ of style and function you get Lit.

--

```js[0|1|2-4|5|7-8|10-12]
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  
  @property()
  type = 'wonderful';

  render() {
    return html`<p>Hello ${this.type} world</p>`;
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> hello-world.ts
</p><!-- .element: class="filename" -->

--

```html[0|4]
<!DOCTYPE html>
<html lang="en">
  <body>
    <hello-world type="amazing"></hello-world>
    <script type="module" src="hello-world.js"></script>
  </body>
</html>
```

<p>
  <img src="/assets/icons/html.svg" class="icon icon-inline" alt=""> index.html
</p><!-- .element: class="filename" -->

![extremely small overhead](/assets/hello-world-bundle-size.webp)<!-- .element: class="fragment fade-in w-90" -->

--

<video src="/assets/amazing-developer-amazing-dark.mp4" data-autoplay loop><!-- .element: class="h-90" -->

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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> components/my-element.ts
</p><!-- .element: class="filename" -->

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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> components/my-footer.ts
</p><!-- .element: class="filename" -->

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
      <my-footer brand-name="Team Rockstars IT">
        <ul>
          <li><a href="/privacy-policy">Privacy policy</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </my-footer>
    `
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> components/my-page.ts
</p><!-- .element: class="filename" -->

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
      <button @click="${this.addCount}">Add more</button>
      <p>counter is now at: ${this.counter}</p>
    `;
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> components/my-counter.ts
</p><!-- .element: class="filename" -->

--

<video src="/assets/counter-dark.mp4" data-autoplay loop><!-- .element: class="h-90" -->
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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> components/my-element.ts
</p><!-- .element: class="filename" -->

--

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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> styles/index.ts
</p><!-- .element: class="filename" -->

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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> my-element.ts
</p><!-- .element: class="filename" -->

--

### Context

Context is very similar to React's Context, or to dependency injection systems like Angular's.<!-- .element: class="fragment fade-in-then-semi-out" -->

`npm i @lit/context`<!-- .element: class="fragment fade-in-then-semi-out code-bg" -->

--

### Context example

Using context involves a context object (sometimes called a key), a _provider_ and a _consumer_, which communicate using the context object.

```typescript
import {createContext} from '@lit/context';
import type {Logger} from 'my-logging-library';
export type {Logger} from 'my-logging-library';
export const loggerContext = createContext<Logger>('logger');
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> logger-context.ts
</p><!-- .element: class="filename" -->

--

### Context provider

```typescript[0|2, 5, 10, 11]
import {LitElement, property, html} from 'lit';
import {provide} from '@lit/context';

import {Logger} from 'my-logging-library';
import {loggerContext} from './logger-context.js';

@customElement('my-app')
class MyApp extends LitElement {

  @provide({context: loggerContext})
  logger = new Logger();

  render() {
    return html`...`;
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> logger-provider.ts
</p><!-- .element: class="filename" -->

--

### Context consumer

```typescript[0|2,4,8,13]
import {LitElement, property} from 'lit';
import {consume} from '@lit/context';

import {type Logger, loggerContext} from './logger-context.js';

export class MyElement extends LitElement {

  @consume({context: loggerContext})
  @property({attribute: false})
  public logger?: Logger;

  private doThing() {
    this.logger?.log('A thing was done');
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> logger-consumer.ts
</p><!-- .element: class="filename" -->

--

### Async tasks

Task is a controller that takes an async task function and runs it either manually or automatically when its arguments change.<!-- .element: class="fragment fade-in-then-semi-out" -->

`npm i @lit/task`<!-- .element: class="fragment fade-in-then-semi-out code-bg" -->

--

### Task example

```typescript[0|1,6-13|16-23]
import {Task} from '@lit/task';

class MyElement extends LitElement {
  @property() productId?: string;

  private _productTask = new Task(this, {
    task: async ([productId], {signal}) => {
      const response = await fetch(`http://example.com/product/${productId}`, {signal});
      if (!response.ok) { throw new Error(response.status); }
      return response.json() as Product; 
    },
    args: () => [this.productId]
  });

  render() {
    return this._productTask.render({
      pending: () => html`<p>Loading product...</p>`,
      complete: (product) => html`
          <h1>${product.name}</h1>
          <p>${product.price}</p>
        `,
      error: (e) => html`<p>Error: ${e}</p>`
    });
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> async-task.ts
</p><!-- .element: class="filename" -->

--

### Scaffold project

Lit ❤️ Vite

```bash
  npm create vite@latest my-lit-app -- --template lit-ts
```

or

```bash
  yarn create vite@latest my-lit-app --template lit-ts
```

---

## Lit Labs

- Lit labs publish using the @lit-labs npm scope.<!-- .element: class="fragment fade-in-then-semi-out" -->
- Breaking changes are likely to occur more frequently<!-- .element: class="fragment fade-in-then-semi-out" -->
- Once graduated only @lit will receive updates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Can be deprecated<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### Overview of lit-labs

- motion; animation helpers<!-- .element: class="fragment fade-in-then-semi-out" -->
- observers; platform observers<!-- .element: class="fragment fade-in-then-semi-out" -->
- ssr; server-side rendering<!-- .element: class="fragment fade-in-then-semi-out" -->
- testing; testing utilities<!-- .element: class="fragment fade-in-then-semi-out" -->
- virtualizer; viewport-based virtualization<!-- .element: class="fragment fade-in-then-semi-out" -->
- compiler; optimize Lit templates<!-- .element: class="fragment fade-in-then-semi-out" -->
- router; component-oriented router<!-- .element: class="fragment fade-in-then-semi-out" -->

---

## Examples

- ING Lion<!-- .element: class="fragment fade-in-then-semi-out" -->
- Shoelace/Web Awesome<!-- .element: class="fragment fade-in-then-semi-out" -->
- red-hat-design-system<!-- .element: class="fragment fade-in-then-semi-out" -->
- material-components<!-- .element: class="fragment fade-in-then-semi-out" -->
- &lt;api-viewer&gt;<!-- .element: class="fragment fade-in-then-semi-out" -->
- &lt;json-viewer&gt;<!-- .element: class="fragment fade-in-then-semi-out" -->
- &lt;granite-qrcode-generator&gt;<!-- .element: class="fragment fade-in-then-semi-out" -->
- photoshop online<!-- .element: class="fragment fade-in-then-semi-out" -->
- JSMusicDB 😉<!-- .element: class="fragment fade-in-then-semi-out" -->

---

## Recap

- The web platform is very powerful and optimized<!-- .element: class="fragment fade-in-then-semi-out" -->
- Web components + template literals = Lit<!-- .element: class="fragment fade-in-then-semi-out" -->
- Lit has tools to create web-apps or single components<!-- .element: class="fragment fade-in-then-semi-out" -->
- Lit labs = experiments that might become part of Lit<!-- .element: class="fragment fade-in-then-semi-out" -->
- More and more companies and teams are using Lit<!-- .element: class="fragment fade-in-then-semi-out" -->

---

### Getting started

<!-- .slide: data-theme="yellow" -->

<span>💡 [lit.dev](https://lit.dev/) </span> <br ><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>⚙️ [lit.dev/docs/libraries/labs/](https://lit.dev/docs/libraries/labs/) </span> <br ><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>👋 [github.com/lucienimmink/lit-hello-world](https://github.com/lucienimmink/lit-hello-world) </span> <br ><!-- .element: class="fragment fade-in" -->
<br>
<span>📖 [why-lit-is-lit.netlify.app](https://why-lit-is-lit.netlify.app/) </span> <br ><!-- .element: class="fragment fade-in" -->

---

## Thank you

Contact me:

📧 [lucien.immink@asml.com](mailto:lucien.immink@asml.com) <br >
🏢 [linkedin.com/in/lucien-immink](https://www.linkedin.com/in/lucien-immink/) <br >
