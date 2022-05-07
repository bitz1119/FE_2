/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let isValid = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (s[i] == "}") {
        // check top of stack
        if (stack.length != 0 && stack[stack.length - 1] == "{") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      } else if (s[i] == "]") {
        // check top of stack
        if (stack.length != 0 && stack[stack.length - 1] == "[") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      }
      if (s[i] == ")") {
        if (stack.length != 0 && stack[stack.length - 1] == "(") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      }
    }
  }

  if (isValid === false) {
    return false;
  } else if (isValid === true) {
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
