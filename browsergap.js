const SERVICE = action => `https://api.browsergap.dosyago.com/v1/${action}`;

class BrowserGapAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  openSecurely(url) {
    const {apiKey} = this;

    const portal = window.open('about:blank');

    const {browserUrl, err} = await fetch(SERVICE('new.browser'), {
      method: 'POST',
      content-type: 'application/json',
      body: {
        url, 
        apiKey
      }
    }).then(r => r.json());

    if ( err ) {
      throw err;
    } else {
      portal.location = browserUrl;
    }
  }
};

export default function BG(...args) {
  if ( new.target ) {
    throw new TypeError(`BG is not a constructor. Call without using 'new'.`);
  }
  return new BrowserGapAPI(...args);
}
