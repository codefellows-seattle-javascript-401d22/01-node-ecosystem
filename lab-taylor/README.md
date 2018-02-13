# Greet Module 

The greet module contains a single function that takes one(1) argument as a 'name', and returns 'hello name'. The argument you pass must have the type of string or the function returns null.

```
module.exports = function(name) {
    if (typeof(name)!== 'string') return null;
    return `hello ${name}`;
}
```

# Arthmetic Module
The arthmetic module contains two methods
### Add

The add method accepts two(2) arguements and returns the sum of those arguments. If the type of the arguments passed is not number the method returns null.

```
exports.add = function(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return null;
    return a+b;
}
```
### Sub

The sub method accepts two(2) arguments and returns the difference of thos arguments. The arguments must be passes as numbers, or the method returns null.

```
exports.sub = function(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return null;
    return a-b;
}
```