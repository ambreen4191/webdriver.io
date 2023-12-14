/**
 * Created by agultsov on 02/03/20.
 */
const repName = 'test_rep1';

module.exports = {
  changedStoreCity : 'Montreal',
  changedChatStore : 'Montreal - Fake Mall',
  geo_ip           : '167.114.209.19',
  cookies          : [
    { name : 'sf_wdt_tracking', value : 'true', expiration : 5 },
    { name : 'sf_wdt_tracking_rep', value : repName, expiration : 5 },
    { name : 'sf_wdt_footer_rep_session', value : repName, expiration : 'Session' },
  ],

  chatMode        : 'queue',
  sms             : true,
  socialShop      : true,
  personalShopper : false,
  share           : false,
  logoRetailerURL : 'https://cdn.salesfloor.net/salesfloor-assets/bash/bash-logo.png',
  hasAssets       : false,
  hasFooter       : false,

  sf : {
    menuItems   : 'nav.js-storefront-navigation > ul > li.navigation__list__item > a.navigation__link',
    updatesLink : 'a.jumbotron__social-list__link.js-service-link',
    page404     : {
      footerLinks     : '', // no links
      productPageLink : '#navigation ul.NavPrimary-list',
    },
    articles : {
      prdDescCss : 'h1.product__title',
    },
  },

  lp : {
    dotChatWidget   : false,
    logoRetailerURL : 'https://res.cloudinary.com/salesfloor-net/image/upload/v1582739273/bash/bash-sidebar-logo.png',
  },

  bo : {
    onboarding : {
      socialNetworks : ['twitter'],
    },
    product : {
      tpProductCount : 20,
    },
  },

  lang : {
    en_US : {
      sf : {
        searchTrackingUrl : 'https://ba-sh.com/us/search?q=shirt&sf_rep=#REP_NAME&sf_source_origin=storefront',
        htmlTitle         : 'Shop with Testy Rep0 Tester Rep0 - ba&sh',
        page404           : {
          menuValidation : ['NEW IN', 'DRESSES', 'Jackets & Coats', 'Jumpsuits', 'Tops & Shirts', 'Jumpers & Cardigans', 'T-Shirts',
            'Skirts & Shorts', 'Trousers & Jeans', 'Bags & Accessories', 'Shoes', 'See All'],
        },
      },
    },
  },
};
