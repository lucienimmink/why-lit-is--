# Why Lit is 🔥

<!-- .slide: data-theme="blue" -->

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
- CEM, a new workflow<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-theme="calm-pink" -->
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
  const newContent = document.createTextNode("Hello Munich");

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
    company: 'iO',
    professions: [ 'Software Architect', 'Developer Advocate' ],
    currentLocation: 'iJS conference Munich',
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
const json = '{"name":"Lucien","surname":"Immink","company":"iO","professions":["Software Architect","Developer Advocate"], "currentLocation": "iJS conference Munich"}';
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
    <script src="hello-world.js"></script>
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
      <button @click=${this.addCount}>Add more</button>
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

---

## Lit Labs

- Lit labs publish using the @lit-labs npm scope.<!-- .element: class="fragment fade-in-then-semi-out" -->
- Breaking changes are likely to occur more frequently<!-- .element: class="fragment fade-in-then-semi-out" -->
- Once graduated only @lit will receive updates<!-- .element: class="fragment fade-in-then-semi-out" -->
- Can be deprecated<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### @lit-labs/react

```TypeScript
import type { EventName } from '@lit-labs/react';

import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { MyElement } from './my-element.js';

export const MyElementComponent = createComponent({
  tagName: 'my-element',
  elementClass: MyElement,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
    onChange: 'input',
  },
});
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> react-element.ts
</p><!-- .element: class="filename" -->

--

### @lit-labs/motion

```typescript[0|11-17|38|42-44]
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { animate } from '@lit-labs/motion';

@customElement('my-motion')
export class MyMotion extends LitElement {
  
  @state({type: Boolean})
  shifted = false;

  options = {
    // see https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    keyframeOptions: {
        duration: 500,
        easing: 'ease-in-out',
    }
  }

  static styles = css`
    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      margin-top: 25px;
      background: steelblue;
      border-radius: 50%;
    }

    .shifted {
      right: 0;
      background-color: tomato;
    }
  `;

  render() {
    return html`
      <button @click=${this._toggle}>Move</button>
      <div class="box ${this.shifted ? 'shifted' : ''}" ${animate(this.options)}></div>
    `;
  }

  _toggle() {
    this.shifted = !this.shifted;
  }
}
```

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> my-element.ts
</p><!-- .element: class="filename" -->

--

### @lit-labs/motion example

<video src="/assets/motion-dark.mp4" data-autoplay loop><!-- .element: class="h-80" -->
--

### @lit-labs/ssr

#### Server usage

```js
import { render } from '@lit-labs/ssr/lib/render-lit-html.js';
import { myTemplate } from './my-template.js';

//...

const ssrResult = render(myTemplate(data));
context.body = Readable.from(ssrResult);
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> server.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/ssr

#### Client hydration

```js
import { render } from 'lit';
import { hydrate } from '@lit-labs/ssr-client';
import { myTemplate } from './my-template.js';
// Initial hydration required before render:
// (must be same data used to render on the server)
const initialData = getInitialAppData();
hydrate(myTemplate(initialData), document.body);

// After hydration, render will efficiently update the server-rendered DOM:
const update = (data) => render(myTemplate(data), document.body);
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> client.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/task

```js[0|21-24|8-16]
import {Task, TaskStatus} from '@lit-labs/task';
// ...

class MyElement extends LitElement {
  @state()
  private _userId: number = -1;

  private _apiTask = new Task(
    this,
    ([userId]) =>
      // better to use OpenAPI here
      fetch(`//example.com/api/userInfo?${userId}`).then((response) =>
        response.json()
      ),
    () => [this._userId]
  );

  render() {
    return html`
      <div>User Info</div>
      ${this._apiTask.render({
        pending: () => html`Loading user info...`,
        complete: (user) => html`${user.name}`,
      })}
      <!-- ... -->
    `;
  }
}
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> task.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/testing

```js
import { ssrFixture } from '@lit-labs/testing/fixtures.js';
import { html } from 'lit';
import { assert } from '@esm-bundle/chai';

suite('my-element', () => {
  test('is rendered server-side', async () => {
    const el = await ssrFixture(html`<my-element></my-element>`, {
      modules: ['./my-element.js'],
      base: 'http://localhost:8000/dist/components/',
      hydrate: false,
    });
    assert.equal(el.shadowRoot.querySelector('p').textContent, 'Hello, World!');
  });
});
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> test.js
</p><!-- .element: class="filename" -->

--

```js[0|2-4|9-21 ]
import {
  csrFixture,
  ssrNonHydratedFixture,
  ssrHydratedFixture,
} from '@lit-labs/testing/fixtures.js';
import { html } from 'lit';
import { assert } from '@esm-bundle/chai';

