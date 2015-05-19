var assert = require("assert");
var CLIEngine = require("eslint").CLIEngine;
var path = require("path");
var util = require("util");

module.exports = function addExampleTests(name) {
  describe(name, function() {
    var cli = new CLIEngine({
      configFile: path.join(__dirname, util.format("extends.%s.json", name)),
      reset: true,
      useEslintrc: false,
    });

    var exampleDir = path.join(__dirname, "../../examples", name);
    var report = cli.executeOnFiles([exampleDir]);

    report.results.forEach(function(result) {
      var filePath = result.filePath.replace(util.format("%s/", exampleDir), "");

      describe(util.format("%s", filePath), function() {
        var messages = JSON.stringify(result.messages, null, 2);

        it("should have no warnings", function() {
          assert.equal(result.warningCount, 0, messages);
        });

        it("should have no errors", function() {
          assert.equal(result.errorCount, 0, messages);
        });
      });
    });
  });
}
