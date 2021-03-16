/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = '../img/calendar_today_black_48dp.svg';

TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
        return t
          .card("id")
          .get("id")
          .then(function (cardId) {
            console.log("Card Id: " + cardId);
            let d = new Date(1000*parseInt(cardId.substring(0,8),16));
            let dstr = d.toLocaleDateString(undefined, {"month":"short", "day":"numeric"});
            let tstr = d.toLocaleTimeString().substring(0,5);
            
            return [
              {
                text: dstr + ", " + tstr,
                icon: BLACK_ROCKET_ICON, // for card front badges only
                color: null,
              },
            ];
          });
      },
});
