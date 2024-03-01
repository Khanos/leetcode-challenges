# Single Unique String Challenge

## Description

Given a string with characters, find the biggest substring that contains only unique characters in a row.

## Example

Input: "ABCDDDDEFGHI"

Output: "ABC"

## Approach

To solve this challenge, you can use a sliding window approach. Iterate through the string and keep track of the current substring. If a character is already present in the substring, update the start index of the substring to the next character. Keep track of the maximum length of the unique substring encountered so far.

## Complexity Analysis

The time complexity for this approach is O(n), where n is the length of the input string. The space complexity is O(1) since we are using a constant amount of extra space.

## Implementation

You can find an example implementation in [solution.ts](./solution.ts).

## Testing

You can test the solution using the provided test cases in [test.ts](./test.ts).

## Conclusion

This challenge can be solved efficiently using a sliding window approach. By keeping track of the current substring and updating the start index when a duplicate character is encountered, we can find the longest substring with unique characters in a row.

Feel free to provide feedback or ask any questions!
