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
    describe('TeamGameStats', function() {
      beforeEach(function() {
        instance = new cfb.TeamGameStats();
      });

      it('should create an instance of TeamGameStats', function() {
        // TODO: update the code to test TeamGameStats
        expect(instance).to.be.a(cfb.TeamGameStats);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property stat (base name: "stat")', function() {
        // TODO: update the code to test the property stat
        expect(instance).to.have.property('stat');
        // expect(instance.stat).to.be(expectedValueLiteral);
      });

    });
  });

}));
