"use strict";
let uranus = {};

uranus.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Uranus</span>
              <p>Discovered in: I have no clue, guys</p>
              <p>Mass: Lots of grams, tilted weird</p>
              <p>Size: pretty dang big</p>
              <p>Distance from sun: 1 Uranus unit</p>
              <p>Atmosphere composition: Bad for humans</p>
              <p>Satellites: a couple</p>
              <p>Earth visitors: probably 3 or 4</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = uranus;