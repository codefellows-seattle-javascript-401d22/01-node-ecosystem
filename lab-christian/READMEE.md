### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.

In greet.js, I am exporting a single function. In arithmetic.js, I am exporting 2 functions. 

Greet is a function that takes a string as its input and has an arity of one. If the type of data input is not a string, the function will return null. Otherwise, it will return a string that reads: 'Hello <input>'.

Arithmetic.add is a function that takes a number as its input and has an arity of two. If the type of data input is not a number, the function will return null. Otherwise, it will return the sum of those two numbers (or integers). 

Arithmetic.subtract is a function that takes a number as its input and has an arity of two. If the type of data input is not a number, the function will return null. Otherwise, it will return the difference of those two numbers (or integers). 