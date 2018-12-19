# learn-webpack

### 初次运行命令，预览bundle.js
项目启动后：创建app.js，入口index.html
```
document.querySelector('#root').innerHTML = 'Hello World!';
```
index.html:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>learn-webpack</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="app" id="app"></div>
</body>
<script src="./dist/main.js"></script>

</html>
```
执行webpack命令：
```
webpack app.js
```
会发现dist文件夹下多了一份打包好的main.js，且是压缩后的，并受到一条报警：
> WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

提示没有指定对应的打包环境，默认走线上方式，线上都是压缩的，和开发环境打包有一系列细节区别，如chunk大小、日志提示等，见：https://webpack.js.org/concepts/mode/），如果不压缩，可执行命令：
```
webpack app.js --mode development
```
会看到main.js明显比上一次大了很多(废话)

打开main，去除注释，看到导致结构：
```
(function (modules) { // webpackBootstrap
 	// The module cache
    var installedModules = {};
    // The require function
    function __webpack_require__ (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        // Return the exports of the module
        return module.exports;
    }

    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;

    // expose the module cache
    __webpack_require__.c = installedModules;

    // define getter function for harmony exports
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
        }
    };
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };

    // create a fake namespace object
    // mode & 1: value is a module id, require it
    // mode & 2: merge all properties of value into the ns
    // mode & 4: return value when already ns object
    // mode & 8|1: behave like require
    __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        if (mode & 2 && typeof value !== 'string') {
            for (var key in value) {
                __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
            }
        }
        return ns;
    };

    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
            function getDefault () {
                return module['default'];
            } :
            function getModuleExports () {
                return module;
            };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    // __webpack_public_path__
    __webpack_require__.p = '';
    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = './app.js');
})
/***********************app.js作为对象参数，传入上述自执行函数*************************/
({
/***/ './app.js': function (module, exports) {
        eval("document.querySelector('#app').innerHTML = 'Hello World!';\n\n\n//# sourceURL=webpack:///./app.js?");
    }
});

```
__webpack_require__作为模块加载函数，各模块在modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);中被执行。

下面试一下多模块：


在看main.js中的最后代码：
```
{
    './a.js':
    /*! **************!*\
  !*** ./a.js ***!
  \**************/
    /*! exports provided: default */
    function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval("__webpack_require__.r(__webpack_exports__);\nlet a = {\n    log: function (t) {\n        console.log(t + 'ttt');\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (a);\n\n\n//# sourceURL=webpack:///./a.js?");
    },

    './app.js':
    /*! ****************!*\
  !*** ./app.js ***!
  \****************/
    /*! no exports provided */
    function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./a.js\");\n\n_a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('test');\ndocument.querySelector('#app').innerHTML = 'Hello World!';\n\n\n//# sourceURL=webpack:///./app.js?");
    }
}
```
在app.js中会看到多了这份代码：
```
var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./a.js\");\n\n_a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log('test');
```
用以声明依赖了a.js。

