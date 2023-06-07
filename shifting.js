class Shifting {
    constructor(r, c) {
      this.array = new Array(r).fill(null).map(() => new Array(c).fill(null));
      this.numRows = r;
      this.numCols = c;
    }
  
    getArray() {
      return this.array;
    }
  
    getNumRows() {
      return this.numRows;
    }
  
    getNumCols() {
      return this.numCols;
    }
  
    changeLetter(message) {
      const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let res = "";
  
      for (let i = 0; i < message.length; i++) {
        let keep = message[i];
  
        if (keep === "z") {
          res += "a";
        } else if (keep === "Z") {
          res += "A";
        } else if (alpha.indexOf(keep) === -1) {
          res += keep;
        } else {
          let track = alpha.indexOf(keep) + 1;
          res += alpha[track];
        }
      }
  
      return res;
    }
  
    fillBlock(n) {
      let i = 0;
  
      for (let r = 0; r < this.numRows; r++) {
        for (let c = 0; c < this.numCols; c++) {
          if (i !== n.length) {
            this.array[r][c] = n[i];
            i++;
          } else {
            this.array[r][c] = "!";
          }
        }
      }
    }
  
    encryptMessage(message) {
      let result = "";
  
      for (let i = 0; i < message.length; i += this.numRows * this.numCols) {
        this.fillBlock(message.substring(i));
        result += this.encryptOne();
      }
  
      result = this.changeLetter(result);
      return result;
    }
  
    encryptOne() {
      const lin = new Array(this.numRows).fill(null).map(() => new Array(this.numCols).fill(null));
      let res = "";
  
      for (let r = 0; r < this.numRows - 1; r++) {
        for (let c = 0; c < this.numCols - 1; c++) {
          lin[r + 1][c + 1] = this.array[r][c];
        }
      }
  
      for (let c = 0; c < this.numCols - 1; c++) {
        lin[0][c + 1] = this.array[this.numRows - 1][c];
      }
  
      for (let r = 0; r < this.numRows - 1; r++) {
        lin[r + 1][0] = this.array[r][this.numCols - 1];
      }
  
      lin[0][0] = this.array[this.numRows - 1][this.numCols - 1];
  
      for (let r = 0; r < this.numRows; r++) {
        for (let c = 0; c < this.numCols; c++) {
          res += lin[r][c];
        }
      }
  
      this.array = lin;
      return res;
    }
  
    removed(d) {
      let newn = d;
      let hold = newn[newn.length - 1];
  
      while (hold === "!") {
        hold = newn[newn.length - 1];
  
        if (hold === "!") {
          newn = newn.substring(0, newn.length - 1);
        }
      }
  
      return newn;
    }
  
    decrypt2(s) {
      let res = "";
      const lin = new Array(this.numRows).fill(null).map(() => new Array(this.numCols).fill(null));
      let i = 0;
  
      for (let r = 0; r < this.numRows; r++) {
        for (let c = 0; c < this.numCols; c++) {
          if (i !== s.length) {
            lin[r][c] = s[i];
            i++;
          }
        }
      }
  
      let save = "";
      for (let c = 1; c < this.numCols; c++) {
        save += lin[0][c];
      }
      save += lin[0][0];
  
      for (let z = 1; z < this.numRows; z++) {
        for (let d = 1; d < this.numCols; d++) {
          res += lin[z][d];
        }
        res += lin[z][0];
      }
  
      res += save;
      return res;
    }
  
    returnToLetter(message) {
      const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let res = "";
  
      for (let i = 0; i < message.length; i++) {
        let keep = message[i];
  
        if (keep === "a") {
          res += "z";
        } else if (keep === "A") {
          res += "Z";
        } else if (alpha.indexOf(keep) === -1) {
          res += keep;
        } else {
          let track = alpha.indexOf(keep) - 1;
          res += alpha[track];
        }
      }
  
      return res;
    }
  
    decryptMessage(encryptedMessage) {
      let result = "";
  
      for (let i = 0; i < encryptedMessage.length; i += this.numRows * this.numCols) {
        const s = encryptedMessage.substring(i, this.numRows * this.numCols + i);
        result += this.decrypt2(s);
      }
  
      result = this.removed(result);
      result = this.returnToLetter(result);
      return result;
    }
  }
  