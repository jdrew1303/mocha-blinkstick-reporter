const mocha = require("mocha");
const {
  EVENT_RUN_BEGIN,
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_SUITE_BEGIN,
  EVENT_SUITE_END
} = mocha.Runner.constants;

const blinkstick = require("blinkstick");
const led = blinkstick.findFirst();

// const chroma = require("chroma-js");

exports = module.exports = function BlinkstickReporter(runner) {
  runner.on(EVENT_RUN_BEGIN, function() {
    led.setColor("midnightblue");
  });

  runner.on(EVENT_TEST_FAIL, () => led.setColor("red"));
  runner.on(EVENT_TEST_PASS, () => led.setColor("darkgreen"));

  runner.on(EVENT_RUN_END, function() {
    if (this.failures) led.setColor("red");
    else led.setColor("darkgreen");
  });
};