for (const fixture of [csrFixture, ssrNonHydratedFixture, ssrHydratedFixture]) {
  suite(`my-element rendered with ${fixture.name}`, () => {
    test('renders as expected', async () => {
      const el = await fixture(html`<my-element></my-element>`, {
        modules: ['./my-element.js'],
      });
      assert.equal(
        el.shadowRoot.querySelector('p').textContent,
        'Hello, World!'
      );
    });
  });
}
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> test-2.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/router

```js
import { Routes } from '@lit-labs/router';
class MyElement extends LitElement {
  private _routes = new Routes(this, [
    {path: '/', render: () => html`<h1>Home</h1>`},
    {path: '/projects', render: () => html`<h1>Projects</h1>`},
    {path: '/about', render: () => html`<h1>About</h3>`},
  ]);

  render() {
    return html`
      <header>...</header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> router.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/router

- RouteConfig<!-- .element: class="fragment fade-in-then-semi-out" -->
- nested routing<!-- .element: class="fragment fade-in-then-semi-out" -->
- enter/render callbacks<!-- .element: class="fragment fade-in-then-semi-out" -->
- navigate by calling goto()<!-- .element: class="fragment fade-in-then-semi-out" -->
- create links by calling link()<!-- .element: class="fragment fade-in-then-semi-out" -->

--

### @lit-labs/virtualizer

```js
render() {
  return html`
    <h2>My Contacts</h2>
    <lit-virtualizer
      .items=${this.contacts}
      .renderItem=${contact => html`<div>${contact.name}: ${contact.phone}</div>`}
    ></lit-virtualizer>
  `;
}
```

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> my-contacts.js
</p><!-- .element: class="filename" -->

--

### @lit-labs/virtualizer

<video src="/assets/virtualizer-dark.mp4" data-autoplay loop><!-- .element: class="h-80" -->

---

### Custom Elements Manifest

<!-- .slide: data-theme="calm-beige" -->

--

### _Codegen_ for Web Components

- Describes the API<!-- .element: class="fragment fade-in-then-semi-out" -->
- Tools for analyzing and displaying<!-- .element: class="fragment fade-in-then-semi-out" -->
- Automated<!-- .element: class="fragment fade-in-then-semi-out" -->
- Supported in storybook since 6.4<!-- .element: class="fragment fade-in-then-semi-out" -->

--

## Skeleton components

--

### Skeleton component example

![fg-configurator](/assets/fg-configurator.webp)<!-- .element: class="h-80 image" -->

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

<p>
  <img src="/assets/icons/typescript.svg" class="icon icon-inline" alt=""> src/fg-configurator.ts
</p><!-- .element: class="filename" -->

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

<p>
  <img src="/assets/icons/javascript.svg" class="icon icon-inline" alt=""> vite.config.js
</p><!-- .element: class="filename" -->

</div><!-- .element: class="fragment fade-in" -->

--

<!-- .slide: data-theme="calm-beige" -->

### &lt;api-viewer&gt;

<api-viewer src="./assets/wc/custom-elements.json"></api-viewer>

--

### to-markdown

![to-markdown](/assets/to-markdown.webp) <!-- .element: class="image"-->

--

### API first components

- Think about the API of your component<!-- .element: class="fragment fade-in-then-semi-out" -->
- Use CEM and it's tools to share the API<!-- .element: class="fragment fade-in-then-semi-out" -->
- Keep documentation up2date using CEM<!-- .element: class="fragment fade-in-then-semi-out" -->
- Happy developers! 🥳🎉<!-- .element: class="fragment fade-in-then-semi-out" -->

---

## Recap

<!-- .slide: data-theme="calm-green" -->

- Lit = Web components + template literals<!-- .element: class="fragment fade-in-then-semi-out" -->
- Lit labs = additional functionality to create web applications<!-- .element: class="fragment fade-in-then-semi-out" -->
- CEM = A standard way to describe the API of web components<!-- .element: class="fragment fade-in-then-semi-out" -->

---

### Getting started

<!-- .slide: data-theme="blue" -->

<span>💡 [lit.dev](https://lit.dev/) </span> <br ><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>⚙️ [lit.dev/docs/libraries/labs/](https://lit.dev/docs/libraries/labs/) </span> <br ><!-- .element: class="fragment fade-in-then-semi-out" -->
<span>👋 [github.com/lucienimmink/lit-hello-world](https://github.com/lucienimmink/lit-hello-world) </span> <br ><!-- .element: class="fragment fade-in" -->

---

## Thank you

Contact me:

![iO logo](/assets/io.svg)<!-- .element: class="icon icon-inline" --> [iodigital.com](https://www.iodigital.com) <br >
🦜 [twitter.com/lucienimmink](https://twitter.com/lucienimmink) <br >
🏢 [linkedin.com/in/lucien-immink](https://www.linkedin.com/in/lucien-immink/) <br >
