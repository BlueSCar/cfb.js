/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\").
 *
 * OpenAPI spec version: 3.1.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    describe('TeamRecord', function() {
      beforeEach(function() {
        instance = new cfb.TeamRecord();
      });

      it('should create an instance of TeamRecord', function() {
        // TODO: update the code to test TeamRecord
        expect(instance).to.be.a(cfb.TeamRecord);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property division (base name: "division")', function() {
        // TODO: update the code to test the property division
        expect(instance).to.have.property('division');
        // expect(instance.division).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property conferenceGames (base name: "conferenceGames")', function() {
        // TODO: update the code to test the property conferenceGames
        expect(instance).to.have.property('conferenceGames');
        // expect(instance.conferenceGames).to.be(expectedValueLiteral);
      });

      it('should have the property homeGames (base name: "homeGames")', function() {
        // TODO: update the code to test the property homeGames
        expect(instance).to.have.property('homeGames');
        // expect(instance.homeGames).to.be(expectedValueLiteral);
      });

      it('should have the property awayGames (base name: "awayGames")', function() {
        // TODO: update the code to test the property awayGames
        expect(instance).to.have.property('awayGames');
        // expect(instance.awayGames).to.be(expectedValueLiteral);
      });

    });
  });

}));
