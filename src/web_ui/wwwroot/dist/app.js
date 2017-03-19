/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		        if (installedModules[moduleId]) return installedModules[moduleId].exports;
/******/
/******/ 		        var module = installedModules[moduleId] = {
/******/ 		          i: moduleId,
/******/ 		          l: false,
/******/ 		          exports: {}
/******/ 		        };
/******/
/******/ 		        if (!modules[moduleId] && typeof moduleId === 'string') {
/******/ 		          var newModuleId;
/******/ 		          if (modules[newModuleId = moduleId + '.js'] || modules[newModuleId = moduleId + '.ts']) {
/******/ 		            moduleId = newModuleId;
/******/
/******/ 		            installedModules[moduleId] = module;
/******/ 		          }
/******/ 		        }
/******/
/******/ 		        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        module.l = true;
/******/
/******/ 		        return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "aurelia-bootstrapper-webpack");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports) {

module.exports = vendor_cd3eced1e56ab8356e43;

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(32);

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(43);

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(45);

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(46);

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(48);

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(49);

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(50);

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(51);

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(52);

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(53);

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(54);

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(33);

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(55);

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(56);

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(57);

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(58);

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./app/components/app/app": "app/components/app/app.ts",
	"./app/components/app/app.css": "app/components/app/app.css",
	"./app/components/app/app.html": "app/components/app/app.html",
	"./app/components/counter/counter": "app/components/counter/counter.ts",
	"./app/components/counter/counter.html": "app/components/counter/counter.html",
	"./app/components/fetchdata/fetchdata": "app/components/fetchdata/fetchdata.ts",
	"./app/components/fetchdata/fetchdata.html": "app/components/fetchdata/fetchdata.html",
	"./app/components/home/home": "app/components/home/home.ts",
	"./app/components/home/home.html": "app/components/home/home.html",
	"./app/components/navmenu/navmenu.css": "app/components/navmenu/navmenu.css",
	"./app/components/navmenu/navmenu.html": "app/components/navmenu/navmenu.html",
	"./aurelia-bootstrapper-webpack": "aurelia-bootstrapper-webpack",
	"./aurelia-event-aggregator": 29,
	"./aurelia-fetch-client": 5,
	"./aurelia-framework": 6,
	"./aurelia-history-browser": 31,
	"./aurelia-loader-webpack": "aurelia-loader-webpack",
	"./aurelia-logging-console": 32,
	"./aurelia-pal-browser": 1,
	"./aurelia-polyfills": 2,
	"./aurelia-route-recognizer": 30,
	"./aurelia-router": 39,
	"./aurelia-templating-binding": 33,
	"./aurelia-templating-resources": 34,
	"./aurelia-templating-resources/attr-binding-behavior": 7,
	"./aurelia-templating-resources/attr-binding-behavior.js": 7,
	"./aurelia-templating-resources/binding-mode-behaviors": 8,
	"./aurelia-templating-resources/binding-mode-behaviors.js": 8,
	"./aurelia-templating-resources/compose": 9,
	"./aurelia-templating-resources/compose.js": 9,
	"./aurelia-templating-resources/debounce-binding-behavior": 10,
	"./aurelia-templating-resources/debounce-binding-behavior.js": 10,
	"./aurelia-templating-resources/focus": 11,
	"./aurelia-templating-resources/focus.js": 11,
	"./aurelia-templating-resources/hide": 12,
	"./aurelia-templating-resources/hide.js": 12,
	"./aurelia-templating-resources/if": 13,
	"./aurelia-templating-resources/if.js": 13,
	"./aurelia-templating-resources/repeat": 14,
	"./aurelia-templating-resources/repeat.js": 14,
	"./aurelia-templating-resources/replaceable": 15,
	"./aurelia-templating-resources/replaceable.js": 15,
	"./aurelia-templating-resources/sanitize-html": 16,
	"./aurelia-templating-resources/sanitize-html.js": 16,
	"./aurelia-templating-resources/self-binding-behavior": 17,
	"./aurelia-templating-resources/self-binding-behavior.js": 17,
	"./aurelia-templating-resources/show": 18,
	"./aurelia-templating-resources/show.js": 18,
	"./aurelia-templating-resources/signal-binding-behavior": 19,
	"./aurelia-templating-resources/signal-binding-behavior.js": 19,
	"./aurelia-templating-resources/throttle-binding-behavior": 20,
	"./aurelia-templating-resources/throttle-binding-behavior.js": 20,
	"./aurelia-templating-resources/update-trigger-binding-behavior": 21,
	"./aurelia-templating-resources/update-trigger-binding-behavior.js": 21,
	"./aurelia-templating-resources/with": 22,
	"./aurelia-templating-resources/with.js": 22,
	"./aurelia-templating-router": 35,
	"./aurelia-templating-router/route-href": 23,
	"./aurelia-templating-router/route-href.js": 23,
	"./aurelia-templating-router/router-view": 4,
	"./aurelia-templating-router/router-view.js": 4,
	"./boot": "boot.ts"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 24;


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(26);
module.exports = self.fetch.bind(self);


/***/ },

