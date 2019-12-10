(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("easy", [], factory);
	else if(typeof exports === 'object')
		exports["easy"] = factory();
	else
		root["easy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/easy.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dom-serializer/foreignNames.json":
/*!*******************************************************!*\
  !*** ./node_modules/dom-serializer/foreignNames.json ***!
  \*******************************************************/
/*! exports provided: elementNames, attributeNames, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"elementNames\":{\"altglyph\":\"altGlyph\",\"altglyphdef\":\"altGlyphDef\",\"altglyphitem\":\"altGlyphItem\",\"animatecolor\":\"animateColor\",\"animatemotion\":\"animateMotion\",\"animatetransform\":\"animateTransform\",\"clippath\":\"clipPath\",\"feblend\":\"feBlend\",\"fecolormatrix\":\"feColorMatrix\",\"fecomponenttransfer\":\"feComponentTransfer\",\"fecomposite\":\"feComposite\",\"feconvolvematrix\":\"feConvolveMatrix\",\"fediffuselighting\":\"feDiffuseLighting\",\"fedisplacementmap\":\"feDisplacementMap\",\"fedistantlight\":\"feDistantLight\",\"fedropshadow\":\"feDropShadow\",\"feflood\":\"feFlood\",\"fefunca\":\"feFuncA\",\"fefuncb\":\"feFuncB\",\"fefuncg\":\"feFuncG\",\"fefuncr\":\"feFuncR\",\"fegaussianblur\":\"feGaussianBlur\",\"feimage\":\"feImage\",\"femerge\":\"feMerge\",\"femergenode\":\"feMergeNode\",\"femorphology\":\"feMorphology\",\"feoffset\":\"feOffset\",\"fepointlight\":\"fePointLight\",\"fespecularlighting\":\"feSpecularLighting\",\"fespotlight\":\"feSpotLight\",\"fetile\":\"feTile\",\"feturbulence\":\"feTurbulence\",\"foreignobject\":\"foreignObject\",\"glyphref\":\"glyphRef\",\"lineargradient\":\"linearGradient\",\"radialgradient\":\"radialGradient\",\"textpath\":\"textPath\"},\"attributeNames\":{\"definitionurl\":\"definitionURL\",\"attributename\":\"attributeName\",\"attributetype\":\"attributeType\",\"basefrequency\":\"baseFrequency\",\"baseprofile\":\"baseProfile\",\"calcmode\":\"calcMode\",\"clippathunits\":\"clipPathUnits\",\"diffuseconstant\":\"diffuseConstant\",\"edgemode\":\"edgeMode\",\"filterunits\":\"filterUnits\",\"glyphref\":\"glyphRef\",\"gradienttransform\":\"gradientTransform\",\"gradientunits\":\"gradientUnits\",\"kernelmatrix\":\"kernelMatrix\",\"kernelunitlength\":\"kernelUnitLength\",\"keypoints\":\"keyPoints\",\"keysplines\":\"keySplines\",\"keytimes\":\"keyTimes\",\"lengthadjust\":\"lengthAdjust\",\"limitingconeangle\":\"limitingConeAngle\",\"markerheight\":\"markerHeight\",\"markerunits\":\"markerUnits\",\"markerwidth\":\"markerWidth\",\"maskcontentunits\":\"maskContentUnits\",\"maskunits\":\"maskUnits\",\"numoctaves\":\"numOctaves\",\"pathlength\":\"pathLength\",\"patterncontentunits\":\"patternContentUnits\",\"patterntransform\":\"patternTransform\",\"patternunits\":\"patternUnits\",\"pointsatx\":\"pointsAtX\",\"pointsaty\":\"pointsAtY\",\"pointsatz\":\"pointsAtZ\",\"preservealpha\":\"preserveAlpha\",\"preserveaspectratio\":\"preserveAspectRatio\",\"primitiveunits\":\"primitiveUnits\",\"refx\":\"refX\",\"refy\":\"refY\",\"repeatcount\":\"repeatCount\",\"repeatdur\":\"repeatDur\",\"requiredextensions\":\"requiredExtensions\",\"requiredfeatures\":\"requiredFeatures\",\"specularconstant\":\"specularConstant\",\"specularexponent\":\"specularExponent\",\"spreadmethod\":\"spreadMethod\",\"startoffset\":\"startOffset\",\"stddeviation\":\"stdDeviation\",\"stitchtiles\":\"stitchTiles\",\"surfacescale\":\"surfaceScale\",\"systemlanguage\":\"systemLanguage\",\"tablevalues\":\"tableValues\",\"targetx\":\"targetX\",\"targety\":\"targetY\",\"textlength\":\"textLength\",\"viewbox\":\"viewBox\",\"viewtarget\":\"viewTarget\",\"xchannelselector\":\"xChannelSelector\",\"ychannelselector\":\"yChannelSelector\",\"zoomandpan\":\"zoomAndPan\"}}");

/***/ }),

/***/ "./node_modules/dom-serializer/index.js":
/*!**********************************************!*\
  !*** ./node_modules/dom-serializer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Module dependencies
*/
var ElementType = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var entities = __webpack_require__(/*! entities */ "./node_modules/entities/lib/index.js");

/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/
var foreignNames = __webpack_require__(/*! ./foreignNames.json */ "./node_modules/dom-serializer/foreignNames.json");
foreignNames.elementNames.__proto__ = null; /* use as a simple dictionary */
foreignNames.attributeNames.__proto__ = null;

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '';
  var value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case attribute names */
      key = foreignNames.attributeNames[key] || key;
    }
    output += key;
    if ((value !== null && value !== '') || opts.xmlMode) {
      output +=
        '="' +
        (opts.decodeEntities
          ? entities.encodeXML(value)
          : value.replace(/\"/g, '&quot;')) +
        '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var render = (module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for (var i = 0; i < dom.length; i++) {
    var elem = dom[i];

    if (elem.type === 'root') output += render(elem.children, opts);
    else if (ElementType.isTag(elem)) output += renderTag(elem, opts);
    else if (elem.type === ElementType.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType.Comment) output += renderComment(elem);
    else if (elem.type === ElementType.CDATA) output += renderCdata(elem);
    else output += renderText(elem, opts);
  }

  return output;
});

var foreignModeIntegrationPoints = [
  'mi',
  'mo',
  'mn',
  'ms',
  'mtext',
  'annotation-xml',
  'foreignObject',
  'desc',
  'title'
];

function renderTag(elem, opts) {
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === 'foreign') {
    /* fix up mixed-case element names */
    elem.name = foreignNames.elementNames[elem.name] || elem.name;
    /* exit foreign mode at integration points */
    if (
      elem.parent &&
      foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0
    )
      opts = Object.assign({}, opts, { xmlMode: false });
  }
  if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
    opts = Object.assign({}, opts, { xmlMode: 'foreign' });
  }

  var tag = '<' + elem.name;
  var attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (
    opts.decodeEntities &&
    !(elem.parent && elem.parent.name in unencodedElements)
  ) {
    data = entities.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}


/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === "tag" /* Tag */ ||
        elem.type === "script" /* Script */ ||
        elem.type === "style" /* Style */);
}
exports.isTag = isTag;
// Exports for backwards compatibility
exports.Text = "text" /* Text */; //Text
exports.Directive = "directive" /* Directive */; //<? ... ?>
exports.Comment = "comment" /* Comment */; //<!-- ... -->
exports.Script = "script" /* Script */; //<script> tags
exports.Style = "style" /* Style */; //<style> tags
exports.Tag = "tag" /* Tag */; //Any tag
exports.CDATA = "cdata" /* CDATA */; //<![CDATA[ ... ]]>
exports.Doctype = "doctype" /* Doctype */;


/***/ }),

/***/ "./node_modules/domhandler/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domhandler/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/domhandler/lib/node.js");
exports.Node = node_1.Node;
exports.Element = node_1.Element;
exports.DataNode = node_1.DataNode;
exports.NodeWithChildren = node_1.NodeWithChildren;
var reWhitespace = /\s+/g;
// Default options
var defaultOpts = {
    normalizeWhitespace: false,
    withStartIndices: false,
    withEndIndices: false
};
var DomHandler = /** @class */ (function () {
    /**
     * Initiate a new DomHandler.
     *
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    function DomHandler(callback, options, elementCB) {
        /** The constructed DOM */
        this.dom = [];
        /** Indicated whether parsing has been completed. */
        this._done = false;
        /** Stack of open tags. */
        this._tagStack = [];
        /** A data node that is still being written to. */
        this._lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this._parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this._callback = callback || null;
        this._options = options || defaultOpts;
        this._elementCB = elementCB || null;
    }
    DomHandler.prototype.onparserinit = function (parser) {
        this._parser = parser;
    };
    // Resets the handler back to starting state
    DomHandler.prototype.onreset = function () {
        this.dom = [];
        this._done = false;
        this._tagStack = [];
        this._lastNode = null;
        this._parser = this._parser || null;
    };
    // Signals the handler that parsing is done
    DomHandler.prototype.onend = function () {
        if (this._done)
            return;
        this._done = true;
        this._parser = null;
        this.handleCallback(null);
    };
    DomHandler.prototype.onerror = function (error) {
        this.handleCallback(error);
    };
    DomHandler.prototype.onclosetag = function () {
        this._lastNode = null;
        // If(this._tagStack.pop().name !== name) this.handleCallback(Error("Tagname didn't match!"));
        var elem = this._tagStack.pop();
        if (!elem || !this._parser) {
            return;
        }
        if (this._options.withEndIndices) {
            elem.endIndex = this._parser.endIndex;
        }
        if (this._elementCB)
            this._elementCB(elem);
    };
    DomHandler.prototype.onopentag = function (name, attribs) {
        var element = new node_1.Element(name, attribs);
        this.addNode(element);
        this._tagStack.push(element);
    };
    DomHandler.prototype.ontext = function (data) {
        var normalize = this._options.normalizeWhitespace;
        var _lastNode = this._lastNode;
        if (_lastNode && _lastNode.type === "text" /* Text */) {
            if (normalize) {
                _lastNode.data = (_lastNode.data + data).replace(reWhitespace, " ");
            }
            else {
                _lastNode.data += data;
            }
        }
        else {
            if (normalize) {
                data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.DataNode("text" /* Text */, data);
            this.addNode(node);
            this._lastNode = node;
        }
    };
    DomHandler.prototype.oncomment = function (data) {
        if (this._lastNode && this._lastNode.type === "comment" /* Comment */) {
            this._lastNode.data += data;
            return;
        }
        var node = new node_1.DataNode("comment" /* Comment */, data);
        this.addNode(node);
        this._lastNode = node;
    };
    DomHandler.prototype.oncommentend = function () {
        this._lastNode = null;
    };
    DomHandler.prototype.oncdatastart = function () {
        var text = new node_1.DataNode("text" /* Text */, "");
        var node = new node_1.NodeWithChildren("cdata" /* CDATA */, [text]);
        this.addNode(node);
        text.parent = node;
        this._lastNode = text;
    };
    DomHandler.prototype.oncdataend = function () {
        this._lastNode = null;
    };
    DomHandler.prototype.onprocessinginstruction = function (name, data) {
        var node = new node_1.ProcessingInstruction(name, data);
        this.addNode(node);
    };
    DomHandler.prototype.handleCallback = function (error) {
        if (typeof this._callback === "function") {
            this._callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    };
    DomHandler.prototype.addNode = function (node) {
        var parent = this._tagStack[this._tagStack.length - 1];
        var siblings = parent ? parent.children : this.dom;
        var previousSibling = siblings[siblings.length - 1];
        if (this._parser) {
            if (this._options.withStartIndices) {
                node.startIndex = this._parser.startIndex;
            }
            if (this._options.withEndIndices) {
                node.endIndex = this._parser.endIndex;
            }
        }
        siblings.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        if (parent) {
            node.parent = parent;
        }
        this._lastNode = null;
    };
    DomHandler.prototype.addDataNode = function (node) {
        this.addNode(node);
        this._lastNode = node;
    };
    return DomHandler;
}());
exports.DomHandler = DomHandler;
exports.default = DomHandler;


/***/ }),

/***/ "./node_modules/domhandler/lib/node.js":
/*!*********************************************!*\
  !*** ./node_modules/domhandler/lib/node.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var nodeTypes = new Map([
    ["tag" /* Tag */, 1],
    ["script" /* Script */, 1],
    ["style" /* Style */, 1],
    ["directive" /* Directive */, 1],
    ["text" /* Text */, 3],
    ["cdata" /* CDATA */, 4],
    ["comment" /* Comment */, 8]
]);
// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var Node = /** @class */ (function () {
    /**
     *
     * @param type The type of the node.
     */
    function Node(type) {
        this.type = type;
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "nodeType", {
        // Read-only aliases
        get: function () {
            return nodeTypes.get(this.type) || 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        get: function () {
            return this.parent || null;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        get: function () {
            return this.prev || null;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        get: function () {
            return this.next || null;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     *
     * @param type The type of the node
     * @param data The content of the data node
     */
    function DataNode(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    return DataNode;
}(Node));
exports.DataNode = DataNode;
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, "directive" /* Directive */, data) || this;
        _this.name = name;
        return _this;
    }
    return ProcessingInstruction;
}(DataNode));
exports.ProcessingInstruction = ProcessingInstruction;
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     *
     * @param type Type of the node.
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        get: function () {
            return this.children[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        get: function () {
            return this.children[this.children.length - 1] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: true,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
exports.NodeWithChildren = NodeWithChildren;
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     *
     * @param name Name of the tag, eg. `div`, `span`
     * @param attribs Object mapping attribute names to attribute values
     */
    function Element(name, attribs) {
        var _this = _super.call(this, name === "script"
            ? "script" /* Script */
            : name === "style"
                ? "style" /* Style */
                : "tag" /* Tag */, []) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.attribs = attribs;
        return _this;
    }
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
exports.Element = Element;


/***/ }),

/***/ "./node_modules/domutils/lib/helpers.js":
/*!**********************************************!*\
  !*** ./node_modules/domutils/lib/helpers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tagtypes_1 = __webpack_require__(/*! ./tagtypes */ "./node_modules/domutils/lib/tagtypes.js");
/**
 * Given an array of nodes, remove any member that is contained by another.
 *
 * @param nodes — Nodes to filter.
 */
function removeSubsets(nodes) {
    var idx = nodes.length;
    // Check if each node (or one of its ancestors) is already contained in the
    // array.
    while (--idx >= 0) {
        var node = nodes[idx];
        // Remove the node if it is not unique.
        // We are going through the array from the end, so we only
        // have to check nodes that preceed the node under consideration in the array.
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.indexOf(ancestor) > -1) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
exports.removeSubsets = removeSubsets;
/***
 * Compare the position of one node against another node in any other document.
 * The return value is a bitmask with the following values:
 *
 * document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent./
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 * @argument nodaA The first node to use in the comparison
 * @argument nodeB The second node to use in the comparison
 *
 * @return A bitmask describing the input nodes' relative position.
 *
 *        See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 *        a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    var current = tagtypes_1.hasChildren(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = tagtypes_1.hasChildren(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    var idx = 0;
    while (aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return 1 /* DISCONNECTED */;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return 4 /* FOLLOWING */ | 16 /* CONTAINED_BY */;
        }
        return 4 /* FOLLOWING */;
    }
    else {
        if (sharedParent === nodeA) {
            return 2 /* PRECEDING */ | 8 /* CONTAINS */;
        }
        return 2 /* PRECEDING */;
    }
}
exports.compareDocumentPosition = compareDocumentPosition;
/***
 * Sort an array of nodes based on their relative position in the document and
 * remove any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @argument nodes Array of DOM nodes
 * @returns collection of unique nodes, sorted in document order
 */
function uniqueSort(nodes) {
    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
    nodes.sort(function (a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & 2 /* PRECEDING */) {
            return -1;
        }
        else if (relative & 4 /* FOLLOWING */) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
exports.uniqueSort = uniqueSort;


/***/ }),

/***/ "./node_modules/domutils/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/domutils/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./stringify */ "./node_modules/domutils/lib/stringify.js"));
__export(__webpack_require__(/*! ./traversal */ "./node_modules/domutils/lib/traversal.js"));
__export(__webpack_require__(/*! ./manipulation */ "./node_modules/domutils/lib/manipulation.js"));
__export(__webpack_require__(/*! ./querying */ "./node_modules/domutils/lib/querying.js"));
__export(__webpack_require__(/*! ./legacy */ "./node_modules/domutils/lib/legacy.js"));
__export(__webpack_require__(/*! ./helpers */ "./node_modules/domutils/lib/helpers.js"));
__export(__webpack_require__(/*! ./tagtypes */ "./node_modules/domutils/lib/tagtypes.js"));


/***/ }),

/***/ "./node_modules/domutils/lib/legacy.js":
/*!*********************************************!*\
  !*** ./node_modules/domutils/lib/legacy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var querying_1 = __webpack_require__(/*! ./querying */ "./node_modules/domutils/lib/querying.js");
var tagtypes_1 = __webpack_require__(/*! ./tagtypes */ "./node_modules/domutils/lib/tagtypes.js");
function isTextNode(node) {
    return node.type === "text" /* Text */;
}
/* eslint-disable @typescript-eslint/camelcase */
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return tagtypes_1.isTag(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return tagtypes_1.isTag;
        }
        else {
            return function (elem) { return tagtypes_1.isTag(elem) && elem.name === name; };
        }
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        else {
            return function (elem) { return elem.type === type; };
        }
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return isTextNode(elem) && data(elem.data); };
        }
        else {
            return function (elem) { return isTextNode(elem) && elem.data === data; };
        }
    }
};
/* eslint-enable @typescript-eslint/camelcase */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return tagtypes_1.isTag(elem) && value(elem.attribs[attrib]); };
    }
    else {
        return function (elem) { return tagtypes_1.isTag(elem) && elem.attribs[attrib] === value; };
    }
}
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        // @ts-ignore
        return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, element) {
    var test = compileTest(options);
    return test ? test(element) : true;
}
exports.testElement = testElement;
function getElements(options, element, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? querying_1.filter(test, element, recurse, limit) : [];
}
exports.getElements = getElements;
function getElementById(id, element, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(element))
        element = [element];
    return querying_1.findOne(getAttribCheck("id", id), element, recurse);
}
exports.getElementById = getElementById;
function getElementsByTagName(name, element, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    return querying_1.filter(Checks.tag_name(name), element, recurse, limit);
}
exports.getElementsByTagName = getElementsByTagName;
function getElementsByTagType(type, element, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return querying_1.filter(Checks.tag_type(type), element, recurse, limit);
}
exports.getElementsByTagType = getElementsByTagType;


/***/ }),

/***/ "./node_modules/domutils/lib/manipulation.js":
/*!***************************************************!*\
  !*** ./node_modules/domutils/lib/manipulation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/***
 * Remove an element from the dom
 *
 * @argument elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
exports.removeElement = removeElement;
/***
 * Replace an element in the dom
 *
 * @argument elem The element to be replaced
 * @argument replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
    }
}
exports.replaceElement = replaceElement;
/***
 * Append a child to an element
 *
 * @argument elem The element to append to
 * @argument child The element to be added as a child
 */
function appendChild(elem, child) {
    child.parent = elem;
    if (elem.children.push(child) !== 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
        child.next = null;
    }
}
exports.appendChild = appendChild;
/***
 * Append an element after another
 *
 * @argument elem The element to append to
 * @argument next The element be added
 */
function append(elem, next) {
    var parent = elem.parent, currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
exports.append = append;
/***
 * Prepend an element before another
 *
 * @argument elem The element to append to
 * @argument prev The element be added
 */
function prepend(elem, prev) {
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
exports.prepend = prepend;


/***/ }),

/***/ "./node_modules/domutils/lib/querying.js":
/*!***********************************************!*\
  !*** ./node_modules/domutils/lib/querying.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tagtypes_1 = __webpack_require__(/*! ./tagtypes */ "./node_modules/domutils/lib/tagtypes.js");
function filter(test, element, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    if (!Array.isArray(element))
        element = [element];
    return find(test, element, recurse, limit);
}
exports.filter = filter;
function find(test, elems, recurse, limit) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && tagtypes_1.hasChildren(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result = result.concat(children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
exports.find = find;
function findOneChild(test, elems) {
    for (var i = 0; i < elems.length; i++) {
        if (test(elems[i]))
            return elems[i];
    }
    return null;
}
exports.findOneChild = findOneChild;
function findOne(test, elems, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < elems.length && !elem; i++) {
        var checked = elems[i];
        if (!tagtypes_1.isTag(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
        }
    }
    return elem;
}
exports.findOne = findOne;
function existsOne(test, elems) {
    for (var i = 0; i < elems.length; i++) {
        var checked = elems[i];
        if (tagtypes_1.isTag(checked) &&
            (test(checked) ||
                (checked.children.length > 0 &&
                    existsOne(test, checked.children)))) {
            return true;
        }
    }
    return false;
}
exports.existsOne = existsOne;
function findAll(test, rootElems) {
    var result = [];
    var stack = rootElems.slice();
    while (stack.length) {
        var elem = stack.shift();
        if (!elem || !tagtypes_1.isTag(elem))
            continue;
        if (elem.children && elem.children.length > 0) {
            stack.unshift.apply(stack, elem.children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}
exports.findAll = findAll;


/***/ }),

/***/ "./node_modules/domutils/lib/stringify.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/stringify.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tagtypes_1 = __webpack_require__(/*! ./tagtypes */ "./node_modules/domutils/lib/tagtypes.js");
var dom_serializer_1 = __importDefault(__webpack_require__(/*! dom-serializer */ "./node_modules/dom-serializer/index.js"));
exports.getOuterHTML = dom_serializer_1.default;
function getInnerHTML(node, options) {
    return tagtypes_1.hasChildren(node)
        ? node.children.map(function (node) { return exports.getOuterHTML(node, options); }).join("")
        : "";
}
exports.getInnerHTML = getInnerHTML;
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if (tagtypes_1.isTag(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if (tagtypes_1.isCDATA(node))
        return getText(node.children);
    if (tagtypes_1.isText(node))
        return node.data;
    return "";
}
exports.getText = getText;


/***/ }),

/***/ "./node_modules/domutils/lib/tagtypes.js":
/*!***********************************************!*\
  !*** ./node_modules/domutils/lib/tagtypes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domelementtype_1 = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
function isTag(node) {
    return domelementtype_1.isTag(node);
}
exports.isTag = isTag;
function isCDATA(node) {
    return "cdata" /* CDATA */ === node.type;
}
exports.isCDATA = isCDATA;
function isText(node) {
    return node.type === "text" /* Text */;
}
exports.isText = isText;
function isComment(node) {
    return node.type === "comment" /* Comment */;
}
exports.isComment = isComment;
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
exports.hasChildren = hasChildren;


/***/ }),

/***/ "./node_modules/domutils/lib/traversal.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/traversal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getChildren(elem) {
    // @ts-ignore
    return elem.children || null;
}
exports.getChildren = getChildren;
function getParent(elem) {
    return elem.parent || null;
}
exports.getParent = getParent;
function getSiblings(elem) {
    var parent = getParent(elem);
    return parent ? getChildren(parent) : [elem];
}
exports.getSiblings = getSiblings;
function getAttributeValue(elem, name) {
    return elem.attribs && elem.attribs[name];
}
exports.getAttributeValue = getAttributeValue;
function hasAttrib(elem, name) {
    return !!getAttributeValue(elem, name);
}
exports.hasAttrib = hasAttrib;
/***
 * Returns the name property of an element
 *
 * @argument elem The element to get the name for
 */
function getName(elem) {
    return elem.name;
}
exports.getName = getName;


/***/ }),

/***/ "./node_modules/entities/lib/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/decode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! ./maps/legacy.json */ "./node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/entities/lib/decode_codepoint.js"));
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|");
    var replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) { return String(str).replace(re, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    //TODO consider creating a merged map
    return function (str) {
        return String(str).replace(re, replacer);
    };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            if (str.charAt(2) === "X" || str.charAt(2) === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/decode_codepoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/entities/lib/decode_codepoint.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(__webpack_require__(/*! ./maps/decode.json */ "./node_modules/entities/lib/maps/decode.json"));
// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        // @ts-ignore
        codePoint = decode_json_1.default[codePoint];
    }
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
}
exports.default = decodeCodePoint;


/***/ }),

/***/ "./node_modules/entities/lib/encode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/encode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
exports.encodeXML = getInverse(inverseXML, xmlReplacer);
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    Object.keys(inverse).forEach(function (k) {
        return k.length === 1
            ? // Add value to single array
                single.push("\\" + k)
            : // Add value to multiple array
                multiple.push(k);
    });
    //TODO add ranges
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /[^\0-\x7F]/g;
var reAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function singleCharReplacer(c) {
    return "&#x" + c
        .charCodeAt(0)
        .toString(16)
        .toUpperCase() + ";";
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function astralReplacer(c, _) {
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    var high = c.charCodeAt(0);
    var low = c.charCodeAt(1);
    var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
    return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reAstralSymbols, astralReplacer)
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reXmlChars = getInverseReplacer(inverseXML);
function escape(data) {
    return data
        .replace(reXmlChars, singleCharReplacer)
        .replace(reAstralSymbols, astralReplacer)
        .replace(reNonASCII, singleCharReplacer);
}
exports.escape = escape;


/***/ }),

/***/ "./node_modules/entities/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/entities/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decode_1 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
var encode_1 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
exports.encodeXML = encode_2.encodeXML;
exports.encodeHTML = encode_2.encodeHTML;
exports.escape = encode_2.escape;
// Legacy aliases
exports.encodeHTML4 = encode_2.encodeHTML;
exports.encodeHTML5 = encode_2.encodeHTML;
var decode_2 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
exports.decodeXML = decode_2.decodeXML;
exports.decodeHTML = decode_2.decodeHTML;
exports.decodeHTMLStrict = decode_2.decodeHTMLStrict;
// Legacy aliases
exports.decodeHTML4 = decode_2.decodeHTML;
exports.decodeHTML5 = decode_2.decodeHTML;
exports.decodeHTML4Strict = decode_2.decodeHTMLStrict;
exports.decodeHTML5Strict = decode_2.decodeHTMLStrict;
exports.decodeXMLStrict = decode_2.decodeXML;


/***/ }),

/***/ "./node_modules/entities/lib/maps/decode.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/decode.json ***!
  \****************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/legacy.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/legacy.json ***!
  \****************************************************/
/*! exports provided: Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/xml.json":
/*!*************************************************!*\
  !*** ./node_modules/entities/lib/maps/xml.json ***!
  \*************************************************/
