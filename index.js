const babel = require('babel-core');
const t = require('babel-types');
const Big = require('big.js');

const visitor = {
    BinaryExpression(path) {
        let node = path.node;
        let result;
        if(t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)){
            if(node.operator == '+'){
                result = +new Big(node.left.value).plus(node.right.value);
            };
        };
  
        if(result){
            path.replaceWith(t.numericLiteral(result));
        };
    }
};

module.exports = function(babel){
    return {
        visitor
    };
};
