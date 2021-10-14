/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./analytics.ts ***!
  \**********************/
function createAnalytics() {
  var counter = 0;
  var destroyed = false;

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener('click', listener);
  return {
    destroy: function destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },
    getClicks: function getClicks() {
      if (destroyed) {
        return "Analytics is destroyed. Clics = ".concat(counter);
      }

      return counter;
    }
  };
}

window['analytics'] = createAnalytics();
/******/ })()
;
//# sourceMappingURL=analytics.js.map