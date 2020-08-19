//const SERVICE = action => `https://api.browsergap.dosyago.com/v1/${action}`;
//const SERVICE = action => `https://quarantines.site/v1/${action}`;
const SERVICE = action => `https://condom.quarantines.site/v1/${action}`;

class BrowserGapAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async openSecurely(url) {
    const {apiKey} = this;

    const portal = window.open('about:blank');

    const {loginUrl, err} = await fetch(SERVICE('new.browser'), {
      method: 'POST',
      headers: {
        ['content-type']: 'application/json',
      },
      body: JSON.stringify({
        url, 
        apiKey
      })
    }).then(r => r.json());

    if ( err ) {
      throw err;
    } else {
      portal.location = loginUrl;
    }
  }
};

export default function BG(...args) {
  if ( new.target ) {
    throw new TypeError(`BG is not a constructor. Call without using 'new'.`);
  }
  return new BrowserGapAPI(...args);
}
