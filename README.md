# plott-quality-distance

[![build status](https://secure.travis-ci.org/Plott/plott-quality-distance.png)](http://travis-ci.org/Plott/plott-quality-distance)

Converts quality of RSSI signal strength to distance


### `plott.qualityDistance(dBm, maximum)`

Converts quality of RSSI signal strength to distance.

### Parameters

| parameter | type    | description        |
| --------- | ------- | ------------------ |
| `dBm`     | Integer | RSSI dBm           |
| `maximum` | Number  | coverage of signal |


### Example

```js
var distance = plott.qualityDistance(-75, 400);

//=distance
```


**Returns** `Number`, distance

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install plott-quality-distance
```

## Tests

```sh
$ npm test
```


