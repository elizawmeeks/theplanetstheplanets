"use strict";
let mercury = {};

mercury.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Mercury</span>
              <p>Discovered in: whenever</p>
              <p>Mass: Not as many grams as earth</p>
              <p>Size: not so huge</p>
              <p>Distance from sun: 1 Mercury unit</p>
              <p>Atmosphere composition: Bad for humans, also hot/cold</p>
              <p>Satellites: two i think</p>
              <p>Earth visitors: Probably some, I dunno really</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = mercury;
