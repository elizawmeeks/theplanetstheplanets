"use strict";
let neptune = {};

neptune.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Neptune</span>
              <p>Discovered in: More recently, it's pretty far out there</p>
              <p>Mass: Solid core with lots of grams, gaseous outer with fewer grams per volume</p>
              <p>Size: big-ish</p>
              <p>Distance from sun: 1 Neptune unit</p>
              <p>Atmosphere composition: Bad for humans</p>
              <p>Satellites: A number</p>
              <p>Earth visitors: A couple of visitors</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = neptune;