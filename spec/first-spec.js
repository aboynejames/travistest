
    var buster = require("buster");

buster.spec.expose(); // Make spec functions global

var spec = describe("basic node test", function () {
    before(function () {
        this.newhybrid = 'testnumberone';
			
    });

    it("Please test the first", function () {
			
        buster.assert.equals('testnumberone', this.newhybrid);
    });
		
  	
		
	});  // closes spec
