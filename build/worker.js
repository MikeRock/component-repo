/*! CHUNK main */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/misc/Cache/worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/misc/Cache/worker.js":
/***/ (function(module, exports) {

const version = 'cache'

self.addEventListener('install',(e) => {
const version = new URL(location).searchParams.get('version');
console.log(version,"VERSION")
const param = atob(new URL(location).searchParams.get('param'));
const paramObj = JSON.parse(param)
e.waitUntil(caches.open('cache').then(cache => {
    return cache.addAll(paramObj).then(() => {
        console.log(`INSTALL COMPLETED`)
    })
}))
})

self.addEventListener("fetch", function(e) {
    if (e.request.method !== 'GET') {
      console.log('WORKER: fetch e ignored.', e.request.method, e.request.url);
      return;
    }
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if(cached) console.log(`GOT ${cached.url} FROM CACHE`)
          let networked = fetch(e.request)
            .then(fetchedFromNetwork, unableToResolve)
            .catch(unableToResolve);
          return cached || networked;
  
          function fetchedFromNetwork(response) {
            let cacheCopy = response.clone();

            caches.open(version).then((cache) => {
                cache.put(e.request, cacheCopy);
              })
              .then(function() {
                console.log('WORKER: fetch response stored in cache.', e.request.url);
              });
            return response;
          }
  
          function unableToResolve () {
            console.log('WORKER: fetch request failed in both cache and network.');
            return new Response('<h1>Service Unavailable</h1>', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          }
        })
    );
  });

/***/ })

/******/ });
//# sourceMappingURL=worker.js.map