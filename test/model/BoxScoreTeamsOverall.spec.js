/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.1
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
    describe('BoxScoreTeamsOverall', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsOverall();
      });

      it('should create an instance of BoxScoreTeamsOverall', function() {
        // TODO: update the code to test BoxScoreTeamsOverall
        expect(instance).to.be.a(cfb.BoxScoreTeamsOverall);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property quarter1 (base name: "quarter1")', function() {
        // TODO: update the code to test the property quarter1
        expect(instance).to.have.property('quarter1');
        // expect(instance.quarter1).to.be(expectedValueLiteral);
      });

      it('should have the property quarter2 (base name: "quarter2")', function() {
        // TODO: update the code to test the property quarter2
        expect(instance).to.have.property('quarter2');
        // expect(instance.quarter2).to.be(expectedValueLiteral);
      });

      it('should have the property quarter3 (base name: "quarter3")', function() {
        // TODO: update the code to test the property quarter3
        expect(instance).to.have.property('quarter3');
        // expect(instance.quarter3).to.be(expectedValueLiteral);
      });

      it('should have the property quarter4 (base name: "quarter4")', function() {
        // TODO: update the code to test the property quarter4
        expect(instance).to.have.property('quarter4');
        // expect(instance.quarter4).to.be(expectedValueLiteral);
      });

    });
  });

}));
