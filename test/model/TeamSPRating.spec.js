/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
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
    describe('TeamSPRating', function() {
      beforeEach(function() {
        instance = new cfb.TeamSPRating();
      });

      it('should create an instance of TeamSPRating', function() {
        // TODO: update the code to test TeamSPRating
        expect(instance).to.be.a(cfb.TeamSPRating);
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

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property ranking (base name: "ranking")', function() {
        // TODO: update the code to test the property ranking
        expect(instance).to.have.property('ranking');
        // expect(instance.ranking).to.be(expectedValueLiteral);
      });

      it('should have the property secondOrderWins (base name: "secondOrderWins")', function() {
        // TODO: update the code to test the property secondOrderWins
        expect(instance).to.have.property('secondOrderWins');
        // expect(instance.secondOrderWins).to.be(expectedValueLiteral);
      });

      it('should have the property sos (base name: "sos")', function() {
        // TODO: update the code to test the property sos
        expect(instance).to.have.property('sos');
        // expect(instance.sos).to.be(expectedValueLiteral);
      });

      it('should have the property offense (base name: "offense")', function() {
        // TODO: update the code to test the property offense
        expect(instance).to.have.property('offense');
        // expect(instance.offense).to.be(expectedValueLiteral);
      });

      it('should have the property defense (base name: "defense")', function() {
        // TODO: update the code to test the property defense
        expect(instance).to.have.property('defense');
        // expect(instance.defense).to.be(expectedValueLiteral);
      });

      it('should have the property specialTeams (base name: "specialTeams")', function() {
        // TODO: update the code to test the property specialTeams
        expect(instance).to.have.property('specialTeams');
        // expect(instance.specialTeams).to.be(expectedValueLiteral);
      });

    });
  });

}));
