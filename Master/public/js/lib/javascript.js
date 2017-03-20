(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){function b(e,d,c){return/^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(d.lastType)||(d.lastType=="quasi"&&/\{\s*$/.test(e.string.slice(0,e.pos-(c||0))))}a.defineMode("javascript",function(ag,ar){var n=ag.indentUnit;var D=ar.statementIndent;var aI=ar.jsonld;var C=ar.json||aI;var g=ar.typescript;var aD=ar.wordCharacters||/[\w$\xa1-\uffff]/;var aB=function(){function aZ(a1){return{type:a1,style:"keyword"}}var aU=aZ("keyword a"),aS=aZ("keyword b"),aR=aZ("keyword c");var aT=aZ("operator"),aX={type:"atom",style:"atom"};var aV={"if":aZ("if"),"while":aU,"with":aU,"else":aS,"do":aS,"try":aS,"finally":aS,"return":aR,"break":aR,"continue":aR,"new":aZ("new"),"delete":aR,"throw":aR,"debugger":aR,"var":aZ("var"),"const":aZ("var"),let:aZ("var"),"function":aZ("function"),"catch":aZ("catch"),"for":aZ("for"),"switch":aZ("switch"),"case":aZ("case"),"default":aZ("default"),"in":aT,"typeof":aT,"instanceof":aT,"true":aX,"false":aX,"null":aX,"undefined":aX,"NaN":aX,"Infinity":aX,"this":aZ("this"),"class":aZ("class"),"super":aZ("atom"),yield:aR,"export":aZ("export"),"import":aZ("import"),"extends":aR,await:aR,async:aZ("async")};if(g){var a0={type:"variable",style:"variable-3"};var aW={"interface":aZ("class"),"implements":aR,namespace:aR,module:aZ("module"),"enum":aZ("module"),type:aZ("type"),"public":aZ("modifier"),"private":aZ("modifier"),"protected":aZ("modifier"),"abstract":aZ("modifier"),as:aT,string:a0,number:a0,"boolean":a0,any:a0};for(var aY in aW){aV[aY]=aW[aY]}}return aV}();var U=/[+\-*&%=<>!?|~^]/;var aA=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function I(aU){var aS=false,aR,aT=false;while((aR=aU.next())!=null){if(!aS){if(aR=="/"&&!aT){return}if(aR=="["){aT=true}else{if(aT&&aR=="]"){aT=false}}}aS=!aS&&aR=="\\"}}var Y,J;function Q(aT,aS,aR){Y=aT;J=aR;return aS}function aa(aV,aT){var aR=aV.next();if(aR=='"'||aR=="'"){aT.tokenize=X(aR);return aT.tokenize(aV,aT)}else{if(aR=="."&&aV.match(/^\d+(?:[eE][+\-]?\d+)?/)){return Q("number","number")}else{if(aR=="."&&aV.match("..")){return Q("spread","meta")}else{if(/[\[\]{}\(\),;\:\.]/.test(aR)){return Q(aR)}else{if(aR=="="&&aV.eat(">")){return Q("=>","operator")}else{if(aR=="0"&&aV.eat(/x/i)){aV.eatWhile(/[\da-f]/i);return Q("number","number")}else{if(aR=="0"&&aV.eat(/o/i)){aV.eatWhile(/[0-7]/i);return Q("number","number")}else{if(aR=="0"&&aV.eat(/b/i)){aV.eatWhile(/[01]/i);return Q("number","number")}else{if(/\d/.test(aR)){aV.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);return Q("number","number")}else{if(aR=="/"){if(aV.eat("*")){aT.tokenize=aH;return aH(aV,aT)}else{if(aV.eat("/")){aV.skipToEnd();return Q("comment","comment")}else{if(b(aV,aT,1)){I(aV);aV.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);return Q("regexp","string-2")}else{aV.eatWhile(U);return Q("operator","operator",aV.current())}}}}else{if(aR=="`"){aT.tokenize=aJ;return aJ(aV,aT)}else{if(aR=="#"){aV.skipToEnd();return Q("error","error")}else{if(U.test(aR)){if(aR!=">"||!aT.lexical||aT.lexical.type!=">"){aV.eatWhile(U)}return Q("operator","operator",aV.current())}else{if(aD.test(aR)){aV.eatWhile(aD);var aU=aV.current(),aS=aB.propertyIsEnumerable(aU)&&aB[aU];return(aS&&aT.lastType!=".")?Q(aS.type,aS.style,aU):Q("variable","variable",aU)}}}}}}}}}}}}}}}function X(aR){return function(aV,aT){var aU=false,aS;if(aI&&aV.peek()=="@"&&aV.match(aA)){aT.tokenize=aa;return Q("jsonld-keyword","meta")}while((aS=aV.next())!=null){if(aS==aR&&!aU){break}aU=!aU&&aS=="\\"}if(!aU){aT.tokenize=aa}return Q("string","string")}}function aH(aU,aT){var aR=false,aS;while(aS=aU.next()){if(aS=="/"&&aR){aT.tokenize=aa;break}aR=(aS=="*")}return Q("comment","comment")}function aJ(aU,aS){var aT=false,aR;while((aR=aU.next())!=null){if(!aT&&(aR=="`"||aR=="$"&&aU.eat("{"))){aS.tokenize=aa;break}aT=!aT&&aR=="\\"}return Q("quasi","string-2",aU.current())}var o="([{}])";function aF(aZ,aT){if(aT.fatArrowAt){aT.fatArrowAt=null}var aY=aZ.string.indexOf("=>",aZ.start);if(aY<0){return}if(g){var aV=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(aZ.string.slice(aZ.start,aY));if(aV){aY=aV.index}}var aW=0,aU=false;for(var aX=aY-1;aX>=0;--aX){var aR=aZ.string.charAt(aX);var aS=o.indexOf(aR);if(aS>=0&&aS<3){if(!aW){++aX;break}if(--aW==0){if(aR=="("){aU=true}break}}else{if(aS>=3&&aS<6){++aW}else{if(aD.test(aR)){aU=true}else{if(/["'\/]/.test(aR)){return}else{if(aU&&!aW){++aX;break}}}}}}if(aU&&!aW){aT.fatArrowAt=aX}}var c={atom:true,number:true,variable:true,string:true,regexp:true,"this":true,"jsonld-keyword":true};function O(aW,aS,aR,aV,aT,aU){this.indented=aW;this.column=aS;this.type=aR;this.prev=aT;this.info=aU;if(aV!=null){this.align=aV}}function v(aU,aT){for(var aS=aU.localVars;aS;aS=aS.next){if(aS.name==aT){return true}}for(var aR=aU.context;aR;aR=aR.prev){for(var aS=aR.vars;aS;aS=aS.next){if(aS.name==aT){return true}}}}function f(aV,aS,aR,aU,aW){var aX=aV.cc;H.state=aV;H.stream=aW;H.marked=null,H.cc=aX;H.style=aS;if(!aV.lexical.hasOwnProperty("align")){aV.lexical.align=true}while(true){var aT=aX.length?aX.pop():C?aw:aO;if(aT(aR,aU)){while(aX.length&&aX[aX.length-1].lex){aX.pop()()}if(H.marked){return H.marked}if(aR=="variable"&&v(aV,aU)){return"variable-2"}return aS}}}var H={state:null,column:null,marked:null,cc:null};function ah(){for(var aR=arguments.length-1;aR>=0;aR--){H.cc.push(arguments[aR])}}function am(){ah.apply(null,arguments);return true}function aE(aS){function aR(aV){for(var aU=aV;aU;aU=aU.next){if(aU.name==aS){return true}}return false}var aT=H.state;H.marked="def";if(aT.context){if(aR(aT.localVars)){return}aT.localVars={name:aS,next:aT.localVars}}else{if(aR(aT.globalVars)){return}if(ar.globalVars){aT.globalVars={name:aS,next:aT.globalVars}}}}var t={name:"this",next:{name:"arguments"}};function z(){H.state.context={prev:H.state.context,vars:H.state.localVars};H.state.localVars=t}function A(){H.state.localVars=H.state.context.vars;H.state.context=H.state.context.prev}function aM(aS,aT){var aR=function(){var aW=H.state,aU=aW.indented;if(aW.lexical.type=="stat"){aU=aW.lexical.indented}else{for(var aV=aW.lexical;aV&&aV.type==")"&&aV.align;aV=aV.prev){aU=aV.indented}}aW.lexical=new O(aU,H.stream.column(),aS,null,aW.lexical,aT)};aR.lex=true;return aR}function h(){var aR=H.state;if(aR.lexical.prev){if(aR.lexical.type==")"){aR.indented=aR.lexical.indented}aR.lexical=aR.lexical.prev}}h.lex=true;function u(aR){function aS(aT){if(aT==aR){return am()}else{if(aR==";"){return ah()}else{return am(aS)}}}return aS}function aO(aR,aS){if(aR=="var"){return am(aM("vardef",aS.length),d,u(";"),h)}if(aR=="keyword a"){return am(aM("form"),ax,aO,h)}if(aR=="keyword b"){return am(aM("form"),aO,h)}if(aR=="{"){return am(aM("}"),B,h)}if(aR==";"){return am()}if(aR=="if"){if(H.state.lexical.info=="else"&&H.state.cc[H.state.cc.length-1]==h){H.state.cc.pop()()}return am(aM("form"),ax,aO,h,e)}if(aR=="function"){return am(R)}if(aR=="for"){return am(aM("form"),x,aO,h)}if(aR=="variable"){return am(aM("stat"),aP)}if(aR=="switch"){return am(aM("form"),ax,aM("}","switch"),u("{"),B,h,h)}if(aR=="case"){return am(aw,u(":"))}if(aR=="default"){return am(u(":"))}if(aR=="catch"){return am(aM("form"),z,u("("),al,u(")"),aO,h,A)}if(aR=="class"){return am(aM("form"),ac,h)}if(aR=="export"){return am(aM("stat"),aN,h)}if(aR=="import"){return am(aM("stat"),an,h)}if(aR=="module"){return am(aM("form"),i,aM("}"),u("{"),B,h,h)}if(aR=="type"){return am(j,u("operator"),j,u(";"))}if(aR=="async"){return am(aO)}return ah(aM("stat"),aw,u(";"),h)}function aw(aR){return af(aR,false)}function aL(aR){return af(aR,true)}function ax(aR){if(aR!="("){return ah()}return am(aM(")"),aw,u(")"),h)}function af(aS,aU){if(H.state.fatArrowAt==H.stream.start){var aR=aU?S:ad;if(aS=="("){return am(z,aM(")"),aC(i,")"),h,u("=>"),aR,A)}else{if(aS=="variable"){return ah(z,i,u("=>"),aR,A)}}}var aT=aU?k:ai;if(c.hasOwnProperty(aS)){return am(aT)}if(aS=="function"){return am(R,aT)}if(aS=="class"){return am(aM("form"),M,h)}if(aS=="keyword c"||aS=="async"){return am(aU?at:aq)}if(aS=="("){return am(aM(")"),aq,u(")"),h,aT)}if(aS=="operator"||aS=="spread"){return am(aU?aL:aw)}if(aS=="["){return am(aM("]"),p,h,aT)}if(aS=="{"){return aG(w,"}",null,aT)}if(aS=="quasi"){return ah(V,aT)}if(aS=="new"){return am(L(aU))}return am()}function aq(aR){if(aR.match(/[;\}\)\],]/)){return ah()}return ah(aw)}function at(aR){if(aR.match(/[;\}\)\],]/)){return ah()}return ah(aL)}function ai(aR,aS){if(aR==","){return am(aw)}return k(aR,aS,false)}function k(aR,aT,aV){var aS=aV==false?ai:k;var aU=aV==false?aw:aL;if(aR=="=>"){return am(z,aV?S:ad,A)}if(aR=="operator"){if(/\+\+|--/.test(aT)){return am(aS)}if(aT=="?"){return am(aw,u(":"),aU)}return am(aU)}if(aR=="quasi"){return ah(V,aS)}if(aR==";"){return}if(aR=="("){return aG(aL,")","call",aS)}if(aR=="."){return am(au,aS)}if(aR=="["){return am(aM("]"),aq,u("]"),h,aS)}}function V(aR,aS){if(aR!="quasi"){return ah()}if(aS.slice(aS.length-2)!="${"){return am(V)}return am(aw,s)}function s(aR){if(aR=="}"){H.marked="string-2";H.state.tokenize=aJ;return am(V)}}function ad(aR){aF(H.stream,H.state);return ah(aR=="{"?aO:aw)}function S(aR){aF(H.stream,H.state);return ah(aR=="{"?aO:aL)}function L(aR){return function(aS){if(aS=="."){return am(aR?q:ab)}else{return ah(aR?aL:aw)}}}function ab(aR,aS){if(aS=="target"){H.marked="keyword";return am(ai)}}function q(aR,aS){if(aS=="target"){H.marked="keyword";return am(k)}}function aP(aR){if(aR==":"){return am(h,aO)}return ah(ai,u(";"),h)}function au(aR){if(aR=="variable"){H.marked="property";return am()}}function w(aR,aS){if(aR=="async"){H.marked="property";return am(w)}else{if(aR=="variable"||H.style=="keyword"){H.marked="property";if(aS=="get"||aS=="set"){return am(N)}return am(P)}else{if(aR=="number"||aR=="string"){H.marked=aI?"property":(H.style+" property");return am(P)}else{if(aR=="jsonld-keyword"){return am(P)}else{if(aR=="modifier"){return am(w)}else{if(aR=="["){return am(aw,u("]"),P)}else{if(aR=="spread"){return am(aw)}else{if(aR==":"){return ah(P)}}}}}}}}}function N(aR){if(aR!="variable"){return ah(P)}H.marked="property";return am(R)}function P(aR){if(aR==":"){return am(aL)}if(aR=="("){return ah(R)}}function aC(aU,aR,aS){function aT(aW,aX){if(aS?aS.indexOf(aW)>-1:aW==","){var aV=H.state.lexical;if(aV.info=="call"){aV.pos=(aV.pos||0)+1}return am(function(aY,aZ){if(aY==aR||aZ==aR){return ah()}return ah(aU)},aT)}if(aW==aR||aX==aR){return am()}return am(u(aR))}return function(aV,aW){if(aV==aR||aW==aR){return am()}return ah(aU,aT)}}function aG(aU,aR,aT){for(var aS=3;aS<arguments.length;aS++){H.cc.push(arguments[aS])}return am(aM(aR,aT),aC(aU,aR),h)}function B(aR){if(aR=="}"){return am()}return ah(aO,B)}function Z(aR,aS){if(g){if(aR==":"){return am(j)}if(aS=="?"){return am(Z)}}}function j(aR){if(aR=="variable"){H.marked="variable-3";return am(K)}if(aR=="string"||aR=="number"||aR=="atom"){return am(K)}if(aR=="{"){return am(aM("}"),aC(av,"}",",;"),h)}if(aR=="("){return am(aC(aj,")"),W)}}function W(aR){if(aR=="=>"){return am(j)}}function av(aR,aS){if(aR=="variable"||H.style=="keyword"){H.marked="property";return am(av)}else{if(aS=="?"){return am(av)}else{if(aR==":"){return am(j)}}}}function aj(aR){if(aR=="variable"){return am(aj)}else{if(aR==":"){return am(j)}}}function K(aR,aS){if(aS=="<"){return am(aM(">"),aC(j,">"),h,K)}if(aS=="|"||aR=="."){return am(j)}if(aR=="["){return am(u("]"),K)}}function d(){return ah(i,Z,ak,ae)}function i(aR,aS){if(aR=="modifier"){return am(i)}if(aR=="variable"){aE(aS);return am()}if(aR=="spread"){return am(i)}if(aR=="["){return aG(i,"]")}if(aR=="{"){return aG(aK,"}")}}function aK(aR,aS){if(aR=="variable"&&!H.stream.match(/^\s*:/,false)){aE(aS);return am(ak)}if(aR=="variable"){H.marked="property"}if(aR=="spread"){return am(i)}if(aR=="}"){return ah()}return am(u(":"),i,ak)}function ak(aR,aS){if(aS=="="){return am(aL)}}function ae(aR){if(aR==","){return am(d)}}function e(aR,aS){if(aR=="keyword b"&&aS=="else"){return am(aM("form","else"),aO,h)}}function x(aR){if(aR=="("){return am(aM(")"),G,u(")"),h)}}function G(aR){if(aR=="var"){return am(d,u(";"),F)}if(aR==";"){return am(F)}if(aR=="variable"){return am(y)}return ah(aw,u(";"),F)}function y(aR,aS){if(aS=="in"||aS=="of"){H.marked="keyword";return am(aw)}return am(ai,F)}function F(aR,aS){if(aR==";"){return am(E)}if(aS=="in"||aS=="of"){H.marked="keyword";return am(aw)}return ah(aw,u(";"),E)}function E(aR){if(aR!=")"){am(aw)}}function R(aR,aS){if(aS=="*"){H.marked="keyword";return am(R)}if(aR=="variable"){aE(aS);return am(R)}if(aR=="("){return am(z,aM(")"),aC(al,")"),h,Z,aO,A)}}function al(aR){if(aR=="spread"){return am(al)}return ah(i,Z,ak)}function M(aR,aS){if(aR=="variable"){return ac(aR,aS)}return T(aR,aS)}function ac(aR,aS){if(aR=="variable"){aE(aS);return am(T)}}function T(aR,aS){if(aS=="<"){return am(aM(">"),aC(j,">"),h,T)}if(aS=="extends"||aS=="implements"||(g&&aR==",")){return am(g?j:aw,T)}if(aR=="{"){return am(aM("}"),r,h)}}function r(aR,aS){if(aR=="variable"||H.style=="keyword"){if((aS=="async"||aS=="static"||aS=="get"||aS=="set"||(g&&(aS=="public"||aS=="private"||aS=="protected"||aS=="readonly"||aS=="abstract")))&&H.stream.match(/^\s+[\w$\xa1-\uffff]/,false)){H.marked="keyword";return am(r)}H.marked="property";return am(g?aQ:R,r)}if(aR=="["){return am(aw,u("]"),g?aQ:R,r)}if(aS=="*"){H.marked="keyword";return am(r)}if(aR==";"){return am(r)}if(aR=="}"){return am()}}function aQ(aR,aS){if(aS=="?"){return am(aQ)}if(aR==":"){return am(j,ak)}if(aS=="="){return am(aL)}return ah(R)}function aN(aR,aS){if(aS=="*"){H.marked="keyword";return am(ap,u(";"))}if(aS=="default"){H.marked="keyword";return am(aw,u(";"))}if(aR=="{"){return am(aC(ao,"}"),ap,u(";"))}return ah(aO)}function ao(aR,aS){if(aS=="as"){H.marked="keyword";return am(u("variable"))}if(aR=="variable"){return ah(aL,ao)}}function an(aR){if(aR=="string"){return am()}return ah(az,m,ap)}function az(aR,aS){if(aR=="{"){return aG(az,"}")}if(aR=="variable"){aE(aS)}if(aS=="*"){H.marked="keyword"}return am(l)}function m(aR){if(aR==","){return am(az,m)}}function l(aR,aS){if(aS=="as"){H.marked="keyword";return am(az)}}function ap(aR,aS){if(aS=="from"){H.marked="keyword";return am(aw)}}function p(aR){if(aR=="]"){return am()}return ah(aC(aL,"]"))}function ay(aS,aR){return aS.lastType=="operator"||aS.lastType==","||U.test(aR.charAt(0))||/[,.]/.test(aR.charAt(0))}return{startState:function(aS){var aR={tokenize:aa,lastType:"sof",cc:[],lexical:new O((aS||0)-n,0,"block",false),localVars:ar.localVars,context:ar.localVars&&{vars:ar.localVars},indented:aS||0};if(ar.globalVars&&typeof ar.globalVars=="object"){aR.globalVars=ar.globalVars}return aR},token:function(aT,aS){if(aT.sol()){if(!aS.lexical.hasOwnProperty("align")){aS.lexical.align=false}aS.indented=aT.indentation();aF(aT,aS)}if(aS.tokenize!=aH&&aT.eatSpace()){return null}var aR=aS.tokenize(aT,aS);if(Y=="comment"){return aR}aS.lastType=Y=="operator"&&(J=="++"||J=="--")?"incdec":Y;return f(aS,aR,Y,J,aT)},indent:function(aR,aU){if(aR.tokenize==aH){return a.Pass}if(aR.tokenize!=aa){return 0}var aY=aU&&aU.charAt(0),aZ=aR.lexical,aX;if(!/^\s*else\b/.test(aU)){for(var aT=aR.cc.length-1;aT>=0;--aT){var aV=aR.cc[aT];if(aV==h){aZ=aZ.prev}else{if(aV!=e){break}}}}while((aZ.type=="stat"||aZ.type=="form")&&(aY=="}"||((aX=aR.cc[aR.cc.length-1])&&(aX==ai||aX==k)&&!/^[,\.=+\-*:?[\(]/.test(aU)))){aZ=aZ.prev}if(D&&aZ.type==")"&&aZ.prev.type=="stat"){aZ=aZ.prev}var aW=aZ.type,aS=aY==aW;if(aW=="vardef"){return aZ.indented+(aR.lastType=="operator"||aR.lastType==","?aZ.info+1:0)}else{if(aW=="form"&&aY=="{"){return aZ.indented}else{if(aW=="form"){return aZ.indented+n}else{if(aW=="stat"){return aZ.indented+(ay(aR,aU)?D||n:0)}else{if(aZ.info=="switch"&&!aS&&ar.doubleIndentSwitch!=false){return aZ.indented+(/^(?:case|default)\b/.test(aU)?n:2*n)}else{if(aZ.align){return aZ.column+(aS?0:1)}else{return aZ.indented+(aS?0:n)}}}}}}},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:C?null:"/*",blockCommentEnd:C?null:"*/",lineComment:C?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:C?"json":"javascript",jsonldMode:aI,jsonMode:C,expressionAllowed:b,skipExpression:function(aR){var aS=aR.cc[aR.cc.length-1];if(aS==aw||aS==aL){aR.cc.pop()}}}});a.registerHelper("wordChars","javascript",/[\w$]/);a.defineMIME("text/javascript","javascript");a.defineMIME("text/ecmascript","javascript");a.defineMIME("application/javascript","javascript");a.defineMIME("application/x-javascript","javascript");a.defineMIME("application/ecmascript","javascript");a.defineMIME("application/json",{name:"javascript",json:true});a.defineMIME("application/x-json",{name:"javascript",json:true});a.defineMIME("application/ld+json",{name:"javascript",jsonld:true});a.defineMIME("text/typescript",{name:"javascript",typescript:true});a.defineMIME("application/typescript",{name:"javascript",typescript:true})});
