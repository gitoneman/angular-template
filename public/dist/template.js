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
  $templateCache.put("dashboard/dashboardTemplate.html",
    "<div>\n" +
    "	<div class=\"gridStyle\" ui-grid=\"gridOptions\" ui-grid-pagination ui-grid-edit ui-grid-resize-columns ui-grid-selection ui-grid-exporter></div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("app-template"); }
catch(err) { module = angular.module("app-template", []); }
module.run(["$templateCache", function($templateCache) {
  $templateCache.put("home/homeTemplate.html",
    "<div class=\"container-fluid\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-2\">\n" +
    "			<ul class=\"nav nav-pills nav-stacked\" role=\"tablist\">\n" +
    "				  <li ng-class=\"{active:currentPath == '/home/dashboard'}\" ng-click=\"currentPath = '/home/dashboard'\"><a ui-sref=\"home.dashboard\">111</a></li>\n" +
    "				  <li ng-class=\"{active:currentPath == 'page2'}\" ng-click=\"navClick('page2')\"><a ui-sref=\"home.page2\" >222</a></li>\n" +
    "				  <li ng-class=\"{active:currentPath == 'page3'}\" ng-click=\"navClick('page3')\"><a ui-sref=\"home.page3\">333</a></li>	\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-10\">\n" +
    "			<div ui-view>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
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