/*! exports provided: amp, apos, gt, lt, quot, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/htmlparser2/lib/CollectingHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/htmlparser2/lib/CollectingHandler.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MultiplexHandler_1 = __importDefault(__webpack_require__(/*! ./MultiplexHandler */ "./node_modules/htmlparser2/lib/MultiplexHandler.js"));
var CollectingHandler = /** @class */ (function (_super) {
    __extends(CollectingHandler, _super);
    function CollectingHandler(cbs) {
        if (cbs === void 0) { cbs = {}; }
        var _this = _super.call(this, function (name) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.events.push([name].concat(args));
            // @ts-ignore
            if (_this._cbs[name])
                (_a = _this._cbs)[name].apply(_a, args);
        }) || this;
        _this._cbs = cbs;
        _this.events = [];
        return _this;
    }
    CollectingHandler.prototype.onreset = function () {
        this.events = [];
        if (this._cbs.onreset)
            this._cbs.onreset();
    };
    CollectingHandler.prototype.restart = function () {
        var _a;
        if (this._cbs.onreset)
            this._cbs.onreset();
        for (var i = 0; i < this.events.length; i++) {
            var _b = this.events[i], name_1 = _b[0], args = _b.slice(1);
            if (!this._cbs[name_1]) {
                continue;
            }
            // @ts-ignore
            (_a = this._cbs)[name_1].apply(_a, args);
        }
    };
    return CollectingHandler;
}(MultiplexHandler_1.default));
exports.CollectingHandler = CollectingHandler;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/FeedHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/htmlparser2/lib/FeedHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __importDefault(__webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js"));
var DomUtils = __importStar(__webpack_require__(/*! domutils */ "./node_modules/domutils/lib/index.js"));
var Parser_1 = __webpack_require__(/*! ./Parser */ "./node_modules/htmlparser2/lib/Parser.js");
//TODO: Consume data as it is coming in
var FeedHandler = /** @class */ (function (_super) {
    __extends(FeedHandler, _super);
    /**
     *
     * @param callback
     * @param options
     */
    function FeedHandler(callback, options) {
        var _this = this;
        if (typeof callback === "object" && callback !== null) {
            callback = undefined;
            options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
    }
    FeedHandler.prototype.onend = function () {
        var feed = {};
        var feedRoot = getOneElement(isValidFeed, this.dom);
        if (feedRoot) {
            if (feedRoot.name === "feed") {
                var childs = feedRoot.children;
                feed.type = "atom";
                addConditionally(feed, "id", "id", childs);
                addConditionally(feed, "title", "title", childs);
                var href = getAttribute("href", getOneElement("link", childs));
                if (href) {
                    feed.link = href;
                }
                addConditionally(feed, "description", "subtitle", childs);
                var updated = fetch("updated", childs);
                if (updated) {
                    feed.updated = new Date(updated);
                }
                addConditionally(feed, "author", "email", childs, true);
                feed.items = getElements("entry", childs).map(function (item) {
                    var entry = {};
                    var children = item.children;
                    addConditionally(entry, "id", "id", children);
                    addConditionally(entry, "title", "title", children);
                    var href = getAttribute("href", getOneElement("link", children));
                    if (href) {
                        entry.link = href;
                    }
                    var description = fetch("summary", children) ||
                        fetch("content", children);
                    if (description) {
                        entry.description = description;
                    }
                    var pubDate = fetch("updated", children);
                    if (pubDate) {
                        entry.pubDate = new Date(pubDate);
                    }
                    return entry;
                });
            }
            else {
                var childs = getOneElement("channel", feedRoot.children)
                    .children;
                feed.type = feedRoot.name.substr(0, 3);
                feed.id = "";
                addConditionally(feed, "title", "title", childs);
                addConditionally(feed, "link", "link", childs);
                addConditionally(feed, "description", "description", childs);
                var updated = fetch("lastBuildDate", childs);
                if (updated) {
                    feed.updated = new Date(updated);
                }
                addConditionally(feed, "author", "managingEditor", childs, true);
                feed.items = getElements("item", feedRoot.children).map(function (item) {
                    var entry = {};
                    var children = item.children;
                    addConditionally(entry, "id", "guid", children);
                    addConditionally(entry, "title", "title", children);
                    addConditionally(entry, "link", "link", children);
                    addConditionally(entry, "description", "description", children);
                    var pubDate = fetch("pubDate", children);
                    if (pubDate)
                        entry.pubDate = new Date(pubDate);
                    return entry;
                });
            }
        }
        this.feed = feed;
        this.handleCallback(feedRoot ? null : Error("couldn't find root of feed"));
    };
    return FeedHandler;
}(domhandler_1.default));
exports.FeedHandler = FeedHandler;
function getElements(what, where) {
    return DomUtils.getElementsByTagName(what, where, true);
}
function getOneElement(what, where) {
    return DomUtils.getElementsByTagName(what, where, true, 1)[0];
}
function fetch(what, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return DomUtils.getText(DomUtils.getElementsByTagName(what, where, recurse, 1)).trim();
}
function getAttribute(name, elem) {
    if (!elem) {
        return null;
    }
    var attribs = elem.attribs;
    return attribs[name];
}
function addConditionally(obj, prop, what, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var tmp = fetch(what, where, recurse);
    // @ts-ignore
    if (tmp)
        obj[prop] = tmp;
}
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
var defaultOptions = { xmlMode: true };
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this option, you probably want to set `xmlMode` to `true`.
 */
function parseFeed(feed, options) {
    if (options === void 0) { options = defaultOptions; }
    var handler = new FeedHandler(options);
    new Parser_1.Parser(handler, options).end(feed);
    return handler.feed;
}
exports.parseFeed = parseFeed;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/MultiplexHandler.js":
/*!**********************************************************!*\
  !*** ./node_modules/htmlparser2/lib/MultiplexHandler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calls a specific handler function for all events that are encountered.
 *
 * @param func — The function to multiplex all events to.
 */
var MultiplexHandler = /** @class */ (function () {
    function MultiplexHandler(func) {
        this._func = func;
    }
    /* Format: eventname: number of arguments */
    MultiplexHandler.prototype.onattribute = function (name, value) {
        this._func("onattribute", name, value);
    };
    MultiplexHandler.prototype.oncdatastart = function () {
        this._func("oncdatastart");
    };
    MultiplexHandler.prototype.oncdataend = function () {
        this._func("oncdataend");
    };
    MultiplexHandler.prototype.ontext = function (text) {
        this._func("ontext", text);
    };
    MultiplexHandler.prototype.onprocessinginstruction = function (name, value) {
        this._func("onprocessinginstruction", name, value);
    };
    MultiplexHandler.prototype.oncomment = function (comment) {
        this._func("oncomment", comment);
    };
    MultiplexHandler.prototype.oncommentend = function () {
        this._func("oncommentend");
    };
    MultiplexHandler.prototype.onclosetag = function (name) {
        this._func("onclosetag", name);
    };
    MultiplexHandler.prototype.onopentag = function (name, attribs) {
        this._func("onopentag", name, attribs);
    };
    MultiplexHandler.prototype.onopentagname = function (name) {
        this._func("onopentagname", name);
    };
    MultiplexHandler.prototype.onerror = function (error) {
        this._func("onerror", error);
    };
    MultiplexHandler.prototype.onend = function () {
        this._func("onend");
    };
    MultiplexHandler.prototype.onparserinit = function (parser) {
        this._func("onparserinit", parser);
    };
    MultiplexHandler.prototype.onreset = function () {
        this._func("onreset");
    };
    return MultiplexHandler;
}());
exports.default = MultiplexHandler;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/Parser.js":
/*!************************************************!*\
  !*** ./node_modules/htmlparser2/lib/Parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tokenizer_1 = __importDefault(__webpack_require__(/*! ./Tokenizer */ "./node_modules/htmlparser2/lib/Tokenizer.js"));
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
var pTag = new Set(["p"]);
var openImpliesClose = {
    tr: new Set(["tr", "th", "td"]),
    th: new Set(["th"]),
    td: new Set(["thead", "th", "td"]),
    body: new Set(["head", "link", "script"]),
    li: new Set(["li"]),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: new Set(["option"]),
    optgroup: new Set(["optgroup", "option"]),
    dd: new Set(["dt", "dd"]),
    dt: new Set(["dt", "dd"]),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: new Set(["rt", "rp"]),
    rp: new Set(["rt", "rp"]),
    tbody: new Set(["thead", "tbody"]),
    tfoot: new Set(["thead", "tbody"])
};
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
var reNameEnd = /\s|\//;
var Parser = /** @class */ (function (_super) {
    __extends(Parser, _super);
    function Parser(cbs, options) {
        var _this = _super.call(this) || this;
        _this._tagname = "";
        _this._attribname = "";
        _this._attribvalue = "";
        _this._attribs = null;
        _this._stack = [];
        _this._foreignContext = [];
        _this.startIndex = 0;
        _this.endIndex = null;
        // Aliases for backwards compatibility
        _this.parseChunk = Parser.prototype.write;
        _this.done = Parser.prototype.end;
        _this._options = options || {};
        _this._cbs = cbs || {};
        _this._tagname = "";
        _this._attribname = "";
        _this._attribvalue = "";
        _this._attribs = null;
        _this._stack = [];
        _this._foreignContext = [];
        _this.startIndex = 0;
        _this.endIndex = null;
        _this._lowerCaseTagNames =
            "lowerCaseTags" in _this._options
                ? !!_this._options.lowerCaseTags
                : !_this._options.xmlMode;
        _this._lowerCaseAttributeNames =
            "lowerCaseAttributeNames" in _this._options
                ? !!_this._options.lowerCaseAttributeNames
                : !_this._options.xmlMode;
        _this._tokenizer = new (_this._options.Tokenizer || Tokenizer_1.default)(_this._options, _this);
        if (_this._cbs.onparserinit)
            _this._cbs.onparserinit(_this);
        return _this;
    }
    Parser.prototype._updatePosition = function (initialOffset) {
        if (this.endIndex === null) {
            if (this._tokenizer._sectionStart <= initialOffset) {
                this.startIndex = 0;
            }
            else {
                this.startIndex = this._tokenizer._sectionStart - initialOffset;
            }
        }
        else
            this.startIndex = this.endIndex + 1;
        this.endIndex = this._tokenizer.getAbsoluteIndex();
    };
    //Tokenizer event handlers
    Parser.prototype.ontext = function (data) {
        this._updatePosition(1);
        // @ts-ignore
        this.endIndex--;
        if (this._cbs.ontext)
            this._cbs.ontext(data);
    };
    Parser.prototype.onopentagname = function (name) {
        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this._tagname = name;
        if (!this._options.xmlMode && name in openImpliesClose) {
            for (var el = void 0; 
            // @ts-ignore
            openImpliesClose[name].has((el = this._stack[this._stack.length - 1])); this.onclosetag(el))
                ;
        }
        if (this._options.xmlMode || !voidElements.has(name)) {
            this._stack.push(name);
            if (foreignContextElements.has(name)) {
                this._foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this._foreignContext.push(false);
            }
        }
        if (this._cbs.onopentagname)
            this._cbs.onopentagname(name);
        if (this._cbs.onopentag)
            this._attribs = {};
    };
    Parser.prototype.onopentagend = function () {
        this._updatePosition(1);
        if (this._attribs) {
            if (this._cbs.onopentag) {
                this._cbs.onopentag(this._tagname, this._attribs);
            }
            this._attribs = null;
        }
        if (!this._options.xmlMode &&
            this._cbs.onclosetag &&
            voidElements.has(this._tagname)) {
            this._cbs.onclosetag(this._tagname);
        }
        this._tagname = "";
    };
    Parser.prototype.onclosetag = function (name) {
        this._updatePosition(1);
        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this._foreignContext.pop();
        }
        if (this._stack.length &&
            (this._options.xmlMode || !voidElements.has(name))) {
            var pos = this._stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this._cbs.onclosetag) {
                    pos = this._stack.length - pos;
                    // @ts-ignore
                    while (pos--)
                        this._cbs.onclosetag(this._stack.pop());
                }
                else
                    this._stack.length = pos;
            }
            else if (name === "p" && !this._options.xmlMode) {
                this.onopentagname(name);
                this._closeCurrentTag();
            }
        }
        else if (!this._options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this._closeCurrentTag();
        }
    };
    Parser.prototype.onselfclosingtag = function () {
        if (this._options.xmlMode ||
            this._options.recognizeSelfClosing ||
            this._foreignContext[this._foreignContext.length - 1]) {
            this._closeCurrentTag();
        }
        else {
            this.onopentagend();
        }
    };
    Parser.prototype._closeCurrentTag = function () {
        var name = this._tagname;
        this.onopentagend();
        //self-closing tags will be on the top of the stack
        //(cheaper check than in onclosetag)
        if (this._stack[this._stack.length - 1] === name) {
            if (this._cbs.onclosetag) {
                this._cbs.onclosetag(name);
            }
            this._stack.pop();
        }
    };
    Parser.prototype.onattribname = function (name) {
        if (this._lowerCaseAttributeNames) {
            name = name.toLowerCase();
        }
        this._attribname = name;
    };
    Parser.prototype.onattribdata = function (value) {
        this._attribvalue += value;
    };
    Parser.prototype.onattribend = function () {
        if (this._cbs.onattribute)
            this._cbs.onattribute(this._attribname, this._attribvalue);
        if (this._attribs &&
            !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
            this._attribs[this._attribname] = this._attribvalue;
        }
        this._attribname = "";
        this._attribvalue = "";
    };
    Parser.prototype._getInstructionName = function (value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    };
    Parser.prototype.ondeclaration = function (value) {
        if (this._cbs.onprocessinginstruction) {
            var name_1 = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
    };
    Parser.prototype.onprocessinginstruction = function (value) {
        if (this._cbs.onprocessinginstruction) {
            var name_2 = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
    };
    Parser.prototype.oncomment = function (value) {
        this._updatePosition(4);
        if (this._cbs.oncomment)
            this._cbs.oncomment(value);
        if (this._cbs.oncommentend)
            this._cbs.oncommentend();
    };
    Parser.prototype.oncdata = function (value) {
        this._updatePosition(1);
        if (this._options.xmlMode || this._options.recognizeCDATA) {
            if (this._cbs.oncdatastart)
                this._cbs.oncdatastart();
            if (this._cbs.ontext)
                this._cbs.ontext(value);
            if (this._cbs.oncdataend)
                this._cbs.oncdataend();
        }
        else {
            this.oncomment("[CDATA[" + value + "]]");
        }
    };
    Parser.prototype.onerror = function (err) {
        if (this._cbs.onerror)
            this._cbs.onerror(err);
    };
    Parser.prototype.onend = function () {
        if (this._cbs.onclosetag) {
            for (var i = this._stack.length; i > 0; this._cbs.onclosetag(this._stack[--i]))
                ;
        }
        if (this._cbs.onend)
            this._cbs.onend();
    };
    //Resets the parser to a blank state, ready to parse a new HTML document
    Parser.prototype.reset = function () {
        if (this._cbs.onreset)
            this._cbs.onreset();
        this._tokenizer.reset();
        this._tagname = "";
        this._attribname = "";
        this._attribs = null;
        this._stack = [];
        if (this._cbs.onparserinit)
            this._cbs.onparserinit(this);
    };
    //Parses a complete HTML document and pushes it to the handler
    Parser.prototype.parseComplete = function (data) {
        this.reset();
        this.end(data);
    };
    Parser.prototype.write = function (chunk) {
        this._tokenizer.write(chunk);
    };
    Parser.prototype.end = function (chunk) {
        this._tokenizer.end(chunk);
    };
    Parser.prototype.pause = function () {
        this._tokenizer.pause();
    };
    Parser.prototype.resume = function () {
        this._tokenizer.resume();
    };
    return Parser;
}(events_1.EventEmitter));
exports.Parser = Parser;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/Tokenizer.js":
/*!***************************************************!*\
  !*** ./node_modules/htmlparser2/lib/Tokenizer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! entities/lib/decode_codepoint */ "./node_modules/entities/lib/decode_codepoint.js"));
var entities_json_1 = __importDefault(__webpack_require__(/*! entities/lib/maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! entities/lib/maps/legacy.json */ "./node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! entities/lib/maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) {
        return function (t, c) {
            if (c === lower) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
    else {
        return function (t, c) {
            if (c === lower || c === upper) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function (t, c) {
        if (c === lower || c === upper) {
            t._state = NEXT_STATE;
        }
        else {
            t._state = 3 /* InTagName */;
            t._index--; //consume the token again
        }
    };
}
var stateBeforeCdata1 = ifElseState("C", 23 /* BeforeCdata2 */, 16 /* InDeclaration */);
var stateBeforeCdata2 = ifElseState("D", 24 /* BeforeCdata3 */, 16 /* InDeclaration */);
var stateBeforeCdata3 = ifElseState("A", 25 /* BeforeCdata4 */, 16 /* InDeclaration */);
var stateBeforeCdata4 = ifElseState("T", 26 /* BeforeCdata5 */, 16 /* InDeclaration */);
var stateBeforeCdata5 = ifElseState("A", 27 /* BeforeCdata6 */, 16 /* InDeclaration */);
var stateBeforeScript1 = consumeSpecialNameChar("R", 34 /* BeforeScript2 */);
var stateBeforeScript2 = consumeSpecialNameChar("I", 35 /* BeforeScript3 */);
var stateBeforeScript3 = consumeSpecialNameChar("P", 36 /* BeforeScript4 */);
var stateBeforeScript4 = consumeSpecialNameChar("T", 37 /* BeforeScript5 */);
var stateAfterScript1 = ifElseState("R", 39 /* AfterScript2 */, 1 /* Text */);
var stateAfterScript2 = ifElseState("I", 40 /* AfterScript3 */, 1 /* Text */);
var stateAfterScript3 = ifElseState("P", 41 /* AfterScript4 */, 1 /* Text */);
var stateAfterScript4 = ifElseState("T", 42 /* AfterScript5 */, 1 /* Text */);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 44 /* BeforeStyle2 */);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 45 /* BeforeStyle3 */);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 46 /* BeforeStyle4 */);
var stateAfterStyle1 = ifElseState("Y", 48 /* AfterStyle2 */, 1 /* Text */);
var stateAfterStyle2 = ifElseState("L", 49 /* AfterStyle3 */, 1 /* Text */);
var stateAfterStyle3 = ifElseState("E", 50 /* AfterStyle4 */, 1 /* Text */);
var stateBeforeEntity = ifElseState("#", 52 /* BeforeNumericEntity */, 53 /* InNamedEntity */);
var stateBeforeNumericEntity = ifElseState("X", 55 /* InHexEntity */, 54 /* InNumericEntity */);
var Tokenizer = /** @class */ (function () {
    function Tokenizer(options, cbs) {
        /** The current state the tokenizer is in. */
        this._state = 1 /* Text */;
        /** The read buffer. */
        this._buffer = "";
        /** The beginning of the section that is currently being read. */
        this._sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */
        this._bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this._baseState = 1 /* Text */;
        /** For special parsing behavior inside of script and style tags. */
        this._special = 1 /* None */;
        /** Indicates whether the tokenizer has been paused. */
        this._running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
        this._ended = false;
        this._cbs = cbs;
        this._xmlMode = !!(options && options.xmlMode);
        this._decodeEntities = !!(options && options.decodeEntities);
    }
    Tokenizer.prototype.reset = function () {
        this._state = 1 /* Text */;
        this._buffer = "";
        this._sectionStart = 0;
        this._index = 0;
        this._bufferOffset = 0;
        this._baseState = 1 /* Text */;
        this._special = 1 /* None */;
        this._running = true;
        this._ended = false;
    };
    Tokenizer.prototype._stateText = function (c) {
        if (c === "<") {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._state = 2 /* BeforeTagName */;
            this._sectionStart = this._index;
        }
        else if (this._decodeEntities &&
            this._special === 1 /* None */ &&
            c === "&") {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._baseState = 1 /* Text */;
            this._state = 51 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeTagName = function (c) {
        if (c === "/") {
            this._state = 5 /* BeforeClosingTagName */;
        }
        else if (c === "<") {
            this._cbs.ontext(this._getSection());
            this._sectionStart = this._index;
        }
        else if (c === ">" ||
            this._special !== 1 /* None */ ||
            whitespace(c)) {
            this._state = 1 /* Text */;
        }
        else if (c === "!") {
            this._state = 15 /* BeforeDeclaration */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "?") {
            this._state = 17 /* InProcessingInstruction */;
            this._sectionStart = this._index + 1;
        }
        else {
            this._state =
                !this._xmlMode && (c === "s" || c === "S")
                    ? 31 /* BeforeSpecial */
                    : 3 /* InTagName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInTagName = function (c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._emitToken("onopentagname");
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateBeforeCloseingTagName = function (c) {
        if (whitespace(c)) {
            // ignore
        }
        else if (c === ">") {
            this._state = 1 /* Text */;
        }
        else if (this._special !== 1 /* None */) {
            if (c === "s" || c === "S") {
                this._state = 32 /* BeforeSpecialEnd */;
            }
            else {
                this._state = 1 /* Text */;
                this._index--;
            }
        }
        else {
            this._state = 6 /* InClosingTagName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInCloseingTagName = function (c) {
        if (c === ">" || whitespace(c)) {
            this._emitToken("onclosetag");
            this._state = 7 /* AfterClosingTagName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateAfterCloseingTagName = function (c) {
        //skip everything until ">"
        if (c === ">") {
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateBeforeAttributeName = function (c) {
        if (c === ">") {
            this._cbs.onopentagend();
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "/") {
            this._state = 4 /* InSelfClosingTag */;
        }
        else if (!whitespace(c)) {
            this._state = 9 /* InAttributeName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInSelfClosingTag = function (c) {
        if (c === ">") {
            this._cbs.onselfclosingtag();
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (!whitespace(c)) {
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateInAttributeName = function (c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this._cbs.onattribname(this._getSection());
            this._sectionStart = -1;
            this._state = 10 /* AfterAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateAfterAttributeName = function (c) {
        if (c === "=") {
            this._state = 11 /* BeforeAttributeValue */;
        }
        else if (c === "/" || c === ">") {
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (!whitespace(c)) {
            this._cbs.onattribend();
            this._state = 9 /* InAttributeName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeAttributeValue = function (c) {
        if (c === '"') {
            this._state = 12 /* InAttributeValueDq */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "'") {
            this._state = 13 /* InAttributeValueSq */;
            this._sectionStart = this._index + 1;
        }
        else if (!whitespace(c)) {
            this._state = 14 /* InAttributeValueNq */;
            this._sectionStart = this._index;
            this._index--; //reconsume token
        }
    };
    Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function (c) {
        if (c === '"') {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInAttributeValueSingleQuotes = function (c) {
        if (c === "'") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInAttributeValueNoQuotes = function (c) {
        if (whitespace(c) || c === ">") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 51 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeDeclaration = function (c) {
        this._state =
            c === "["
                ? 22 /* BeforeCdata1 */
                : c === "-"
                    ? 18 /* BeforeComment */
                    : 16 /* InDeclaration */;
    };
    Tokenizer.prototype._stateInDeclaration = function (c) {
        if (c === ">") {
            this._cbs.ondeclaration(this._getSection());
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateInProcessingInstruction = function (c) {
        if (c === ">") {
            this._cbs.onprocessinginstruction(this._getSection());
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateBeforeComment = function (c) {
        if (c === "-") {
            this._state = 19 /* InComment */;
            this._sectionStart = this._index + 1;
        }
        else {
            this._state = 16 /* InDeclaration */;
        }
    };
    Tokenizer.prototype._stateInComment = function (c) {
        if (c === "-")
            this._state = 20 /* AfterComment1 */;
    };
    Tokenizer.prototype._stateAfterComment1 = function (c) {
        if (c === "-") {
            this._state = 21 /* AfterComment2 */;
        }
        else {
            this._state = 19 /* InComment */;
        }
    };
    Tokenizer.prototype._stateAfterComment2 = function (c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c !== "-") {
            this._state = 19 /* InComment */;
        }
        // else: stay in AFTER_COMMENT_2 (`--->`)
    };
    Tokenizer.prototype._stateBeforeCdata6 = function (c) {
        if (c === "[") {
            this._state = 28 /* InCdata */;
            this._sectionStart = this._index + 1;
        }
        else {
            this._state = 16 /* InDeclaration */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateInCdata = function (c) {
        if (c === "]")
            this._state = 29 /* AfterCdata1 */;
    };
    Tokenizer.prototype._stateAfterCdata1 = function (c) {
        if (c === "]")
            this._state = 30 /* AfterCdata2 */;
        else
            this._state = 28 /* InCdata */;
    };
    Tokenizer.prototype._stateAfterCdata2 = function (c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c !== "]") {
            this._state = 28 /* InCdata */;
        }
        //else: stay in AFTER_CDATA_2 (`]]]>`)
    };
    Tokenizer.prototype._stateBeforeSpecial = function (c) {
        if (c === "c" || c === "C") {
            this._state = 33 /* BeforeScript1 */;
        }
        else if (c === "t" || c === "T") {
            this._state = 43 /* BeforeStyle1 */;
        }
        else {
            this._state = 3 /* InTagName */;
            this._index--; //consume the token again
        }
    };
    Tokenizer.prototype._stateBeforeSpecialEnd = function (c) {
        if (this._special === 2 /* Script */ && (c === "c" || c === "C")) {
            this._state = 38 /* AfterScript1 */;
        }
        else if (this._special === 3 /* Style */ &&
            (c === "t" || c === "T")) {
            this._state = 47 /* AfterStyle1 */;
        }
        else
            this._state = 1 /* Text */;
    };
    Tokenizer.prototype._stateBeforeScript5 = function (c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._special = 2 /* Script */;
        }
        this._state = 3 /* InTagName */;
        this._index--; //consume the token again
    };
    Tokenizer.prototype._stateAfterScript5 = function (c) {
        if (c === ">" || whitespace(c)) {
            this._special = 1 /* None */;
            this._state = 6 /* InClosingTagName */;
            this._sectionStart = this._index - 6;
            this._index--; //reconsume the token
        }
        else
            this._state = 1 /* Text */;
    };
    Tokenizer.prototype._stateBeforeStyle4 = function (c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._special = 3 /* Style */;
        }
        this._state = 3 /* InTagName */;
        this._index--; //consume the token again
    };
    Tokenizer.prototype._stateAfterStyle4 = function (c) {
        if (c === ">" || whitespace(c)) {
            this._special = 1 /* None */;
            this._state = 6 /* InClosingTagName */;
            this._sectionStart = this._index - 5;
            this._index--; //reconsume the token
        }
        else
            this._state = 1 /* Text */;
    };
    //for entities terminated with a semicolon
    Tokenizer.prototype._parseNamedEntityStrict = function () {
        //offset = 1
        if (this._sectionStart + 1 < this._index) {
            var entity = this._buffer.substring(this._sectionStart + 1, this._index), map = this._xmlMode ? xml_json_1.default : entities_json_1.default;
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                // @ts-ignore
                this._emitPartial(map[entity]);
                this._sectionStart = this._index + 1;
            }
        }
    };
    //parses legacy entities (without trailing semicolon)
    Tokenizer.prototype._parseLegacyEntity = function () {
        var start = this._sectionStart + 1;
        var limit = this._index - start;
        if (limit > 6)
            limit = 6; // The max length of legacy entities is 6
        while (limit >= 2) {
            // The min length of legacy entities is 2
            var entity = this._buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
                // @ts-ignore
                this._emitPartial(legacy_json_1.default[entity]);
                this._sectionStart += limit + 1;
                return;
            }
            else {
                limit--;
            }
        }
    };
    Tokenizer.prototype._stateInNamedEntity = function (c) {
        if (c === ";") {
            this._parseNamedEntityStrict();
            if (this._sectionStart + 1 < this._index && !this._xmlMode) {
                this._parseLegacyEntity();
            }
            this._state = this._baseState;
        }
        else if ((c < "a" || c > "z") &&
            (c < "A" || c > "Z") &&
            (c < "0" || c > "9")) {
            if (this._xmlMode || this._sectionStart + 1 === this._index) {
                // ignore
            }
            else if (this._baseState !== 1 /* Text */) {
                if (c !== "=") {
                    this._parseNamedEntityStrict();
                }
            }
            else {
                this._parseLegacyEntity();
            }
            this._state = this._baseState;
            this._index--;
        }
    };
    Tokenizer.prototype._decodeNumericEntity = function (offset, base) {
        var sectionStart = this._sectionStart + offset;
        if (sectionStart !== this._index) {
            //parse entity
            var entity = this._buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this._emitPartial(decode_codepoint_1.default(parsed));
            this._sectionStart = this._index;
        }
        else {
            this._sectionStart--;
        }
        this._state = this._baseState;
    };
    Tokenizer.prototype._stateInNumericEntity = function (c) {
        if (c === ";") {
            this._decodeNumericEntity(2, 10);
            this._sectionStart++;
        }
        else if (c < "0" || c > "9") {
            if (!this._xmlMode) {
                this._decodeNumericEntity(2, 10);
            }
            else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype._stateInHexEntity = function (c) {
        if (c === ";") {
            this._decodeNumericEntity(3, 16);
            this._sectionStart++;
        }
        else if ((c < "a" || c > "f") &&
            (c < "A" || c > "F") &&
            (c < "0" || c > "9")) {
            if (!this._xmlMode) {
                this._decodeNumericEntity(3, 16);
            }
            else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype._cleanup = function () {
        if (this._sectionStart < 0) {
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        }
        else if (this._running) {
            if (this._state === 1 /* Text */) {
                if (this._sectionStart !== this._index) {
                    this._cbs.ontext(this._buffer.substr(this._sectionStart));
                }
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            }
            else if (this._sectionStart === this._index) {
                //the section just started
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            }
            else {
                //remove everything unnecessary
                this._buffer = this._buffer.substr(this._sectionStart);
                this._index -= this._sectionStart;
                this._bufferOffset += this._sectionStart;
            }
            this._sectionStart = 0;
        }
    };
    //TODO make events conditional
    Tokenizer.prototype.write = function (chunk) {
        if (this._ended)
            this._cbs.onerror(Error(".write() after done!"));
        this._buffer += chunk;
        this._parse();
    };
    // Iterates through the buffer, calling the function corresponding to the current state.
    // States that are more likely to be hit are higher up, as a performance improvement.
    Tokenizer.prototype._parse = function () {
        while (this._index < this._buffer.length && this._running) {
            var c = this._buffer.charAt(this._index);
            if (this._state === 1 /* Text */) {
                this._stateText(c);
            }
            else if (this._state === 12 /* InAttributeValueDq */) {
                this._stateInAttributeValueDoubleQuotes(c);
            }
            else if (this._state === 9 /* InAttributeName */) {
                this._stateInAttributeName(c);
            }
            else if (this._state === 19 /* InComment */) {
                this._stateInComment(c);
            }
            else if (this._state === 8 /* BeforeAttributeName */) {
                this._stateBeforeAttributeName(c);
            }
            else if (this._state === 3 /* InTagName */) {
                this._stateInTagName(c);
            }
            else if (this._state === 6 /* InClosingTagName */) {
                this._stateInCloseingTagName(c);
            }
            else if (this._state === 2 /* BeforeTagName */) {
                this._stateBeforeTagName(c);
            }
            else if (this._state === 10 /* AfterAttributeName */) {
                this._stateAfterAttributeName(c);
            }
            else if (this._state === 13 /* InAttributeValueSq */) {
                this._stateInAttributeValueSingleQuotes(c);
            }
            else if (this._state === 11 /* BeforeAttributeValue */) {
                this._stateBeforeAttributeValue(c);
            }
            else if (this._state === 5 /* BeforeClosingTagName */) {
                this._stateBeforeCloseingTagName(c);
            }
            else if (this._state === 7 /* AfterClosingTagName */) {
                this._stateAfterCloseingTagName(c);
            }
            else if (this._state === 31 /* BeforeSpecial */) {
                this._stateBeforeSpecial(c);
            }
            else if (this._state === 20 /* AfterComment1 */) {
                this._stateAfterComment1(c);
            }
            else if (this._state === 14 /* InAttributeValueNq */) {
                this._stateInAttributeValueNoQuotes(c);
            }
            else if (this._state === 4 /* InSelfClosingTag */) {
                this._stateInSelfClosingTag(c);
            }
            else if (this._state === 16 /* InDeclaration */) {
                this._stateInDeclaration(c);
            }
            else if (this._state === 15 /* BeforeDeclaration */) {
                this._stateBeforeDeclaration(c);
            }
            else if (this._state === 21 /* AfterComment2 */) {
                this._stateAfterComment2(c);
            }
            else if (this._state === 18 /* BeforeComment */) {
                this._stateBeforeComment(c);
            }
            else if (this._state === 32 /* BeforeSpecialEnd */) {
                this._stateBeforeSpecialEnd(c);
            }
            else if (this._state === 38 /* AfterScript1 */) {
                stateAfterScript1(this, c);
            }
            else if (this._state === 39 /* AfterScript2 */) {
                stateAfterScript2(this, c);
            }
            else if (this._state === 40 /* AfterScript3 */) {
                stateAfterScript3(this, c);
            }
            else if (this._state === 33 /* BeforeScript1 */) {
                stateBeforeScript1(this, c);
            }
            else if (this._state === 34 /* BeforeScript2 */) {
                stateBeforeScript2(this, c);
            }
            else if (this._state === 35 /* BeforeScript3 */) {
                stateBeforeScript3(this, c);
            }
            else if (this._state === 36 /* BeforeScript4 */) {
                stateBeforeScript4(this, c);
            }
            else if (this._state === 37 /* BeforeScript5 */) {
                this._stateBeforeScript5(c);
            }
            else if (this._state === 41 /* AfterScript4 */) {
                stateAfterScript4(this, c);
            }
            else if (this._state === 42 /* AfterScript5 */) {
                this._stateAfterScript5(c);
            }
            else if (this._state === 43 /* BeforeStyle1 */) {
                stateBeforeStyle1(this, c);
            }
            else if (this._state === 28 /* InCdata */) {
                this._stateInCdata(c);
            }
            else if (this._state === 44 /* BeforeStyle2 */) {
                stateBeforeStyle2(this, c);
            }
            else if (this._state === 45 /* BeforeStyle3 */) {
                stateBeforeStyle3(this, c);
            }
            else if (this._state === 46 /* BeforeStyle4 */) {
                this._stateBeforeStyle4(c);
            }
            else if (this._state === 47 /* AfterStyle1 */) {
                stateAfterStyle1(this, c);
            }
            else if (this._state === 48 /* AfterStyle2 */) {
                stateAfterStyle2(this, c);
            }
            else if (this._state === 49 /* AfterStyle3 */) {
                stateAfterStyle3(this, c);
            }
            else if (this._state === 50 /* AfterStyle4 */) {
                this._stateAfterStyle4(c);
            }
            else if (this._state === 17 /* InProcessingInstruction */) {
                this._stateInProcessingInstruction(c);
            }
            else if (this._state === 53 /* InNamedEntity */) {
                this._stateInNamedEntity(c);
            }
            else if (this._state === 22 /* BeforeCdata1 */) {
                stateBeforeCdata1(this, c);
            }
            else if (this._state === 51 /* BeforeEntity */) {
                stateBeforeEntity(this, c);
            }
            else if (this._state === 23 /* BeforeCdata2 */) {
                stateBeforeCdata2(this, c);
            }
            else if (this._state === 24 /* BeforeCdata3 */) {
                stateBeforeCdata3(this, c);
            }
            else if (this._state === 29 /* AfterCdata1 */) {
                this._stateAfterCdata1(c);
            }
            else if (this._state === 30 /* AfterCdata2 */) {
                this._stateAfterCdata2(c);
            }
            else if (this._state === 25 /* BeforeCdata4 */) {
                stateBeforeCdata4(this, c);
            }
            else if (this._state === 26 /* BeforeCdata5 */) {
                stateBeforeCdata5(this, c);
            }
            else if (this._state === 27 /* BeforeCdata6 */) {
                this._stateBeforeCdata6(c);
            }
            else if (this._state === 55 /* InHexEntity */) {
                this._stateInHexEntity(c);
            }
            else if (this._state === 54 /* InNumericEntity */) {
                this._stateInNumericEntity(c);
            }
            else if (this._state === 52 /* BeforeNumericEntity */) {
                stateBeforeNumericEntity(this, c);
            }
            else {
                this._cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
        }
        this._cleanup();
    };
    Tokenizer.prototype.pause = function () {
        this._running = false;
    };
    Tokenizer.prototype.resume = function () {
        this._running = true;
        if (this._index < this._buffer.length) {
            this._parse();
        }
        if (this._ended) {
            this._finish();
        }
    };
    Tokenizer.prototype.end = function (chunk) {
        if (this._ended)
            this._cbs.onerror(Error(".end() after done!"));
        if (chunk)
            this.write(chunk);
        this._ended = true;
        if (this._running)
            this._finish();
    };
    Tokenizer.prototype._finish = function () {
        //if there is remaining data, emit it in a reasonable way
        if (this._sectionStart < this._index) {
            this._handleTrailingData();
        }
        this._cbs.onend();
    };
    Tokenizer.prototype._handleTrailingData = function () {
        var data = this._buffer.substr(this._sectionStart);
        if (this._state === 28 /* InCdata */ ||
            this._state === 29 /* AfterCdata1 */ ||
            this._state === 30 /* AfterCdata2 */) {
            this._cbs.oncdata(data);
        }
        else if (this._state === 19 /* InComment */ ||
            this._state === 20 /* AfterComment1 */ ||
            this._state === 21 /* AfterComment2 */) {
            this._cbs.oncomment(data);
        }
        else if (this._state === 53 /* InNamedEntity */ && !this._xmlMode) {
            this._parseLegacyEntity();
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state === 54 /* InNumericEntity */ && !this._xmlMode) {
            this._decodeNumericEntity(2, 10);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state === 55 /* InHexEntity */ && !this._xmlMode) {
            this._decodeNumericEntity(3, 16);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state !== 3 /* InTagName */ &&
            this._state !== 8 /* BeforeAttributeName */ &&
            this._state !== 11 /* BeforeAttributeValue */ &&
            this._state !== 10 /* AfterAttributeName */ &&
            this._state !== 9 /* InAttributeName */ &&
            this._state !== 13 /* InAttributeValueSq */ &&
            this._state !== 12 /* InAttributeValueDq */ &&
            this._state !== 14 /* InAttributeValueNq */ &&
            this._state !== 6 /* InClosingTagName */) {
            this._cbs.ontext(data);
        }
        //else, ignore remaining data
        //TODO add a way to remove current tag
    };
    Tokenizer.prototype.getAbsoluteIndex = function () {
        return this._bufferOffset + this._index;
    };
    Tokenizer.prototype._getSection = function () {
        return this._buffer.substring(this._sectionStart, this._index);
    };
    Tokenizer.prototype._emitToken = function (name) {
        this._cbs[name](this._getSection());
        this._sectionStart = -1;
    };
    Tokenizer.prototype._emitPartial = function (value) {
        if (this._baseState !== 1 /* Text */) {
            this._cbs.onattribdata(value); //TODO implement the new event
        }
        else {
            this._cbs.ontext(value);
        }
    };
    return Tokenizer;
}());
exports.default = Tokenizer;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/htmlparser2/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Parser_1 = __webpack_require__(/*! ./Parser */ "./node_modules/htmlparser2/lib/Parser.js");
exports.Parser = Parser_1.Parser;
var domhandler_1 = __webpack_require__(/*! domhandler */ "./node_modules/domhandler/lib/index.js");
exports.DomHandler = domhandler_1.DomHandler;
exports.DefaultHandler = domhandler_1.DomHandler;
// Helper methods
/**
 * Parses data, returns the resulting DOM.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDOM(data, options) {
    var handler = new domhandler_1.DomHandler(void 0, options);
    new Parser_1.Parser(handler, options).end(data);
    return handler.dom;
}
exports.parseDOM = parseDOM;
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDomStream(cb, options, elementCb) {
    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
    return new Parser_1.Parser(handler, options);
}
exports.createDomStream = createDomStream;
var Tokenizer_1 = __webpack_require__(/*! ./Tokenizer */ "./node_modules/htmlparser2/lib/Tokenizer.js");
exports.Tokenizer = Tokenizer_1.default;
var ElementType = __importStar(__webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js"));
exports.ElementType = ElementType;
/**
 * List of all events that the parser emits.
 *
 * Format: eventname: number of arguments.
 */
exports.EVENTS = {
    attribute: 2,
    cdatastart: 0,
    cdataend: 0,
    text: 1,
    processinginstruction: 2,
    comment: 1,
    commentend: 0,
    closetag: 1,
    opentag: 2,
    opentagname: 1,
    error: 1,
    end: 0
};
/*
    All of the following exports exist for backwards-compatibility.
    They should probably be removed eventually.
*/
__export(__webpack_require__(/*! ./FeedHandler */ "./node_modules/htmlparser2/lib/FeedHandler.js"));
__export(__webpack_require__(/*! ./WritableStream */ 0));
__export(__webpack_require__(/*! ./CollectingHandler */ "./node_modules/htmlparser2/lib/CollectingHandler.js"));
var DomUtils = __importStar(__webpack_require__(/*! domutils */ "./node_modules/domutils/lib/index.js"));
exports.DomUtils = DomUtils;
var FeedHandler_1 = __webpack_require__(/*! ./FeedHandler */ "./node_modules/htmlparser2/lib/FeedHandler.js");
exports.RssHandler = FeedHandler_1.FeedHandler;


/***/ }),

/***/ "./src/compiler/dom.ts":
/*!*****************************!*\
  !*** ./src/compiler/dom.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.insert = function (child, parent, anchor) {
    if (anchor != null) {
        parent.insertBefore(child, anchor);
    }
    else {
        parent.appendChild(child);
    }
};
exports.createElement = function (tag) { return document.createElement(tag); };
exports.createText = function (text) { return document.createTextNode(text); };
exports.querySelector = function (selector) { return document.querySelector(selector); };
exports.createComment = function (text) { return document.createComment(text); };


/***/ }),

/***/ "./src/compiler/index.ts":
/*!*******************************!*\
  !*** ./src/compiler/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var render_1 = __webpack_require__(/*! ./render */ "./src/compiler/render.ts");
exports.createApp = render_1.createApp;


/***/ }),

/***/ "./src/compiler/paser.ts":
/*!*******************************!*\
  !*** ./src/compiler/paser.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var htmlparser2_1 = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");
function parse(template) {
    return new Promise(function (resolve, reject) {
        var handler = new htmlparser2_1.DomHandler(function (error, dom) {
            if (error) {
                reject(error);
            }
            else {
                resolve(dom);
            }
        }, {
            normalizeWhitespace: true
        });
        var parser = new htmlparser2_1.Parser(handler);
        parser.write(template);
        parser.end();
    });
}
exports.parse = parse;


/***/ }),

/***/ "./src/compiler/props.ts":
/*!*******************************!*\
  !*** ./src/compiler/props.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/compiler/utils.ts");
var dom_1 = __webpack_require__(/*! ./dom */ "./src/compiler/dom.ts");
var delimiters = ["{{", "}}"];
function patchClass(el, value) {
    el.className = value;
}
function patchAttr(el, key, value) {
    if (value == null) {
        el.removeAttribute(key);
    }
    else {
        el.setAttribute(key, value);
    }
}
function patchStyle(el, value) {
    var attr = value.split(';');
    for (var _i = 0, attr_1 = attr; _i < attr_1.length; _i++) {
        var i = attr_1[_i];
        ;
        el.style[i.split(':')[0]] = i.split(':')[1];
    }
}
function patchEvent(el, key, value, context) {
    ;
    el["on" + key.slice(1)] = function () {
        context.methods[value].call(context);
    };
}
function patchInterpolationText(insertText, el) {
    if (insertText) {
        var text = dom_1.createText(insertText);
        dom_1.insert(text, el);
    }
    return '';
}
function patchProps(el, key, value, context) {
    switch (true) {
        case key === 'class':
            patchClass(el, value);
            break;
        case key === 'style':
            patchStyle(el, value);
            break;
        case /^:/.test(key):
            patchEvent(el, key, value, context);
    }
}
exports.patchProps = patchProps;
function patchInterpolation(el, result, context) {
    var insertText = '';
    var rawResult = result;
    while (rawResult.length) {
        if (utils_1.startsWith(rawResult, delimiters[0])) {
            insertText = patchInterpolationText(insertText, el);
            var open_1 = delimiters[0], close_1 = delimiters[1];
            var startIndex = open_1.length;
            var closeIndex = rawResult.indexOf(close_1, open_1.length);
            if (closeIndex !== -1) {
                var fn = "return " + rawResult.slice(startIndex, closeIndex);
                var result_1 = new Function(fn);
                insertText = patchInterpolationText(result_1.call(context.value), el);
                rawResult = rawResult.slice(closeIndex + close_1.length);
            }
        }
        else {
            insertText += rawResult[0];
            rawResult = rawResult.slice(1);
        }
    }
    insertText = patchInterpolationText(insertText, el);
}
exports.patchInterpolation = patchInterpolation;


/***/ }),

/***/ "./src/compiler/render.ts":
/*!********************************!*\
  !*** ./src/compiler/render.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var effect_1 = __webpack_require__(/*! ../reactivity/effect */ "./src/reactivity/effect.ts");
