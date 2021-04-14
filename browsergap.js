const SERVICE = action => `https://${location.host}/v1/${action}`;

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
    } else if ( portal ) {
      portal.location = loginUrl;
    } else {
      window.location = loginUrl;
    }
  }
}
export function BG(...args) {
  if ( new.target ) {
    throw new TypeError(`BG is not a constructor. Call without using 'new'.`);
  }
  return new BrowserGapAPI(...args);
}

export default BG;
