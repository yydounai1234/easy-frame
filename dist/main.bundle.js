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
exports.replace = function (prev, next, parent) { return parent.replaceChild(next, prev); };


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
function patchInterpolation(result, context) {
    var resultText = '';
    var rawResult = result;
    while (rawResult.length) {
        if (utils_1.startsWith(rawResult, delimiters[0])) {
            var open_1 = delimiters[0], close_1 = delimiters[1];
            var startIndex = open_1.length;
            var closeIndex = rawResult.indexOf(close_1, open_1.length);
            if (closeIndex !== -1) {
                var fn = "return " + rawResult.slice(startIndex, closeIndex);
                var result_1 = new Function(fn);
                resultText += result_1.call(context.value);
                rawResult = rawResult.slice(closeIndex + close_1.length);
            }
        }
        else {
            resultText += rawResult[0];
            rawResult = rawResult.slice(1);
        }
    }
    return resultText;
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
                patchComponent(context.components[node.name], container, anchor);
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
function update(n1, n2, context, container) {
    n2.forEach(function (item, index) {
        if (item.type === "tag") {
            if (context.components && context.components[item.name]) {
            }
            else {
                if (n1[index] && n1[index].type === "tag") {
                    if (item.children.length === 0) {
                    }
                    else {
                        update(item.children, n1[index].children, context, container);
                    }
                }
                else {
                }
            }
        }
        else if (item.type === "text") {
            if (n1[index] && n1[index].type === "text") {
                updateText(n1[index], item, context);
            }
            else {
                console.log('直接替换节点,待完成');
            }
        }
    });
}
function patchApp() {
    appOption.mixin = [];
    appOption.store = {};
}
function patchComponent(context, container, anchor) {
    var template = dom_1.querySelector(context.template);
    var componentAnchor = patchFragment(container, anchor);
    paser_1.parse(template.innerHTML.trim()).then(function (res) {
        effect_1.effect(function () {
            var mounted = context.mounted;
            if (!mounted) {
                context.mounted = true;
                if (context.onLoad) {
                    context.onLoad.call(context);
                }
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var i = res_1[_i];
                    patch(i, container, i.type, context, componentAnchor);
                }
                if (context.onShow) {
                    context.onShow.call(context);
                }
            }
            else {
                update(context.subTree, res, context, container);
                if (context.onUpdate) {
                    context.onUpdate.call(context);
                }
            }
            context.subTree = res;
        });
    });
}
function patchFragment(container, anchor) {
    var fragmentStartAnchor = dom_1.createComment("fragment-" + devFragmentID + "-start");
    var fragmentEndAnchor = dom_1.createComment("fragment-" + devFragmentID + "-end");
    devFragmentID++;
    if (anchor !== null) {
        dom_1.insert(fragmentStartAnchor, container, anchor);
        dom_1.insert(fragmentEndAnchor, container, anchor);
    }
    else {
        dom_1.insert(fragmentStartAnchor, container);
        dom_1.insert(fragmentEndAnchor, container);
    }
    return fragmentEndAnchor;
}
function patchElement(node, container, context, anchor) {
    var el = node.el = dom_1.createElement(node.name);
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
    var text = props_1.patchInterpolation(node.data, context);
    if (text) {
        node.el = container;
        var insertText = node.text = dom_1.createText(text);
        dom_1.insert(insertText, container);
    }
}
function updateText(n1, n2, context) {
    var text2 = props_1.patchInterpolation(n2.data, context);
    var insertText = dom_1.createText(text2);
    n2.el = n1.el;
    dom_1.replace(n1.text, insertText, n1.el);
    n2.text = insertText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21lbGVtZW50dHlwZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21oYW5kbGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90YWd0eXBlcy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Db2xsZWN0aW5nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9GZWVkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9NdWx0aXBsZXhIYW5kbGVyLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9kb20udHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2NvbXBpbGVyL3Bhc2VyLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvY29tcGlsZXIvcHJvcHMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2Vhc3kudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L2NvbGxlY3Rpb25IYW5kbGVycy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvZWZmZWN0LnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvbm9ybWFsSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L3JlYWN0aXZlLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDMUMsZUFBZSxtQkFBTyxD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Q0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hNYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLDJEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUNBQXlDLG1CQUFPLENBQUMsc0ZBQStCO0FBQ2hGLHNDQUFzQyxtQkFBTyxDQUFDLHVGQUFpQztBQUMvRSxvQ0FBb0MsbUJBQU8sQ0FBQyxtRkFBK0I7QUFDM0UsaUNBQWlDLG1CQUFPLENBQUMsNkVBQTRCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxMUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsMERBQVU7QUFDakM7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywwREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LGVBQU8sR0FBRyxLQUFLLENBQUMsT0FBTztBQUV2QixjQUFNLEdBQUcsVUFDcEIsQ0FBSSxFQUNKLENBQUk7SUFFSixLQUFLLElBQU0sR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNuQixDQUFDO1FBQUMsQ0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDMUI7SUFDRCxPQUFPLENBQVE7QUFDakIsQ0FBQztBQUVZLGNBQU0sR0FBRyxVQUNwQixHQUFXLEVBQ1gsR0FBb0IsSUFDUSxhQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUE5QyxDQUE4QztBQUUvRCxrQkFBVSxHQUFHLFVBQUMsS0FBVSxFQUFFLFFBQWE7SUFDbEQsWUFBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQztBQUFoRSxDQUFnRTtBQUVyRCxpQkFBUyxHQUFvQyxLQUFPO0lBQy9ELENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsU0FBRTs7Ozs7Ozs7Ozs7O0FDeENOLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImVhc3lcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZWFzeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlYXN5XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lYXN5LnRzXCIpO1xuIiwiLypcbiAgTW9kdWxlIGRlcGVuZGVuY2llc1xuKi9cbnZhciBFbGVtZW50VHlwZSA9IHJlcXVpcmUoJ2RvbWVsZW1lbnR0eXBlJyk7XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdlbnRpdGllcycpO1xuXG4vKiBtaXhlZC1jYXNlIFNWRyBhbmQgTWF0aE1MIHRhZ3MgJiBhdHRyaWJ1dGVzXG4gICByZWNvZ25pemVkIGJ5IHRoZSBIVE1MIHBhcnNlciwgc2VlXG4gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9wYXJzaW5nLmh0bWwjcGFyc2luZy1tYWluLWluZm9yZWlnblxuKi9cbnZhciBmb3JlaWduTmFtZXMgPSByZXF1aXJlKCcuL2ZvcmVpZ25OYW1lcy5qc29uJyk7XG5mb3JlaWduTmFtZXMuZWxlbWVudE5hbWVzLl9fcHJvdG9fXyA9IG51bGw7IC8qIHVzZSBhcyBhIHNpbXBsZSBkaWN0aW9uYXJ5ICovXG5mb3JlaWduTmFtZXMuYXR0cmlidXRlTmFtZXMuX19wcm90b19fID0gbnVsbDtcblxudmFyIHVuZW5jb2RlZEVsZW1lbnRzID0ge1xuICBfX3Byb3RvX186IG51bGwsXG4gIHN0eWxlOiB0cnVlLFxuICBzY3JpcHQ6IHRydWUsXG4gIHhtcDogdHJ1ZSxcbiAgaWZyYW1lOiB0cnVlLFxuICBub2VtYmVkOiB0cnVlLFxuICBub2ZyYW1lczogdHJ1ZSxcbiAgcGxhaW50ZXh0OiB0cnVlLFxuICBub3NjcmlwdDogdHJ1ZVxufTtcblxuLypcbiAgRm9ybWF0IGF0dHJpYnV0ZXNcbiovXG5mdW5jdGlvbiBmb3JtYXRBdHRycyhhdHRyaWJ1dGVzLCBvcHRzKSB7XG4gIGlmICghYXR0cmlidXRlcykgcmV0dXJuO1xuXG4gIHZhciBvdXRwdXQgPSAnJztcbiAgdmFyIHZhbHVlO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXR0cmlidXRlc1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIGlmIChvdXRwdXQpIHtcbiAgICAgIG91dHB1dCArPSAnICc7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMueG1sTW9kZSA9PT0gJ2ZvcmVpZ24nKSB7XG4gICAgICAvKiBmaXggdXAgbWl4ZWQtY2FzZSBhdHRyaWJ1dGUgbmFtZXMgKi9cbiAgICAgIGtleSA9IGZvcmVpZ25OYW1lcy5hdHRyaWJ1dGVOYW1lc1trZXldIHx8IGtleTtcbiAgICB9XG4gICAgb3V0cHV0ICs9IGtleTtcbiAgICBpZiAoKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJykgfHwgb3B0cy54bWxNb2RlKSB7XG4gICAgICBvdXRwdXQgKz1cbiAgICAgICAgJz1cIicgK1xuICAgICAgICAob3B0cy5kZWNvZGVFbnRpdGllc1xuICAgICAgICAgID8gZW50aXRpZXMuZW5jb2RlWE1MKHZhbHVlKVxuICAgICAgICAgIDogdmFsdWUucmVwbGFjZSgvXFxcIi9nLCAnJnF1b3Q7JykpICtcbiAgICAgICAgJ1wiJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKlxuICBTZWxmLWVuY2xvc2luZyB0YWdzIChzdG9sZW4gZnJvbSBub2RlLWh0bWxwYXJzZXIpXG4qL1xudmFyIHNpbmdsZVRhZyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBhcmVhOiB0cnVlLFxuICBiYXNlOiB0cnVlLFxuICBiYXNlZm9udDogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgY29tbWFuZDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGZyYW1lOiB0cnVlLFxuICBocjogdHJ1ZSxcbiAgaW1nOiB0cnVlLFxuICBpbnB1dDogdHJ1ZSxcbiAgaXNpbmRleDogdHJ1ZSxcbiAga2V5Z2VuOiB0cnVlLFxuICBsaW5rOiB0cnVlLFxuICBtZXRhOiB0cnVlLFxuICBwYXJhbTogdHJ1ZSxcbiAgc291cmNlOiB0cnVlLFxuICB0cmFjazogdHJ1ZSxcbiAgd2JyOiB0cnVlXG59O1xuXG52YXIgcmVuZGVyID0gKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9tLCBvcHRzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkb20pICYmICFkb20uY2hlZXJpbykgZG9tID0gW2RvbV07XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBvdXRwdXQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvbS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbGVtID0gZG9tW2ldO1xuXG4gICAgaWYgKGVsZW0udHlwZSA9PT0gJ3Jvb3QnKSBvdXRwdXQgKz0gcmVuZGVyKGVsZW0uY2hpbGRyZW4sIG9wdHMpO1xuICAgIGVsc2UgaWYgKEVsZW1lbnRUeXBlLmlzVGFnKGVsZW0pKSBvdXRwdXQgKz0gcmVuZGVyVGFnKGVsZW0sIG9wdHMpO1xuICAgIGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuRGlyZWN0aXZlKVxuICAgICAgb3V0cHV0ICs9IHJlbmRlckRpcmVjdGl2ZShlbGVtKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNvbW1lbnQpIG91dHB1dCArPSByZW5kZXJDb21tZW50KGVsZW0pO1xuICAgIGVsc2UgaWYgKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuQ0RBVEEpIG91dHB1dCArPSByZW5kZXJDZGF0YShlbGVtKTtcbiAgICBlbHNlIG91dHB1dCArPSByZW5kZXJUZXh0KGVsZW0sIG9wdHMpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0pO1xuXG52YXIgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyA9IFtcbiAgJ21pJyxcbiAgJ21vJyxcbiAgJ21uJyxcbiAgJ21zJyxcbiAgJ210ZXh0JyxcbiAgJ2Fubm90YXRpb24teG1sJyxcbiAgJ2ZvcmVpZ25PYmplY3QnLFxuICAnZGVzYycsXG4gICd0aXRsZSdcbl07XG5cbmZ1bmN0aW9uIHJlbmRlclRhZyhlbGVtLCBvcHRzKSB7XG4gIC8vIEhhbmRsZSBTVkcgLyBNYXRoTUwgaW4gSFRNTFxuICBpZiAob3B0cy54bWxNb2RlID09PSAnZm9yZWlnbicpIHtcbiAgICAvKiBmaXggdXAgbWl4ZWQtY2FzZSBlbGVtZW50IG5hbWVzICovXG4gICAgZWxlbS5uYW1lID0gZm9yZWlnbk5hbWVzLmVsZW1lbnROYW1lc1tlbGVtLm5hbWVdIHx8IGVsZW0ubmFtZTtcbiAgICAvKiBleGl0IGZvcmVpZ24gbW9kZSBhdCBpbnRlZ3JhdGlvbiBwb2ludHMgKi9cbiAgICBpZiAoXG4gICAgICBlbGVtLnBhcmVudCAmJlxuICAgICAgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cy5pbmRleE9mKGVsZW0ucGFyZW50Lm5hbWUpID49IDBcbiAgICApXG4gICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgeyB4bWxNb2RlOiBmYWxzZSB9KTtcbiAgfVxuICBpZiAoIW9wdHMueG1sTW9kZSAmJiBbJ3N2ZycsICdtYXRoJ10uaW5kZXhPZihlbGVtLm5hbWUpID49IDApIHtcbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywgeyB4bWxNb2RlOiAnZm9yZWlnbicgfSk7XG4gIH1cblxuICB2YXIgdGFnID0gJzwnICsgZWxlbS5uYW1lO1xuICB2YXIgYXR0cmlicyA9IGZvcm1hdEF0dHJzKGVsZW0uYXR0cmlicywgb3B0cyk7XG5cbiAgaWYgKGF0dHJpYnMpIHtcbiAgICB0YWcgKz0gJyAnICsgYXR0cmlicztcbiAgfVxuXG4gIGlmIChvcHRzLnhtbE1vZGUgJiYgKCFlbGVtLmNoaWxkcmVuIHx8IGVsZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSkge1xuICAgIHRhZyArPSAnLz4nO1xuICB9IGVsc2Uge1xuICAgIHRhZyArPSAnPic7XG4gICAgaWYgKGVsZW0uY2hpbGRyZW4pIHtcbiAgICAgIHRhZyArPSByZW5kZXIoZWxlbS5jaGlsZHJlbiwgb3B0cyk7XG4gICAgfVxuXG4gICAgaWYgKCFzaW5nbGVUYWdbZWxlbS5uYW1lXSB8fCBvcHRzLnhtbE1vZGUpIHtcbiAgICAgIHRhZyArPSAnPC8nICsgZWxlbS5uYW1lICsgJz4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRpcmVjdGl2ZShlbGVtKSB7XG4gIHJldHVybiAnPCcgKyBlbGVtLmRhdGEgKyAnPic7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRleHQoZWxlbSwgb3B0cykge1xuICB2YXIgZGF0YSA9IGVsZW0uZGF0YSB8fCAnJztcblxuICAvLyBpZiBlbnRpdGllcyB3ZXJlbid0IGRlY29kZWQsIG5vIG5lZWQgdG8gZW5jb2RlIHRoZW0gYmFja1xuICBpZiAoXG4gICAgb3B0cy5kZWNvZGVFbnRpdGllcyAmJlxuICAgICEoZWxlbS5wYXJlbnQgJiYgZWxlbS5wYXJlbnQubmFtZSBpbiB1bmVuY29kZWRFbGVtZW50cylcbiAgKSB7XG4gICAgZGF0YSA9IGVudGl0aWVzLmVuY29kZVhNTChkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDZGF0YShlbGVtKSB7XG4gIHJldHVybiAnPCFbQ0RBVEFbJyArIGVsZW0uY2hpbGRyZW5bMF0uZGF0YSArICddXT4nO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb21tZW50KGVsZW0pIHtcbiAgcmV0dXJuICc8IS0tJyArIGVsZW0uZGF0YSArICctLT4nO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhIHRhZyBvciBub3QuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byB0ZXN0XG4gKi9cbmZ1bmN0aW9uIGlzVGFnKGVsZW0pIHtcbiAgICByZXR1cm4gKGVsZW0udHlwZSA9PT0gXCJ0YWdcIiAvKiBUYWcgKi8gfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBcInNjcmlwdFwiIC8qIFNjcmlwdCAqLyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IFwic3R5bGVcIiAvKiBTdHlsZSAqLyk7XG59XG5leHBvcnRzLmlzVGFnID0gaXNUYWc7XG4vLyBFeHBvcnRzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuZXhwb3J0cy5UZXh0ID0gXCJ0ZXh0XCIgLyogVGV4dCAqLzsgLy9UZXh0XG5leHBvcnRzLkRpcmVjdGl2ZSA9IFwiZGlyZWN0aXZlXCIgLyogRGlyZWN0aXZlICovOyAvLzw/IC4uLiA/PlxuZXhwb3J0cy5Db21tZW50ID0gXCJjb21tZW50XCIgLyogQ29tbWVudCAqLzsgLy88IS0tIC4uLiAtLT5cbmV4cG9ydHMuU2NyaXB0ID0gXCJzY3JpcHRcIiAvKiBTY3JpcHQgKi87IC8vPHNjcmlwdD4gdGFnc1xuZXhwb3J0cy5TdHlsZSA9IFwic3R5bGVcIiAvKiBTdHlsZSAqLzsgLy88c3R5bGU+IHRhZ3NcbmV4cG9ydHMuVGFnID0gXCJ0YWdcIiAvKiBUYWcgKi87IC8vQW55IHRhZ1xuZXhwb3J0cy5DREFUQSA9IFwiY2RhdGFcIiAvKiBDREFUQSAqLzsgLy88IVtDREFUQVsgLi4uIF1dPlxuZXhwb3J0cy5Eb2N0eXBlID0gXCJkb2N0eXBlXCIgLyogRG9jdHlwZSAqLztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5vZGVfMSA9IHJlcXVpcmUoXCIuL25vZGVcIik7XG5leHBvcnRzLk5vZGUgPSBub2RlXzEuTm9kZTtcbmV4cG9ydHMuRWxlbWVudCA9IG5vZGVfMS5FbGVtZW50O1xuZXhwb3J0cy5EYXRhTm9kZSA9IG5vZGVfMS5EYXRhTm9kZTtcbmV4cG9ydHMuTm9kZVdpdGhDaGlsZHJlbiA9IG5vZGVfMS5Ob2RlV2l0aENoaWxkcmVuO1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMrL2c7XG4vLyBEZWZhdWx0IG9wdGlvbnNcbnZhciBkZWZhdWx0T3B0cyA9IHtcbiAgICBub3JtYWxpemVXaGl0ZXNwYWNlOiBmYWxzZSxcbiAgICB3aXRoU3RhcnRJbmRpY2VzOiBmYWxzZSxcbiAgICB3aXRoRW5kSW5kaWNlczogZmFsc2Vcbn07XG52YXIgRG9tSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSBhIG5ldyBEb21IYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxlZCBvbmNlIHBhcnNpbmcgaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBTZXR0aW5ncyBmb3IgdGhlIGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGVsZW1lbnRDQiBDYWxsYmFjayB3aGVuZXZlciBhIHRhZyBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gRG9tSGFuZGxlcihjYWxsYmFjaywgb3B0aW9ucywgZWxlbWVudENCKSB7XG4gICAgICAgIC8qKiBUaGUgY29uc3RydWN0ZWQgRE9NICovXG4gICAgICAgIHRoaXMuZG9tID0gW107XG4gICAgICAgIC8qKiBJbmRpY2F0ZWQgd2hldGhlciBwYXJzaW5nIGhhcyBiZWVuIGNvbXBsZXRlZC4gKi9cbiAgICAgICAgdGhpcy5fZG9uZSA9IGZhbHNlO1xuICAgICAgICAvKiogU3RhY2sgb2Ygb3BlbiB0YWdzLiAqL1xuICAgICAgICB0aGlzLl90YWdTdGFjayA9IFtdO1xuICAgICAgICAvKiogQSBkYXRhIG5vZGUgdGhhdCBpcyBzdGlsbCBiZWluZyB3cml0dGVuIHRvLiAqL1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIHBhcnNlciBpbnN0YW5jZS4gVXNlZCBmb3IgbG9jYXRpb24gaW5mb3JtYXRpb24uICovXG4gICAgICAgIHRoaXMuX3BhcnNlciA9IG51bGw7XG4gICAgICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gc2tpcCBhcmd1bWVudHMsIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZWxlbWVudENCID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRPcHRzO1xuICAgICAgICB0aGlzLl9lbGVtZW50Q0IgPSBlbGVtZW50Q0IgfHwgbnVsbDtcbiAgICB9XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25wYXJzZXJpbml0ID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSBwYXJzZXI7XG4gICAgfTtcbiAgICAvLyBSZXNldHMgdGhlIGhhbmRsZXIgYmFjayB0byBzdGFydGluZyBzdGF0ZVxuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9ucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9tID0gW107XG4gICAgICAgIHRoaXMuX2RvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdGFnU3RhY2sgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSB0aGlzLl9wYXJzZXIgfHwgbnVsbDtcbiAgICB9O1xuICAgIC8vIFNpZ25hbHMgdGhlIGhhbmRsZXIgdGhhdCBwYXJzaW5nIGlzIGRvbmVcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RvbmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX2RvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbGxiYWNrKG51bGwpO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmhhbmRsZUNhbGxiYWNrKGVycm9yKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uY2xvc2V0YWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgLy8gSWYodGhpcy5fdGFnU3RhY2sucG9wKCkubmFtZSAhPT0gbmFtZSkgdGhpcy5oYW5kbGVDYWxsYmFjayhFcnJvcihcIlRhZ25hbWUgZGlkbid0IG1hdGNoIVwiKSk7XG4gICAgICAgIHZhciBlbGVtID0gdGhpcy5fdGFnU3RhY2sucG9wKCk7XG4gICAgICAgIGlmICghZWxlbSB8fCAhdGhpcy5fcGFyc2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMud2l0aEVuZEluZGljZXMpIHtcbiAgICAgICAgICAgIGVsZW0uZW5kSW5kZXggPSB0aGlzLl9wYXJzZXIuZW5kSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRDQilcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRDQihlbGVtKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9ub3BlbnRhZyA9IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJzKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbmV3IG5vZGVfMS5FbGVtZW50KG5hbWUsIGF0dHJpYnMpO1xuICAgICAgICB0aGlzLmFkZE5vZGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RhZ1N0YWNrLnB1c2goZWxlbWVudCk7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbnRleHQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgbm9ybWFsaXplID0gdGhpcy5fb3B0aW9ucy5ub3JtYWxpemVXaGl0ZXNwYWNlO1xuICAgICAgICB2YXIgX2xhc3ROb2RlID0gdGhpcy5fbGFzdE5vZGU7XG4gICAgICAgIGlmIChfbGFzdE5vZGUgJiYgX2xhc3ROb2RlLnR5cGUgPT09IFwidGV4dFwiIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBfbGFzdE5vZGUuZGF0YSA9IChfbGFzdE5vZGUuZGF0YSArIGRhdGEpLnJlcGxhY2UocmVXaGl0ZXNwYWNlLCBcIiBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfbGFzdE5vZGUuZGF0YSArPSBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UocmVXaGl0ZXNwYWNlLCBcIiBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuRGF0YU5vZGUoXCJ0ZXh0XCIgLyogVGV4dCAqLywgZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGUobm9kZSk7XG4gICAgICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uY29tbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0Tm9kZSAmJiB0aGlzLl9sYXN0Tm9kZS50eXBlID09PSBcImNvbW1lbnRcIiAvKiBDb21tZW50ICovKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0Tm9kZS5kYXRhICs9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLkRhdGFOb2RlKFwiY29tbWVudFwiIC8qIENvbW1lbnQgKi8sIGRhdGEpO1xuICAgICAgICB0aGlzLmFkZE5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbm9kZTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uY29tbWVudGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGV4dCA9IG5ldyBub2RlXzEuRGF0YU5vZGUoXCJ0ZXh0XCIgLyogVGV4dCAqLywgXCJcIik7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5Ob2RlV2l0aENoaWxkcmVuKFwiY2RhdGFcIiAvKiBDREFUQSAqLywgW3RleHRdKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICB0ZXh0LnBhcmVudCA9IG5vZGU7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gdGV4dDtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uY2RhdGFlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLlByb2Nlc3NpbmdJbnN0cnVjdGlvbihuYW1lLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayhlcnJvciwgdGhpcy5kb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUuYWRkTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLl90YWdTdGFja1t0aGlzLl90YWdTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIHNpYmxpbmdzID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuIDogdGhpcy5kb207XG4gICAgICAgIHZhciBwcmV2aW91c1NpYmxpbmcgPSBzaWJsaW5nc1tzaWJsaW5ncy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuX3BhcnNlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMud2l0aFN0YXJ0SW5kaWNlcykge1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhcnRJbmRleCA9IHRoaXMuX3BhcnNlci5zdGFydEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMud2l0aEVuZEluZGljZXMpIHtcbiAgICAgICAgICAgICAgICBub2RlLmVuZEluZGV4ID0gdGhpcy5fcGFyc2VyLmVuZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNpYmxpbmdzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmIChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IHByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHByZXZpb3VzU2libGluZy5uZXh0ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5hZGREYXRhTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBub2RlO1xuICAgIH07XG4gICAgcmV0dXJuIERvbUhhbmRsZXI7XG59KCkpO1xuZXhwb3J0cy5Eb21IYW5kbGVyID0gRG9tSGFuZGxlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IERvbUhhbmRsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5vZGVUeXBlcyA9IG5ldyBNYXAoW1xuICAgIFtcInRhZ1wiIC8qIFRhZyAqLywgMV0sXG4gICAgW1wic2NyaXB0XCIgLyogU2NyaXB0ICovLCAxXSxcbiAgICBbXCJzdHlsZVwiIC8qIFN0eWxlICovLCAxXSxcbiAgICBbXCJkaXJlY3RpdmVcIiAvKiBEaXJlY3RpdmUgKi8sIDFdLFxuICAgIFtcInRleHRcIiAvKiBUZXh0ICovLCAzXSxcbiAgICBbXCJjZGF0YVwiIC8qIENEQVRBICovLCA0XSxcbiAgICBbXCJjb21tZW50XCIgLyogQ29tbWVudCAqLywgOF1cbl0pO1xuLy8gVGhpcyBvYmplY3Qgd2lsbCBiZSB1c2VkIGFzIHRoZSBwcm90b3R5cGUgZm9yIE5vZGVzIHdoZW4gY3JlYXRpbmcgYVxuLy8gRE9NLUxldmVsLTEtY29tcGxpYW50IHN0cnVjdHVyZS5cbnZhciBOb2RlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG5vZGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gTm9kZSh0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIC8qKiBQYXJlbnQgb2YgdGhlIG5vZGUgKi9cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICAvKiogUHJldmlvdXMgc2libGluZyAqL1xuICAgICAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgICAgICAvKiogTmV4dCBzaWJsaW5nICovXG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICAgIC8qKiBUaGUgc3RhcnQgaW5kZXggb2YgdGhlIG5vZGUuIFJlcXVpcmVzIGB3aXRoU3RhcnRJbmRpY2VzYCBvbiB0aGUgaGFuZGxlciB0byBiZSBgdHJ1ZS4gKi9cbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gbnVsbDtcbiAgICAgICAgLyoqIFRoZSBlbmQgaW5kZXggb2YgdGhlIG5vZGUuIFJlcXVpcmVzIGB3aXRoRW5kSW5kaWNlc2Agb24gdGhlIGhhbmRsZXIgdG8gYmUgYHRydWUuICovXG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSBudWxsO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwibm9kZVR5cGVcIiwge1xuICAgICAgICAvLyBSZWFkLW9ubHkgYWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlVHlwZXMuZ2V0KHRoaXMudHlwZSkgfHwgMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInBhcmVudE5vZGVcIiwge1xuICAgICAgICAvLyBSZWFkLXdyaXRlIGFsaWFzZXMgZm9yIHByb3BlcnRpZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcInByZXZpb3VzU2libGluZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJldiB8fCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLnByZXYgPSBwcmV2O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsIFwibmV4dFNpYmxpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5leHQgfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5vZGU7XG59KCkpO1xuZXhwb3J0cy5Ob2RlID0gTm9kZTtcbnZhciBEYXRhTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0YU5vZGUsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgbm9kZVxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBjb250ZW50IG9mIHRoZSBkYXRhIG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEYXRhTm9kZSh0eXBlLCBkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHR5cGUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShEYXRhTm9kZS5wcm90b3R5cGUsIFwibm9kZVZhbHVlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRGF0YU5vZGU7XG59KE5vZGUpKTtcbmV4cG9ydHMuRGF0YU5vZGUgPSBEYXRhTm9kZTtcbnZhciBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obmFtZSwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcImRpcmVjdGl2ZVwiIC8qIERpcmVjdGl2ZSAqLywgZGF0YSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbn0oRGF0YU5vZGUpKTtcbmV4cG9ydHMuUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xudmFyIE5vZGVXaXRoQ2hpbGRyZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vZGVXaXRoQ2hpbGRyZW4sIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSBUeXBlIG9mIHRoZSBub2RlLlxuICAgICAqIEBwYXJhbSBjaGlsZHJlbiBDaGlsZHJlbiBvZiB0aGUgbm9kZS4gT25seSBjZXJ0YWluIG5vZGUgdHlwZXMgY2FuIGhhdmUgY2hpbGRyZW4uXG4gICAgICovXG4gICAgZnVuY3Rpb24gTm9kZVdpdGhDaGlsZHJlbih0eXBlLCBjaGlsZHJlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJmaXJzdENoaWxkXCIsIHtcbiAgICAgICAgLy8gQWxpYXNlc1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuWzBdIHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJsYXN0Q2hpbGRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLCBcImNoaWxkTm9kZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTm9kZVdpdGhDaGlsZHJlbjtcbn0oTm9kZSkpO1xuZXhwb3J0cy5Ob2RlV2l0aENoaWxkcmVuID0gTm9kZVdpdGhDaGlsZHJlbjtcbnZhciBFbGVtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbGVtZW50LCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGFnLCBlZy4gYGRpdmAsIGBzcGFuYFxuICAgICAqIEBwYXJhbSBhdHRyaWJzIE9iamVjdCBtYXBwaW5nIGF0dHJpYnV0ZSBuYW1lcyB0byBhdHRyaWJ1dGUgdmFsdWVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gRWxlbWVudChuYW1lLCBhdHRyaWJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUgPT09IFwic2NyaXB0XCJcbiAgICAgICAgICAgID8gXCJzY3JpcHRcIiAvKiBTY3JpcHQgKi9cbiAgICAgICAgICAgIDogbmFtZSA9PT0gXCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgPyBcInN0eWxlXCIgLyogU3R5bGUgKi9cbiAgICAgICAgICAgICAgICA6IFwidGFnXCIgLyogVGFnICovLCBbXSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLmF0dHJpYnMgPSBhdHRyaWJzO1xuICAgICAgICBfdGhpcy5hdHRyaWJzID0gYXR0cmlicztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8vIERPTSBMZXZlbCAxIGFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRWxlbWVudDtcbn0oTm9kZVdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRhZ3R5cGVzXzEgPSByZXF1aXJlKFwiLi90YWd0eXBlc1wiKTtcbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2Ygbm9kZXMsIHJlbW92ZSBhbnkgbWVtYmVyIHRoYXQgaXMgY29udGFpbmVkIGJ5IGFub3RoZXIuXG4gKlxuICogQHBhcmFtIG5vZGVzIOKAlCBOb2RlcyB0byBmaWx0ZXIuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVN1YnNldHMobm9kZXMpIHtcbiAgICB2YXIgaWR4ID0gbm9kZXMubGVuZ3RoO1xuICAgIC8vIENoZWNrIGlmIGVhY2ggbm9kZSAob3Igb25lIG9mIGl0cyBhbmNlc3RvcnMpIGlzIGFscmVhZHkgY29udGFpbmVkIGluIHRoZVxuICAgIC8vIGFycmF5LlxuICAgIHdoaWxlICgtLWlkeCA+PSAwKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaWR4XTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBub2RlIGlmIGl0IGlzIG5vdCB1bmlxdWUuXG4gICAgICAgIC8vIFdlIGFyZSBnb2luZyB0aHJvdWdoIHRoZSBhcnJheSBmcm9tIHRoZSBlbmQsIHNvIHdlIG9ubHlcbiAgICAgICAgLy8gaGF2ZSB0byBjaGVjayBub2RlcyB0aGF0IHByZWNlZWQgdGhlIG5vZGUgdW5kZXIgY29uc2lkZXJhdGlvbiBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGlmIChpZHggPiAwICYmIG5vZGVzLmxhc3RJbmRleE9mKG5vZGUsIGlkeCAtIDEpID49IDApIHtcbiAgICAgICAgICAgIG5vZGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgYW5jZXN0b3IgPSBub2RlLnBhcmVudDsgYW5jZXN0b3I7IGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZXMuaW5kZXhPZihhbmNlc3RvcikgPiAtMSkge1xuICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcztcbn1cbmV4cG9ydHMucmVtb3ZlU3Vic2V0cyA9IHJlbW92ZVN1YnNldHM7XG4vKioqXG4gKiBDb21wYXJlIHRoZSBwb3NpdGlvbiBvZiBvbmUgbm9kZSBhZ2FpbnN0IGFub3RoZXIgbm9kZSBpbiBhbnkgb3RoZXIgZG9jdW1lbnQuXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGEgYml0bWFzayB3aXRoIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICpcbiAqIGRvY3VtZW50IG9yZGVyOlxuICogPiBUaGVyZSBpcyBhbiBvcmRlcmluZywgZG9jdW1lbnQgb3JkZXIsIGRlZmluZWQgb24gYWxsIHRoZSBub2RlcyBpbiB0aGVcbiAqID4gZG9jdW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGVcbiAqID4gWE1MIHJlcHJlc2VudGF0aW9uIG9mIGVhY2ggbm9kZSBvY2N1cnMgaW4gdGhlIFhNTCByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAqID4gZG9jdW1lbnQgYWZ0ZXIgZXhwYW5zaW9uIG9mIGdlbmVyYWwgZW50aXRpZXMuIFRodXMsIHRoZSBkb2N1bWVudCBlbGVtZW50XG4gKiA+IG5vZGUgd2lsbCBiZSB0aGUgZmlyc3Qgbm9kZS4gRWxlbWVudCBub2RlcyBvY2N1ciBiZWZvcmUgdGhlaXIgY2hpbGRyZW4uXG4gKiA+IFRodXMsIGRvY3VtZW50IG9yZGVyIG9yZGVycyBlbGVtZW50IG5vZGVzIGluIG9yZGVyIG9mIHRoZSBvY2N1cnJlbmNlIG9mXG4gKiA+IHRoZWlyIHN0YXJ0LXRhZyBpbiB0aGUgWE1MIChhZnRlciBleHBhbnNpb24gb2YgZW50aXRpZXMpLiBUaGUgYXR0cmlidXRlXG4gKiA+IG5vZGVzIG9mIGFuIGVsZW1lbnQgb2NjdXIgYWZ0ZXIgdGhlIGVsZW1lbnQgYW5kIGJlZm9yZSBpdHMgY2hpbGRyZW4uIFRoZVxuICogPiByZWxhdGl2ZSBvcmRlciBvZiBhdHRyaWJ1dGUgbm9kZXMgaXMgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50Li9cbiAqXG4gKiBTb3VyY2U6XG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL2dsb3NzYXJ5Lmh0bWwjZHQtZG9jdW1lbnQtb3JkZXJcbiAqIEBhcmd1bWVudCBub2RhQSBUaGUgZmlyc3Qgbm9kZSB0byB1c2UgaW4gdGhlIGNvbXBhcmlzb25cbiAqIEBhcmd1bWVudCBub2RlQiBUaGUgc2Vjb25kIG5vZGUgdG8gdXNlIGluIHRoZSBjb21wYXJpc29uXG4gKlxuICogQHJldHVybiBBIGJpdG1hc2sgZGVzY3JpYmluZyB0aGUgaW5wdXQgbm9kZXMnIHJlbGF0aXZlIHBvc2l0aW9uLlxuICpcbiAqICAgICAgICBTZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWNvbXBhcmVkb2N1bWVudHBvc2l0aW9uIGZvclxuICogICAgICAgIGEgZGVzY3JpcHRpb24gb2YgdGhlc2UgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlQSwgbm9kZUIpIHtcbiAgICB2YXIgYVBhcmVudHMgPSBbXTtcbiAgICB2YXIgYlBhcmVudHMgPSBbXTtcbiAgICBpZiAobm9kZUEgPT09IG5vZGVCKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB2YXIgY3VycmVudCA9IHRhZ3R5cGVzXzEuaGFzQ2hpbGRyZW4obm9kZUEpID8gbm9kZUEgOiBub2RlQS5wYXJlbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgYVBhcmVudHMudW5zaGlmdChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgICBjdXJyZW50ID0gdGFndHlwZXNfMS5oYXNDaGlsZHJlbihub2RlQikgPyBub2RlQiA6IG5vZGVCLnBhcmVudDtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICBiUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChhUGFyZW50c1tpZHhdID09PSBiUGFyZW50c1tpZHhdKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cbiAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAxIC8qIERJU0NPTk5FQ1RFRCAqLztcbiAgICB9XG4gICAgdmFyIHNoYXJlZFBhcmVudCA9IGFQYXJlbnRzW2lkeCAtIDFdO1xuICAgIHZhciBzaWJsaW5ncyA9IHNoYXJlZFBhcmVudC5jaGlsZHJlbjtcbiAgICB2YXIgYVNpYmxpbmcgPSBhUGFyZW50c1tpZHhdO1xuICAgIHZhciBiU2libGluZyA9IGJQYXJlbnRzW2lkeF07XG4gICAgaWYgKHNpYmxpbmdzLmluZGV4T2YoYVNpYmxpbmcpID4gc2libGluZ3MuaW5kZXhPZihiU2libGluZykpIHtcbiAgICAgICAgaWYgKHNoYXJlZFBhcmVudCA9PT0gbm9kZUIpIHtcbiAgICAgICAgICAgIHJldHVybiA0IC8qIEZPTExPV0lORyAqLyB8IDE2IC8qIENPTlRBSU5FRF9CWSAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gNCAvKiBGT0xMT1dJTkcgKi87XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc2hhcmVkUGFyZW50ID09PSBub2RlQSkge1xuICAgICAgICAgICAgcmV0dXJuIDIgLyogUFJFQ0VESU5HICovIHwgOCAvKiBDT05UQUlOUyAqLztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMiAvKiBQUkVDRURJTkcgKi87XG4gICAgfVxufVxuZXhwb3J0cy5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiA9IGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuLyoqKlxuICogU29ydCBhbiBhcnJheSBvZiBub2RlcyBiYXNlZCBvbiB0aGVpciByZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQgYW5kXG4gKiByZW1vdmUgYW55IGR1cGxpY2F0ZSBub2Rlcy4gSWYgdGhlIGFycmF5IGNvbnRhaW5zIG5vZGVzIHRoYXQgZG8gbm90IGJlbG9uZ1xuICogdG8gdGhlIHNhbWUgZG9jdW1lbnQsIHNvcnQgb3JkZXIgaXMgdW5zcGVjaWZpZWQuXG4gKlxuICogQGFyZ3VtZW50IG5vZGVzIEFycmF5IG9mIERPTSBub2Rlc1xuICogQHJldHVybnMgY29sbGVjdGlvbiBvZiB1bmlxdWUgbm9kZXMsIHNvcnRlZCBpbiBkb2N1bWVudCBvcmRlclxuICovXG5mdW5jdGlvbiB1bmlxdWVTb3J0KG5vZGVzKSB7XG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG5vZGUsIGksIGFycikgeyByZXR1cm4gIWFyci5pbmNsdWRlcyhub2RlLCBpICsgMSk7IH0pO1xuICAgIG5vZGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlID0gY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSwgYik7XG4gICAgICAgIGlmIChyZWxhdGl2ZSAmIDIgLyogUFJFQ0VESU5HICovKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmUgJiA0IC8qIEZPTExPV0lORyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vZGVzO1xufVxuZXhwb3J0cy51bmlxdWVTb3J0ID0gdW5pcXVlU29ydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90cmF2ZXJzYWxcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vbWFuaXB1bGF0aW9uXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3F1ZXJ5aW5nXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xlZ2FjeVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9oZWxwZXJzXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3RhZ3R5cGVzXCIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHF1ZXJ5aW5nXzEgPSByZXF1aXJlKFwiLi9xdWVyeWluZ1wiKTtcbnZhciB0YWd0eXBlc18xID0gcmVxdWlyZShcIi4vdGFndHlwZXNcIik7XG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBcInRleHRcIiAvKiBUZXh0ICovO1xufVxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xudmFyIENoZWNrcyA9IHtcbiAgICB0YWdfbmFtZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdGFndHlwZXNfMS5pc1RhZyhlbGVtKSAmJiBuYW1lKGVsZW0ubmFtZSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWd0eXBlc18xLmlzVGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB0YWd0eXBlc18xLmlzVGFnKGVsZW0pICYmIGVsZW0ubmFtZSA9PT0gbmFtZTsgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFnX3R5cGU6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHR5cGUoZWxlbS50eXBlKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50eXBlID09PSB0eXBlOyB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0YWdfY29udGFpbnM6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGlzVGV4dE5vZGUoZWxlbSkgJiYgZGF0YShlbGVtLmRhdGEpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBpc1RleHROb2RlKGVsZW0pICYmIGVsZW0uZGF0YSA9PT0gZGF0YTsgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmZ1bmN0aW9uIGdldEF0dHJpYkNoZWNrKGF0dHJpYiwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB0YWd0eXBlc18xLmlzVGFnKGVsZW0pICYmIHZhbHVlKGVsZW0uYXR0cmlic1thdHRyaWJdKTsgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdGFndHlwZXNfMS5pc1RhZyhlbGVtKSAmJiBlbGVtLmF0dHJpYnNbYXR0cmliXSA9PT0gdmFsdWU7IH07XG4gICAgfVxufVxuZnVuY3Rpb24gY29tYmluZUZ1bmNzKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGEoZWxlbSkgfHwgYihlbGVtKTsgfTtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVUZXN0KG9wdGlvbnMpIHtcbiAgICB2YXIgZnVuY3MgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGtleSBpbiBDaGVja3MgPyBDaGVja3Nba2V5XSh2YWx1ZSkgOiBnZXRBdHRyaWJDaGVjayhrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3MubGVuZ3RoID09PSAwID8gbnVsbCA6IGZ1bmNzLnJlZHVjZShjb21iaW5lRnVuY3MpO1xufVxuZnVuY3Rpb24gdGVzdEVsZW1lbnQob3B0aW9ucywgZWxlbWVudCkge1xuICAgIHZhciB0ZXN0ID0gY29tcGlsZVRlc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRlc3QgPyB0ZXN0KGVsZW1lbnQpIDogdHJ1ZTtcbn1cbmV4cG9ydHMudGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudDtcbmZ1bmN0aW9uIGdldEVsZW1lbnRzKG9wdGlvbnMsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHZhciB0ZXN0ID0gY29tcGlsZVRlc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRlc3QgPyBxdWVyeWluZ18xLmZpbHRlcih0ZXN0LCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCkgOiBbXTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHMgPSBnZXRFbGVtZW50cztcbmZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkLCBlbGVtZW50LCByZWN1cnNlKSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gdHJ1ZTsgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50KSlcbiAgICAgICAgZWxlbWVudCA9IFtlbGVtZW50XTtcbiAgICByZXR1cm4gcXVlcnlpbmdfMS5maW5kT25lKGdldEF0dHJpYkNoZWNrKFwiaWRcIiwgaWQpLCBlbGVtZW50LCByZWN1cnNlKTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudEJ5SWQgPSBnZXRFbGVtZW50QnlJZDtcbmZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKG5hbWUsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIHJldHVybiBxdWVyeWluZ18xLmZpbHRlcihDaGVja3MudGFnX25hbWUobmFtZSksIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbmV4cG9ydHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBnZXRFbGVtZW50c0J5VGFnTmFtZTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdUeXBlKHR5cGUsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gdHJ1ZTsgfVxuICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gSW5maW5pdHk7IH1cbiAgICByZXR1cm4gcXVlcnlpbmdfMS5maWx0ZXIoQ2hlY2tzLnRhZ190eXBlKHR5cGUpLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCk7XG59XG5leHBvcnRzLmdldEVsZW1lbnRzQnlUYWdUeXBlID0gZ2V0RWxlbWVudHNCeVRhZ1R5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKipcbiAqIFJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIGRvbVxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGJlIHJlbW92ZWRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbGVtKSB7XG4gICAgaWYgKGVsZW0ucHJldilcbiAgICAgICAgZWxlbS5wcmV2Lm5leHQgPSBlbGVtLm5leHQ7XG4gICAgaWYgKGVsZW0ubmV4dClcbiAgICAgICAgZWxlbS5uZXh0LnByZXYgPSBlbGVtLnByZXY7XG4gICAgaWYgKGVsZW0ucGFyZW50KSB7XG4gICAgICAgIHZhciBjaGlsZHMgPSBlbGVtLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRzLnNwbGljZShjaGlsZHMubGFzdEluZGV4T2YoZWxlbSksIDEpO1xuICAgIH1cbn1cbmV4cG9ydHMucmVtb3ZlRWxlbWVudCA9IHJlbW92ZUVsZW1lbnQ7XG4vKioqXG4gKiBSZXBsYWNlIGFuIGVsZW1lbnQgaW4gdGhlIGRvbVxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGJlIHJlcGxhY2VkXG4gKiBAYXJndW1lbnQgcmVwbGFjZW1lbnQgVGhlIGVsZW1lbnQgdG8gYmUgYWRkZWRcbiAqL1xuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbSwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgcHJldiA9IChyZXBsYWNlbWVudC5wcmV2ID0gZWxlbS5wcmV2KTtcbiAgICBpZiAocHJldikge1xuICAgICAgICBwcmV2Lm5leHQgPSByZXBsYWNlbWVudDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSAocmVwbGFjZW1lbnQubmV4dCA9IGVsZW0ubmV4dCk7XG4gICAgaWYgKG5leHQpIHtcbiAgICAgICAgbmV4dC5wcmV2ID0gcmVwbGFjZW1lbnQ7XG4gICAgfVxuICAgIHZhciBwYXJlbnQgPSAocmVwbGFjZW1lbnQucGFyZW50ID0gZWxlbS5wYXJlbnQpO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRzW2NoaWxkcy5sYXN0SW5kZXhPZihlbGVtKV0gPSByZXBsYWNlbWVudDtcbiAgICB9XG59XG5leHBvcnRzLnJlcGxhY2VFbGVtZW50ID0gcmVwbGFjZUVsZW1lbnQ7XG4vKioqXG4gKiBBcHBlbmQgYSBjaGlsZCB0byBhbiBlbGVtZW50XG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvXG4gKiBAYXJndW1lbnQgY2hpbGQgVGhlIGVsZW1lbnQgdG8gYmUgYWRkZWQgYXMgYSBjaGlsZFxuICovXG5mdW5jdGlvbiBhcHBlbmRDaGlsZChlbGVtLCBjaGlsZCkge1xuICAgIGNoaWxkLnBhcmVudCA9IGVsZW07XG4gICAgaWYgKGVsZW0uY2hpbGRyZW4ucHVzaChjaGlsZCkgIT09IDEpIHtcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBlbGVtLmNoaWxkcmVuW2VsZW0uY2hpbGRyZW4ubGVuZ3RoIC0gMl07XG4gICAgICAgIHNpYmxpbmcubmV4dCA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5wcmV2ID0gc2libGluZztcbiAgICAgICAgY2hpbGQubmV4dCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5hcHBlbmRDaGlsZCA9IGFwcGVuZENoaWxkO1xuLyoqKlxuICogQXBwZW5kIGFuIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlclxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCB0b1xuICogQGFyZ3VtZW50IG5leHQgVGhlIGVsZW1lbnQgYmUgYWRkZWRcbiAqL1xuZnVuY3Rpb24gYXBwZW5kKGVsZW0sIG5leHQpIHtcbiAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnQsIGN1cnJOZXh0ID0gZWxlbS5uZXh0O1xuICAgIG5leHQubmV4dCA9IGN1cnJOZXh0O1xuICAgIG5leHQucHJldiA9IGVsZW07XG4gICAgZWxlbS5uZXh0ID0gbmV4dDtcbiAgICBuZXh0LnBhcmVudCA9IHBhcmVudDtcbiAgICBpZiAoY3Vyck5leHQpIHtcbiAgICAgICAgY3Vyck5leHQucHJldiA9IG5leHQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICBjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihjdXJyTmV4dCksIDAsIG5leHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChuZXh0KTtcbiAgICB9XG59XG5leHBvcnRzLmFwcGVuZCA9IGFwcGVuZDtcbi8qKipcbiAqIFByZXBlbmQgYW4gZWxlbWVudCBiZWZvcmUgYW5vdGhlclxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCB0b1xuICogQGFyZ3VtZW50IHByZXYgVGhlIGVsZW1lbnQgYmUgYWRkZWRcbiAqL1xuZnVuY3Rpb24gcHJlcGVuZChlbGVtLCBwcmV2KSB7XG4gICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRzLnNwbGljZShjaGlsZHMubGFzdEluZGV4T2YoZWxlbSksIDAsIHByZXYpO1xuICAgIH1cbiAgICBpZiAoZWxlbS5wcmV2KSB7XG4gICAgICAgIGVsZW0ucHJldi5uZXh0ID0gcHJldjtcbiAgICB9XG4gICAgcHJldi5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgcHJldi5wcmV2ID0gZWxlbS5wcmV2O1xuICAgIHByZXYubmV4dCA9IGVsZW07XG4gICAgZWxlbS5wcmV2ID0gcHJldjtcbn1cbmV4cG9ydHMucHJlcGVuZCA9IHByZXBlbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0YWd0eXBlc18xID0gcmVxdWlyZShcIi4vdGFndHlwZXNcIik7XG5mdW5jdGlvbiBmaWx0ZXIodGVzdCwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSB0cnVlOyB9XG4gICAgaWYgKGxpbWl0ID09PSB2b2lkIDApIHsgbGltaXQgPSBJbmZpbml0eTsgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50KSlcbiAgICAgICAgZWxlbWVudCA9IFtlbGVtZW50XTtcbiAgICByZXR1cm4gZmluZCh0ZXN0LCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCk7XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbmZ1bmN0aW9uIGZpbmQodGVzdCwgZWxlbXMsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW0gPSBlbGVtc1tpXTtcbiAgICAgICAgaWYgKHRlc3QoZWxlbSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgaWYgKC0tbGltaXQgPD0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzZSAmJiB0YWd0eXBlc18xLmhhc0NoaWxkcmVuKGVsZW0pICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gZmluZCh0ZXN0LCBlbGVtLmNoaWxkcmVuLCByZWN1cnNlLCBsaW1pdCk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGxpbWl0IC09IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsaW1pdCA8PSAwKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuZnVuY3Rpb24gZmluZE9uZUNoaWxkKHRlc3QsIGVsZW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGVzdChlbGVtc1tpXSkpXG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbaV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0cy5maW5kT25lQ2hpbGQgPSBmaW5kT25lQ2hpbGQ7XG5mdW5jdGlvbiBmaW5kT25lKHRlc3QsIGVsZW1zLCByZWN1cnNlKSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gdHJ1ZTsgfVxuICAgIHZhciBlbGVtID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aCAmJiAhZWxlbTsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VkID0gZWxlbXNbaV07XG4gICAgICAgIGlmICghdGFndHlwZXNfMS5pc1RhZyhjaGVja2VkKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdChjaGVja2VkKSkge1xuICAgICAgICAgICAgZWxlbSA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVjdXJzZSAmJiBjaGVja2VkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVsZW0gPSBmaW5kT25lKHRlc3QsIGNoZWNrZWQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xufVxuZXhwb3J0cy5maW5kT25lID0gZmluZE9uZTtcbmZ1bmN0aW9uIGV4aXN0c09uZSh0ZXN0LCBlbGVtcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBlbGVtc1tpXTtcbiAgICAgICAgaWYgKHRhZ3R5cGVzXzEuaXNUYWcoY2hlY2tlZCkgJiZcbiAgICAgICAgICAgICh0ZXN0KGNoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgKGNoZWNrZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBleGlzdHNPbmUodGVzdCwgY2hlY2tlZC5jaGlsZHJlbikpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5leGlzdHNPbmUgPSBleGlzdHNPbmU7XG5mdW5jdGlvbiBmaW5kQWxsKHRlc3QsIHJvb3RFbGVtcykge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgc3RhY2sgPSByb290RWxlbXMuc2xpY2UoKTtcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIHZhciBlbGVtID0gc3RhY2suc2hpZnQoKTtcbiAgICAgICAgaWYgKCFlbGVtIHx8ICF0YWd0eXBlc18xLmlzVGFnKGVsZW0pKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc3RhY2sudW5zaGlmdC5hcHBseShzdGFjaywgZWxlbS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlc3QoZWxlbSkpXG4gICAgICAgICAgICByZXN1bHQucHVzaChlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZmluZEFsbCA9IGZpbmRBbGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0YWd0eXBlc18xID0gcmVxdWlyZShcIi4vdGFndHlwZXNcIik7XG52YXIgZG9tX3NlcmlhbGl6ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZG9tLXNlcmlhbGl6ZXJcIikpO1xuZXhwb3J0cy5nZXRPdXRlckhUTUwgPSBkb21fc2VyaWFsaXplcl8xLmRlZmF1bHQ7XG5mdW5jdGlvbiBnZXRJbm5lckhUTUwobm9kZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0YWd0eXBlc18xLmhhc0NoaWxkcmVuKG5vZGUpXG4gICAgICAgID8gbm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKG5vZGUpIHsgcmV0dXJuIGV4cG9ydHMuZ2V0T3V0ZXJIVE1MKG5vZGUsIG9wdGlvbnMpOyB9KS5qb2luKFwiXCIpXG4gICAgICAgIDogXCJcIjtcbn1cbmV4cG9ydHMuZ2V0SW5uZXJIVE1MID0gZ2V0SW5uZXJIVE1MO1xuZnVuY3Rpb24gZ2V0VGV4dChub2RlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLm1hcChnZXRUZXh0KS5qb2luKFwiXCIpO1xuICAgIGlmICh0YWd0eXBlc18xLmlzVGFnKG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5uYW1lID09PSBcImJyXCIgPyBcIlxcblwiIDogZ2V0VGV4dChub2RlLmNoaWxkcmVuKTtcbiAgICBpZiAodGFndHlwZXNfMS5pc0NEQVRBKG5vZGUpKVxuICAgICAgICByZXR1cm4gZ2V0VGV4dChub2RlLmNoaWxkcmVuKTtcbiAgICBpZiAodGFndHlwZXNfMS5pc1RleHQobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgcmV0dXJuIFwiXCI7XG59XG5leHBvcnRzLmdldFRleHQgPSBnZXRUZXh0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZG9tZWxlbWVudHR5cGVfMSA9IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKTtcbmZ1bmN0aW9uIGlzVGFnKG5vZGUpIHtcbiAgICByZXR1cm4gZG9tZWxlbWVudHR5cGVfMS5pc1RhZyhub2RlKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbmZ1bmN0aW9uIGlzQ0RBVEEobm9kZSkge1xuICAgIHJldHVybiBcImNkYXRhXCIgLyogQ0RBVEEgKi8gPT09IG5vZGUudHlwZTtcbn1cbmV4cG9ydHMuaXNDREFUQSA9IGlzQ0RBVEE7XG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IFwidGV4dFwiIC8qIFRleHQgKi87XG59XG5leHBvcnRzLmlzVGV4dCA9IGlzVGV4dDtcbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gXCJjb21tZW50XCIgLyogQ29tbWVudCAqLztcbn1cbmV4cG9ydHMuaXNDb21tZW50ID0gaXNDb21tZW50O1xuZnVuY3Rpb24gaGFzQ2hpbGRyZW4obm9kZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZSwgXCJjaGlsZHJlblwiKTtcbn1cbmV4cG9ydHMuaGFzQ2hpbGRyZW4gPSBoYXNDaGlsZHJlbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oZWxlbSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZWxlbS5jaGlsZHJlbiB8fCBudWxsO1xufVxuZXhwb3J0cy5nZXRDaGlsZHJlbiA9IGdldENoaWxkcmVuO1xuZnVuY3Rpb24gZ2V0UGFyZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5wYXJlbnQgfHwgbnVsbDtcbn1cbmV4cG9ydHMuZ2V0UGFyZW50ID0gZ2V0UGFyZW50O1xuZnVuY3Rpb24gZ2V0U2libGluZ3MoZWxlbSkge1xuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbSk7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldENoaWxkcmVuKHBhcmVudCkgOiBbZWxlbV07XG59XG5leHBvcnRzLmdldFNpYmxpbmdzID0gZ2V0U2libGluZ3M7XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShlbGVtLCBuYW1lKSB7XG4gICAgcmV0dXJuIGVsZW0uYXR0cmlicyAmJiBlbGVtLmF0dHJpYnNbbmFtZV07XG59XG5leHBvcnRzLmdldEF0dHJpYnV0ZVZhbHVlID0gZ2V0QXR0cmlidXRlVmFsdWU7XG5mdW5jdGlvbiBoYXNBdHRyaWIoZWxlbSwgbmFtZSkge1xuICAgIHJldHVybiAhIWdldEF0dHJpYnV0ZVZhbHVlKGVsZW0sIG5hbWUpO1xufVxuZXhwb3J0cy5oYXNBdHRyaWIgPSBoYXNBdHRyaWI7XG4vKioqXG4gKiBSZXR1cm5zIHRoZSBuYW1lIHByb3BlcnR5IG9mIGFuIGVsZW1lbnRcbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIG5hbWUgZm9yXG4gKi9cbmZ1bmN0aW9uIGdldE5hbWUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm5hbWU7XG59XG5leHBvcnRzLmdldE5hbWUgPSBnZXROYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgbGVnYWN5X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2xlZ2FjeS5qc29uXCIpKTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGRlY29kZV9jb2RlcG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50XCIpKTtcbmV4cG9ydHMuZGVjb2RlWE1MID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxfanNvbl8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMobWFwKS5qb2luKFwifFwiKTtcbiAgICB2YXIgcmVwbGFjZSA9IGdldFJlcGxhY2VyKG1hcCk7XG4gICAga2V5cyArPSBcInwjW3hYXVtcXFxcZGEtZkEtRl0rfCNcXFxcZCtcIjtcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cyArIFwiKTtcIiwgXCJnXCIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlKTsgfTtcbn1cbnZhciBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKGEgPCBiID8gMSA6IC0xKTsgfTtcbmV4cG9ydHMuZGVjb2RlSFRNTCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZ2FjeSA9IE9iamVjdC5rZXlzKGxlZ2FjeV9qc29uXzEuZGVmYXVsdCkuc29ydChzb3J0ZXIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsZWdhY3lbal0gPT09IGtleXNbaV0pIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7P1wiO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5c1tpXSArPSBcIjtcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cy5qb2luKFwifFwiKSArIFwifCNbeFhdW1xcXFxkYS1mQS1GXSs7P3wjXFxcXGQrOz8pXCIsIFwiZ1wiKTtcbiAgICB2YXIgcmVwbGFjZSA9IGdldFJlcGxhY2VyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbiAgICBmdW5jdGlvbiByZXBsYWNlcihzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5zdWJzdHIoLTEpICE9PSBcIjtcIilcbiAgICAgICAgICAgIHN0ciArPSBcIjtcIjtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2Uoc3RyKTtcbiAgICB9XG4gICAgLy9UT0RPIGNvbnNpZGVyIGNyZWF0aW5nIGEgbWVyZ2VkIG1hcFxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlcik7XG4gICAgfTtcbn0pKCk7XG5mdW5jdGlvbiBnZXRSZXBsYWNlcihtYXApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoMSkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmNoYXJBdCgyKSA9PT0gXCJYXCIgfHwgc3RyLmNoYXJBdCgyKSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDIpLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBbc3RyLnNsaWNlKDEsIC0xKV07XG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlY29kZV9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9kZWNvZGUuanNvblwiKSk7XG4vLyBtb2RpZmllZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCkge1xuICAgIGlmICgoY29kZVBvaW50ID49IDB4ZDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhkZmZmKSB8fCBjb2RlUG9pbnQgPiAweDEwZmZmZikge1xuICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XG4gICAgfVxuICAgIGlmIChjb2RlUG9pbnQgaW4gZGVjb2RlX2pzb25fMS5kZWZhdWx0KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29kZVBvaW50ID0gZGVjb2RlX2pzb25fMS5kZWZhdWx0W2NvZGVQb2ludF07XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgIH1cbiAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvZGVDb2RlUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHhtbF9qc29uXzEuZGVmYXVsdCk7XG52YXIgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG5leHBvcnRzLmVuY29kZVhNTCA9IGdldEludmVyc2UoaW52ZXJzZVhNTCwgeG1sUmVwbGFjZXIpO1xudmFyIGVudGl0aWVzX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2VudGl0aWVzLmpzb25cIikpO1xudmFyIGludmVyc2VIVE1MID0gZ2V0SW52ZXJzZU9iaihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG52YXIgaHRtbFJlcGxhY2VyID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VIVE1MKTtcbmV4cG9ydHMuZW5jb2RlSFRNTCA9IGdldEludmVyc2UoaW52ZXJzZUhUTUwsIGh0bWxSZXBsYWNlcik7XG5mdW5jdGlvbiBnZXRJbnZlcnNlT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgIC5zb3J0KClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoaW52ZXJzZSwgbmFtZSkge1xuICAgICAgICBpbnZlcnNlW29ialtuYW1lXV0gPSBcIiZcIiArIG5hbWUgKyBcIjtcIjtcbiAgICAgICAgcmV0dXJuIGludmVyc2U7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2UpIHtcbiAgICB2YXIgc2luZ2xlID0gW107XG4gICAgdmFyIG11bHRpcGxlID0gW107XG4gICAgT2JqZWN0LmtleXMoaW52ZXJzZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gay5sZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gLy8gQWRkIHZhbHVlIHRvIHNpbmdsZSBhcnJheVxuICAgICAgICAgICAgICAgIHNpbmdsZS5wdXNoKFwiXFxcXFwiICsgaylcbiAgICAgICAgICAgIDogLy8gQWRkIHZhbHVlIHRvIG11bHRpcGxlIGFycmF5XG4gICAgICAgICAgICAgICAgbXVsdGlwbGUucHVzaChrKTtcbiAgICB9KTtcbiAgICAvL1RPRE8gYWRkIHJhbmdlc1xuICAgIG11bHRpcGxlLnVuc2hpZnQoXCJbXCIgKyBzaW5nbGUuam9pbihcIlwiKSArIFwiXVwiKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChtdWx0aXBsZS5qb2luKFwifFwiKSwgXCJnXCIpO1xufVxudmFyIHJlTm9uQVNDSUkgPSAvW15cXDAtXFx4N0ZdL2c7XG52YXIgcmVBc3RyYWxTeW1ib2xzID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl0vZztcbmZ1bmN0aW9uIHNpbmdsZUNoYXJSZXBsYWNlcihjKSB7XG4gICAgcmV0dXJuIFwiJiN4XCIgKyBjXG4gICAgICAgIC5jaGFyQ29kZUF0KDApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmZ1bmN0aW9uIGFzdHJhbFJlcGxhY2VyKGMsIF8pIHtcbiAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgIHZhciBoaWdoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHZhciBsb3cgPSBjLmNoYXJDb2RlQXQoMSk7XG4gICAgdmFyIGNvZGVQb2ludCA9IChoaWdoIC0gMHhkODAwKSAqIDB4NDAwICsgbG93IC0gMHhkYzAwICsgMHgxMDAwMDtcbiAgICByZXR1cm4gXCImI3hcIiArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZShpbnZlcnNlLCByZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgLnJlcGxhY2UocmUsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBpbnZlcnNlW25hbWVdOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmVBc3RyYWxTeW1ib2xzLCBhc3RyYWxSZXBsYWNlcilcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG4gICAgfTtcbn1cbnZhciByZVhtbENoYXJzID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuZnVuY3Rpb24gZXNjYXBlKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YVxuICAgICAgICAucmVwbGFjZShyZVhtbENoYXJzLCBzaW5nbGVDaGFyUmVwbGFjZXIpXG4gICAgICAgIC5yZXBsYWNlKHJlQXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG4gICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5leHBvcnRzLmVzY2FwZSA9IGVzY2FwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlY29kZV8xID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xudmFyIGVuY29kZV8xID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuZnVuY3Rpb24gZGVjb2RlKGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUwpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5mdW5jdGlvbiBkZWNvZGVTdHJpY3QoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTFN0cmljdCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZVN0cmljdCA9IGRlY29kZVN0cmljdDtcbmZ1bmN0aW9uIGVuY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBlbmNvZGVfMS5lbmNvZGVYTUwgOiBlbmNvZGVfMS5lbmNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xudmFyIGVuY29kZV8yID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBlbmNvZGVfMi5lbmNvZGVYTUw7XG5leHBvcnRzLmVuY29kZUhUTUwgPSBlbmNvZGVfMi5lbmNvZGVIVE1MO1xuZXhwb3J0cy5lc2NhcGUgPSBlbmNvZGVfMi5lc2NhcGU7XG4vLyBMZWdhY3kgYWxpYXNlc1xuZXhwb3J0cy5lbmNvZGVIVE1MNCA9IGVuY29kZV8yLmVuY29kZUhUTUw7XG5leHBvcnRzLmVuY29kZUhUTUw1ID0gZW5jb2RlXzIuZW5jb2RlSFRNTDtcbnZhciBkZWNvZGVfMiA9IHJlcXVpcmUoXCIuL2RlY29kZVwiKTtcbmV4cG9ydHMuZGVjb2RlWE1MID0gZGVjb2RlXzIuZGVjb2RlWE1MO1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gZGVjb2RlXzIuZGVjb2RlSFRNTDtcbmV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7XG4vLyBMZWdhY3kgYWxpYXNlc1xuZXhwb3J0cy5kZWNvZGVIVE1MNCA9IGRlY29kZV8yLmRlY29kZUhUTUw7XG5leHBvcnRzLmRlY29kZUhUTUw1ID0gZGVjb2RlXzIuZGVjb2RlSFRNTDtcbmV4cG9ydHMuZGVjb2RlSFRNTDRTdHJpY3QgPSBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0O1xuZXhwb3J0cy5kZWNvZGVIVE1MNVN0cmljdCA9IGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGRlY29kZV8yLmRlY29kZVhNTDtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNdWx0aXBsZXhIYW5kbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTXVsdGlwbGV4SGFuZGxlclwiKSk7XG52YXIgQ29sbGVjdGluZ0hhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbGxlY3RpbmdIYW5kbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbGxlY3RpbmdIYW5kbGVyKGNicykge1xuICAgICAgICBpZiAoY2JzID09PSB2b2lkIDApIHsgY2JzID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5ldmVudHMucHVzaChbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChfdGhpcy5fY2JzW25hbWVdKVxuICAgICAgICAgICAgICAgIChfYSA9IF90aGlzLl9jYnMpW25hbWVdLmFwcGx5KF9hLCBhcmdzKTtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2NicyA9IGNicztcbiAgICAgICAgX3RoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29sbGVjdGluZ0hhbmRsZXIucHJvdG90eXBlLm9ucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25yZXNldClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnJlc2V0KCk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucmVzZXQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25yZXNldCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLmV2ZW50c1tpXSwgbmFtZV8xID0gX2JbMF0sIGFyZ3MgPSBfYi5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2JzW25hbWVfMV0pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIChfYSA9IHRoaXMuX2NicylbbmFtZV8xXS5hcHBseShfYSwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb2xsZWN0aW5nSGFuZGxlcjtcbn0oTXVsdGlwbGV4SGFuZGxlcl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuQ29sbGVjdGluZ0hhbmRsZXIgPSBDb2xsZWN0aW5nSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZG9taGFuZGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkb21oYW5kbGVyXCIpKTtcbnZhciBEb21VdGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiZG9tdXRpbHNcIikpO1xudmFyIFBhcnNlcl8xID0gcmVxdWlyZShcIi4vUGFyc2VyXCIpO1xuLy9UT0RPOiBDb25zdW1lIGRhdGEgYXMgaXQgaXMgY29taW5nIGluXG52YXIgRmVlZEhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZlZWRIYW5kbGVyLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGZWVkSGFuZGxlcihjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcIm9iamVjdFwiICYmIGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNhbGxiYWNrLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZlZWRIYW5kbGVyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZlZWQgPSB7fTtcbiAgICAgICAgdmFyIGZlZWRSb290ID0gZ2V0T25lRWxlbWVudChpc1ZhbGlkRmVlZCwgdGhpcy5kb20pO1xuICAgICAgICBpZiAoZmVlZFJvb3QpIHtcbiAgICAgICAgICAgIGlmIChmZWVkUm9vdC5uYW1lID09PSBcImZlZWRcIikge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHMgPSBmZWVkUm9vdC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmZWVkLnR5cGUgPSBcImF0b21cIjtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiaWRcIiwgXCJpZFwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgdmFyIGhyZWYgPSBnZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGdldE9uZUVsZW1lbnQoXCJsaW5rXCIsIGNoaWxkcykpO1xuICAgICAgICAgICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZWQubGluayA9IGhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJkZXNjcmlwdGlvblwiLCBcInN1YnRpdGxlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWQgPSBmZXRjaChcInVwZGF0ZWRcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcImVtYWlsXCIsIGNoaWxkcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmVlZC5pdGVtcyA9IGdldEVsZW1lbnRzKFwiZW50cnlcIiwgY2hpbGRzKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwiaWRcIiwgXCJpZFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBocmVmID0gZ2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBjaGlsZHJlbikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkubGluayA9IGhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gZmV0Y2goXCJzdW1tYXJ5XCIsIGNoaWxkcmVuKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goXCJjb250ZW50XCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwdWJEYXRlID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1YkRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnB1YkRhdGUgPSBuZXcgRGF0ZShwdWJEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRzID0gZ2V0T25lRWxlbWVudChcImNoYW5uZWxcIiwgZmVlZFJvb3QuY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmZWVkLnR5cGUgPSBmZWVkUm9vdC5uYW1lLnN1YnN0cigwLCAzKTtcbiAgICAgICAgICAgICAgICBmZWVkLmlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJsaW5rXCIsIFwibGlua1wiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZWQgPSBmZXRjaChcImxhc3RCdWlsZERhdGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcIm1hbmFnaW5nRWRpdG9yXCIsIGNoaWxkcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgZmVlZC5pdGVtcyA9IGdldEVsZW1lbnRzKFwiaXRlbVwiLCBmZWVkUm9vdC5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImlkXCIsIFwiZ3VpZFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImRlc2NyaXB0aW9uXCIsIFwiZGVzY3JpcHRpb25cIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHViRGF0ZSA9IGZldGNoKFwicHViRGF0ZVwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdWJEYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkucHViRGF0ZSA9IG5ldyBEYXRlKHB1YkRhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWVkID0gZmVlZDtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhmZWVkUm9vdCA/IG51bGwgOiBFcnJvcihcImNvdWxkbid0IGZpbmQgcm9vdCBvZiBmZWVkXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBGZWVkSGFuZGxlcjtcbn0oZG9taGFuZGxlcl8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuRmVlZEhhbmRsZXIgPSBGZWVkSGFuZGxlcjtcbmZ1bmN0aW9uIGdldEVsZW1lbnRzKHdoYXQsIHdoZXJlKSB7XG4gICAgcmV0dXJuIERvbVV0aWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHdoYXQsIHdoZXJlLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldE9uZUVsZW1lbnQod2hhdCwgd2hlcmUpIHtcbiAgICByZXR1cm4gRG9tVXRpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUod2hhdCwgd2hlcmUsIHRydWUsIDEpWzBdO1xufVxuZnVuY3Rpb24gZmV0Y2god2hhdCwgd2hlcmUsIHJlY3Vyc2UpIHtcbiAgICBpZiAocmVjdXJzZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2UgPSBmYWxzZTsgfVxuICAgIHJldHVybiBEb21VdGlscy5nZXRUZXh0KERvbVV0aWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHdoYXQsIHdoZXJlLCByZWN1cnNlLCAxKSkudHJpbSgpO1xufVxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUsIGVsZW0pIHtcbiAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBhdHRyaWJzID0gZWxlbS5hdHRyaWJzO1xuICAgIHJldHVybiBhdHRyaWJzW25hbWVdO1xufVxuZnVuY3Rpb24gYWRkQ29uZGl0aW9uYWxseShvYmosIHByb3AsIHdoYXQsIHdoZXJlLCByZWN1cnNlKSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gZmFsc2U7IH1cbiAgICB2YXIgdG1wID0gZmV0Y2god2hhdCwgd2hlcmUsIHJlY3Vyc2UpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodG1wKVxuICAgICAgICBvYmpbcHJvcF0gPSB0bXA7XG59XG5mdW5jdGlvbiBpc1ZhbGlkRmVlZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJyc3NcIiB8fCB2YWx1ZSA9PT0gXCJmZWVkXCIgfHwgdmFsdWUgPT09IFwicmRmOlJERlwiO1xufVxudmFyIGRlZmF1bHRPcHRpb25zID0geyB4bWxNb2RlOiB0cnVlIH07XG4vKipcbiAqIFBhcnNlIGEgZmVlZC5cbiAqXG4gKiBAcGFyYW0gZmVlZCBUaGUgZmVlZCB0aGF0IHNob3VsZCBiZSBwYXJzZWQsIGFzIGEgc3RyaW5nLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWxseSwgb3B0aW9ucyBmb3IgcGFyc2luZy4gV2hlbiB1c2luZyB0aGlzIG9wdGlvbiwgeW91IHByb2JhYmx5IHdhbnQgdG8gc2V0IGB4bWxNb2RlYCB0byBgdHJ1ZWAuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRmVlZChmZWVkLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7IH1cbiAgICB2YXIgaGFuZGxlciA9IG5ldyBGZWVkSGFuZGxlcihvcHRpb25zKTtcbiAgICBuZXcgUGFyc2VyXzEuUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChmZWVkKTtcbiAgICByZXR1cm4gaGFuZGxlci5mZWVkO1xufVxuZXhwb3J0cy5wYXJzZUZlZWQgPSBwYXJzZUZlZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogQ2FsbHMgYSBzcGVjaWZpYyBoYW5kbGVyIGZ1bmN0aW9uIGZvciBhbGwgZXZlbnRzIHRoYXQgYXJlIGVuY291bnRlcmVkLlxuICpcbiAqIEBwYXJhbSBmdW5jIOKAlCBUaGUgZnVuY3Rpb24gdG8gbXVsdGlwbGV4IGFsbCBldmVudHMgdG8uXG4gKi9cbnZhciBNdWx0aXBsZXhIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE11bHRpcGxleEhhbmRsZXIoZnVuYykge1xuICAgICAgICB0aGlzLl9mdW5jID0gZnVuYztcbiAgICB9XG4gICAgLyogRm9ybWF0OiBldmVudG5hbWU6IG51bWJlciBvZiBhcmd1bWVudHMgKi9cbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25hdHRyaWJ1dGVcIiwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25jZGF0YXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25jZGF0YXN0YXJ0XCIpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25jZGF0YWVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uY2RhdGFlbmRcIik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbnRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib250ZXh0XCIsIHRleHQpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uXCIsIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uY29tbWVudCA9IGZ1bmN0aW9uIChjb21tZW50KSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmNvbW1lbnRcIiwgY29tbWVudCk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmNvbW1lbnRlbmRcIik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uY2xvc2V0YWdcIiwgbmFtZSk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbm9wZW50YWcgPSBmdW5jdGlvbiAobmFtZSwgYXR0cmlicykge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25vcGVudGFnXCIsIG5hbWUsIGF0dHJpYnMpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25vcGVudGFnbmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbm9wZW50YWduYW1lXCIsIG5hbWUpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25lcnJvclwiLCBlcnJvcik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uZW5kXCIpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25wYXJzZXJpbml0ID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25wYXJzZXJpbml0XCIsIHBhcnNlcik7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25yZXNldFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBNdWx0aXBsZXhIYW5kbGVyO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IE11bHRpcGxleEhhbmRsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRva2VuaXplcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Rva2VuaXplclwiKSk7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xudmFyIGZvcm1UYWdzID0gbmV3IFNldChbXG4gICAgXCJpbnB1dFwiLFxuICAgIFwib3B0aW9uXCIsXG4gICAgXCJvcHRncm91cFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJidXR0b25cIixcbiAgICBcImRhdGFsaXN0XCIsXG4gICAgXCJ0ZXh0YXJlYVwiXG5dKTtcbnZhciBwVGFnID0gbmV3IFNldChbXCJwXCJdKTtcbnZhciBvcGVuSW1wbGllc0Nsb3NlID0ge1xuICAgIHRyOiBuZXcgU2V0KFtcInRyXCIsIFwidGhcIiwgXCJ0ZFwiXSksXG4gICAgdGg6IG5ldyBTZXQoW1widGhcIl0pLFxuICAgIHRkOiBuZXcgU2V0KFtcInRoZWFkXCIsIFwidGhcIiwgXCJ0ZFwiXSksXG4gICAgYm9keTogbmV3IFNldChbXCJoZWFkXCIsIFwibGlua1wiLCBcInNjcmlwdFwiXSksXG4gICAgbGk6IG5ldyBTZXQoW1wibGlcIl0pLFxuICAgIHA6IHBUYWcsXG4gICAgaDE6IHBUYWcsXG4gICAgaDI6IHBUYWcsXG4gICAgaDM6IHBUYWcsXG4gICAgaDQ6IHBUYWcsXG4gICAgaDU6IHBUYWcsXG4gICAgaDY6IHBUYWcsXG4gICAgc2VsZWN0OiBmb3JtVGFncyxcbiAgICBpbnB1dDogZm9ybVRhZ3MsXG4gICAgb3V0cHV0OiBmb3JtVGFncyxcbiAgICBidXR0b246IGZvcm1UYWdzLFxuICAgIGRhdGFsaXN0OiBmb3JtVGFncyxcbiAgICB0ZXh0YXJlYTogZm9ybVRhZ3MsXG4gICAgb3B0aW9uOiBuZXcgU2V0KFtcIm9wdGlvblwiXSksXG4gICAgb3B0Z3JvdXA6IG5ldyBTZXQoW1wib3B0Z3JvdXBcIiwgXCJvcHRpb25cIl0pLFxuICAgIGRkOiBuZXcgU2V0KFtcImR0XCIsIFwiZGRcIl0pLFxuICAgIGR0OiBuZXcgU2V0KFtcImR0XCIsIFwiZGRcIl0pLFxuICAgIGFkZHJlc3M6IHBUYWcsXG4gICAgYXJ0aWNsZTogcFRhZyxcbiAgICBhc2lkZTogcFRhZyxcbiAgICBibG9ja3F1b3RlOiBwVGFnLFxuICAgIGRldGFpbHM6IHBUYWcsXG4gICAgZGl2OiBwVGFnLFxuICAgIGRsOiBwVGFnLFxuICAgIGZpZWxkc2V0OiBwVGFnLFxuICAgIGZpZ2NhcHRpb246IHBUYWcsXG4gICAgZmlndXJlOiBwVGFnLFxuICAgIGZvb3RlcjogcFRhZyxcbiAgICBmb3JtOiBwVGFnLFxuICAgIGhlYWRlcjogcFRhZyxcbiAgICBocjogcFRhZyxcbiAgICBtYWluOiBwVGFnLFxuICAgIG5hdjogcFRhZyxcbiAgICBvbDogcFRhZyxcbiAgICBwcmU6IHBUYWcsXG4gICAgc2VjdGlvbjogcFRhZyxcbiAgICB0YWJsZTogcFRhZyxcbiAgICB1bDogcFRhZyxcbiAgICBydDogbmV3IFNldChbXCJydFwiLCBcInJwXCJdKSxcbiAgICBycDogbmV3IFNldChbXCJydFwiLCBcInJwXCJdKSxcbiAgICB0Ym9keTogbmV3IFNldChbXCJ0aGVhZFwiLCBcInRib2R5XCJdKSxcbiAgICB0Zm9vdDogbmV3IFNldChbXCJ0aGVhZFwiLCBcInRib2R5XCJdKVxufTtcbnZhciB2b2lkRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgICBcImFyZWFcIixcbiAgICBcImJhc2VcIixcbiAgICBcImJhc2Vmb250XCIsXG4gICAgXCJiclwiLFxuICAgIFwiY29sXCIsXG4gICAgXCJjb21tYW5kXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiZnJhbWVcIixcbiAgICBcImhyXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpc2luZGV4XCIsXG4gICAgXCJrZXlnZW5cIixcbiAgICBcImxpbmtcIixcbiAgICBcIm1ldGFcIixcbiAgICBcInBhcmFtXCIsXG4gICAgXCJzb3VyY2VcIixcbiAgICBcInRyYWNrXCIsXG4gICAgXCJ3YnJcIlxuXSk7XG52YXIgZm9yZWlnbkNvbnRleHRFbGVtZW50cyA9IG5ldyBTZXQoW1wibWF0aFwiLCBcInN2Z1wiXSk7XG52YXIgaHRtbEludGVncmF0aW9uRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgICBcIm1pXCIsXG4gICAgXCJtb1wiLFxuICAgIFwibW5cIixcbiAgICBcIm1zXCIsXG4gICAgXCJtdGV4dFwiLFxuICAgIFwiYW5ub3RhdGlvbi14bWxcIixcbiAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICBcImRlc2NcIixcbiAgICBcInRpdGxlXCJcbl0pO1xudmFyIHJlTmFtZUVuZCA9IC9cXHN8XFwvLztcbnZhciBQYXJzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBhcnNlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYXJzZXIoY2JzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl90YWduYW1lID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlicyA9IG51bGw7XG4gICAgICAgIF90aGlzLl9zdGFjayA9IFtdO1xuICAgICAgICBfdGhpcy5fZm9yZWlnbkNvbnRleHQgPSBbXTtcbiAgICAgICAgX3RoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIF90aGlzLmVuZEluZGV4ID0gbnVsbDtcbiAgICAgICAgLy8gQWxpYXNlcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgX3RoaXMucGFyc2VDaHVuayA9IFBhcnNlci5wcm90b3R5cGUud3JpdGU7XG4gICAgICAgIF90aGlzLmRvbmUgPSBQYXJzZXIucHJvdG90eXBlLmVuZDtcbiAgICAgICAgX3RoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBfdGhpcy5fY2JzID0gY2JzIHx8IHt9O1xuICAgICAgICBfdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYnZhbHVlID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgICAgICBfdGhpcy5fc3RhY2sgPSBbXTtcbiAgICAgICAgX3RoaXMuX2ZvcmVpZ25Db250ZXh0ID0gW107XG4gICAgICAgIF90aGlzLnN0YXJ0SW5kZXggPSAwO1xuICAgICAgICBfdGhpcy5lbmRJbmRleCA9IG51bGw7XG4gICAgICAgIF90aGlzLl9sb3dlckNhc2VUYWdOYW1lcyA9XG4gICAgICAgICAgICBcImxvd2VyQ2FzZVRhZ3NcIiBpbiBfdGhpcy5fb3B0aW9uc1xuICAgICAgICAgICAgICAgID8gISFfdGhpcy5fb3B0aW9ucy5sb3dlckNhc2VUYWdzXG4gICAgICAgICAgICAgICAgOiAhX3RoaXMuX29wdGlvbnMueG1sTW9kZTtcbiAgICAgICAgX3RoaXMuX2xvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzID1cbiAgICAgICAgICAgIFwibG93ZXJDYXNlQXR0cmlidXRlTmFtZXNcIiBpbiBfdGhpcy5fb3B0aW9uc1xuICAgICAgICAgICAgICAgID8gISFfdGhpcy5fb3B0aW9ucy5sb3dlckNhc2VBdHRyaWJ1dGVOYW1lc1xuICAgICAgICAgICAgICAgIDogIV90aGlzLl9vcHRpb25zLnhtbE1vZGU7XG4gICAgICAgIF90aGlzLl90b2tlbml6ZXIgPSBuZXcgKF90aGlzLl9vcHRpb25zLlRva2VuaXplciB8fCBUb2tlbml6ZXJfMS5kZWZhdWx0KShfdGhpcy5fb3B0aW9ucywgX3RoaXMpO1xuICAgICAgICBpZiAoX3RoaXMuX2Nicy5vbnBhcnNlcmluaXQpXG4gICAgICAgICAgICBfdGhpcy5fY2JzLm9ucGFyc2VyaW5pdChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUGFyc2VyLnByb3RvdHlwZS5fdXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoaW5pdGlhbE9mZnNldCkge1xuICAgICAgICBpZiAodGhpcy5lbmRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Rva2VuaXplci5fc2VjdGlvblN0YXJ0IDw9IGluaXRpYWxPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5fdG9rZW5pemVyLl9zZWN0aW9uU3RhcnQgLSBpbml0aWFsT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IHRoaXMuZW5kSW5kZXggKyAxO1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gdGhpcy5fdG9rZW5pemVyLmdldEFic29sdXRlSW5kZXgoKTtcbiAgICB9O1xuICAgIC8vVG9rZW5pemVyIGV2ZW50IGhhbmRsZXJzXG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbnRleHQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmVuZEluZGV4LS07XG4gICAgICAgIGlmICh0aGlzLl9jYnMub250ZXh0KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dChkYXRhKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25vcGVudGFnbmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLl9sb3dlckNhc2VUYWdOYW1lcykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90YWduYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiYgbmFtZSBpbiBvcGVuSW1wbGllc0Nsb3NlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBlbCA9IHZvaWQgMDsgXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBvcGVuSW1wbGllc0Nsb3NlW25hbWVdLmhhcygoZWwgPSB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSkpOyB0aGlzLm9uY2xvc2V0YWcoZWwpKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8ICF2b2lkRWxlbWVudHMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGFjay5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgaWYgKGZvcmVpZ25Db250ZXh0RWxlbWVudHMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHQucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGh0bWxJbnRlZ3JhdGlvbkVsZW1lbnRzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25vcGVudGFnbmFtZSlcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ub3BlbnRhZylcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnMgPSB7fTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25vcGVudGFnZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dHJpYnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25vcGVudGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9ub3BlbnRhZyh0aGlzLl90YWduYW1lLCB0aGlzLl9hdHRyaWJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy54bWxNb2RlICYmXG4gICAgICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyAmJlxuICAgICAgICAgICAgdm9pZEVsZW1lbnRzLmhhcyh0aGlzLl90YWduYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fdGFnbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uY2xvc2V0YWcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JlaWduQ29udGV4dEVsZW1lbnRzLmhhcyhuYW1lKSB8fFxuICAgICAgICAgICAgaHRtbEludGVncmF0aW9uRWxlbWVudHMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9mb3JlaWduQ29udGV4dC5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3RhY2subGVuZ3RoICYmXG4gICAgICAgICAgICAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8ICF2b2lkRWxlbWVudHMuaGFzKG5hbWUpKSkge1xuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmxhc3RJbmRleE9mKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5fc3RhY2subGVuZ3RoIC0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChwb3MtLSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3N0YWNrLnBvcCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFjay5sZW5ndGggPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcInBcIiAmJiAhdGhpcy5fb3B0aW9ucy54bWxNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiYgKG5hbWUgPT09IFwiYnJcIiB8fCBuYW1lID09PSBcInBcIikpIHtcbiAgICAgICAgICAgIHRoaXMub25vcGVudGFnbmFtZShuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uc2VsZmNsb3Npbmd0YWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLnhtbE1vZGUgfHxcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucmVjb2duaXplU2VsZkNsb3NpbmcgfHxcbiAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0W3RoaXMuX2ZvcmVpZ25Db250ZXh0Lmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25vcGVudGFnZW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUuX2Nsb3NlQ3VycmVudFRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLl90YWduYW1lO1xuICAgICAgICB0aGlzLm9ub3BlbnRhZ2VuZCgpO1xuICAgICAgICAvL3NlbGYtY2xvc2luZyB0YWdzIHdpbGwgYmUgb24gdGhlIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgICAgLy8oY2hlYXBlciBjaGVjayB0aGFuIGluIG9uY2xvc2V0YWcpXG4gICAgICAgIGlmICh0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNsb3NldGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmF0dHJpYm5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fbG93ZXJDYXNlQXR0cmlidXRlTmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXR0cmlibmFtZSA9IG5hbWU7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZGF0YSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9hdHRyaWJ2YWx1ZSArPSB2YWx1ZTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25hdHRyaWJlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25hdHRyaWJ1dGUpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJ1dGUodGhpcy5fYXR0cmlibmFtZSwgdGhpcy5fYXR0cmlidmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5fYXR0cmlicyAmJlxuICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9hdHRyaWJzLCB0aGlzLl9hdHRyaWJuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fYXR0cmlic1t0aGlzLl9hdHRyaWJuYW1lXSA9IHRoaXMuX2F0dHJpYnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLl9hdHRyaWJ2YWx1ZSA9IFwiXCI7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLl9nZXRJbnN0cnVjdGlvbk5hbWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGlkeCA9IHZhbHVlLnNlYXJjaChyZU5hbWVFbmQpO1xuICAgICAgICB2YXIgbmFtZSA9IGlkeCA8IDAgPyB2YWx1ZSA6IHZhbHVlLnN1YnN0cigwLCBpZHgpO1xuICAgICAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uZGVjbGFyYXRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbikge1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRoaXMuX2dldEluc3RydWN0aW9uTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oXCIhXCIgKyBuYW1lXzEsIFwiIVwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBuYW1lXzIgPSB0aGlzLl9nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKFwiP1wiICsgbmFtZV8yLCBcIj9cIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oNCk7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25jb21tZW50KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY29tbWVudCh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25jb21tZW50ZW5kKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY29tbWVudGVuZCgpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmNkYXRhID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8IHRoaXMuX29wdGlvbnMucmVjb2duaXplQ0RBVEEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25jZGF0YXN0YXJ0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNkYXRhc3RhcnQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub250ZXh0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNkYXRhZW5kKVxuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNkYXRhZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uY29tbWVudChcIltDREFUQVtcIiArIHZhbHVlICsgXCJdXVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uZXJyb3IpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25lcnJvcihlcnIpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNsb3NldGFnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5fc3RhY2subGVuZ3RoOyBpID4gMDsgdGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fc3RhY2tbLS1pXSkpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25lbmQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25lbmQoKTtcbiAgICB9O1xuICAgIC8vUmVzZXRzIHRoZSBwYXJzZXIgdG8gYSBibGFuayBzdGF0ZSwgcmVhZHkgdG8gcGFyc2UgYSBuZXcgSFRNTCBkb2N1bWVudFxuICAgIFBhcnNlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25yZXNldClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplci5yZXNldCgpO1xuICAgICAgICB0aGlzLl90YWduYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdGFjayA9IFtdO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucGFyc2VyaW5pdClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnBhcnNlcmluaXQodGhpcyk7XG4gICAgfTtcbiAgICAvL1BhcnNlcyBhIGNvbXBsZXRlIEhUTUwgZG9jdW1lbnQgYW5kIHB1c2hlcyBpdCB0byB0aGUgaGFuZGxlclxuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VDb21wbGV0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbmQoZGF0YSk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplci53cml0ZShjaHVuayk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICB0aGlzLl90b2tlbml6ZXIuZW5kKGNodW5rKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplci5wYXVzZSgpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplci5yZXN1bWUoKTtcbiAgICB9O1xuICAgIHJldHVybiBQYXJzZXI7XG59KGV2ZW50c18xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5QYXJzZXIgPSBQYXJzZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfY29kZXBvaW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50XCIpKTtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVudGl0aWVzL2xpYi9tYXBzL2VudGl0aWVzLmpzb25cIikpO1xudmFyIGxlZ2FjeV9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVudGl0aWVzL2xpYi9tYXBzL2xlZ2FjeS5qc29uXCIpKTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbnRpdGllcy9saWIvbWFwcy94bWwuanNvblwiKSk7XG5mdW5jdGlvbiB3aGl0ZXNwYWNlKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gXCIgXCIgfHwgYyA9PT0gXCJcXG5cIiB8fCBjID09PSBcIlxcdFwiIHx8IGMgPT09IFwiXFxmXCIgfHwgYyA9PT0gXCJcXHJcIjtcbn1cbmZ1bmN0aW9uIGlmRWxzZVN0YXRlKHVwcGVyLCBTVUNDRVNTLCBGQUlMVVJFKSB7XG4gICAgdmFyIGxvd2VyID0gdXBwZXIudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodXBwZXIgPT09IGxvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCwgYykge1xuICAgICAgICAgICAgaWYgKGMgPT09IGxvd2VyKSB7XG4gICAgICAgICAgICAgICAgdC5fc3RhdGUgPSBTVUNDRVNTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdC5fc3RhdGUgPSBGQUlMVVJFO1xuICAgICAgICAgICAgICAgIHQuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQsIGMpIHtcbiAgICAgICAgICAgIGlmIChjID09PSBsb3dlciB8fCBjID09PSB1cHBlcikge1xuICAgICAgICAgICAgICAgIHQuX3N0YXRlID0gU1VDQ0VTUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuX3N0YXRlID0gRkFJTFVSRTtcbiAgICAgICAgICAgICAgICB0Ll9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIodXBwZXIsIE5FWFRfU1RBVEUpIHtcbiAgICB2YXIgbG93ZXIgPSB1cHBlci50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAodCwgYykge1xuICAgICAgICBpZiAoYyA9PT0gbG93ZXIgfHwgYyA9PT0gdXBwZXIpIHtcbiAgICAgICAgICAgIHQuX3N0YXRlID0gTkVYVF9TVEFURTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHQuX3N0YXRlID0gMyAvKiBJblRhZ05hbWUgKi87XG4gICAgICAgICAgICB0Ll9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIHN0YXRlQmVmb3JlQ2RhdGExID0gaWZFbHNlU3RhdGUoXCJDXCIsIDIzIC8qIEJlZm9yZUNkYXRhMiAqLywgMTYgLyogSW5EZWNsYXJhdGlvbiAqLyk7XG52YXIgc3RhdGVCZWZvcmVDZGF0YTIgPSBpZkVsc2VTdGF0ZShcIkRcIiwgMjQgLyogQmVmb3JlQ2RhdGEzICovLCAxNiAvKiBJbkRlY2xhcmF0aW9uICovKTtcbnZhciBzdGF0ZUJlZm9yZUNkYXRhMyA9IGlmRWxzZVN0YXRlKFwiQVwiLCAyNSAvKiBCZWZvcmVDZGF0YTQgKi8sIDE2IC8qIEluRGVjbGFyYXRpb24gKi8pO1xudmFyIHN0YXRlQmVmb3JlQ2RhdGE0ID0gaWZFbHNlU3RhdGUoXCJUXCIsIDI2IC8qIEJlZm9yZUNkYXRhNSAqLywgMTYgLyogSW5EZWNsYXJhdGlvbiAqLyk7XG52YXIgc3RhdGVCZWZvcmVDZGF0YTUgPSBpZkVsc2VTdGF0ZShcIkFcIiwgMjcgLyogQmVmb3JlQ2RhdGE2ICovLCAxNiAvKiBJbkRlY2xhcmF0aW9uICovKTtcbnZhciBzdGF0ZUJlZm9yZVNjcmlwdDEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiUlwiLCAzNCAvKiBCZWZvcmVTY3JpcHQyICovKTtcbnZhciBzdGF0ZUJlZm9yZVNjcmlwdDIgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiSVwiLCAzNSAvKiBCZWZvcmVTY3JpcHQzICovKTtcbnZhciBzdGF0ZUJlZm9yZVNjcmlwdDMgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiUFwiLCAzNiAvKiBCZWZvcmVTY3JpcHQ0ICovKTtcbnZhciBzdGF0ZUJlZm9yZVNjcmlwdDQgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiVFwiLCAzNyAvKiBCZWZvcmVTY3JpcHQ1ICovKTtcbnZhciBzdGF0ZUFmdGVyU2NyaXB0MSA9IGlmRWxzZVN0YXRlKFwiUlwiLCAzOSAvKiBBZnRlclNjcmlwdDIgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVBZnRlclNjcmlwdDIgPSBpZkVsc2VTdGF0ZShcIklcIiwgNDAgLyogQWZ0ZXJTY3JpcHQzICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTY3JpcHQzID0gaWZFbHNlU3RhdGUoXCJQXCIsIDQxIC8qIEFmdGVyU2NyaXB0NCAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUFmdGVyU2NyaXB0NCA9IGlmRWxzZVN0YXRlKFwiVFwiLCA0MiAvKiBBZnRlclNjcmlwdDUgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVCZWZvcmVTdHlsZTEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiWVwiLCA0NCAvKiBCZWZvcmVTdHlsZTIgKi8pO1xudmFyIHN0YXRlQmVmb3JlU3R5bGUyID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIkxcIiwgNDUgLyogQmVmb3JlU3R5bGUzICovKTtcbnZhciBzdGF0ZUJlZm9yZVN0eWxlMyA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJFXCIsIDQ2IC8qIEJlZm9yZVN0eWxlNCAqLyk7XG52YXIgc3RhdGVBZnRlclN0eWxlMSA9IGlmRWxzZVN0YXRlKFwiWVwiLCA0OCAvKiBBZnRlclN0eWxlMiAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUFmdGVyU3R5bGUyID0gaWZFbHNlU3RhdGUoXCJMXCIsIDQ5IC8qIEFmdGVyU3R5bGUzICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTdHlsZTMgPSBpZkVsc2VTdGF0ZShcIkVcIiwgNTAgLyogQWZ0ZXJTdHlsZTQgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVCZWZvcmVFbnRpdHkgPSBpZkVsc2VTdGF0ZShcIiNcIiwgNTIgLyogQmVmb3JlTnVtZXJpY0VudGl0eSAqLywgNTMgLyogSW5OYW1lZEVudGl0eSAqLyk7XG52YXIgc3RhdGVCZWZvcmVOdW1lcmljRW50aXR5ID0gaWZFbHNlU3RhdGUoXCJYXCIsIDU1IC8qIEluSGV4RW50aXR5ICovLCA1NCAvKiBJbk51bWVyaWNFbnRpdHkgKi8pO1xudmFyIFRva2VuaXplciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2tlbml6ZXIob3B0aW9ucywgY2JzKSB7XG4gICAgICAgIC8qKiBUaGUgY3VycmVudCBzdGF0ZSB0aGUgdG9rZW5pemVyIGlzIGluLiAqL1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgLyoqIFRoZSByZWFkIGJ1ZmZlci4gKi9cbiAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgLyoqIFRoZSBiZWdpbm5pbmcgb2YgdGhlIHNlY3Rpb24gdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgcmVhZC4gKi9cbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgLyoqIFRoZSBpbmRleCB3aXRoaW4gdGhlIGJ1ZmZlciB0aGF0IHdlIGFyZSBjdXJyZW50bHkgbG9va2luZyBhdC4gKi9cbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBidWZmZXIgb2NjYXNpb25hbGx5LlxuICAgICAgICAgKiBgX2J1ZmZlck9mZnNldGAga2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgY2hhcmFjdGVycyBoYXZlIGJlZW4gcmVtb3ZlZCwgdG8gbWFrZSBzdXJlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGlzIGFjY3VyYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ID0gMDtcbiAgICAgICAgLyoqIFNvbWUgYmVoYXZpb3IsIGVnLiB3aGVuIGRlY29kaW5nIGVudGl0aWVzLCBpcyBkb25lIHdoaWxlIHdlIGFyZSBpbiBhbm90aGVyIHN0YXRlLiBUaGlzIGtlZXBzIHRyYWNrIG9mIHRoZSBvdGhlciBzdGF0ZSB0eXBlLiAqL1xuICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIC8qKiBGb3Igc3BlY2lhbCBwYXJzaW5nIGJlaGF2aW9yIGluc2lkZSBvZiBzY3JpcHQgYW5kIHN0eWxlIHRhZ3MuICovXG4gICAgICAgIHRoaXMuX3NwZWNpYWwgPSAxIC8qIE5vbmUgKi87XG4gICAgICAgIC8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9rZW5pemVyIGhhcyBiZWVuIHBhdXNlZC4gKi9cbiAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG4gICAgICAgIC8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9rZW5pemVyIGhhcyBmaW5pc2hlZCBydW5uaW5nIC8gYC5lbmRgIGhhcyBiZWVuIGNhbGxlZC4gKi9cbiAgICAgICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2JzID0gY2JzO1xuICAgICAgICB0aGlzLl94bWxNb2RlID0gISEob3B0aW9ucyAmJiBvcHRpb25zLnhtbE1vZGUpO1xuICAgICAgICB0aGlzLl9kZWNvZGVFbnRpdGllcyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWNvZGVFbnRpdGllcyk7XG4gICAgfVxuICAgIFRva2VuaXplci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDEgLyogTm9uZSAqLztcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZVRleHQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI8XCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRoaXMuX3NlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMiAvKiBCZWZvcmVUYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgPT09IDEgLyogTm9uZSAqLyAmJlxuICAgICAgICAgICAgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRoaXMuX3NlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNTEgLyogQmVmb3JlRW50aXR5ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlVGFnTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi9cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA1IC8qIEJlZm9yZUNsb3NpbmdUYWdOYW1lICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIj5cIiB8fFxuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCAhPT0gMSAvKiBOb25lICovIHx8XG4gICAgICAgICAgICB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIiFcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxNSAvKiBCZWZvcmVEZWNsYXJhdGlvbiAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIj9cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxNyAvKiBJblByb2Nlc3NpbmdJbnN0cnVjdGlvbiAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID1cbiAgICAgICAgICAgICAgICAhdGhpcy5feG1sTW9kZSAmJiAoYyA9PT0gXCJzXCIgfHwgYyA9PT0gXCJTXCIpXG4gICAgICAgICAgICAgICAgICAgID8gMzEgLyogQmVmb3JlU3BlY2lhbCAqL1xuICAgICAgICAgICAgICAgICAgICA6IDMgLyogSW5UYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5UYWdOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9ub3BlbnRhZ25hbWVcIik7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2xvc2VpbmdUYWdOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zcGVjaWFsICE9PSAxIC8qIE5vbmUgKi8pIHtcbiAgICAgICAgICAgIGlmIChjID09PSBcInNcIiB8fCBjID09PSBcIlNcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMzIgLyogQmVmb3JlU3BlY2lhbEVuZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDYgLyogSW5DbG9zaW5nVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQ2xvc2VpbmdUYWdOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uY2xvc2V0YWdcIik7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDcgLyogQWZ0ZXJDbG9zaW5nVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvL3NraXAgZXZlcnl0aGluZyB1bnRpbCBcIj5cIlxuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbm9wZW50YWdlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDQgLyogSW5TZWxmQ2xvc2luZ1RhZyAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA5IC8qIEluQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluU2VsZkNsb3NpbmdUYWcgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnNlbGZjbG9zaW5ndGFnKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj1cIiB8fCBjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJuYW1lKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTAgLyogQWZ0ZXJBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTEgLyogQmVmb3JlQXR0cmlidXRlVmFsdWUgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOSAvKiBJbkF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSAnXCInKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEyIC8qIEluQXR0cmlidXRlVmFsdWVEcSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIidcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxMyAvKiBJbkF0dHJpYnV0ZVZhbHVlU3EgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTQgLyogSW5BdHRyaWJ1dGVWYWx1ZU5xICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tOyAvL3JlY29uc3VtZSB0b2tlblxuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDUxIC8qIEJlZm9yZUVudGl0eSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVTaW5nbGVRdW90ZXMgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA1MSAvKiBCZWZvcmVFbnRpdHkgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAod2hpdGVzcGFjZShjKSB8fCBjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA1MSAvKiBCZWZvcmVFbnRpdHkgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID1cbiAgICAgICAgICAgIGMgPT09IFwiW1wiXG4gICAgICAgICAgICAgICAgPyAyMiAvKiBCZWZvcmVDZGF0YTEgKi9cbiAgICAgICAgICAgICAgICA6IGMgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMTggLyogQmVmb3JlQ29tbWVudCAqL1xuICAgICAgICAgICAgICAgICAgICA6IDE2IC8qIEluRGVjbGFyYXRpb24gKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmRlY2xhcmF0aW9uKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDb21tZW50ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiLVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE5IC8qIEluQ29tbWVudCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTYgLyogSW5EZWNsYXJhdGlvbiAqLztcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkNvbW1lbnQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCItXCIpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDIwIC8qIEFmdGVyQ29tbWVudDEgKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ29tbWVudDEgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjEgLyogQWZ0ZXJDb21tZW50MiAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTkgLyogSW5Db21tZW50ICovO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ29tbWVudDIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIDIgdHJhaWxpbmcgY2hhcnNcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNvbW1lbnQodGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4IC0gMikpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyAhPT0gXCItXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTkgLyogSW5Db21tZW50ICovO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2U6IHN0YXkgaW4gQUZURVJfQ09NTUVOVF8yIChgLS0tPmApXG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNkYXRhNiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIltcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyOCAvKiBJbkNkYXRhICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxNiAvKiBJbkRlY2xhcmF0aW9uICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkNkYXRhID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiXVwiKVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyOSAvKiBBZnRlckNkYXRhMSAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDZGF0YTEgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCJdXCIpXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDMwIC8qIEFmdGVyQ2RhdGEyICovO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDI4IC8qIEluQ2RhdGEgKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ2RhdGEyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICAvL3JlbW92ZSAyIHRyYWlsaW5nIGNoYXJzXG4gICAgICAgICAgICB0aGlzLl9jYnMub25jZGF0YSh0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHRoaXMuX3NlY3Rpb25TdGFydCwgdGhpcy5faW5kZXggLSAyKSk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjICE9PSBcIl1cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyOCAvKiBJbkNkYXRhICovO1xuICAgICAgICB9XG4gICAgICAgIC8vZWxzZTogc3RheSBpbiBBRlRFUl9DREFUQV8yIChgXV1dPmApXG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNwZWNpYWwgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMzMgLyogQmVmb3JlU2NyaXB0MSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcInRcIiB8fCBjID09PSBcIlRcIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA0MyAvKiBCZWZvcmVTdHlsZTEgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDMgLyogSW5UYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9jb25zdW1lIHRoZSB0b2tlbiBhZ2FpblxuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNwZWNpYWxFbmQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAodGhpcy5fc3BlY2lhbCA9PT0gMiAvKiBTY3JpcHQgKi8gJiYgKGMgPT09IFwiY1wiIHx8IGMgPT09IFwiQ1wiKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAzOCAvKiBBZnRlclNjcmlwdDEgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BlY2lhbCA9PT0gMyAvKiBTdHlsZSAqLyAmJlxuICAgICAgICAgICAgKGMgPT09IFwidFwiIHx8IGMgPT09IFwiVFwiKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA0NyAvKiBBZnRlclN0eWxlMSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU2NyaXB0NSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsID0gMiAvKiBTY3JpcHQgKi87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSAzIC8qIEluVGFnTmFtZSAqLztcbiAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9jb25zdW1lIHRoZSB0b2tlbiBhZ2FpblxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclNjcmlwdDUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDEgLyogTm9uZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNiAvKiBJbkNsb3NpbmdUYWdOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggLSA2O1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9yZWNvbnN1bWUgdGhlIHRva2VuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlNCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsID0gMyAvKiBTdHlsZSAqLztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IDMgLyogSW5UYWdOYW1lICovO1xuICAgICAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU3R5bGU0ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgPSAxIC8qIE5vbmUgKi87XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDYgLyogSW5DbG9zaW5nVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4IC0gNTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgIH07XG4gICAgLy9mb3IgZW50aXRpZXMgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9vZmZzZXQgPSAxXG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxIDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHRoaXMuX3NlY3Rpb25TdGFydCArIDEsIHRoaXMuX2luZGV4KSwgbWFwID0gdGhpcy5feG1sTW9kZSA/IHhtbF9qc29uXzEuZGVmYXVsdCA6IGVudGl0aWVzX2pzb25fMS5kZWZhdWx0O1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXAsIGVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdFBhcnRpYWwobWFwW2VudGl0eV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9wYXJzZXMgbGVnYWN5IGVudGl0aWVzICh3aXRob3V0IHRyYWlsaW5nIHNlbWljb2xvbilcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9wYXJzZUxlZ2FjeUVudGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5fc2VjdGlvblN0YXJ0ICsgMTtcbiAgICAgICAgdmFyIGxpbWl0ID0gdGhpcy5faW5kZXggLSBzdGFydDtcbiAgICAgICAgaWYgKGxpbWl0ID4gNilcbiAgICAgICAgICAgIGxpbWl0ID0gNjsgLy8gVGhlIG1heCBsZW5ndGggb2YgbGVnYWN5IGVudGl0aWVzIGlzIDZcbiAgICAgICAgd2hpbGUgKGxpbWl0ID49IDIpIHtcbiAgICAgICAgICAgIC8vIFRoZSBtaW4gbGVuZ3RoIG9mIGxlZ2FjeSBlbnRpdGllcyBpcyAyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5fYnVmZmVyLnN1YnN0cihzdGFydCwgbGltaXQpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsZWdhY3lfanNvbl8xLmRlZmF1bHQsIGVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdFBhcnRpYWwobGVnYWN5X2pzb25fMS5kZWZhdWx0W2VudGl0eV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCArPSBsaW1pdCArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGltaXQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbk5hbWVkRW50aXR5ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiO1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZU5hbWVkRW50aXR5U3RyaWN0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA8IHRoaXMuX2luZGV4ICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjIDwgXCJhXCIgfHwgYyA+IFwielwiKSAmJlxuICAgICAgICAgICAgKGMgPCBcIkFcIiB8fCBjID4gXCJaXCIpICYmXG4gICAgICAgICAgICAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl94bWxNb2RlIHx8IHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9iYXNlU3RhdGUgIT09IDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIGlmIChjICE9PSBcIj1cIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZU5hbWVkRW50aXR5U3RyaWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fZGVjb2RlTnVtZXJpY0VudGl0eSA9IGZ1bmN0aW9uIChvZmZzZXQsIGJhc2UpIHtcbiAgICAgICAgdmFyIHNlY3Rpb25TdGFydCA9IHRoaXMuX3NlY3Rpb25TdGFydCArIG9mZnNldDtcbiAgICAgICAgaWYgKHNlY3Rpb25TdGFydCAhPT0gdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIC8vcGFyc2UgZW50aXR5XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5fYnVmZmVyLnN1YnN0cmluZyhzZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4KTtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChlbnRpdHksIGJhc2UpO1xuICAgICAgICAgICAgdGhpcy5fZW1pdFBhcnRpYWwoZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VkKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydC0tO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbk51bWVyaWNFbnRpdHkgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgyLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5IZXhFbnRpdHkgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0Kys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGMgPCBcImFcIiB8fCBjID4gXCJmXCIpICYmXG4gICAgICAgICAgICAoYyA8IFwiQVwiIHx8IGMgPiBcIkZcIikgJiZcbiAgICAgICAgICAgIChjIDwgXCIwXCIgfHwgYyA+IFwiOVwiKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2NsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ICs9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3J1bm5pbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCAhPT0gdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgLy90aGUgc2VjdGlvbiBqdXN0IHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBldmVyeXRoaW5nIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gdGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4IC09IHRoaXMuX3NlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5fc2VjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9UT0RPIG1ha2UgZXZlbnRzIGNvbmRpdGlvbmFsXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICBpZiAodGhpcy5fZW5kZWQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25lcnJvcihFcnJvcihcIi53cml0ZSgpIGFmdGVyIGRvbmUhXCIpKTtcbiAgICAgICAgdGhpcy5fYnVmZmVyICs9IGNodW5rO1xuICAgICAgICB0aGlzLl9wYXJzZSgpO1xuICAgIH07XG4gICAgLy8gSXRlcmF0ZXMgdGhyb3VnaCB0aGUgYnVmZmVyLCBjYWxsaW5nIHRoZSBmdW5jdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgIC8vIFN0YXRlcyB0aGF0IGFyZSBtb3JlIGxpa2VseSB0byBiZSBoaXQgYXJlIGhpZ2hlciB1cCwgYXMgYSBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC5cbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9wYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2luZGV4IDwgdGhpcy5fYnVmZmVyLmxlbmd0aCAmJiB0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuX2J1ZmZlci5jaGFyQXQodGhpcy5faW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVRleHQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTIgLyogSW5BdHRyaWJ1dGVWYWx1ZURxICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVzKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDkgLyogSW5BdHRyaWJ1dGVOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTkgLyogSW5Db21tZW50ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNvbW1lbnQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDMgLyogSW5UYWdOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJblRhZ05hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNiAvKiBJbkNsb3NpbmdUYWdOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyIC8qIEJlZm9yZVRhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVRhZ05hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTAgLyogQWZ0ZXJBdHRyaWJ1dGVOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTMgLyogSW5BdHRyaWJ1dGVWYWx1ZVNxICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDExIC8qIEJlZm9yZUF0dHJpYnV0ZVZhbHVlICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVWYWx1ZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1IC8qIEJlZm9yZUNsb3NpbmdUYWdOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNyAvKiBBZnRlckNsb3NpbmdUYWdOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNsb3NlaW5nVGFnTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzMSAvKiBCZWZvcmVTcGVjaWFsICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTcGVjaWFsKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDIwIC8qIEFmdGVyQ29tbWVudDEgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ29tbWVudDEoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTQgLyogSW5BdHRyaWJ1dGVWYWx1ZU5xICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNCAvKiBJblNlbGZDbG9zaW5nVGFnICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJblNlbGZDbG9zaW5nVGFnKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE2IC8qIEluRGVjbGFyYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluRGVjbGFyYXRpb24oYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTUgLyogQmVmb3JlRGVjbGFyYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZURlY2xhcmF0aW9uKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDIxIC8qIEFmdGVyQ29tbWVudDIgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ29tbWVudDIoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTggLyogQmVmb3JlQ29tbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ29tbWVudChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzMiAvKiBCZWZvcmVTcGVjaWFsRW5kICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTcGVjaWFsRW5kKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM4IC8qIEFmdGVyU2NyaXB0MSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTY3JpcHQxKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM5IC8qIEFmdGVyU2NyaXB0MiAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTY3JpcHQyKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQwIC8qIEFmdGVyU2NyaXB0MyAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTY3JpcHQzKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDMzIC8qIEJlZm9yZVNjcmlwdDEgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVNjcmlwdDEodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzQgLyogQmVmb3JlU2NyaXB0MiAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU2NyaXB0Mih0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzNSAvKiBCZWZvcmVTY3JpcHQzICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTY3JpcHQzKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM2IC8qIEJlZm9yZVNjcmlwdDQgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVNjcmlwdDQodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzcgLyogQmVmb3JlU2NyaXB0NSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0NShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0MSAvKiBBZnRlclNjcmlwdDQgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU2NyaXB0NCh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0MiAvKiBBZnRlclNjcmlwdDUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0NShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0MyAvKiBCZWZvcmVTdHlsZTEgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVN0eWxlMSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyOCAvKiBJbkNkYXRhICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNkYXRhKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ0IC8qIEJlZm9yZVN0eWxlMiAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU3R5bGUyKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ1IC8qIEJlZm9yZVN0eWxlMyAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU3R5bGUzKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ2IC8qIEJlZm9yZVN0eWxlNCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3R5bGU0KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ3IC8qIEFmdGVyU3R5bGUxICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclN0eWxlMSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0OCAvKiBBZnRlclN0eWxlMiAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTdHlsZTIodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDkgLyogQWZ0ZXJTdHlsZTMgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU3R5bGUzKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUwIC8qIEFmdGVyU3R5bGU0ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclN0eWxlNChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxNyAvKiBJblByb2Nlc3NpbmdJbnN0cnVjdGlvbiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTMgLyogSW5OYW1lZEVudGl0eSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5OYW1lZEVudGl0eShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyMiAvKiBCZWZvcmVDZGF0YTEgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUNkYXRhMSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1MSAvKiBCZWZvcmVFbnRpdHkgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUVudGl0eSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyMyAvKiBCZWZvcmVDZGF0YTIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUNkYXRhMih0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyNCAvKiBCZWZvcmVDZGF0YTMgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUNkYXRhMyh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyOSAvKiBBZnRlckNkYXRhMSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDZGF0YTEoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzAgLyogQWZ0ZXJDZGF0YTIgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ2RhdGEyKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI1IC8qIEJlZm9yZUNkYXRhNCAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlQ2RhdGE0KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI2IC8qIEJlZm9yZUNkYXRhNSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlQ2RhdGE1KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDI3IC8qIEJlZm9yZUNkYXRhNiAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGE2KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDU1IC8qIEluSGV4RW50aXR5ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkhleEVudGl0eShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1NCAvKiBJbk51bWVyaWNFbnRpdHkgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluTnVtZXJpY0VudGl0eShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1MiAvKiBCZWZvcmVOdW1lcmljRW50aXR5ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVOdW1lcmljRW50aXR5KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCJ1bmtub3duIF9zdGF0ZVwiKSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA8IHRoaXMuX2J1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5pc2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgaWYgKHRoaXMuX2VuZGVkKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCIuZW5kKCkgYWZ0ZXIgZG9uZSFcIikpO1xuICAgICAgICBpZiAoY2h1bmspXG4gICAgICAgICAgICB0aGlzLndyaXRlKGNodW5rKTtcbiAgICAgICAgdGhpcy5fZW5kZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fcnVubmluZylcbiAgICAgICAgICAgIHRoaXMuX2ZpbmlzaCgpO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2lmIHRoZXJlIGlzIHJlbWFpbmluZyBkYXRhLCBlbWl0IGl0IGluIGEgcmVhc29uYWJsZSB3YXlcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYnMub25lbmQoKTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2hhbmRsZVRyYWlsaW5nRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCk7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjggLyogSW5DZGF0YSAqLyB8fFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPT09IDI5IC8qIEFmdGVyQ2RhdGExICovIHx8XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gMzAgLyogQWZ0ZXJDZGF0YTIgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNkYXRhKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxOSAvKiBJbkNvbW1lbnQgKi8gfHxcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSAyMCAvKiBBZnRlckNvbW1lbnQxICovIHx8XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gMjEgLyogQWZ0ZXJDb21tZW50MiAqLykge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY29tbWVudChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTMgLyogSW5OYW1lZEVudGl0eSAqLyAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VMZWdhY3lFbnRpdHkoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1NCAvKiBJbk51bWVyaWNFbnRpdHkgKi8gJiYgIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDU1IC8qIEluSGV4RW50aXR5ICovICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlICE9PSAzIC8qIEluVGFnTmFtZSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDExIC8qIEJlZm9yZUF0dHJpYnV0ZVZhbHVlICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gMTAgLyogQWZ0ZXJBdHRyaWJ1dGVOYW1lICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gOSAvKiBJbkF0dHJpYnV0ZU5hbWUgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSAxMyAvKiBJbkF0dHJpYnV0ZVZhbHVlU3EgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSAxMiAvKiBJbkF0dHJpYnV0ZVZhbHVlRHEgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSAxNCAvKiBJbkF0dHJpYnV0ZVZhbHVlTnEgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSA2IC8qIEluQ2xvc2luZ1RhZ05hbWUgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9lbHNlLCBpZ25vcmUgcmVtYWluaW5nIGRhdGFcbiAgICAgICAgLy9UT0RPIGFkZCBhIHdheSB0byByZW1vdmUgY3VycmVudCB0YWdcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuZ2V0QWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlck9mZnNldCArIHRoaXMuX2luZGV4O1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9lbWl0VG9rZW4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9jYnNbbmFtZV0odGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9lbWl0UGFydGlhbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fYmFzZVN0YXRlICE9PSAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmRhdGEodmFsdWUpOyAvL1RPRE8gaW1wbGVtZW50IHRoZSBuZXcgZXZlbnRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVG9rZW5pemVyO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRva2VuaXplcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQYXJzZXJfMSA9IHJlcXVpcmUoXCIuL1BhcnNlclwiKTtcbmV4cG9ydHMuUGFyc2VyID0gUGFyc2VyXzEuUGFyc2VyO1xudmFyIGRvbWhhbmRsZXJfMSA9IHJlcXVpcmUoXCJkb21oYW5kbGVyXCIpO1xuZXhwb3J0cy5Eb21IYW5kbGVyID0gZG9taGFuZGxlcl8xLkRvbUhhbmRsZXI7XG5leHBvcnRzLkRlZmF1bHRIYW5kbGVyID0gZG9taGFuZGxlcl8xLkRvbUhhbmRsZXI7XG4vLyBIZWxwZXIgbWV0aG9kc1xuLyoqXG4gKiBQYXJzZXMgZGF0YSwgcmV0dXJucyB0aGUgcmVzdWx0aW5nIERPTS5cbiAqXG4gKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXJzZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcGFyc2VyIGFuZCBET00gYnVpbGRlci5cbiAqL1xuZnVuY3Rpb24gcGFyc2VET00oZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciBoYW5kbGVyID0gbmV3IGRvbWhhbmRsZXJfMS5Eb21IYW5kbGVyKHZvaWQgMCwgb3B0aW9ucyk7XG4gICAgbmV3IFBhcnNlcl8xLlBhcnNlcihoYW5kbGVyLCBvcHRpb25zKS5lbmQoZGF0YSk7XG4gICAgcmV0dXJuIGhhbmRsZXIuZG9tO1xufVxuZXhwb3J0cy5wYXJzZURPTSA9IHBhcnNlRE9NO1xuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIGluc3RhbmNlLCB3aXRoIGFuIGF0dGFjaGVkIERPTSBoYW5kbGVyLlxuICpcbiAqIEBwYXJhbSBjYiBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgb25jZSBwYXJzaW5nIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBwYXJzZXIgYW5kIERPTSBidWlsZGVyLlxuICogQHBhcmFtIGVsZW1lbnRDYiBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgYSB0YWcgaGFzIGJlZW4gY29tcGxldGVkIGluc2lkZSBvZiB0aGUgRE9NLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEb21TdHJlYW0oY2IsIG9wdGlvbnMsIGVsZW1lbnRDYikge1xuICAgIHZhciBoYW5kbGVyID0gbmV3IGRvbWhhbmRsZXJfMS5Eb21IYW5kbGVyKGNiLCBvcHRpb25zLCBlbGVtZW50Q2IpO1xuICAgIHJldHVybiBuZXcgUGFyc2VyXzEuUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jcmVhdGVEb21TdHJlYW0gPSBjcmVhdGVEb21TdHJlYW07XG52YXIgVG9rZW5pemVyXzEgPSByZXF1aXJlKFwiLi9Ub2tlbml6ZXJcIik7XG5leHBvcnRzLlRva2VuaXplciA9IFRva2VuaXplcl8xLmRlZmF1bHQ7XG52YXIgRWxlbWVudFR5cGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpKTtcbmV4cG9ydHMuRWxlbWVudFR5cGUgPSBFbGVtZW50VHlwZTtcbi8qKlxuICogTGlzdCBvZiBhbGwgZXZlbnRzIHRoYXQgdGhlIHBhcnNlciBlbWl0cy5cbiAqXG4gKiBGb3JtYXQ6IGV2ZW50bmFtZTogbnVtYmVyIG9mIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0cy5FVkVOVFMgPSB7XG4gICAgYXR0cmlidXRlOiAyLFxuICAgIGNkYXRhc3RhcnQ6IDAsXG4gICAgY2RhdGFlbmQ6IDAsXG4gICAgdGV4dDogMSxcbiAgICBwcm9jZXNzaW5naW5zdHJ1Y3Rpb246IDIsXG4gICAgY29tbWVudDogMSxcbiAgICBjb21tZW50ZW5kOiAwLFxuICAgIGNsb3NldGFnOiAxLFxuICAgIG9wZW50YWc6IDIsXG4gICAgb3BlbnRhZ25hbWU6IDEsXG4gICAgZXJyb3I6IDEsXG4gICAgZW5kOiAwXG59O1xuLypcbiAgICBBbGwgb2YgdGhlIGZvbGxvd2luZyBleHBvcnRzIGV4aXN0IGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eS5cbiAgICBUaGV5IHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkIGV2ZW50dWFsbHkuXG4qL1xuX19leHBvcnQocmVxdWlyZShcIi4vRmVlZEhhbmRsZXJcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vV3JpdGFibGVTdHJlYW1cIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vQ29sbGVjdGluZ0hhbmRsZXJcIikpO1xudmFyIERvbVV0aWxzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJkb211dGlsc1wiKSk7XG5leHBvcnRzLkRvbVV0aWxzID0gRG9tVXRpbHM7XG52YXIgRmVlZEhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL0ZlZWRIYW5kbGVyXCIpO1xuZXhwb3J0cy5Sc3NIYW5kbGVyID0gRmVlZEhhbmRsZXJfMS5GZWVkSGFuZGxlcjtcbiIsImV4cG9ydCBjb25zdCBpbnNlcnQgPSAoY2hpbGQ6IE5vZGUsIHBhcmVudDogTm9kZSwgYW5jaG9yPzogTm9kZSkgPT4ge1xyXG4gICAgaWYgKGFuY2hvciAhPSBudWxsKSB7XHJcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIGFuY2hvcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWc6IHN0cmluZyk6IEVsZW1lbnQgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGV4dCA9ICh0ZXh0OiBzdHJpbmcpOiBUZXh0ID0+IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RvciA9ICAoc2VsZWN0b3I6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9ICh0ZXh0OiBzdHJpbmcpOiBDb21tZW50ID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcclxuXHJcbmV4cG9ydCBjb25zdCByZXBsYWNlID0gKHByZXY6Tm9kZSxuZXh0OiBOb2RlLCBwYXJlbnQ6IE5vZGUpID0+IHBhcmVudC5yZXBsYWNlQ2hpbGQobmV4dCxwcmV2KSIsImV4cG9ydCB7XHJcbiAgICBjcmVhdGVBcHBcclxuICB9IGZyb20gJy4vcmVuZGVyJyIsImltcG9ydCB7IFBhcnNlciwgRG9tSGFuZGxlciB9IGZyb20gJ2h0bWxwYXJzZXIyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8b2JqZWN0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IERvbUhhbmRsZXIoXHJcbiAgICAgIChlcnJvciwgZG9tKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoZG9tKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5vcm1hbGl6ZVdoaXRlc3BhY2U6IHRydWVcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihoYW5kbGVyKVxyXG4gICAgcGFyc2VyLndyaXRlKHRlbXBsYXRlKVxyXG4gICAgcGFyc2VyLmVuZCgpXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgY3JlYXRlVGV4dCwgaW5zZXJ0IH0gZnJvbSAnLi9kb20nXHJcbmltcG9ydCB7IENPTlRFWFQgfSBmcm9tICcuL3JlbmRlcidcclxuY29uc3QgZGVsaW1pdGVycyA9IFtge3tgLCBgfX1gXVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hDbGFzcyhlbDogRWxlbWVudCwgdmFsdWU6IHN0cmluZykge1xyXG4gIGVsLmNsYXNzTmFtZSA9IHZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQXR0cihlbDogRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICB9IGVsc2Uge1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaFN0eWxlKGVsOiBFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXR0ciA9IHZhbHVlLnNwbGl0KCc7JylcclxuICBmb3IgKGxldCBpIG9mIGF0dHIpIHtcclxuICAgIDsoPGFueT5lbCkuc3R5bGVbaS5zcGxpdCgnOicpWzBdXSA9IGkuc3BsaXQoJzonKVsxXVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hFdmVudChlbDogRWxlbWVudCwga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ6IENPTlRFWFQpIHtcclxuICA7KDxhbnk+ZWwpW2BvbiR7a2V5LnNsaWNlKDEpfWBdID0gKCkgPT4ge1xyXG4gICAgY29udGV4dC5tZXRob2RzW3ZhbHVlXS5jYWxsKGNvbnRleHQpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEludGVycG9sYXRpb25UZXh0KGluc2VydFRleHQ6IHN0cmluZywgZWw6IEVsZW1lbnQpIHtcclxuICBpZiAoaW5zZXJ0VGV4dCkge1xyXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZVRleHQoaW5zZXJ0VGV4dClcclxuICAgIGluc2VydCh0ZXh0LCBlbClcclxuICB9XHJcbiAgcmV0dXJuICcnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3BzKFxyXG4gIGVsOiBFbGVtZW50LFxyXG4gIGtleTogc3RyaW5nLFxyXG4gIHZhbHVlOiBhbnksXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBzd2l0Y2ggKHRydWUpIHtcclxuICAgIGNhc2Uga2V5ID09PSAnY2xhc3MnOlxyXG4gICAgICBwYXRjaENsYXNzKGVsLCB2YWx1ZSlcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2Uga2V5ID09PSAnc3R5bGUnOlxyXG4gICAgICBwYXRjaFN0eWxlKGVsLCB2YWx1ZSlcclxuICAgICAgYnJlYWtcclxuICAgIGNhc2UgL146Ly50ZXN0KGtleSk6XHJcbiAgICAgIHBhdGNoRXZlbnQoZWwsIGtleSwgdmFsdWUsIGNvbnRleHQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hJbnRlcnBvbGF0aW9uKFxyXG4gIHJlc3VsdDogc3RyaW5nLFxyXG4gIGNvbnRleHQ6IENPTlRFWFRcclxuKTpzdHJpbmcge1xyXG4gIGxldCByZXN1bHRUZXh0ID0gJydcclxuICBsZXQgcmF3UmVzdWx0ID0gcmVzdWx0XHJcbiAgd2hpbGUgKHJhd1Jlc3VsdC5sZW5ndGgpIHtcclxuICAgIGlmIChzdGFydHNXaXRoKHJhd1Jlc3VsdCwgZGVsaW1pdGVyc1swXSkpIHtcclxuICAgICAgY29uc3QgW29wZW4sIGNsb3NlXSA9IGRlbGltaXRlcnNcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleDogbnVtYmVyID0gb3Blbi5sZW5ndGhcclxuICAgICAgY29uc3QgY2xvc2VJbmRleDogbnVtYmVyID0gcmF3UmVzdWx0LmluZGV4T2YoY2xvc2UsIG9wZW4ubGVuZ3RoKVxyXG4gICAgICBpZiAoY2xvc2VJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBmbiA9IGByZXR1cm4gJHtyYXdSZXN1bHQuc2xpY2Uoc3RhcnRJbmRleCwgY2xvc2VJbmRleCl9YFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGdW5jdGlvbihmbilcclxuICAgICAgICByZXN1bHRUZXh0ICs9IHJlc3VsdC5jYWxsKGNvbnRleHQudmFsdWUpXHJcbiAgICAgICAgcmF3UmVzdWx0ID0gcmF3UmVzdWx0LnNsaWNlKGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGgpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFRleHQgKz0gcmF3UmVzdWx0WzBdXHJcbiAgICAgIHJhd1Jlc3VsdCA9IHJhd1Jlc3VsdC5zbGljZSgxKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0VGV4dFxyXG59XHJcbiIsImltcG9ydCB7IGVmZmVjdCB9IGZyb20gJy4uL3JlYWN0aXZpdHkvZWZmZWN0J1xyXG5pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJy4uL3JlYWN0aXZpdHkvcmVhY3RpdmUnXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXNlcidcclxuaW1wb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGluc2VydCxcclxuICBxdWVyeVNlbGVjdG9yLFxyXG4gIGNyZWF0ZUNvbW1lbnQsXHJcbiAgY3JlYXRlVGV4dCxcclxuICByZXBsYWNlXHJcbn0gZnJvbSAnLi9kb20nXHJcbmltcG9ydCB7IHBhdGNoUHJvcHMsIHBhdGNoSW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vcHJvcHMnXHJcblxyXG5jb25zdCBlbnVtIE5PREVUWVBFIHtcclxuICBBUFAgPSAnYXBwJyxcclxuICBUQUcgPSAndGFnJyxcclxuICBURVhUID0gJ3RleHQnLFxyXG4gIENPTVBPTkVOVCA9ICdjb21wb25lbnQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVBQT1BUSU9OIHtcclxuICBtaXhpbj86IEFycmF5PGFueT5cclxuICBzdG9yZT86IG9iamVjdFxyXG4gIG9uTGFudWNoPzogRnVuY3Rpb25cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENPTlRFWFQge1xyXG4gIHJlbmRlcjogb2JqZWN0XHJcbiAgdGVtcGxhdGU6IHN0cmluZ1xyXG4gIG1ldGhvZHM/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvblxyXG4gIH1cclxuICB2YWx1ZT86IGFueVxyXG4gIG9uTG9hZD86IEZ1bmN0aW9uXHJcbiAgb25TaG93PzogRnVuY3Rpb25cclxuICBvblVwZGF0ZT86IEZ1bmN0aW9uXHJcbiAgbW91bnRlZDogYm9vbGVhblxyXG4gIGNvbXBvbmVudHM/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBDT05URVhUXHJcbiAgfVxyXG4gIHN1YlRyZWU/OiBFTk9ERVtdXHJcbn1cclxuXHJcbmxldCBhcHBPcHRpb246IEFQUE9QVElPTiA9IHt9XHJcbmxldCBkZXZGcmFnbWVudElEID0gMFxyXG5leHBvcnQgaW50ZXJmYWNlIEVOT0RFIGV4dGVuZHMgTm9kZSB7XHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4gIGF0dHJpYnM/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBvYmplY3RcclxuICB9XHJcbiAgdHlwZTogTk9ERVRZUEVcclxuICBuYW1lPzogc3RyaW5nXHJcbiAgY2hpbGRyZW46IEVOT0RFW11cclxuICBkYXRhPzogc3RyaW5nXHJcbiAgZWw/OkVsZW1lbnRcclxuICB0ZXh0PzpUZXh0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoXHJcbiAgY29udGV4dDogQ09OVEVYVCxcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgb3B0aW9uOiBBUFBPUFRJT04gPSB7fVxyXG4pOiBDT05URVhUIHtcclxuICBpZiAob3B0aW9uIS5vbkxhbnVjaCkge1xyXG4gICAgb3B0aW9uIS5vbkxhbnVjaChvcHRpb24pXHJcbiAgfVxyXG4gIGFwcE9wdGlvbiA9IG9wdGlvblxyXG4gIHBhdGNoQXBwKClcclxuICBwYXRjaENvbXBvbmVudChjb250ZXh0LCBjb250YWluZXIpXHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2goXHJcbiAgbm9kZTogRU5PREUsXHJcbiAgY29udGFpbmVyOiBFbGVtZW50LFxyXG4gIHR5cGU6IE5PREVUWVBFLFxyXG4gIGNvbnRleHQ6IENPTlRFWFQsXHJcbiAgYW5jaG9yPzogTm9kZVxyXG4pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIC8vIGNhc2UgTk9ERVRZUEUuQ09NUE9ORU5UOlxyXG4gICAgLy8gICBub2RlLnR5cGUgPSBOT0RFVFlQRS5DT01QT05FTlRcclxuICAgIC8vICAgcGF0Y2hDb21wb25lbnQobm9kZSwgY29udGFpbmVyLCBjb250ZXh0KVxyXG4gICAgLy8gICBicmVha1xyXG4gICAgY2FzZSBOT0RFVFlQRS5UQUc6XHJcbiAgICAgIGlmIChjb250ZXh0LmNvbXBvbmVudHMgJiYgY29udGV4dC5jb21wb25lbnRzW25vZGUubmFtZV0pIHtcclxuICAgICAgICBwYXRjaENvbXBvbmVudChjb250ZXh0LmNvbXBvbmVudHNbbm9kZS5uYW1lXSwgY29udGFpbmVyLCBhbmNob3IpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0Y2hFbGVtZW50KG5vZGUsIGNvbnRhaW5lciwgY29udGV4dCwgYW5jaG9yKVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIE5PREVUWVBFLlRFWFQ6XHJcbiAgICAgIHBhdGNoVGV4dChub2RlLCBjb250YWluZXIsIGNvbnRleHQpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUobjE6IEVOT0RFW10sIG4yOiBFTk9ERVtdLCBjb250ZXh0OiBDT05URVhULGNvbnRhaW5lcjpFbGVtZW50KSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ+i/m+ihjGRpZmbmk43kvZwnKVxyXG4gIC8vIGNvbnNvbGUubG9nKG4xLCBuMilcclxuICBuMi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gTk9ERVRZUEUuVEFHKSB7XHJcbiAgICAgIC8vIHRoaXMgaXMgY29tcG9uZW50XHJcbiAgICAgIGlmIChjb250ZXh0LmNvbXBvbmVudHMgJiYgY29udGV4dC5jb21wb25lbnRzW2l0ZW0ubmFtZV0pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5Yik5pat5piv5ZCm5piv55u45ZCM57uE5Lu25bm25LiUcHJvcOebuOWQjCzlvoXlrozmiJAnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNhbWUgdHlwZVxyXG4gICAgICAgIGlmIChuMVtpbmRleF0gJiYgbjFbaW5kZXhdLnR5cGUgPT09IE5PREVUWVBFLlRBRykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ+e7p+e7reWIpOaWreS7luS7rOeahOWEv+WtkCcpXHJcbiAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ebtOaOpeWIoOmZpO+8jOW+heWujOaIkCcpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGUoaXRlbS5jaGlsZHJlbiwgbjFbaW5kZXhdLmNoaWxkcmVuLCBjb250ZXh0LGNvbnRhaW5lcilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ+ebtOaOpeabv+aNouiKgueCuSzlvoXlrozmiJAnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpdGVtLnR5cGUgPT09IE5PREVUWVBFLlRFWFQpIHtcclxuICAgICAgLy8gc2FtZSB0eXBlXHJcbiAgICAgIGlmIChuMVtpbmRleF0gJiYgbjFbaW5kZXhdLnR5cGUgPT09IE5PREVUWVBFLlRFWFQpIHtcclxuICAgICAgICB1cGRhdGVUZXh0KG4xW2luZGV4XSwgaXRlbSwgY29udGV4dClcclxuICAgICAgICAvLyBpZiAoaXRlbS5kYXRhICE9PSBuMVtpbmRleF0uZGF0YSkge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ+aIkeWwseaYr+elnuaIkeWwseaYr+elnuaIkeWwseaYr+elnicpXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygzMjEzMjEpXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygn5L+u5pS56IqC54K55Lit55qE5YaF5a65JylcclxuICAgICAgICAvLyB9ZWxzZSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygn5paH5a2X5YaF5a655bGF54S255u4562JJyxpdGVtLmRhdGEpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnm7TmjqXmm7/mjaLoioLngrks5b6F5a6M5oiQJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuZnVuY3Rpb24gcGF0Y2hBcHAoKSB7XHJcbiAgYXBwT3B0aW9uLm1peGluID0gW11cclxuICBhcHBPcHRpb24uc3RvcmUgPSB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaENvbXBvbmVudChjb250ZXh0OiBDT05URVhULCBjb250YWluZXI6IEVsZW1lbnQsIGFuY2hvcj86IE5vZGUpIHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IHF1ZXJ5U2VsZWN0b3IoY29udGV4dC50ZW1wbGF0ZSlcclxuICBjb25zdCBjb21wb25lbnRBbmNob3IgPSBwYXRjaEZyYWdtZW50KGNvbnRhaW5lciwgYW5jaG9yKVxyXG4gIHBhcnNlKHRlbXBsYXRlLmlubmVySFRNTC50cmltKCkpLnRoZW4oKHJlczogRU5PREVbXSkgPT4ge1xyXG4gICAgZWZmZWN0KCgpID0+IHtcclxuICAgICAgLy8gY29udGV4dC5wcmV2Q29udGV4dCA9IGNvbnRleHQuXHJcbiAgICAgIGNvbnN0IG1vdW50ZWQgPSBjb250ZXh0Lm1vdW50ZWRcclxuICAgICAgaWYgKCFtb3VudGVkKSB7XHJcbiAgICAgICAgY29udGV4dC5tb3VudGVkID0gdHJ1ZVxyXG4gICAgICAgIGlmIChjb250ZXh0IS5vbkxvYWQpIHtcclxuICAgICAgICAgIGNvbnRleHQub25Mb2FkLmNhbGwoY29udGV4dClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiByZXMpIHtcclxuICAgICAgICAgIHBhdGNoKGksIGNvbnRhaW5lciwgaS50eXBlLCBjb250ZXh0LCBjb21wb25lbnRBbmNob3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb250ZXh0IS5vblNob3cpIHtcclxuICAgICAgICAgIGNvbnRleHQub25TaG93LmNhbGwoY29udGV4dClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZGlmZlxyXG4gICAgICAgIHVwZGF0ZShjb250ZXh0LnN1YlRyZWUsIHJlcywgY29udGV4dCxjb250YWluZXIpXHJcbiAgICAgICAgaWYgKGNvbnRleHQhLm9uVXBkYXRlKSB7XHJcbiAgICAgICAgICBjb250ZXh0Lm9uVXBkYXRlLmNhbGwoY29udGV4dClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29udGV4dC5zdWJUcmVlID0gcmVzXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoRnJhZ21lbnQoY29udGFpbmVyOiBFbGVtZW50LCBhbmNob3I/OiBOb2RlKTogQ29tbWVudCB7XHJcbiAgY29uc3QgZnJhZ21lbnRTdGFydEFuY2hvciA9IGNyZWF0ZUNvbW1lbnQoYGZyYWdtZW50LSR7ZGV2RnJhZ21lbnRJRH0tc3RhcnRgKSFcclxuICBjb25zdCBmcmFnbWVudEVuZEFuY2hvciA9IGNyZWF0ZUNvbW1lbnQoYGZyYWdtZW50LSR7ZGV2RnJhZ21lbnRJRH0tZW5kYCkhXHJcbiAgZGV2RnJhZ21lbnRJRCsrXHJcbiAgaWYgKGFuY2hvciAhPT0gbnVsbCkge1xyXG4gICAgaW5zZXJ0KGZyYWdtZW50U3RhcnRBbmNob3IsIGNvbnRhaW5lciwgYW5jaG9yKVxyXG4gICAgaW5zZXJ0KGZyYWdtZW50RW5kQW5jaG9yLCBjb250YWluZXIsIGFuY2hvcilcclxuICB9IGVsc2Uge1xyXG4gICAgaW5zZXJ0KGZyYWdtZW50U3RhcnRBbmNob3IsIGNvbnRhaW5lcilcclxuICAgIGluc2VydChmcmFnbWVudEVuZEFuY2hvciwgY29udGFpbmVyKVxyXG4gIH1cclxuICByZXR1cm4gZnJhZ21lbnRFbmRBbmNob3JcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hFbGVtZW50KFxyXG4gIG5vZGU6IEVOT0RFLFxyXG4gIGNvbnRhaW5lcjogRWxlbWVudCxcclxuICBjb250ZXh0OiBDT05URVhULFxyXG4gIGFuY2hvcj86IE5vZGVcclxuKSB7XHJcbiAgY29uc3QgZWwgPSBub2RlLmVsID0gY3JlYXRlRWxlbWVudChub2RlLm5hbWUpXHJcbiAgZm9yIChsZXQgaSBpbiBub2RlLmF0dHJpYnMpIHtcclxuICAgIHBhdGNoUHJvcHMoZWwsIGksIG5vZGUuYXR0cmlic1tpXSwgY29udGV4dClcclxuICB9XHJcbiAgaWYgKGFuY2hvciAhPT0gbnVsbCkge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcilcclxuICB9IGVsc2Uge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIpXHJcbiAgfVxyXG4gIHBhdGNoQ2hpbGRyZW4obm9kZS5jaGlsZHJlbiwgZWwsIGNvbnRleHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4oXHJcbiAgY2hpbGRyZW46IEFycmF5PEVOT0RFPixcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBmb3IgKGxldCBpIG9mIGNoaWxkcmVuKSB7XHJcbiAgICBwYXRjaChpLCBjb250YWluZXIsIGkudHlwZSwgY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoVGV4dChub2RlOiBFTk9ERSwgY29udGFpbmVyOiBFbGVtZW50LCBjb250ZXh0OiBDT05URVhUKSB7XHJcbiAgY29uc3QgdGV4dCA9IHBhdGNoSW50ZXJwb2xhdGlvbihub2RlLmRhdGEsIGNvbnRleHQpXHJcbiAgaWYgKHRleHQpIHtcclxuICAgIG5vZGUuZWwgPSBjb250YWluZXJcclxuICAgIGNvbnN0IGluc2VydFRleHQgID0gbm9kZS50ZXh0ID0gY3JlYXRlVGV4dCh0ZXh0KVxyXG4gICAgaW5zZXJ0KGluc2VydFRleHQsIGNvbnRhaW5lcilcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRleHQobjE6IEVOT0RFLCBuMjogRU5PREUsIGNvbnRleHQ6IENPTlRFWFQpIHtcclxuICAvLyBjb25zdCB0ZXh0MSA9IHBhdGNoSW50ZXJwb2xhdGlvbihuMS5kYXRhLCBjb250ZXh0KVxyXG4gIGNvbnN0IHRleHQyID0gcGF0Y2hJbnRlcnBvbGF0aW9uKG4yLmRhdGEsIGNvbnRleHQpXHJcbiAgXHJcbiAgY29uc3QgaW5zZXJ0VGV4dCA9IGNyZWF0ZVRleHQodGV4dDIpXHJcbiAgbjIuZWwgPSBuMSEuZWxcclxuICByZXBsYWNlKG4xLnRleHQsaW5zZXJ0VGV4dCxuMS5lbClcclxuICBuMi50ZXh0ID0gaW5zZXJ0VGV4dFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBzdGFydHNXaXRoID0gKHNvdXJjZTogc3RyaW5nLCBzZWFyY2hTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIHJldHVybiBzb3VyY2Uuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcpXHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBpbGVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL3JlYWN0aXZpdHknIiwiaW1wb3J0IHsgaXNTeW1ib2wsaXNPYmplY3QsaGFzT3duLGhhc0NoYW5nZWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyB0cmFjayx0cmlnZ2VyLE9wZXJhdGlvblR5cGVzIH0gZnJvbSAnLi9lZmZlY3QnXHJcbmltcG9ydCB7IHJlYWN0aXZlLHRvUmF3IH0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuY29uc3QgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KFxyXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbClcclxuICAgIC5tYXAoa2V5ID0+IChTeW1ib2wgYXMgYW55KVtrZXldKVxyXG4gICAgLmZpbHRlcihpc1N5bWJvbClcclxuKVxyXG5cclxuZnVuY3Rpb24gZ2V0KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCwgcmVjZWl2ZXI6IG9iamVjdCkge1xyXG4gIGxldCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpXHJcbiAgLy8g5YaF572u55qEc3ltYm9s5LiN6L+b6KGMdHJhY2tcclxuICBpZiAoaXNTeW1ib2woa2V5KSAmJiBidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkdFVCwga2V5KVxyXG4gIHJldHVybiBpc09iamVjdChyZXMpID8gcmVhY3RpdmUocmVzKSA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQoXHJcbiAgdGFyZ2V0OiBvYmplY3QsXHJcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgdmFsdWU6IHVua25vd24sXHJcbiAgcmVjZWl2ZXI6IG9iamVjdFxyXG4pOiBib29sZWFuIHtcclxuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKVxyXG4gIGNvbnN0IG9sZFZhbHVlID0gKHRhcmdldCBhcyBhbnkpW2tleV1cclxuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcilcclxuICBpZiAodGFyZ2V0ID09PSB0b1JhdyhyZWNlaXZlcikpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIGNvbnN0IGV4dHJhSW5mbyA9IHsgb2xkVmFsdWUsIG5ld1ZhbHVlOiB2YWx1ZSB9XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLlNFVCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5KVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5TRVQsIGtleSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSlcclxuICBjb25zdCBvbGRWYWx1ZSA9ICh0YXJnZXQgYXMgYW55KVtrZXldXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSlcclxuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xyXG4gICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkRFTEVURSwga2V5LCB7IG9sZFZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuREVMRVRFLCBrZXkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzKHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuaGFzKHRhcmdldCwga2V5KVxyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuSEFTLCBrZXkpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldDogb2JqZWN0KTogKHN0cmluZyB8IG51bWJlciB8IHN5bWJvbClbXSB7XHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5JVEVSQVRFKVxyXG4gIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbkhhbmRsZXJzOiBQcm94eUhhbmRsZXI8b2JqZWN0PiA9IHtcclxuICBnZXQsXHJcbiAgc2V0LFxyXG4gIGRlbGV0ZVByb3BlcnR5LFxyXG4gIGhhcyxcclxuICBvd25LZXlzXHJcbn1cclxuIiwiaW1wb3J0IHsgdGFyZ2V0TWFwIH0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuaW1wb3J0IHsgaXNBcnJheSxleHRlbmQsRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscydcclxuZXhwb3J0IHR5cGUgRGVwID0gU2V0PFJlYWN0aXZlRWZmZWN0PlxyXG5leHBvcnQgaW50ZXJmYWNlIFJlYWN0aXZlRWZmZWN0PFQgPSBhbnk+IHtcclxuICAoKTogVFxyXG4gIF9pc0VmZmVjdDogdHJ1ZVxyXG4gIGFjdGl2ZTogYm9vbGVhblxyXG4gIHJhdzogKCkgPT4gVFxyXG4gIGRlcHM6IEFycmF5PERlcD5cclxuICBvcHRpb25zOiBSZWFjdGl2ZUVmZmVjdE9wdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWFjdGl2ZUVmZmVjdE9wdGlvbnMge1xyXG4gIGxhenk/OiBib29sZWFuXHJcbiAgY29tcHV0ZWQ/OiBib29sZWFuXHJcbiAgc2NoZWR1bGVyPzogKHJ1bjogRnVuY3Rpb24pID0+IHZvaWRcclxuICBvblRyYWNrPzogKGV2ZW50OiBEZWJ1Z2dlckV2ZW50KSA9PiB2b2lkXHJcbiAgb25UcmlnZ2VyPzogKGV2ZW50OiBEZWJ1Z2dlckV2ZW50KSA9PiB2b2lkXHJcbiAgb25TdG9wPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWJ1Z2dlckV2ZW50ID0ge1xyXG4gIGVmZmVjdDogUmVhY3RpdmVFZmZlY3RcclxuICB0YXJnZXQ6IG9iamVjdFxyXG4gIHR5cGU6IE9wZXJhdGlvblR5cGVzXHJcbiAga2V5OiBhbnlcclxufSAmIERlYnVnZ2VyRXZlbnRFeHRyYUluZm9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIE9wZXJhdGlvblR5cGVzIHtcclxuICBTRVQgPSAnc2V0JyxcclxuICBBREQgPSAnYWRkJyxcclxuICBERUxFVEUgPSAnZGVsZXRlJyxcclxuICBDTEVBUiA9ICdjbGVhcicsXHJcbiAgR0VUID0gJ2dldCcsXHJcbiAgSEFTID0gJ2hhcycsXHJcbiAgSVRFUkFURSA9ICdpdGVyYXRlJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlYnVnZ2VyRXZlbnRFeHRyYUluZm8ge1xyXG4gIG5ld1ZhbHVlPzogYW55XHJcbiAgb2xkVmFsdWU/OiBhbnlcclxuICBvbGRUYXJnZXQ/OiBNYXA8YW55LCBhbnk+IHwgU2V0PGFueT5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVmZmVjdFN0YWNrOiBSZWFjdGl2ZUVmZmVjdFtdID0gW11cclxuXHJcbmV4cG9ydCBjb25zdCBJVEVSQVRFX0tFWSA9IFN5bWJvbCgnaXRlcmF0ZScpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhY2sodGFyZ2V0OiBvYmplY3QsIHR5cGU6IE9wZXJhdGlvblR5cGVzLCBrZXk/OiB1bmtub3duKSB7XHJcbiAgaWYgKGVmZmVjdFN0YWNrLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IGVmZmVjdCA9IGVmZmVjdFN0YWNrW2VmZmVjdFN0YWNrLmxlbmd0aCAtIDFdXHJcbiAgaWYgKHR5cGUgPT09IE9wZXJhdGlvblR5cGVzLklURVJBVEUpIHtcclxuICAgIGtleSA9IElURVJBVEVfS0VZXHJcbiAgfVxyXG4gIGxldCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpXHJcbiAgaWYgKGRlcHNNYXAgPT09IHZvaWQgMCkge1xyXG4gICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIChkZXBzTWFwID0gbmV3IE1hcCgpKSlcclxuICB9XHJcbiAgbGV0IGRlcCA9IGRlcHNNYXAuZ2V0KGtleSEpXHJcbiAgaWYgKGRlcCA9PT0gdm9pZCAwKSB7XHJcbiAgICBkZXBzTWFwLnNldChrZXkhLCAoZGVwID0gbmV3IFNldCgpKSlcclxuICB9XHJcbiAgaWYgKCFkZXAuaGFzKGVmZmVjdCkpIHtcclxuICAgIGRlcC5hZGQoZWZmZWN0KVxyXG4gICAgZWZmZWN0LmRlcHMucHVzaChkZXApXHJcbiAgICBpZiAoX19ERVZfXyAmJiBlZmZlY3Qub3B0aW9ucy5vblRyYWNrKSB7XHJcbiAgICAgIGVmZmVjdC5vcHRpb25zLm9uVHJhY2soe1xyXG4gICAgICAgIGVmZmVjdCxcclxuICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBrZXlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyKFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIHR5cGU6IE9wZXJhdGlvblR5cGVzLFxyXG4gIGtleT86IHVua25vd24sXHJcbiAgZXh0cmFJbmZvPzogRGVidWdnZXJFdmVudEV4dHJhSW5mb1xyXG4pIHtcclxuICBjb25zdCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpXHJcbiAgaWYgKGRlcHNNYXAgPT09IHZvaWQgMCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IGVmZmVjdHMgPSBuZXcgU2V0PFJlYWN0aXZlRWZmZWN0PigpXHJcbiAgY29uc3QgY29tcHV0ZWRSdW5uZXJzID0gbmV3IFNldDxSZWFjdGl2ZUVmZmVjdD4oKVxyXG4gIGlmICh0eXBlID09PSBPcGVyYXRpb25UeXBlcy5DTEVBUikge1xyXG4gICAgZGVwc01hcC5mb3JFYWNoKGRlcCA9PiB7XHJcbiAgICAgIGFkZFJ1bm5lcnMoZWZmZWN0cywgY29tcHV0ZWRSdW5uZXJzLCBkZXApXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcclxuICAgICAgYWRkUnVubmVycyhlZmZlY3RzLCBjb21wdXRlZFJ1bm5lcnMsIGRlcHNNYXAuZ2V0KGtleSkpXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gT3BlcmF0aW9uVHlwZXMuQUREIHx8IHR5cGUgPT09IE9wZXJhdGlvblR5cGVzLkRFTEVURSkge1xyXG4gICAgICBjb25zdCBpdGVyYXRpb25LZXkgPSBpc0FycmF5KHRhcmdldCkgPyAnbGVuZ3RoJyA6IElURVJBVEVfS0VZXHJcbiAgICAgIGFkZFJ1bm5lcnMoZWZmZWN0cywgY29tcHV0ZWRSdW5uZXJzLCBkZXBzTWFwLmdldChpdGVyYXRpb25LZXkpKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBydW4gPSAoZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCkgPT4ge1xyXG4gICAgc2NoZWR1bGVSdW4oZWZmZWN0LCB0YXJnZXQsIHR5cGUsIGtleSwgZXh0cmFJbmZvKVxyXG4gIH1cclxuICBjb21wdXRlZFJ1bm5lcnMuZm9yRWFjaChydW4pXHJcbiAgZWZmZWN0cy5mb3JFYWNoKHJ1bilcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUnVubmVycyhcclxuICBlZmZlY3RzOiBTZXQ8UmVhY3RpdmVFZmZlY3Q+LFxyXG4gIGNvbXB1dGVkUnVubmVyczogU2V0PFJlYWN0aXZlRWZmZWN0PixcclxuICBlZmZlY3RzVG9BZGQ6IFNldDxSZWFjdGl2ZUVmZmVjdD4gfCB1bmRlZmluZWRcclxuKSB7XHJcbiAgaWYgKGVmZmVjdHNUb0FkZCAhPT0gdm9pZCAwKSB7XHJcbiAgICBlZmZlY3RzVG9BZGQuZm9yRWFjaChlZmZlY3QgPT4ge1xyXG4gICAgICBpZiAoZWZmZWN0Lm9wdGlvbnMuY29tcHV0ZWQpIHtcclxuICAgICAgICBjb21wdXRlZFJ1bm5lcnMuYWRkKGVmZmVjdClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZmZlY3RzLmFkZChlZmZlY3QpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzY2hlZHVsZVJ1bihcclxuICBlZmZlY3Q6IFJlYWN0aXZlRWZmZWN0LFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIHR5cGU6IE9wZXJhdGlvblR5cGVzLFxyXG4gIGtleTogdW5rbm93bixcclxuICBleHRyYUluZm8/OiBEZWJ1Z2dlckV2ZW50RXh0cmFJbmZvXHJcbikge1xyXG4gIGlmIChfX0RFVl9fICYmIGVmZmVjdC5vcHRpb25zLm9uVHJpZ2dlcikge1xyXG4gICAgY29uc3QgZXZlbnQ6IERlYnVnZ2VyRXZlbnQgPSB7XHJcbiAgICAgIGVmZmVjdCxcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBrZXksXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICAgIGVmZmVjdC5vcHRpb25zLm9uVHJpZ2dlcihleHRyYUluZm8gPyBleHRlbmQoZXZlbnQsIGV4dHJhSW5mbykgOiBldmVudClcclxuICB9XHJcbiAgaWYgKGVmZmVjdC5vcHRpb25zLnNjaGVkdWxlciAhPT0gdm9pZCAwKSB7XHJcbiAgICBlZmZlY3Qub3B0aW9ucy5zY2hlZHVsZXIoZWZmZWN0KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlZmZlY3QoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVFZmZlY3Q8VCA9IGFueT4oXHJcbiAgZm46ICgpID0+IFQsXHJcbiAgb3B0aW9uczogUmVhY3RpdmVFZmZlY3RPcHRpb25zXHJcbik6IFJlYWN0aXZlRWZmZWN0PFQ+IHtcclxuICBjb25zdCBlZmZlY3QgPSBmdW5jdGlvbiByZWFjdGl2ZUVmZmVjdCguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcclxuICAgIHJldHVybiBydW4oZWZmZWN0LCBmbiwgYXJncylcclxuICB9IGFzIFJlYWN0aXZlRWZmZWN0XHJcbiAgZWZmZWN0Ll9pc0VmZmVjdCA9IHRydWVcclxuICBlZmZlY3QuYWN0aXZlID0gdHJ1ZVxyXG4gIGVmZmVjdC5yYXcgPSBmblxyXG4gIGVmZmVjdC5kZXBzID0gW11cclxuICBlZmZlY3Qub3B0aW9ucyA9IG9wdGlvbnNcclxuICByZXR1cm4gZWZmZWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bihlZmZlY3Q6IFJlYWN0aXZlRWZmZWN0LCBmbjogRnVuY3Rpb24sIGFyZ3M6IHVua25vd25bXSk6IHVua25vd24ge1xyXG4gIGlmICghZWZmZWN0LmFjdGl2ZSkge1xyXG4gICAgcmV0dXJuIGZuKC4uLmFyZ3MpXHJcbiAgfVxyXG4gIGlmICghZWZmZWN0U3RhY2suaW5jbHVkZXMoZWZmZWN0KSkge1xyXG4gICAgY2xlYW51cChlZmZlY3QpXHJcbiAgICB0cnkge1xyXG4gICAgICBlZmZlY3RTdGFjay5wdXNoKGVmZmVjdClcclxuICAgICAgcmV0dXJuIGZuKC4uLmFyZ3MpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBlZmZlY3RTdGFjay5wb3AoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW51cChlZmZlY3Q6IFJlYWN0aXZlRWZmZWN0KSB7XHJcbiAgY29uc3QgeyBkZXBzIH0gPSBlZmZlY3RcclxuICBpZiAoZGVwcy5sZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkZXBzW2ldLmRlbGV0ZShlZmZlY3QpXHJcbiAgICB9XHJcbiAgICBkZXBzLmxlbmd0aCA9IDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZmZlY3Q8VCA9IGFueT4oXHJcbiAgZm46ICgpID0+IFQsXHJcbiAgb3B0aW9uczogUmVhY3RpdmVFZmZlY3RPcHRpb25zID0gRU1QVFlfT0JKXHJcbik6IFJlYWN0aXZlRWZmZWN0PFQ+IHtcclxuICBpZiAoaXNFZmZlY3QoZm4pKSB7XHJcbiAgICBmbiA9IGZuLnJhd1xyXG4gIH1cclxuICBjb25zdCBlZmZlY3QgPSBjcmVhdGVSZWFjdGl2ZUVmZmVjdChmbiwgb3B0aW9ucylcclxuICBpZiAoIW9wdGlvbnMubGF6eSkge1xyXG4gICAgZWZmZWN0KClcclxuICB9XHJcbiAgcmV0dXJuIGVmZmVjdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFZmZlY3QoZm46IGFueSk6IGZuIGlzIFJlYWN0aXZlRWZmZWN0IHtcclxuICByZXR1cm4gZm4gIT0gbnVsbCAmJiBmbi5faXNFZmZlY3QgPT09IHRydWVcclxufSIsImV4cG9ydCB7XHJcbiAgcmVhY3RpdmVcclxufSBmcm9tICcuL3JlYWN0aXZlJ1xyXG5cclxuZXhwb3J0IHtcclxuICBlZmZlY3RcclxufSBmcm9tICcuL2VmZmVjdCciLCJpbXBvcnQgeyBpc1N5bWJvbCxpc09iamVjdCxoYXNPd24saGFzQ2hhbmdlZCB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IHRyYWNrLHRyaWdnZXIsT3BlcmF0aW9uVHlwZXMgfSBmcm9tICcuL2VmZmVjdCdcclxuaW1wb3J0IHsgcmVhY3RpdmUsdG9SYXcgfSBmcm9tICcuL3JlYWN0aXZlJ1xyXG5jb25zdCBidWlsdEluU3ltYm9scyA9IG5ldyBTZXQoXHJcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoU3ltYm9sKVxyXG4gICAgLm1hcChrZXkgPT4gKFN5bWJvbCBhcyBhbnkpW2tleV0pXHJcbiAgICAuZmlsdGVyKGlzU3ltYm9sKVxyXG4pXHJcblxyXG5mdW5jdGlvbiBnZXQodGFyZ2V0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgc3ltYm9sLCByZWNlaXZlcjogb2JqZWN0KSB7XHJcbiAgbGV0IHJlcyA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCByZWNlaXZlcilcclxuICAvLyDlhoXnva7nmoRzeW1ib2zkuI3ov5vooYx0cmFja1xyXG4gIGlmIChpc1N5bWJvbChrZXkpICYmIGJ1aWx0SW5TeW1ib2xzLmhhcyhrZXkpKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuR0VULCBrZXkpXHJcbiAgcmV0dXJuIGlzT2JqZWN0KHJlcykgPyByZWFjdGl2ZShyZXMpIDogcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldChcclxuICB0YXJnZXQ6IG9iamVjdCxcclxuICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcclxuICB2YWx1ZTogdW5rbm93bixcclxuICByZWNlaXZlcjogb2JqZWN0XHJcbik6IGJvb2xlYW4ge1xyXG4gIHZhbHVlID0gdG9SYXcodmFsdWUpXHJcbiAgY29uc3Qgb2xkVmFsdWUgPSAodGFyZ2V0IGFzIGFueSlba2V5XVxyXG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSlcclxuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LnNldCh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKVxyXG4gIGlmICh0YXJnZXQgPT09IHRvUmF3KHJlY2VpdmVyKSkge1xyXG4gICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgY29uc3QgZXh0cmFJbmZvID0geyBvbGRWYWx1ZSwgbmV3VmFsdWU6IHZhbHVlIH1cclxuICAgICAgaWYgKCFoYWRLZXkpIHtcclxuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuQURELCBrZXksIGV4dHJhSW5mbylcclxuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcclxuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuU0VULCBrZXksIGV4dHJhSW5mbylcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFoYWRLZXkpIHtcclxuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuQURELCBrZXkpXHJcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLlNFVCwga2V5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgc3ltYm9sKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwga2V5KVxyXG4gIGNvbnN0IG9sZFZhbHVlID0gKHRhcmdldCBhcyBhbnkpW2tleV1cclxuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KVxyXG4gIGlmIChyZXN1bHQgJiYgaGFkS2V5KSB7XHJcbiAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuREVMRVRFLCBrZXksIHsgb2xkVmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5ERUxFVEUsIGtleSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBoYXModGFyZ2V0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgc3ltYm9sKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5oYXModGFyZ2V0LCBrZXkpXHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5IQVMsIGtleSlcclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG93bktleXModGFyZ2V0OiBvYmplY3QpOiAoc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKVtdIHtcclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLklURVJBVEUpXHJcbiAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub3JtYWxIYW5kbGVyczogUHJveHlIYW5kbGVyPG9iamVjdD4gPSB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICBkZWxldGVQcm9wZXJ0eSxcclxuICBoYXMsXHJcbiAgb3duS2V5c1xyXG59XHJcbiIsImltcG9ydCB7IG5vcm1hbEhhbmRsZXJzIH0gZnJvbSAnLi9ub3JtYWxIYW5kbGVycydcclxuaW1wb3J0IHsgY29sbGVjdGlvbkhhbmRsZXJzIH0gZnJvbSAnLi9jb2xsZWN0aW9uSGFuZGxlcnMnXHJcbmltcG9ydCB7IGlzT2JqZWN0LCBtYWtlTWFwLCB0b1Jhd1R5cGUgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBEZXAgfSBmcm9tICcuL2VmZmVjdCdcclxuY29uc3QgY29sbGVjdGlvblR5cGVzID0gbmV3IFNldDxGdW5jdGlvbj4oW1NldCwgTWFwLCBXZWFrTWFwLCBXZWFrU2V0XSlcclxuY29uc3QgcmF3VG9SZWFjdGl2ZSA9IG5ldyBXZWFrTWFwPGFueSwgYW55PigpXHJcbmNvbnN0IHJlYWN0aXZlVG9SYXcgPSBuZXcgV2Vha01hcDxhbnksIGFueT4oKVxyXG5jb25zdCBpc09ic2VydmFibGVUeXBlID0gbWFrZU1hcCgnT2JqZWN0LEFycmF5LE1hcCxTZXQsV2Vha01hcCxXZWFrU2V0JylcclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWN0aXZlKHRhcmdldDogb2JqZWN0KSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxyXG4gICAgdGFyZ2V0LFxyXG4gICAgcmF3VG9SZWFjdGl2ZSxcclxuICAgIHJlYWN0aXZlVG9SYXcsXHJcbiAgICBub3JtYWxIYW5kbGVycyxcclxuICAgIGNvbGxlY3Rpb25IYW5kbGVyc1xyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVPYmplY3QoXHJcbiAgdGFyZ2V0OiBvYmplY3QsXHJcbiAgdG9Qcm94eTogV2Vha01hcDxhbnksIGFueT4sXHJcbiAgdG9SYXc6IFdlYWtNYXA8YW55LCBhbnk+LFxyXG4gIG5vcm1hbEhhbmRsZXJzOiBQcm94eUhhbmRsZXI8YW55PixcclxuICBjb2xsZWN0aW9uSGFuZGxlcnM6IFByb3h5SGFuZGxlcjxhbnk+XHJcbikge1xyXG4gIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgY29uc29sZS53YXJuKGB2YWx1ZSBjYW5ub3QgYmUgbWFkZSByZWFjdGl2ZTogJHtTdHJpbmcodGFyZ2V0KX1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG4gIH1cclxuICBsZXQgb2JzZXJ2ZWQgPSB0b1Byb3h5LmdldCh0YXJnZXQpXHJcbiAgaWYgKG9ic2VydmVkICE9PSB2b2lkIDApIHtcclxuICAgIHJldHVybiBvYnNlcnZlZFxyXG4gIH1cclxuICBpZiAodG9SYXcuaGFzKHRhcmdldCkpIHtcclxuICAgIHJldHVybiB0YXJnZXRcclxuICB9XHJcbiAgaWYgKCFpc09ic2VydmFibGVUeXBlKHRvUmF3VHlwZSh0YXJnZXQpKSkge1xyXG4gICAgcmV0dXJuIHRhcmdldFxyXG4gIH1cclxuICBvYnNlcnZlZCA9IG5ldyBQcm94eShcclxuICAgIHRhcmdldCxcclxuICAgIGNvbGxlY3Rpb25UeXBlcy5oYXModGFyZ2V0LmNvbnN0cnVjdG9yKVxyXG4gICAgICA/IGNvbGxlY3Rpb25IYW5kbGVyc1xyXG4gICAgICA6IG5vcm1hbEhhbmRsZXJzXHJcbiAgKVxyXG4gIHRvUHJveHkuc2V0KHRhcmdldCwgb2JzZXJ2ZWQpXHJcbiAgdG9SYXcuc2V0KG9ic2VydmVkLCB0YXJnZXQpXHJcbiAgaWYgKCF0YXJnZXRNYXAuaGFzKHRhcmdldCkpIHtcclxuICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCBuZXcgTWFwKCkpXHJcbiAgfVxyXG4gIHJldHVybiBvYnNlcnZlZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGFyZ2V0TWFwID0gbmV3IFdlYWtNYXA8YW55LCBLZXlUb0RlcE1hcD4oKVxyXG5cclxuZXhwb3J0IHR5cGUgS2V5VG9EZXBNYXAgPSBNYXA8YW55LCBEZXA+XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9SYXc8VD4ob2JzZXJ2ZWQ6IFQpOiBUIHtcclxuICByZXR1cm4gcmVhY3RpdmVUb1Jhdy5nZXQob2JzZXJ2ZWQpIHx8IG9ic2VydmVkXHJcbn0iLCJleHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsOiB1bmtub3duKTogdmFsIGlzIFJlY29yZDxhbnksIGFueT4gPT5cclxuICB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCdcclxuXHJcbmV4cG9ydCBjb25zdCB0b1Jhd1R5cGUgPSAodmFsdWU6IHVua25vd24pOiBzdHJpbmcgPT5cclxuICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3ltYm9sID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyBzeW1ib2wgPT4gdHlwZW9mIHZhbCA9PT0gJ3N5bWJvbCdcclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXAoXHJcbiAgc3RyOiBzdHJpbmcsXHJcbiAgZXhwZWN0c0xvd2VyQ2FzZT86IGJvb2xlYW5cclxuKTogKGtleTogc3RyaW5nKSA9PiBib29sZWFuIHtcclxuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxyXG4gIGNvbnN0IGxpc3Q6IEFycmF5PHN0cmluZz4gPSBzdHIuc3BsaXQoJywnKVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/IHZhbCA9PiAhIW1hcFt2YWwudG9Mb3dlckNhc2UoKV0gOiB2YWwgPT4gISFtYXBbdmFsXVxyXG59XHJcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IDxUIGV4dGVuZHMgb2JqZWN0LCBVIGV4dGVuZHMgb2JqZWN0PihcclxuICBhOiBULFxyXG4gIGI6IFVcclxuKTogVCAmIFUgPT4ge1xyXG4gIGZvciAoY29uc3Qga2V5IGluIGIpIHtcclxuICAgIDsoYSBhcyBhbnkpW2tleV0gPSBiW2tleV1cclxuICB9XHJcbiAgcmV0dXJuIGEgYXMgYW55XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNPd24gPSAoXHJcbiAgdmFsOiBvYmplY3QsXHJcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2xcclxuKToga2V5IGlzIGtleW9mIHR5cGVvZiB2YWwgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAodmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSk6IGJvb2xlYW4gPT5cclxuICB2YWx1ZSAhPT0gb2xkVmFsdWUgJiYgKHZhbHVlID09PSB2YWx1ZSB8fCBvbGRWYWx1ZSA9PT0gb2xkVmFsdWUpXHJcblxyXG5leHBvcnQgY29uc3QgRU1QVFlfT0JKOiB7IHJlYWRvbmx5IFtrZXk6IHN0cmluZ106IGFueSB9ID0gX19ERVZfX1xyXG4gID8gT2JqZWN0LmZyZWV6ZSh7fSlcclxuICA6IHt9XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=