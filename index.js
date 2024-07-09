const drawPattern = (n) => {

    const midLine = (n / 2 - 0.5);
  
    for (let i = 0; i <= midLine; i++) {
      let row = "";
      for (let j = 0; j < midLine - i; j++) {
        row= row + "-";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        row= row + "*";
      }
      console.log(row);
    }
  
    for (let i = midLine - 1; i >= 0; i--) {
      let row = "";
      for (let j = 0; j < midLine - i; j++) {
        row= row + "-";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        row= row + "*";
      }
      console.log(row);
    }
  }
  
  drawPattern(7);




  ////////////////////////////////////

  const Pattern = (n) => {

    for (let i = 0; i < n - 1; i++) {
      let pattern = "";
      for (let j = 0; j < n - i; j++) {
        pattern += "*";
      }
      for (let k = 0; k < 2 * i; k++) {
        pattern += " ";
      }
      for (let l = 0; l < n - i; l++) {
        pattern += "*";
      }
      console.log(pattern);
    }
  
    let lastLine = "";
    for (let m = 0; m < n * 2; m++) {
      lastLine += "*";
    }
    console.log(lastLine);
  };
  
  Pattern(5);