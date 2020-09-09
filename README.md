# data-tab-board

React data-tab-board

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

<!-- [![Test coverage][coveralls-image]][coveralls-url] -->

[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/data-tab-board.svg?style=flat-square
[npm-url]: https://npmjs.org/package/data-tab-board
[travis-image]: https://travis-ci.org/ybzjsxh/data-tab-board.svg?branch=master
[travis-url]: https://travis-ci.org/ybzjsxh/data-tab-board
[coveralls-image]: https://img.shields.io/coveralls/ybzjsxh/data-tab-board.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/ybzjsxh/data-tab-board?branch=master
[gemnasium-image]: https://img.shields.io/gemnasium/ybzjsxh/data-tab-board.svg?style=flat-square
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: https://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/data-tab-board.svg?style=flat-square
[download-url]: https://npmjs.org/package/data-tab-board

## Screenshot

<img src="https://front-images.oss-cn-hangzhou.aliyuncs.com/i4/8e7d52524baffa614678e9a7bd1118c7-1175-149.png" width="1000" />

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE  Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE 8 + ✔                                                                                                                                                                                                       | Firefox 31.0+ ✔                                                                                                                                                                                                   | Chrome 31.0+ ✔                                                                                                                                                                                                | Safari 7.0+ ✔                                                                                                                                                                                                 | Opera 30.0+ ✔                                                                                                                                                                                             |

## Install

[![data-tab-board](https://nodei.co/npm/data-tab-board.png)](https://npmjs.org/package/data-tab-board)

## Usage

```js
var Board = require('data-tab-board');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(<Board title='' align='left' type='success' tip={<span>Board</span>} />, container);
```

## Examples

`npm start` and then go to
<http://localhost:9001>

Online examples: [github-pages](https://ybzjsxh.github.io/data-tab-board/?path=/story/data-tab-board--simple) or [vercel](https://data-tab-board.vercel.app/?path=/story/data-tab-board--simple)

## API

### Props

|     name     |        type         |  default  |                                        description                                         |
| :----------: | :-----------------: | :-------: | :----------------------------------------------------------------------------------------: |
|    style?    | React.CSSProperties |    {}     |                                   custom container style                                   |
| titleStyle?  | React.CSSProperties |    {}     |                                     custom title style                                     |
| numberStyle? | React.CSSProperties |    {}     |                                    custom number style                                     |
|  tipStyle?   | React.CSSProperties |    {}     |                                      custom tip style                                      |
|     type     |       string        | 'primary' |                      one of ['primary', 'success', 'warning', 'info']                      |
|    align     |       string        |  'right'  | one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
|   showTip    |  boolean \| string  |   true    |                                    show tip icon or not                                    |
|     tip      | string \| ReactNode |    ''     |                                         tips info                                          |
|    number    |  string \| number   |           |                                           number                                           |

## Development

```bash
npm install
npm start
```

## Test Case

```bash
npm test
npm run chrome-test
```

## Coverage

```bash
npm run coverage
```

## License

`data-tab-board` is released under the MIT license.
