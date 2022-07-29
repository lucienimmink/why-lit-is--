import { r as u, e as c, s as p, $ as d, n as h } from "./vendor.a073a9d2.js";
var f = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, i = (a, r, l, e) => {
  for (var t = e > 1 ? void 0 : e ? $(r, l) : r, s = a.length - 1, n; s >= 0; s--)
    (n = a[s]) && (t = (e ? n(r, l, t) : n(t)) || t);
  return e && t && f(r, l, t), t;
};
let o = class extends p {
  constructor() {
    super(...arguments), this.product = -1, this.locale = "nl-NL", this.color = "red";
  }
  addToCart() {
    this.dispatchEvent(
      new CustomEvent("add-to-cart", {
        detail: {
          configuration: `JWT for 'add-to-cart' for product ${this.product}, locale ${this.locale}, color ${this.color}`
        }
      })
    );
  }
  addToQuote() {
    this.dispatchEvent(
      new CustomEvent("add-to-quote", {
        detail: {
          configuration: `JWT for 'add-to-quote' for product ${this.product}, locale ${this.locale}, color ${this.color}`
        }
      })
    );
  }
  requestPrintproof() {
    this.dispatchEvent(
      new CustomEvent("request-printproof", {
        detail: {
          configuration: `JWT for 'request-printproof' for product ${this.product}, locale ${this.locale}, color ${this.color}`
        }
      })
    );
  }
  render() {
    return d`
      <div>
        <h1>fg-configurator</h1>
        <h2>Attributes</h2>
        <ul>
          <li><span>product:</span> ${this.product}</li>
          <li><span>locale:</span> ${this.locale}</li>
          <li><span>color:</span> ${this.color}</li>
        </ul>
        <h2>Events</h2>
        <ul>
          <li><button @click=${this.addToCart}>add-to-cart</button></li>
          <li><button @click=${this.addToQuote}>add-to-quote</button></li>
          <li>
            <button @click=${this.requestPrintproof}>request-printproof</button>
          </li>
        </ul>
      </div>
    `;
  }
};
o.styles = u`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-left: 1rem;
      margin-bottom: 0.5rem;
    }
    li span {
      display: inline-block;
      width: 4rem;
    }
    button {
      padding: 0.5rem 1rem;
    }
  `;
i([
  c({ type: Number })
], o.prototype, "product", 2);
i([
  c()
], o.prototype, "locale", 2);
i([
  c()
], o.prototype, "color", 2);
o = i([
  h("fg-configurator")
], o);
export {
  o as FgConfigurator
};
