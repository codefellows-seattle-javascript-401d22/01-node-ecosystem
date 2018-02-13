### Documentation
In your README.md file, describe the exported values of each module defined in your `lib` directory. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and the expected output behavior (for both valid and invalid use). Feel free to include any additional information that you would like.


#Questions
I have 2 exported files from my lib directory and 3 exported functions.

Greet has an airity of 1 with a expected input data-type of string. The expected output data-type is a string (hello plus the input string) if there is a valid input of a string, if there is no input parameter then an error will be thrown and if the input type is not a string then the function will return a null value.

Arithmetic.add has an airity of 2 with expected input data-types of integers. The expected output data-type is an integer(the sum of both parameters) if there is valid inputs of integers, if there is an incorrect number of input parameters then an error will be thrown and if either input type is not an integer then the function will return a null value.

Arithmetic.sub has an airity of 2 with expected input data-types of integers. The expected output data-type is an integer(the difference of parameter a - parameter b) if there is valid inputs of integers, if there is an incorrect number of input parameters then an error will be thrown and if either input type is not an integer then the function will return a null value.