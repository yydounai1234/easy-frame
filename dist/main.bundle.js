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
                console.log('啊哈哈哈', context.components[node.name], container);
                patchComponent(context.components[node.name], container, anchor);
            }
            else {
                console.log('ppppp');
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
function patchComponent(context, container, anchor) {
    var template = dom_1.querySelector(context.template);
    var componentAnchor = patchFragment(container, anchor);
    paser_1.parse(template.innerHTML.trim()).then(function (res) {
        effect_1.effect(function () {
            var mounted = context.mounted;
            if (!mounted && context.onLoad) {
                context.onLoad.call(context);
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var i = res_1[_i];
                    console.log(i);
                    patch(i, container, i.type, context, componentAnchor);
                }
            }
            else {
                for (var _a = 0, res_2 = res; _a < res_2.length; _a++) {
                    var i = res_2[_a];
                    patch(i, container, i.type, context, componentAnchor);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lYXN5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21lbGVtZW50dHlwZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb21oYW5kbGVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90YWd0eXBlcy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZGVjb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2luZGV4LmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Db2xsZWN0aW5nSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9GZWVkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9NdWx0aXBsZXhIYW5kbGVyLmpzIiwid2VicGFjazovL2Vhc3kvLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9lYXN5Ly4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9kb20udHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2NvbXBpbGVyL3Bhc2VyLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvY29tcGlsZXIvcHJvcHMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9jb21waWxlci91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL2Vhc3kudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L2NvbGxlY3Rpb25IYW5kbGVycy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvZWZmZWN0LnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vc3JjL3JlYWN0aXZpdHkvbm9ybWFsSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZWFzeS8uL3NyYy9yZWFjdGl2aXR5L3JlYWN0aXZlLnRzIiwid2VicGFjazovL2Vhc3kvLi9zcmMvcmVhY3Rpdml0eS91dGlscy50cyIsIndlYnBhY2s6Ly9lYXN5Ly4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxrRUFBZ0I7QUFDMUMsZUFBZSxtQkFBTyxD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Q0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hNYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGlCQUFpQixtQkFBTyxDQUFDLDJEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE9BQU87QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUNBQXlDLG1CQUFPLENBQUMsc0ZBQStCO0FBQ2hGLHNDQUFzQyxtQkFBTyxDQUFDLHVGQUFpQztBQUMvRSxvQ0FBb0MsbUJBQU8sQ0FBQyxtRkFBK0I7QUFDM0UsaUNBQWlDLG1CQUFPLENBQUMsNkVBQTRCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxMUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsMERBQVU7QUFDakM7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywwREFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUU7UUFDbkIsQ0FBQztRQUFDLENBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxDQUFRO0FBQ2pCLENBQUM7QUFFWSxjQUFNLEdBQUcsVUFDcEIsR0FBVyxFQUNYLEdBQW9CLElBQ1EsYUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBOUMsQ0FBOEM7QUFFL0Qsa0JBQVUsR0FBRyxVQUFDLEtBQVUsRUFBRSxRQUFhO0lBQ2xELFlBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUM7QUFBaEUsQ0FBZ0U7QUFFckQsaUJBQVMsR0FBb0MsS0FBTztJQUMvRCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLFNBQUU7Ozs7Ozs7Ozs7OztBQ3hDTixlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJlYXN5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVhc3lcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWFzeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZWFzeS50c1wiKTtcbiIsIi8qXG4gIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiovXG52YXIgRWxlbWVudFR5cGUgPSByZXF1aXJlKCdkb21lbGVtZW50dHlwZScpO1xudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnZW50aXRpZXMnKTtcblxuLyogbWl4ZWQtY2FzZSBTVkcgYW5kIE1hdGhNTCB0YWdzICYgYXR0cmlidXRlc1xuICAgcmVjb2duaXplZCBieSB0aGUgSFRNTCBwYXJzZXIsIHNlZVxuICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI3BhcnNpbmctbWFpbi1pbmZvcmVpZ25cbiovXG52YXIgZm9yZWlnbk5hbWVzID0gcmVxdWlyZSgnLi9mb3JlaWduTmFtZXMuanNvbicpO1xuZm9yZWlnbk5hbWVzLmVsZW1lbnROYW1lcy5fX3Byb3RvX18gPSBudWxsOyAvKiB1c2UgYXMgYSBzaW1wbGUgZGljdGlvbmFyeSAqL1xuZm9yZWlnbk5hbWVzLmF0dHJpYnV0ZU5hbWVzLl9fcHJvdG9fXyA9IG51bGw7XG5cbnZhciB1bmVuY29kZWRFbGVtZW50cyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdHlsZTogdHJ1ZSxcbiAgc2NyaXB0OiB0cnVlLFxuICB4bXA6IHRydWUsXG4gIGlmcmFtZTogdHJ1ZSxcbiAgbm9lbWJlZDogdHJ1ZSxcbiAgbm9mcmFtZXM6IHRydWUsXG4gIHBsYWludGV4dDogdHJ1ZSxcbiAgbm9zY3JpcHQ6IHRydWVcbn07XG5cbi8qXG4gIEZvcm1hdCBhdHRyaWJ1dGVzXG4qL1xuZnVuY3Rpb24gZm9ybWF0QXR0cnMoYXR0cmlidXRlcywgb3B0cykge1xuICBpZiAoIWF0dHJpYnV0ZXMpIHJldHVybjtcblxuICB2YXIgb3V0cHV0ID0gJyc7XG4gIHZhciB2YWx1ZTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGF0dHJpYnV0ZXNcbiAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICBpZiAob3V0cHV0KSB7XG4gICAgICBvdXRwdXQgKz0gJyAnO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnhtbE1vZGUgPT09ICdmb3JlaWduJykge1xuICAgICAgLyogZml4IHVwIG1peGVkLWNhc2UgYXR0cmlidXRlIG5hbWVzICovXG4gICAgICBrZXkgPSBmb3JlaWduTmFtZXMuYXR0cmlidXRlTmFtZXNba2V5XSB8fCBrZXk7XG4gICAgfVxuICAgIG91dHB1dCArPSBrZXk7XG4gICAgaWYgKCh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHx8IG9wdHMueG1sTW9kZSkge1xuICAgICAgb3V0cHV0ICs9XG4gICAgICAgICc9XCInICtcbiAgICAgICAgKG9wdHMuZGVjb2RlRW50aXRpZXNcbiAgICAgICAgICA/IGVudGl0aWVzLmVuY29kZVhNTCh2YWx1ZSlcbiAgICAgICAgICA6IHZhbHVlLnJlcGxhY2UoL1xcXCIvZywgJyZxdW90OycpKSArXG4gICAgICAgICdcIic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLypcbiAgU2VsZi1lbmNsb3NpbmcgdGFncyAoc3RvbGVuIGZyb20gbm9kZS1odG1scGFyc2VyKVxuKi9cbnZhciBzaW5nbGVUYWcgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYmFzZWZvbnQ6IHRydWUsXG4gIGJyOiB0cnVlLFxuICBjb2w6IHRydWUsXG4gIGNvbW1hbmQ6IHRydWUsXG4gIGVtYmVkOiB0cnVlLFxuICBmcmFtZTogdHJ1ZSxcbiAgaHI6IHRydWUsXG4gIGltZzogdHJ1ZSxcbiAgaW5wdXQ6IHRydWUsXG4gIGlzaW5kZXg6IHRydWUsXG4gIGtleWdlbjogdHJ1ZSxcbiAgbGluazogdHJ1ZSxcbiAgbWV0YTogdHJ1ZSxcbiAgcGFyYW06IHRydWUsXG4gIHNvdXJjZTogdHJ1ZSxcbiAgdHJhY2s6IHRydWUsXG4gIHdicjogdHJ1ZVxufTtcblxudmFyIHJlbmRlciA9IChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbSwgb3B0cykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tKSAmJiAhZG9tLmNoZWVyaW8pIGRvbSA9IFtkb21dO1xuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICB2YXIgb3V0cHV0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb20ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbSA9IGRvbVtpXTtcblxuICAgIGlmIChlbGVtLnR5cGUgPT09ICdyb290Jykgb3V0cHV0ICs9IHJlbmRlcihlbGVtLmNoaWxkcmVuLCBvcHRzKTtcbiAgICBlbHNlIGlmIChFbGVtZW50VHlwZS5pc1RhZyhlbGVtKSkgb3V0cHV0ICs9IHJlbmRlclRhZyhlbGVtLCBvcHRzKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZSlcbiAgICAgIG91dHB1dCArPSByZW5kZXJEaXJlY3RpdmUoZWxlbSk7XG4gICAgZWxzZSBpZiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5Db21tZW50KSBvdXRwdXQgKz0gcmVuZGVyQ29tbWVudChlbGVtKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNEQVRBKSBvdXRwdXQgKz0gcmVuZGVyQ2RhdGEoZWxlbSk7XG4gICAgZWxzZSBvdXRwdXQgKz0gcmVuZGVyVGV4dChlbGVtLCBvcHRzKTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59KTtcblxudmFyIGZvcmVpZ25Nb2RlSW50ZWdyYXRpb25Qb2ludHMgPSBbXG4gICdtaScsXG4gICdtbycsXG4gICdtbicsXG4gICdtcycsXG4gICdtdGV4dCcsXG4gICdhbm5vdGF0aW9uLXhtbCcsXG4gICdmb3JlaWduT2JqZWN0JyxcbiAgJ2Rlc2MnLFxuICAndGl0bGUnXG5dO1xuXG5mdW5jdGlvbiByZW5kZXJUYWcoZWxlbSwgb3B0cykge1xuICAvLyBIYW5kbGUgU1ZHIC8gTWF0aE1MIGluIEhUTUxcbiAgaWYgKG9wdHMueG1sTW9kZSA9PT0gJ2ZvcmVpZ24nKSB7XG4gICAgLyogZml4IHVwIG1peGVkLWNhc2UgZWxlbWVudCBuYW1lcyAqL1xuICAgIGVsZW0ubmFtZSA9IGZvcmVpZ25OYW1lcy5lbGVtZW50TmFtZXNbZWxlbS5uYW1lXSB8fCBlbGVtLm5hbWU7XG4gICAgLyogZXhpdCBmb3JlaWduIG1vZGUgYXQgaW50ZWdyYXRpb24gcG9pbnRzICovXG4gICAgaWYgKFxuICAgICAgZWxlbS5wYXJlbnQgJiZcbiAgICAgIGZvcmVpZ25Nb2RlSW50ZWdyYXRpb25Qb2ludHMuaW5kZXhPZihlbGVtLnBhcmVudC5uYW1lKSA+PSAwXG4gICAgKVxuICAgICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHsgeG1sTW9kZTogZmFsc2UgfSk7XG4gIH1cbiAgaWYgKCFvcHRzLnhtbE1vZGUgJiYgWydzdmcnLCAnbWF0aCddLmluZGV4T2YoZWxlbS5uYW1lKSA+PSAwKSB7XG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHsgeG1sTW9kZTogJ2ZvcmVpZ24nIH0pO1xuICB9XG5cbiAgdmFyIHRhZyA9ICc8JyArIGVsZW0ubmFtZTtcbiAgdmFyIGF0dHJpYnMgPSBmb3JtYXRBdHRycyhlbGVtLmF0dHJpYnMsIG9wdHMpO1xuXG4gIGlmIChhdHRyaWJzKSB7XG4gICAgdGFnICs9ICcgJyArIGF0dHJpYnM7XG4gIH1cblxuICBpZiAob3B0cy54bWxNb2RlICYmICghZWxlbS5jaGlsZHJlbiB8fCBlbGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkpIHtcbiAgICB0YWcgKz0gJy8+JztcbiAgfSBlbHNlIHtcbiAgICB0YWcgKz0gJz4nO1xuICAgIGlmIChlbGVtLmNoaWxkcmVuKSB7XG4gICAgICB0YWcgKz0gcmVuZGVyKGVsZW0uY2hpbGRyZW4sIG9wdHMpO1xuICAgIH1cblxuICAgIGlmICghc2luZ2xlVGFnW2VsZW0ubmFtZV0gfHwgb3B0cy54bWxNb2RlKSB7XG4gICAgICB0YWcgKz0gJzwvJyArIGVsZW0ubmFtZSArICc+JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEaXJlY3RpdmUoZWxlbSkge1xuICByZXR1cm4gJzwnICsgZWxlbS5kYXRhICsgJz4nO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0KGVsZW0sIG9wdHMpIHtcbiAgdmFyIGRhdGEgPSBlbGVtLmRhdGEgfHwgJyc7XG5cbiAgLy8gaWYgZW50aXRpZXMgd2VyZW4ndCBkZWNvZGVkLCBubyBuZWVkIHRvIGVuY29kZSB0aGVtIGJhY2tcbiAgaWYgKFxuICAgIG9wdHMuZGVjb2RlRW50aXRpZXMgJiZcbiAgICAhKGVsZW0ucGFyZW50ICYmIGVsZW0ucGFyZW50Lm5hbWUgaW4gdW5lbmNvZGVkRWxlbWVudHMpXG4gICkge1xuICAgIGRhdGEgPSBlbnRpdGllcy5lbmNvZGVYTUwoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2RhdGEoZWxlbSkge1xuICByZXR1cm4gJzwhW0NEQVRBWycgKyBlbGVtLmNoaWxkcmVuWzBdLmRhdGEgKyAnXV0+Jztcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tbWVudChlbGVtKSB7XG4gIHJldHVybiAnPCEtLScgKyBlbGVtLmRhdGEgKyAnLS0+Jztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB0YWcgb3Igbm90LlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gdGVzdFxuICovXG5mdW5jdGlvbiBpc1RhZyhlbGVtKSB7XG4gICAgcmV0dXJuIChlbGVtLnR5cGUgPT09IFwidGFnXCIgLyogVGFnICovIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gXCJzY3JpcHRcIiAvKiBTY3JpcHQgKi8gfHxcbiAgICAgICAgZWxlbS50eXBlID09PSBcInN0eWxlXCIgLyogU3R5bGUgKi8pO1xufVxuZXhwb3J0cy5pc1RhZyA9IGlzVGFnO1xuLy8gRXhwb3J0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbmV4cG9ydHMuVGV4dCA9IFwidGV4dFwiIC8qIFRleHQgKi87IC8vVGV4dFxuZXhwb3J0cy5EaXJlY3RpdmUgPSBcImRpcmVjdGl2ZVwiIC8qIERpcmVjdGl2ZSAqLzsgLy88PyAuLi4gPz5cbmV4cG9ydHMuQ29tbWVudCA9IFwiY29tbWVudFwiIC8qIENvbW1lbnQgKi87IC8vPCEtLSAuLi4gLS0+XG5leHBvcnRzLlNjcmlwdCA9IFwic2NyaXB0XCIgLyogU2NyaXB0ICovOyAvLzxzY3JpcHQ+IHRhZ3NcbmV4cG9ydHMuU3R5bGUgPSBcInN0eWxlXCIgLyogU3R5bGUgKi87IC8vPHN0eWxlPiB0YWdzXG5leHBvcnRzLlRhZyA9IFwidGFnXCIgLyogVGFnICovOyAvL0FueSB0YWdcbmV4cG9ydHMuQ0RBVEEgPSBcImNkYXRhXCIgLyogQ0RBVEEgKi87IC8vPCFbQ0RBVEFbIC4uLiBdXT5cbmV4cG9ydHMuRG9jdHlwZSA9IFwiZG9jdHlwZVwiIC8qIERvY3R5cGUgKi87XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub2RlXzEgPSByZXF1aXJlKFwiLi9ub2RlXCIpO1xuZXhwb3J0cy5Ob2RlID0gbm9kZV8xLk5vZGU7XG5leHBvcnRzLkVsZW1lbnQgPSBub2RlXzEuRWxlbWVudDtcbmV4cG9ydHMuRGF0YU5vZGUgPSBub2RlXzEuRGF0YU5vZGU7XG5leHBvcnRzLk5vZGVXaXRoQ2hpbGRyZW4gPSBub2RlXzEuTm9kZVdpdGhDaGlsZHJlbjtcbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzKy9nO1xuLy8gRGVmYXVsdCBvcHRpb25zXG52YXIgZGVmYXVsdE9wdHMgPSB7XG4gICAgbm9ybWFsaXplV2hpdGVzcGFjZTogZmFsc2UsXG4gICAgd2l0aFN0YXJ0SW5kaWNlczogZmFsc2UsXG4gICAgd2l0aEVuZEluZGljZXM6IGZhbHNlXG59O1xudmFyIERvbUhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhdGUgYSBuZXcgRG9tSGFuZGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsZWQgb25jZSBwYXJzaW5nIGhhcyBjb21wbGV0ZWQuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgU2V0dGluZ3MgZm9yIHRoZSBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBlbGVtZW50Q0IgQ2FsbGJhY2sgd2hlbmV2ZXIgYSB0YWcgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERvbUhhbmRsZXIoY2FsbGJhY2ssIG9wdGlvbnMsIGVsZW1lbnRDQikge1xuICAgICAgICAvKiogVGhlIGNvbnN0cnVjdGVkIERPTSAqL1xuICAgICAgICB0aGlzLmRvbSA9IFtdO1xuICAgICAgICAvKiogSW5kaWNhdGVkIHdoZXRoZXIgcGFyc2luZyBoYXMgYmVlbiBjb21wbGV0ZWQuICovXG4gICAgICAgIHRoaXMuX2RvbmUgPSBmYWxzZTtcbiAgICAgICAgLyoqIFN0YWNrIG9mIG9wZW4gdGFncy4gKi9cbiAgICAgICAgdGhpcy5fdGFnU3RhY2sgPSBbXTtcbiAgICAgICAgLyoqIEEgZGF0YSBub2RlIHRoYXQgaXMgc3RpbGwgYmVpbmcgd3JpdHRlbiB0by4gKi9cbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgICAgICAvKiogUmVmZXJlbmNlIHRvIHRoZSBwYXJzZXIgaW5zdGFuY2UuIFVzZWQgZm9yIGxvY2F0aW9uIGluZm9ybWF0aW9uLiAqL1xuICAgICAgICB0aGlzLl9wYXJzZXIgPSBudWxsO1xuICAgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIHNraXAgYXJndW1lbnRzLCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRDQiA9IG9wdGlvbnM7XG4gICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0T3B0cztcbiAgICAgICAgdGhpcy5fZWxlbWVudENCID0gZWxlbWVudENCIHx8IG51bGw7XG4gICAgfVxuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9ucGFyc2VyaW5pdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5fcGFyc2VyID0gcGFyc2VyO1xuICAgIH07XG4gICAgLy8gUmVzZXRzIHRoZSBoYW5kbGVyIGJhY2sgdG8gc3RhcnRpbmcgc3RhdGVcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRvbSA9IFtdO1xuICAgICAgICB0aGlzLl9kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RhZ1N0YWNrID0gW107XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGFyc2VyID0gdGhpcy5fcGFyc2VyIHx8IG51bGw7XG4gICAgfTtcbiAgICAvLyBTaWduYWxzIHRoZSBoYW5kbGVyIHRoYXQgcGFyc2luZyBpcyBkb25lXG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kb25lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLl9kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGFyc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhudWxsKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhlcnJvcik7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIC8vIElmKHRoaXMuX3RhZ1N0YWNrLnBvcCgpLm5hbWUgIT09IG5hbWUpIHRoaXMuaGFuZGxlQ2FsbGJhY2soRXJyb3IoXCJUYWduYW1lIGRpZG4ndCBtYXRjaCFcIikpO1xuICAgICAgICB2YXIgZWxlbSA9IHRoaXMuX3RhZ1N0YWNrLnBvcCgpO1xuICAgICAgICBpZiAoIWVsZW0gfHwgIXRoaXMuX3BhcnNlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLndpdGhFbmRJbmRpY2VzKSB7XG4gICAgICAgICAgICBlbGVtLmVuZEluZGV4ID0gdGhpcy5fcGFyc2VyLmVuZEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50Q0IpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Q0IoZWxlbSk7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbm9wZW50YWcgPSBmdW5jdGlvbiAobmFtZSwgYXR0cmlicykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IG5ldyBub2RlXzEuRWxlbWVudChuYW1lLCBhdHRyaWJzKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90YWdTdGFjay5wdXNoKGVsZW1lbnQpO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUub250ZXh0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZSA9IHRoaXMuX29wdGlvbnMubm9ybWFsaXplV2hpdGVzcGFjZTtcbiAgICAgICAgdmFyIF9sYXN0Tm9kZSA9IHRoaXMuX2xhc3ROb2RlO1xuICAgICAgICBpZiAoX2xhc3ROb2RlICYmIF9sYXN0Tm9kZS50eXBlID09PSBcInRleHRcIiAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICAgICAgICAgICAgX2xhc3ROb2RlLmRhdGEgPSAoX2xhc3ROb2RlLmRhdGEgKyBkYXRhKS5yZXBsYWNlKHJlV2hpdGVzcGFjZSwgXCIgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX2xhc3ROb2RlLmRhdGEgKz0gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKHJlV2hpdGVzcGFjZSwgXCIgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgbm9kZV8xLkRhdGFOb2RlKFwidGV4dFwiIC8qIFRleHQgKi8sIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5fbGFzdE5vZGUgJiYgdGhpcy5fbGFzdE5vZGUudHlwZSA9PT0gXCJjb21tZW50XCIgLyogQ29tbWVudCAqLykge1xuICAgICAgICAgICAgdGhpcy5fbGFzdE5vZGUuZGF0YSArPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5EYXRhTm9kZShcImNvbW1lbnRcIiAvKiBDb21tZW50ICovLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG5vZGU7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbnVsbDtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLm9uY2RhdGFzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRleHQgPSBuZXcgbm9kZV8xLkRhdGFOb2RlKFwidGV4dFwiIC8qIFRleHQgKi8sIFwiXCIpO1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBub2RlXzEuTm9kZVdpdGhDaGlsZHJlbihcImNkYXRhXCIgLyogQ0RBVEEgKi8sIFt0ZXh0XSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGV4dC5wYXJlbnQgPSBub2RlO1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IHRleHQ7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbmNkYXRhZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9sYXN0Tm9kZSA9IG51bGw7XG4gICAgfTtcbiAgICBEb21IYW5kbGVyLnByb3RvdHlwZS5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IG5vZGVfMS5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obmFtZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soZXJyb3IsIHRoaXMuZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLmFkZE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5fdGFnU3RhY2tbdGhpcy5fdGFnU3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBzaWJsaW5ncyA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbiA6IHRoaXMuZG9tO1xuICAgICAgICB2YXIgcHJldmlvdXNTaWJsaW5nID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLl9wYXJzZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLndpdGhTdGFydEluZGljZXMpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0YXJ0SW5kZXggPSB0aGlzLl9wYXJzZXIuc3RhcnRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLndpdGhFbmRJbmRpY2VzKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5lbmRJbmRleCA9IHRoaXMuX3BhcnNlci5lbmRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaWJsaW5ncy5wdXNoKG5vZGUpO1xuICAgICAgICBpZiAocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgICAgICBub2RlLnByZXYgPSBwcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBwcmV2aW91c1NpYmxpbmcubmV4dCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdE5vZGUgPSBudWxsO1xuICAgIH07XG4gICAgRG9tSGFuZGxlci5wcm90b3R5cGUuYWRkRGF0YU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB0aGlzLmFkZE5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuX2xhc3ROb2RlID0gbm9kZTtcbiAgICB9O1xuICAgIHJldHVybiBEb21IYW5kbGVyO1xufSgpKTtcbmV4cG9ydHMuRG9tSGFuZGxlciA9IERvbUhhbmRsZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBEb21IYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub2RlVHlwZXMgPSBuZXcgTWFwKFtcbiAgICBbXCJ0YWdcIiAvKiBUYWcgKi8sIDFdLFxuICAgIFtcInNjcmlwdFwiIC8qIFNjcmlwdCAqLywgMV0sXG4gICAgW1wic3R5bGVcIiAvKiBTdHlsZSAqLywgMV0sXG4gICAgW1wiZGlyZWN0aXZlXCIgLyogRGlyZWN0aXZlICovLCAxXSxcbiAgICBbXCJ0ZXh0XCIgLyogVGV4dCAqLywgM10sXG4gICAgW1wiY2RhdGFcIiAvKiBDREFUQSAqLywgNF0sXG4gICAgW1wiY29tbWVudFwiIC8qIENvbW1lbnQgKi8sIDhdXG5dKTtcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciBOb2RlcyB3aGVuIGNyZWF0aW5nIGFcbi8vIERPTS1MZXZlbC0xLWNvbXBsaWFudCBzdHJ1Y3R1cmUuXG52YXIgTm9kZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5vZGUodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAvKiogUGFyZW50IG9mIHRoZSBub2RlICovXG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgLyoqIFByZXZpb3VzIHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICAgICAgLyoqIE5leHQgc2libGluZyAqL1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgICAvKiogVGhlIHN0YXJ0IGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aFN0YXJ0SW5kaWNlc2Agb24gdGhlIGhhbmRsZXIgdG8gYmUgYHRydWUuICovXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IG51bGw7XG4gICAgICAgIC8qKiBUaGUgZW5kIGluZGV4IG9mIHRoZSBub2RlLiBSZXF1aXJlcyBgd2l0aEVuZEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gbnVsbDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcIm5vZGVUeXBlXCIsIHtcbiAgICAgICAgLy8gUmVhZC1vbmx5IGFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVR5cGVzLmdldCh0aGlzLnR5cGUpIHx8IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJwYXJlbnROb2RlXCIsIHtcbiAgICAgICAgLy8gUmVhZC13cml0ZSBhbGlhc2VzIGZvciBwcm9wZXJ0aWVzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50IHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgXCJwcmV2aW91c1NpYmxpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXYgfHwgbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCBcIm5leHRTaWJsaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0IHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBOb2RlO1xufSgpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG52YXIgRGF0YU5vZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGFOb2RlLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG5vZGVcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgY29udGVudCBvZiB0aGUgZGF0YSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGF0YU5vZGUodHlwZSwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGF0YU5vZGUucHJvdG90eXBlLCBcIm5vZGVWYWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIERhdGFOb2RlO1xufShOb2RlKSk7XG5leHBvcnRzLkRhdGFOb2RlID0gRGF0YU5vZGU7XG52YXIgUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJkaXJlY3RpdmVcIiAvKiBEaXJlY3RpdmUgKi8sIGRhdGEpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG59KERhdGFOb2RlKSk7XG5leHBvcnRzLlByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IFByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbnZhciBOb2RlV2l0aENoaWxkcmVuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlV2l0aENoaWxkcmVuLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgVHlwZSBvZiB0aGUgbm9kZS5cbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIG5vZGUuIE9ubHkgY2VydGFpbiBub2RlIHR5cGVzIGNhbiBoYXZlIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE5vZGVXaXRoQ2hpbGRyZW4odHlwZSwgY2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwiZmlyc3RDaGlsZFwiLCB7XG4gICAgICAgIC8vIEFsaWFzZXNcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlblswXSB8fCBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZVdpdGhDaGlsZHJlbi5wcm90b3R5cGUsIFwibGFzdENoaWxkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlV2l0aENoaWxkcmVuLnByb3RvdHlwZSwgXCJjaGlsZE5vZGVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE5vZGVXaXRoQ2hpbGRyZW47XG59KE5vZGUpKTtcbmV4cG9ydHMuTm9kZVdpdGhDaGlsZHJlbiA9IE5vZGVXaXRoQ2hpbGRyZW47XG52YXIgRWxlbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRWxlbWVudCwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRhZywgZWcuIGBkaXZgLCBgc3BhbmBcbiAgICAgKiBAcGFyYW0gYXR0cmlicyBPYmplY3QgbWFwcGluZyBhdHRyaWJ1dGUgbmFtZXMgdG8gYXR0cmlidXRlIHZhbHVlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEVsZW1lbnQobmFtZSwgYXR0cmlicykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lID09PSBcInNjcmlwdFwiXG4gICAgICAgICAgICA/IFwic2NyaXB0XCIgLyogU2NyaXB0ICovXG4gICAgICAgICAgICA6IG5hbWUgPT09IFwic3R5bGVcIlxuICAgICAgICAgICAgICAgID8gXCJzdHlsZVwiIC8qIFN0eWxlICovXG4gICAgICAgICAgICAgICAgOiBcInRhZ1wiIC8qIFRhZyAqLywgW10pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5hdHRyaWJzID0gYXR0cmlicztcbiAgICAgICAgX3RoaXMuYXR0cmlicyA9IGF0dHJpYnM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcInRhZ05hbWVcIiwge1xuICAgICAgICAvLyBET00gTGV2ZWwgMSBhbGlhc2VzXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEVsZW1lbnQ7XG59KE5vZGVXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0YWd0eXBlc18xID0gcmVxdWlyZShcIi4vdGFndHlwZXNcIik7XG4vKipcbiAqIEdpdmVuIGFuIGFycmF5IG9mIG5vZGVzLCByZW1vdmUgYW55IG1lbWJlciB0aGF0IGlzIGNvbnRhaW5lZCBieSBhbm90aGVyLlxuICpcbiAqIEBwYXJhbSBub2RlcyDigJQgTm9kZXMgdG8gZmlsdGVyLlxuICovXG5mdW5jdGlvbiByZW1vdmVTdWJzZXRzKG5vZGVzKSB7XG4gICAgdmFyIGlkeCA9IG5vZGVzLmxlbmd0aDtcbiAgICAvLyBDaGVjayBpZiBlYWNoIG5vZGUgKG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKSBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGVcbiAgICAvLyBhcnJheS5cbiAgICB3aGlsZSAoLS1pZHggPj0gMCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2lkeF07XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbm9kZSBpZiBpdCBpcyBub3QgdW5pcXVlLlxuICAgICAgICAvLyBXZSBhcmUgZ29pbmcgdGhyb3VnaCB0aGUgYXJyYXkgZnJvbSB0aGUgZW5kLCBzbyB3ZSBvbmx5XG4gICAgICAgIC8vIGhhdmUgdG8gY2hlY2sgbm9kZXMgdGhhdCBwcmVjZWVkIHRoZSBub2RlIHVuZGVyIGNvbnNpZGVyYXRpb24gaW4gdGhlIGFycmF5LlxuICAgICAgICBpZiAoaWR4ID4gMCAmJiBub2Rlcy5sYXN0SW5kZXhPZihub2RlLCBpZHggLSAxKSA+PSAwKSB7XG4gICAgICAgICAgICBub2Rlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGFuY2VzdG9yID0gbm9kZS5wYXJlbnQ7IGFuY2VzdG9yOyBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGVzLmluZGV4T2YoYW5jZXN0b3IpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG59XG5leHBvcnRzLnJlbW92ZVN1YnNldHMgPSByZW1vdmVTdWJzZXRzO1xuLyoqKlxuICogQ29tcGFyZSB0aGUgcG9zaXRpb24gb2Ygb25lIG5vZGUgYWdhaW5zdCBhbm90aGVyIG5vZGUgaW4gYW55IG90aGVyIGRvY3VtZW50LlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhIGJpdG1hc2sgd2l0aCB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAqXG4gKiBkb2N1bWVudCBvcmRlcjpcbiAqID4gVGhlcmUgaXMgYW4gb3JkZXJpbmcsIGRvY3VtZW50IG9yZGVyLCBkZWZpbmVkIG9uIGFsbCB0aGUgbm9kZXMgaW4gdGhlXG4gKiA+IGRvY3VtZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlXG4gKiA+IFhNTCByZXByZXNlbnRhdGlvbiBvZiBlYWNoIG5vZGUgb2NjdXJzIGluIHRoZSBYTUwgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gKiA+IGRvY3VtZW50IGFmdGVyIGV4cGFuc2lvbiBvZiBnZW5lcmFsIGVudGl0aWVzLiBUaHVzLCB0aGUgZG9jdW1lbnQgZWxlbWVudFxuICogPiBub2RlIHdpbGwgYmUgdGhlIGZpcnN0IG5vZGUuIEVsZW1lbnQgbm9kZXMgb2NjdXIgYmVmb3JlIHRoZWlyIGNoaWxkcmVuLlxuICogPiBUaHVzLCBkb2N1bWVudCBvcmRlciBvcmRlcnMgZWxlbWVudCBub2RlcyBpbiBvcmRlciBvZiB0aGUgb2NjdXJyZW5jZSBvZlxuICogPiB0aGVpciBzdGFydC10YWcgaW4gdGhlIFhNTCAoYWZ0ZXIgZXhwYW5zaW9uIG9mIGVudGl0aWVzKS4gVGhlIGF0dHJpYnV0ZVxuICogPiBub2RlcyBvZiBhbiBlbGVtZW50IG9jY3VyIGFmdGVyIHRoZSBlbGVtZW50IGFuZCBiZWZvcmUgaXRzIGNoaWxkcmVuLiBUaGVcbiAqID4gcmVsYXRpdmUgb3JkZXIgb2YgYXR0cmlidXRlIG5vZGVzIGlzIGltcGxlbWVudGF0aW9uLWRlcGVuZGVudC4vXG4gKlxuICogU291cmNlOlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9nbG9zc2FyeS5odG1sI2R0LWRvY3VtZW50LW9yZGVyXG4gKiBAYXJndW1lbnQgbm9kYUEgVGhlIGZpcnN0IG5vZGUgdG8gdXNlIGluIHRoZSBjb21wYXJpc29uXG4gKiBAYXJndW1lbnQgbm9kZUIgVGhlIHNlY29uZCBub2RlIHRvIHVzZSBpbiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEByZXR1cm4gQSBiaXRtYXNrIGRlc2NyaWJpbmcgdGhlIGlucHV0IG5vZGVzJyByZWxhdGl2ZSBwb3NpdGlvbi5cbiAqXG4gKiAgICAgICAgU2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1jb21wYXJlZG9jdW1lbnRwb3NpdGlvbiBmb3JcbiAqICAgICAgICBhIGRlc2NyaXB0aW9uIG9mIHRoZXNlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZUEsIG5vZGVCKSB7XG4gICAgdmFyIGFQYXJlbnRzID0gW107XG4gICAgdmFyIGJQYXJlbnRzID0gW107XG4gICAgaWYgKG5vZGVBID09PSBub2RlQikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnQgPSB0YWd0eXBlc18xLmhhc0NoaWxkcmVuKG5vZGVBKSA/IG5vZGVBIDogbm9kZUEucGFyZW50O1xuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgIGFQYXJlbnRzLnVuc2hpZnQoY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgY3VycmVudCA9IHRhZ3R5cGVzXzEuaGFzQ2hpbGRyZW4obm9kZUIpID8gbm9kZUIgOiBub2RlQi5wYXJlbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgYlBhcmVudHMudW5zaGlmdChjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgIH1cbiAgICB2YXIgaWR4ID0gMDtcbiAgICB3aGlsZSAoYVBhcmVudHNbaWR4XSA9PT0gYlBhcmVudHNbaWR4XSkge1xuICAgICAgICBpZHgrKztcbiAgICB9XG4gICAgaWYgKGlkeCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMSAvKiBESVNDT05ORUNURUQgKi87XG4gICAgfVxuICAgIHZhciBzaGFyZWRQYXJlbnQgPSBhUGFyZW50c1tpZHggLSAxXTtcbiAgICB2YXIgc2libGluZ3MgPSBzaGFyZWRQYXJlbnQuY2hpbGRyZW47XG4gICAgdmFyIGFTaWJsaW5nID0gYVBhcmVudHNbaWR4XTtcbiAgICB2YXIgYlNpYmxpbmcgPSBiUGFyZW50c1tpZHhdO1xuICAgIGlmIChzaWJsaW5ncy5pbmRleE9mKGFTaWJsaW5nKSA+IHNpYmxpbmdzLmluZGV4T2YoYlNpYmxpbmcpKSB7XG4gICAgICAgIGlmIChzaGFyZWRQYXJlbnQgPT09IG5vZGVCKSB7XG4gICAgICAgICAgICByZXR1cm4gNCAvKiBGT0xMT1dJTkcgKi8gfCAxNiAvKiBDT05UQUlORURfQlkgKi87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDQgLyogRk9MTE9XSU5HICovO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHNoYXJlZFBhcmVudCA9PT0gbm9kZUEpIHtcbiAgICAgICAgICAgIHJldHVybiAyIC8qIFBSRUNFRElORyAqLyB8IDggLyogQ09OVEFJTlMgKi87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDIgLyogUFJFQ0VESU5HICovO1xuICAgIH1cbn1cbmV4cG9ydHMuY29tcGFyZURvY3VtZW50UG9zaXRpb24gPSBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcbi8qKipcbiAqIFNvcnQgYW4gYXJyYXkgb2Ygbm9kZXMgYmFzZWQgb24gdGhlaXIgcmVsYXRpdmUgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50IGFuZFxuICogcmVtb3ZlIGFueSBkdXBsaWNhdGUgbm9kZXMuIElmIHRoZSBhcnJheSBjb250YWlucyBub2RlcyB0aGF0IGRvIG5vdCBiZWxvbmdcbiAqIHRvIHRoZSBzYW1lIGRvY3VtZW50LCBzb3J0IG9yZGVyIGlzIHVuc3BlY2lmaWVkLlxuICpcbiAqIEBhcmd1bWVudCBub2RlcyBBcnJheSBvZiBET00gbm9kZXNcbiAqIEByZXR1cm5zIGNvbGxlY3Rpb24gb2YgdW5pcXVlIG5vZGVzLCBzb3J0ZWQgaW4gZG9jdW1lbnQgb3JkZXJcbiAqL1xuZnVuY3Rpb24gdW5pcXVlU29ydChub2Rlcykge1xuICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChub2RlLCBpLCBhcnIpIHsgcmV0dXJuICFhcnIuaW5jbHVkZXMobm9kZSwgaSArIDEpOyB9KTtcbiAgICBub2Rlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEsIGIpO1xuICAgICAgICBpZiAocmVsYXRpdmUgJiAyIC8qIFBSRUNFRElORyAqLykge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlICYgNCAvKiBGT0xMT1dJTkcgKi8pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlcztcbn1cbmV4cG9ydHMudW5pcXVlU29ydCA9IHVuaXF1ZVNvcnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zdHJpbmdpZnlcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdHJhdmVyc2FsXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21hbmlwdWxhdGlvblwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9xdWVyeWluZ1wiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9sZWdhY3lcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVyc1wiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi90YWd0eXBlc1wiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBxdWVyeWluZ18xID0gcmVxdWlyZShcIi4vcXVlcnlpbmdcIik7XG52YXIgdGFndHlwZXNfMSA9IHJlcXVpcmUoXCIuL3RhZ3R5cGVzXCIpO1xuZnVuY3Rpb24gaXNUZXh0Tm9kZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gXCJ0ZXh0XCIgLyogVGV4dCAqLztcbn1cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbnZhciBDaGVja3MgPSB7XG4gICAgdGFnX25hbWU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHRhZ3R5cGVzXzEuaXNUYWcoZWxlbSkgJiYgbmFtZShlbGVtLm5hbWUpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFndHlwZXNfMS5pc1RhZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdGFndHlwZXNfMS5pc1RhZyhlbGVtKSAmJiBlbGVtLm5hbWUgPT09IG5hbWU7IH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRhZ190eXBlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB0eXBlKGVsZW0udHlwZSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udHlwZSA9PT0gdHlwZTsgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFnX2NvbnRhaW5zOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBpc1RleHROb2RlKGVsZW0pICYmIGRhdGEoZWxlbS5kYXRhKTsgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gaXNUZXh0Tm9kZShlbGVtKSAmJiBlbGVtLmRhdGEgPT09IGRhdGE7IH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG5mdW5jdGlvbiBnZXRBdHRyaWJDaGVjayhhdHRyaWIsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gdGFndHlwZXNfMS5pc1RhZyhlbGVtKSAmJiB2YWx1ZShlbGVtLmF0dHJpYnNbYXR0cmliXSk7IH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHRhZ3R5cGVzXzEuaXNUYWcoZWxlbSkgJiYgZWxlbS5hdHRyaWJzW2F0dHJpYl0gPT09IHZhbHVlOyB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbWJpbmVGdW5jcyhhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiBhKGVsZW0pIHx8IGIoZWxlbSk7IH07XG59XG5mdW5jdGlvbiBjb21waWxlVGVzdChvcHRpb25zKSB7XG4gICAgdmFyIGZ1bmNzID0gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1trZXldO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBrZXkgaW4gQ2hlY2tzID8gQ2hlY2tzW2tleV0odmFsdWUpIDogZ2V0QXR0cmliQ2hlY2soa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmNzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBmdW5jcy5yZWR1Y2UoY29tYmluZUZ1bmNzKTtcbn1cbmZ1bmN0aW9uIHRlc3RFbGVtZW50KG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICB2YXIgdGVzdCA9IGNvbXBpbGVUZXN0KG9wdGlvbnMpO1xuICAgIHJldHVybiB0ZXN0ID8gdGVzdChlbGVtZW50KSA6IHRydWU7XG59XG5leHBvcnRzLnRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQ7XG5mdW5jdGlvbiBnZXRFbGVtZW50cyhvcHRpb25zLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCkge1xuICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gSW5maW5pdHk7IH1cbiAgICB2YXIgdGVzdCA9IGNvbXBpbGVUZXN0KG9wdGlvbnMpO1xuICAgIHJldHVybiB0ZXN0ID8gcXVlcnlpbmdfMS5maWx0ZXIodGVzdCwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpIDogW107XG59XG5leHBvcnRzLmdldEVsZW1lbnRzID0gZ2V0RWxlbWVudHM7XG5mdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCwgZWxlbWVudCwgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IHRydWU7IH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudCkpXG4gICAgICAgIGVsZW1lbnQgPSBbZWxlbWVudF07XG4gICAgcmV0dXJuIHF1ZXJ5aW5nXzEuZmluZE9uZShnZXRBdHRyaWJDaGVjayhcImlkXCIsIGlkKSwgZWxlbWVudCwgcmVjdXJzZSk7XG59XG5leHBvcnRzLmdldEVsZW1lbnRCeUlkID0gZ2V0RWxlbWVudEJ5SWQ7XG5mdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZShuYW1lLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCkge1xuICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gSW5maW5pdHk7IH1cbiAgICByZXR1cm4gcXVlcnlpbmdfMS5maWx0ZXIoQ2hlY2tzLnRhZ19uYW1lKG5hbWUpLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCk7XG59XG5leHBvcnRzLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG5mdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnVHlwZSh0eXBlLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IHRydWU7IH1cbiAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IEluZmluaXR5OyB9XG4gICAgcmV0dXJuIHF1ZXJ5aW5nXzEuZmlsdGVyKENoZWNrcy50YWdfdHlwZSh0eXBlKSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpO1xufVxuZXhwb3J0cy5nZXRFbGVtZW50c0J5VGFnVHlwZSA9IGdldEVsZW1lbnRzQnlUYWdUeXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqXG4gKiBSZW1vdmUgYW4gZWxlbWVudCBmcm9tIHRoZSBkb21cbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBiZSByZW1vdmVkXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxlbSkge1xuICAgIGlmIChlbGVtLnByZXYpXG4gICAgICAgIGVsZW0ucHJldi5uZXh0ID0gZWxlbS5uZXh0O1xuICAgIGlmIChlbGVtLm5leHQpXG4gICAgICAgIGVsZW0ubmV4dC5wcmV2ID0gZWxlbS5wcmV2O1xuICAgIGlmIChlbGVtLnBhcmVudCkge1xuICAgICAgICB2YXIgY2hpbGRzID0gZWxlbS5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pLCAxKTtcbiAgICB9XG59XG5leHBvcnRzLnJlbW92ZUVsZW1lbnQgPSByZW1vdmVFbGVtZW50O1xuLyoqKlxuICogUmVwbGFjZSBhbiBlbGVtZW50IGluIHRoZSBkb21cbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBiZSByZXBsYWNlZFxuICogQGFyZ3VtZW50IHJlcGxhY2VtZW50IFRoZSBlbGVtZW50IHRvIGJlIGFkZGVkXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW0sIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHByZXYgPSAocmVwbGFjZW1lbnQucHJldiA9IGVsZW0ucHJldik7XG4gICAgaWYgKHByZXYpIHtcbiAgICAgICAgcHJldi5uZXh0ID0gcmVwbGFjZW1lbnQ7XG4gICAgfVxuICAgIHZhciBuZXh0ID0gKHJlcGxhY2VtZW50Lm5leHQgPSBlbGVtLm5leHQpO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICAgIG5leHQucHJldiA9IHJlcGxhY2VtZW50O1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gKHJlcGxhY2VtZW50LnBhcmVudCA9IGVsZW0ucGFyZW50KTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkc1tjaGlsZHMubGFzdEluZGV4T2YoZWxlbSldID0gcmVwbGFjZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0cy5yZXBsYWNlRWxlbWVudCA9IHJlcGxhY2VFbGVtZW50O1xuLyoqKlxuICogQXBwZW5kIGEgY2hpbGQgdG8gYW4gZWxlbWVudFxuICpcbiAqIEBhcmd1bWVudCBlbGVtIFRoZSBlbGVtZW50IHRvIGFwcGVuZCB0b1xuICogQGFyZ3VtZW50IGNoaWxkIFRoZSBlbGVtZW50IHRvIGJlIGFkZGVkIGFzIGEgY2hpbGRcbiAqL1xuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoZWxlbSwgY2hpbGQpIHtcbiAgICBjaGlsZC5wYXJlbnQgPSBlbGVtO1xuICAgIGlmIChlbGVtLmNoaWxkcmVuLnB1c2goY2hpbGQpICE9PSAxKSB7XG4gICAgICAgIHZhciBzaWJsaW5nID0gZWxlbS5jaGlsZHJlbltlbGVtLmNoaWxkcmVuLmxlbmd0aCAtIDJdO1xuICAgICAgICBzaWJsaW5nLm5leHQgPSBjaGlsZDtcbiAgICAgICAgY2hpbGQucHJldiA9IHNpYmxpbmc7XG4gICAgICAgIGNoaWxkLm5leHQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuYXBwZW5kQ2hpbGQgPSBhcHBlbmRDaGlsZDtcbi8qKipcbiAqIEFwcGVuZCBhbiBlbGVtZW50IGFmdGVyIGFub3RoZXJcbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBhcHBlbmQgdG9cbiAqIEBhcmd1bWVudCBuZXh0IFRoZSBlbGVtZW50IGJlIGFkZGVkXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZChlbGVtLCBuZXh0KSB7XG4gICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50LCBjdXJyTmV4dCA9IGVsZW0ubmV4dDtcbiAgICBuZXh0Lm5leHQgPSBjdXJyTmV4dDtcbiAgICBuZXh0LnByZXYgPSBlbGVtO1xuICAgIGVsZW0ubmV4dCA9IG5leHQ7XG4gICAgbmV4dC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKGN1cnJOZXh0KSB7XG4gICAgICAgIGN1cnJOZXh0LnByZXYgPSBuZXh0O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRzLnNwbGljZShjaGlsZHMubGFzdEluZGV4T2YoY3Vyck5leHQpLCAwLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobmV4dCk7XG4gICAgfVxufVxuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmQ7XG4vKioqXG4gKiBQcmVwZW5kIGFuIGVsZW1lbnQgYmVmb3JlIGFub3RoZXJcbiAqXG4gKiBAYXJndW1lbnQgZWxlbSBUaGUgZWxlbWVudCB0byBhcHBlbmQgdG9cbiAqIEBhcmd1bWVudCBwcmV2IFRoZSBlbGVtZW50IGJlIGFkZGVkXG4gKi9cbmZ1bmN0aW9uIHByZXBlbmQoZWxlbSwgcHJldikge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudDtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pLCAwLCBwcmV2KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ucHJldikge1xuICAgICAgICBlbGVtLnByZXYubmV4dCA9IHByZXY7XG4gICAgfVxuICAgIHByZXYucGFyZW50ID0gcGFyZW50O1xuICAgIHByZXYucHJldiA9IGVsZW0ucHJldjtcbiAgICBwcmV2Lm5leHQgPSBlbGVtO1xuICAgIGVsZW0ucHJldiA9IHByZXY7XG59XG5leHBvcnRzLnByZXBlbmQgPSBwcmVwZW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdGFndHlwZXNfMSA9IHJlcXVpcmUoXCIuL3RhZ3R5cGVzXCIpO1xuZnVuY3Rpb24gZmlsdGVyKHRlc3QsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gdHJ1ZTsgfVxuICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gSW5maW5pdHk7IH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudCkpXG4gICAgICAgIGVsZW1lbnQgPSBbZWxlbWVudF07XG4gICAgcmV0dXJuIGZpbmQodGVzdCwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpO1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5mdW5jdGlvbiBmaW5kKHRlc3QsIGVsZW1zLCByZWN1cnNlLCBsaW1pdCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtID0gZWxlbXNbaV07XG4gICAgICAgIGlmICh0ZXN0KGVsZW0pKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChlbGVtKTtcbiAgICAgICAgICAgIGlmICgtLWxpbWl0IDw9IDApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY3Vyc2UgJiYgdGFndHlwZXNfMS5oYXNDaGlsZHJlbihlbGVtKSAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGZpbmQodGVzdCwgZWxlbS5jaGlsZHJlbiwgcmVjdXJzZSwgbGltaXQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICBsaW1pdCAtPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobGltaXQgPD0gMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5maW5kID0gZmluZDtcbmZ1bmN0aW9uIGZpbmRPbmVDaGlsZCh0ZXN0LCBlbGVtcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRlc3QoZWxlbXNbaV0pKVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMuZmluZE9uZUNoaWxkID0gZmluZE9uZUNoaWxkO1xuZnVuY3Rpb24gZmluZE9uZSh0ZXN0LCBlbGVtcywgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IHRydWU7IH1cbiAgICB2YXIgZWxlbSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGggJiYgIWVsZW07IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlZCA9IGVsZW1zW2ldO1xuICAgICAgICBpZiAoIXRhZ3R5cGVzXzEuaXNUYWcoY2hlY2tlZCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRlc3QoY2hlY2tlZCkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlY3Vyc2UgJiYgY2hlY2tlZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBlbGVtID0gZmluZE9uZSh0ZXN0LCBjaGVja2VkLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbTtcbn1cbmV4cG9ydHMuZmluZE9uZSA9IGZpbmRPbmU7XG5mdW5jdGlvbiBleGlzdHNPbmUodGVzdCwgZWxlbXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VkID0gZWxlbXNbaV07XG4gICAgICAgIGlmICh0YWd0eXBlc18xLmlzVGFnKGNoZWNrZWQpICYmXG4gICAgICAgICAgICAodGVzdChjaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgIChjaGVja2VkLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzT25lKHRlc3QsIGNoZWNrZWQuY2hpbGRyZW4pKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuZXhpc3RzT25lID0gZXhpc3RzT25lO1xuZnVuY3Rpb24gZmluZEFsbCh0ZXN0LCByb290RWxlbXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIHN0YWNrID0gcm9vdEVsZW1zLnNsaWNlKCk7XG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWxlbSA9IHN0YWNrLnNoaWZ0KCk7XG4gICAgICAgIGlmICghZWxlbSB8fCAhdGFndHlwZXNfMS5pc1RhZyhlbGVtKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbiAmJiBlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHN0YWNrLnVuc2hpZnQuYXBwbHkoc3RhY2ssIGVsZW0uY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0KGVsZW0pKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmZpbmRBbGwgPSBmaW5kQWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdGFndHlwZXNfMSA9IHJlcXVpcmUoXCIuL3RhZ3R5cGVzXCIpO1xudmFyIGRvbV9zZXJpYWxpemVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRvbS1zZXJpYWxpemVyXCIpKTtcbmV4cG9ydHMuZ2V0T3V0ZXJIVE1MID0gZG9tX3NlcmlhbGl6ZXJfMS5kZWZhdWx0O1xuZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKG5vZGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGFndHlwZXNfMS5oYXNDaGlsZHJlbihub2RlKVxuICAgICAgICA/IG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChub2RlKSB7IHJldHVybiBleHBvcnRzLmdldE91dGVySFRNTChub2RlLCBvcHRpb25zKTsgfSkuam9pbihcIlwiKVxuICAgICAgICA6IFwiXCI7XG59XG5leHBvcnRzLmdldElubmVySFRNTCA9IGdldElubmVySFRNTDtcbmZ1bmN0aW9uIGdldFRleHQobm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5tYXAoZ2V0VGV4dCkuam9pbihcIlwiKTtcbiAgICBpZiAodGFndHlwZXNfMS5pc1RhZyhub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUubmFtZSA9PT0gXCJiclwiID8gXCJcXG5cIiA6IGdldFRleHQobm9kZS5jaGlsZHJlbik7XG4gICAgaWYgKHRhZ3R5cGVzXzEuaXNDREFUQShub2RlKSlcbiAgICAgICAgcmV0dXJuIGdldFRleHQobm9kZS5jaGlsZHJlbik7XG4gICAgaWYgKHRhZ3R5cGVzXzEuaXNUZXh0KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIHJldHVybiBcIlwiO1xufVxuZXhwb3J0cy5nZXRUZXh0ID0gZ2V0VGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRvbWVsZW1lbnR0eXBlXzEgPSByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIik7XG5mdW5jdGlvbiBpc1RhZyhub2RlKSB7XG4gICAgcmV0dXJuIGRvbWVsZW1lbnR0eXBlXzEuaXNUYWcobm9kZSk7XG59XG5leHBvcnRzLmlzVGFnID0gaXNUYWc7XG5mdW5jdGlvbiBpc0NEQVRBKG5vZGUpIHtcbiAgICByZXR1cm4gXCJjZGF0YVwiIC8qIENEQVRBICovID09PSBub2RlLnR5cGU7XG59XG5leHBvcnRzLmlzQ0RBVEEgPSBpc0NEQVRBO1xuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBcInRleHRcIiAvKiBUZXh0ICovO1xufVxuZXhwb3J0cy5pc1RleHQgPSBpc1RleHQ7XG5mdW5jdGlvbiBpc0NvbW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IFwiY29tbWVudFwiIC8qIENvbW1lbnQgKi87XG59XG5leHBvcnRzLmlzQ29tbWVudCA9IGlzQ29tbWVudDtcbmZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIFwiY2hpbGRyZW5cIik7XG59XG5leHBvcnRzLmhhc0NoaWxkcmVuID0gaGFzQ2hpbGRyZW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldENoaWxkcmVuKGVsZW0pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGVsZW0uY2hpbGRyZW4gfHwgbnVsbDtcbn1cbmV4cG9ydHMuZ2V0Q2hpbGRyZW4gPSBnZXRDaGlsZHJlbjtcbmZ1bmN0aW9uIGdldFBhcmVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ucGFyZW50IHx8IG51bGw7XG59XG5leHBvcnRzLmdldFBhcmVudCA9IGdldFBhcmVudDtcbmZ1bmN0aW9uIGdldFNpYmxpbmdzKGVsZW0pIHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGVsZW0pO1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRDaGlsZHJlbihwYXJlbnQpIDogW2VsZW1dO1xufVxuZXhwb3J0cy5nZXRTaWJsaW5ncyA9IGdldFNpYmxpbmdzO1xuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoZWxlbSwgbmFtZSkge1xuICAgIHJldHVybiBlbGVtLmF0dHJpYnMgJiYgZWxlbS5hdHRyaWJzW25hbWVdO1xufVxuZXhwb3J0cy5nZXRBdHRyaWJ1dGVWYWx1ZSA9IGdldEF0dHJpYnV0ZVZhbHVlO1xuZnVuY3Rpb24gaGFzQXR0cmliKGVsZW0sIG5hbWUpIHtcbiAgICByZXR1cm4gISFnZXRBdHRyaWJ1dGVWYWx1ZShlbGVtLCBuYW1lKTtcbn1cbmV4cG9ydHMuaGFzQXR0cmliID0gaGFzQXR0cmliO1xuLyoqKlxuICogUmV0dXJucyB0aGUgbmFtZSBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50XG4gKlxuICogQGFyZ3VtZW50IGVsZW0gVGhlIGVsZW1lbnQgdG8gZ2V0IHRoZSBuYW1lIGZvclxuICovXG5mdW5jdGlvbiBnZXROYW1lKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5uYW1lO1xufVxuZXhwb3J0cy5nZXROYW1lID0gZ2V0TmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVudGl0aWVzX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2VudGl0aWVzLmpzb25cIikpO1xudmFyIGxlZ2FjeV9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9sZWdhY3kuanNvblwiKSk7XG52YXIgeG1sX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL3htbC5qc29uXCIpKTtcbnZhciBkZWNvZGVfY29kZXBvaW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVjb2RlX2NvZGVwb2ludFwiKSk7XG5leHBvcnRzLmRlY29kZVhNTCA9IGdldFN0cmljdERlY29kZXIoeG1sX2pzb25fMS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGdldFN0cmljdERlY29kZXIoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xuZnVuY3Rpb24gZ2V0U3RyaWN0RGVjb2RlcihtYXApIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG1hcCkuam9pbihcInxcIik7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihtYXApO1xuICAgIGtleXMgKz0gXCJ8I1t4WF1bXFxcXGRhLWZBLUZdK3wjXFxcXGQrXCI7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMgKyBcIik7XCIsIFwiZ1wiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZSk7IH07XG59XG52YXIgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChhIDwgYiA/IDEgOiAtMSk7IH07XG5leHBvcnRzLmRlY29kZUhUTUwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGVnYWN5W2pdID09PSBrZXlzW2ldKSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiOz9cIjtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIik7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG4gICAgZnVuY3Rpb24gcmVwbGFjZXIoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpXG4gICAgICAgICAgICBzdHIgKz0gXCI7XCI7XG4gICAgICAgIHJldHVybiByZXBsYWNlKHN0cik7XG4gICAgfVxuICAgIC8vVE9ETyBjb25zaWRlciBjcmVhdGluZyBhIG1lcmdlZCBtYXBcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZXIpO1xuICAgIH07XG59KSgpO1xuZnVuY3Rpb24gZ2V0UmVwbGFjZXIobWFwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuY2hhckF0KDEpID09PSBcIiNcIikge1xuICAgICAgICAgICAgaWYgKHN0ci5jaGFyQXQoMikgPT09IFwiWFwiIHx8IHN0ci5jaGFyQXQoMikgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlSW50KHN0ci5zdWJzdHIoMyksIDE2KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigyKSwgMTApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwW3N0ci5zbGljZSgxLCAtMSldO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZGVjb2RlLmpzb25cIikpO1xuLy8gbW9kaWZpZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICBpZiAoKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgfHwgY29kZVBvaW50ID4gMHgxMGZmZmYpIHtcbiAgICAgICAgcmV0dXJuIFwiXFx1RkZGRFwiO1xuICAgIH1cbiAgICBpZiAoY29kZVBvaW50IGluIGRlY29kZV9qc29uXzEuZGVmYXVsdCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvZGVQb2ludCA9IGRlY29kZV9qc29uXzEuZGVmYXVsdFtjb2RlUG9pbnRdO1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICBpZiAoY29kZVBvaW50ID4gMHhmZmZmKSB7XG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+Pj4gMTApICYgMHgzZmYpIHwgMHhkODAwKTtcbiAgICAgICAgY29kZVBvaW50ID0gMHhkYzAwIHwgKGNvZGVQb2ludCAmIDB4M2ZmKTtcbiAgICB9XG4gICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVjb2RlQ29kZVBvaW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgeG1sX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL3htbC5qc29uXCIpKTtcbnZhciBpbnZlcnNlWE1MID0gZ2V0SW52ZXJzZU9iaih4bWxfanNvbl8xLmRlZmF1bHQpO1xudmFyIHhtbFJlcGxhY2VyID0gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2VYTUwpO1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBnZXRJbnZlcnNlKGludmVyc2VYTUwsIHhtbFJlcGxhY2VyKTtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBpbnZlcnNlSFRNTCA9IGdldEludmVyc2VPYmooZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xudmFyIGh0bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlSFRNTCk7XG5leHBvcnRzLmVuY29kZUhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGludmVyc2UsIG5hbWUpIHtcbiAgICAgICAgaW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKSB7XG4gICAgdmFyIHNpbmdsZSA9IFtdO1xuICAgIHZhciBtdWx0aXBsZSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGludmVyc2UpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgcmV0dXJuIGsubGVuZ3RoID09PSAxXG4gICAgICAgICAgICA/IC8vIEFkZCB2YWx1ZSB0byBzaW5nbGUgYXJyYXlcbiAgICAgICAgICAgICAgICBzaW5nbGUucHVzaChcIlxcXFxcIiArIGspXG4gICAgICAgICAgICA6IC8vIEFkZCB2YWx1ZSB0byBtdWx0aXBsZSBhcnJheVxuICAgICAgICAgICAgICAgIG11bHRpcGxlLnB1c2goayk7XG4gICAgfSk7XG4gICAgLy9UT0RPIGFkZCByYW5nZXNcbiAgICBtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cbnZhciByZU5vbkFTQ0lJID0gL1teXFwwLVxceDdGXS9nO1xudmFyIHJlQXN0cmFsU3ltYm9scyA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG5mdW5jdGlvbiBzaW5nbGVDaGFyUmVwbGFjZXIoYykge1xuICAgIHJldHVybiBcIiYjeFwiICsgY1xuICAgICAgICAuY2hhckNvZGVBdCgwKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC50b1VwcGVyQ2FzZSgpICsgXCI7XCI7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5mdW5jdGlvbiBhc3RyYWxSZXBsYWNlcihjLCBfKSB7XG4gICAgLy8gaHR0cDovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICB2YXIgaGlnaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgbG93ID0gYy5jaGFyQ29kZUF0KDEpO1xuICAgIHZhciBjb2RlUG9pbnQgPSAoaGlnaCAtIDB4ZDgwMCkgKiAweDQwMCArIGxvdyAtIDB4ZGMwMCArIDB4MTAwMDA7XG4gICAgcmV0dXJuIFwiJiN4XCIgKyBjb2RlUG9pbnQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gaW52ZXJzZVtuYW1lXTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlQXN0cmFsU3ltYm9scywgYXN0cmFsUmVwbGFjZXIpXG4gICAgICAgICAgICAucmVwbGFjZShyZU5vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xuICAgIH07XG59XG52YXIgcmVYbWxDaGFycyA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcbmZ1bmN0aW9uIGVzY2FwZShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGFcbiAgICAgICAgLnJlcGxhY2UocmVYbWxDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKVxuICAgICAgICAucmVwbGFjZShyZUFzdHJhbFN5bWJvbHMsIGFzdHJhbFJlcGxhY2VyKVxuICAgICAgICAucmVwbGFjZShyZU5vbkFTQ0lJLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xufVxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfMSA9IHJlcXVpcmUoXCIuL2RlY29kZVwiKTtcbnZhciBlbmNvZGVfMSA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbmZ1bmN0aW9uIGRlY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGVfMS5kZWNvZGVYTUwgOiBkZWNvZGVfMS5kZWNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZnVuY3Rpb24gZGVjb2RlU3RyaWN0KGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUxTdHJpY3QpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBkZWNvZGVTdHJpY3Q7XG5mdW5jdGlvbiBlbmNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZW5jb2RlXzEuZW5jb2RlWE1MIDogZW5jb2RlXzEuZW5jb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbnZhciBlbmNvZGVfMiA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbmV4cG9ydHMuZW5jb2RlWE1MID0gZW5jb2RlXzIuZW5jb2RlWE1MO1xuZXhwb3J0cy5lbmNvZGVIVE1MID0gZW5jb2RlXzIuZW5jb2RlSFRNTDtcbmV4cG9ydHMuZXNjYXBlID0gZW5jb2RlXzIuZXNjYXBlO1xuLy8gTGVnYWN5IGFsaWFzZXNcbmV4cG9ydHMuZW5jb2RlSFRNTDQgPSBlbmNvZGVfMi5lbmNvZGVIVE1MO1xuZXhwb3J0cy5lbmNvZGVIVE1MNSA9IGVuY29kZV8yLmVuY29kZUhUTUw7XG52YXIgZGVjb2RlXzIgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG5leHBvcnRzLmRlY29kZVhNTCA9IGRlY29kZV8yLmRlY29kZVhNTDtcbmV4cG9ydHMuZGVjb2RlSFRNTCA9IGRlY29kZV8yLmRlY29kZUhUTUw7XG5leHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0O1xuLy8gTGVnYWN5IGFsaWFzZXNcbmV4cG9ydHMuZGVjb2RlSFRNTDQgPSBkZWNvZGVfMi5kZWNvZGVIVE1MO1xuZXhwb3J0cy5kZWNvZGVIVE1MNSA9IGRlY29kZV8yLmRlY29kZUhUTUw7XG5leHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID0gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDtcbmV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPSBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0O1xuZXhwb3J0cy5kZWNvZGVYTUxTdHJpY3QgPSBkZWNvZGVfMi5kZWNvZGVYTUw7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTXVsdGlwbGV4SGFuZGxlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL011bHRpcGxleEhhbmRsZXJcIikpO1xudmFyIENvbGxlY3RpbmdIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2xsZWN0aW5nSGFuZGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2xsZWN0aW5nSGFuZGxlcihjYnMpIHtcbiAgICAgICAgaWYgKGNicyA9PT0gdm9pZCAwKSB7IGNicyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuZXZlbnRzLnB1c2goW25hbWVdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoX3RoaXMuX2Nic1tuYW1lXSlcbiAgICAgICAgICAgICAgICAoX2EgPSBfdGhpcy5fY2JzKVtuYW1lXS5hcHBseShfYSwgYXJncyk7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9jYnMgPSBjYnM7XG4gICAgICAgIF90aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbGxlY3RpbmdIYW5kbGVyLnByb3RvdHlwZS5vbnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucmVzZXQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25yZXNldCgpO1xuICAgIH07XG4gICAgQ29sbGVjdGluZ0hhbmRsZXIucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnJlc2V0KVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucmVzZXQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5ldmVudHNbaV0sIG5hbWVfMSA9IF9iWzBdLCBhcmdzID0gX2Iuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Nic1tuYW1lXzFdKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAoX2EgPSB0aGlzLl9jYnMpW25hbWVfMV0uYXBwbHkoX2EsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29sbGVjdGluZ0hhbmRsZXI7XG59KE11bHRpcGxleEhhbmRsZXJfMS5kZWZhdWx0KSk7XG5leHBvcnRzLkNvbGxlY3RpbmdIYW5kbGVyID0gQ29sbGVjdGluZ0hhbmRsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRvbWhhbmRsZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZG9taGFuZGxlclwiKSk7XG52YXIgRG9tVXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvbXV0aWxzXCIpKTtcbnZhciBQYXJzZXJfMSA9IHJlcXVpcmUoXCIuL1BhcnNlclwiKTtcbi8vVE9ETzogQ29uc3VtZSBkYXRhIGFzIGl0IGlzIGNvbWluZyBpblxudmFyIEZlZWRIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGZWVkSGFuZGxlciwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gRmVlZEhhbmRsZXIoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJvYmplY3RcIiAmJiBjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvcHRpb25zID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjYWxsYmFjaywgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGZWVkSGFuZGxlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmZWVkID0ge307XG4gICAgICAgIHZhciBmZWVkUm9vdCA9IGdldE9uZUVsZW1lbnQoaXNWYWxpZEZlZWQsIHRoaXMuZG9tKTtcbiAgICAgICAgaWYgKGZlZWRSb290KSB7XG4gICAgICAgICAgICBpZiAoZmVlZFJvb3QubmFtZSA9PT0gXCJmZWVkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRzID0gZmVlZFJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgZmVlZC50eXBlID0gXCJhdG9tXCI7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImlkXCIsIFwiaWRcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIHZhciBocmVmID0gZ2V0QXR0cmlidXRlKFwiaHJlZlwiLCBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBjaGlsZHMpKTtcbiAgICAgICAgICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgICAgICAgICAgICBmZWVkLmxpbmsgPSBocmVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiZGVzY3JpcHRpb25cIiwgXCJzdWJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZC51cGRhdGVkID0gbmV3IERhdGUodXBkYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJhdXRob3JcIiwgXCJlbWFpbFwiLCBjaGlsZHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZlZWQuaXRlbXMgPSBnZXRFbGVtZW50cyhcImVudHJ5XCIsIGNoaWxkcykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImlkXCIsIFwiaWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IGdldEF0dHJpYnV0ZShcImhyZWZcIiwgZ2V0T25lRWxlbWVudChcImxpbmtcIiwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LmxpbmsgPSBocmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGZldGNoKFwic3VtbWFyeVwiLCBjaGlsZHJlbikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKFwiY29udGVudFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcHViRGF0ZSA9IGZldGNoKFwidXBkYXRlZFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdWJEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUocHViRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcyA9IGdldE9uZUVsZW1lbnQoXCJjaGFubmVsXCIsIGZlZWRSb290LmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgZmVlZC50eXBlID0gZmVlZFJvb3QubmFtZS5zdWJzdHIoMCwgMyk7XG4gICAgICAgICAgICAgICAgZmVlZC5pZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkID0gZmV0Y2goXCJsYXN0QnVpbGREYXRlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlZC51cGRhdGVkID0gbmV3IERhdGUodXBkYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJhdXRob3JcIiwgXCJtYW5hZ2luZ0VkaXRvclwiLCBjaGlsZHMsIHRydWUpO1xuICAgICAgICAgICAgICAgIGZlZWQuaXRlbXMgPSBnZXRFbGVtZW50cyhcIml0ZW1cIiwgZmVlZFJvb3QuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImd1aWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcImxpbmtcIiwgXCJsaW5rXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHB1YkRhdGUgPSBmZXRjaChcInB1YkRhdGVcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHViRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnB1YkRhdGUgPSBuZXcgRGF0ZShwdWJEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVlZCA9IGZlZWQ7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsbGJhY2soZmVlZFJvb3QgPyBudWxsIDogRXJyb3IoXCJjb3VsZG4ndCBmaW5kIHJvb3Qgb2YgZmVlZFwiKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmVlZEhhbmRsZXI7XG59KGRvbWhhbmRsZXJfMS5kZWZhdWx0KSk7XG5leHBvcnRzLkZlZWRIYW5kbGVyID0gRmVlZEhhbmRsZXI7XG5mdW5jdGlvbiBnZXRFbGVtZW50cyh3aGF0LCB3aGVyZSkge1xuICAgIHJldHVybiBEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBnZXRPbmVFbGVtZW50KHdoYXQsIHdoZXJlKSB7XG4gICAgcmV0dXJuIERvbVV0aWxzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHdoYXQsIHdoZXJlLCB0cnVlLCAxKVswXTtcbn1cbmZ1bmN0aW9uIGZldGNoKHdoYXQsIHdoZXJlLCByZWN1cnNlKSB7XG4gICAgaWYgKHJlY3Vyc2UgPT09IHZvaWQgMCkgeyByZWN1cnNlID0gZmFsc2U7IH1cbiAgICByZXR1cm4gRG9tVXRpbHMuZ2V0VGV4dChEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgcmVjdXJzZSwgMSkpLnRyaW0oKTtcbn1cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lLCBlbGVtKSB7XG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgYXR0cmlicyA9IGVsZW0uYXR0cmlicztcbiAgICByZXR1cm4gYXR0cmlic1tuYW1lXTtcbn1cbmZ1bmN0aW9uIGFkZENvbmRpdGlvbmFsbHkob2JqLCBwcm9wLCB3aGF0LCB3aGVyZSwgcmVjdXJzZSkge1xuICAgIGlmIChyZWN1cnNlID09PSB2b2lkIDApIHsgcmVjdXJzZSA9IGZhbHNlOyB9XG4gICAgdmFyIHRtcCA9IGZldGNoKHdoYXQsIHdoZXJlLCByZWN1cnNlKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHRtcClcbiAgICAgICAgb2JqW3Byb3BdID0gdG1wO1xufVxuZnVuY3Rpb24gaXNWYWxpZEZlZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwicnNzXCIgfHwgdmFsdWUgPT09IFwiZmVlZFwiIHx8IHZhbHVlID09PSBcInJkZjpSREZcIjtcbn1cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHsgeG1sTW9kZTogdHJ1ZSB9O1xuLyoqXG4gKiBQYXJzZSBhIGZlZWQuXG4gKlxuICogQHBhcmFtIGZlZWQgVGhlIGZlZWQgdGhhdCBzaG91bGQgYmUgcGFyc2VkLCBhcyBhIHN0cmluZy5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbmFsbHksIG9wdGlvbnMgZm9yIHBhcnNpbmcuIFdoZW4gdXNpbmcgdGhpcyBvcHRpb24sIHlvdSBwcm9iYWJseSB3YW50IHRvIHNldCBgeG1sTW9kZWAgdG8gYHRydWVgLlxuICovXG5mdW5jdGlvbiBwYXJzZUZlZWQoZmVlZCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zOyB9XG4gICAgdmFyIGhhbmRsZXIgPSBuZXcgRmVlZEhhbmRsZXIob3B0aW9ucyk7XG4gICAgbmV3IFBhcnNlcl8xLlBhcnNlcihoYW5kbGVyLCBvcHRpb25zKS5lbmQoZmVlZCk7XG4gICAgcmV0dXJuIGhhbmRsZXIuZmVlZDtcbn1cbmV4cG9ydHMucGFyc2VGZWVkID0gcGFyc2VGZWVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIENhbGxzIGEgc3BlY2lmaWMgaGFuZGxlciBmdW5jdGlvbiBmb3IgYWxsIGV2ZW50cyB0aGF0IGFyZSBlbmNvdW50ZXJlZC5cbiAqXG4gKiBAcGFyYW0gZnVuYyDigJQgVGhlIGZ1bmN0aW9uIHRvIG11bHRpcGxleCBhbGwgZXZlbnRzIHRvLlxuICovXG52YXIgTXVsdGlwbGV4SGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNdWx0aXBsZXhIYW5kbGVyKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fZnVuYyA9IGZ1bmM7XG4gICAgfVxuICAgIC8qIEZvcm1hdDogZXZlbnRuYW1lOiBudW1iZXIgb2YgYXJndW1lbnRzICovXG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25hdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uYXR0cmlidXRlXCIsIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uY2RhdGFzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uY2RhdGFzdGFydFwiKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uY2RhdGFlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmNkYXRhZW5kXCIpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub250ZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9udGV4dFwiLCB0ZXh0KTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbnByb2Nlc3NpbmdpbnN0cnVjdGlvblwiLCBuYW1lLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNdWx0aXBsZXhIYW5kbGVyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25jb21tZW50XCIsIGNvbW1lbnQpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25jb21tZW50ZW5kXCIpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25jbG9zZXRhZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmNsb3NldGFnXCIsIG5hbWUpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25vcGVudGFnID0gZnVuY3Rpb24gKG5hbWUsIGF0dHJpYnMpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9ub3BlbnRhZ1wiLCBuYW1lLCBhdHRyaWJzKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9ub3BlbnRhZ25hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9mdW5jKFwib25vcGVudGFnbmFtZVwiLCBuYW1lKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9uZXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Z1bmMoXCJvbmVuZFwiKTtcbiAgICB9O1xuICAgIE11bHRpcGxleEhhbmRsZXIucHJvdG90eXBlLm9ucGFyc2VyaW5pdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9ucGFyc2VyaW5pdFwiLCBwYXJzZXIpO1xuICAgIH07XG4gICAgTXVsdGlwbGV4SGFuZGxlci5wcm90b3R5cGUub25yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZnVuYyhcIm9ucmVzZXRcIik7XG4gICAgfTtcbiAgICByZXR1cm4gTXVsdGlwbGV4SGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNdWx0aXBsZXhIYW5kbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUb2tlbml6ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ub2tlbml6ZXJcIikpO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbnZhciBmb3JtVGFncyA9IG5ldyBTZXQoW1xuICAgIFwiaW5wdXRcIixcbiAgICBcIm9wdGlvblwiLFxuICAgIFwib3B0Z3JvdXBcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJkYXRhbGlzdFwiLFxuICAgIFwidGV4dGFyZWFcIlxuXSk7XG52YXIgcFRhZyA9IG5ldyBTZXQoW1wicFwiXSk7XG52YXIgb3BlbkltcGxpZXNDbG9zZSA9IHtcbiAgICB0cjogbmV3IFNldChbXCJ0clwiLCBcInRoXCIsIFwidGRcIl0pLFxuICAgIHRoOiBuZXcgU2V0KFtcInRoXCJdKSxcbiAgICB0ZDogbmV3IFNldChbXCJ0aGVhZFwiLCBcInRoXCIsIFwidGRcIl0pLFxuICAgIGJvZHk6IG5ldyBTZXQoW1wiaGVhZFwiLCBcImxpbmtcIiwgXCJzY3JpcHRcIl0pLFxuICAgIGxpOiBuZXcgU2V0KFtcImxpXCJdKSxcbiAgICBwOiBwVGFnLFxuICAgIGgxOiBwVGFnLFxuICAgIGgyOiBwVGFnLFxuICAgIGgzOiBwVGFnLFxuICAgIGg0OiBwVGFnLFxuICAgIGg1OiBwVGFnLFxuICAgIGg2OiBwVGFnLFxuICAgIHNlbGVjdDogZm9ybVRhZ3MsXG4gICAgaW5wdXQ6IGZvcm1UYWdzLFxuICAgIG91dHB1dDogZm9ybVRhZ3MsXG4gICAgYnV0dG9uOiBmb3JtVGFncyxcbiAgICBkYXRhbGlzdDogZm9ybVRhZ3MsXG4gICAgdGV4dGFyZWE6IGZvcm1UYWdzLFxuICAgIG9wdGlvbjogbmV3IFNldChbXCJvcHRpb25cIl0pLFxuICAgIG9wdGdyb3VwOiBuZXcgU2V0KFtcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCJdKSxcbiAgICBkZDogbmV3IFNldChbXCJkdFwiLCBcImRkXCJdKSxcbiAgICBkdDogbmV3IFNldChbXCJkdFwiLCBcImRkXCJdKSxcbiAgICBhZGRyZXNzOiBwVGFnLFxuICAgIGFydGljbGU6IHBUYWcsXG4gICAgYXNpZGU6IHBUYWcsXG4gICAgYmxvY2txdW90ZTogcFRhZyxcbiAgICBkZXRhaWxzOiBwVGFnLFxuICAgIGRpdjogcFRhZyxcbiAgICBkbDogcFRhZyxcbiAgICBmaWVsZHNldDogcFRhZyxcbiAgICBmaWdjYXB0aW9uOiBwVGFnLFxuICAgIGZpZ3VyZTogcFRhZyxcbiAgICBmb290ZXI6IHBUYWcsXG4gICAgZm9ybTogcFRhZyxcbiAgICBoZWFkZXI6IHBUYWcsXG4gICAgaHI6IHBUYWcsXG4gICAgbWFpbjogcFRhZyxcbiAgICBuYXY6IHBUYWcsXG4gICAgb2w6IHBUYWcsXG4gICAgcHJlOiBwVGFnLFxuICAgIHNlY3Rpb246IHBUYWcsXG4gICAgdGFibGU6IHBUYWcsXG4gICAgdWw6IHBUYWcsXG4gICAgcnQ6IG5ldyBTZXQoW1wicnRcIiwgXCJycFwiXSksXG4gICAgcnA6IG5ldyBTZXQoW1wicnRcIiwgXCJycFwiXSksXG4gICAgdGJvZHk6IG5ldyBTZXQoW1widGhlYWRcIiwgXCJ0Ym9keVwiXSksXG4gICAgdGZvb3Q6IG5ldyBTZXQoW1widGhlYWRcIiwgXCJ0Ym9keVwiXSlcbn07XG52YXIgdm9pZEVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhcmVhXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiYXNlZm9udFwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiY29tbWFuZFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImZyYW1lXCIsXG4gICAgXCJoclwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaXNpbmRleFwiLFxuICAgIFwia2V5Z2VuXCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCJcbl0pO1xudmFyIGZvcmVpZ25Db250ZXh0RWxlbWVudHMgPSBuZXcgU2V0KFtcIm1hdGhcIiwgXCJzdmdcIl0pO1xudmFyIGh0bWxJbnRlZ3JhdGlvbkVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJtaVwiLFxuICAgIFwibW9cIixcbiAgICBcIm1uXCIsXG4gICAgXCJtc1wiLFxuICAgIFwibXRleHRcIixcbiAgICBcImFubm90YXRpb24teG1sXCIsXG4gICAgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgXCJkZXNjXCIsXG4gICAgXCJ0aXRsZVwiXG5dKTtcbnZhciByZU5hbWVFbmQgPSAvXFxzfFxcLy87XG52YXIgUGFyc2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYXJzZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGFyc2VyKGNicywgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYnZhbHVlID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgICAgICBfdGhpcy5fc3RhY2sgPSBbXTtcbiAgICAgICAgX3RoaXMuX2ZvcmVpZ25Db250ZXh0ID0gW107XG4gICAgICAgIF90aGlzLnN0YXJ0SW5kZXggPSAwO1xuICAgICAgICBfdGhpcy5lbmRJbmRleCA9IG51bGw7XG4gICAgICAgIC8vIEFsaWFzZXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIF90aGlzLnBhcnNlQ2h1bmsgPSBQYXJzZXIucHJvdG90eXBlLndyaXRlO1xuICAgICAgICBfdGhpcy5kb25lID0gUGFyc2VyLnByb3RvdHlwZS5lbmQ7XG4gICAgICAgIF90aGlzLl9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgX3RoaXMuX2NicyA9IGNicyB8fCB7fTtcbiAgICAgICAgX3RoaXMuX3RhZ25hbWUgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJ2YWx1ZSA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9hdHRyaWJzID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX3N0YWNrID0gW107XG4gICAgICAgIF90aGlzLl9mb3JlaWduQ29udGV4dCA9IFtdO1xuICAgICAgICBfdGhpcy5zdGFydEluZGV4ID0gMDtcbiAgICAgICAgX3RoaXMuZW5kSW5kZXggPSBudWxsO1xuICAgICAgICBfdGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMgPVxuICAgICAgICAgICAgXCJsb3dlckNhc2VUYWdzXCIgaW4gX3RoaXMuX29wdGlvbnNcbiAgICAgICAgICAgICAgICA/ICEhX3RoaXMuX29wdGlvbnMubG93ZXJDYXNlVGFnc1xuICAgICAgICAgICAgICAgIDogIV90aGlzLl9vcHRpb25zLnhtbE1vZGU7XG4gICAgICAgIF90aGlzLl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcyA9XG4gICAgICAgICAgICBcImxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzXCIgaW4gX3RoaXMuX29wdGlvbnNcbiAgICAgICAgICAgICAgICA/ICEhX3RoaXMuX29wdGlvbnMubG93ZXJDYXNlQXR0cmlidXRlTmFtZXNcbiAgICAgICAgICAgICAgICA6ICFfdGhpcy5fb3B0aW9ucy54bWxNb2RlO1xuICAgICAgICBfdGhpcy5fdG9rZW5pemVyID0gbmV3IChfdGhpcy5fb3B0aW9ucy5Ub2tlbml6ZXIgfHwgVG9rZW5pemVyXzEuZGVmYXVsdCkoX3RoaXMuX29wdGlvbnMsIF90aGlzKTtcbiAgICAgICAgaWYgKF90aGlzLl9jYnMub25wYXJzZXJpbml0KVxuICAgICAgICAgICAgX3RoaXMuX2Nicy5vbnBhcnNlcmluaXQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFBhcnNlci5wcm90b3R5cGUuX3VwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKGluaXRpYWxPZmZzZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90b2tlbml6ZXIuX3NlY3Rpb25TdGFydCA8PSBpbml0aWFsT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5fc2VjdGlvblN0YXJ0IC0gaW5pdGlhbE9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLmVuZEluZGV4ICsgMTtcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5nZXRBYnNvbHV0ZUluZGV4KCk7XG4gICAgfTtcbiAgICAvL1Rva2VuaXplciBldmVudCBoYW5kbGVyc1xuICAgIFBhcnNlci5wcm90b3R5cGUub250ZXh0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5lbmRJbmRleC0tO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9udGV4dClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQoZGF0YSk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9ub3BlbnRhZ25hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGFnbmFtZSA9IG5hbWU7XG4gICAgICAgIGlmICghdGhpcy5fb3B0aW9ucy54bWxNb2RlICYmIG5hbWUgaW4gb3BlbkltcGxpZXNDbG9zZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgZWwgPSB2b2lkIDA7IFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgb3BlbkltcGxpZXNDbG9zZVtuYW1lXS5oYXMoKGVsID0gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0pKTsgdGhpcy5vbmNsb3NldGFnKGVsKSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fCAhdm9pZEVsZW1lbnRzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhY2sucHVzaChuYW1lKTtcbiAgICAgICAgICAgIGlmIChmb3JlaWduQ29udGV4dEVsZW1lbnRzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChodG1sSW50ZWdyYXRpb25FbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JlaWduQ29udGV4dC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2JzLm9ub3BlbnRhZ25hbWUpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25vcGVudGFnbmFtZShuYW1lKTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbm9wZW50YWcpXG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJzID0ge307XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9ub3BlbnRhZ2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG4gICAgICAgIGlmICh0aGlzLl9hdHRyaWJzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9ub3BlbnRhZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbm9wZW50YWcodGhpcy5fdGFnbmFtZSwgdGhpcy5fYXR0cmlicyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hdHRyaWJzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJlxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcgJiZcbiAgICAgICAgICAgIHZvaWRFbGVtZW50cy5oYXModGhpcy5fdGFnbmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3RhZ25hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RhZ25hbWUgPSBcIlwiO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmNsb3NldGFnID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG4gICAgICAgIGlmICh0aGlzLl9sb3dlckNhc2VUYWdOYW1lcykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yZWlnbkNvbnRleHRFbGVtZW50cy5oYXMobmFtZSkgfHxcbiAgICAgICAgICAgIGh0bWxJbnRlZ3JhdGlvbkVsZW1lbnRzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fZm9yZWlnbkNvbnRleHQucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N0YWNrLmxlbmd0aCAmJlxuICAgICAgICAgICAgKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fCAhdm9pZEVsZW1lbnRzLmhhcyhuYW1lKSkpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLl9zdGFjay5sYXN0SW5kZXhPZihuYW1lKTtcbiAgICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNsb3NldGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuX3N0YWNrLmxlbmd0aCAtIHBvcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAocG9zLS0pXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl9zdGFjay5wb3AoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhY2subGVuZ3RoID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCJwXCIgJiYgIXRoaXMuX29wdGlvbnMueG1sTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25vcGVudGFnbmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fb3B0aW9ucy54bWxNb2RlICYmIChuYW1lID09PSBcImJyXCIgfHwgbmFtZSA9PT0gXCJwXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm9ub3BlbnRhZ25hbWUobmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbnNlbGZjbG9zaW5ndGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnJlY29nbml6ZVNlbGZDbG9zaW5nIHx8XG4gICAgICAgICAgICB0aGlzLl9mb3JlaWduQ29udGV4dFt0aGlzLl9mb3JlaWduQ29udGV4dC5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VDdXJyZW50VGFnKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9ub3BlbnRhZ2VuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLl9jbG9zZUN1cnJlbnRUYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5fdGFnbmFtZTtcbiAgICAgICAgdGhpcy5vbm9wZW50YWdlbmQoKTtcbiAgICAgICAgLy9zZWxmLWNsb3NpbmcgdGFncyB3aWxsIGJlIG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgIC8vKGNoZWFwZXIgY2hlY2sgdGhhbiBpbiBvbmNsb3NldGFnKVxuICAgICAgICBpZiAodGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoIC0gMV0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25hdHRyaWJuYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dHJpYm5hbWUgPSBuYW1lO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmF0dHJpYmRhdGEgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXR0cmlidmFsdWUgKz0gdmFsdWU7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uYXR0cmlidXRlKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmlidXRlKHRoaXMuX2F0dHJpYm5hbWUsIHRoaXMuX2F0dHJpYnZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuX2F0dHJpYnMgJiZcbiAgICAgICAgICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5fYXR0cmlicywgdGhpcy5fYXR0cmlibmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0dHJpYnNbdGhpcy5fYXR0cmlibmFtZV0gPSB0aGlzLl9hdHRyaWJ2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdHRyaWJuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5fZ2V0SW5zdHJ1Y3Rpb25OYW1lID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpZHggPSB2YWx1ZS5zZWFyY2gocmVOYW1lRW5kKTtcbiAgICAgICAgdmFyIG5hbWUgPSBpZHggPCAwID8gdmFsdWUgOiB2YWx1ZS5zdWJzdHIoMCwgaWR4KTtcbiAgICAgICAgaWYgKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbmRlY2xhcmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0aGlzLl9nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKFwiIVwiICsgbmFtZV8xLCBcIiFcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8yID0gdGhpcy5fZ2V0SW5zdHJ1Y3Rpb25OYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbihcIj9cIiArIG5hbWVfMiwgXCI/XCIgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25jb21tZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDQpO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uY29tbWVudClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNvbW1lbnQodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uY29tbWVudGVuZClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNvbW1lbnRlbmQoKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25jZGF0YSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbigxKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fCB0aGlzLl9vcHRpb25zLnJlY29nbml6ZUNEQVRBKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2RhdGFzdGFydClcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25jZGF0YXN0YXJ0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzLm9udGV4dClcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25jZGF0YWVuZClcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub25jZGF0YWVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbmNvbW1lbnQoXCJbQ0RBVEFbXCIgKyB2YWx1ZSArIFwiXV1cIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmVycm9yKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZXJyb3IoZXJyKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX3N0YWNrLmxlbmd0aDsgaSA+IDA7IHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3N0YWNrWy0taV0pKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2JzLm9uZW5kKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZW5kKCk7XG4gICAgfTtcbiAgICAvL1Jlc2V0cyB0aGUgcGFyc2VyIHRvIGEgYmxhbmsgc3RhdGUsIHJlYWR5IHRvIHBhcnNlIGEgbmV3IEhUTUwgZG9jdW1lbnRcbiAgICBQYXJzZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9ucmVzZXQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25yZXNldCgpO1xuICAgICAgICB0aGlzLl90b2tlbml6ZXIucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLl9hdHRyaWJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3RhY2sgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbnBhcnNlcmluaXQpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25wYXJzZXJpbml0KHRoaXMpO1xuICAgIH07XG4gICAgLy9QYXJzZXMgYSBjb21wbGV0ZSBIVE1MIGRvY3VtZW50IGFuZCBwdXNoZXMgaXQgdG8gdGhlIGhhbmRsZXJcbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlQ29tcGxldGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZW5kKGRhdGEpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICB0aGlzLl90b2tlbml6ZXIud3JpdGUoY2h1bmspO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgdGhpcy5fdG9rZW5pemVyLmVuZChjaHVuayk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl90b2tlbml6ZXIucGF1c2UoKTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl90b2tlbml6ZXIucmVzdW1lKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUGFyc2VyO1xufShldmVudHNfMS5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuUGFyc2VyID0gUGFyc2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlX2NvZGVwb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbnRpdGllcy9saWIvZGVjb2RlX2NvZGVwb2ludFwiKSk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbnRpdGllcy9saWIvbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBsZWdhY3lfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbnRpdGllcy9saWIvbWFwcy9sZWdhY3kuanNvblwiKSk7XG52YXIgeG1sX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW50aXRpZXMvbGliL21hcHMveG1sLmpzb25cIikpO1xuZnVuY3Rpb24gd2hpdGVzcGFjZShjKSB7XG4gICAgcmV0dXJuIGMgPT09IFwiIFwiIHx8IGMgPT09IFwiXFxuXCIgfHwgYyA9PT0gXCJcXHRcIiB8fCBjID09PSBcIlxcZlwiIHx8IGMgPT09IFwiXFxyXCI7XG59XG5mdW5jdGlvbiBpZkVsc2VTdGF0ZSh1cHBlciwgU1VDQ0VTUywgRkFJTFVSRSkge1xuICAgIHZhciBsb3dlciA9IHVwcGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHVwcGVyID09PSBsb3dlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQsIGMpIHtcbiAgICAgICAgICAgIGlmIChjID09PSBsb3dlcikge1xuICAgICAgICAgICAgICAgIHQuX3N0YXRlID0gU1VDQ0VTUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuX3N0YXRlID0gRkFJTFVSRTtcbiAgICAgICAgICAgICAgICB0Ll9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0LCBjKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gbG93ZXIgfHwgYyA9PT0gdXBwZXIpIHtcbiAgICAgICAgICAgICAgICB0Ll9zdGF0ZSA9IFNVQ0NFU1M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0Ll9zdGF0ZSA9IEZBSUxVUkU7XG4gICAgICAgICAgICAgICAgdC5faW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKHVwcGVyLCBORVhUX1NUQVRFKSB7XG4gICAgdmFyIGxvd2VyID0gdXBwZXIudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHQsIGMpIHtcbiAgICAgICAgaWYgKGMgPT09IGxvd2VyIHx8IGMgPT09IHVwcGVyKSB7XG4gICAgICAgICAgICB0Ll9zdGF0ZSA9IE5FWFRfU1RBVEU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0Ll9zdGF0ZSA9IDMgLyogSW5UYWdOYW1lICovO1xuICAgICAgICAgICAgdC5faW5kZXgtLTsgLy9jb25zdW1lIHRoZSB0b2tlbiBhZ2FpblxuICAgICAgICB9XG4gICAgfTtcbn1cbnZhciBzdGF0ZUJlZm9yZUNkYXRhMSA9IGlmRWxzZVN0YXRlKFwiQ1wiLCAyMyAvKiBCZWZvcmVDZGF0YTIgKi8sIDE2IC8qIEluRGVjbGFyYXRpb24gKi8pO1xudmFyIHN0YXRlQmVmb3JlQ2RhdGEyID0gaWZFbHNlU3RhdGUoXCJEXCIsIDI0IC8qIEJlZm9yZUNkYXRhMyAqLywgMTYgLyogSW5EZWNsYXJhdGlvbiAqLyk7XG52YXIgc3RhdGVCZWZvcmVDZGF0YTMgPSBpZkVsc2VTdGF0ZShcIkFcIiwgMjUgLyogQmVmb3JlQ2RhdGE0ICovLCAxNiAvKiBJbkRlY2xhcmF0aW9uICovKTtcbnZhciBzdGF0ZUJlZm9yZUNkYXRhNCA9IGlmRWxzZVN0YXRlKFwiVFwiLCAyNiAvKiBCZWZvcmVDZGF0YTUgKi8sIDE2IC8qIEluRGVjbGFyYXRpb24gKi8pO1xudmFyIHN0YXRlQmVmb3JlQ2RhdGE1ID0gaWZFbHNlU3RhdGUoXCJBXCIsIDI3IC8qIEJlZm9yZUNkYXRhNiAqLywgMTYgLyogSW5EZWNsYXJhdGlvbiAqLyk7XG52YXIgc3RhdGVCZWZvcmVTY3JpcHQxID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIlJcIiwgMzQgLyogQmVmb3JlU2NyaXB0MiAqLyk7XG52YXIgc3RhdGVCZWZvcmVTY3JpcHQyID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIklcIiwgMzUgLyogQmVmb3JlU2NyaXB0MyAqLyk7XG52YXIgc3RhdGVCZWZvcmVTY3JpcHQzID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIlBcIiwgMzYgLyogQmVmb3JlU2NyaXB0NCAqLyk7XG52YXIgc3RhdGVCZWZvcmVTY3JpcHQ0ID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIlRcIiwgMzcgLyogQmVmb3JlU2NyaXB0NSAqLyk7XG52YXIgc3RhdGVBZnRlclNjcmlwdDEgPSBpZkVsc2VTdGF0ZShcIlJcIiwgMzkgLyogQWZ0ZXJTY3JpcHQyICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTY3JpcHQyID0gaWZFbHNlU3RhdGUoXCJJXCIsIDQwIC8qIEFmdGVyU2NyaXB0MyAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUFmdGVyU2NyaXB0MyA9IGlmRWxzZVN0YXRlKFwiUFwiLCA0MSAvKiBBZnRlclNjcmlwdDQgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVBZnRlclNjcmlwdDQgPSBpZkVsc2VTdGF0ZShcIlRcIiwgNDIgLyogQWZ0ZXJTY3JpcHQ1ICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQmVmb3JlU3R5bGUxID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcIllcIiwgNDQgLyogQmVmb3JlU3R5bGUyICovKTtcbnZhciBzdGF0ZUJlZm9yZVN0eWxlMiA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXCJMXCIsIDQ1IC8qIEJlZm9yZVN0eWxlMyAqLyk7XG52YXIgc3RhdGVCZWZvcmVTdHlsZTMgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFwiRVwiLCA0NiAvKiBCZWZvcmVTdHlsZTQgKi8pO1xudmFyIHN0YXRlQWZ0ZXJTdHlsZTEgPSBpZkVsc2VTdGF0ZShcIllcIiwgNDggLyogQWZ0ZXJTdHlsZTIgKi8sIDEgLyogVGV4dCAqLyk7XG52YXIgc3RhdGVBZnRlclN0eWxlMiA9IGlmRWxzZVN0YXRlKFwiTFwiLCA0OSAvKiBBZnRlclN0eWxlMyAqLywgMSAvKiBUZXh0ICovKTtcbnZhciBzdGF0ZUFmdGVyU3R5bGUzID0gaWZFbHNlU3RhdGUoXCJFXCIsIDUwIC8qIEFmdGVyU3R5bGU0ICovLCAxIC8qIFRleHQgKi8pO1xudmFyIHN0YXRlQmVmb3JlRW50aXR5ID0gaWZFbHNlU3RhdGUoXCIjXCIsIDUyIC8qIEJlZm9yZU51bWVyaWNFbnRpdHkgKi8sIDUzIC8qIEluTmFtZWRFbnRpdHkgKi8pO1xudmFyIHN0YXRlQmVmb3JlTnVtZXJpY0VudGl0eSA9IGlmRWxzZVN0YXRlKFwiWFwiLCA1NSAvKiBJbkhleEVudGl0eSAqLywgNTQgLyogSW5OdW1lcmljRW50aXR5ICovKTtcbnZhciBUb2tlbml6ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9rZW5pemVyKG9wdGlvbnMsIGNicykge1xuICAgICAgICAvKiogVGhlIGN1cnJlbnQgc3RhdGUgdGhlIHRva2VuaXplciBpcyBpbi4gKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIC8qKiBUaGUgcmVhZCBidWZmZXIuICovXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgIC8qKiBUaGUgYmVnaW5uaW5nIG9mIHRoZSBzZWN0aW9uIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIHJlYWQuICovXG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgIC8qKiBUaGUgaW5kZXggd2l0aGluIHRoZSBidWZmZXIgdGhhdCB3ZSBhcmUgY3VycmVudGx5IGxvb2tpbmcgYXQuICovXG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERhdGEgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgYnVmZmVyIG9jY2FzaW9uYWxseS5cbiAgICAgICAgICogYF9idWZmZXJPZmZzZXRgIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IGNoYXJhY3RlcnMgaGF2ZSBiZWVuIHJlbW92ZWQsIHRvIG1ha2Ugc3VyZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBpcyBhY2N1cmF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCA9IDA7XG4gICAgICAgIC8qKiBTb21lIGJlaGF2aW9yLCBlZy4gd2hlbiBkZWNvZGluZyBlbnRpdGllcywgaXMgZG9uZSB3aGlsZSB3ZSBhcmUgaW4gYW5vdGhlciBzdGF0ZS4gVGhpcyBrZWVwcyB0cmFjayBvZiB0aGUgb3RoZXIgc3RhdGUgdHlwZS4gKi9cbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAvKiogRm9yIHNwZWNpYWwgcGFyc2luZyBiZWhhdmlvciBpbnNpZGUgb2Ygc2NyaXB0IGFuZCBzdHlsZSB0YWdzLiAqL1xuICAgICAgICB0aGlzLl9zcGVjaWFsID0gMSAvKiBOb25lICovO1xuICAgICAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRva2VuaXplciBoYXMgYmVlbiBwYXVzZWQuICovXG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHRva2VuaXplciBoYXMgZmluaXNoZWQgcnVubmluZyAvIGAuZW5kYCBoYXMgYmVlbiBjYWxsZWQuICovXG4gICAgICAgIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NicyA9IGNicztcbiAgICAgICAgdGhpcy5feG1sTW9kZSA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy54bWxNb2RlKTtcbiAgICAgICAgdGhpcy5fZGVjb2RlRW50aXRpZXMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuZGVjb2RlRW50aXRpZXMpO1xuICAgIH1cbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIHRoaXMuX3NwZWNpYWwgPSAxIC8qIE5vbmUgKi87XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVUZXh0ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPFwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPiB0aGlzLl9zZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDIgLyogQmVmb3JlVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmXG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsID09PSAxIC8qIE5vbmUgKi8gJiZcbiAgICAgICAgICAgIGMgPT09IFwiJlwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPiB0aGlzLl9zZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDUxIC8qIEJlZm9yZUVudGl0eSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVRhZ05hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNSAvKiBCZWZvcmVDbG9zaW5nVGFnTmFtZSAqLztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI+XCIgfHxcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgIT09IDEgLyogTm9uZSAqLyB8fFxuICAgICAgICAgICAgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCIhXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTUgLyogQmVmb3JlRGVjbGFyYXRpb24gKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTcgLyogSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9XG4gICAgICAgICAgICAgICAgIXRoaXMuX3htbE1vZGUgJiYgKGMgPT09IFwic1wiIHx8IGMgPT09IFwiU1wiKVxuICAgICAgICAgICAgICAgICAgICA/IDMxIC8qIEJlZm9yZVNwZWNpYWwgKi9cbiAgICAgICAgICAgICAgICAgICAgOiAzIC8qIEluVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluVGFnTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbm9wZW50YWduYW1lXCIpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmICh3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3BlY2lhbCAhPT0gMSAvKiBOb25lICovKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gXCJzXCIgfHwgYyA9PT0gXCJTXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDMyIC8qIEJlZm9yZVNwZWNpYWxFbmQgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA2IC8qIEluQ2xvc2luZ1RhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkNsb3NlaW5nVGFnTmFtZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmNsb3NldGFnXCIpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA3IC8qIEFmdGVyQ2xvc2luZ1RhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ2xvc2VpbmdUYWdOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy9za2lwIGV2ZXJ5dGhpbmcgdW50aWwgXCI+XCJcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25vcGVudGFnZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBcIi9cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA0IC8qIEluU2VsZkNsb3NpbmdUYWcgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOSAvKiBJbkF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblNlbGZDbG9zaW5nVGFnID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25zZWxmY2xvc2luZ3RhZygpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI9XCIgfHwgYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmlibmFtZSh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEwIC8qIEFmdGVyQXR0cmlidXRlTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJBdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDExIC8qIEJlZm9yZUF0dHJpYnV0ZVZhbHVlICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmliZW5kKCk7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDkgLyogSW5BdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxMiAvKiBJbkF0dHJpYnV0ZVZhbHVlRHEgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCInXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTMgLyogSW5BdHRyaWJ1dGVWYWx1ZVNxICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE0IC8qIEluQXR0cmlidXRlVmFsdWVOcSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9yZWNvbnN1bWUgdG9rZW5cbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVzID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09ICdcIicpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gXCImXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA1MSAvKiBCZWZvcmVFbnRpdHkgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gOCAvKiBCZWZvcmVBdHRyaWJ1dGVOYW1lICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNTEgLyogQmVmb3JlRW50aXR5ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKHdoaXRlc3BhY2UoYykgfHwgYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgICAgICB0aGlzLl9iYXNlU3RhdGUgPSB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNTEgLyogQmVmb3JlRW50aXR5ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlRGVjbGFyYXRpb24gPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9XG4gICAgICAgICAgICBjID09PSBcIltcIlxuICAgICAgICAgICAgICAgID8gMjIgLyogQmVmb3JlQ2RhdGExICovXG4gICAgICAgICAgICAgICAgOiBjID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDE4IC8qIEJlZm9yZUNvbW1lbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgOiAxNiAvKiBJbkRlY2xhcmF0aW9uICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkRlY2xhcmF0aW9uID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25kZWNsYXJhdGlvbih0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbih0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ29tbWVudCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIi1cIikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxOSAvKiBJbkNvbW1lbnQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE2IC8qIEluRGVjbGFyYXRpb24gKi87XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5Db21tZW50ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiLVwiKVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyMCAvKiBBZnRlckNvbW1lbnQxICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNvbW1lbnQxID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiLVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDIxIC8qIEFmdGVyQ29tbWVudDIgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE5IC8qIEluQ29tbWVudCAqLztcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNvbW1lbnQyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgICAgICAvL3JlbW92ZSAyIHRyYWlsaW5nIGNoYXJzXG4gICAgICAgICAgICB0aGlzLl9jYnMub25jb21tZW50KHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgIT09IFwiLVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDE5IC8qIEluQ29tbWVudCAqLztcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlOiBzdGF5IGluIEFGVEVSX0NPTU1FTlRfMiAoYC0tLT5gKVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTYgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCJbXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjggLyogSW5DZGF0YSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMTYgLyogSW5EZWNsYXJhdGlvbiAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DZGF0YSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIl1cIilcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjkgLyogQWZ0ZXJDZGF0YTEgKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ2RhdGExID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiXVwiKVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAzMCAvKiBBZnRlckNkYXRhMiAqLztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAyOCAvKiBJbkNkYXRhICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckNkYXRhMiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICAgICAgLy9yZW1vdmUgMiB0cmFpbGluZyBjaGFyc1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGEodGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQsIHRoaXMuX2luZGV4IC0gMikpO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyAhPT0gXCJdXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMjggLyogSW5DZGF0YSAqLztcbiAgICAgICAgfVxuICAgICAgICAvL2Vsc2U6IHN0YXkgaW4gQUZURVJfQ0RBVEFfMiAoYF1dXT5gKVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTcGVjaWFsID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiY1wiIHx8IGMgPT09IFwiQ1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDMzIC8qIEJlZm9yZVNjcmlwdDEgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJUXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNDMgLyogQmVmb3JlU3R5bGUxICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAzIC8qIEluVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTcGVjaWFsRW5kID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NwZWNpYWwgPT09IDIgLyogU2NyaXB0ICovICYmIChjID09PSBcImNcIiB8fCBjID09PSBcIkNcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMzggLyogQWZ0ZXJTY3JpcHQxICovO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NwZWNpYWwgPT09IDMgLyogU3R5bGUgKi8gJiZcbiAgICAgICAgICAgIChjID09PSBcInRcIiB8fCBjID09PSBcIlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gNDcgLyogQWZ0ZXJTdHlsZTEgKi87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAxIC8qIFRleHQgKi87XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDIgLyogU2NyaXB0ICovO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gMyAvKiBJblRhZ05hbWUgKi87XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vY29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQ1ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwZWNpYWwgPSAxIC8qIE5vbmUgKi87XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDYgLyogSW5DbG9zaW5nVGFnTmFtZSAqLztcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4IC0gNjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gMSAvKiBUZXh0ICovO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTdHlsZTQgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5fc3BlY2lhbCA9IDMgLyogU3R5bGUgKi87XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSAzIC8qIEluVGFnTmFtZSAqLztcbiAgICAgICAgdGhpcy5faW5kZXgtLTsgLy9jb25zdW1lIHRoZSB0b2tlbiBhZ2FpblxuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclN0eWxlNCA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGVjaWFsID0gMSAvKiBOb25lICovO1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSA2IC8qIEluQ2xvc2luZ1RhZ05hbWUgKi87XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCAtIDU7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tOyAvL3JlY29uc3VtZSB0aGUgdG9rZW5cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IDEgLyogVGV4dCAqLztcbiAgICB9O1xuICAgIC8vZm9yIGVudGl0aWVzIHRlcm1pbmF0ZWQgd2l0aCBhIHNlbWljb2xvblxuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vb2Zmc2V0ID0gMVxuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5fYnVmZmVyLnN1YnN0cmluZyh0aGlzLl9zZWN0aW9uU3RhcnQgKyAxLCB0aGlzLl9pbmRleCksIG1hcCA9IHRoaXMuX3htbE1vZGUgPyB4bWxfanNvbl8xLmRlZmF1bHQgOiBlbnRpdGllc19qc29uXzEuZGVmYXVsdDtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCBlbnRpdHkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXRQYXJ0aWFsKG1hcFtlbnRpdHldKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vcGFyc2VzIGxlZ2FjeSBlbnRpdGllcyAod2l0aG91dCB0cmFpbGluZyBzZW1pY29sb24pXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2VMZWdhY3lFbnRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuX3NlY3Rpb25TdGFydCArIDE7XG4gICAgICAgIHZhciBsaW1pdCA9IHRoaXMuX2luZGV4IC0gc3RhcnQ7XG4gICAgICAgIGlmIChsaW1pdCA+IDYpXG4gICAgICAgICAgICBsaW1pdCA9IDY7IC8vIFRoZSBtYXggbGVuZ3RoIG9mIGxlZ2FjeSBlbnRpdGllcyBpcyA2XG4gICAgICAgIHdoaWxlIChsaW1pdCA+PSAyKSB7XG4gICAgICAgICAgICAvLyBUaGUgbWluIGxlbmd0aCBvZiBsZWdhY3kgZW50aXRpZXMgaXMgMlxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHIoc3RhcnQsIGxpbWl0KTtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGVnYWN5X2pzb25fMS5kZWZhdWx0LCBlbnRpdHkpKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXRQYXJ0aWFsKGxlZ2FjeV9qc29uXzEuZGVmYXVsdFtlbnRpdHldKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgKz0gbGltaXQgKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbWl0LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5OYW1lZEVudGl0eSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChjID09PSBcIjtcIikge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCArIDEgPCB0aGlzLl9pbmRleCAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoYyA8IFwiYVwiIHx8IGMgPiBcInpcIikgJiZcbiAgICAgICAgICAgIChjIDwgXCJBXCIgfHwgYyA+IFwiWlwiKSAmJlxuICAgICAgICAgICAgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5feG1sTW9kZSB8fCB0aGlzLl9zZWN0aW9uU3RhcnQgKyAxID09PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fYmFzZVN0YXRlICE9PSAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoYyAhPT0gXCI9XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2RlY29kZU51bWVyaWNFbnRpdHkgPSBmdW5jdGlvbiAob2Zmc2V0LCBiYXNlKSB7XG4gICAgICAgIHZhciBzZWN0aW9uU3RhcnQgPSB0aGlzLl9zZWN0aW9uU3RhcnQgKyBvZmZzZXQ7XG4gICAgICAgIGlmIChzZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAvL3BhcnNlIGVudGl0eVxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcoc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCk7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoZW50aXR5LCBiYXNlKTtcbiAgICAgICAgICAgIHRoaXMuX2VtaXRQYXJ0aWFsKGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlZCkpO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQtLTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5OdW1lcmljRW50aXR5ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiO1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluSGV4RW50aXR5ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiO1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjIDwgXCJhXCIgfHwgYyA+IFwiZlwiKSAmJlxuICAgICAgICAgICAgKGMgPCBcIkFcIiB8fCBjID4gXCJGXCIpICYmXG4gICAgICAgICAgICAoYyA8IFwiMFwiIHx8IGMgPiBcIjlcIikpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMywgMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl9iYXNlU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlck9mZnNldCArPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ID09PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIC8vdGhlIHNlY3Rpb24ganVzdCBzdGFydGVkXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgZXZlcnl0aGluZyB1bm5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCAtPSB0aGlzLl9zZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fYnVmZmVyT2Zmc2V0ICs9IHRoaXMuX3NlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vVE9ETyBtYWtlIGV2ZW50cyBjb25kaXRpb25hbFxuICAgIFRva2VuaXplci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgaWYgKHRoaXMuX2VuZGVkKVxuICAgICAgICAgICAgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCIud3JpdGUoKSBhZnRlciBkb25lIVwiKSk7XG4gICAgICAgIHRoaXMuX2J1ZmZlciArPSBjaHVuaztcbiAgICAgICAgdGhpcy5fcGFyc2UoKTtcbiAgICB9O1xuICAgIC8vIEl0ZXJhdGVzIHRocm91Z2ggdGhlIGJ1ZmZlciwgY2FsbGluZyB0aGUgZnVuY3Rpb24gY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgICAvLyBTdGF0ZXMgdGhhdCBhcmUgbW9yZSBsaWtlbHkgdG8gYmUgaGl0IGFyZSBoaWdoZXIgdXAsIGFzIGEgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuXG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fcGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9pbmRleCA8IHRoaXMuX2J1ZmZlci5sZW5ndGggJiYgdGhpcy5fcnVubmluZykge1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLl9idWZmZXIuY2hhckF0KHRoaXMuX2luZGV4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVUZXh0KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDEyIC8qIEluQXR0cmlidXRlVmFsdWVEcSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZURvdWJsZVF1b3RlcyhjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA5IC8qIEluQXR0cmlidXRlTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE5IC8qIEluQ29tbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5Db21tZW50KGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDggLyogQmVmb3JlQXR0cmlidXRlTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQXR0cmlidXRlTmFtZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzIC8qIEluVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5UYWdOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDYgLyogSW5DbG9zaW5nVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMiAvKiBCZWZvcmVUYWdOYW1lICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVUYWdOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDEwIC8qIEFmdGVyQXR0cmlidXRlTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJBdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDEzIC8qIEluQXR0cmlidXRlVmFsdWVTcSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZVNpbmdsZVF1b3RlcyhjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxMSAvKiBCZWZvcmVBdHRyaWJ1dGVWYWx1ZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQXR0cmlidXRlVmFsdWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNSAvKiBCZWZvcmVDbG9zaW5nVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2xvc2VpbmdUYWdOYW1lKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDcgLyogQWZ0ZXJDbG9zaW5nVGFnTmFtZSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzEgLyogQmVmb3JlU3BlY2lhbCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3BlY2lhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyMCAvKiBBZnRlckNvbW1lbnQxICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNvbW1lbnQxKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE0IC8qIEluQXR0cmlidXRlVmFsdWVOcSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQgLyogSW5TZWxmQ2xvc2luZ1RhZyAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5TZWxmQ2xvc2luZ1RhZyhjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAxNiAvKiBJbkRlY2xhcmF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkRlY2xhcmF0aW9uKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE1IC8qIEJlZm9yZURlY2xhcmF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVEZWNsYXJhdGlvbihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyMSAvKiBBZnRlckNvbW1lbnQyICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNvbW1lbnQyKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDE4IC8qIEJlZm9yZUNvbW1lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNvbW1lbnQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzIgLyogQmVmb3JlU3BlY2lhbEVuZCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3BlY2lhbEVuZChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzOCAvKiBBZnRlclNjcmlwdDEgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU2NyaXB0MSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzOSAvKiBBZnRlclNjcmlwdDIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU2NyaXB0Mih0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0MCAvKiBBZnRlclNjcmlwdDMgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU2NyaXB0Myh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzMyAvKiBCZWZvcmVTY3JpcHQxICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTY3JpcHQxKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM0IC8qIEJlZm9yZVNjcmlwdDIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVNjcmlwdDIodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMzUgLyogQmVmb3JlU2NyaXB0MyAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlU2NyaXB0Myh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAzNiAvKiBCZWZvcmVTY3JpcHQ0ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTY3JpcHQ0KHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDM3IC8qIEJlZm9yZVNjcmlwdDUgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDEgLyogQWZ0ZXJTY3JpcHQ0ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclNjcmlwdDQodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDIgLyogQWZ0ZXJTY3JpcHQ1ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclNjcmlwdDUoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDMgLyogQmVmb3JlU3R5bGUxICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVTdHlsZTEodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjggLyogSW5DZGF0YSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5DZGF0YShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0NCAvKiBCZWZvcmVTdHlsZTIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVN0eWxlMih0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0NSAvKiBCZWZvcmVTdHlsZTMgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZVN0eWxlMyh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0NiAvKiBCZWZvcmVTdHlsZTQgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVN0eWxlNChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA0NyAvKiBBZnRlclN0eWxlMSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQWZ0ZXJTdHlsZTEodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNDggLyogQWZ0ZXJTdHlsZTIgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUFmdGVyU3R5bGUyKHRoaXMsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDQ5IC8qIEFmdGVyU3R5bGUzICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVBZnRlclN0eWxlMyh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1MCAvKiBBZnRlclN0eWxlNCAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTdHlsZTQoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTcgLyogSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluUHJvY2Vzc2luZ0luc3RydWN0aW9uKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUzIC8qIEluTmFtZWRFbnRpdHkgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUluTmFtZWRFbnRpdHkoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjIgLyogQmVmb3JlQ2RhdGExICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVDZGF0YTEodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTEgLyogQmVmb3JlRW50aXR5ICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVFbnRpdHkodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjMgLyogQmVmb3JlQ2RhdGEyICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVDZGF0YTIodGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjQgLyogQmVmb3JlQ2RhdGEzICovKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVCZWZvcmVDZGF0YTModGhpcywgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMjkgLyogQWZ0ZXJDZGF0YTEgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyQ2RhdGExKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDMwIC8qIEFmdGVyQ2RhdGEyICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNkYXRhMihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyNSAvKiBCZWZvcmVDZGF0YTQgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUNkYXRhNCh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyNiAvKiBCZWZvcmVDZGF0YTUgKi8pIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUJlZm9yZUNkYXRhNSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSAyNyAvKiBCZWZvcmVDZGF0YTYgKi8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhNihjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1NSAvKiBJbkhleEVudGl0eSAqLykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5IZXhFbnRpdHkoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTQgLyogSW5OdW1lcmljRW50aXR5ICovKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVJbk51bWVyaWNFbnRpdHkoYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTIgLyogQmVmb3JlTnVtZXJpY0VudGl0eSAqLykge1xuICAgICAgICAgICAgICAgIHN0YXRlQmVmb3JlTnVtZXJpY0VudGl0eSh0aGlzLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVycm9yKEVycm9yKFwidW5rbm93biBfc3RhdGVcIiksIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5faW5kZXggPCB0aGlzLl9idWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9lbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIGlmICh0aGlzLl9lbmRlZClcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVycm9yKEVycm9yKFwiLmVuZCgpIGFmdGVyIGRvbmUhXCIpKTtcbiAgICAgICAgaWYgKGNodW5rKVxuICAgICAgICAgICAgdGhpcy53cml0ZShjaHVuayk7XG4gICAgICAgIHRoaXMuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX3J1bm5pbmcpXG4gICAgICAgICAgICB0aGlzLl9maW5pc2goKTtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9pZiB0aGVyZSBpcyByZW1haW5pbmcgZGF0YSwgZW1pdCBpdCBpbiBhIHJlYXNvbmFibGUgd2F5XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2JzLm9uZW5kKCk7XG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLl9oYW5kbGVUcmFpbGluZ0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpO1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUgPT09IDI4IC8qIEluQ2RhdGEgKi8gfHxcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSAyOSAvKiBBZnRlckNkYXRhMSAqLyB8fFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPT09IDMwIC8qIEFmdGVyQ2RhdGEyICovKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25jZGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gMTkgLyogSW5Db21tZW50ICovIHx8XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9PT0gMjAgLyogQWZ0ZXJDb21tZW50MSAqLyB8fFxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPT09IDIxIC8qIEFmdGVyQ29tbWVudDIgKi8pIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNvbW1lbnQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IDUzIC8qIEluTmFtZWRFbnRpdHkgKi8gJiYgIXRoaXMuX3htbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gNTQgLyogSW5OdW1lcmljRW50aXR5ICovICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWN0aW9uU3RhcnQgPCB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSA1NSAvKiBJbkhleEVudGl0eSAqLyAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVUcmFpbGluZ0RhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdGF0ZSAhPT0gMyAvKiBJblRhZ05hbWUgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSA4IC8qIEJlZm9yZUF0dHJpYnV0ZU5hbWUgKi8gJiZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlICE9PSAxMSAvKiBCZWZvcmVBdHRyaWJ1dGVWYWx1ZSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDEwIC8qIEFmdGVyQXR0cmlidXRlTmFtZSAqLyAmJlxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgIT09IDkgLyogSW5BdHRyaWJ1dGVOYW1lICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gMTMgLyogSW5BdHRyaWJ1dGVWYWx1ZVNxICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gMTIgLyogSW5BdHRyaWJ1dGVWYWx1ZURxICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gMTQgLyogSW5BdHRyaWJ1dGVWYWx1ZU5xICovICYmXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gNiAvKiBJbkNsb3NpbmdUYWdOYW1lICovKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vZWxzZSwgaWdub3JlIHJlbWFpbmluZyBkYXRhXG4gICAgICAgIC8vVE9ETyBhZGQgYSB3YXkgdG8gcmVtb3ZlIGN1cnJlbnQgdGFnXG4gICAgfTtcbiAgICBUb2tlbml6ZXIucHJvdG90eXBlLmdldEFic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJPZmZzZXQgKyB0aGlzLl9pbmRleDtcbiAgICB9O1xuICAgIFRva2VuaXplci5wcm90b3R5cGUuX2dldFNlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHRoaXMuX3NlY3Rpb25TdGFydCwgdGhpcy5faW5kZXgpO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fZW1pdFRva2VuID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fY2JzW25hbWVdKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IC0xO1xuICAgIH07XG4gICAgVG9rZW5pemVyLnByb3RvdHlwZS5fZW1pdFBhcnRpYWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0ZSAhPT0gMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJkYXRhKHZhbHVlKTsgLy9UT0RPIGltcGxlbWVudCB0aGUgbmV3IGV2ZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jYnMub250ZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRva2VuaXplcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUb2tlbml6ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGFyc2VyXzEgPSByZXF1aXJlKFwiLi9QYXJzZXJcIik7XG5leHBvcnRzLlBhcnNlciA9IFBhcnNlcl8xLlBhcnNlcjtcbnZhciBkb21oYW5kbGVyXzEgPSByZXF1aXJlKFwiZG9taGFuZGxlclwiKTtcbmV4cG9ydHMuRG9tSGFuZGxlciA9IGRvbWhhbmRsZXJfMS5Eb21IYW5kbGVyO1xuZXhwb3J0cy5EZWZhdWx0SGFuZGxlciA9IGRvbWhhbmRsZXJfMS5Eb21IYW5kbGVyO1xuLy8gSGVscGVyIG1ldGhvZHNcbi8qKlxuICogUGFyc2VzIGRhdGEsIHJldHVybnMgdGhlIHJlc3VsdGluZyBET00uXG4gKlxuICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdGhhdCBzaG91bGQgYmUgcGFyc2VkLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHBhcnNlciBhbmQgRE9NIGJ1aWxkZXIuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRE9NKGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgaGFuZGxlciA9IG5ldyBkb21oYW5kbGVyXzEuRG9tSGFuZGxlcih2b2lkIDAsIG9wdGlvbnMpO1xuICAgIG5ldyBQYXJzZXJfMS5QYXJzZXIoaGFuZGxlciwgb3B0aW9ucykuZW5kKGRhdGEpO1xuICAgIHJldHVybiBoYW5kbGVyLmRvbTtcbn1cbmV4cG9ydHMucGFyc2VET00gPSBwYXJzZURPTTtcbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciBpbnN0YW5jZSwgd2l0aCBhbiBhdHRhY2hlZCBET00gaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0gY2IgQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGFyc2luZyBoYXMgYmVlbiBjb21wbGV0ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcGFyc2VyIGFuZCBET00gYnVpbGRlci5cbiAqIEBwYXJhbSBlbGVtZW50Q2IgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIGEgdGFnIGhhcyBiZWVuIGNvbXBsZXRlZCBpbnNpZGUgb2YgdGhlIERPTS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRG9tU3RyZWFtKGNiLCBvcHRpb25zLCBlbGVtZW50Q2IpIHtcbiAgICB2YXIgaGFuZGxlciA9IG5ldyBkb21oYW5kbGVyXzEuRG9tSGFuZGxlcihjYiwgb3B0aW9ucywgZWxlbWVudENiKTtcbiAgICByZXR1cm4gbmV3IFBhcnNlcl8xLlBhcnNlcihoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlRG9tU3RyZWFtID0gY3JlYXRlRG9tU3RyZWFtO1xudmFyIFRva2VuaXplcl8xID0gcmVxdWlyZShcIi4vVG9rZW5pemVyXCIpO1xuZXhwb3J0cy5Ub2tlbml6ZXIgPSBUb2tlbml6ZXJfMS5kZWZhdWx0O1xudmFyIEVsZW1lbnRUeXBlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKSk7XG5leHBvcnRzLkVsZW1lbnRUeXBlID0gRWxlbWVudFR5cGU7XG4vKipcbiAqIExpc3Qgb2YgYWxsIGV2ZW50cyB0aGF0IHRoZSBwYXJzZXIgZW1pdHMuXG4gKlxuICogRm9ybWF0OiBldmVudG5hbWU6IG51bWJlciBvZiBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydHMuRVZFTlRTID0ge1xuICAgIGF0dHJpYnV0ZTogMixcbiAgICBjZGF0YXN0YXJ0OiAwLFxuICAgIGNkYXRhZW5kOiAwLFxuICAgIHRleHQ6IDEsXG4gICAgcHJvY2Vzc2luZ2luc3RydWN0aW9uOiAyLFxuICAgIGNvbW1lbnQ6IDEsXG4gICAgY29tbWVudGVuZDogMCxcbiAgICBjbG9zZXRhZzogMSxcbiAgICBvcGVudGFnOiAyLFxuICAgIG9wZW50YWduYW1lOiAxLFxuICAgIGVycm9yOiAxLFxuICAgIGVuZDogMFxufTtcbi8qXG4gICAgQWxsIG9mIHRoZSBmb2xsb3dpbmcgZXhwb3J0cyBleGlzdCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkuXG4gICAgVGhleSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCBldmVudHVhbGx5LlxuKi9cbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0ZlZWRIYW5kbGVyXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL1dyaXRhYmxlU3RyZWFtXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL0NvbGxlY3RpbmdIYW5kbGVyXCIpKTtcbnZhciBEb21VdGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiZG9tdXRpbHNcIikpO1xuZXhwb3J0cy5Eb21VdGlscyA9IERvbVV0aWxzO1xudmFyIEZlZWRIYW5kbGVyXzEgPSByZXF1aXJlKFwiLi9GZWVkSGFuZGxlclwiKTtcbmV4cG9ydHMuUnNzSGFuZGxlciA9IEZlZWRIYW5kbGVyXzEuRmVlZEhhbmRsZXI7XG4iLCJleHBvcnQgY29uc3QgaW5zZXJ0ID0gKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IE5vZGUsIGFuY2hvcj86IE5vZGUpID0+IHtcclxuICAgIGlmIChhbmNob3IgIT0gbnVsbCkge1xyXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBhbmNob3IpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnOiBzdHJpbmcpOiBFbGVtZW50ID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRleHQgPSAodGV4dDogc3RyaW5nKTogVGV4dCA9PiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KVxyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSAgKHNlbGVjdG9yOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAodGV4dDogc3RyaW5nKTogQ29tbWVudCA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHRleHQpIiwiZXhwb3J0IHtcclxuICAgIGNyZWF0ZUFwcFxyXG4gIH0gZnJvbSAnLi9yZW5kZXInIiwiaW1wb3J0IHsgUGFyc2VyLCBEb21IYW5kbGVyIH0gZnJvbSAnaHRtbHBhcnNlcjInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGVtcGxhdGU6IHN0cmluZykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZTxvYmplY3Q+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgRG9tSGFuZGxlcihcclxuICAgICAgKGVycm9yLCBkb20pID0+IHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShkb20pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbm9ybWFsaXplV2hpdGVzcGFjZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKGhhbmRsZXIpXHJcbiAgICBwYXJzZXIud3JpdGUodGVtcGxhdGUpXHJcbiAgICBwYXJzZXIuZW5kKClcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBjcmVhdGVUZXh0LCBpbnNlcnQgfSBmcm9tICcuL2RvbSdcclxuaW1wb3J0IHsgQ09OVEVYVCB9IGZyb20gJy4vcmVuZGVyJ1xyXG5jb25zdCBkZWxpbWl0ZXJzID0gW2B7e2AsIGB9fWBdXHJcblxyXG5mdW5jdGlvbiBwYXRjaENsYXNzKGVsOiBFbGVtZW50LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgZWwuY2xhc3NOYW1lID0gdmFsdWVcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hBdHRyKGVsOiBFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoU3R5bGUoZWw6IEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcpIHtcclxuICBjb25zdCBhdHRyID0gdmFsdWUuc3BsaXQoJzsnKVxyXG4gIGZvciAobGV0IGkgb2YgYXR0cikge1xyXG4gICAgOyg8YW55PmVsKS5zdHlsZVtpLnNwbGl0KCc6JylbMF1dID0gaS5zcGxpdCgnOicpWzFdXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEV2ZW50KGVsOiBFbGVtZW50LCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgY29udGV4dDogQ09OVEVYVCkge1xyXG4gIDsoPGFueT5lbClbYG9uJHtrZXkuc2xpY2UoMSl9YF0gPSAoKSA9PiB7XHJcbiAgICBjb250ZXh0Lm1ldGhvZHNbdmFsdWVdLmNhbGwoY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoSW50ZXJwb2xhdGlvblRleHQoaW5zZXJ0VGV4dDogc3RyaW5nLCBlbDogRWxlbWVudCkge1xyXG4gIGlmIChpbnNlcnRUZXh0KSB7XHJcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlVGV4dChpbnNlcnRUZXh0KVxyXG4gICAgaW5zZXJ0KHRleHQsIGVsKVxyXG4gIH1cclxuICByZXR1cm4gJydcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUHJvcHMoXHJcbiAgZWw6IEVsZW1lbnQsXHJcbiAga2V5OiBzdHJpbmcsXHJcbiAgdmFsdWU6IGFueSxcclxuICBjb250ZXh0OiBDT05URVhUXHJcbikge1xyXG4gIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgY2FzZSBrZXkgPT09ICdjbGFzcyc6XHJcbiAgICAgIHBhdGNoQ2xhc3MoZWwsIHZhbHVlKVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSBrZXkgPT09ICdzdHlsZSc6XHJcbiAgICAgIHBhdGNoU3R5bGUoZWwsIHZhbHVlKVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAvXjovLnRlc3Qoa2V5KTpcclxuICAgICAgcGF0Y2hFdmVudChlbCwga2V5LCB2YWx1ZSwgY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEludGVycG9sYXRpb24oXHJcbiAgZWw6IEVsZW1lbnQsXHJcbiAgcmVzdWx0OiBzdHJpbmcsXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBsZXQgaW5zZXJ0VGV4dCA9ICcnXHJcbiAgbGV0IHJhd1Jlc3VsdCA9IHJlc3VsdFxyXG4gIHdoaWxlIChyYXdSZXN1bHQubGVuZ3RoKSB7XHJcbiAgICBpZiAoc3RhcnRzV2l0aChyYXdSZXN1bHQsIGRlbGltaXRlcnNbMF0pKSB7XHJcbiAgICAgIGluc2VydFRleHQgPSBwYXRjaEludGVycG9sYXRpb25UZXh0KGluc2VydFRleHQsIGVsKVxyXG4gICAgICBjb25zdCBbb3BlbiwgY2xvc2VdID0gZGVsaW1pdGVyc1xyXG4gICAgICBjb25zdCBzdGFydEluZGV4OiBudW1iZXIgPSBvcGVuLmxlbmd0aFxyXG4gICAgICBjb25zdCBjbG9zZUluZGV4OiBudW1iZXIgPSByYXdSZXN1bHQuaW5kZXhPZihjbG9zZSwgb3Blbi5sZW5ndGgpXHJcbiAgICAgIGlmIChjbG9zZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGZuID0gYHJldHVybiAke3Jhd1Jlc3VsdC5zbGljZShzdGFydEluZGV4LCBjbG9zZUluZGV4KX1gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZ1bmN0aW9uKGZuKVxyXG4gICAgICAgIGluc2VydFRleHQgPSBwYXRjaEludGVycG9sYXRpb25UZXh0KHJlc3VsdC5jYWxsKGNvbnRleHQudmFsdWUpLCBlbClcclxuICAgICAgICByYXdSZXN1bHQgPSByYXdSZXN1bHQuc2xpY2UoY2xvc2VJbmRleCArIGNsb3NlLmxlbmd0aClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5zZXJ0VGV4dCArPSByYXdSZXN1bHRbMF1cclxuICAgICAgcmF3UmVzdWx0ID0gcmF3UmVzdWx0LnNsaWNlKDEpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGluc2VydFRleHQgPSBwYXRjaEludGVycG9sYXRpb25UZXh0KGluc2VydFRleHQsIGVsKVxyXG59XHJcbiIsImltcG9ydCB7IGVmZmVjdCB9IGZyb20gJy4uL3JlYWN0aXZpdHkvZWZmZWN0J1xyXG5pbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJy4uL3JlYWN0aXZpdHkvcmVhY3RpdmUnXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXNlcidcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgaW5zZXJ0LCBxdWVyeVNlbGVjdG9yLCBjcmVhdGVDb21tZW50IH0gZnJvbSAnLi9kb20nXHJcbmltcG9ydCB7IHBhdGNoUHJvcHMsIHBhdGNoSW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vcHJvcHMnXHJcblxyXG5jb25zdCBlbnVtIE5PREVUWVBFIHtcclxuICBBUFAgPSAnYXBwJyxcclxuICBUQUcgPSAndGFnJyxcclxuICBURVhUID0gJ3RleHQnLFxyXG4gIENPTVBPTkVOVCA9ICdjb21wb25lbnQnXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQVBQT1BUSU9OIHtcclxuICBtaXhpbj86IEFycmF5PGFueT5cclxuICBzdG9yZT86IG9iamVjdFxyXG4gIG9uTGFudWNoPzogRnVuY3Rpb25cclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENPTlRFWFQge1xyXG4gIHJlbmRlcjogb2JqZWN0XHJcbiAgdGVtcGxhdGU6IHN0cmluZ1xyXG4gIG1ldGhvZHM/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBGdW5jdGlvblxyXG4gIH1cclxuICB2YWx1ZT86IGFueVxyXG4gIG9uTG9hZD86IEZ1bmN0aW9uXHJcbiAgb25TaG93PzogRnVuY3Rpb25cclxuICBvblVwZGF0ZT86IEZ1bmN0aW9uXHJcbiAgbW91bnRlZDogYm9vbGVhblxyXG4gIGNvbXBvbmVudHM/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBDT05URVhUXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgYXBwT3B0aW9uOiBBUFBPUFRJT04gPSB7fVxyXG5sZXQgZGV2RnJhZ21lbnRJRCA9IDBcclxuZXhwb3J0IGludGVyZmFjZSBFTk9ERSBleHRlbmRzIE5vZGUge1xyXG4gIGNvbnRleHQ6IENPTlRFWFRcclxuICBhdHRyaWJzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogb2JqZWN0XHJcbiAgfVxyXG4gIHR5cGU6IE5PREVUWVBFXHJcbiAgbmFtZT86IHN0cmluZ1xyXG4gIGNoaWxkcmVuOiBFTk9ERVtdXHJcbiAgZGF0YT86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBwKFxyXG4gIGNvbnRleHQ6IENPTlRFWFQsXHJcbiAgY29udGFpbmVyOiBFbGVtZW50LFxyXG4gIG9wdGlvbjogQVBQT1BUSU9OID0ge31cclxuKTogQ09OVEVYVCB7XHJcbiAgaWYgKG9wdGlvbiEub25MYW51Y2gpIHtcclxuICAgIG9wdGlvbiEub25MYW51Y2gob3B0aW9uKVxyXG4gIH1cclxuICBhcHBPcHRpb24gPSBvcHRpb25cclxuICBwYXRjaEFwcCgpXHJcbiAgcGF0Y2hDb21wb25lbnQoY29udGV4dCwgY29udGFpbmVyKVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoKFxyXG4gIG5vZGU6IEVOT0RFLFxyXG4gIGNvbnRhaW5lcjogRWxlbWVudCxcclxuICB0eXBlOiBOT0RFVFlQRSxcclxuICBjb250ZXh0OiBDT05URVhULFxyXG4gIGFuY2hvcj86IE5vZGVcclxuKSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAvLyBjYXNlIE5PREVUWVBFLkNPTVBPTkVOVDpcclxuICAgIC8vICAgbm9kZS50eXBlID0gTk9ERVRZUEUuQ09NUE9ORU5UXHJcbiAgICAvLyAgIHBhdGNoQ29tcG9uZW50KG5vZGUsIGNvbnRhaW5lciwgY29udGV4dClcclxuICAgIC8vICAgYnJlYWtcclxuICAgIGNhc2UgTk9ERVRZUEUuVEFHOlxyXG4gICAgICBpZiAoY29udGV4dC5jb21wb25lbnRzICYmIGNvbnRleHQuY29tcG9uZW50c1tub2RlLm5hbWVdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+WViuWTiOWTiOWTiCcsIGNvbnRleHQuY29tcG9uZW50c1tub2RlLm5hbWVdLCBjb250YWluZXIpXHJcbiAgICAgICAgcGF0Y2hDb21wb25lbnQoY29udGV4dC5jb21wb25lbnRzW25vZGUubmFtZV0sIGNvbnRhaW5lciwgYW5jaG9yKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcHBwcCcpXHJcbiAgICAgICAgcGF0Y2hFbGVtZW50KG5vZGUsIGNvbnRhaW5lciwgY29udGV4dCwgYW5jaG9yKVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICBjYXNlIE5PREVUWVBFLlRFWFQ6XHJcbiAgICAgIHBhdGNoVGV4dChub2RlLCBjb250YWluZXIsIGNvbnRleHQpXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEFwcCgpIHtcclxuICBhcHBPcHRpb24ubWl4aW4gPSBbXVxyXG4gIGFwcE9wdGlvbi5zdG9yZSA9IHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ29tcG9uZW50KGNvbnRleHQ6IENPTlRFWFQsIGNvbnRhaW5lcjogRWxlbWVudCwgYW5jaG9yPzogTm9kZSkge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gcXVlcnlTZWxlY3Rvcihjb250ZXh0LnRlbXBsYXRlKVxyXG4gIGNvbnN0IGNvbXBvbmVudEFuY2hvciA9IHBhdGNoRnJhZ21lbnQoY29udGFpbmVyLCBhbmNob3IpXHJcbiAgcGFyc2UodGVtcGxhdGUuaW5uZXJIVE1MLnRyaW0oKSkudGhlbigocmVzOiBFTk9ERVtdKSA9PiB7XHJcbiAgICBlZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb3VudGVkID0gY29udGV4dC5tb3VudGVkXHJcbiAgICAgIGlmICghbW91bnRlZCAmJiBjb250ZXh0IS5vbkxvYWQpIHtcclxuICAgICAgICBjb250ZXh0Lm9uTG9hZC5jYWxsKGNvbnRleHQpXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiByZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgICAgICAgICBwYXRjaChpLCBjb250YWluZXIsIGkudHlwZSwgY29udGV4dCwgY29tcG9uZW50QW5jaG9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkaWZmXHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiByZXMpIHtcclxuICAgICAgICAgIHBhdGNoKGksIGNvbnRhaW5lciwgaS50eXBlLCBjb250ZXh0LCBjb21wb25lbnRBbmNob3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghbW91bnRlZCAmJiBjb250ZXh0IS5vblNob3cpIHtcclxuICAgICAgICBjb250ZXh0Lm1vdW50ZWQgPSB0cnVlXHJcbiAgICAgICAgY29udGV4dC5vblNob3cuY2FsbChjb250ZXh0KVxyXG4gICAgICB9IGVsc2UgaWYgKG1vdW50ZWQgJiYgY29udGV4dCEub25VcGRhdGUpIHtcclxuICAgICAgICBjb250ZXh0Lm9uVXBkYXRlLmNhbGwoY29udGV4dClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaEZyYWdtZW50KGNvbnRhaW5lcjogRWxlbWVudCwgYW5jaG9yPzogTm9kZSk6IENvbW1lbnQge1xyXG4gIGNvbnN0IGZyYWdtZW50U3RhcnRBbmNob3IgPSBjcmVhdGVDb21tZW50KGBmcmFnbWVudC0ke2RldkZyYWdtZW50SUR9LXN0YXJ0YCkhXHJcbiAgY29uc3QgZnJhZ21lbnRFbmRBbmNob3IgPSBjcmVhdGVDb21tZW50KGBmcmFnbWVudC0ke2RldkZyYWdtZW50SUR9LWVuZGApIVxyXG4gIGRldkZyYWdtZW50SUQrK1xyXG4gIGlmIChhbmNob3IgIT09IG51bGwpIHtcclxuICAgIGluc2VydChmcmFnbWVudFN0YXJ0QW5jaG9yLCBjb250YWluZXIsIGFuY2hvcilcclxuICAgIGluc2VydChmcmFnbWVudEVuZEFuY2hvciwgY29udGFpbmVyLCBhbmNob3IpXHJcbiAgfSBlbHNlIHtcclxuICAgIGluc2VydChmcmFnbWVudFN0YXJ0QW5jaG9yLCBjb250YWluZXIpXHJcbiAgICBpbnNlcnQoZnJhZ21lbnRFbmRBbmNob3IsIGNvbnRhaW5lcilcclxuICB9XHJcbiAgcmV0dXJuIGZyYWdtZW50RW5kQW5jaG9yXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoRWxlbWVudChcclxuICBub2RlOiBFTk9ERSxcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgY29udGV4dDogQ09OVEVYVCxcclxuICBhbmNob3I/OiBOb2RlXHJcbikge1xyXG4gIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudChub2RlLm5hbWUpXHJcbiAgZm9yIChsZXQgaSBpbiBub2RlLmF0dHJpYnMpIHtcclxuICAgIHBhdGNoUHJvcHMoZWwsIGksIG5vZGUuYXR0cmlic1tpXSwgY29udGV4dClcclxuICB9XHJcbiAgaWYgKGFuY2hvciAhPT0gbnVsbCkge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIsIGFuY2hvcilcclxuICB9IGVsc2Uge1xyXG4gICAgaW5zZXJ0KGVsLCBjb250YWluZXIpXHJcbiAgfVxyXG4gIHBhdGNoQ2hpbGRyZW4obm9kZS5jaGlsZHJlbiwgZWwsIGNvbnRleHQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4oXHJcbiAgY2hpbGRyZW46IEFycmF5PEVOT0RFPixcclxuICBjb250YWluZXI6IEVsZW1lbnQsXHJcbiAgY29udGV4dDogQ09OVEVYVFxyXG4pIHtcclxuICBmb3IgKGxldCBpIG9mIGNoaWxkcmVuKSB7XHJcbiAgICBwYXRjaChpLCBjb250YWluZXIsIGkudHlwZSwgY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoVGV4dChub2RlOiBFTk9ERSwgY29udGFpbmVyOiBFbGVtZW50LCBjb250ZXh0OiBDT05URVhUKSB7XHJcbiAgcGF0Y2hJbnRlcnBvbGF0aW9uKGNvbnRhaW5lciwgbm9kZS5kYXRhLCBjb250ZXh0KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCAgc3RhcnRzV2l0aCA9IChzb3VyY2U6IHN0cmluZywgc2VhcmNoU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICByZXR1cm4gc291cmNlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nKVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21waWxlcidcclxuZXhwb3J0ICogZnJvbSAnLi9yZWFjdGl2aXR5JyIsImltcG9ydCB7IGlzU3ltYm9sLGlzT2JqZWN0LGhhc093bixoYXNDaGFuZ2VkIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgdHJhY2ssdHJpZ2dlcixPcGVyYXRpb25UeXBlcyB9IGZyb20gJy4vZWZmZWN0J1xyXG5pbXBvcnQgeyByZWFjdGl2ZSx0b1JhdyB9IGZyb20gJy4vcmVhY3RpdmUnXHJcbmNvbnN0IGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChcclxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhTeW1ib2wpXHJcbiAgICAubWFwKGtleSA9PiAoU3ltYm9sIGFzIGFueSlba2V5XSlcclxuICAgIC5maWx0ZXIoaXNTeW1ib2wpXHJcbilcclxuXHJcbmZ1bmN0aW9uIGdldCh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wsIHJlY2VpdmVyOiBvYmplY3QpIHtcclxuICBsZXQgcmVzID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXksIHJlY2VpdmVyKVxyXG4gIC8vIOWGhee9rueahHN5bWJvbOS4jei/m+ihjHRyYWNrXHJcbiAgaWYgKGlzU3ltYm9sKGtleSkgJiYgYnVpbHRJblN5bWJvbHMuaGFzKGtleSkpIHtcclxuICAgIHJldHVybiByZXNcclxuICB9XHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5HRVQsIGtleSlcclxuICByZXR1cm4gaXNPYmplY3QocmVzKSA/IHJlYWN0aXZlKHJlcykgOiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0KFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIGtleTogc3RyaW5nIHwgc3ltYm9sLFxyXG4gIHZhbHVlOiB1bmtub3duLFxyXG4gIHJlY2VpdmVyOiBvYmplY3RcclxuKTogYm9vbGVhbiB7XHJcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSlcclxuICBjb25zdCBvbGRWYWx1ZSA9ICh0YXJnZXQgYXMgYW55KVtrZXldXHJcbiAgY29uc3QgaGFkS2V5ID0gaGFzT3duKHRhcmdldCwga2V5KVxyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpXHJcbiAgaWYgKHRhcmdldCA9PT0gdG9SYXcocmVjZWl2ZXIpKSB7XHJcbiAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICBjb25zdCBleHRyYUluZm8gPSB7IG9sZFZhbHVlLCBuZXdWYWx1ZTogdmFsdWUgfVxyXG4gICAgICBpZiAoIWhhZEtleSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5BREQsIGtleSwgZXh0cmFJbmZvKVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5TRVQsIGtleSwgZXh0cmFJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWhhZEtleSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5BREQsIGtleSlcclxuICAgICAgfSBlbHNlIGlmIChoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkpIHtcclxuICAgICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuU0VULCBrZXkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpXHJcbiAgY29uc3Qgb2xkVmFsdWUgPSAodGFyZ2V0IGFzIGFueSlba2V5XVxyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBrZXkpXHJcbiAgaWYgKHJlc3VsdCAmJiBoYWRLZXkpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5ERUxFVEUsIGtleSwgeyBvbGRWYWx1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkRFTEVURSwga2V5KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhcyh0YXJnZXQ6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0Lmhhcyh0YXJnZXQsIGtleSlcclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkhBUywga2V5KVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQ6IG9iamVjdCk6IChzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpW10ge1xyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuSVRFUkFURSlcclxuICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25IYW5kbGVyczogUHJveHlIYW5kbGVyPG9iamVjdD4gPSB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICBkZWxldGVQcm9wZXJ0eSxcclxuICBoYXMsXHJcbiAgb3duS2V5c1xyXG59XHJcbiIsImltcG9ydCB7IHRhcmdldE1hcCB9IGZyb20gJy4vcmVhY3RpdmUnXHJcbmltcG9ydCB7IGlzQXJyYXksZXh0ZW5kLEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnXHJcbmV4cG9ydCB0eXBlIERlcCA9IFNldDxSZWFjdGl2ZUVmZmVjdD5cclxuZXhwb3J0IGludGVyZmFjZSBSZWFjdGl2ZUVmZmVjdDxUID0gYW55PiB7XHJcbiAgKCk6IFRcclxuICBfaXNFZmZlY3Q6IHRydWVcclxuICBhY3RpdmU6IGJvb2xlYW5cclxuICByYXc6ICgpID0+IFRcclxuICBkZXBzOiBBcnJheTxEZXA+XHJcbiAgb3B0aW9uczogUmVhY3RpdmVFZmZlY3RPcHRpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVhY3RpdmVFZmZlY3RPcHRpb25zIHtcclxuICBsYXp5PzogYm9vbGVhblxyXG4gIGNvbXB1dGVkPzogYm9vbGVhblxyXG4gIHNjaGVkdWxlcj86IChydW46IEZ1bmN0aW9uKSA9PiB2b2lkXHJcbiAgb25UcmFjaz86IChldmVudDogRGVidWdnZXJFdmVudCkgPT4gdm9pZFxyXG4gIG9uVHJpZ2dlcj86IChldmVudDogRGVidWdnZXJFdmVudCkgPT4gdm9pZFxyXG4gIG9uU3RvcD86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGVidWdnZXJFdmVudCA9IHtcclxuICBlZmZlY3Q6IFJlYWN0aXZlRWZmZWN0XHJcbiAgdGFyZ2V0OiBvYmplY3RcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlc1xyXG4gIGtleTogYW55XHJcbn0gJiBEZWJ1Z2dlckV2ZW50RXh0cmFJbmZvXHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBPcGVyYXRpb25UeXBlcyB7XHJcbiAgU0VUID0gJ3NldCcsXHJcbiAgQUREID0gJ2FkZCcsXHJcbiAgREVMRVRFID0gJ2RlbGV0ZScsXHJcbiAgQ0xFQVIgPSAnY2xlYXInLFxyXG4gIEdFVCA9ICdnZXQnLFxyXG4gIEhBUyA9ICdoYXMnLFxyXG4gIElURVJBVEUgPSAnaXRlcmF0ZSdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWJ1Z2dlckV2ZW50RXh0cmFJbmZvIHtcclxuICBuZXdWYWx1ZT86IGFueVxyXG4gIG9sZFZhbHVlPzogYW55XHJcbiAgb2xkVGFyZ2V0PzogTWFwPGFueSwgYW55PiB8IFNldDxhbnk+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlZmZlY3RTdGFjazogUmVhY3RpdmVFZmZlY3RbXSA9IFtdXHJcblxyXG5leHBvcnQgY29uc3QgSVRFUkFURV9LRVkgPSBTeW1ib2woJ2l0ZXJhdGUnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKHRhcmdldDogb2JqZWN0LCB0eXBlOiBPcGVyYXRpb25UeXBlcywga2V5PzogdW5rbm93bikge1xyXG4gIGlmIChlZmZlY3RTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb25zdCBlZmZlY3QgPSBlZmZlY3RTdGFja1tlZmZlY3RTdGFjay5sZW5ndGggLSAxXVxyXG4gIGlmICh0eXBlID09PSBPcGVyYXRpb25UeXBlcy5JVEVSQVRFKSB7XHJcbiAgICBrZXkgPSBJVEVSQVRFX0tFWVxyXG4gIH1cclxuICBsZXQgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KVxyXG4gIGlmIChkZXBzTWFwID09PSB2b2lkIDApIHtcclxuICAgIHRhcmdldE1hcC5zZXQodGFyZ2V0LCAoZGVwc01hcCA9IG5ldyBNYXAoKSkpXHJcbiAgfVxyXG4gIGxldCBkZXAgPSBkZXBzTWFwLmdldChrZXkhKVxyXG4gIGlmIChkZXAgPT09IHZvaWQgMCkge1xyXG4gICAgZGVwc01hcC5zZXQoa2V5ISwgKGRlcCA9IG5ldyBTZXQoKSkpXHJcbiAgfVxyXG4gIGlmICghZGVwLmhhcyhlZmZlY3QpKSB7XHJcbiAgICBkZXAuYWRkKGVmZmVjdClcclxuICAgIGVmZmVjdC5kZXBzLnB1c2goZGVwKVxyXG4gICAgaWYgKF9fREVWX18gJiYgZWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xyXG4gICAgICBlZmZlY3Qub3B0aW9ucy5vblRyYWNrKHtcclxuICAgICAgICBlZmZlY3QsXHJcbiAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAga2V5XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlcihcclxuICB0YXJnZXQ6IG9iamVjdCxcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlcyxcclxuICBrZXk/OiB1bmtub3duLFxyXG4gIGV4dHJhSW5mbz86IERlYnVnZ2VyRXZlbnRFeHRyYUluZm9cclxuKSB7XHJcbiAgY29uc3QgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KVxyXG4gIGlmIChkZXBzTWFwID09PSB2b2lkIDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb25zdCBlZmZlY3RzID0gbmV3IFNldDxSZWFjdGl2ZUVmZmVjdD4oKVxyXG4gIGNvbnN0IGNvbXB1dGVkUnVubmVycyA9IG5ldyBTZXQ8UmVhY3RpdmVFZmZlY3Q+KClcclxuICBpZiAodHlwZSA9PT0gT3BlcmF0aW9uVHlwZXMuQ0xFQVIpIHtcclxuICAgIGRlcHNNYXAuZm9yRWFjaChkZXAgPT4ge1xyXG4gICAgICBhZGRSdW5uZXJzKGVmZmVjdHMsIGNvbXB1dGVkUnVubmVycywgZGVwKVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGtleSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgIGFkZFJ1bm5lcnMoZWZmZWN0cywgY29tcHV0ZWRSdW5uZXJzLCBkZXBzTWFwLmdldChrZXkpKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09IE9wZXJhdGlvblR5cGVzLkFERCB8fCB0eXBlID09PSBPcGVyYXRpb25UeXBlcy5ERUxFVEUpIHtcclxuICAgICAgY29uc3QgaXRlcmF0aW9uS2V5ID0gaXNBcnJheSh0YXJnZXQpID8gJ2xlbmd0aCcgOiBJVEVSQVRFX0tFWVxyXG4gICAgICBhZGRSdW5uZXJzKGVmZmVjdHMsIGNvbXB1dGVkUnVubmVycywgZGVwc01hcC5nZXQoaXRlcmF0aW9uS2V5KSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcnVuID0gKGVmZmVjdDogUmVhY3RpdmVFZmZlY3QpID0+IHtcclxuICAgIHNjaGVkdWxlUnVuKGVmZmVjdCwgdGFyZ2V0LCB0eXBlLCBrZXksIGV4dHJhSW5mbylcclxuICB9XHJcbiAgY29tcHV0ZWRSdW5uZXJzLmZvckVhY2gocnVuKVxyXG4gIGVmZmVjdHMuZm9yRWFjaChydW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJ1bm5lcnMoXHJcbiAgZWZmZWN0czogU2V0PFJlYWN0aXZlRWZmZWN0PixcclxuICBjb21wdXRlZFJ1bm5lcnM6IFNldDxSZWFjdGl2ZUVmZmVjdD4sXHJcbiAgZWZmZWN0c1RvQWRkOiBTZXQ8UmVhY3RpdmVFZmZlY3Q+IHwgdW5kZWZpbmVkXHJcbikge1xyXG4gIGlmIChlZmZlY3RzVG9BZGQgIT09IHZvaWQgMCkge1xyXG4gICAgZWZmZWN0c1RvQWRkLmZvckVhY2goZWZmZWN0ID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC5vcHRpb25zLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgY29tcHV0ZWRSdW5uZXJzLmFkZChlZmZlY3QpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWZmZWN0cy5hZGQoZWZmZWN0KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2NoZWR1bGVSdW4oXHJcbiAgZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCxcclxuICB0YXJnZXQ6IG9iamVjdCxcclxuICB0eXBlOiBPcGVyYXRpb25UeXBlcyxcclxuICBrZXk6IHVua25vd24sXHJcbiAgZXh0cmFJbmZvPzogRGVidWdnZXJFdmVudEV4dHJhSW5mb1xyXG4pIHtcclxuICBpZiAoX19ERVZfXyAmJiBlZmZlY3Qub3B0aW9ucy5vblRyaWdnZXIpIHtcclxuICAgIGNvbnN0IGV2ZW50OiBEZWJ1Z2dlckV2ZW50ID0ge1xyXG4gICAgICBlZmZlY3QsXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAga2V5LFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgICBlZmZlY3Qub3B0aW9ucy5vblRyaWdnZXIoZXh0cmFJbmZvID8gZXh0ZW5kKGV2ZW50LCBleHRyYUluZm8pIDogZXZlbnQpXHJcbiAgfVxyXG4gIGlmIChlZmZlY3Qub3B0aW9ucy5zY2hlZHVsZXIgIT09IHZvaWQgMCkge1xyXG4gICAgZWZmZWN0Lm9wdGlvbnMuc2NoZWR1bGVyKGVmZmVjdClcclxuICB9IGVsc2Uge1xyXG4gICAgZWZmZWN0KClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlRWZmZWN0PFQgPSBhbnk+KFxyXG4gIGZuOiAoKSA9PiBULFxyXG4gIG9wdGlvbnM6IFJlYWN0aXZlRWZmZWN0T3B0aW9uc1xyXG4pOiBSZWFjdGl2ZUVmZmVjdDxUPiB7XHJcbiAgY29uc3QgZWZmZWN0ID0gZnVuY3Rpb24gcmVhY3RpdmVFZmZlY3QoLi4uYXJnczogdW5rbm93bltdKTogdW5rbm93biB7XHJcbiAgICByZXR1cm4gcnVuKGVmZmVjdCwgZm4sIGFyZ3MpXHJcbiAgfSBhcyBSZWFjdGl2ZUVmZmVjdFxyXG4gIGVmZmVjdC5faXNFZmZlY3QgPSB0cnVlXHJcbiAgZWZmZWN0LmFjdGl2ZSA9IHRydWVcclxuICBlZmZlY3QucmF3ID0gZm5cclxuICBlZmZlY3QuZGVwcyA9IFtdXHJcbiAgZWZmZWN0Lm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgcmV0dXJuIGVmZmVjdFxyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCwgZm46IEZ1bmN0aW9uLCBhcmdzOiB1bmtub3duW10pOiB1bmtub3duIHtcclxuICBpZiAoIWVmZmVjdC5hY3RpdmUpIHtcclxuICAgIHJldHVybiBmbiguLi5hcmdzKVxyXG4gIH1cclxuICBpZiAoIWVmZmVjdFN0YWNrLmluY2x1ZGVzKGVmZmVjdCkpIHtcclxuICAgIGNsZWFudXAoZWZmZWN0KVxyXG4gICAgdHJ5IHtcclxuICAgICAgZWZmZWN0U3RhY2sucHVzaChlZmZlY3QpXHJcbiAgICAgIHJldHVybiBmbiguLi5hcmdzKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgZWZmZWN0U3RhY2sucG9wKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFudXAoZWZmZWN0OiBSZWFjdGl2ZUVmZmVjdCkge1xyXG4gIGNvbnN0IHsgZGVwcyB9ID0gZWZmZWN0XHJcbiAgaWYgKGRlcHMubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGVwc1tpXS5kZWxldGUoZWZmZWN0KVxyXG4gICAgfVxyXG4gICAgZGVwcy5sZW5ndGggPSAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWZmZWN0PFQgPSBhbnk+KFxyXG4gIGZuOiAoKSA9PiBULFxyXG4gIG9wdGlvbnM6IFJlYWN0aXZlRWZmZWN0T3B0aW9ucyA9IEVNUFRZX09CSlxyXG4pOiBSZWFjdGl2ZUVmZmVjdDxUPiB7XHJcbiAgaWYgKGlzRWZmZWN0KGZuKSkge1xyXG4gICAgZm4gPSBmbi5yYXdcclxuICB9XHJcbiAgY29uc3QgZWZmZWN0ID0gY3JlYXRlUmVhY3RpdmVFZmZlY3QoZm4sIG9wdGlvbnMpXHJcbiAgaWYgKCFvcHRpb25zLmxhenkpIHtcclxuICAgIGVmZmVjdCgpXHJcbiAgfVxyXG4gIHJldHVybiBlZmZlY3RcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWZmZWN0KGZuOiBhbnkpOiBmbiBpcyBSZWFjdGl2ZUVmZmVjdCB7XHJcbiAgcmV0dXJuIGZuICE9IG51bGwgJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlXHJcbn0iLCJleHBvcnQge1xyXG4gIHJlYWN0aXZlXHJcbn0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuXHJcbmV4cG9ydCB7XHJcbiAgZWZmZWN0XHJcbn0gZnJvbSAnLi9lZmZlY3QnIiwiaW1wb3J0IHsgaXNTeW1ib2wsaXNPYmplY3QsaGFzT3duLGhhc0NoYW5nZWQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyB0cmFjayx0cmlnZ2VyLE9wZXJhdGlvblR5cGVzIH0gZnJvbSAnLi9lZmZlY3QnXHJcbmltcG9ydCB7IHJlYWN0aXZlLHRvUmF3IH0gZnJvbSAnLi9yZWFjdGl2ZSdcclxuY29uc3QgYnVpbHRJblN5bWJvbHMgPSBuZXcgU2V0KFxyXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFN5bWJvbClcclxuICAgIC5tYXAoa2V5ID0+IChTeW1ib2wgYXMgYW55KVtrZXldKVxyXG4gICAgLmZpbHRlcihpc1N5bWJvbClcclxuKVxyXG5cclxuZnVuY3Rpb24gZ2V0KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCwgcmVjZWl2ZXI6IG9iamVjdCkge1xyXG4gIGxldCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpXHJcbiAgLy8g5YaF572u55qEc3ltYm9s5LiN6L+b6KGMdHJhY2tcclxuICBpZiAoaXNTeW1ib2woa2V5KSAmJiBidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cclxuICB0cmFjayh0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkdFVCwga2V5KVxyXG4gIHJldHVybiBpc09iamVjdChyZXMpID8gcmVhY3RpdmUocmVzKSA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQoXHJcbiAgdGFyZ2V0OiBvYmplY3QsXHJcbiAga2V5OiBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgdmFsdWU6IHVua25vd24sXHJcbiAgcmVjZWl2ZXI6IG9iamVjdFxyXG4pOiBib29sZWFuIHtcclxuICB2YWx1ZSA9IHRvUmF3KHZhbHVlKVxyXG4gIGNvbnN0IG9sZFZhbHVlID0gKHRhcmdldCBhcyBhbnkpW2tleV1cclxuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlLCByZWNlaXZlcilcclxuICBpZiAodGFyZ2V0ID09PSB0b1JhdyhyZWNlaXZlcikpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIGNvbnN0IGV4dHJhSW5mbyA9IHsgb2xkVmFsdWUsIG5ld1ZhbHVlOiB2YWx1ZSB9XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLlNFVCwga2V5LCBleHRyYUluZm8pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFkS2V5KSB7XHJcbiAgICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkFERCwga2V5KVxyXG4gICAgICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xyXG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5TRVQsIGtleSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGhhZEtleSA9IGhhc093bih0YXJnZXQsIGtleSlcclxuICBjb25zdCBvbGRWYWx1ZSA9ICh0YXJnZXQgYXMgYW55KVtrZXldXHJcbiAgY29uc3QgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSlcclxuICBpZiAocmVzdWx0ICYmIGhhZEtleSkge1xyXG4gICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgdHJpZ2dlcih0YXJnZXQsIE9wZXJhdGlvblR5cGVzLkRFTEVURSwga2V5LCB7IG9sZFZhbHVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmlnZ2VyKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuREVMRVRFLCBrZXkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzKHRhcmdldDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuaGFzKHRhcmdldCwga2V5KVxyXG4gIHRyYWNrKHRhcmdldCwgT3BlcmF0aW9uVHlwZXMuSEFTLCBrZXkpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5mdW5jdGlvbiBvd25LZXlzKHRhcmdldDogb2JqZWN0KTogKHN0cmluZyB8IG51bWJlciB8IHN5bWJvbClbXSB7XHJcbiAgdHJhY2sodGFyZ2V0LCBPcGVyYXRpb25UeXBlcy5JVEVSQVRFKVxyXG4gIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsSGFuZGxlcnM6IFByb3h5SGFuZGxlcjxvYmplY3Q+ID0ge1xyXG4gIGdldCxcclxuICBzZXQsXHJcbiAgZGVsZXRlUHJvcGVydHksXHJcbiAgaGFzLFxyXG4gIG93bktleXNcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxIYW5kbGVycyB9IGZyb20gJy4vbm9ybWFsSGFuZGxlcnMnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb25IYW5kbGVycyB9IGZyb20gJy4vY29sbGVjdGlvbkhhbmRsZXJzJ1xyXG5pbXBvcnQgeyBpc09iamVjdCwgbWFrZU1hcCwgdG9SYXdUeXBlIH0gZnJvbSAnLi91dGlscydcclxuaW1wb3J0IHsgRGVwIH0gZnJvbSAnLi9lZmZlY3QnXHJcbmNvbnN0IGNvbGxlY3Rpb25UeXBlcyA9IG5ldyBTZXQ8RnVuY3Rpb24+KFtTZXQsIE1hcCwgV2Vha01hcCwgV2Vha1NldF0pXHJcbmNvbnN0IHJhd1RvUmVhY3RpdmUgPSBuZXcgV2Vha01hcDxhbnksIGFueT4oKVxyXG5jb25zdCByZWFjdGl2ZVRvUmF3ID0gbmV3IFdlYWtNYXA8YW55LCBhbnk+KClcclxuY29uc3QgaXNPYnNlcnZhYmxlVHlwZSA9IG1ha2VNYXAoJ09iamVjdCxBcnJheSxNYXAsU2V0LFdlYWtNYXAsV2Vha1NldCcpXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFjdGl2ZSh0YXJnZXQ6IG9iamVjdCkge1xyXG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdChcclxuICAgIHRhcmdldCxcclxuICAgIHJhd1RvUmVhY3RpdmUsXHJcbiAgICByZWFjdGl2ZVRvUmF3LFxyXG4gICAgbm9ybWFsSGFuZGxlcnMsXHJcbiAgICBjb2xsZWN0aW9uSGFuZGxlcnNcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlT2JqZWN0KFxyXG4gIHRhcmdldDogb2JqZWN0LFxyXG4gIHRvUHJveHk6IFdlYWtNYXA8YW55LCBhbnk+LFxyXG4gIHRvUmF3OiBXZWFrTWFwPGFueSwgYW55PixcclxuICBub3JtYWxIYW5kbGVyczogUHJveHlIYW5kbGVyPGFueT4sXHJcbiAgY29sbGVjdGlvbkhhbmRsZXJzOiBQcm94eUhhbmRsZXI8YW55PlxyXG4pIHtcclxuICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgY2Fubm90IGJlIG1hZGUgcmVhY3RpdmU6ICR7U3RyaW5nKHRhcmdldCl9YClcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXRcclxuICB9XHJcbiAgbGV0IG9ic2VydmVkID0gdG9Qcm94eS5nZXQodGFyZ2V0KVxyXG4gIGlmIChvYnNlcnZlZCAhPT0gdm9pZCAwKSB7XHJcbiAgICByZXR1cm4gb2JzZXJ2ZWRcclxuICB9XHJcbiAgaWYgKHRvUmF3Lmhhcyh0YXJnZXQpKSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbiAgfVxyXG4gIGlmICghaXNPYnNlcnZhYmxlVHlwZSh0b1Jhd1R5cGUodGFyZ2V0KSkpIHtcclxuICAgIHJldHVybiB0YXJnZXRcclxuICB9XHJcbiAgb2JzZXJ2ZWQgPSBuZXcgUHJveHkoXHJcbiAgICB0YXJnZXQsXHJcbiAgICBjb2xsZWN0aW9uVHlwZXMuaGFzKHRhcmdldC5jb25zdHJ1Y3RvcilcclxuICAgICAgPyBjb2xsZWN0aW9uSGFuZGxlcnNcclxuICAgICAgOiBub3JtYWxIYW5kbGVyc1xyXG4gIClcclxuICB0b1Byb3h5LnNldCh0YXJnZXQsIG9ic2VydmVkKVxyXG4gIHRvUmF3LnNldChvYnNlcnZlZCwgdGFyZ2V0KVxyXG4gIGlmICghdGFyZ2V0TWFwLmhhcyh0YXJnZXQpKSB7XHJcbiAgICB0YXJnZXRNYXAuc2V0KHRhcmdldCwgbmV3IE1hcCgpKVxyXG4gIH1cclxuICByZXR1cm4gb2JzZXJ2ZWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRhcmdldE1hcCA9IG5ldyBXZWFrTWFwPGFueSwgS2V5VG9EZXBNYXA+KClcclxuXHJcbmV4cG9ydCB0eXBlIEtleVRvRGVwTWFwID0gTWFwPGFueSwgRGVwPlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvUmF3PFQ+KG9ic2VydmVkOiBUKTogVCB7XHJcbiAgcmV0dXJuIHJlYWN0aXZlVG9SYXcuZ2V0KG9ic2VydmVkKSB8fCBvYnNlcnZlZFxyXG59IiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbDogdW5rbm93bik6IHZhbCBpcyBSZWNvcmQ8YW55LCBhbnk+ID0+XHJcbiAgdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnXHJcblxyXG5leHBvcnQgY29uc3QgdG9SYXdUeXBlID0gKHZhbHVlOiB1bmtub3duKTogc3RyaW5nID0+XHJcbiAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSlcclxuXHJcbmV4cG9ydCBjb25zdCBpc1N5bWJvbCA9ICh2YWw6IHVua25vd24pOiB2YWwgaXMgc3ltYm9sID0+IHR5cGVvZiB2YWwgPT09ICdzeW1ib2wnXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKFxyXG4gIHN0cjogc3RyaW5nLFxyXG4gIGV4cGVjdHNMb3dlckNhc2U/OiBib29sZWFuXHJcbik6IChrZXk6IHN0cmluZykgPT4gYm9vbGVhbiB7XHJcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICBjb25zdCBsaXN0OiBBcnJheTxzdHJpbmc+ID0gc3RyLnNwbGl0KCcsJylcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIG1hcFtsaXN0W2ldXSA9IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyB2YWwgPT4gISFtYXBbdmFsLnRvTG93ZXJDYXNlKCldIDogdmFsID0+ICEhbWFwW3ZhbF1cclxufVxyXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXlcclxuXHJcbmV4cG9ydCBjb25zdCBleHRlbmQgPSA8VCBleHRlbmRzIG9iamVjdCwgVSBleHRlbmRzIG9iamVjdD4oXHJcbiAgYTogVCxcclxuICBiOiBVXHJcbik6IFQgJiBVID0+IHtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBiKSB7XHJcbiAgICA7KGEgYXMgYW55KVtrZXldID0gYltrZXldXHJcbiAgfVxyXG4gIHJldHVybiBhIGFzIGFueVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzT3duID0gKFxyXG4gIHZhbDogb2JqZWN0LFxyXG4gIGtleTogc3RyaW5nIHwgc3ltYm9sXHJcbik6IGtleSBpcyBrZXlvZiB0eXBlb2YgdmFsID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSlcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKHZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnkpOiBib29sZWFuID0+XHJcbiAgdmFsdWUgIT09IG9sZFZhbHVlICYmICh2YWx1ZSA9PT0gdmFsdWUgfHwgb2xkVmFsdWUgPT09IG9sZFZhbHVlKVxyXG5cclxuZXhwb3J0IGNvbnN0IEVNUFRZX09CSjogeyByZWFkb25seSBba2V5OiBzdHJpbmddOiBhbnkgfSA9IF9fREVWX19cclxuICA/IE9iamVjdC5mcmVlemUoe30pXHJcbiAgOiB7fVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9