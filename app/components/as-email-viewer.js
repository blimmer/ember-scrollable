import Ember from 'ember';
import {
  extractNameFromEmail
} from 'phoenix/helpers/extract-name-from-email';

export default Ember.Component.extend({
  classNameBindings: [':email-viewer'],
  email: null,

  info: Ember.computed('email.from', 'email.sentAt', function() {
    let senderName = extractNameFromEmail(this.get('email.from'));
    let momentSentAt = moment(this.get('email.sentAt'));
    let dateSent = momentSentAt.format('D MMM');
    let timeAgo = momentSentAt.fromNow();

    return `Sent by ${senderName} on ${dateSent} - ${timeAgo}`;
  })
});
