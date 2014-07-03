# checksum-loader

A loader for [webpack](http://webpack.github.io/) that provides the checksum of a file. Useful when dynamically including resources that need a cache-busting suffix. 

```sh
$ npm install checksum-loader --save
```

### Usage

```js
var checksum = require('checksum!./file.js');
```

## License

Copyright &copy; 2014 [Brian Reavis](https://github.com/brianreavis) & [Contributors](https://github.com/naturalatlas/checksum-loader/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.