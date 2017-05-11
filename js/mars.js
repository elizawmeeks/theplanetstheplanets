"use strict";
let mars = {};

mars.outputTo = function (domElement) {
  console.log("outputTo");
  domElement.append(`<div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Mars</span>
              <p>Discovered in: A long time ago, you can see it with your naked eye</p>
              <p>Mass: A bunch of grams</p>
              <p>Size: A little smaller than earth, I think</p>
              <p>Distance from sun: 1 Mars unit</p>
              <p>Atmosphere composition: Bad for humans</p>
              <p>Satellites: Like two maybe?</p>
              <p>Earth visitors: CURIOSITY CURIOSITY CURIOSITY</p>
            </div>
          </div>
        </div>
      </div>`);
};

module.exports = mars;