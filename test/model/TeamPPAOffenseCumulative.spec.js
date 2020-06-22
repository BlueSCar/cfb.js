/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.0.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.cfb);
  }
}(this, function(expect, cfb) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('TeamPPAOffenseCumulative', function() {
      beforeEach(function() {
        instance = new cfb.TeamPPAOffenseCumulative();
      });

      it('should create an instance of TeamPPAOffenseCumulative', function() {
        // TODO: update the code to test TeamPPAOffenseCumulative
        expect(instance).to.be.a(cfb.TeamPPAOffenseCumulative);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property passing (base name: "passing")', function() {
        // TODO: update the code to test the property passing
        expect(instance).to.have.property('passing');
        // expect(instance.passing).to.be(expectedValueLiteral);
      });

      it('should have the property rushing (base name: "rushing")', function() {
        // TODO: update the code to test the property rushing
        expect(instance).to.have.property('rushing');
        // expect(instance.rushing).to.be(expectedValueLiteral);
      });

    });
  });

}));
