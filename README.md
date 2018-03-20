# babel-plugin-addition-precision

## usage
```javascript
npm i babel-plugin-addition-precision -D
```


### before
```javascript
0.1 + 0.2 = 0.30000000000000004;
0.3 + 0.6 = 0.8999999999999999;
0.4 + 1.3 = 1.7000000000000002;
```

### after
```javascript
0.1 + 0.2 = 0.3;
0.3 + 0.6 = 0.9;
0.4 + 1.3 = 1.7;
```