(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("asset/assetTemplate.html",
    "<div>\n" +
    "	<div>asset</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("home/homeTemplate.html",
    "<div>\n" +
    "	<div>home</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("rule/ruleTemplate.html",
    "<div>\n" +
    "	<div>rule</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("system/systemTemplate.html",
    "<div>\n" +
    "	<div>system</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("common/alert/alertTemplate.html",
    "");
}]);
})();
