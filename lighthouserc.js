module.exports = {
  ci: {
    collect: {
      url: [
          'https://www.grid.news/', //home prod
          'https://thesummit-the-summit-staging.cdn.arcpublishing.com/', //home stag
          'https://thesummit-the-summit-sandbox.cdn.arcpublishing.com/', //home sand
          'https://www.grid.news/economy/', //topic prod
          'https://thesummit-the-summit-staging.cdn.arcpublishing.com/economy/', //topic stag
          'https://thesummit-the-summit-sandbox.cdn.arcpublishing.com/economy/', //topic sand
          'https://www.grid.news/story/technology/2022/03/16/the-not-so-great-firewall-russians-rush-to-evade-putins-internet-crackdown/', //article prod
          'https://thesummit-the-summit-staging.cdn.arcpublishing.com/story/technology/2022/03/16/the-not-so-great-firewall-russians-rush-to-evade-putins-internet-crackdown/', //article stag
          'https://thesummit-the-summit-sandbox.cdn.arcpublishing.com/story/ukraine-crisis/2022/03/17/the-not-so-great-firewall-russians-rush-to-evade-putins-internet-crackdown/', //article sand
          'https://www.grid.news/story/360/2022/01/11/how-misinformation-about-pregnancy-and-covid-vaccines-became-deadly-conventional-wisdom/', //360 prod
          'https://thesummit-the-summit-staging.cdn.arcpublishing.com/story/360/2022/01/11/how-misinformation-about-pregnancy-and-covid-vaccines-became-deadly-conventional-wisdom/', //360 stag
          'https://thesummit-the-summit-sandbox.cdn.arcpublishing.com/story/360-Debrief/2021/11/09/product-test-making-sense-of-covid-19-vaccination-hesitancy-amongst-pregnant-and-prospective-parents/', //360 sand
          'https://thesummit-the-summit-sandbox.cdn.arcpublishing.com/story/technology/2021/12/28/test-headline-2/' //Sand kitchen sink article




      ],
      numberOfRuns: 1, // Set low to speed up the test runs. Default is 3.
      settings: {
        disableStorageReset: true, // Don't clear localStorage / IndexedDB / etc before loading the page
        chromeFlags: '--no-sandbox'
      }
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://lhci.grid.news:9001/',
      token: '156accc4-2916-484e-8cc5-f65d6f55ae57'
    }
  }
};
