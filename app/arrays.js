exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
      if(newArr.indexOf(arr[i]) < 0) {
        newArr.push(arr[i]);
      }
    }

    for(var j = 0; j < newArr.length; j++){
      if(newArr[j] === item){
        newArr.splice(j, 1);

      }
    }
    return newArr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
  var occ = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item){
        occ.push(arr[i]);
      }
    }
    return occ.length;
  },

  duplicates : function(arr) {
    arr.sort();
    var duplicatesArr = [];
    var newArr = [];
    var nonRepeatedDuplicateNumbers = [];

    for(var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) < 0){
        newArr.push(arr[i]);
      } else {
        duplicatesArr.push(arr[i]);
      }
    }

    for(var j = 0; j < duplicatesArr.length; j++){
      if(nonRepeatedDuplicateNumbers.indexOf(duplicatesArr[j]) < 0) {
        nonRepeatedDuplicateNumbers.push(duplicatesArr[j]);
      }
    }
    return nonRepeatedDuplicateNumbers;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexOcc = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        indexOcc.push(i);
      }
    }
    return indexOcc;
  }
};
