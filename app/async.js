exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
      // lets make this actually take some time
      setTimeout(function() {
        var successful = true;
        // console.log('Im doing stuff async!');
        // console.log('K Im done now');
        if (successful) {
          resolve(value);
        } else {
          reject('There was an error');
        }
      }, 500);
    });
  },

  manipulateRemoteData : function(url) {
    return $.getJSON(url).then(function(data) {
      var nameArr = [];
      for(var i = 0; i < data['people'].length; i++) {
        nameArr.push(data['people'][i]["name"]);
      }
       return nameArr.sort();
    });
  }
};



