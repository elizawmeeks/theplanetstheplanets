"use strict";
let saturn = {};

saturn.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Saturn</span>
              <p>Discovered in: Classical era? Mebbe?</p>
              <p>Mass: Lots of grams, and then cool rings</p>
              <p>Size: pretty big</p>
              <p>Distance from sun: 1 Saturn Unit</p>
              <p>Atmosphere composition: Bad for humans</p>
              <p>Satellites: like, a lot</p>
              <p>Earth visitors: some</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = saturn;   