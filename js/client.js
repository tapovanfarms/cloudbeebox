/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

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
              // {
              //   // Dynamic badges can have their function rerun
              //   // after a set number of seconds defined by refresh.
              //   // Minimum of 10 seconds.
              //   dynamic: function () {
              //     // we could also return a Promise that resolves to
              //     // this as well if we needed to do something async first
              //     return {
              //       text: "Dynamic " + (Math.random() * 100).toFixed(0).toString(),
              //       icon: BLACK_ROCKET_ICON,
              //       color: "green",
              //       refresh: 10, // in seconds
              //     };
              //   },
              // },
              {
                // It's best to use static badges unless you need your
                // badges to refresh.
                // You can mix and match between static and dynamic
                text: dstr + ", " + tstr,
                icon: BLACK_ROCKET_ICON, // for card front badges only
                color: null,
              },
            ];
          });
      },
});