/***/ 26:
/***/ function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(11);

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(14);

/***/ },

/***/ 3:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(15);

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(30);

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(31);

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(34);

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(35);

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(36);

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(38);

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(9);

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(27);

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(28);

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(29);

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(39);

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(40);

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(41);

/***/ },

/***/ "app/components/app/app.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ },

/***/ "app/components/app/app.html":
/***/ function(module, exports) {

module.exports = "<template>\r\n    <require from=\"../navmenu/navmenu.html\"></require>\r\n    <require from=\"./app.css\"></require>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <navmenu router.bind=\"router\"></navmenu>\r\n            </div>\r\n            <div class=\"col-sm-9 body-content\">\r\n                <router-view></router-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n";

/***/ },

/***/ "app/components/app/app.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Aurelia';
        config.map([{
                route: ['', 'home'],
                name: 'home',
                settings: { icon: 'home' },
                moduleId: '../home/home',
                nav: true,
                title: 'Home'
            }, {
                route: 'counter',
                name: 'counter',
                settings: { icon: 'education' },
                moduleId: '../counter/counter',
                nav: true,
                title: 'Counter'
            }, {
                route: 'fetch-data',
                name: 'fetchdata',
                settings: { icon: 'th-list' },
                moduleId: '../fetchdata/fetchdata',
                nav: true,
                title: 'Fetch data'
            }]);
        this.router = router;
    };
    return App;
}());
exports.App = App;


/***/ },

/***/ "app/components/counter/counter.html":
/***/ function(module, exports) {

module.exports = "<template>\r\n    <h1>Counter</h1>\r\n\r\n    <p>This is a simple example of an Aurelia component.</p>\r\n\r\n    <p>Current count: <strong>${currentCount}</strong></p>\r\n\r\n    <button click.delegate=\"incrementCounter()\">Increment</button>\r\n</template>\r\n";

/***/ },

/***/ "app/components/counter/counter.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = (function () {
    function Counter() {
        this.currentCount = 0;
    }
    Counter.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    return Counter;
}());
exports.Counter = Counter;


/***/ },

/***/ "app/components/fetchdata/fetchdata.html":
/***/ function(module, exports) {

module.exports = "<template>\r\n    <h1>Weather forecast</h1>\r\n\r\n    <p>This component demonstrates fetching data from the server.</p>\r\n\r\n    <p if.bind=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n    <table if.bind=\"forecasts\" class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Date</th>\r\n                <th>Temp. (C)</th>\r\n                <th>Temp. (F)</th>\r\n                <th>Summary</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr repeat.for=\"forecast of forecasts\">\r\n                <td>${ forecast.dateFormatted }</td>\r\n                <td>${ forecast.temperatureC }</td>\r\n                <td>${ forecast.temperatureF }</td>\r\n                <td>${ forecast.summary }</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</template>\r\n";

/***/ },

/***/ "app/components/fetchdata/fetchdata.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_fetch_client_1 = __webpack_require__(5);
var aurelia_framework_1 = __webpack_require__(6);
var Fetchdata = (function () {
    function Fetchdata(http) {
        var _this = this;
        http.fetch('/api/SampleData/WeatherForecasts')
            .then(function (result) { return result.json(); })
            .then(function (data) {
            _this.forecasts = data;
        });
    }
    return Fetchdata;
}());
Fetchdata = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
], Fetchdata);
exports.Fetchdata = Fetchdata;


/***/ },

/***/ "app/components/home/home.html":
/***/ function(module, exports) {

module.exports = "<template>\r\n    <h1>Hello, world!</h1>\r\n    <p>Welcome to your new single-page application, built with:</p>\r\n    <ul>\r\n        <li><a href=\"https://get.asp.net/\">ASP.NET Core</a> and <a href=\"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx\">C#</a> for cross-platform server-side code</li>\r\n        <li><a href=\"http://aurelia.io/\">Aurelia</a> and <a href=\"http://www.typescriptlang.org/\">TypeScript</a> for client-side code</li>\r\n        <li><a href=\"https://webpack.github.io/\">Webpack</a> for building and bundling client-side resources</li>\r\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n    <p>To help you get started, we've also set up:</p>\r\n    <ul>\r\n        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n        <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n    </ul>\r\n</template>\r\n";

/***/ },