var paser_1 = __webpack_require__(/*! ./paser */ "./src/compiler/paser.ts");
var dom_1 = __webpack_require__(/*! ./dom */ "./src/compiler/dom.ts");
var props_1 = __webpack_require__(/*! ./props */ "./src/compiler/props.ts");
var NODETYPE;
(function (NODETYPE) {
    NODETYPE["APP"] = "app";
    NODETYPE["TAG"] = "tag";
    NODETYPE["TEXT"] = "text";
    NODETYPE["COMPONENT"] = "component";
})(NODETYPE || (NODETYPE = {}));
var appOption = {};
var devFragmentID = 0;
function createApp(context, container, option) {
    if (option === void 0) { option = {}; }
    if (option.onLanuch) {
        option.onLanuch(option);
    }
    appOption = option;
    patchApp();
    patchComponent(context, container);
    return context;
}
exports.createApp = createApp;
function patch(node, container, type, context, anchor) {
    switch (type) {
        case "tag":
            if (context.components && context.components[node.name]) {
                patchComponent(context.components[node.name], container);
            }
            else {
                patchElement(node, container, context, anchor);
            }
            break;
        case "text":
            patchText(node, container, context);
            break;
    }
}
function patchApp() {
    appOption.mixin = [];
    appOption.store = {};
}
function patchComponent(context, container) {
    var template = dom_1.querySelector(context.template);
    var anchor = patchFragment(container);
    paser_1.parse(template.innerHTML.trim()).then(function (res) {
        effect_1.effect(function () {
            var mounted = context.mounted;
            if (!mounted && context.onLoad) {
                context.onLoad.call(context);
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var i = res_1[_i];
                    patch(i, container, i.type, context, anchor);
                }
            }
            else {
                for (var _a = 0, res_2 = res; _a < res_2.length; _a++) {
                    var i = res_2[_a];
                    patch(i, container, i.type, context, anchor);
                }
            }
            if (!mounted && context.onShow) {
                context.mounted = true;
                context.onShow.call(context);
            }
            else if (mounted && context.onUpdate) {
                context.onUpdate.call(context);
            }
        });
    });
}
function patchFragment(container) {
    var fragmentStartAnchor = dom_1.createComment("fragment-" + devFragmentID + "-start");
    var fragmentEndAnchor = dom_1.createComment("fragment-" + devFragmentID + "-end");
    devFragmentID++;
    dom_1.insert(fragmentStartAnchor, container);
    dom_1.insert(fragmentEndAnchor, container);
    return fragmentEndAnchor;
}
function patchElement(node, container, context, anchor) {
    var el = dom_1.createElement(node.name);
    for (var i in node.attribs) {
        props_1.patchProps(el, i, node.attribs[i], context);
    }
    if (anchor !== null) {
        dom_1.insert(el, container, anchor);
    }
    else {
        dom_1.insert(el, container);
    }
    patchChildren(node.children, el, context);
}
function patchChildren(children, container, context) {
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var i = children_1[_i];
        patch(i, container, i.type, context);
    }
}
function patchText(node, container, context) {
    props_1.patchInterpolation(container, node.data, context);
}


/***/ }),

/***/ "./src/compiler/utils.ts":
/*!*******************************!*\
  !*** ./src/compiler/utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.startsWith = function (source, searchString) {
    return source.startsWith(searchString);
};


/***/ }),

/***/ "./src/easy.ts":
/*!*********************!*\
  !*** ./src/easy.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(/*! ./compiler */ "./src/compiler/index.ts"));
__export(__webpack_require__(/*! ./reactivity */ "./src/reactivity/index.ts"));


/***/ }),

/***/ "./src/reactivity/collectionHandlers.ts":
/*!**********************************************!*\
  !*** ./src/reactivity/collectionHandlers.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/reactivity/utils.ts");
var effect_1 = __webpack_require__(/*! ./effect */ "./src/reactivity/effect.ts");
var reactive_1 = __webpack_require__(/*! ./reactive */ "./src/reactivity/reactive.ts");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(function (key) { return Symbol[key]; })
    .filter(utils_1.isSymbol));
function get(target, key, receiver) {
    var res = Reflect.get(target, key, receiver);
    if (utils_1.isSymbol(key) && builtInSymbols.has(key)) {
        return res;
    }
    effect_1.track(target, "get", key);
    return utils_1.isObject(res) ? reactive_1.reactive(res) : res;
}
function set(target, key, value, receiver) {
    value = reactive_1.toRaw(value);
    var oldValue = target[key];
    var hadKey = utils_1.hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver);
    if (target === reactive_1.toRaw(receiver)) {
        if (true) {
            var extraInfo = { oldValue: oldValue, newValue: value };
            if (!hadKey) {
                effect_1.trigger(target, "add", key, extraInfo);
            }
            else if (utils_1.hasChanged(value, oldValue)) {
                effect_1.trigger(target, "set", key, extraInfo);
            }
        }
        else {}
    }
    return result;
}
function deleteProperty(target, key) {
    var hadKey = utils_1.hasOwn(target, key);
    var oldValue = target[key];
    var result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        if (true) {
            effect_1.trigger(target, "delete", key, { oldValue: oldValue });
        }
        else {}
    }
    return result;
}
function has(target, key) {
    var result = Reflect.has(target, key);
    effect_1.track(target, "has", key);
    return result;
}
function ownKeys(target) {
    effect_1.track(target, "iterate");
    return Reflect.ownKeys(target);
}
exports.collectionHandlers = {
    get: get,
    set: set,
    deleteProperty: deleteProperty,
    has: has,
    ownKeys: ownKeys
};


/***/ }),

/***/ "./src/reactivity/effect.ts":
/*!**********************************!*\
  !*** ./src/reactivity/effect.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var reactive_1 = __webpack_require__(/*! ./reactive */ "./src/reactivity/reactive.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/reactivity/utils.ts");
var OperationTypes;
(function (OperationTypes) {
    OperationTypes["SET"] = "set";
    OperationTypes["ADD"] = "add";
    OperationTypes["DELETE"] = "delete";
    OperationTypes["CLEAR"] = "clear";
    OperationTypes["GET"] = "get";
    OperationTypes["HAS"] = "has";
    OperationTypes["ITERATE"] = "iterate";
})(OperationTypes = exports.OperationTypes || (exports.OperationTypes = {}));
exports.effectStack = [];
exports.ITERATE_KEY = Symbol('iterate');
function track(target, type, key) {
    if (exports.effectStack.length === 0) {
        return;
    }
    var effect = exports.effectStack[exports.effectStack.length - 1];
    if (type === "iterate") {
        key = exports.ITERATE_KEY;
    }
    var depsMap = reactive_1.targetMap.get(target);
    if (depsMap === void 0) {
        reactive_1.targetMap.set(target, (depsMap = new Map()));
    }
    var dep = depsMap.get(key);
    if (dep === void 0) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(effect)) {
        dep.add(effect);
        effect.deps.push(dep);
        if ( true && effect.options.onTrack) {
            effect.options.onTrack({
                effect: effect,
                target: target,
                type: type,
                key: key
            });
        }
    }
}
exports.track = track;
function trigger(target, type, key, extraInfo) {
    var depsMap = reactive_1.targetMap.get(target);
    if (depsMap === void 0) {
        return;
    }
    var effects = new Set();
    var computedRunners = new Set();
    if (type === "clear") {
        depsMap.forEach(function (dep) {
            addRunners(effects, computedRunners, dep);
        });
    }
    else {
        if (key !== void 0) {
            addRunners(effects, computedRunners, depsMap.get(key));
        }
        if (type === "add" || type === "delete") {
            var iterationKey = utils_1.isArray(target) ? 'length' : exports.ITERATE_KEY;
            addRunners(effects, computedRunners, depsMap.get(iterationKey));
        }
    }
    var run = function (effect) {
        scheduleRun(effect, target, type, key, extraInfo);
    };
    computedRunners.forEach(run);
    effects.forEach(run);
}
exports.trigger = trigger;
function addRunners(effects, computedRunners, effectsToAdd) {
    if (effectsToAdd !== void 0) {
        effectsToAdd.forEach(function (effect) {
            if (effect.options.computed) {
                computedRunners.add(effect);
            }
            else {
                effects.add(effect);
            }
        });
    }
}
function scheduleRun(effect, target, type, key, extraInfo) {
    if ( true && effect.options.onTrigger) {
        var event_1 = {
            effect: effect,
            target: target,
            key: key,
            type: type
        };
        effect.options.onTrigger(extraInfo ? utils_1.extend(event_1, extraInfo) : event_1);
    }
    if (effect.options.scheduler !== void 0) {
        effect.options.scheduler(effect);
    }
    else {
        effect();
    }
}
function createReactiveEffect(fn, options) {
    var effect = function reactiveEffect() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return run(effect, fn, args);
    };
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function run(effect, fn, args) {
    if (!effect.active) {
        return fn.apply(void 0, args);
    }
    if (!exports.effectStack.includes(effect)) {
        cleanup(effect);
        try {
            exports.effectStack.push(effect);
            return fn.apply(void 0, args);
        }
        finally {
            exports.effectStack.pop();
        }
    }
}
function cleanup(effect) {
    var deps = effect.deps;
    if (deps.length) {
        for (var i = 0; i < deps.length; i++) {
            deps[i]["delete"](effect);
        }
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (options === void 0) { options = utils_1.EMPTY_OBJ; }
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    var effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
exports.effect = effect;
function isEffect(fn) {
    return fn != null && fn._isEffect === true;
}
exports.isEffect = isEffect;


/***/ }),

/***/ "./src/reactivity/index.ts":
/*!*********************************!*\
  !*** ./src/reactivity/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var reactive_1 = __webpack_require__(/*! ./reactive */ "./src/reactivity/reactive.ts");
exports.reactive = reactive_1.reactive;
var effect_1 = __webpack_require__(/*! ./effect */ "./src/reactivity/effect.ts");
exports.effect = effect_1.effect;


/***/ }),

/***/ "./src/reactivity/normalHandlers.ts":
/*!******************************************!*\
  !*** ./src/reactivity/normalHandlers.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/reactivity/utils.ts");
var effect_1 = __webpack_require__(/*! ./effect */ "./src/reactivity/effect.ts");
var reactive_1 = __webpack_require__(/*! ./reactive */ "./src/reactivity/reactive.ts");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(function (key) { return Symbol[key]; })
    .filter(utils_1.isSymbol));
function get(target, key, receiver) {
    var res = Reflect.get(target, key, receiver);
    if (utils_1.isSymbol(key) && builtInSymbols.has(key)) {
        return res;
    }
    effect_1.track(target, "get", key);
    return utils_1.isObject(res) ? reactive_1.reactive(res) : res;
}
function set(target, key, value, receiver) {
    value = reactive_1.toRaw(value);
    var oldValue = target[key];
    var hadKey = utils_1.hasOwn(target, key);
    var result = Reflect.set(target, key, value, receiver);
    if (target === reactive_1.toRaw(receiver)) {
        if (true) {
            var extraInfo = { oldValue: oldValue, newValue: value };
            if (!hadKey) {
                effect_1.trigger(target, "add", key, extraInfo);
            }
            else if (utils_1.hasChanged(value, oldValue)) {
                effect_1.trigger(target, "set", key, extraInfo);
            }
        }
        else {}
    }
    return result;
}
function deleteProperty(target, key) {
    var hadKey = utils_1.hasOwn(target, key);
    var oldValue = target[key];
    var result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        if (true) {
            effect_1.trigger(target, "delete", key, { oldValue: oldValue });
        }
        else {}
    }
    return result;
}
function has(target, key) {
    var result = Reflect.has(target, key);
    effect_1.track(target, "has", key);
    return result;
}
function ownKeys(target) {
    effect_1.track(target, "iterate");
    return Reflect.ownKeys(target);
}
exports.normalHandlers = {
    get: get,
    set: set,
    deleteProperty: deleteProperty,
    has: has,
    ownKeys: ownKeys
};


/***/ }),

/***/ "./src/reactivity/reactive.ts":
/*!************************************!*\
  !*** ./src/reactivity/reactive.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var normalHandlers_1 = __webpack_require__(/*! ./normalHandlers */ "./src/reactivity/normalHandlers.ts");
var collectionHandlers_1 = __webpack_require__(/*! ./collectionHandlers */ "./src/reactivity/collectionHandlers.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/reactivity/utils.ts");
var collectionTypes = new Set([Set, Map, WeakMap, WeakSet]);
var rawToReactive = new WeakMap();
var reactiveToRaw = new WeakMap();
var isObservableType = utils_1.makeMap('Object,Array,Map,Set,WeakMap,WeakSet');
function reactive(target) {
    return createReactiveObject(target, rawToReactive, reactiveToRaw, normalHandlers_1.normalHandlers, collectionHandlers_1.collectionHandlers);
}
exports.reactive = reactive;
function createReactiveObject(target, toProxy, toRaw, normalHandlers, collectionHandlers) {
    if (!utils_1.isObject(target)) {
        if (true) {
            console.warn("value cannot be made reactive: " + String(target));
        }
        return target;
    }
    var observed = toProxy.get(target);
    if (observed !== void 0) {
        return observed;
    }
    if (toRaw.has(target)) {
        return target;
    }
    if (!isObservableType(utils_1.toRawType(target))) {
        return target;
    }
    observed = new Proxy(target, collectionTypes.has(target.constructor)
        ? collectionHandlers
        : normalHandlers);
    toProxy.set(target, observed);
    toRaw.set(observed, target);
    if (!exports.targetMap.has(target)) {
        exports.targetMap.set(target, new Map());
    }
    return observed;
}
exports.targetMap = new WeakMap();
function toRaw(observed) {
    return reactiveToRaw.get(observed) || observed;
}
exports.toRaw = toRaw;


/***/ }),

