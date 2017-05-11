"use strict";
let jupiter = {};

jupiter.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Jupiter</span>
              <p>Discovered in: Probably in the Classical era</p>
              <p>Mass: Dense core, gaseous outer</p>
              <p>Size: pretty darn big</p>
              <p>Distance from sun: 1 jupiter unit</p>
              <p>Atmosphere composition: Bad for humans</p>
              <p>Satellites: Like a bunch</p>
              <p>Earth visitors: Maybe a couple satellites and probes</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = jupiter;