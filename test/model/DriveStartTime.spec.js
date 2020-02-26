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
    describe('DriveStartTime', function() {
      beforeEach(function() {
        instance = new cfb.DriveStartTime();
      });

      it('should create an instance of DriveStartTime', function() {
        // TODO: update the code to test DriveStartTime
        expect(instance).to.be.a(cfb.DriveStartTime);
      });

      it('should have the property minutes (base name: "minutes")', function() {
        // TODO: update the code to test the property minutes
        expect(instance).to.have.property('minutes');
        // expect(instance.minutes).to.be(expectedValueLiteral);
      });

      it('should have the property seconds (base name: "seconds")', function() {
        // TODO: update the code to test the property seconds
        expect(instance).to.have.property('seconds');
        // expect(instance.seconds).to.be(expectedValueLiteral);
      });

    });
  });

}));
