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
    describe('AdvancedSeasonStatDefense', function() {
      beforeEach(function() {
        instance = new cfb.AdvancedSeasonStatDefense();
      });

      it('should create an instance of AdvancedSeasonStatDefense', function() {
        // TODO: update the code to test AdvancedSeasonStatDefense
        expect(instance).to.be.a(cfb.AdvancedSeasonStatDefense);
      });

      it('should have the property plays (base name: "plays")', function() {
        // TODO: update the code to test the property plays
        expect(instance).to.have.property('plays');
        // expect(instance.plays).to.be(expectedValueLiteral);
      });

      it('should have the property drives (base name: "drives")', function() {
        // TODO: update the code to test the property drives
        expect(instance).to.have.property('drives');
        // expect(instance.drives).to.be(expectedValueLiteral);
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

      it('should have the property powerSuccess (base name: "powerSuccess")', function() {
        // TODO: update the code to test the property powerSuccess
        expect(instance).to.have.property('powerSuccess');
        // expect(instance.powerSuccess).to.be(expectedValueLiteral);
      });

      it('should have the property stuffRate (base name: "stuffRate")', function() {
        // TODO: update the code to test the property stuffRate
        expect(instance).to.have.property('stuffRate');
        // expect(instance.stuffRate).to.be(expectedValueLiteral);
      });

      it('should have the property lineYards (base name: "lineYards")', function() {
        // TODO: update the code to test the property lineYards
        expect(instance).to.have.property('lineYards');
        // expect(instance.lineYards).to.be(expectedValueLiteral);
      });

      it('should have the property lineYardsTotal (base name: "lineYardsTotal")', function() {
        // TODO: update the code to test the property lineYardsTotal
        expect(instance).to.have.property('lineYardsTotal');
        // expect(instance.lineYardsTotal).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYards (base name: "secondLevelYards")', function() {
        // TODO: update the code to test the property secondLevelYards
        expect(instance).to.have.property('secondLevelYards');
        // expect(instance.secondLevelYards).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYardsTotal (base name: "secondLevelYardsTotal")', function() {
        // TODO: update the code to test the property secondLevelYardsTotal
        expect(instance).to.have.property('secondLevelYardsTotal');
        // expect(instance.secondLevelYardsTotal).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYards (base name: "openFieldYards")', function() {
        // TODO: update the code to test the property openFieldYards
        expect(instance).to.have.property('openFieldYards');
        // expect(instance.openFieldYards).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYardsTotal (base name: "openFieldYardsTotal")', function() {
        // TODO: update the code to test the property openFieldYardsTotal
        expect(instance).to.have.property('openFieldYardsTotal');
        // expect(instance.openFieldYardsTotal).to.be(expectedValueLiteral);
      });

      it('should have the property pointsPerOpportunity (base name: "pointsPerOpportunity")', function() {
        // TODO: update the code to test the property pointsPerOpportunity
        expect(instance).to.have.property('pointsPerOpportunity');
        // expect(instance.pointsPerOpportunity).to.be(expectedValueLiteral);
      });

      it('should have the property fieldPosition (base name: "fieldPosition")', function() {
        // TODO: update the code to test the property fieldPosition
        expect(instance).to.have.property('fieldPosition');
        // expect(instance.fieldPosition).to.be(expectedValueLiteral);
      });

      it('should have the property havoc (base name: "havoc")', function() {
        // TODO: update the code to test the property havoc
        expect(instance).to.have.property('havoc');
        // expect(instance.havoc).to.be(expectedValueLiteral);
      });

      it('should have the property standardDowns (base name: "standardDowns")', function() {
        // TODO: update the code to test the property standardDowns
        expect(instance).to.have.property('standardDowns');
        // expect(instance.standardDowns).to.be(expectedValueLiteral);
      });

      it('should have the property passingDowns (base name: "passingDowns")', function() {
        // TODO: update the code to test the property passingDowns
        expect(instance).to.have.property('passingDowns');
        // expect(instance.passingDowns).to.be(expectedValueLiteral);
      });

      it('should have the property rushingPlays (base name: "rushingPlays")', function() {
        // TODO: update the code to test the property rushingPlays
        expect(instance).to.have.property('rushingPlays');
        // expect(instance.rushingPlays).to.be(expectedValueLiteral);
      });

      it('should have the property passingPlays (base name: "passingPlays")', function() {
        // TODO: update the code to test the property passingPlays
        expect(instance).to.have.property('passingPlays');
        // expect(instance.passingPlays).to.be(expectedValueLiteral);
      });

    });
  });

}));
