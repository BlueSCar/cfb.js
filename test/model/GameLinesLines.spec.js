/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.8
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
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
    describe('GameLinesLines', function() {
      beforeEach(function() {
        instance = new cfb.GameLinesLines();
      });

      it('should create an instance of GameLinesLines', function() {
        // TODO: update the code to test GameLinesLines
        expect(instance).to.be.a(cfb.GameLinesLines);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property spread (base name: "spread")', function() {
        // TODO: update the code to test the property spread
        expect(instance).to.have.property('spread');
        // expect(instance.spread).to.be(expectedValueLiteral);
      });

      it('should have the property formattedSpread (base name: "formattedSpread")', function() {
        // TODO: update the code to test the property formattedSpread
        expect(instance).to.have.property('formattedSpread');
        // expect(instance.formattedSpread).to.be(expectedValueLiteral);
      });

      it('should have the property overUnder (base name: "overUnder")', function() {
        // TODO: update the code to test the property overUnder
        expect(instance).to.have.property('overUnder');
        // expect(instance.overUnder).to.be(expectedValueLiteral);
      });

    });
  });

}));
