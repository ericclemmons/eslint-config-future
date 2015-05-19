var assert = require("assert");
var CLIEngine = require("eslint").CLIEngine;
var path = require("path");
var util = require("util");

var cli = new CLIEngine({
  configFile: path.join(__dirname, ".eslintrc"),
  reset: true,
  useEslintrc: false,
});

describe("eslintrc", function() {
  describe("examples", function() {
    var exampleDir = path.join(__dirname, "../examples");
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
});
