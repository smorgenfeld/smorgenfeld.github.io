class word {
  constructor(word, properNoun, needsThe = false, needsIs = false) {
    this.word = word;
    this.needsThe = needsThe;
    this.properNoun = properNoun;
    this.needsIs = needsIs;
  }

  I(we, needsAre = false, startOfSentence = false) {
    var output = this.word;
    if (we) {
      if (this.word == "Us") {
        output = "We"
      }
      else if (this.word == "Me") {
        output = "I"
      }
    }
    else {
      if (this.word == "We") {
        output = "Us"
      }
      else if (this.word == "I") {
        output = "Me"
      }
    }

    if (needsAre) {
      if (output = "I") {
        output = "I'm"
      }
      else if (output = "We") {
        output = "We're";
      }
    }

    if (!startOfSentence && (output != "I" && output != "I'm")) {
      output = output.toLowerCase();
    }
    return output;
  }

  p(needsThe = true, startOfSentence = false, needsIs = false, we = false) {
    var toReturn = this.word;

    // special case
    if (this.word == "I" || this.word == "Me" || this.word == "We" || this.word == "Us") {
      return this.I(we, needsIs, startOfSentence);
    }

    if (needsIs && this.needsIs) {

      if (!startOfSentence && !this.properNoun) {
        toReturn = toReturn.toLowerCase();
      }
      if (toReturn[-1] == 's') {
        toReturn = toReturn + " are"
      }
      else {
        toReturn = toReturn + " is"
      }

    }



    if (needsThe && this.needsThe) {
      if (!this.properNoun) {
        toReturn = toReturn.toLowerCase();
      }
      if (startOfSentence) {
        toReturn = "The " + toReturn;
      }
      else {
        toReturn = "the " + toReturn;
      }
    }
    else {
      if (!startOfSentence && !this.properNoun) {
        toReturn = toReturn.toLowerCase();
      }
    }
    return toReturn;
  }
}

function endsSentence(input) {
  if (input === "") {
    return true;
  }
  return !(input[input.length-1] != '.' && input[input.length-1] != '!' && input[input.length-1] != '?')
}
