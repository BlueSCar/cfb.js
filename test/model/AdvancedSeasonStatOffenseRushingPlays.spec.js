/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.11
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
    describe('AdvancedSeasonStatOffenseRushingPlays', function() {
      beforeEach(function() {
        instance = new cfb.AdvancedSeasonStatOffenseRushingPlays();
      });

      it('should create an instance of AdvancedSeasonStatOffenseRushingPlays', function() {
        // TODO: update the code to test AdvancedSeasonStatOffenseRushingPlays
        expect(instance).to.be.a(cfb.AdvancedSeasonStatOffenseRushingPlays);
      });

      it('should have the property rate (base name: "rate")', function() {
        // TODO: update the code to test the property rate
        expect(instance).to.have.property('rate');
        // expect(instance.rate).to.be(expectedValueLiteral);
      });

      it('should have the property ppa (base name: "ppa")', function() {
        // TODO: update the code to test the property ppa
        expect(instance).to.have.property('ppa');
        // expect(instance.ppa).to.be(expectedValueLiteral);
      });

      it('should have the property totalPPA (base name: "totalPPA")', function() {
        // TODO: update the code to test the property totalPPA
        expect(instance).to.have.property('totalPPA');
        // expect(instance.totalPPA).to.be(expectedValueLiteral);
      });

      it('should have the property successRate (base name: "successRate")', function() {
        // TODO: update the code to test the property successRate
        expect(instance).to.have.property('successRate');
        // expect(instance.successRate).to.be(expectedValueLiteral);
      });

      it('should have the property explosiveness (base name: "explosiveness")', function() {
        // TODO: update the code to test the property explosiveness
        expect(instance).to.have.property('explosiveness');
        // expect(instance.explosiveness).to.be(expectedValueLiteral);
      });

    });
  });

}));
