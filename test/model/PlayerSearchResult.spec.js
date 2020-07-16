/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.2.3
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
    describe('PlayerSearchResult', function() {
      beforeEach(function() {
        instance = new cfb.PlayerSearchResult();
      });

      it('should create an instance of PlayerSearchResult', function() {
        // TODO: update the code to test PlayerSearchResult
        expect(instance).to.be.a(cfb.PlayerSearchResult);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property jersey (base name: "jersey")', function() {
        // TODO: update the code to test the property jersey
        expect(instance).to.have.property('jersey');
        // expect(instance.jersey).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property hometown (base name: "hometown")', function() {
        // TODO: update the code to test the property hometown
        expect(instance).to.have.property('hometown');
        // expect(instance.hometown).to.be(expectedValueLiteral);
      });

      it('should have the property teamColor (base name: "teamColor")', function() {
        // TODO: update the code to test the property teamColor
        expect(instance).to.have.property('teamColor');
        // expect(instance.teamColor).to.be(expectedValueLiteral);
      });

      it('should have the property teamColorSecondary (base name: "teamColorSecondary")', function() {
        // TODO: update the code to test the property teamColorSecondary
        expect(instance).to.have.property('teamColorSecondary');
        // expect(instance.teamColorSecondary).to.be(expectedValueLiteral);
      });

    });
  });

}));
