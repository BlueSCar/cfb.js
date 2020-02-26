/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.24.5
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
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
    describe('VenueLocation', function() {
      beforeEach(function() {
        instance = new cfb.VenueLocation();
      });

      it('should create an instance of VenueLocation', function() {
        // TODO: update the code to test VenueLocation
        expect(instance).to.be.a(cfb.VenueLocation);
      });

      it('should have the property x (base name: "x")', function() {
        // TODO: update the code to test the property x
        expect(instance).to.have.property('x');
        // expect(instance.x).to.be(expectedValueLiteral);
      });

      it('should have the property y (base name: "y")', function() {
        // TODO: update the code to test the property y
        expect(instance).to.have.property('y');
        // expect(instance.y).to.be(expectedValueLiteral);
      });

    });
  });

}));
