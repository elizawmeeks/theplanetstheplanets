"use strict";
let earth = {};

earth.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Earth</span>
              <p>Discovered in: Dawn of Humanity</p>
              <p>Mass: Lots of grams</p>
              <p>Size: pretty big</p>
              <p>Distance from sun: 1au</p>
              <p>Atmosphere composition: Good for humans</p>
              <p>Satellites: Moon</p>
              <p>Earth visitors:Too many to count</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = earth;   