# browsergap.js

BrowserGap client side library. Open URLs securely with [BrowserGap](https://browsergap.dosyago.com). 

## `BG.openSecurely(url: URI, options: BGOptions)`

An API to open a link in a secure remote browser context. Calling the below will open a new tab.

```js
  import BrowserGap from 'browsergap';

  const BG = BrowserGap('<my api key>');

  BG.openSecurely(url);
```

