const FollowToggle = require('./follow_toggle.js');

$(document).ready(() => {
  $('button.follow-toggle').each((idx, el) => { new FollowToggle(el); });
});