/***/ "app/components/home/home.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home = (function () {
    function Home() {
    }
    return Home;
}());
exports.Home = Home;


/***/ },

/***/ "app/components/navmenu/navmenu.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.au-target.link-active a,\r\nli.au-target.link-active a:hover,\r\nli.au-target.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ },

/***/ "app/components/navmenu/navmenu.html":
/***/ function(module, exports) {

module.exports = "<template bindable=\"router\">\r\n    <require from=\"./navmenu.css\"></require>\r\n    <div class=\"main-nav\">\r\n        <div class=\"navbar navbar-inverse\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"#/home\">Aurelia</a>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"navbar-collapse collapse\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li repeat.for = \"row of router.navigation\" class=\"${ row.isActive ? 'link-active' : '' }\" >\r\n                        <a href.bind = \"row.href\">\r\n                            <span class=\"glyphicon glyphicon-${ row.settings.icon }\"></span> ${ row.title }\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n";

/***/ },

/***/ "aurelia-bootstrapper-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

__webpack_require__(2);

var _aureliaPalBrowser = __webpack_require__(1);

var _aureliaLoaderWebpack = __webpack_require__("aurelia-loader-webpack");

(0, _aureliaPalBrowser.initialize)();

var bootstrapQueue = [];
var sharedLoader = null;
var Aurelia = null;

function onBootstrap(callback) {
  return new Promise(function (resolve, reject) {
    if (sharedLoader) {
      resolve(callback(sharedLoader));
    } else {
      bootstrapQueue.push(function () {
        try {
          resolve(callback(sharedLoader));
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}

function ready(global) {
  return new Promise(function (resolve, reject) {
    if (global.document.readyState === 'complete') {
      resolve(global.document);
    } else {
      global.document.addEventListener('DOMContentLoaded', completed);
      global.addEventListener('load', completed);
    }

    function completed() {
      global.document.removeEventListener('DOMContentLoaded', completed);
      global.removeEventListener('load', completed);
      resolve(global.document);
    }
  });
}

function handleApp(loader, appHost) {
  return config(loader, appHost, appHost.getAttribute('aurelia-app'));
}

function config(loader, appHost, configModuleId) {
  var aurelia = new Aurelia(loader);
  aurelia.host = appHost;
  aurelia.configModuleId = configModuleId || null;

  if (configModuleId) {
    return loader.loadModule(configModuleId).then(function (customConfig) {
      return customConfig.configure(aurelia);
    });
  }

  aurelia.use.standardConfiguration().developmentLogging();

  return aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}

function run() {
  return ready(window).then(function (doc) {
    var appHost = doc.querySelectorAll('[aurelia-app]');
    var loader = new _aureliaLoaderWebpack.WebpackLoader();
    loader.loadModule('aurelia-framework').then(function (m) {
      Aurelia = m.Aurelia;
      for (var i = 0, ii = appHost.length; i < ii; ++i) {
        handleApp(loader, appHost[i]).catch(console.error.bind(console));
      }

      sharedLoader = loader;
      for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) {
        bootstrapQueue[_i]();
      }
      bootstrapQueue = null;
    });
  });
}

function bootstrap(configure) {
  return onBootstrap(function (loader) {
    var aurelia = new Aurelia(loader);
    return configure(aurelia);
  });
}

run();

/***/ },

/***/ "aurelia-loader-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpackLoader = exports.TextTemplateLoader = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.ensureOriginOnExports = ensureOriginOnExports;

var _aureliaMetadata = __webpack_require__(38);

var _aureliaLoader = __webpack_require__(28);

var _aureliaPal = __webpack_require__(27);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TextTemplateLoader = exports.TextTemplateLoader = function () {
  function TextTemplateLoader() {
    
  }

  TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
    return loader.loadText(entry.address).then(function (text) {
      entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
    });
  };

  return TextTemplateLoader;
}();

function ensureOriginOnExports(executed, moduleId) {
  var target = executed;
  var key = void 0;
  var exportedValue = void 0;

  if (target.__useDefault) {
    target = target.default;
  }

  _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(moduleId, 'default'));

  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(moduleId, key));
      }
    }
  }

  return executed;
}

