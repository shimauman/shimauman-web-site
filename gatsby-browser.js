// This is for when clear form input values after use come back from mail contact thank-you page.
// @see https://help.formspree.io/hc/en-us/articles/1500009404742-How-to-clear-a-form-after-submission

const dmSans = require("@fontsource/dm-sans/latin-400.css")
module.exports = dmSans

exports.onRouteUpdate = () => {
  const form = document.getElementById('mail-form');
  if (form) {
    form.reset();
  }
};