/***/ "./src/reactivity/utils.ts":
/*!*********************************!*\
  !*** ./src/reactivity/utils.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.isObject = function (val) {
    return val !== null && typeof val === 'object';
};
exports.toRawType = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
};
exports.isSymbol = function (val) { return typeof val === 'symbol'; };
function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) { return !!map[val.toLowerCase()]; } : function (val) { return !!map[val]; };
}
exports.makeMap = makeMap;
exports.isArray = Array.isArray;
exports.extend = function (a, b) {
    for (var key in b) {
        ;
        a[key] = b[key];
    }
    return a;
};
exports.hasOwn = function (val, key) { return Object.prototype.hasOwnProperty.call(val, key); };
exports.hasChanged = function (value, oldValue) {
    return value !== oldValue && (value === value || oldValue === oldValue);
};
exports.EMPTY_OBJ =  true
    ? Object.freeze({})
    : undefined;


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21lbGVtZW50dHlwZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21oYW5kbGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90YWd0eXBlcy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Db2xsZWN0aW5nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9GZWVkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9NdWx0aXBsZXhIYW5kbGVyLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9kb20udHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2NvbXBpbGVyL3Bhc2VyLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvY29tcGlsZXIvcHJvcHMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2Vhc3kudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L2NvbGxlY3Rpb25IYW5kbGVycy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvZWZmZWN0LnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvbm9ybWFsSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L3JlYWN0aXZlLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDMUMsZUFBZSxtQkFBTyxD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Q0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hNYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLDJEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUNBQXlDLG1CQUFPLENBQUMsc0ZBQStCO0FBQ2hGLHNDQUFzQyxtQkFBTyxDQUFDLHVGQUFpQztBQUMvRSxvQ0FBb0MsbUJBQU8sQ0FBQyxtRkFBK0I7QUFDM0UsaUNBQWlDLG1CQUFPLENBQUMsNkVBQTRCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxMUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsMERBQVU7QUFDakM7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywwREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEtBQU87SUFDL0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxTQUFFOzs7Ozs7Ozs7Ozs7QUN4Q04sZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZWFzeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlYXN5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVhc3lcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Vhc3kudHNcIik7XG4iLCIvKlxuICBNb2R1bGUgZGVwZW5kZW5jaWVzXG4qL1xudmFyIEVsZW1lbnRUeXBlID0gcmVxdWlyZSgnZG9tZWxlbWVudHR5cGUnKTtcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2VudGl0aWVzJyk7XG5cbi8qIG1peGVkLWNhc2UgU1ZHIGFuZCBNYXRoTUwgdGFncyAmIGF0dHJpYnV0ZXNcbiAgIHJlY29nbml6ZWQgYnkgdGhlIEhUTUwgcGFyc2VyLCBzZWVcbiAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNwYXJzaW5nLW1haW4taW5mb3JlaWduXG4qL1xudmFyIGZvcmVpZ25OYW1lcyA9IHJlcXVpcmUoJy4vZm9yZWlnbk5hbWVzLmpzb24nKTtcbmZvcmVpZ25OYW1lcy5lbGVtZW50TmFtZXMuX19wcm90b19fID0gbnVsbDsgLyogdXNlIGFzIGEgc2ltcGxlIGRpY3Rpb25hcnkgKi9cbmZvcmVpZ25OYW1lcy5hdHRyaWJ1dGVOYW1lcy5fX3Byb3RvX18gPSBudWxsO1xuXG52YXIgdW5lbmNvZGVkRWxlbWVudHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgc3R5bGU6IHRydWUsXG4gIHNjcmlwdDogdHJ1ZSxcbiAgeG1wOiB0cnVlLFxuICBpZnJhbWU6IHRydWUsXG4gIG5vZW1iZWQ6IHRydWUsXG4gIG5vZnJhbWVzOiB0cnVlLFxuICBwbGFpbnRleHQ6IHRydWUsXG4gIG5vc2NyaXB0OiB0cnVlXG59O1xuXG4vKlxuICBGb3JtYXQgYXR0cmlidXRlc1xuKi9cbmZ1bmN0aW9uIGZvcm1hdEF0dHJzKGF0dHJpYnV0ZXMsIG9wdHMpIHtcbiAgaWYgKCFhdHRyaWJ1dGVzKSByZXR1cm47XG5cbiAgdmFyIG91dHB1dCA9ICcnO1xuICB2YXIgdmFsdWU7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhdHRyaWJ1dGVzXG4gIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgaWYgKG91dHB1dCkge1xuICAgICAgb3V0cHV0ICs9ICcgJztcbiAgICB9XG5cbiAgICBpZiAob3B0cy54bWxNb2RlID09PSAnZm9yZWlnbicpIHtcbiAgICAgIC8qIGZpeCB1cCBtaXhlZC1jYXNlIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICAgICAga2V5ID0gZm9yZWlnbk5hbWVzLmF0dHJpYnV0ZU5hbWVzW2tleV0gfHwga2V5O1xuICAgIH1cbiAgICBvdXRwdXQgKz0ga2V5O1xuICAgIGlmICgodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnKSB8fCBvcHRzLnhtbE1vZGUpIHtcbiAgICAgIG91dHB1dCArPVxuICAgICAgICAnPVwiJyArXG4gICAgICAgIChvcHRzLmRlY29kZUVudGl0aWVzXG4gICAgICAgICAgPyBlbnRpdGllcy5lbmNvZGVYTUwodmFsdWUpXG4gICAgICAgICAgOiB2YWx1ZS5yZXBsYWNlKC9cXFwiL2csICcmcXVvdDsnKSkgK1xuICAgICAgICAnXCInO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qXG4gIFNlbGYtZW5jbG9zaW5nIHRhZ3MgKHN0b2xlbiBmcm9tIG5vZGUtaHRtbHBhcnNlcilcbiovXG52YXIgc2luZ2xlVGFnID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIGFyZWE6IHRydWUsXG4gIGJhc2U6IHRydWUsXG4gIGJhc2Vmb250OiB0cnVlLFxuICBicjogdHJ1ZSxcbiAgY29sOiB0cnVlLFxuICBjb21tYW5kOiB0cnVlLFxuICBlbWJlZDogdHJ1ZSxcbiAgZnJhbWU6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGlucHV0OiB0cnVlLFxuICBpc2luZGV4OiB0cnVlLFxuICBrZXlnZW46IHRydWUsXG4gIGxpbms6IHRydWUsXG4gIG1ldGE6IHRydWUsXG4gIHBhcmFtOiB0cnVlLFxuICBzb3VyY2U6IHRydWUsXG4gIHRyYWNrOiB0cnVlLFxuICB3YnI6IHRydWVcbn07XG5cbnZhciByZW5kZXIgPSAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb20sIG9wdHMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGRvbSkgJiYgIWRvbS5jaGVlcmlvKSBkb20gPSBbZG9tXTtcbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgdmFyIG91dHB1dCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW0gPSBkb21baV07XG5cbiAgICBpZiAoZWxlbS50eXBlID09PSAncm9vdCcpIG91dHB1dCArPSByZW5kZXIoZWxlbS5jaGlsZHJlbiwgb3B0cyk7XG4gICAgZWxzZSBpZiAoRWxlbWVudFR5cGUuaXNUYWcoZWxlbSkpIG91dHB1dCArPSByZW5kZXJUYWcoZWxlbSwgb3B0cyk7XG4gICAgZWxzZSBpZiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5EaXJlY3RpdmUpXG4gICAgICBvdXRwdXQgKz0gcmVuZGVyRGlyZWN0aXZlKGVsZW0pO1xuICAgIGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuQ29tbWVudCkgb3V0cHV0ICs9IHJlbmRlckNvbW1lbnQoZWxlbSk7XG4gICAgZWxzZSBpZiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5DREFUQSkgb3V0cHV0ICs9IHJlbmRlckNkYXRhKGVsZW0pO1xuICAgIGVsc2Ugb3V0cHV0ICs9IHJlbmRlclRleHQoZWxlbSwgb3B0cyk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufSk7XG5cbnZhciBmb3JlaWduTW9kZUludGVncmF0aW9uUG9pbnRzID0gW1xuICAnbWknLFxuICAnbW8nLFxuICAnbW4nLFxuICAnbXMnLFxuICAnbXRleHQnLFxuICAnYW5ub3RhdGlvbi14bWwnLFxuICAnZm9yZWlnbk9iamVjdCcsXG4gICdkZXNjJyxcbiAgJ3RpdGxlJ1xuXTtcblxuZnVuY3Rpb24gcmVuZGVyVGFnKGVsZW0sIG9wdHMpIHtcbiAgLy8gSGFuZGxlIFNWRyAvIE1hdGhNTCBpbiBIVE1MXG4gIGlmIChvcHRzLnhtbE1vZGUgPT09ICdmb3JlaWduJykge1xuICAgIC8qIGZpeCB1cCBtaXhlZC1jYXNlIGVsZW1lbnQgbmFtZXMgKi9cbiAgICBlbGVtLm5hbWUgPSBmb3JlaWduTmFtZXMuZWxlbWVudE5hbWVzW2VsZW0ubmFtZV0gfHwgZWxlbS5uYW1lO1xuICAgIC8qIGV4aXQgZm9yZWlnbiBtb2RlIGF0IGludGVncmF0aW9uIHBvaW50cyAqL1xuICAgIGlmIChcbiAgICAgIGVsZW0ucGFyZW50ICYmXG4gICAgICBmb3JlaWduTW9kZUludGVncmF0aW9uUG9pbnRzLmluZGV4T2YoZWxlbS5wYXJlbnQubmFtZSkgPj0gMFxuICAgIClcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzLCB7IHhtbE1vZGU6IGZhbHNlIH0pO1xuICB9XG4gIGlmICghb3B0cy54bWxNb2RlICYmIFsnc3ZnJywgJ21hdGgnXS5pbmRleE9mKGVsZW0ubmFtZSkgPj0gMCkge1xuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzLCB7IHhtbE1vZGU6ICdmb3JlaWduJyB9KTtcbiAgfVxuXG4gIHZhciB0YWcgPSAnPCcgKyBlbGVtLm5hbWU7XG4gIHZhciBhdHRyaWJzID0gZm9ybWF0QXR0cnMoZWxlbS5hdHRyaWJzLCBvcHRzKTtcblxuICBpZiAoYXR0cmlicykge1xuICAgIHRhZyArPSAnICcgKyBhdHRyaWJzO1xuICB9XG5cbiAgaWYgKG9wdHMueG1sTW9kZSAmJiAoIWVsZW0uY2hpbGRyZW4gfHwgZWxlbS5jaGlsZHJlbi5sZW5ndGggPT09IDApKSB7XG4gICAgdGFnICs9ICcvPic7XG4gIH0gZWxzZSB7XG4gICAgdGFnICs9ICc+JztcbiAgICBpZiAoZWxlbS5jaGlsZHJlbikge1xuICAgICAgdGFnICs9IHJlbmRlcihlbGVtLmNoaWxkcmVuLCBvcHRzKTtcbiAgICB9XG5cbiAgICBpZiAoIXNpbmdsZVRhZ1tlbGVtLm5hbWVdIHx8IG9wdHMueG1sTW9kZSkge1xuICAgICAgdGFnICs9ICc8LycgKyBlbGVtLm5hbWUgKyAnPic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhZztcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGlyZWN0aXZlKGVsZW0pIHtcbiAgcmV0dXJuICc8JyArIGVsZW0uZGF0YSArICc+Jztcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGV4dChlbGVtLCBvcHRzKSB7XG4gIHZhciBkYXRhID0gZWxlbS5kYXRhIHx8ICcnO1xuXG4gIC8vIGlmIGVudGl0aWVzIHdlcmVuJ3QgZGVjb2RlZCwgbm8gbmVlZCB0byBlbmNvZGUgdGhlbSBiYWNrXG4gIGlmIChcbiAgICBvcHRzLmRlY29kZUVudGl0aWVzICYmXG4gICAgIShlbGVtLnBhcmVudCAmJiBlbGVtLnBhcmVudC5uYW1lIGluIHVuZW5jb2RlZEVsZW1lbnRzKVxuICApIHtcbiAgICBkYXRhID0gZW50aXRpZXMuZW5jb2RlWE1MKGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNkYXRhKGVsZW0pIHtcbiAgcmV0dXJuICc8IVtDREFUQVsnICsgZWxlbS5jaGlsZHJlblswXS5kYXRhICsgJ11dPic7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbW1lbnQoZWxlbSkge1xuICByZXR1cm4gJzwhLS0nICsgZWxlbS5kYXRhICsgJy0tPic7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVGVzdHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGEgdGFnIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBFbGVtZW50IHRvIHRlc3RcbiAqL1xuZnVuY3Rpb24gaXNUYWcoZWxlbSkge1xuICAgIHJldHVybiAoZWxlbS50eXBlID09PSBcInRhZ1wiIC8qIFRhZyAqLyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IFwic2NyaXB0XCIgLyogU2NyaXB0ICovIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gXCJzdHlsZVwiIC8qIFN0eWxlICovKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbi8vIEV4cG9ydHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5leHBvcnRzLlRleHQgPSBcInRleHRcIiAvKiBUZXh0ICovOyAvL1RleHRcbmV4cG9ydHMuRGlyZWN0aXZlID0gXCJkaXJlY3RpdmVcIiAvKiBEaXJlY3RpdmUgKi87IC8vPD8gLi4uID8+XG5leHBvcnRzLkNvbW1lbnQgPSBcImNvbW1lbnRcIiAvKiBDb21tZW50ICovOyAvLzwhLS0gLi4uIC0tPlxuZXhwb3J0cy5TY3JpcHQgPSBcInNjcmlwdFwiIC8qIFNjcmlwdCAqLzsgLy88c2NyaXB0PiB0YWdzXG5leHBvcnRzLlN0eWxlID0gXCJzdHlsZVwiIC8qIFN0eWxlICovOyAvLzxzdHlsZT4gdGFnc1xuZXhwb3J0cy5UYWcgPSBcInRhZ1wiIC8qIFRhZyAqLzsgLy9BbnkgdGFnXG5leHBvcnRzLkNEQVRBID0gXCJjZGF0YVwiIC8qIENEQVRBICovOyAvLzwhW0NEQVRBWyAuLi4gXV0+XG5leHBvcnRzLkRvY3R5cGUgPSBcImRvY3R5cGVcIiAvKiBEb2N0eXBlICovO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbm9kZV8xID0gcmVxdWlyZShcIi4vbm9kZVwiKTtcbmV4cG9ydHMuTm9kZSA9IG5vZGVfMS5Ob2RlO1xuZXhwb3J0cy5FbGVtZW50ID0gbm9kZV8xLkVsZW1lbnQ7XG5leHBvcnRzLkRhdGFOb2RlID0gbm9kZV8xLkRhdGFOb2RlO1xuZXhwb3J0cy5Ob2RlV2l0aENoaWxkcmVuID0gbm9kZV8xLk5vZGVXaXRoQ2hpbGRyZW47XG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccysvZztcbi8vIERlZmF1bHQgb3B0aW9uc1xudmFyIGRlZmF1bHRPcHRzID0ge1xuICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IGZhbHNlLFxuICAgIHdpdGhTdGFydEluZGljZXM6IGZhbHNlLFxuICAgIHdpdGhFbmRJbmRpY2VzOiBmYWxzZVxufTtcbnZhciBEb21IYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIGEgbmV3IERvbUhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGFyc2luZyBoYXMgY29tcGxldGVkLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFNldHRpbmdzIGZvciB0aGUgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gZWxlbWVudENCIENhbGxiYWNrIHdoZW5ldmVyIGEgdGFnIGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEb21IYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zLCBlbGVtZW50Q0IpIHtcbiAgICAgICAgLyoqIFRoZSBjb25zdHJ1Y3RlZCBET00gKi9cbiAgICAgICAgdGhpcy5kb20gPSBbXTtcbiAgICAgICAgLyoqIEluZGljYXRlZCB3aGV0aGVyIHBhcnNpbmcgaGFzIGJlZW4gY29tcGxldGVkLiAqL1xuICAgICAgICB0aGlzLl9kb25lID0gZmFsc2U7XG4gICAgICAgIC8qKiBTdGFjayBvZiBvcGVuIHRhZ3MuICovXG4gICAgICAgIHRoaXMuX3RhZ1N0YWNrID0gW107XG4gICAgICAgIC8qKiBBIGRhdGEgbm9kZSB0aGF0IGlzIHN0aWxsIGJlaW5nIHdyaXR0ZW4gdG8uICovXG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgcGFyc2VyIGluc3RhbmNlLiBVc2VkIGZvciBsb2NhdGlvbiBpbmZvcm1hdGlvbi4gKi9cbiAgICAgICAgdGhpcy5fcGFyc2VyID0gbnVsbDtcbiAgICAgICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byBza2lwIGFyZ3VtZW50cywgZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBlbGVtZW50Q0IgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdE9wdHM7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRDQiA9IGVsZW1lbnRDQiB8fCBudWxsO1xuICAgIH1cbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbnBhcnNlcmluaXQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IHBhcnNlcjtcbiAgICB9O1xuICAgIC8vIFJlc2V0cyB0aGUgaGFuZGxlciBiYWNrIHRvIHN0YXJ0aW5nIHN0YXRlXG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kb20gPSBbXTtcbiAgICAgICAgdGhpcy5fZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90YWdTdGFjayA9IFtdO1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IHRoaXMuX3BhcnNlciB8fCBudWxsO1xuICAgIH07XG4gICAgLy8gU2lnbmFscyB0aGUgaGFuZGxlciB0aGF0IHBhcnNpbmcgaXMgZG9uZVxuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fZG9uZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5fZG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsbGJhY2sobnVsbCk7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsbGJhY2soZXJyb3IpO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jbG9zZXRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgICAgICAvLyBJZih0aGlzLl90YWdTdGFjay5wb3AoKS5uYW1lICE9PSBuYW1lKSB0aGlzLmhhbmRsZUNhbGxiYWNrKEVycm9yKFwiVGFnbmFtZSBkaWRuJ3QgbWF0Y2ghXCIpKTtcbiAgICAgICAgdmFyIGVsZW0gPSB0aGlzLl90YWdTdGFjay5wb3AoKTtcbiAgICAgICAgaWYgKCFlbGVtIHx8ICF0aGlzLl9wYXJzZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy53aXRoRW5kSW5kaWNlcykge1xuICAgICAgICAgICAgZWxlbS5lbmRJbmRleCA9IHRoaXMuX3BhcnNlci5lbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudENCKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudENCKGVsZW0pO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25vcGVudGFnID0gZnVuY3Rpb24gKG5hbWUsIGF0dHJpYnMpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBuZXcgbm9kZV8xLkVsZW1lbnQobmFtZSwgYXR0cmlicyk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdGFnU3RhY2sucHVzaChlbGVtZW50KTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9udGV4dCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBub3JtYWxpemUgPSB0aGlzLl9vcHRpb25zLm5vcm1hbGl6ZVdoaXRlc3BhY2U7XG4gICAgICAgIHZhciBfbGFzdE5vZGUgPSB0aGlzLl9sYXN0Tm9kZTtcbiAgICAgICAgaWYgKF9sYXN0Tm9kZSAmJiBfbGFzdE5vZGUudHlwZSA9PT0gXCJ0ZXh0XCIgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIF9sYXN0Tm9kZS5kYXRhID0gKF9sYXN0Tm9kZS5kYXRhICsgZGF0YSkucmVwbGFjZShyZVdoaXRlc3BhY2UsIFwiIFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9sYXN0Tm9kZS5kYXRhICs9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShyZVdoaXRlc3BhY2UsIFwiIFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5EYXRhTm9kZShcInRleHRcIiAvKiBUZXh0ICovLCBkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3ROb2RlICYmIHRoaXMuX2xhc3ROb2RlLnR5cGUgPT09IFwiY29tbWVudFwiIC8qIENvbW1lbnQgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3ROb2RlLmRhdGEgKz0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuRGF0YU5vZGUoXCJjb21tZW50XCIgLyogQ29tbWVudCAqLywgZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBub2RlO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNkYXRhc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gbmV3IG5vZGVfMS5EYXRhTm9kZShcInRleHRcIiAvKiBUZXh0ICovLCBcIlwiKTtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLk5vZGVXaXRoQ2hpbGRyZW4oXCJjZGF0YVwiIC8qIENEQVRBICovLCBbdGV4dF0pO1xuICAgICAgICB0aGlzLmFkZE5vZGUobm9kZSk7XG4gICAgICAgIHRleHQucGFyZW50ID0gbm9kZTtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSB0ZXh0O1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YWVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5hbWUsIGRhdGEpO1xuICAgICAgICB0aGlzLmFkZE5vZGUobm9kZSk7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKGVycm9yLCB0aGlzLmRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuX3RhZ1N0YWNrW3RoaXMuX3RhZ1N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgc2libGluZ3MgPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0aGlzLmRvbTtcbiAgICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGhpcy5fcGFyc2VyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy53aXRoU3RhcnRJbmRpY2VzKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdGFydEluZGV4ID0gdGhpcy5fcGFyc2VyLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy53aXRoRW5kSW5kaWNlcykge1xuICAgICAgICAgICAgICAgIG5vZGUuZW5kSW5kZXggPSB0aGlzLl9wYXJzZXIuZW5kSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2libGluZ3MucHVzaChub2RlKTtcbiAgICAgICAgaWYgKHByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgbm9kZS5wcmV2ID0gcHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLmFkZERhdGFOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICByZXR1cm4gRG9tSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzLkRvbUhhbmRsZXIgPSBEb21IYW5kbGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gRG9tSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbm9kZVR5cGVzID0gbmV3IE1hcChbXG4gICAgW1widGFnXCIgLyogVGFnICovLCAxXSxcbiAgICBbXCJzY3JpcHRcIiAvKiBTY3JpcHQgKi8sIDFdLFxuICAgIFtcInN0eWxlXCIgLyogU3R5bGUgKi8sIDFdLFxuICAgIFtcImRpcmVjdGl2ZVwiIC8qIERpcmVjdGl2ZSAqLywgMV0sXG4gICAgW1widGV4dFwiIC8qIFRleHQgKi8sIDNdLFxuICAgIFtcImNkYXRhXCIgLyogQ0RBVEEgKi8sIDRdLFxuICAgIFtcImNvbW1lbnRcIiAvKiBDb21tZW50ICovLCA4XVxuXSk7XG4vLyBUaGlzIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBmb3IgTm9kZXMgd2hlbiBjcmVhdGluZyBhXG4vLyBET00tTGV2ZWwtMS1jb21wbGlhbnQgc3RydWN0dXJlLlxudmFyIE5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgbm9kZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgLyoqIFBhcmVudCBvZiB0aGUgbm9kZSAqL1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIC8qKiBQcmV2aW91cyBzaWJsaW5nICovXG4gICAgICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgICAgIC8qKiBOZXh0IHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgLyoqIFRoZSBzdGFydCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhTdGFydEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuICAgICAgICAvKiogVGhlIGVuZCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhFbmRJbmRpY2VzYCBvbiB0aGUgaGFuZGxlciB0byBiZSBgdHJ1ZS4gKi9cbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IG51bGw7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJub2RlVHlwZVwiLCB7XG4gICAgICAgIC8vIFJlYWQtb25seSBhbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVUeXBlcy5nZXQodGhpcy50eXBlKSB8fCAxO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwicGFyZW50Tm9kZVwiLCB7XG4gICAgICAgIC8vIFJlYWQtd3JpdGUgYWxpYXNlcyBmb3IgcHJvcGVydGllc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCB8fCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwicHJldmlvdXNTaWJsaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2IHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJuZXh0U2libGluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV4dCB8fCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm9kZTtcbn0oKSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xudmFyIERhdGFOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRhTm9kZSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBub2RlXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGNvbnRlbnQgb2YgdGhlIGRhdGEgbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERhdGFOb2RlKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGFOb2RlLnByb3RvdHlwZSwgXCJub2RlVmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBEYXRhTm9kZTtcbn0oTm9kZSkpO1xuZXhwb3J0cy5EYXRhTm9kZSA9IERhdGFOb2RlO1xudmFyIFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbihuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiZGlyZWN0aXZlXCIgLyogRGlyZWN0aXZlICovLCBkYXRhKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xufShEYXRhTm9kZSkpO1xuZXhwb3J0cy5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG52YXIgTm9kZVdpdGhDaGlsZHJlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm9kZVdpdGhDaGlsZHJlbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIFR5cGUgb2YgdGhlIG5vZGUuXG4gICAgICogQHBhcmFtIGNoaWxkcmVuIENoaWxkcmVuIG9mIHRoZSBub2RlLiBPbmx5IGNlcnRhaW4gbm9kZSB0eXBlcyBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBOb2RlV2l0aENoaWxkcmVuKHR5cGUsIGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImZpcnN0Q2hpbGRcIiwge1xuICAgICAgICAvLyBBbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF0gfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImxhc3RDaGlsZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwiY2hpbGROb2Rlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb2RlV2l0aENoaWxkcmVuO1xufShOb2RlKSk7XG5leHBvcnRzLk5vZGVXaXRoQ2hpbGRyZW4gPSBOb2RlV2l0aENoaWxkcmVuO1xudmFyIEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEVsZW1lbnQsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB0YWcsIGVnLiBgZGl2YCwgYHNwYW5gXG4gICAgICogQHBhcmFtIGF0dHJpYnMgT2JqZWN0IG1hcHBpbmcgYXR0cmlidXRlIG5hbWVzIHRvIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFbGVtZW50KG5hbWUsIGF0dHJpYnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSA9PT0gXCJzY3JpcHRcIlxuICAgICAgICAgICAgPyBcInNjcmlwdFwiIC8qIFNjcmlwdCAqL1xuICAgICAgICAgICAgOiBuYW1lID09PSBcInN0eWxlXCJcbiAgICAgICAgICAgICAgICA/IFwic3R5bGVcIiAvKiBTdHlsZSAqL1xuICAgICAgICAgICAgICAgIDogXCJ0YWdcIiAvKiBUYWcgKi8sIFtdKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuYXR0cmlicyA9IGF0dHJpYnM7XG4gICAgICAgIF90aGlzLmF0dHJpYnMgPSBhdHRyaWJzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLy8gRE9NIExldmVsIDEgYWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBFbGVtZW50O1xufShOb2RlV2l0aENoaWxkcmVuKSk7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdGFndHlwZXNfMSA9IHJlcXVpcmUoXCIuL3RhZ3R5cGVzXCIpO1xuLyoqXG4gKiBHaXZlbiBhbiBhcnJheSBvZiBub2RlcywgcmVtb3ZlIGFueSBtZW1iZXIgdGhhdCBpcyBjb250YWluZWQgYnkgYW5vdGhlci5cbiAqXG4gKiBAcGFyYW0gbm9kZXMg4oCUIE5vZGVzIHRvIGZpbHRlci5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlU3Vic2V0cyhub2Rlcykge1xuICAgIHZhciBpZHggPSBub2Rlcy5sZW5ndGg7XG4gICAgLy8gQ2hlY2sgaWYgZWFjaCBub2RlIChvciBvbmUgb2YgaXRzIGFuY2VzdG9ycykgaXMgYWxyZWFkeSBjb250YWluZWQgaW4gdGhlXG4gICAgLy8gYXJyYXkuXG4gICAgd2hpbGUgKC0taWR4ID49IDApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpZHhdO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIG5vZGUgaWYgaXQgaXMgbm90IHVuaXF1ZS5cbiAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRocm91Z2ggdGhlIGFycmF5IGZyb20gdGhlIGVuZCwgc28gd2Ugb25seVxuICAgICAgICAvLyBoYXZlIHRvIGNoZWNrIG5vZGVzIHRoYXQgcHJlY2VlZCB0aGUgbm9kZSB1bmRlciBjb25zaWRlcmF0aW9uIGluIHRoZSBhcnJheS5cbiAgICAgICAgaWYgKGlkeCA+IDAgJiYgbm9kZXMubGFzdEluZGV4T2Yobm9kZSwgaWR4IC0gMSkgPj0gMCkge1xuICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBhbmNlc3RvciA9IG5vZGUucGFyZW50OyBhbmNlc3RvcjsgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGFuY2VzdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xufVxuZXhwb3J0cy5yZW1vdmVTdWJzZXRzID0gcmVtb3ZlU3Vic2V0cztcbi8qKipcbiAqIENvbXBhcmUgdGhlIHBvc2l0aW9uIG9mIG9uZSBub2RlIGFnYWluc3QgYW5vdGhlciBub2RlIGluIGFueSBvdGhlciBkb2N1bWVudC5cbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYSBiaXRtYXNrIHdpdGggdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gKlxuICogZG9jdW1lbnQgb3JkZXI6XG4gKiA+IFRoZXJlIGlzIGFuIG9yZGVyaW5nLCBkb2N1bWVudCBvcmRlciwgZGVmaW5lZCBvbiBhbGwgdGhlIG5vZGVzIGluIHRoZVxuICogPiBkb2N1bWVudCBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZVxuICogPiBYTUwgcmVwcmVzZW50YXRpb24gb2YgZWFjaCBub2RlIG9jY3VycyBpbiB0aGUgWE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZVxuICogPiBkb2N1bWVudCBhZnRlciBleHBhbnNpb24gb2YgZ2VuZXJhbCBlbnRpdGllcy4gVGh1cywgdGhlIGRvY3VtZW50IGVsZW1lbnRcbiAqID4gbm9kZSB3aWxsIGJlIHRoZSBmaXJzdCBub2RlLiBFbGVtZW50IG5vZGVzIG9jY3VyIGJlZm9yZSB0aGVpciBjaGlsZHJlbi5cbiAqID4gVGh1cywgZG9jdW1lbnQgb3JkZXIgb3JkZXJzIGVsZW1lbnQgbm9kZXMgaW4gb3JkZXIgb2YgdGhlIG9jY3VycmVuY2Ugb2ZcbiAqID4gdGhlaXIgc3RhcnQtdGFnIGluIHRoZSBYTUwgKGFmdGVyIGV4cGFuc2lvbiBvZiBlbnRpdGllcykuIFRoZSBhdHRyaWJ1dGVcbiAqID4gbm9kZXMgb2YgYW4gZWxlbWVudCBvY2N1ciBhZnRlciB0aGUgZWxlbWVudCBhbmQgYmVmb3JlIGl0cyBjaGlsZHJlbi4gVGhlXG4gKiA+IHJlbGF0aXZlIG9yZGVyIG9mIGF0dHJpYnV0ZSBub2RlcyBpcyBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQuL1xuICpcbiAqIFNvdXJjZTpcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvZ2xvc3NhcnkuaHRtbCNkdC1kb2N1bWVudC1vcmRlclxuICogQGFyZ3VtZW50IG5vZGFBIFRoZSBmaXJzdCBub2RlIHRvIHVzZSBpbiB0aGUgY29tcGFyaXNvblxuICogQGFyZ3VtZW50IG5vZGVCIFRoZSBzZWNvbmQgbm9kZSB0byB1c2UgaW4gdGhlIGNvbXBhcmlzb25cbiAqXG4gKiBAcmV0dXJuIEEgYml0bWFzayBkZXNjcmliaW5nIHRoZSBpbnB1dCBub2RlcycgcmVsYXRpdmUgcG9zaXRpb24uXG4gKlxuICogICAgICAgIFNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLW5vZGUtY29tcGFyZWRvY3VtZW50cG9zaXRpb24gZm9yXG4gKiAgICAgICAgYSBkZXNjcmlwdGlvbiBvZiB0aGVzZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGVBLCBub2RlQikge1xuICAgIHZhciBhUGFyZW50cyA9IFtdO1xuICAgIHZhciBiUGFyZW50cyA9IFtdO1xuICAgIGlmIChub2RlQSA9PT0gbm9kZUIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciBjdXJyZW50ID0gdGFndHlwZXNfMS5oYXNDaGlsZHJlbihub2RlQSkgPyBub2RlQSA6IG5vZGVBLnBhcmVudDtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICBhUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIGN1cnJlbnQgPSB0YWd0eXBlc18xLmhhc0NoaWxkcmVuKG5vZGVCKSA/IG5vZGVCIDogbm9kZUIucGFyZW50O1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgIGJQYXJlbnRzLnVuc2hpZnQoY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgd2hpbGUgKGFQYXJlbnRzW2lkeF0gPT09IGJQYXJlbnRzW2lkeF0pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDEgLyogRElTQ09OTkVDVEVEICovO1xuICAgIH1cbiAgICB2YXIgc2hhcmVkUGFyZW50ID0gYVBhcmVudHNbaWR4IC0gMV07XG4gICAgdmFyIHNpYmxpbmdzID0gc2hhcmVkUGFyZW50LmNoaWxkcmVuO1xuICAgIHZhciBhU2libGluZyA9IGFQYXJlbnRzW2lkeF07XG4gICAgdmFyIGJTaWJsaW5nID0gYlBhcmVudHNbaWR4XTtcbiAgICBpZiAoc2libGluZ3MuaW5kZXhPZihhU2libGluZykgPiBzaWJsaW5ncy5pbmRleE9mKGJTaWJsaW5nKSkge1xuICAgICAgICBpZiAoc2hhcmVkUGFyZW50ID09PSBub2RlQikge1xuICAgICAgICAgICAgcmV0dXJuIDQgLyogRk9MTE9XSU5HICovIHwgMTYgLyogQ09OVEFJTkVEX0JZICovO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA0IC8qIEZPTExPV0lORyAqLztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChzaGFyZWRQYXJlbnQgPT09IG5vZGVBKSB7XG4gICAgICAgICAgICByZXR1cm4gMiAvKiBQUkVDRURJTkcgKi8gfCA4IC8qIENPTlRBSU5TICovO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAyIC8qIFBSRUNFRElORyAqLztcbiAgICB9XG59XG5leHBvcnRzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID0gY29tcGFyZURvY3VtZW50UG9zaXRpb247XG4vKioqXG4gKiBTb3J0IGFuIGFycmF5IG9mIG5vZGVzIGJhc2VkIG9uIHRoZWlyIHJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSBkb2N1bWVudCBhbmRcbiAqIHJlbW92ZSBhbnkgZHVwbGljYXRlIG5vZGVzLiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbm9kZXMgdGhhdCBkbyBub3QgYmVsb25nXG4gKiB0byB0aGUgc2FtZSBkb2N1bWVudCwgc29ydCBvcmRlciBpcyB1bnNwZWNpZmllZC5cbiAqXG4gKiBAYXJndW1lbnQgbm9kZXMgQXJyYXkgb2YgRE9NIG5vZGVzXG4gKiBAcmV0dXJucyBjb2xsZWN0aW9uIG9mIHVuaXF1ZSBub2Rlcywgc29ydGVkIGluIGRvY3VtZW50IG9yZGVyXG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZVNvcnQobm9kZXMpIHtcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSwgaSwgYXJyKSB7IHJldHVybiAhYXJyLmluY2x1ZGVzKG5vZGUsIGkgKyAxKTsgfSk7XG4gICAgbm9kZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhLCBiKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlICYgMiAvKiBQUkVDRURJTkcgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGl2ZSAmIDQgLyogRk9MTE9XSU5HICovKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZXM7XG59XG5leHBvcnRzLnVuaXF1ZVNvcnQgPSB1bmlxdWVTb3J0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vc3RyaW5naWZ5XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RyYXZlcnNhbFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tYW5pcHVsYXRpb25cIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vcXVlcnlpbmdcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vbGVnYWN5XCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnNcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdGFndHlwZXNcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcXVlcnlpbmdfMSA9IHJlcXVpcmUoXCIuL3F1ZXJ5aW5nXCIpO1xudmFyIHRhZ3R5cGVzXzEgPSByZXF1aXJlKFwiLi90YWd0eXBlc1wiKTtcbmZ1bmN0aW9uIGlzVGV4dE5vZGUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IFwidGV4dFwiIC8qIFRleHQgKi87XG59XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG52YXIgQ2hlY2tzID0ge1xuICAgIHRhZ19uYW1lOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB0YWd0eXBlc18xLmlzVGFnKGVsZW0pICYmIG5hbWUoZWxlbS5uYW1lKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcIipcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRhZ3R5cGVzXzEuaXNUYWc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHRhZ3R5cGVzXzEuaXNUYWcoZWxlbSkgJiYgZWxlbS5uYW1lID09PSBuYW1lOyB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0YWdfdHlwZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdHlwZShlbGVtLnR5cGUpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBlbGVtLnR5cGUgPT09IHR5cGU7IH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRhZ19jb250YWluczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gaXNUZXh0Tm9kZShlbGVtKSAmJiBkYXRhKGVsZW0uZGF0YSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGlzVGV4dE5vZGUoZWxlbSkgJiYgZWxlbS5kYXRhID09PSBkYXRhOyB9O1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuZnVuY3Rpb24gZ2V0QXR0cmliQ2hlY2soYXR0cmliLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHRhZ3R5cGVzXzEuaXNUYWcoZWxlbSkgJiYgdmFsdWUoZWxlbS5hdHRyaWJzW2F0dHJpYl0pOyB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB0YWd0eXBlc18xLmlzVGFnKGVsZW0pICYmIGVsZW0uYXR0cmlic1thdHRyaWJdID09PSB2YWx1ZTsgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb21iaW5lRnVuY3MoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gYShlbGVtKSB8fCBiKGVsZW0pOyB9O1xufVxuZnVuY3Rpb24gY29tcGlsZVRlc3Qob3B0aW9ucykge1xuICAgIHZhciBmdW5jcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4ga2V5IGluIENoZWNrcyA/IENoZWNrc1trZXldKHZhbHVlKSA6IGdldEF0dHJpYkNoZWNrKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jcy5sZW5ndGggPT09IDAgPyBudWxsIDogZnVuY3MucmVkdWNlKGNvbWJpbmVGdW5jcyk7XG59XG5mdW5jdGlvbiB0ZXN0RWxlbWVudChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgdmFyIHRlc3QgPSBjb21waWxlVGVzdChvcHRpb25zKTtcbiAgICByZXR1cm4gdGVzdCA/IHRlc3QoZWxlbWVudCkgOiB0cnVlO1xufVxuZXhwb3J0cy50ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50O1xuZnVuY3Rpb24gZ2V0RWxlbWVudHMob3B0aW9ucywgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IEluZmluaXR5OyB9XG4gICAgdmFyIHRlc3QgPSBjb21waWxlVGVzdChvcHRpb25zKTtcbiAgICByZXR1cm4gdGVzdCA/IHF1ZXJ5aW5nXzEuZmlsdGVyKHRlc3QsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KSA6IFtdO1xufVxuZXhwb3J0cy5nZXRFbGVtZW50cyA9IGdldEVsZW1lbnRzO1xuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQsIGVsZW1lbnQsIHJlY3Vyc2UpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnQpKVxuICAgICAgICBlbGVtZW50ID0gW2VsZW1lbnRdO1xuICAgIHJldHVybiBxdWVyeWluZ18xLmZpbmRPbmUoZ2V0QXR0cmliQ2hlY2soXCJpZFwiLCBpZCksIGVsZW1lbnQsIHJlY3Vyc2UpO1xufVxuZXhwb3J0cy5nZXRFbGVtZW50QnlJZCA9IGdldEVsZW1lbnRCeUlkO1xuZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUobmFtZSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IEluZmluaXR5OyB9XG4gICAgcmV0dXJuIHF1ZXJ5aW5nXzEuZmlsdGVyKENoZWNrcy50YWdfbmFtZShuYW1lKSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpO1xufVxuZXhwb3J0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGdldEVsZW1lbnRzQnlUYWdOYW1lO1xuZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ1R5cGUodHlwZSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHJldHVybiBxdWVyeWluZ18xLmZpbHRlcihDaGVja3MudGFnX3R5cGUodHlwZSksIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ1R5cGUgPSBnZXRFbGVtZW50c0J5VGFnVHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gYmUgcmVtb3ZlZFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5wcmV2KVxuICAgICAgICBlbGVtLnByZXYubmV4dCA9IGVsZW0ubmV4dDtcbiAgICBpZiAoZWxlbS5uZXh0KVxuICAgICAgICBlbGVtLm5leHQucHJldiA9IGVsZW0ucHJldjtcbiAgICBpZiAoZWxlbS5wYXJlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkcyA9IGVsZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihlbGVtKSwgMSk7XG4gICAgfVxufVxuZXhwb3J0cy5yZW1vdmVFbGVtZW50ID0gcmVtb3ZlRWxlbWVudDtcbi8qKipcbiAqIFJlcGxhY2UgYW4gZWxlbWVudCBpbiB0aGUgZG9tXG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gYmUgcmVwbGFjZWRcbiAqIEBhcmd1bWVudCByZXBsYWNlbWVudCBUaGUgZWxlbWVudCB0byBiZSBhZGRlZFxuICovXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtLCByZXBsYWNlbWVudCkge1xuICAgIHZhciBwcmV2ID0gKHJlcGxhY2VtZW50LnByZXYgPSBlbGVtLnByZXYpO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHByZXYubmV4dCA9IHJlcGxhY2VtZW50O1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IChyZXBsYWNlbWVudC5uZXh0ID0gZWxlbS5uZXh0KTtcbiAgICBpZiAobmV4dCkge1xuICAgICAgICBuZXh0LnByZXYgPSByZXBsYWNlbWVudDtcbiAgICB9XG4gICAgdmFyIHBhcmVudCA9IChyZXBsYWNlbWVudC5wYXJlbnQgPSBlbGVtLnBhcmVudCk7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB2YXIgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHNbY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pXSA9IHJlcGxhY2VtZW50O1xuICAgIH1cbn1cbmV4cG9ydHMucmVwbGFjZUVsZW1lbnQgPSByZXBsYWNlRWxlbWVudDtcbi8qKipcbiAqIEFwcGVuZCBhIGNoaWxkIHRvIGFuIGVsZW1lbnRcbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBhcHBlbmQgdG9cbiAqIEBhcmd1bWVudCBjaGlsZCBUaGUgZWxlbWVudCB0byBiZSBhZGRlZCBhcyBhIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGVsZW0sIGNoaWxkKSB7XG4gICAgY2hpbGQucGFyZW50ID0gZWxlbTtcbiAgICBpZiAoZWxlbS5jaGlsZHJlbi5wdXNoKGNoaWxkKSAhPT0gMSkge1xuICAgICAgICB2YXIgc2libGluZyA9IGVsZW0uY2hpbGRyZW5bZWxlbS5jaGlsZHJlbi5sZW5ndGggLSAyXTtcbiAgICAgICAgc2libGluZy5uZXh0ID0gY2hpbGQ7XG4gICAgICAgIGNoaWxkLnByZXYgPSBzaWJsaW5nO1xuICAgICAgICBjaGlsZC5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnRzLmFwcGVuZENoaWxkID0gYXBwZW5kQ2hpbGQ7XG4vKioqXG4gKiBBcHBlbmQgYW4gZWxlbWVudCBhZnRlciBhbm90aGVyXG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvXG4gKiBAYXJndW1lbnQgbmV4dCBUaGUgZWxlbWVudCBiZSBhZGRlZFxuICovXG5mdW5jdGlvbiBhcHBlbmQoZWxlbSwgbmV4dCkge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudCwgY3Vyck5leHQgPSBlbGVtLm5leHQ7XG4gICAgbmV4dC5uZXh0ID0gY3Vyck5leHQ7XG4gICAgbmV4dC5wcmV2ID0gZWxlbTtcbiAgICBlbGVtLm5leHQgPSBuZXh0O1xuICAgIG5leHQucGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChjdXJyTmV4dCkge1xuICAgICAgICBjdXJyTmV4dC5wcmV2ID0gbmV4dDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGN1cnJOZXh0KSwgMCwgbmV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKG5leHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kO1xuLyoqKlxuICogUHJlcGVuZCBhbiBlbGVtZW50IGJlZm9yZSBhbm90aGVyXG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvXG4gKiBAYXJndW1lbnQgcHJldiBUaGUgZWxlbWVudCBiZSBhZGRlZFxuICovXG5mdW5jdGlvbiBwcmVwZW5kKGVsZW0sIHByZXYpIHtcbiAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgICB2YXIgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihlbGVtKSwgMCwgcHJldik7XG4gICAgfVxuICAgIGlmIChlbGVtLnByZXYpIHtcbiAgICAgICAgZWxlbS5wcmV2Lm5leHQgPSBwcmV2O1xuICAgIH1cbiAgICBwcmV2LnBhcmVudCA9IHBhcmVudDtcbiAgICBwcmV2LnByZXYgPSBlbGVtLnByZXY7XG4gICAgcHJldi5uZXh0ID0gZWxlbTtcbiAgICBlbGVtLnByZXYgPSBwcmV2O1xufVxuZXhwb3J0cy5wcmVwZW5kID0gcHJlcGVuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRhZ3R5cGVzXzEgPSByZXF1aXJlKFwiLi90YWd0eXBlc1wiKTtcbmZ1bmN0aW9uIGZpbHRlcih0ZXN0LCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IHRydWU7IH1cbiAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IEluZmluaXR5OyB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnQpKVxuICAgICAgICBlbGVtZW50ID0gW2VsZW1lbnRdO1xuICAgIHJldHVybiBmaW5kKHRlc3QsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZnVuY3Rpb24gZmluZCh0ZXN0LCBlbGVtcywgcmVjdXJzZSwgbGltaXQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbSA9IGVsZW1zW2ldO1xuICAgICAgICBpZiAodGVzdChlbGVtKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbSk7XG4gICAgICAgICAgICBpZiAoLS1saW1pdCA8PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWN1cnNlICYmIHRhZ3R5cGVzXzEuaGFzQ2hpbGRyZW4oZWxlbSkgJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBmaW5kKHRlc3QsIGVsZW0uY2hpbGRyZW4sIHJlY3Vyc2UsIGxpbWl0KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgbGltaXQgLT0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxpbWl0IDw9IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5mdW5jdGlvbiBmaW5kT25lQ2hpbGQodGVzdCwgZWxlbXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGVsZW1zW2ldKSlcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmZpbmRPbmVDaGlsZCA9IGZpbmRPbmVDaGlsZDtcbmZ1bmN0aW9uIGZpbmRPbmUodGVzdCwgZWxlbXMsIHJlY3Vyc2UpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgdmFyIGVsZW0gPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoICYmICFlbGVtOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBlbGVtc1tpXTtcbiAgICAgICAgaWYgKCF0YWd0eXBlc18xLmlzVGFnKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0KGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBlbGVtID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWN1cnNlICYmIGNoZWNrZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbSA9IGZpbmRPbmUodGVzdCwgY2hlY2tlZC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG5leHBvcnRzLmZpbmRPbmUgPSBmaW5kT25lO1xuZnVuY3Rpb24gZXhpc3RzT25lKHRlc3QsIGVsZW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlZCA9IGVsZW1zW2ldO1xuICAgICAgICBpZiAodGFndHlwZXNfMS5pc1RhZyhjaGVja2VkKSAmJlxuICAgICAgICAgICAgKHRlc3QoY2hlY2tlZCkgfHxcbiAgICAgICAgICAgICAgICAoY2hlY2tlZC5jaGlsZHJlbi5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0c09uZSh0ZXN0LCBjaGVja2VkLmNoaWxkcmVuKSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnRzLmV4aXN0c09uZSA9IGV4aXN0c09uZTtcbmZ1bmN0aW9uIGZpbmRBbGwodGVzdCwgcm9vdEVsZW1zKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBzdGFjayA9IHJvb3RFbGVtcy5zbGljZSgpO1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGVsZW0gPSBzdGFjay5zaGlmdCgpO1xuICAgICAgICBpZiAoIWVsZW0gfHwgIXRhZ3R5cGVzXzEuaXNUYWcoZWxlbSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzdGFjay51bnNoaWZ0LmFwcGx5KHN0YWNrLCBlbGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGVzdChlbGVtKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5maW5kQWxsID0gZmluZEFsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRhZ3R5cGVzXzEgPSByZXF1aXJlKFwiLi90YWd0eXBlc1wiKTtcbnZhciBkb21fc2VyaWFsaXplcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkb20tc2VyaWFsaXplclwiKSk7XG5leHBvcnRzLmdldE91dGVySFRNTCA9IGRvbV9zZXJpYWxpemVyXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIGdldElubmVySFRNTChub2RlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRhZ3R5cGVzXzEuaGFzQ2hpbGRyZW4obm9kZSlcbiAgICAgICAgPyBub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gZXhwb3J0cy5nZXRPdXRlckhUTUwobm9kZSwgb3B0aW9ucyk7IH0pLmpvaW4oXCJcIilcbiAgICAgICAgOiBcIlwiO1xufVxuZXhwb3J0cy5nZXRJbm5lckhUTUwgPSBnZXRJbm5lckhUTUw7XG5mdW5jdGlvbiBnZXRUZXh0KG5vZGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUubWFwKGdldFRleHQpLmpvaW4oXCJcIik7XG4gICAgaWYgKHRhZ3R5cGVzXzEuaXNUYWcobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLm5hbWUgPT09IFwiYnJcIiA/IFwiXFxuXCIgOiBnZXRUZXh0KG5vZGUuY2hpbGRyZW4pO1xuICAgIGlmICh0YWd0eXBlc18xLmlzQ0RBVEEobm9kZSkpXG4gICAgICAgIHJldHVybiBnZXRUZXh0KG5vZGUuY2hpbGRyZW4pO1xuICAgIGlmICh0YWd0eXBlc18xLmlzVGV4dChub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUuZGF0YTtcbiAgICByZXR1cm4gXCJcIjtcbn1cbmV4cG9ydHMuZ2V0VGV4dCA9IGdldFRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkb21lbGVtZW50dHlwZV8xID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpO1xuZnVuY3Rpb24gaXNUYWcobm9kZSkge1xuICAgIHJldHVybiBkb21lbGVtZW50dHlwZV8xLmlzVGFnKG5vZGUpO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuZnVuY3Rpb24gaXNDREFUQShub2RlKSB7XG4gICAgcmV0dXJuIFwiY2RhdGFcIiAvKiBDREFUQSAqLyA9PT0gbm9kZS50eXBlO1xufVxuZXhwb3J0cy5pc0NEQVRBID0gaXNDREFUQTtcbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gXCJ0ZXh0XCIgLyogVGV4dCAqLztcbn1cbmV4cG9ydHMuaXNUZXh0ID0gaXNUZXh0O1xuZnVuY3Rpb24gaXNDb21tZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBcImNvbW1lbnRcIiAvKiBDb21tZW50ICovO1xufVxuZXhwb3J0cy5pc0NvbW1lbnQgPSBpc0NvbW1lbnQ7XG5mdW5jdGlvbiBoYXNDaGlsZHJlbihub2RlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChub2RlLCBcImNoaWxkcmVuXCIpO1xufVxuZXhwb3J0cy5oYXNDaGlsZHJlbiA9IGhhc0NoaWxkcmVuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRDaGlsZHJlbihlbGVtKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBlbGVtLmNoaWxkcmVuIHx8IG51bGw7XG59XG5leHBvcnRzLmdldENoaWxkcmVuID0gZ2V0Q2hpbGRyZW47XG5mdW5jdGlvbiBnZXRQYXJlbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLnBhcmVudCB8fCBudWxsO1xufVxuZXhwb3J0cy5nZXRQYXJlbnQgPSBnZXRQYXJlbnQ7XG5mdW5jdGlvbiBnZXRTaWJsaW5ncyhlbGVtKSB7XG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChlbGVtKTtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Q2hpbGRyZW4ocGFyZW50KSA6IFtlbGVtXTtcbn1cbmV4cG9ydHMuZ2V0U2libGluZ3MgPSBnZXRTaWJsaW5ncztcbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKGVsZW0sIG5hbWUpIHtcbiAgICByZXR1cm4gZWxlbS5hdHRyaWJzICYmIGVsZW0uYXR0cmlic1tuYW1lXTtcbn1cbmV4cG9ydHMuZ2V0QXR0cmlidXRlVmFsdWUgPSBnZXRBdHRyaWJ1dGVWYWx1ZTtcbmZ1bmN0aW9uIGhhc0F0dHJpYihlbGVtLCBuYW1lKSB7XG4gICAgcmV0dXJuICEhZ2V0QXR0cmlidXRlVmFsdWUoZWxlbSwgbmFtZSk7XG59XG5leHBvcnRzLmhhc0F0dHJpYiA9IGhhc0F0dHJpYjtcbi8qKipcbiAqIFJldHVybnMgdGhlIG5hbWUgcHJvcGVydHkgb2YgYW4gZWxlbWVudFxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGdldCB0aGUgbmFtZSBmb3JcbiAqL1xuZnVuY3Rpb24gZ2V0TmFtZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubmFtZTtcbn1cbmV4cG9ydHMuZ2V0TmFtZSA9IGdldE5hbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBsZWdhY3lfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvbGVnYWN5Lmpzb25cIikpO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgZGVjb2RlX2NvZGVwb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RlY29kZV9jb2RlcG9pbnRcIikpO1xuZXhwb3J0cy5kZWNvZGVYTUwgPSBnZXRTdHJpY3REZWNvZGVyKHhtbF9qc29uXzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBnZXRTdHJpY3REZWNvZGVyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbmZ1bmN0aW9uIGdldFN0cmljdERlY29kZXIobWFwKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhtYXApLmpvaW4oXCJ8XCIpO1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIobWFwKTtcbiAgICBrZXlzICs9IFwifCNbeFhdW1xcXFxkYS1mQS1GXSt8I1xcXFxkK1wiO1xuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzICsgXCIpO1wiLCBcImdcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2UpOyB9O1xufVxudmFyIHNvcnRlciA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiAoYSA8IGIgPyAxIDogLTEpOyB9O1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVnYWN5ID0gT2JqZWN0LmtleXMobGVnYWN5X2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnRpdGllc19qc29uXzEuZGVmYXVsdCkuc29ydChzb3J0ZXIpO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxlZ2FjeVtqXSA9PT0ga2V5c1tpXSkge1xuICAgICAgICAgICAga2V5c1tpXSArPSBcIjs/XCI7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiO1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzLmpvaW4oXCJ8XCIpICsgXCJ8I1t4WF1bXFxcXGRhLWZBLUZdKzs/fCNcXFxcZCs7PylcIiwgXCJnXCIpO1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKHN0cikge1xuICAgICAgICBpZiAoc3RyLnN1YnN0cigtMSkgIT09IFwiO1wiKVxuICAgICAgICAgICAgc3RyICs9IFwiO1wiO1xuICAgICAgICByZXR1cm4gcmVwbGFjZShzdHIpO1xuICAgIH1cbiAgICAvL1RPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2VyKTtcbiAgICB9O1xufSkoKTtcbmZ1bmN0aW9uIGdldFJlcGxhY2VyKG1hcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICAgICAgICBpZiAoc3RyLmNoYXJBdCgxKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIGlmIChzdHIuY2hhckF0KDIpID09PSBcIlhcIiB8fCBzdHIuY2hhckF0KDIpID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDMpLCAxNikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlSW50KHN0ci5zdWJzdHIoMiksIDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcFtzdHIuc2xpY2UoMSwgLTEpXTtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2RlY29kZS5qc29uXCIpKTtcbi8vIG1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvaGUvYmxvYi9tYXN0ZXIvc3JjL2hlLmpzI0w5NC1MMTE5XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgaWYgKChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRmZmYpIHx8IGNvZGVQb2ludCA+IDB4MTBmZmZmKSB7XG4gICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICB9XG4gICAgaWYgKGNvZGVQb2ludCBpbiBkZWNvZGVfanNvbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb2RlUG9pbnQgPSBkZWNvZGVfanNvbl8xLmRlZmF1bHRbY29kZVBvaW50XTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4ZmZmZikge1xuICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4+IDEwKSAmIDB4M2ZmKSB8IDB4ZDgwMCk7XG4gICAgICAgIGNvZGVQb2ludCA9IDB4ZGMwMCB8IChjb2RlUG9pbnQgJiAweDNmZik7XG4gICAgfVxuICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29kZUNvZGVQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgaW52ZXJzZVhNTCA9IGdldEludmVyc2VPYmooeG1sX2pzb25fMS5kZWZhdWx0KTtcbnZhciB4bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcbmV4cG9ydHMuZW5jb2RlWE1MID0gZ2V0SW52ZXJzZShpbnZlcnNlWE1MLCB4bWxSZXBsYWNlcik7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbnZhciBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuZXhwb3J0cy5lbmNvZGVIVE1MID0gZ2V0SW52ZXJzZShpbnZlcnNlSFRNTCwgaHRtbFJlcGxhY2VyKTtcbmZ1bmN0aW9uIGdldEludmVyc2VPYmoob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcbiAgICAgICAgLnNvcnQoKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChpbnZlcnNlLCBuYW1lKSB7XG4gICAgICAgIGludmVyc2Vbb2JqW25hbWVdXSA9IFwiJlwiICsgbmFtZSArIFwiO1wiO1xuICAgICAgICByZXR1cm4gaW52ZXJzZTtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZSkge1xuICAgIHZhciBzaW5nbGUgPSBbXTtcbiAgICB2YXIgbXVsdGlwbGUgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhpbnZlcnNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIHJldHVybiBrLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgPyAvLyBBZGQgdmFsdWUgdG8gc2luZ2xlIGFycmF5XG4gICAgICAgICAgICAgICAgc2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKVxuICAgICAgICAgICAgOiAvLyBBZGQgdmFsdWUgdG8gbXVsdGlwbGUgYXJyYXlcbiAgICAgICAgICAgICAgICBtdWx0aXBsZS5wdXNoKGspO1xuICAgIH0pO1xuICAgIC8vVE9ETyBhZGQgcmFuZ2VzXG4gICAgbXVsdGlwbGUudW5zaGlmdChcIltcIiArIHNpbmdsZS5qb2luKFwiXCIpICsgXCJdXCIpO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKG11bHRpcGxlLmpvaW4oXCJ8XCIpLCBcImdcIik7XG59XG52YXIgcmVOb25BU0NJSSA9IC9bXlxcMC1cXHg3Rl0vZztcbnZhciByZUFzdHJhbFN5bWJvbHMgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpIHtcbiAgICByZXR1cm4gXCImI3hcIiArIGNcbiAgICAgICAgLmNoYXJDb2RlQXQoMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycywgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZnVuY3Rpb24gYXN0cmFsUmVwbGFjZXIoYywgXykge1xuICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgdmFyIGhpZ2ggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIGxvdyA9IGMuY2hhckNvZGVBdCgxKTtcbiAgICB2YXIgY29kZVBvaW50ID0gKGhpZ2ggLSAweGQ4MDApICogMHg0MDAgKyBsb3cgLSAweGRjMDAgKyAweDEwMDAwO1xuICAgIHJldHVybiBcIiYjeFwiICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICsgXCI7XCI7XG59XG5mdW5jdGlvbiBnZXRJbnZlcnNlKGludmVyc2UsIHJlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICAucmVwbGFjZShyZSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGludmVyc2VbbmFtZV07IH0pXG4gICAgICAgICAgICAucmVwbGFjZShyZUFzdHJhbFN5bWJvbHMsIGFzdHJhbFJlcGxhY2VyKVxuICAgICAgICAgICAgLnJlcGxhY2UocmVOb25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbiAgICB9O1xufVxudmFyIHJlWG1sQ2hhcnMgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgIHJldHVybiBkYXRhXG4gICAgICAgIC5yZXBsYWNlKHJlWG1sQ2hhcnMsIHNpbmdsZUNoYXJSZXBsYWNlcilcbiAgICAgICAgLnJlcGxhY2UocmVBc3RyYWxTeW1ib2xzLCBhc3RyYWxSZXBsYWNlcilcbiAgICAgICAgLnJlcGxhY2UocmVOb25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlXzEgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG52YXIgZW5jb2RlXzEgPSByZXF1aXJlKFwiLi9lbmNvZGVcIik7XG5mdW5jdGlvbiBkZWNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbmZ1bmN0aW9uIGRlY29kZVN0cmljdChkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGVfMS5kZWNvZGVYTUwgOiBkZWNvZGVfMS5kZWNvZGVIVE1MU3RyaWN0KShkYXRhKTtcbn1cbmV4cG9ydHMuZGVjb2RlU3RyaWN0ID0gZGVjb2RlU3RyaWN0O1xuZnVuY3Rpb24gZW5jb2RlKGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGVuY29kZV8xLmVuY29kZVhNTCA6IGVuY29kZV8xLmVuY29kZUhUTUwpKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG52YXIgZW5jb2RlXzIgPSByZXF1aXJlKFwiLi9lbmNvZGVcIik7XG5leHBvcnRzLmVuY29kZVhNTCA9IGVuY29kZV8yLmVuY29kZVhNTDtcbmV4cG9ydHMuZW5jb2RlSFRNTCA9IGVuY29kZV8yLmVuY29kZUhUTUw7XG5leHBvcnRzLmVzY2FwZSA9IGVuY29kZV8yLmVzY2FwZTtcbi8vIExlZ2FjeSBhbGlhc2VzXG5leHBvcnRzLmVuY29kZUhUTUw0ID0gZW5jb2RlXzIuZW5jb2RlSFRNTDtcbmV4cG9ydHMuZW5jb2RlSFRNTDUgPSBlbmNvZGVfMi5lbmNvZGVIVE1MO1xudmFyIGRlY29kZV8yID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xuZXhwb3J0cy5kZWNvZGVYTUwgPSBkZWNvZGVfMi5kZWNvZGVYTUw7XG5leHBvcnRzLmRlY29kZUhUTUwgPSBkZWNvZGVfMi5kZWNvZGVIVE1MO1xuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDtcbi8vIExlZ2FjeSBhbGlhc2VzXG5leHBvcnRzLmRlY29kZUhUTUw0ID0gZGVjb2RlXzIuZGVjb2RlSFRNTDtcbmV4cG9ydHMuZGVjb2RlSFRNTDUgPSBkZWNvZGVfMi5kZWNvZGVIVE1MO1xuZXhwb3J0cy5kZWNvZGVIVE1MNFN0cmljdCA9IGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7XG5leHBvcnRzLmRlY29kZUhUTUw1U3RyaWN0ID0gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDtcbmV4cG9ydHMuZGVjb2RlWE1MU3RyaWN0ID0gZGVjb2RlXzIuZGVjb2RlWE1MO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE11bHRpcGxleEhhbmRsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NdWx0aXBsZXhIYW5kbGVyXCIpKTtcbnZhciBDb2xsZWN0aW5nSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29sbGVjdGluZ0hhbmRsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29sbGVjdGluZ0hhbmRsZXIoY2JzKSB7XG4gICAgICAgIGlmIChjYnMgPT09IHZvaWQgMCkgeyBjYnMgPSB7fTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmV2ZW50cy5wdXNoKFtuYW1lXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKF90aGlzLl9jYnNbbmFtZV0pXG4gICAgICAgICAgICAgICAgKF9hID0gX3RoaXMuX2NicylbbmFtZV0uYXBwbHkoX2EsIGFyZ3MpO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fY2JzID0gY2JzO1xuICAgICAgICBfdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGUub25yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnJlc2V0KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucmVzZXQoKTtcbiAgICB9O1xuICAgIENvbGxlY3RpbmdIYW5kbGVyLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25yZXNldClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnJlc2V0KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMuZXZlbnRzW2ldLCBuYW1lXzEgPSBfYlswXSwgYXJncyA9IF9iLnNsaWNlKDEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYnNbbmFtZV8xXSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgKF9hID0gdGhpcy5fY2JzKVtuYW1lXzFdLmFwcGx5KF9hLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbGxlY3RpbmdIYW5kbGVyO1xufShNdWx0aXBsZXhIYW5kbGVyXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5Db2xsZWN0aW5nSGFuZGxlciA9IENvbGxlY3RpbmdIYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkb21oYW5kbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRvbWhhbmRsZXJcIikpO1xudmFyIERvbVV0aWxzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJkb211dGlsc1wiKSk7XG52YXIgUGFyc2VyXzEgPSByZXF1aXJlKFwiLi9QYXJzZXJcIik7XG4vL1RPRE86IENvbnN1bWUgZGF0YSBhcyBpdCBpcyBjb21pbmcgaW5cbnZhciBGZWVkSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmVlZEhhbmRsZXIsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZlZWRIYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwib2JqZWN0XCIgJiYgY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY2FsbGJhY2ssIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmVlZEhhbmRsZXIucHJvdG90eXBlLm9uZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmVlZCA9IHt9O1xuICAgICAgICB2YXIgZmVlZFJvb3QgPSBnZXRPbmVFbGVtZW50KGlzVmFsaWRGZWVkLCB0aGlzLmRvbSk7XG4gICAgICAgIGlmIChmZWVkUm9vdCkge1xuICAgICAgICAgICAgaWYgKGZlZWRSb290Lm5hbWUgPT09IFwiZmVlZFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcyA9IGZlZWRSb290LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZlZWQudHlwZSA9IFwiYXRvbVwiO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJpZFwiLCBcImlkXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGdldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2V0T25lRWxlbWVudChcImxpbmtcIiwgY2hpbGRzKSk7XG4gICAgICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZC5saW5rID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImRlc2NyaXB0aW9uXCIsIFwic3VidGl0bGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZCA9IGZldGNoKFwidXBkYXRlZFwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWQudXBkYXRlZCA9IG5ldyBEYXRlKHVwZGF0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiYXV0aG9yXCIsIFwiZW1haWxcIiwgY2hpbGRzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmZWVkLml0ZW1zID0gZ2V0RWxlbWVudHMoXCJlbnRyeVwiLCBjaGlsZHMpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImlkXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhyZWYgPSBnZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdldE9uZUVsZW1lbnQoXCJsaW5rXCIsIGNoaWxkcmVuKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5saW5rID0gaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSBmZXRjaChcInN1bW1hcnlcIiwgY2hpbGRyZW4pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChcImNvbnRlbnRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHB1YkRhdGUgPSBmZXRjaChcInVwZGF0ZWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHViRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkucHViRGF0ZSA9IG5ldyBEYXRlKHB1YkRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHMgPSBnZXRPbmVFbGVtZW50KFwiY2hhbm5lbFwiLCBmZWVkUm9vdC5jaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZlZWQudHlwZSA9IGZlZWRSb290Lm5hbWUuc3Vic3RyKDAsIDMpO1xuICAgICAgICAgICAgICAgIGZlZWQuaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImxpbmtcIiwgXCJsaW5rXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZCA9IGZldGNoKFwibGFzdEJ1aWxkRGF0ZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWQudXBkYXRlZCA9IG5ldyBEYXRlKHVwZGF0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiYXV0aG9yXCIsIFwibWFuYWdpbmdFZGl0b3JcIiwgY2hpbGRzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmZWVkLml0ZW1zID0gZ2V0RWxlbWVudHMoXCJpdGVtXCIsIGZlZWRSb290LmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwiaWRcIiwgXCJndWlkXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJsaW5rXCIsIFwibGlua1wiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwdWJEYXRlID0gZmV0Y2goXCJwdWJEYXRlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1YkRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUocHViRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlZWQgPSBmZWVkO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbGxiYWNrKGZlZWRSb290ID8gbnVsbCA6IEVycm9yKFwiY291bGRuJ3QgZmluZCByb290IG9mIGZlZWRcIikpO1xuICAgIH07XG4gICAgcmV0dXJuIEZlZWRIYW5kbGVyO1xufShkb21oYW5kbGVyXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5GZWVkSGFuZGxlciA9IEZlZWRIYW5kbGVyO1xuZnVuY3Rpb24gZ2V0RWxlbWVudHMod2hhdCwgd2hlcmUpIHtcbiAgICByZXR1cm4gRG9tVXRpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUod2hhdCwgd2hlcmUsIHRydWUpO1xufVxuZnVuY3Rpb24gZ2V0T25lRWxlbWVudCh3aGF0LCB3aGVyZSkge1xuICAgIHJldHVybiBEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgdHJ1ZSwgMSlbMF07XG59XG5mdW5jdGlvbiBmZXRjaCh3aGF0LCB3aGVyZSwgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIERvbVV0aWxzLmdldFRleHQoRG9tVXRpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUod2hhdCwgd2hlcmUsIHJlY3Vyc2UsIDEpKS50cmltKCk7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSwgZWxlbSkge1xuICAgIGlmICghZWxlbSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGF0dHJpYnMgPSBlbGVtLmF0dHJpYnM7XG4gICAgcmV0dXJuIGF0dHJpYnNbbmFtZV07XG59XG5mdW5jdGlvbiBhZGRDb25kaXRpb25hbGx5KG9iaiwgcHJvcCwgd2hhdCwgd2hlcmUsIHJlY3Vyc2UpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSBmYWxzZTsgfVxuICAgIHZhciB0bXAgPSBmZXRjaCh3aGF0LCB3aGVyZSwgcmVjdXJzZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0bXApXG4gICAgICAgIG9ialtwcm9wXSA9IHRtcDtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRGZWVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcInJzc1wiIHx8IHZhbHVlID09PSBcImZlZWRcIiB8fCB2YWx1ZSA9PT0gXCJyZGY6UkRGXCI7XG59XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7IHhtbE1vZGU6IHRydWUgfTtcbi8qKlxuICogUGFyc2UgYSBmZWVkLlxuICpcbiAqIEBwYXJhbSBmZWVkIFRoZSBmZWVkIHRoYXQgc2hvdWxkIGJlIHBhcnNlZCwgYXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbGx5LCBvcHRpb25zIGZvciBwYXJzaW5nLiBXaGVuIHVzaW5nIHRoaXMgb3B0aW9uLCB5b3UgcHJvYmFibHkgd2FudCB0byBzZXQgYHhtbE1vZGVgIHRvIGB0cnVlYC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VGZWVkKGZlZWQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uczsgfVxuICAgIHZhciBoYW5kbGVyID0gbmV3IEZlZWRIYW5kbGVyKG9wdGlvbnMpO1xuICAgIG5ldyBQYXJzZXJfMS5QYXJzZXIoaGFuZGxlciwgb3B0aW9ucykuZW5kKGZlZWQpO1xuICAgIHJldHVybiBoYW5kbGVyLmZlZWQ7XG59XG5leHBvcnRzLnBhcnNlRmVlZCA9IHBhcnNlRmVlZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBDYWxscyBhIHNwZWNpZmljIGhhbmRsZXIgZnVuY3Rpb24gZm9yIGFsbCBldmVudHMgdGhhdCBhcmUgZW5jb3VudGVyZWQuXG4gKlxuICogQHBhcmFtIGZ1bmMg4oCUIFRoZSBmdW5jdGlvbiB0byBtdWx0aXBsZXggYWxsIGV2ZW50cyB0by5cbiAqL1xudmFyIE11bHRpcGxleEhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXVsdGlwbGV4SGFuZGxlcihmdW5jKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMgPSBmdW5jO1xuICAgIH1cbiAgICAvKiBGb3JtYXQ6IGV2ZW50bmFtZTogbnVtYmVyIG9mIGFyZ3VtZW50cyAqL1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uYXR0cmlidXRlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmF0dHJpYnV0ZVwiLCBuYW1lLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmNkYXRhc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmNkYXRhc3RhcnRcIik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmNkYXRhZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25jZGF0YWVuZFwiKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9udGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbnRleHRcIiwgdGV4dCk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25wcm9jZXNzaW5naW5zdHJ1Y3Rpb25cIiwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ID0gZnVuY3Rpb24gKGNvbW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uY29tbWVudFwiLCBjb21tZW50KTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uY29tbWVudGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uY29tbWVudGVuZFwiKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uY2xvc2V0YWcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25jbG9zZXRhZ1wiLCBuYW1lKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9ub3BlbnRhZyA9IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJzKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbm9wZW50YWdcIiwgbmFtZSwgYXR0cmlicyk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbm9wZW50YWduYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9ub3BlbnRhZ25hbWVcIiwgbmFtZSk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25lbmRcIik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbnBhcnNlcmluaXQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbnBhcnNlcmluaXRcIiwgcGFyc2VyKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9ucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbnJlc2V0XCIpO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpcGxleEhhbmRsZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTXVsdGlwbGV4SGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVG9rZW5pemVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9rZW5pemVyXCIpKTtcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG52YXIgZm9ybVRhZ3MgPSBuZXcgU2V0KFtcbiAgICBcImlucHV0XCIsXG4gICAgXCJvcHRpb25cIixcbiAgICBcIm9wdGdyb3VwXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcInRleHRhcmVhXCJcbl0pO1xudmFyIHBUYWcgPSBuZXcgU2V0KFtcInBcIl0pO1xudmFyIG9wZW5JbXBsaWVzQ2xvc2UgPSB7XG4gICAgdHI6IG5ldyBTZXQoW1widHJcIiwgXCJ0aFwiLCBcInRkXCJdKSxcbiAgICB0aDogbmV3IFNldChbXCJ0aFwiXSksXG4gICAgdGQ6IG5ldyBTZXQoW1widGhlYWRcIiwgXCJ0aFwiLCBcInRkXCJdKSxcbiAgICBib2R5OiBuZXcgU2V0KFtcImhlYWRcIiwgXCJsaW5rXCIsIFwic2NyaXB0XCJdKSxcbiAgICBsaTogbmV3IFNldChbXCJsaVwiXSksXG4gICAgcDogcFRhZyxcbiAgICBoMTogcFRhZyxcbiAgICBoMjogcFRhZyxcbiAgICBoMzogcFRhZyxcbiAgICBoNDogcFRhZyxcbiAgICBoNTogcFRhZyxcbiAgICBoNjogcFRhZyxcbiAgICBzZWxlY3Q6IGZvcm1UYWdzLFxuICAgIGlucHV0OiBmb3JtVGFncyxcbiAgICBvdXRwdXQ6IGZvcm1UYWdzLFxuICAgIGJ1dHRvbjogZm9ybVRhZ3MsXG4gICAgZGF0YWxpc3Q6IGZvcm1UYWdzLFxuICAgIHRleHRhcmVhOiBmb3JtVGFncyxcbiAgICBvcHRpb246IG5ldyBTZXQoW1wib3B0aW9uXCJdKSxcbiAgICBvcHRncm91cDogbmV3IFNldChbXCJvcHRncm91cFwiLCBcIm9wdGlvblwiXSksXG4gICAgZGQ6IG5ldyBTZXQoW1wiZHRcIiwgXCJkZFwiXSksXG4gICAgZHQ6IG5ldyBTZXQoW1wiZHRcIiwgXCJkZFwiXSksXG4gICAgYWRkcmVzczogcFRhZyxcbiAgICBhcnRpY2xlOiBwVGFnLFxuICAgIGFzaWRlOiBwVGFnLFxuICAgIGJsb2NrcXVvdGU6IHBUYWcsXG4gICAgZGV0YWlsczogcFRhZyxcbiAgICBkaXY6IHBUYWcsXG4gICAgZGw6IHBUYWcsXG4gICAgZmllbGRzZXQ6IHBUYWcsXG4gICAgZmlnY2FwdGlvbjogcFRhZyxcbiAgICBmaWd1cmU6IHBUYWcsXG4gICAgZm9vdGVyOiBwVGFnLFxuICAgIGZvcm06IHBUYWcsXG4gICAgaGVhZGVyOiBwVGFnLFxuICAgIGhyOiBwVGFnLFxuICAgIG1haW46IHBUYWcsXG4gICAgbmF2OiBwVGFnLFxuICAgIG9sOiBwVGFnLFxuICAgIHByZTogcFRhZyxcbiAgICBzZWN0aW9uOiBwVGFnLFxuICAgIHRhYmxlOiBwVGFnLFxuICAgIHVsOiBwVGFnLFxuICAgIHJ0OiBuZXcgU2V0KFtcInJ0XCIsIFwicnBcIl0pLFxuICAgIHJwOiBuZXcgU2V0KFtcInJ0XCIsIFwicnBcIl0pLFxuICAgIHRib2R5OiBuZXcgU2V0KFtcInRoZWFkXCIsIFwidGJvZHlcIl0pLFxuICAgIHRmb290OiBuZXcgU2V0KFtcInRoZWFkXCIsIFwidGJvZHlcIl0pXG59O1xudmFyIHZvaWRFbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwiYXJlYVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYmFzZWZvbnRcIixcbiAgICBcImJyXCIsXG4gICAgXCJjb2xcIixcbiAgICBcImNvbW1hbmRcIixcbiAgICBcImVtYmVkXCIsXG4gICAgXCJmcmFtZVwiLFxuICAgIFwiaHJcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImlzaW5kZXhcIixcbiAgICBcImtleWdlblwiLFxuICAgIFwibGlua1wiLFxuICAgIFwibWV0YVwiLFxuICAgIFwicGFyYW1cIixcbiAgICBcInNvdXJjZVwiLFxuICAgIFwidHJhY2tcIixcbiAgICBcIndiclwiXG5dKTtcbnZhciBmb3JlaWduQ29udGV4dEVsZW1lbnRzID0gbmV3IFNldChbXCJtYXRoXCIsIFwic3ZnXCJdKTtcbnZhciBodG1sSW50ZWdyYXRpb25FbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwibWlcIixcbiAgICBcIm1vXCIsXG4gICAgXCJtblwiLFxuICAgIFwibXNcIixcbiAgICBcIm10ZXh0XCIsXG4gICAgXCJhbm5vdGF0aW9uLXhtbFwiLFxuICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgIFwiZGVzY1wiLFxuICAgIFwidGl0bGVcIlxuXSk7XG52YXIgcmVOYW1lRW5kID0gL1xcc3xcXC8vO1xudmFyIFBhcnNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGFyc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhcnNlcihjYnMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3RhZ25hbWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJ2YWx1ZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJzID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX3N0YWNrID0gW107XG4gICAgICAgIF90aGlzLl9mb3JlaWduQ29udGV4dCA9IFtdO1xuICAgICAgICBfdGhpcy5zdGFydEluZGV4ID0gMDtcbiAgICAgICAgX3RoaXMuZW5kSW5kZXggPSBudWxsO1xuICAgICAgICAvLyBBbGlhc2VzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICBfdGhpcy5wYXJzZUNodW5rID0gUGFyc2VyLnByb3RvdHlwZS53cml0ZTtcbiAgICAgICAgX3RoaXMuZG9uZSA9IFBhcnNlci5wcm90b3R5cGUuZW5kO1xuICAgICAgICBfdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIF90aGlzLl9jYnMgPSBjYnMgfHwge307XG4gICAgICAgIF90aGlzLl90YWduYW1lID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgICAgIF90aGlzLl9zdGFjayA9IFtdO1xuICAgICAgICBfdGhpcy5fZm9yZWlnbkNvbnRleHQgPSBbXTtcbiAgICAgICAgX3RoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIF90aGlzLmVuZEluZGV4ID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzID1cbiAgICAgICAgICAgIFwibG93ZXJDYXNlVGFnc1wiIGluIF90aGlzLl9vcHRpb25zXG4gICAgICAgICAgICAgICAgPyAhIV90aGlzLl9vcHRpb25zLmxvd2VyQ2FzZVRhZ3NcbiAgICAgICAgICAgICAgICA6ICFfdGhpcy5fb3B0aW9ucy54bWxNb2RlO1xuICAgICAgICBfdGhpcy5fbG93ZXJDYXNlQXR0cmlidXRlTmFtZXMgPVxuICAgICAgICAgICAgXCJsb3dlckNhc2VBdHRyaWJ1dGVOYW1lc1wiIGluIF90aGlzLl9vcHRpb25zXG4gICAgICAgICAgICAgICAgPyAhIV90aGlzLl9vcHRpb25zLmxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzXG4gICAgICAgICAgICAgICAgOiAhX3RoaXMuX29wdGlvbnMueG1sTW9kZTtcbiAgICAgICAgX3RoaXMuX3Rva2VuaXplciA9IG5ldyAoX3RoaXMuX29wdGlvbnMuVG9rZW5pemVyIHx8IFRva2VuaXplcl8xLmRlZmF1bHQpKF90aGlzLl9vcHRpb25zLCBfdGhpcyk7XG4gICAgICAgIGlmIChfdGhpcy5fY2JzLm9ucGFyc2VyaW5pdClcbiAgICAgICAgICAgIF90aGlzLl9jYnMub25wYXJzZXJpbml0KF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBQYXJzZXIucHJvdG90eXBlLl91cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChpbml0aWFsT2Zmc2V0KSB7XG4gICAgICAgIGlmICh0aGlzLmVuZEluZGV4ID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdG9rZW5pemVyLl9zZWN0aW9uU3RhcnQgPD0gaW5pdGlhbE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLl90b2tlbml6ZXIuX3NlY3Rpb25TdGFydCAtIGluaXRpYWxPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5lbmRJbmRleCArIDE7XG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSB0aGlzLl90b2tlbml6ZXIuZ2V0QWJzb2x1dGVJbmRleCgpO1xuICAgIH07XG4gICAgLy9Ub2tlbml6ZXIgZXZlbnQgaGFuZGxlcnNcbiAgICBQYXJzZXIucHJvdG90eXBlLm9udGV4dCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuZW5kSW5kZXgtLTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnRleHQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KGRhdGEpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbm9wZW50YWduYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RhZ25hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJiBuYW1lIGluIG9wZW5JbXBsaWVzQ2xvc2UpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGVsID0gdm9pZCAwOyBcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9wZW5JbXBsaWVzQ2xvc2VbbmFtZV0uaGFzKChlbCA9IHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdKSk7IHRoaXMub25jbG9zZXRhZyhlbCkpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnhtbE1vZGUgfHwgIXZvaWRFbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YWNrLnB1c2gobmFtZSk7XG4gICAgICAgICAgICBpZiAoZm9yZWlnbkNvbnRleHRFbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JlaWduQ29udGV4dC5wdXNoKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaHRtbEludGVncmF0aW9uRWxlbWVudHMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHQucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbm9wZW50YWduYW1lKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25vcGVudGFnKVxuICAgICAgICAgICAgdGhpcy5fYXR0cmlicyA9IHt9O1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbm9wZW50YWdlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuICAgICAgICBpZiAodGhpcy5fYXR0cmlicykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbm9wZW50YWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25vcGVudGFnKHRoaXMuX3RhZ25hbWUsIHRoaXMuX2F0dHJpYnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiZcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnICYmXG4gICAgICAgICAgICB2b2lkRWxlbWVudHMuaGFzKHRoaXMuX3RhZ25hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl90YWduYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90YWduYW1lID0gXCJcIjtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25jbG9zZXRhZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuICAgICAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcmVpZ25Db250ZXh0RWxlbWVudHMuaGFzKG5hbWUpIHx8XG4gICAgICAgICAgICBodG1sSW50ZWdyYXRpb25FbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdGFjay5sZW5ndGggJiZcbiAgICAgICAgICAgICh0aGlzLl9vcHRpb25zLnhtbE1vZGUgfHwgIXZvaWRFbGVtZW50cy5oYXMobmFtZSkpKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5fc3RhY2subGFzdEluZGV4T2YobmFtZSk7XG4gICAgICAgICAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLl9zdGFjay5sZW5ndGggLSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBvcy0tKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fc3RhY2sucG9wKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrLmxlbmd0aCA9IHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwicFwiICYmICF0aGlzLl9vcHRpb25zLnhtbE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xvc2VDdXJyZW50VGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJiAobmFtZSA9PT0gXCJiclwiIHx8IG5hbWUgPT09IFwicFwiKSkge1xuICAgICAgICAgICAgdGhpcy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VDdXJyZW50VGFnKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25zZWxmY2xvc2luZ3RhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5yZWNvZ25pemVTZWxmQ2xvc2luZyB8fFxuICAgICAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHRbdGhpcy5fZm9yZWlnbkNvbnRleHQubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbm9wZW50YWdlbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5fY2xvc2VDdXJyZW50VGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuX3RhZ25hbWU7XG4gICAgICAgIHRoaXMub25vcGVudGFnZW5kKCk7XG4gICAgICAgIC8vc2VsZi1jbG9zaW5nIHRhZ3Mgd2lsbCBiZSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgICAgICAvLyhjaGVhcGVyIGNoZWNrIHRoYW4gaW4gb25jbG9zZXRhZylcbiAgICAgICAgaWYgKHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdID09PSBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uYXR0cmlibmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdHRyaWJuYW1lID0gbmFtZTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25hdHRyaWJkYXRhID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnZhbHVlICs9IHZhbHVlO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmF0dHJpYmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmF0dHJpYnV0ZSlcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYnV0ZSh0aGlzLl9hdHRyaWJuYW1lLCB0aGlzLl9hdHRyaWJ2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9hdHRyaWJzICYmXG4gICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX2F0dHJpYnMsIHRoaXMuX2F0dHJpYm5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJzW3RoaXMuX2F0dHJpYm5hbWVdID0gdGhpcy5fYXR0cmlidmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2F0dHJpYnZhbHVlID0gXCJcIjtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUuX2dldEluc3RydWN0aW9uTmFtZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaWR4ID0gdmFsdWUuc2VhcmNoKHJlTmFtZUVuZCk7XG4gICAgICAgIHZhciBuYW1lID0gaWR4IDwgMCA/IHZhbHVlIDogdmFsdWUuc3Vic3RyKDAsIGlkeCk7XG4gICAgICAgIGlmICh0aGlzLl9sb3dlckNhc2VUYWdOYW1lcykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25kZWNsYXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdGhpcy5fZ2V0SW5zdHJ1Y3Rpb25OYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbihcIiFcIiArIG5hbWVfMSwgXCIhXCIgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgdmFyIG5hbWVfMiA9IHRoaXMuX2dldEluc3RydWN0aW9uTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oXCI/XCIgKyBuYW1lXzIsIFwiP1wiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uY29tbWVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbig0KTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNvbW1lbnQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25jb21tZW50KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNvbW1lbnRlbmQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25jb21tZW50ZW5kKCk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uY2RhdGEgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnhtbE1vZGUgfHwgdGhpcy5fb3B0aW9ucy5yZWNvZ25pemVDREFUQSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNkYXRhc3RhcnQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGFzdGFydCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnRleHQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2RhdGFlbmQpXG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGFlbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25jb21tZW50KFwiW0NEQVRBW1wiICsgdmFsdWUgKyBcIl1dXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25lcnJvcilcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVycm9yKGVycik7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLl9zdGFjay5sZW5ndGg7IGkgPiAwOyB0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl9zdGFja1stLWldKSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmVuZClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVuZCgpO1xuICAgIH07XG4gICAgLy9SZXNldHMgdGhlIHBhcnNlciB0byBhIGJsYW5rIHN0YXRlLCByZWFkeSB0byBwYXJzZSBhIG5ldyBIVE1MIGRvY3VtZW50XG4gICAgUGFyc2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnJlc2V0KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fdG9rZW5pemVyLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3RhZ25hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N0YWNrID0gW107XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25wYXJzZXJpbml0KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucGFyc2VyaW5pdCh0aGlzKTtcbiAgICB9O1xuICAgIC8vUGFyc2VzIGEgY29tcGxldGUgSFRNTCBkb2N1bWVudCBhbmQgcHVzaGVzIGl0IHRvIHRoZSBoYW5kbGVyXG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZUNvbXBsZXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmVuZChkYXRhKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgdGhpcy5fdG9rZW5pemVyLndyaXRlKGNodW5rKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplci5lbmQoY2h1bmspO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdG9rZW5pemVyLnBhdXNlKCk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdG9rZW5pemVyLnJlc3VtZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFBhcnNlcjtcbn0oZXZlbnRzXzEuRXZlbnRFbWl0dGVyKSk7XG5leHBvcnRzLlBhcnNlciA9IFBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlY29kZV9jb2RlcG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnRcIikpO1xudmFyIGVudGl0aWVzX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW50aXRpZXMvbGliL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgbGVnYWN5X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW50aXRpZXMvbGliL21hcHMvbGVnYWN5Lmpzb25cIikpO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVudGl0aWVzL2xpYi9tYXBzL3htbC5qc29uXCIpKTtcbmZ1bmN0aW9uIHdoaXRlc3BhY2UoYykge1xuICAgIHJldHVybiBjID09PSBcIiBcIiB8fCBjID09PSBcIlxcblwiIHx8IGMgPT09IFwiXFx0XCIgfHwgYyA9PT0gXCJcXGZcIiB8fCBjID09PSBcIlxcclwiO1xufVxuZnVuY3Rpb24gaWZFbHNlU3RhdGUodXBwZXIsIFNVQ0NFU1MsIEZBSUxVUkUpIHtcbiAgICB2YXIgbG93ZXIgPSB1cHBlci50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh1cHBlciA9PT0gbG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0LCBjKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gbG93ZXIpIHtcbiAgICAgICAgICAgICAgICB0Ll9zdGF0ZSA9IFNVQ0NFU1M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0Ll9zdGF0ZSA9IEZBSUxVUkU7XG4gICAgICAgICAgICAgICAgdC5faW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCwgYykge1xuICAgICAgICAgICAgaWYgKGMgPT09IGxvd2VyIHx8IGMgPT09IHVwcGVyKSB7XG4gICAgICAgICAgICAgICAgdC5fc3RhdGUgPSBTVUNDRVNTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdC5fc3RhdGUgPSBGQUlMVVJFO1xuICAgICAgICAgICAgICAgIHQuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcih1cHBlciwgTkVYVF9TVEFURSkge1xuICAgIHZhciBsb3dlciA9IHVwcGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0LCBjKSB7XG4gICAgICAgIGlmIChjID09PSBsb3dlciB8fCBjID09PSB1cHBlcikge1xuICAgICAgICAgICAgdC5fc3RhdGUgPSBORVhUX1NUQVRFO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdC5fc3RhdGUgPSAzIC8qIEluVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHQuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgc3RhdGVCZWZvcmVDZGF0YTEgPSBpZkVsc2VTdGF0ZShcIkNcIiwgMjMgLyogQmVmb3JlQ2RhdGEyICovLCAxNiAvKiBJbkRlY2xhcmF0aW9uICovKTtcbnZhciBzdGF0ZUJlZm9yZUNkYXRhMiA9IGlmRWxzZVN0YXRlKFwiRFwiLCAyNCAvKiBCZWZvcmVDZGF0YTMgKi8sIDE2IC8qIEluRGVjbGFyYXRpb24gKi8pO1xudmFyIHN0YXRlQmVmb3JlQ2RhdGEzID0gaWZFbHNlU3RhdGUoXCJBXCIsIDI1IC8qIEJlZm9yZUNkYXRhNCAqLywgMTYgLyogSW5EZWNsYXJhdGlvbiAqLyk7XG52YXIgc3RhdGVCZWZvcmVDZGF0YTQgPSBpZkVsc2VTdGF0ZShcIlRcIiwgMjYgLyogQmVmb3JlQ2RhdGE1ICovLCAxNiAvKiBJbkRlY2xhcmF0aW9uICovKTtcbnZhciBzdGF0ZUJlZm9yZUNkYXRhNSA9IGlmRWxzZVN0YXRlKFwiQVwiLCAyNyAvKiBCZWZvcmVDZGF0YTYgKi8sIDE2IC8qIEluRGVjbGFyYXRpb24gKi8pO1xudmFyIHN0YXRlQmVmb3JlU2NyaXB0MSA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJSXCIsIDM0IC8qIEJlZm9yZVNjcmlwdDIgKi8pO1xudmFyIHN0YXRlQmVmb3JlU2NyaXB0MiA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJJXCIsIDM1IC8qIEJlZm9yZVNjcmlwdDMgKi8pO1xudmFyIHN0YXRlQmVmb3JlU2NyaXB0MyA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJQXCIsIDM2IC8qIEJlZm9yZVNjcmlwdDQgKi8pO1xudmFyIHN0YXRlQmVmb3JlU2NyaXB0NCA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJUXCIsIDM3IC8qIEJlZm9yZVNjcmlwdDUgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTY3JpcHQxID0gaWZFbHNlU3RhdGUoXCJSXCIsIDM5IC8qIEFmdGVyU2NyaXB0MiAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUFmdGVyU2NyaXB0MiA9IGlmRWxzZVN0YXRlKFwiSVwiLCA0MCAvKiBBZnRlclNjcmlwdDMgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVBZnRlclNjcmlwdDMgPSBpZkVsc2VTdGF0ZShcIlBcIiwgNDEgLyogQWZ0ZXJTY3JpcHQ0ICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTY3JpcHQ0ID0gaWZFbHNlU3RhdGUoXCJUXCIsIDQyIC8qIEFmdGVyU2NyaXB0NSAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUJlZm9yZVN0eWxlMSA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJZXCIsIDQ0IC8qIEJlZm9yZVN0eWxlMiAqLyk7XG52YXIgc3RhdGVCZWZvcmVTdHlsZTIgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiTFwiLCA0NSAvKiBCZWZvcmVTdHlsZTMgKi8pO1xudmFyIHN0YXRlQmVmb3JlU3R5bGUzID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIkVcIiwgNDYgLyogQmVmb3JlU3R5bGU0ICovKTtcbnZhciBzdGF0ZUFmdGVyU3R5bGUxID0gaWZFbHNlU3RhdGUoXCJZXCIsIDQ4IC8qIEFmdGVyU3R5bGUyICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTdHlsZTIgPSBpZkVsc2VTdGF0ZShcIkxcIiwgNDkgLyogQWZ0ZXJTdHlsZTMgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVBZnRlclN0eWxlMyA9IGlmRWxzZVN0YXRlKFwiRVwiLCA1MCAvKiBBZnRlclN0eWxlNCAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUJlZm9yZUVudGl0eSA9IGlmRWxzZVN0YXRlKFwiI1wiLCA1MiAvKiBCZWZvcmVOdW1lcmljRW50aXR5ICovLCA1MyAvKiBJbk5hbWVkRW50aXR5ICovKTtcbnZhciBzdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkgPSBpZkVsc2VTdGF0ZShcIlhcIiwgNTUgLyogSW5IZXhFbnRpdHkgKi8sIDU0IC8qIEluTnVtZXJpY0VudGl0eSAqLyk7XG52YXIgVG9rZW5pemVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRva2VuaXplcihvcHRpb25zLCBjYnMpIHtcbiAgICAgICAgLyoqIFRoZSBjdXJyZW50IHN0YXRlIHRoZSB0b2tlbml6ZXIgaXMgaW4uICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAvKiogVGhlIHJlYWQgYnVmZmVyLiAqL1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICAvKiogVGhlIGJlZ2lubmluZyBvZiB0aGUgc2VjdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyByZWFkLiAqL1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICAvKiogVGhlIGluZGV4IHdpdGhpbiB0aGUgYnVmZmVyIHRoYXQgd2UgYXJlIGN1cnJlbnRseSBsb29raW5nIGF0LiAqL1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGJ1ZmZlciBvY2Nhc2lvbmFsbHkuXG4gICAgICAgICAqIGBfYnVmZmVyT2Zmc2V0YCBrZWVwcyB0cmFjayBvZiBob3cgbWFueSBjaGFyYWN0ZXJzIGhhdmUgYmVlbiByZW1vdmVkLCB0byBtYWtlIHN1cmUgcG9zaXRpb24gaW5mb3JtYXRpb24gaXMgYWNjdXJhdGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgPSAwO1xuICAgICAgICAvKiogU29tZSBiZWhhdmlvciwgZWcuIHdoZW4gZGVjb2RpbmcgZW50aXRpZXMsIGlzIGRvbmUgd2hpbGUgd2UgYXJlIGluIGFub3RoZXIgc3RhdGUuIFRoaXMga2VlcHMgdHJhY2sgb2YgdGhlIG90aGVyIHN0YXRlIHR5cGUuICovXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgLyoqIEZvciBzcGVjaWFsIHBhcnNpbmcgYmVoYXZpb3IgaW5zaWRlIG9mIHNjcmlwdCBhbmQgc3R5bGUgdGFncy4gKi9cbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDEgLyogTm9uZSAqLztcbiAgICAgICAgLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0b2tlbml6ZXIgaGFzIGJlZW4gcGF1c2VkLiAqL1xuICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0b2tlbml6ZXIgaGFzIGZpbmlzaGVkIHJ1bm5pbmcgLyBgLmVuZGAgaGFzIGJlZW4gY2FsbGVkLiAqL1xuICAgICAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYnMgPSBjYnM7XG4gICAgICAgIHRoaXMuX3htbE1vZGUgPSAhIShvcHRpb25zICYmIG9wdGlvbnMueG1sTW9kZSk7XG4gICAgICAgIHRoaXMuX2RlY29kZUVudGl0aWVzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmRlY29kZUVudGl0aWVzKTtcbiAgICB9XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICB0aGlzLl9zcGVjaWFsID0gMSAvKiBOb25lICovO1xuICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlVGV4dCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID4gdGhpcy5fc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyIC8qIEJlZm9yZVRhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9kZWNvZGVFbnRpdGllcyAmJlxuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCA9PT0gMSAvKiBOb25lICovICYmXG4gICAgICAgICAgICBjID09PSBcIiZcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID4gdGhpcy5fc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA1MSAvKiBCZWZvcmVFbnRpdHkgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVUYWdOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDUgLyogQmVmb3JlQ2xvc2luZ1RhZ05hbWUgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPlwiIHx8XG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsICE9PSAxIC8qIE5vbmUgKi8gfHxcbiAgICAgICAgICAgIHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiIVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE1IC8qIEJlZm9yZURlY2xhcmF0aW9uICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE3IC8qIEluUHJvY2Vzc2luZ0luc3RydWN0aW9uICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPVxuICAgICAgICAgICAgICAgICF0aGlzLl94bWxNb2RlICYmIChjID09PSBcInNcIiB8fCBjID09PSBcIlNcIilcbiAgICAgICAgICAgICAgICAgICAgPyAzMSAvKiBCZWZvcmVTcGVjaWFsICovXG4gICAgICAgICAgICAgICAgICAgIDogMyAvKiBJblRhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblRhZ05hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25vcGVudGFnbmFtZVwiKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAod2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NwZWNpYWwgIT09IDEgLyogTm9uZSAqLykge1xuICAgICAgICAgICAgaWYgKGMgPT09IFwic1wiIHx8IGMgPT09IFwiU1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAzMiAvKiBCZWZvcmVTcGVjaWFsRW5kICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNiAvKiBJbkNsb3NpbmdUYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25jbG9zZXRhZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNyAvKiBBZnRlckNsb3NpbmdUYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIC8vc2tpcCBldmVyeXRoaW5nIHVudGlsIFwiPlwiXG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQXR0cmlidXRlTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9ub3BlbnRhZ2VuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNCAvKiBJblNlbGZDbG9zaW5nVGFnICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDkgLyogSW5BdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5TZWxmQ2xvc2luZ1RhZyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uc2VsZmNsb3Npbmd0YWcoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPVwiIHx8IGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYm5hbWUodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxMCAvKiBBZnRlckF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQXR0cmlidXRlTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj1cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxMSAvKiBCZWZvcmVBdHRyaWJ1dGVWYWx1ZSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA5IC8qIEluQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTIgLyogSW5BdHRyaWJ1dGVWYWx1ZURxICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEzIC8qIEluQXR0cmlidXRlVmFsdWVTcSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxNCAvKiBJbkF0dHJpYnV0ZVZhbHVlTnEgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRva2VuXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZURvdWJsZVF1b3RlcyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSAnXCInKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNTEgLyogQmVmb3JlRW50aXR5ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZVNpbmdsZVF1b3RlcyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDUxIC8qIEJlZm9yZUVudGl0eSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVOb1F1b3RlcyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmICh3aGl0ZXNwYWNlKGMpIHx8IGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDUxIC8qIEJlZm9yZUVudGl0eSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZURlY2xhcmF0aW9uID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPVxuICAgICAgICAgICAgYyA9PT0gXCJbXCJcbiAgICAgICAgICAgICAgICA/IDIyIC8qIEJlZm9yZUNkYXRhMSAqL1xuICAgICAgICAgICAgICAgIDogYyA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAxOCAvKiBCZWZvcmVDb21tZW50ICovXG4gICAgICAgICAgICAgICAgICAgIDogMTYgLyogSW5EZWNsYXJhdGlvbiAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5EZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZGVjbGFyYXRpb24odGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24odGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNvbW1lbnQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTkgLyogSW5Db21tZW50ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxNiAvKiBJbkRlY2xhcmF0aW9uICovO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQ29tbWVudCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi1cIilcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjAgLyogQWZ0ZXJDb21tZW50MSAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDb21tZW50MSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi1cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyMSAvKiBBZnRlckNvbW1lbnQyICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxOSAvKiBJbkNvbW1lbnQgKi87XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDb21tZW50MiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgLy9yZW1vdmUgMiB0cmFpbGluZyBjaGFyc1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY29tbWVudCh0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHRoaXMuX3NlY3Rpb25TdGFydCwgdGhpcy5faW5kZXggLSAyKSk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjICE9PSBcIi1cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxOSAvKiBJbkNvbW1lbnQgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZTogc3RheSBpbiBBRlRFUl9DT01NRU5UXzIgKGAtLS0+YClcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGE2ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiW1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDI4IC8qIEluQ2RhdGEgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE2IC8qIEluRGVjbGFyYXRpb24gKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQ2RhdGEgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCJdXCIpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDI5IC8qIEFmdGVyQ2RhdGExICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNkYXRhMSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIl1cIilcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMzAgLyogQWZ0ZXJDZGF0YTIgKi87XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjggLyogSW5DZGF0YSAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDZGF0YTIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIDIgdHJhaWxpbmcgY2hhcnNcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNkYXRhKHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgIT09IFwiXVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDI4IC8qIEluQ2RhdGEgKi87XG4gICAgICAgIH1cbiAgICAgICAgLy9lbHNlOiBzdGF5IGluIEFGVEVSX0NEQVRBXzIgKGBdXV0+YClcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3BlY2lhbCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcImNcIiB8fCBjID09PSBcIkNcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAzMyAvKiBCZWZvcmVTY3JpcHQxICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwidFwiIHx8IGMgPT09IFwiVFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDQzIC8qIEJlZm9yZVN0eWxlMSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMyAvKiBJblRhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3BlY2lhbEVuZCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmICh0aGlzLl9zcGVjaWFsID09PSAyIC8qIFNjcmlwdCAqLyAmJiAoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDM4IC8qIEFmdGVyU2NyaXB0MSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcGVjaWFsID09PSAzIC8qIFN0eWxlICovICYmXG4gICAgICAgICAgICAoYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJUXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDQ3IC8qIEFmdGVyU3R5bGUxICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTY3JpcHQ1ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgPSAyIC8qIFNjcmlwdCAqLztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IDMgLyogSW5UYWdOYW1lICovO1xuICAgICAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU2NyaXB0NSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsID0gMSAvKiBOb25lICovO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA2IC8qIEluQ2xvc2luZ1RhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCAtIDY7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tOyAvL3JlY29uc3VtZSB0aGUgdG9rZW5cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU3R5bGU0ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgPSAzIC8qIFN0eWxlICovO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gMyAvKiBJblRhZ05hbWUgKi87XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDEgLyogTm9uZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNiAvKiBJbkNsb3NpbmdUYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggLSA1O1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9yZWNvbnN1bWUgdGhlIHRva2VuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgfTtcbiAgICAvL2ZvciBlbnRpdGllcyB0ZXJtaW5hdGVkIHdpdGggYSBzZW1pY29sb25cbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9wYXJzZU5hbWVkRW50aXR5U3RyaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL29mZnNldCA9IDFcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSwgdGhpcy5faW5kZXgpLCBtYXAgPSB0aGlzLl94bWxNb2RlID8geG1sX2pzb25fMS5kZWZhdWx0IDogZW50aXRpZXNfanNvbl8xLmRlZmF1bHQ7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgZW50aXR5KSkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChtYXBbZW50aXR5XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvL3BhcnNlcyBsZWdhY3kgZW50aXRpZXMgKHdpdGhvdXQgdHJhaWxpbmcgc2VtaWNvbG9uKVxuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlTGVnYWN5RW50aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLl9zZWN0aW9uU3RhcnQgKyAxO1xuICAgICAgICB2YXIgbGltaXQgPSB0aGlzLl9pbmRleCAtIHN0YXJ0O1xuICAgICAgICBpZiAobGltaXQgPiA2KVxuICAgICAgICAgICAgbGltaXQgPSA2OyAvLyBUaGUgbWF4IGxlbmd0aCBvZiBsZWdhY3kgZW50aXRpZXMgaXMgNlxuICAgICAgICB3aGlsZSAobGltaXQgPj0gMikge1xuICAgICAgICAgICAgLy8gVGhlIG1pbiBsZW5ndGggb2YgbGVnYWN5IGVudGl0aWVzIGlzIDJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyKHN0YXJ0LCBsaW1pdCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxlZ2FjeV9qc29uXzEuZGVmYXVsdCwgZW50aXR5KSkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChsZWdhY3lfanNvbl8xLmRlZmF1bHRbZW50aXR5XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ICs9IGxpbWl0ICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW1pdC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluTmFtZWRFbnRpdHkgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxIDwgdGhpcy5faW5kZXggJiYgIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGMgPCBcImFcIiB8fCBjID4gXCJ6XCIpICYmXG4gICAgICAgICAgICAoYyA8IFwiQVwiIHx8IGMgPiBcIlpcIikgJiZcbiAgICAgICAgICAgIChjIDwgXCIwXCIgfHwgYyA+IFwiOVwiKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3htbE1vZGUgfHwgdGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA9PT0gdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2Jhc2VTdGF0ZSAhPT0gMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgIT09IFwiPVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9kZWNvZGVOdW1lcmljRW50aXR5ID0gZnVuY3Rpb24gKG9mZnNldCwgYmFzZSkge1xuICAgICAgICB2YXIgc2VjdGlvblN0YXJ0ID0gdGhpcy5fc2VjdGlvblN0YXJ0ICsgb2Zmc2V0O1xuICAgICAgICBpZiAoc2VjdGlvblN0YXJ0ICE9PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgLy9wYXJzZSBlbnRpdHlcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHNlY3Rpb25TdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KGVudGl0eSwgYmFzZSk7XG4gICAgICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZWQpKTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0LS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluTnVtZXJpY0VudGl0eSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIjtcIikge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgXCIwXCIgfHwgYyA+IFwiOVwiKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkhleEVudGl0eSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIjtcIikge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoYyA8IFwiYVwiIHx8IGMgPiBcImZcIikgJiZcbiAgICAgICAgICAgIChjIDwgXCJBXCIgfHwgYyA+IFwiRlwiKSAmJlxuICAgICAgICAgICAgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fcnVubmluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICE9PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ICs9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA9PT0gdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvL3RoZSBzZWN0aW9uIGp1c3Qgc3RhcnRlZFxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ICs9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGV2ZXJ5dGhpbmcgdW5uZWNlc3NhcnlcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXIgPSB0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXggLT0gdGhpcy5fc2VjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9zZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvL1RPRE8gbWFrZSBldmVudHMgY29uZGl0aW9uYWxcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIGlmICh0aGlzLl9lbmRlZClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVycm9yKEVycm9yKFwiLndyaXRlKCkgYWZ0ZXIgZG9uZSFcIikpO1xuICAgICAgICB0aGlzLl9idWZmZXIgKz0gY2h1bms7XG4gICAgICAgIHRoaXMuX3BhcnNlKCk7XG4gICAgfTtcbiAgICAvLyBJdGVyYXRlcyB0aHJvdWdoIHRoZSBidWZmZXIsIGNhbGxpbmcgdGhlIGZ1bmN0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAgLy8gU3RhdGVzIHRoYXQgYXJlIG1vcmUgbGlrZWx5IHRvIGJlIGhpdCBhcmUgaGlnaGVyIHVwLCBhcyBhIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LlxuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5faW5kZXggPCB0aGlzLl9idWZmZXIubGVuZ3RoICYmIHRoaXMuX3J1bm5pbmcpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5fYnVmZmVyLmNoYXJBdCh0aGlzLl9pbmRleCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlVGV4dChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxMiAvKiBJbkF0dHJpYnV0ZVZhbHVlRHEgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gOSAvKiBJbkF0dHJpYnV0ZU5hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxOSAvKiBJbkNvbW1lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQ29tbWVudChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMyAvKiBJblRhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluVGFnTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA2IC8qIEluQ2xvc2luZ1RhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQ2xvc2VpbmdUYWdOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDIgLyogQmVmb3JlVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlVGFnTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxMCAvKiBBZnRlckF0dHJpYnV0ZU5hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQXR0cmlidXRlTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxMyAvKiBJbkF0dHJpYnV0ZVZhbHVlU3EgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVTaW5nbGVRdW90ZXMoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTEgLyogQmVmb3JlQXR0cmlidXRlVmFsdWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUgLyogQmVmb3JlQ2xvc2luZ1RhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA3IC8qIEFmdGVyQ2xvc2luZ1RhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ2xvc2VpbmdUYWdOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDMxIC8qIEJlZm9yZVNwZWNpYWwgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNwZWNpYWwoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjAgLyogQWZ0ZXJDb21tZW50MSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDb21tZW50MShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxNCAvKiBJbkF0dHJpYnV0ZVZhbHVlTnEgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVOb1F1b3RlcyhjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0IC8qIEluU2VsZkNsb3NpbmdUYWcgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluU2VsZkNsb3NpbmdUYWcoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTYgLyogSW5EZWNsYXJhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5EZWNsYXJhdGlvbihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxNSAvKiBCZWZvcmVEZWNsYXJhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlRGVjbGFyYXRpb24oYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjEgLyogQWZ0ZXJDb21tZW50MiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDb21tZW50MihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxOCAvKiBCZWZvcmVDb21tZW50ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDb21tZW50KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDMyIC8qIEJlZm9yZVNwZWNpYWxFbmQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNwZWNpYWxFbmQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzggLyogQWZ0ZXJTY3JpcHQxICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclNjcmlwdDEodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzkgLyogQWZ0ZXJTY3JpcHQyICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclNjcmlwdDIodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDAgLyogQWZ0ZXJTY3JpcHQzICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclNjcmlwdDModGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzMgLyogQmVmb3JlU2NyaXB0MSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU2NyaXB0MSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzNCAvKiBCZWZvcmVTY3JpcHQyICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTY3JpcHQyKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM1IC8qIEJlZm9yZVNjcmlwdDMgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVNjcmlwdDModGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzYgLyogQmVmb3JlU2NyaXB0NCAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU2NyaXB0NCh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzNyAvKiBCZWZvcmVTY3JpcHQ1ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQ1KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQxIC8qIEFmdGVyU2NyaXB0NCAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTY3JpcHQ0KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQyIC8qIEFmdGVyU2NyaXB0NSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTY3JpcHQ1KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQzIC8qIEJlZm9yZVN0eWxlMSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU3R5bGUxKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI4IC8qIEluQ2RhdGEgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluQ2RhdGEoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDQgLyogQmVmb3JlU3R5bGUyICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTdHlsZTIodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDUgLyogQmVmb3JlU3R5bGUzICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTdHlsZTModGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDYgLyogQmVmb3JlU3R5bGU0ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTdHlsZTQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDcgLyogQWZ0ZXJTdHlsZTEgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU3R5bGUxKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ4IC8qIEFmdGVyU3R5bGUyICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclN0eWxlMih0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0OSAvKiBBZnRlclN0eWxlMyAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTdHlsZTModGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTAgLyogQWZ0ZXJTdHlsZTQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU3R5bGU0KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE3IC8qIEluUHJvY2Vzc2luZ0luc3RydWN0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJblByb2Nlc3NpbmdJbnN0cnVjdGlvbihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1MyAvKiBJbk5hbWVkRW50aXR5ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbk5hbWVkRW50aXR5KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDIyIC8qIEJlZm9yZUNkYXRhMSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlQ2RhdGExKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUxIC8qIEJlZm9yZUVudGl0eSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlRW50aXR5KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDIzIC8qIEJlZm9yZUNkYXRhMiAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlQ2RhdGEyKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI0IC8qIEJlZm9yZUNkYXRhMyAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlQ2RhdGEzKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI5IC8qIEFmdGVyQ2RhdGExICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNkYXRhMShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzMCAvKiBBZnRlckNkYXRhMiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDZGF0YTIoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjUgLyogQmVmb3JlQ2RhdGE0ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVDZGF0YTQodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjYgLyogQmVmb3JlQ2RhdGE1ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVDZGF0YTUodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjcgLyogQmVmb3JlQ2RhdGE2ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDZGF0YTYoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTUgLyogSW5IZXhFbnRpdHkgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluSGV4RW50aXR5KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDU0IC8qIEluTnVtZXJpY0VudGl0eSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5OdW1lcmljRW50aXR5KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUyIC8qIEJlZm9yZU51bWVyaWNFbnRpdHkgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcInVua25vd24gX3N0YXRlXCIpLCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2luZGV4IDwgdGhpcy5fYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICBpZiAodGhpcy5fZW5kZWQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi5lbmQoKSBhZnRlciBkb25lIVwiKSk7XG4gICAgICAgIGlmIChjaHVuaylcbiAgICAgICAgICAgIHRoaXMud3JpdGUoY2h1bmspO1xuICAgICAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9ydW5uaW5nKVxuICAgICAgICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vaWYgdGhlcmUgaXMgcmVtYWluaW5nIGRhdGEsIGVtaXQgaXQgaW4gYSByZWFzb25hYmxlIHdheVxuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Nicy5vbmVuZCgpO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5faGFuZGxlVHJhaWxpbmdEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAyOCAvKiBJbkNkYXRhICovIHx8XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gMjkgLyogQWZ0ZXJDZGF0YTEgKi8gfHxcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSAzMCAvKiBBZnRlckNkYXRhMiAqLykge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE5IC8qIEluQ29tbWVudCAqLyB8fFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPT09IDIwIC8qIEFmdGVyQ29tbWVudDEgKi8gfHxcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSAyMSAvKiBBZnRlckNvbW1lbnQyICovKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25jb21tZW50KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1MyAvKiBJbk5hbWVkRW50aXR5ICovICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDU0IC8qIEluTnVtZXJpY0VudGl0eSAqLyAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTUgLyogSW5IZXhFbnRpdHkgKi8gJiYgIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgIT09IDMgLyogSW5UYWdOYW1lICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gMTEgLyogQmVmb3JlQXR0cmlidXRlVmFsdWUgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSAxMCAvKiBBZnRlckF0dHJpYnV0ZU5hbWUgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSA5IC8qIEluQXR0cmlidXRlTmFtZSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDEzIC8qIEluQXR0cmlidXRlVmFsdWVTcSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDEyIC8qIEluQXR0cmlidXRlVmFsdWVEcSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDE0IC8qIEluQXR0cmlidXRlVmFsdWVOcSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDYgLyogSW5DbG9zaW5nVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvL2Vsc2UsIGlnbm9yZSByZW1haW5pbmcgZGF0YVxuICAgICAgICAvL1RPRE8gYWRkIGEgd2F5IHRvIHJlbW92ZSBjdXJyZW50IHRhZ1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5nZXRBYnNvbHV0ZUluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyT2Zmc2V0ICsgdGhpcy5faW5kZXg7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9nZXRTZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2VtaXRUb2tlbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2Nic1tuYW1lXSh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2VtaXRQYXJ0aWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9iYXNlU3RhdGUgIT09IDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZGF0YSh2YWx1ZSk7IC8vVE9ETyBpbXBsZW1lbnQgdGhlIG5ldyBldmVudFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUb2tlbml6ZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9rZW5pemVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBhcnNlcl8xID0gcmVxdWlyZShcIi4vUGFyc2VyXCIpO1xuZXhwb3J0cy5QYXJzZXIgPSBQYXJzZXJfMS5QYXJzZXI7XG52YXIgZG9taGFuZGxlcl8xID0gcmVxdWlyZShcImRvbWhhbmRsZXJcIik7XG5leHBvcnRzLkRvbUhhbmRsZXIgPSBkb21oYW5kbGVyXzEuRG9tSGFuZGxlcjtcbmV4cG9ydHMuRGVmYXVsdEhhbmRsZXIgPSBkb21oYW5kbGVyXzEuRG9tSGFuZGxlcjtcbi8vIEhlbHBlciBtZXRob2RzXG4vKipcbiAqIFBhcnNlcyBkYXRhLCByZXR1cm5zIHRoZSByZXN1bHRpbmcgRE9NLlxuICpcbiAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRoYXQgc2hvdWxkIGJlIHBhcnNlZC5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBwYXJzZXIgYW5kIERPTSBidWlsZGVyLlxuICovXG5mdW5jdGlvbiBwYXJzZURPTShkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBuZXcgZG9taGFuZGxlcl8xLkRvbUhhbmRsZXIodm9pZCAwLCBvcHRpb25zKTtcbiAgICBuZXcgUGFyc2VyXzEuUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChkYXRhKTtcbiAgICByZXR1cm4gaGFuZGxlci5kb207XG59XG5leHBvcnRzLnBhcnNlRE9NID0gcGFyc2VET007XG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgaW5zdGFuY2UsIHdpdGggYW4gYXR0YWNoZWQgRE9NIGhhbmRsZXIuXG4gKlxuICogQHBhcmFtIGNiIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbmNlIHBhcnNpbmcgaGFzIGJlZW4gY29tcGxldGVkLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHBhcnNlciBhbmQgRE9NIGJ1aWxkZXIuXG4gKiBAcGFyYW0gZWxlbWVudENiIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSBhIHRhZyBoYXMgYmVlbiBjb21wbGV0ZWQgaW5zaWRlIG9mIHRoZSBET00uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURvbVN0cmVhbShjYiwgb3B0aW9ucywgZWxlbWVudENiKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBuZXcgZG9taGFuZGxlcl8xLkRvbUhhbmRsZXIoY2IsIG9wdGlvbnMsIGVsZW1lbnRDYik7XG4gICAgcmV0dXJuIG5ldyBQYXJzZXJfMS5QYXJzZXIoaGFuZGxlciwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZURvbVN0cmVhbSA9IGNyZWF0ZURvbVN0cmVhbTtcbnZhciBUb2tlbml6ZXJfMSA9IHJlcXVpcmUoXCIuL1Rva2VuaXplclwiKTtcbmV4cG9ydHMuVG9rZW5pemVyID0gVG9rZW5pemVyXzEuZGVmYXVsdDtcbnZhciBFbGVtZW50VHlwZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIikpO1xuZXhwb3J0cy5FbGVtZW50VHlwZSA9IEVsZW1lbnRUeXBlO1xuLyoqXG4gKiBMaXN0IG9mIGFsbCBldmVudHMgdGhhdCB0aGUgcGFyc2VyIGVtaXRzLlxuICpcbiAqIEZvcm1hdDogZXZlbnRuYW1lOiBudW1iZXIgb2YgYXJndW1lbnRzLlxuICovXG5leHBvcnRzLkVWRU5UUyA9IHtcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgY2RhdGFzdGFydDogMCxcbiAgICBjZGF0YWVuZDogMCxcbiAgICB0ZXh0OiAxLFxuICAgIHByb2Nlc3NpbmdpbnN0cnVjdGlvbjogMixcbiAgICBjb21tZW50OiAxLFxuICAgIGNvbW1lbnRlbmQ6IDAsXG4gICAgY2xvc2V0YWc6IDEsXG4gICAgb3BlbnRhZzogMixcbiAgICBvcGVudGFnbmFtZTogMSxcbiAgICBlcnJvcjogMSxcbiAgICBlbmQ6IDBcbn07XG4vKlxuICAgIEFsbCBvZiB0aGUgZm9sbG93aW5nIGV4cG9ydHMgZXhpc3QgZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LlxuICAgIFRoZXkgc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgZXZlbnR1YWxseS5cbiovXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9GZWVkSGFuZGxlclwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9Xcml0YWJsZVN0cmVhbVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9Db2xsZWN0aW5nSGFuZGxlclwiKSk7XG52YXIgRG9tVXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvbXV0aWxzXCIpKTtcbmV4cG9ydHMuRG9tVXRpbHMgPSBEb21VdGlscztcbnZhciBGZWVkSGFuZGxlcl8xID0gcmVxdWlyZShcIi4vRmVlZEhhbmRsZXJcIik7XG5leHBvcnRzLlJzc0hhbmRsZXIgPSBGZWVkSGFuZGxlcl8xLkZlZWRIYW5kbGVyO1xuIiwiZXhwb3J0IGNvbnN0IGluc2VydCA9IChjaGlsZDogTm9kZSwgcGFyZW50OiBOb2RlLCBhbmNob3I/OiBOb2RlKSA9PiB7XHJcbiAgICBpZiAoYW5jaG9yICE9IG51bGwpIHtcclxuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgYW5jaG9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZzogc3RyaW5nKTogRWxlbWVudCA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUZXh0ID0gKHRleHQ6IHN0cmluZyk6IFRleHQgPT4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdG9yID0gIChzZWxlY3Rvcjogc3RyaW5nKTogRWxlbWVudCB8IG51bGwgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50ID0gKHRleHQ6IHN0cmluZyk6IENvbW1lbnQgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZXh0KSIsImV4cG9ydCB7XHJcbiAgICBjcmVhdGVBcHBcclxuICB9IGZyb20gJy4vcmVuZGVyJyIsImltcG9ydCB7IFBhcnNlciwgRG9tSGFuZGxlciB9IGZyb20gJ2h0bWxwYXJzZXIyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8b2JqZWN0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IERvbUhhbmRsZXIoXHJcbiAgICAgIChlcnJvciwgZG9tKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoZG9tKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWVcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihoYW5kbGVyKVxyXG4gICAgcGFyc2VyLndyaXRlKHRlbXBsYXRlKVxyXG4gICAgcGFyc2VyLmVuZCgpXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgY3JlYXRlVGV4dCwgaW5zZXJ0IH0gZnJvbSAnLi9kb20nXHJcbmltcG9ydCB7IENPTlRFWFQgfSBmcm9tICcuL3JlbmRlcidcclxuY29uc3QgZGVsaW1pdGVycyA9IFtge3tgLCBgfX1gXVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhlbDogRWxlbWVudCwgdmFsdWU6IHN0cmluZykge1xyXG4gIGVsLmNsYXNzTmFtZSA9IHZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQXR0cihlbDogRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICB9IGVsc2Uge1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFN0eWxlKGVsOiBFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXR0ciA9IHZhbHVlLnNwbGl0KCc7JylcclxuICBmb3IgKGxldCBpIG9mIGF0dHIpIHtcclxuICAgIDsoPGFueT5lbCkuc3R5bGVbaS5zcGxpdCgnOicpWzBdXSA9IGkuc3BsaXQoJzonKVsxXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hFdmVudChlbDogRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ6IENPTlRFWFQpIHtcclxuICA7KDxhbnk+ZWwpW2BvbiR7a2V5LnNsaWNlKDEpfWBdID0gKCkgPT4ge1xyXG4gICAgY29udGV4dC5tZXRob2RzW3ZhbHVlXS5jYWxsKGNvbnRleHQpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEludGVycG9sYXRpb25UZXh0KGluc2VydFRleHQ6IHN0cmluZywgZWw6IEVsZW1lbnQpIHtcclxuICBpZiAoaW5zZXJ0VGV4dCkge1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHQoaW5zZXJ0VGV4dClcclxuICAgIGluc2VydCh0ZXh0LCBlbClcclxuICB9XHJcbiAgcmV0dXJuICcnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3BzKFxyXG4gIGVsOiBFbGVtZW50LFxyXG4gIGtleTogc3RyaW5nLFxyXG4gIHZhbHVlOiBhbnksXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBzd2l0Y2ggKHRydWUpIHtcclxuICAgIGNhc2Uga2V5ID09PSAnY2xhc3MnOlxyXG4gICAgICBwYXRjaENsYXNzKGVsLCB2YWx1ZSlcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2Uga2V5ID09PSAnc3R5bGUnOlxyXG4gICAgICBwYXRjaFN0eWxlKGVsLCB2YWx1ZSlcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgL146Ly50ZXN0KGtleSk6XHJcbiAgICAgIHBhdGNoRXZlbnQoZWwsIGtleSwgdmFsdWUsIGNvbnRleHQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJbnRlcnBvbGF0aW9uKFxyXG4gIGVsOiBFbGVtZW50LFxyXG4gIHJlc3VsdDogc3RyaW5nLFxyXG4gIGNvbnRleHQ6IENPTlRFWFRcclxuKSB7XHJcbiAgbGV0IGluc2VydFRleHQgPSAnJ1xyXG4gIGxldCByYXdSZXN1bHQgPSByZXN1bHRcclxuICB3aGlsZSAocmF3UmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgaWYgKHN0YXJ0c1dpdGgocmF3UmVzdWx0LCBkZWxpbWl0ZXJzWzBdKSkge1xyXG4gICAgICBpbnNlcnRUZXh0ID0gcGF0Y2hJbnRlcnBvbGF0aW9uVGV4dChpbnNlcnRUZXh0LCBlbClcclxuICAgICAgY29uc3QgW29wZW4sIGNsb3NlXSA9IGRlbGltaXRlcnNcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleDogbnVtYmVyID0gb3Blbi5sZW5ndGhcclxuICAgICAgY29uc3QgY2xvc2VJbmRleDogbnVtYmVyID0gcmF3UmVzdWx0LmluZGV4T2YoY2xvc2UsIG9wZW4ubGVuZ3RoKVxyXG4gICAgICBpZiAoY2xvc2VJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBmbiA9IGByZXR1cm4gJHtyYXdSZXN1bHQuc2xpY2Uoc3RhcnRJbmRleCwgY2xvc2VJbmRleCl9YFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGdW5jdGlvbihmbilcclxuICAgICAgICBpbnNlcnRUZXh0ID0gcGF0Y2hJbnRlcnBvbGF0aW9uVGV4dChyZXN1bHQuY2FsbChjb250ZXh0LnZhbHVlKSwgZWwpXHJcbiAgICAgICAgcmF3UmVzdWx0ID0gcmF3UmVzdWx0LnNsaWNlKGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGgpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluc2VydFRleHQgKz0gcmF3UmVzdWx0WzBdXHJcbiAgICAgIHJhd1Jlc3VsdCA9IHJhd1Jlc3VsdC5zbGljZSgxKVxyXG4gICAgfVxyXG4gIH1cclxuICBpbnNlcnRUZXh0ID0gcGF0Y2hJbnRlcnBvbGF0aW9uVGV4dChpbnNlcnRUZXh0LCBlbClcclxufVxyXG4iLCJpbXBvcnQgeyBlZmZlY3QgfSBmcm9tICcuLi9yZWFjdGl2aXR5L2VmZmVjdCdcclxuaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICcuLi9yZWFjdGl2aXR5L3JlYWN0aXZlJ1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFzZXInXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGluc2VydCwgcXVlcnlTZWxlY3RvciwgY3JlYXRlQ29tbWVudCB9IGZyb20gJy4vZG9tJ1xyXG5pbXBvcnQgeyBwYXRjaFByb3BzLCBwYXRjaEludGVycG9sYXRpb24gfSBmcm9tICcuL3Byb3BzJ1xyXG5cclxuY29uc3QgZW51bSBOT0RFVFlQRSB7XHJcbiAgQVBQID0gJ2FwcCcsXHJcbiAgVEFHID0gJ3RhZycsXHJcbiAgVEVYVCA9ICd0ZXh0JyxcclxuICBDT01QT05FTlQgPSAnY29tcG9uZW50J1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFQUE9QVElPTiB7XHJcbiAgbWl4aW4/OiBBcnJheTxhbnk+XHJcbiAgc3RvcmU/OiBvYmplY3RcclxuICBvbkxhbnVjaD86IEZ1bmN0aW9uXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDT05URVhUIHtcclxuICByZW5kZXI6IG9iamVjdFxyXG4gIHRlbXBsYXRlOiBzdHJpbmdcclxuICBtZXRob2RzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogRnVuY3Rpb25cclxuICB9XHJcbiAgdmFsdWU/OiBhbnlcclxuICBvbkxvYWQ/OiBGdW5jdGlvblxyXG4gIG9uU2hvdz86IEZ1bmN0aW9uXHJcbiAgb25VcGRhdGU/OiBGdW5jdGlvblxyXG4gIG1vdW50ZWQ6IGJvb2xlYW5cclxuICBjb21wb25lbnRzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ09OVEVYVFxyXG4gIH1cclxufVxyXG5cclxubGV0IGFwcE9wdGlvbjogQVBQT1BUSU9OID0ge31cclxubGV0IGRldkZyYWdtZW50SUQgPSAwXHJcbmV4cG9ydCBpbnRlcmZhY2UgRU5PREUgZXh0ZW5kcyBOb2RlIHtcclxuICBjb250ZXh0OiBDT05URVhUXHJcbiAgYXR0cmlicz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IG9iamVjdFxyXG4gIH1cclxuICB0eXBlOiBOT0RFVFlQRVxyXG4gIG5hbWU/OiBzdHJpbmdcclxuICBjaGlsZHJlbjogRU5PREVbXVxyXG4gIGRhdGE/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwcChcclxuICBjb250ZXh0OiBDT05URVhULFxyXG4gIGNvbnRhaW5lcjogRWxlbWVudCxcclxuICBvcHRpb246IEFQUE9QVElPTiA9IHt9XHJcbik6IENPTlRFWFQge1xyXG4gIGlmIChvcHRpb24hLm9uTGFudWNoKSB7XHJcbiAgICBvcHRpb24hLm9uTGFudWNoKG9wdGlvbilcclxuICB9XHJcbiAgYXBwT3B0aW9uID0gb3B0aW9uXHJcbiAgcGF0Y2hBcHAoKVxyXG4gIHBhdGNoQ29tcG9uZW50KGNvbnRleHQsIGNvbnRhaW5lcilcclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaChcclxuICBub2RlOiBFTk9ERSxcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgdHlwZTogTk9ERVRZUEUsXHJcbiAgY29udGV4dDogQ09OVEVYVCxcclxuICBhbmNob3I/OiBOb2RlXHJcbikge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgLy8gY2FzZSBOT0RFVFlQRS5DT01QT05FTlQ6XHJcbiAgICAvLyAgIG5vZGUudHlwZSA9IE5PREVUWVBFLkNPTVBPTkVOVFxyXG4gICAgLy8gICBwYXRjaENvbXBvbmVudChub2RlLCBjb250YWluZXIsIGNvbnRleHQpXHJcbiAgICAvLyAgIGJyZWFrXHJcbiAgICBjYXNlIE5PREVUWVBFLlRBRzpcclxuICAgICAgaWYgKGNvbnRleHQuY29tcG9uZW50cyAmJiBjb250ZXh0LmNvbXBvbmVudHNbbm9kZS5uYW1lXSkge1xyXG4gICAgICAgIHBhdGNoQ29tcG9uZW50KGNvbnRleHQuY29tcG9uZW50c1tub2RlLm5hbWVdLCBjb250YWluZXIpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0Y2hFbGVtZW50KG5vZGUsIGNvbnRhaW5lciwgY29udGV4dCwgYW5jaG9yKVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIE5PREVUWVBFLlRFWFQ6XHJcbiAgICAgIHBhdGNoVGV4dChub2RlLCBjb250YWluZXIsIGNvbnRleHQpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEFwcCgpIHtcclxuICBhcHBPcHRpb24ubWl4aW4gPSBbXVxyXG4gIGFwcE9wdGlvbi5zdG9yZSA9IHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ29tcG9uZW50KGNvbnRleHQ6IENPTlRFWFQsIGNvbnRhaW5lcjogRWxlbWVudCkge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gcXVlcnlTZWxlY3Rvcihjb250ZXh0LnRlbXBsYXRlKVxyXG4gIGNvbnN0IGFuY2hvciA9IHBhdGNoRnJhZ21lbnQoY29udGFpbmVyKVxyXG4gIHBhcnNlKHRlbXBsYXRlLmlubmVySFRNTC50cmltKCkpLnRoZW4oKHJlczogRU5PREVbXSkgPT4ge1xyXG4gICAgZWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgbW91bnRlZCA9IGNvbnRleHQubW91bnRlZFxyXG4gICAgICBpZiAoIW1vdW50ZWQgJiYgY29udGV4dCEub25Mb2FkKSB7XHJcbiAgICAgICAgY29udGV4dC5vbkxvYWQuY2FsbChjb250ZXh0KVxyXG4gICAgICAgIGZvciAobGV0IGkgb2YgcmVzKSB7XHJcbiAgICAgICAgICBwYXRjaChpLCBjb250YWluZXIsIGkudHlwZSwgY29udGV4dCwgYW5jaG9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkaWZmXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiByZXMpIHtcclxuICAgICAgICAgIHBhdGNoKGksIGNvbnRhaW5lciwgaS50eXBlLCBjb250ZXh0LCBhbmNob3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghbW91bnRlZCAmJiBjb250ZXh0IS5vblNob3cpIHtcclxuICAgICAgICBjb250ZXh0Lm1vdW50ZWQgPSB0cnVlXHJcbiAgICAgICAgY29udGV4dC5vblNob3cuY2FsbChjb250ZXh0KVxyXG4gICAgICB9IGVsc2UgaWYgKG1vdW50ZWQgJiYgY29udGV4dCEub25VcGRhdGUpIHtcclxuICAgICAgICBjb250ZXh0Lm9uVXBkYXRlLmNhbGwoY29udGV4dClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEZyYWdtZW50KGNvbnRhaW5lcjogRWxlbWVudCk6IENvbW1lbnQge1xyXG4gIGNvbnN0IGZyYWdtZW50U3RhcnRBbmNob3IgPSBjcmVhdGVDb21tZW50KGBmcmFnbWVudC0ke2RldkZyYWdtZW50SUR9LXN0YXJ0YCkhXHJcbiAgY29uc3QgZnJhZ21lbnRFbmRBbmNob3IgPSBjcmVhdGVDb21tZW50KGBmcmFnbWVudC0ke2RldkZyYWdtZW50SUR9LWVuZGApIVxyXG4gIGRldkZyYWdtZW50SUQrK1xyXG4gIGluc2VydChmcmFnbWVudFN0YXJ0QW5jaG9yLCBjb250YWluZXIpXHJcbiAgaW5zZXJ0KGZyYWdtZW50RW5kQW5jaG9yLCBjb250YWluZXIpXHJcbiAgcmV0dXJuIGZyYWdtZW50RW5kQW5jaG9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoRWxlbWVudChcclxuICBub2RlOiBFTk9ERSxcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgY29udGV4dDogQ09OVEVYVCxcclxuICBhbmNob3I/OiBOb2RlXHJcbikge1xyXG4gIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudChub2RlLm5hbWUpXHJcbiAgZm9yIChsZXQgaSBpbiBub2RlLmF0dHJpYnMpIHtcclxuICAgIHBhdGNoUHJvcHMoZWwsIGksIG5vZGUuYXR0cmlic1tpXSwgY29udGV4dClcclxuICB9XHJcbiAgaWYgKGFuY2hvciAhPT0gbnVsbCkge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcilcclxuICB9IGVsc2Uge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIpXHJcbiAgfVxyXG4gIHBhdGNoQ2hpbGRyZW4obm9kZS5jaGlsZHJlbiwgZWwsIGNvbnRleHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4oXHJcbiAgY2hpbGRyZW46IEFycmF5PEVOT0RFPixcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBmb3IgKGxldCBpIG9mIGNoaWxkcmVuKSB7XHJcbiAgICBwYXRjaChpLCBjb250YWluZXIsIGkudHlwZSwgY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoVGV4dChub2RlOiBFTk9ERSwgY29udGFpbmVyOiBFbGVtZW50LCBjb250ZXh0OiBDT05URVhUKSB7XHJcbiAgcGF0Y2hJbnRlcnBvbGF0aW9uKGNvbnRhaW5lciwgbm9kZS5kYXRhLCBjb250ZXh0KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCAgc3RhcnRzV2l0aCA9IChzb3VyY2U6IHN0cmluZywgc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gc291cmNlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nKVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21waWxlcidcclxuZXhwb3J0ICogZnJvbSAnLi9yZWFjdGl2aXR5JyIsImltcG9ydCB7IGlzU3ltYm9sLGlzT2JqZWN0LGhhc093bixoYXNDaGFuZ2VkIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgdHJhY2ssdHJpZ2dlcixPcGVyYXRpb25UeXBlcyB9IGZyb20gJy4vZWZmZWN0J1xyXG5pbXBvcnQgeyByZWFjdGl2ZSx0b1JhdyB9IGZyb20gJy4vcmVhY3RpdmUnXHJcbmNvbnN0IGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChcclxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhTeW1ib2wpXHJcbiAgICAubWFwKGtleSA9PiAoU3ltYm9sIGFzIGFueSlba2V5XSlcclxuICAgIC5maWx0ZXIoaXNTeW1ib2wpXHJcbilcclxuXHJcbmZ1bmN0aW9uIGdldCh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wsIHJlY2VpdmVyOiBvYmplY3QpIHtcclxuICBsZXQgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKVxyXG4gIC8vIOWGhee9rueahHN5bWJvbOS4jei/m+ihjHRyYWNrXHJcbiAgaWYgKGlzU3ltYm9sKGtleSkgJiYgYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcclxuICAgIHJldHVybiByZXNcclxuICB9XHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5HRVQsIGtleSlcclxuICByZXR1cm4gaXNPYmplY3QocmVzKSA/IHJlYWN0aXZlKHJlcykgOiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0KFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIGtleTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gIHZhbHVlOiB1bmtub3duLFxyXG4gIHJlY2VpdmVyOiBvYmplY3RcclxuKTogYm9vbGVhbiB7XHJcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSlcclxuICBjb25zdCBvbGRWYWx1ZSA9ICh0YXJnZXQgYXMgYW55KVtrZXldXHJcbiAgY29uc3QgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwga2V5KVxyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpXHJcbiAgaWYgKHRhcmdldCA9PT0gdG9SYXcocmVjZWl2ZXIpKSB7XHJcbiAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICBjb25zdCBleHRyYUluZm8gPSB7IG9sZFZhbHVlLCBuZXdWYWx1ZTogdmFsdWUgfVxyXG4gICAgICBpZiAoIWhhZEtleSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5BREQsIGtleSwgZXh0cmFJbmZvKVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5TRVQsIGtleSwgZXh0cmFJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWhhZEtleSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5BREQsIGtleSlcclxuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcclxuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuU0VULCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpXHJcbiAgY29uc3Qgb2xkVmFsdWUgPSAodGFyZ2V0IGFzIGFueSlba2V5XVxyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpXHJcbiAgaWYgKHJlc3VsdCAmJiBoYWRLZXkpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5ERUxFVEUsIGtleSwgeyBvbGRWYWx1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkRFTEVURSwga2V5KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhcyh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSlcclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkhBUywga2V5KVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQ6IG9iamVjdCk6IChzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpW10ge1xyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuSVRFUkFURSlcclxuICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25IYW5kbGVyczogUHJveHlIYW5kbGVyPG9iamVjdD4gPSB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICBkZWxldGVQcm9wZXJ0eSxcclxuICBoYXMsXHJcbiAgb3duS2V5c1xyXG59XHJcbiIsImltcG9ydCB7IHRhcmdldE1hcCB9IGZyb20gJy4vcmVhY3RpdmUnXHJcbmltcG9ydCB7IGlzQXJyYXksZXh0ZW5kLEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnXHJcbmV4cG9ydCB0eXBlIERlcCA9IFNldDxSZWFjdGl2ZUVmZmVjdD5cclxuZXhwb3J0IGludGVyZmFjZSBSZWFjdGl2ZUVmZmVjdDxUID0gYW55PiB7XHJcbiAgKCk6IFRcclxuICBfaXNFZmZlY3Q6IHRydWVcclxuICBhY3RpdmU6IGJvb2xlYW5cclxuICByYXc6ICgpID0+IFRcclxuICBkZXBzOiBBcnJheTxEZXA+XHJcbiAgb3B0aW9uczogUmVhY3RpdmVFZmZlY3RPcHRpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVhY3RpdmVFZmZlY3RPcHRpb25zIHtcclxuICBsYXp5PzogYm9vbGVhblxyXG4gIGNvbXB1dGVkPzogYm9vbGVhblxyXG4gIHNjaGVkdWxlcj86IChydW46IEZ1bmN0aW9uKSA9PiB2b2lkXHJcbiAgb25UcmFjaz86IChldmVudDogRGVidWdnZXJFdmVudCkgPT4gdm9pZFxyXG4gIG9uVHJpZ2dlcj86IChldmVudDogRGVidWdnZXJFdmVudCkgPT4gdm9pZFxyXG4gIG9uU3RvcD86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGVidWdnZXJFdmVudCA9IHtcclxuICBlZmZlY3Q6IFJlYWN0aXZlRWZmZWN0XHJcbiAgdGFyZ2V0OiBvYmplY3RcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlc1xyXG4gIGtleTogYW55XHJcbn0gJiBEZWJ1Z2dlckV2ZW50RXh0cmFJbmZvXHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBPcGVyYXRpb25UeXBlcyB7XHJcbiAgU0VUID0gJ3NldCcsXHJcbiAgQUREID0gJ2FkZCcsXHJcbiAgREVMRVRFID0gJ2RlbGV0ZScsXHJcbiAgQ0xFQVIgPSAnY2xlYXInLFxyXG4gIEdFVCA9ICdnZXQnLFxyXG4gIEhBUyA9ICdoYXMnLFxyXG4gIElURVJBVEUgPSAnaXRlcmF0ZSdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z2dlckV2ZW50RXh0cmFJbmZvIHtcclxuICBuZXdWYWx1ZT86IGFueVxyXG4gIG9sZFZhbHVlPzogYW55XHJcbiAgb2xkVGFyZ2V0PzogTWFwPGFueSwgYW55PiB8IFNldDxhbnk+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlZmZlY3RTdGFjazogUmVhY3RpdmVFZmZlY3RbXSA9IFtdXHJcblxyXG5leHBvcnQgY29uc3QgSVRFUkFURV9LRVkgPSBTeW1ib2woJ2l0ZXJhdGUnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKHRhcmdldDogb2JqZWN0LCB0eXBlOiBPcGVyYXRpb25UeXBlcywga2V5PzogdW5rbm93bikge1xyXG4gIGlmIChlZmZlY3RTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb25zdCBlZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXVxyXG4gIGlmICh0eXBlID09PSBPcGVyYXRpb25UeXBlcy5JVEVSQVRFKSB7XHJcbiAgICBrZXkgPSBJVEVSQVRFX0tFWVxyXG4gIH1cclxuICBsZXQgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KVxyXG4gIGlmIChkZXBzTWFwID09PSB2b2lkIDApIHtcclxuICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCAoZGVwc01hcCA9IG5ldyBNYXAoKSkpXHJcbiAgfVxyXG4gIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkhKVxyXG4gIGlmIChkZXAgPT09IHZvaWQgMCkge1xyXG4gICAgZGVwc01hcC5zZXQoa2V5ISwgKGRlcCA9IG5ldyBTZXQoKSkpXHJcbiAgfVxyXG4gIGlmICghZGVwLmhhcyhlZmZlY3QpKSB7XHJcbiAgICBkZXAuYWRkKGVmZmVjdClcclxuICAgIGVmZmVjdC5kZXBzLnB1c2goZGVwKVxyXG4gICAgaWYgKF9fREVWX18gJiYgZWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xyXG4gICAgICBlZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcclxuICAgICAgICBlZmZlY3QsXHJcbiAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAga2V5XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlcihcclxuICB0YXJnZXQ6IG9iamVjdCxcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlcyxcclxuICBrZXk/OiB1bmtub3duLFxyXG4gIGV4dHJhSW5mbz86IERlYnVnZ2VyRXZlbnRFeHRyYUluZm9cclxuKSB7XHJcbiAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KVxyXG4gIGlmIChkZXBzTWFwID09PSB2b2lkIDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb25zdCBlZmZlY3RzID0gbmV3IFNldDxSZWFjdGl2ZUVmZmVjdD4oKVxyXG4gIGNvbnN0IGNvbXB1dGVkUnVubmVycyA9IG5ldyBTZXQ8UmVhY3RpdmVFZmZlY3Q+KClcclxuICBpZiAodHlwZSA9PT0gT3BlcmF0aW9uVHlwZXMuQ0xFQVIpIHtcclxuICAgIGRlcHNNYXAuZm9yRWFjaChkZXAgPT4ge1xyXG4gICAgICBhZGRSdW5uZXJzKGVmZmVjdHMsIGNvbXB1dGVkUnVubmVycywgZGVwKVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgIGFkZFJ1bm5lcnMoZWZmZWN0cywgY29tcHV0ZWRSdW5uZXJzLCBkZXBzTWFwLmdldChrZXkpKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09IE9wZXJhdGlvblR5cGVzLkFERCB8fCB0eXBlID09PSBPcGVyYXRpb25UeXBlcy5ERUxFVEUpIHtcclxuICAgICAgY29uc3QgaXRlcmF0aW9uS2V5ID0gaXNBcnJheSh0YXJnZXQpID8gJ2xlbmd0aCcgOiBJVEVSQVRFX0tFWVxyXG4gICAgICBhZGRSdW5uZXJzKGVmZmVjdHMsIGNvbXB1dGVkUnVubmVycywgZGVwc01hcC5nZXQoaXRlcmF0aW9uS2V5KSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcnVuID0gKGVmZmVjdDogUmVhY3RpdmVFZmZlY3QpID0+IHtcclxuICAgIHNjaGVkdWxlUnVuKGVmZmVjdCwgdGFyZ2V0LCB0eXBlLCBrZXksIGV4dHJhSW5mbylcclxuICB9XHJcbiAgY29tcHV0ZWRSdW5uZXJzLmZvckVhY2gocnVuKVxyXG4gIGVmZmVjdHMuZm9yRWFjaChydW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJ1bm5lcnMoXHJcbiAgZWZmZWN0czogU2V0PFJlYWN0aXZlRWZmZWN0PixcclxuICBjb21wdXRlZFJ1bm5lcnM6IFNldDxSZWFjdGl2ZUVmZmVjdD4sXHJcbiAgZWZmZWN0c1RvQWRkOiBTZXQ8UmVhY3RpdmVFZmZlY3Q+IHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmIChlZmZlY3RzVG9BZGQgIT09IHZvaWQgMCkge1xyXG4gICAgZWZmZWN0c1RvQWRkLmZvckVhY2goZWZmZWN0ID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC5vcHRpb25zLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgY29tcHV0ZWRSdW5uZXJzLmFkZChlZmZlY3QpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2NoZWR1bGVSdW4oXHJcbiAgZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCxcclxuICB0YXJnZXQ6IG9iamVjdCxcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlcyxcclxuICBrZXk6IHVua25vd24sXHJcbiAgZXh0cmFJbmZvPzogRGVidWdnZXJFdmVudEV4dHJhSW5mb1xyXG4pIHtcclxuICBpZiAoX19ERVZfXyAmJiBlZmZlY3Qub3B0aW9ucy5vblRyaWdnZXIpIHtcclxuICAgIGNvbnN0IGV2ZW50OiBEZWJ1Z2dlckV2ZW50ID0ge1xyXG4gICAgICBlZmZlY3QsXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAga2V5LFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgICBlZmZlY3Qub3B0aW9ucy5vblRyaWdnZXIoZXh0cmFJbmZvID8gZXh0ZW5kKGV2ZW50LCBleHRyYUluZm8pIDogZXZlbnQpXHJcbiAgfVxyXG4gIGlmIChlZmZlY3Qub3B0aW9ucy5zY2hlZHVsZXIgIT09IHZvaWQgMCkge1xyXG4gICAgZWZmZWN0Lm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdClcclxuICB9IGVsc2Uge1xyXG4gICAgZWZmZWN0KClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlRWZmZWN0PFQgPSBhbnk+KFxyXG4gIGZuOiAoKSA9PiBULFxyXG4gIG9wdGlvbnM6IFJlYWN0aXZlRWZmZWN0T3B0aW9uc1xyXG4pOiBSZWFjdGl2ZUVmZmVjdDxUPiB7XHJcbiAgY29uc3QgZWZmZWN0ID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoLi4uYXJnczogdW5rbm93bltdKTogdW5rbm93biB7XHJcbiAgICByZXR1cm4gcnVuKGVmZmVjdCwgZm4sIGFyZ3MpXHJcbiAgfSBhcyBSZWFjdGl2ZUVmZmVjdFxyXG4gIGVmZmVjdC5faXNFZmZlY3QgPSB0cnVlXHJcbiAgZWZmZWN0LmFjdGl2ZSA9IHRydWVcclxuICBlZmZlY3QucmF3ID0gZm5cclxuICBlZmZlY3QuZGVwcyA9IFtdXHJcbiAgZWZmZWN0Lm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgcmV0dXJuIGVmZmVjdFxyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCwgZm46IEZ1bmN0aW9uLCBhcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcclxuICBpZiAoIWVmZmVjdC5hY3RpdmUpIHtcclxuICAgIHJldHVybiBmbiguLi5hcmdzKVxyXG4gIH1cclxuICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdCkpIHtcclxuICAgIGNsZWFudXAoZWZmZWN0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3QpXHJcbiAgICAgIHJldHVybiBmbiguLi5hcmdzKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgZWZmZWN0U3RhY2sucG9wKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFudXAoZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCkge1xyXG4gIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0XHJcbiAgaWYgKGRlcHMubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGVwc1tpXS5kZWxldGUoZWZmZWN0KVxyXG4gICAgfVxyXG4gICAgZGVwcy5sZW5ndGggPSAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0PFQgPSBhbnk+KFxyXG4gIGZuOiAoKSA9PiBULFxyXG4gIG9wdGlvbnM6IFJlYWN0aXZlRWZmZWN0T3B0aW9ucyA9IEVNUFRZX09CSlxyXG4pOiBSZWFjdGl2ZUVmZmVjdDxUPiB7XHJcbiAgaWYgKGlzRWZmZWN0KGZuKSkge1xyXG4gICAgZm4gPSBmbi5yYXdcclxuICB9XHJcbiAgY29uc3QgZWZmZWN0ID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpXHJcbiAgaWYgKCFvcHRpb25zLmxhenkpIHtcclxuICAgIGVmZmVjdCgpXHJcbiAgfVxyXG4gIHJldHVybiBlZmZlY3RcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWZmZWN0KGZuOiBhbnkpOiBmbiBpcyBSZWFjdGl2ZUVmZmVjdCB7XHJcbiAgcmV0dXJuIGZuICE9IG51bGwgJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlXHJcbn0iLCJleHBvcnQge1xyXG4gIHJlYWN0aXZlXHJcbn0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuXHJcbmV4cG9ydCB7XHJcbiAgZWZmZWN0XHJcbn0gZnJvbSAnLi9lZmZlY3QnIiwiaW1wb3J0IHsgaXNTeW1ib2wsaXNPYmplY3QsaGFzT3duLGhhc0NoYW5nZWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyB0cmFjayx0cmlnZ2VyLE9wZXJhdGlvblR5cGVzIH0gZnJvbSAnLi9lZmZlY3QnXHJcbmltcG9ydCB7IHJlYWN0aXZlLHRvUmF3IH0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuY29uc3QgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KFxyXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbClcclxuICAgIC5tYXAoa2V5ID0+IChTeW1ib2wgYXMgYW55KVtrZXldKVxyXG4gICAgLmZpbHRlcihpc1N5bWJvbClcclxuKVxyXG5cclxuZnVuY3Rpb24gZ2V0KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCwgcmVjZWl2ZXI6IG9iamVjdCkge1xyXG4gIGxldCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpXHJcbiAgLy8g5YaF572u55qEc3ltYm9s5LiN6L+b6KGMdHJhY2tcclxuICBpZiAoaXNTeW1ib2woa2V5KSAmJiBidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkdFVCwga2V5KVxyXG4gIHJldHVybiBpc09iamVjdChyZXMpID8gcmVhY3RpdmUocmVzKSA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQoXHJcbiAgdGFyZ2V0OiBvYmplY3QsXHJcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgdmFsdWU6IHVua25vd24sXHJcbiAgcmVjZWl2ZXI6IG9iamVjdFxyXG4pOiBib29sZWFuIHtcclxuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKVxyXG4gIGNvbnN0IG9sZFZhbHVlID0gKHRhcmdldCBhcyBhbnkpW2tleV1cclxuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcilcclxuICBpZiAodGFyZ2V0ID09PSB0b1JhdyhyZWNlaXZlcikpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIGNvbnN0IGV4dHJhSW5mbyA9IHsgb2xkVmFsdWUsIG5ld1ZhbHVlOiB2YWx1ZSB9XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLlNFVCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5KVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5TRVQsIGtleSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSlcclxuICBjb25zdCBvbGRWYWx1ZSA9ICh0YXJnZXQgYXMgYW55KVtrZXldXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSlcclxuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xyXG4gICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkRFTEVURSwga2V5LCB7IG9sZFZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuREVMRVRFLCBrZXkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzKHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuaGFzKHRhcmdldCwga2V5KVxyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuSEFTLCBrZXkpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldDogb2JqZWN0KTogKHN0cmluZyB8IG51bWJlciB8IHN5bWJvbClbXSB7XHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5JVEVSQVRFKVxyXG4gIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsSGFuZGxlcnM6IFByb3h5SGFuZGxlcjxvYmplY3Q+ID0ge1xyXG4gIGdldCxcclxuICBzZXQsXHJcbiAgZGVsZXRlUHJvcGVydHksXHJcbiAgaGFzLFxyXG4gIG93bktleXNcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxIYW5kbGVycyB9IGZyb20gJy4vbm9ybWFsSGFuZGxlcnMnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb25IYW5kbGVycyB9IGZyb20gJy4vY29sbGVjdGlvbkhhbmRsZXJzJ1xyXG5pbXBvcnQgeyBpc09iamVjdCwgbWFrZU1hcCwgdG9SYXdUeXBlIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgRGVwIH0gZnJvbSAnLi9lZmZlY3QnXHJcbmNvbnN0IGNvbGxlY3Rpb25UeXBlcyA9IG5ldyBTZXQ8RnVuY3Rpb24+KFtTZXQsIE1hcCwgV2Vha01hcCwgV2Vha1NldF0pXHJcbmNvbnN0IHJhd1RvUmVhY3RpdmUgPSBuZXcgV2Vha01hcDxhbnksIGFueT4oKVxyXG5jb25zdCByZWFjdGl2ZVRvUmF3ID0gbmV3IFdlYWtNYXA8YW55LCBhbnk+KClcclxuY29uc3QgaXNPYnNlcnZhYmxlVHlwZSA9IG1ha2VNYXAoJ09iamVjdCxBcnJheSxNYXAsU2V0LFdlYWtNYXAsV2Vha1NldCcpXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZSh0YXJnZXQ6IG9iamVjdCkge1xyXG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdChcclxuICAgIHRhcmdldCxcclxuICAgIHJhd1RvUmVhY3RpdmUsXHJcbiAgICByZWFjdGl2ZVRvUmF3LFxyXG4gICAgbm9ybWFsSGFuZGxlcnMsXHJcbiAgICBjb2xsZWN0aW9uSGFuZGxlcnNcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIHRvUHJveHk6IFdlYWtNYXA8YW55LCBhbnk+LFxyXG4gIHRvUmF3OiBXZWFrTWFwPGFueSwgYW55PixcclxuICBub3JtYWxIYW5kbGVyczogUHJveHlIYW5kbGVyPGFueT4sXHJcbiAgY29sbGVjdGlvbkhhbmRsZXJzOiBQcm94eUhhbmRsZXI8YW55PlxyXG4pIHtcclxuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgY2Fubm90IGJlIG1hZGUgcmVhY3RpdmU6ICR7U3RyaW5nKHRhcmdldCl9YClcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXRcclxuICB9XHJcbiAgbGV0IG9ic2VydmVkID0gdG9Qcm94eS5nZXQodGFyZ2V0KVxyXG4gIGlmIChvYnNlcnZlZCAhPT0gdm9pZCAwKSB7XHJcbiAgICByZXR1cm4gb2JzZXJ2ZWRcclxuICB9XHJcbiAgaWYgKHRvUmF3Lmhhcyh0YXJnZXQpKSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbiAgfVxyXG4gIGlmICghaXNPYnNlcnZhYmxlVHlwZSh0b1Jhd1R5cGUodGFyZ2V0KSkpIHtcclxuICAgIHJldHVybiB0YXJnZXRcclxuICB9XHJcbiAgb2JzZXJ2ZWQgPSBuZXcgUHJveHkoXHJcbiAgICB0YXJnZXQsXHJcbiAgICBjb2xsZWN0aW9uVHlwZXMuaGFzKHRhcmdldC5jb25zdHJ1Y3RvcilcclxuICAgICAgPyBjb2xsZWN0aW9uSGFuZGxlcnNcclxuICAgICAgOiBub3JtYWxIYW5kbGVyc1xyXG4gIClcclxuICB0b1Byb3h5LnNldCh0YXJnZXQsIG9ic2VydmVkKVxyXG4gIHRvUmF3LnNldChvYnNlcnZlZCwgdGFyZ2V0KVxyXG4gIGlmICghdGFyZ2V0TWFwLmhhcyh0YXJnZXQpKSB7XHJcbiAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgbmV3IE1hcCgpKVxyXG4gIH1cclxuICByZXR1cm4gb2JzZXJ2ZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRhcmdldE1hcCA9IG5ldyBXZWFrTWFwPGFueSwgS2V5VG9EZXBNYXA+KClcclxuXHJcbmV4cG9ydCB0eXBlIEtleVRvRGVwTWFwID0gTWFwPGFueSwgRGVwPlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvUmF3PFQ+KG9ic2VydmVkOiBUKTogVCB7XHJcbiAgcmV0dXJuIHJlYWN0aXZlVG9SYXcuZ2V0KG9ic2VydmVkKSB8fCBvYnNlcnZlZFxyXG59IiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyBSZWNvcmQ8YW55LCBhbnk+ID0+XHJcbiAgdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdG9SYXdUeXBlID0gKHZhbHVlOiB1bmtub3duKTogc3RyaW5nID0+XHJcbiAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcclxuXHJcbmV4cG9ydCBjb25zdCBpc1N5bWJvbCA9ICh2YWw6IHVua25vd24pOiB2YWwgaXMgc3ltYm9sID0+IHR5cGVvZiB2YWwgPT09ICdzeW1ib2wnXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKFxyXG4gIHN0cjogc3RyaW5nLFxyXG4gIGV4cGVjdHNMb3dlckNhc2U/OiBib29sZWFuXHJcbik6IChrZXk6IHN0cmluZykgPT4gYm9vbGVhbiB7XHJcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICBjb25zdCBsaXN0OiBBcnJheTxzdHJpbmc+ID0gc3RyLnNwbGl0KCcsJylcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIG1hcFtsaXN0W2ldXSA9IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyB2YWwgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogdmFsID0+ICEhbWFwW3ZhbF1cclxufVxyXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXlcclxuXHJcbmV4cG9ydCBjb25zdCBleHRlbmQgPSA8VCBleHRlbmRzIG9iamVjdCwgVSBleHRlbmRzIG9iamVjdD4oXHJcbiAgYTogVCxcclxuICBiOiBVXHJcbik6IFQgJiBVID0+IHtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBiKSB7XHJcbiAgICA7KGEgYXMgYW55KVtrZXldID0gYltrZXldXHJcbiAgfVxyXG4gIHJldHVybiBhIGFzIGFueVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzT3duID0gKFxyXG4gIHZhbDogb2JqZWN0LFxyXG4gIGtleTogc3RyaW5nIHwgc3ltYm9sXHJcbik6IGtleSBpcyBrZXlvZiB0eXBlb2YgdmFsID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSlcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKHZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpOiBib29sZWFuID0+XHJcbiAgdmFsdWUgIT09IG9sZFZhbHVlICYmICh2YWx1ZSA9PT0gdmFsdWUgfHwgb2xkVmFsdWUgPT09IG9sZFZhbHVlKVxyXG5cclxuZXhwb3J0IGNvbnN0IEVNUFRZX09CSjogeyByZWFkb25seSBba2V5OiBzdHJpbmddOiBhbnkgfSA9IF9fREVWX19cclxuICA/IE9iamVjdC5mcmVlemUoe30pXHJcbiAgOiB7fVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9