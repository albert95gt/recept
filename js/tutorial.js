function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    if(message < maxLength) {
    result = message;
    }else {
    result = `${message}...`;
    }
    /// Change code above this line
    return result;
  }
  console.log(formatMessage('Vestibulum facilisis purus nec', 30));