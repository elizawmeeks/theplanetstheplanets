"use strict";
let venus = {};

venus.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Venus</span>
              <p>Discovered in: Way back there.</p>
              <p>Mass: Lots of grams</p>
              <p>Size: pretty big, similar to us</p>
              <p>Distance from sun: 1 Venus unit</p>
              <p>Atmosphere composition: Bad for humans, very poisonous</p>
              <p>Satellites: Two</p>
              <p>Earth visitors: Not as many as there could have been</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = venus;