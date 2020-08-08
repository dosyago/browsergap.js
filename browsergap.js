class BrowserGapAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  openSecurely(url) {
    
  }
};

export default function BG(...args) {
  if ( new.target ) {
    throw new TypeError(`BG is not a constructor. Call without using 'new'.`);
  }
  return new BrowserGapAPI(...args);
}
