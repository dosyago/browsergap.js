# browsergap.js

BrowserGap client side library. Open URLs securely with [BrowserGap](https://browsergap.dosyago.com). 

As specially used by [Condom the Web](https://condom.quarantines.site)

## `BG.openSecurely(url: URI)`

An API to open a link in a secure remote browser context. Calling the below will open a new tab.

Example using snowpack:

```js
  import BrowserGap from './web_modules/@dosy/browsergapjs.js';

  const BG = BrowserGap('<my api key>');

  BG.openSecurely(url);
```

## API Keys

You can [purchase an API key](https://browsergap.dosyago.com) whenever you need one. 

Currently they give you a number of secure opens per month.