var WebpackLoader = exports.WebpackLoader = function (_Loader) {
  _inherits(WebpackLoader, _Loader);

  function WebpackLoader() {
    

    var _this = _possibleConstructorReturn(this, _Loader.call(this));

    _this.moduleRegistry = Object.create(null);
    _this.loaderPlugins = Object.create(null);
    _this.useTemplateLoader(new TextTemplateLoader());
    _this.modulesBeingLoaded = Object.create(null);

    var that = _this;

    _this.addPlugin('template-registry-entry', {
      'fetch': function fetch(address) {
        var entry = that.getOrCreateTemplateRegistryEntry(address);
        return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
          return entry;
        });
      }
    });

    _aureliaPal.PLATFORM.eachModule = function (callback) {
      var registry = __webpack_require__.c;

      for (var moduleId in registry) {
        if (typeof moduleId !== 'string') {
          continue;
        }
        var moduleExports = registry[moduleId].exports;
        if ((typeof moduleExports === 'undefined' ? 'undefined' : _typeof(moduleExports)) !== 'object') {
          continue;
        }
        try {
          if (callback(moduleId, moduleExports)) return;
        } catch (e) {}
      }
    };
    return _this;
  }

  WebpackLoader.prototype._getActualResult = function _getActualResult(result, resolve, reject) {
    try {
      var isAsync = typeof result === 'function' && /cb\(__webpack_require__/.test(result.toString());
      if (!isAsync) {
        return resolve(result);
      }

      return result(function (actual) {
        return resolve(actual);
      });
    } catch (e) {
      reject(e);
    }
  };

  WebpackLoader.prototype._import = function _import(moduleId) {
    var _this2 = this;

    if (this.modulesBeingLoaded[moduleId]) {
      return this.modulesBeingLoaded[moduleId];
    }
    var moduleIdParts = moduleId.split('!');
    var path = moduleIdParts.splice(moduleIdParts.length - 1, 1)[0];
    var loaderPlugin = moduleIdParts.length === 1 ? moduleIdParts[0] : null;

    var action = new Promise(function (resolve, reject) {
      if (loaderPlugin) {
        try {
          return resolve(_this2.loaderPlugins[loaderPlugin].fetch(path));
        } catch (e) {
          return reject(e);
        }
      } else {
        try {
          var result = __webpack_require__(path);
          return _this2._getActualResult(result, resolve, reject);
        } catch (_) {
          delete __webpack_require__.c[path];
        }
        Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          var result = __webpack_require__(24)("./" + path);
          return _this2._getActualResult(result, resolve, reject);
        }).bind(null, __webpack_require__));
      }
    }).then(function (result) {
      _this2.modulesBeingLoaded[moduleId] = undefined;
      return result;
    });
    this.modulesBeingLoaded[moduleId] = action;
    return action;
  };

  WebpackLoader.prototype.map = function map(id, source) {};

  WebpackLoader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    return moduleId;
  };

  WebpackLoader.prototype.normalize = function normalize(moduleId, relativeTo) {
    return Promise.resolve(moduleId);
  };

  WebpackLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
    this.templateLoader = templateLoader;
  };

  WebpackLoader.prototype.loadAllModules = function loadAllModules(ids) {
    var loads = [];

    for (var i = 0, ii = ids.length; i < ii; ++i) {
      loads.push(this.loadModule(ids[i]));
    }

    return Promise.all(loads);
  };

  WebpackLoader.prototype.loadModule = function loadModule(id) {
    var _this3 = this;

    var existing = this.moduleRegistry[id];
    if (existing) {
      return Promise.resolve(existing);
    }
    return this._import(id).then(function (m) {
      return _this3.moduleRegistry[id] = ensureOriginOnExports(m, id);
    });
  };

  WebpackLoader.prototype.loadTemplate = function loadTemplate(url) {
    return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
  };

  WebpackLoader.prototype.loadText = function loadText(url) {
    return this._import(url).then(function (result) {
      if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {
        return result.toString();
      }

      return result;
    });
  };

  WebpackLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    return pluginName + '!' + url;
  };

  WebpackLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    this.loaderPlugins[pluginName] = implementation;
  };

  return WebpackLoader;
}(_aureliaLoader.Loader);

_aureliaPal.PLATFORM.Loader = WebpackLoader;

/***/ },

/***/ "boot.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(25);
__webpack_require__(37);
__webpack_require__(36);
function configure(aurelia) {
    aurelia.use.standardConfiguration();
    if (true) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(function () { return aurelia.setRoot('app/components/app/app'); });
}
exports.configure = configure;


/***/ }

/******/ });
//# sourceMappingURL=app.js.map