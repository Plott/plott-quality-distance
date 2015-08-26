var qualityDistance = require('../'),
    test = require('tape');

    test('distance', function (t){
      var distance = qualityDistance(-75, 400);
      t.equal(distance, 200, 'value ok');

      t.throws(function(){
        qualityDistance(-93, 'dog');
      }, 'Integer Required');

      t.end();
    });
