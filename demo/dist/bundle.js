!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/scripts/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o);n(3),n(4),function(t){function e(t,e){t.when("/",{template:"qgrid demo page"}).when("/sandbox",{templateUrl:"sandbox/index.html",controller:i.default,controllerAs:"$ctrl"}),e.html5Mode(!1).hashPrefix("!")}function n(){}t.module("demo",["ngRoute","qgrid"]).config(e).controller("Demo.Controller",n),e.$inject=["$routeProvider","$locationProvider"],n.$inject=[]}(angular)},function(t,e){"use strict";function n(t){var e=this;e.rows=[],e.columns=[{key:"gender",title:"Gender"},{key:"birthday",title:"Birthday"},{key:"region",title:"Region"},{key:"memberSince",title:"Member Since"}],t.get("data/people/100.json").then(function(t){e.rows=t.data})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,n.$inject=["$http"]},function(t,e){"use strict";function n(){}Object.defineProperty(e,"__esModule",{value:!0}),e.default={templateUrl:"qgrid.html",controller:n,bindings:{rows:"<",columns:"<"}},n.$inject=[]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o);!function(t){function e(t){t.put("qgrid.html",n(6))}t.module("qgrid",[]).component("qGrid",i.default).run(e),e.$inject=["$templateCache"]}(angular)},function(t,e,n){"use strict";n(5),function(t){function e(){}t.module("qgrid").run(e),e.$inject=["$templateCache"]}(angular)},function(t,e){},function(t,e){t.exports='<div class="qgrid">\n\t<table>\n\t\t<thead>\n\t\t<tr>\n\t\t\t<th ng-repeat="$column in $ctrl.columns track by $index">\n\t\t\t\t<label>{{$column.title}}</label>\n\t\t\t</th>\n\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t<tr ng-repeat="$row in $ctrl.rows">\n\t\t\t<td ng-repeat="$column in $ctrl.columns track by $index">\n\t\t\t\t{{$row[$column.key]}}\n\t\t\t</td>\n\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot>\n\t\t</tfoot>\n\t</table>\n</div>'}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYnVuZGxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiODhiZjg4YzFkMTc2OWI1M2Q2YSIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vc2FuZGJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZXMvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuaHRtbCJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaW5zdGFsbGVkTW9kdWxlcyIsImV4cG9ydHMiLCJtb2R1bGUiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfaW5kZXgiLCJfaW5kZXgyIiwiYW5ndWxhciIsIlNldHVwIiwiJHJvdXRlUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImh0bWw1TW9kZSIsImhhc2hQcmVmaXgiLCJDb250cm9sbGVyIiwiY29uZmlnIiwiJGluamVjdCIsIiRodHRwIiwiY3RybCIsInRoaXMiLCJyb3dzIiwiY29sdW1ucyIsImtleSIsInRpdGxlIiwiZ2V0IiwidGhlbiIsInJlc3BvbmNlIiwiZGF0YSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJiaW5kaW5ncyIsIl9ncmlkIiwiX2dyaWQyIiwiJHRlbXBsYXRlQ2FjaGUiLCJwdXQiLCJjb21wb25lbnQiLCJydW4iXSwibWFwcGluZ3MiOiJDQUFTLFNBQVVBLEdDSW5CLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBRSxPQUdBLElBQUFDLEdBQUFGLEVBQUFELElBQ0FFLFdBQ0FFLEdBQUFKLEVBQ0FLLFFBQUEsRUFVQSxPQU5BUCxHQUFBRSxHQUFBTSxLQUFBSCxFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSCxHQUdBSSxFQUFBRSxRQUFBLEVBR0FGLEVBQUFELFFBdkJBLEdBQUFELEtBcUNBLE9BVEFGLEdBQUFRLEVBQUFULEVBR0FDLEVBQUFTLEVBQUFQLEVBR0FGLEVBQUFVLEVBQUEsWUFHQVYsRUFBQSxLRE1NLFNBQVNJLEVBQVFELEVBQVNILEdFNUNoQyxZRm9EQyxTQUFTVyxHQUF1QkMsR0FBTyxNQUFPQSxJQUFPQSxFQUFJQyxXQUFhRCxHQUFRRSxRQUFTRixHRWxEeEYsR0FBQUcsR0FBQWYsRUFBQSxHRmdES2dCLEVBQVVMLEVBQXVCSSxFRTlDdENmLEdBQVEsR0FDUkEsRUFBUSxHQUVSLFNBQVdpQixHQU1WLFFBQVNDLEdBQU1DLEVBQWdCQyxHQUM5QkQsRUFDRUUsS0FBSyxLQUNMQyxTQUFVLG9CQUVWRCxLQUFLLFlBQ0xFLFlBQWEscUJBQ2JDLHFCQUNBQyxhQUFjLFVBR2hCTCxFQUNFTSxXQUFVLEdBQ1ZDLFdBQVcsS0FJZCxRQUFTQyxNQXRCVFgsRUFBUWIsT0FBTyxRQUFTLFVBQVcsVUFDakN5QixPQUFPWCxHQUNQTSxXQUFXLGtCQUFtQkksR0FFaENWLEVBQU1ZLFNBQVcsaUJBQWtCLHFCQWlCbkNGLEVBQVdFLFlBSVRiLFVGOENHLFNBQVNiLEVBQVFELEdHL0V2QixZQUdlLFNBQVN5QixHQUFXRyxHQUNsQyxHQUFNQyxHQUFPQyxJQUViRCxHQUFLRSxRQUNMRixFQUFLRyxVQUNIQyxJQUFLLFNBQVVDLE1BQU8sV0FDdEJELElBQUssV0FBWUMsTUFBTyxhQUN4QkQsSUFBSyxTQUFVQyxNQUFPLFdBQ3RCRCxJQUFLLGNBQWVDLE1BQU8saUJBRzdCTixFQUFNTyxJQUFJLHdCQUNSQyxLQUFLLFNBQVVDLEdBQ2ZSLEVBQUtFLEtBQU9NLEVBQVNDLE9IbUV2QkMsT0FBT0MsZUFBZXhDLEVBQVMsY0FDOUJ5QyxPQUFPLElBRVJ6QyxFQUFRVyxRR25GZWMsRUFEeEJBLEVBQVdFLFNBQVcsVUhtR2hCLFNBQVMxQixFQUFRRCxHSXJHdkIsWUFlQSxTQUFTeUIsTUo2RlJjLE9BQU9DLGVBQWV4QyxFQUFTLGNBQzlCeUMsT0FBTyxJQUVSekMsRUFBUVcsU0l6R1JTLFlBQWEsYUFDYkMsV0FBWUksRUFDWmlCLFVBQ0NYLEtBQU0sSUFDTkMsUUFBUyxNQUlYUCxFQUFXRSxZSnFITCxTQUFTMUIsRUFBUUQsRUFBU0gsR0FFL0IsWUFNQSxTQUFTVyxHQUF1QkMsR0FBTyxNQUFPQSxJQUFPQSxFQUFJQyxXQUFhRCxHQUFRRSxRQUFTRixHSzNJeEYsR0FBQWtDLEdBQUE5QyxFQUFBLEdMeUlLK0MsRUFBU3BDLEVBQXVCbUMsSUt2SXJDLFNBQVc3QixHQU1WLFFBQVNDLEdBQU04QixHQUNkQSxFQUFlQyxJQUFJLGFBQWNqRCxFQUFRLElBTjFDaUIsRUFBUWIsT0FBTyxZQUNiOEMsVUFBVSxRQURaSCxFQUFBakMsU0FFRXFDLElBQUlqQyxHQUVOQSxFQUFNWSxTQUFXLG1CQUlmYixVTDZJRyxTQUFTYixFQUFRRCxFQUFTSCxHTXhKaEMsWUFFQUEsR0FBUSxHQUVSLFNBQVdpQixHQU1WLFFBQVNDLE1BSlRELEVBQVFiLE9BQU8sU0FDYitDLElBQUlqQyxHQUVOQSxFQUFNWSxTQUFXLG1CQUtmYixVTjRKRyxTQUFTYixFQUFRRCxLQU1qQixTQUFTQyxFQUFRRCxHT2hMdkJDLEVBQUFELFFBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3NjcmlwdHMvXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHR2YXIgX2luZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaW5kZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5kZXgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cdFxuXHQoZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblx0XHRhbmd1bGFyLm1vZHVsZSgnZGVtbycsIFsnbmdSb3V0ZScsICdxZ3JpZCddKS5jb25maWcoU2V0dXApLmNvbnRyb2xsZXIoJ0RlbW8uQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuXHRcblx0XHRTZXR1cC4kaW5qZWN0ID0gWyckcm91dGVQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlciddO1xuXHRcdGZ1bmN0aW9uIFNldHVwKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXHRcdFx0JHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcblx0XHRcdFx0dGVtcGxhdGU6ICdxZ3JpZCBkZW1vIHBhZ2UnXG5cdFx0XHR9KS53aGVuKCcvc2FuZGJveCcsIHtcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdzYW5kYm94L2luZGV4Lmh0bWwnLFxuXHRcdFx0XHRjb250cm9sbGVyOiBfaW5kZXgyLmRlZmF1bHQsXG5cdFx0XHRcdGNvbnRyb2xsZXJBczogJyRjdHJsJ1xuXHRcdFx0fSk7XG5cdFxuXHRcdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKGZhbHNlKS5oYXNoUHJlZml4KCchJyk7XG5cdFx0fVxuXHRcblx0XHRDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcblx0XHRmdW5jdGlvbiBDb250cm9sbGVyKCkge31cblx0fSkoYW5ndWxhcik7XG5cbi8qKiovIH0sXG4vKiAxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gQ29udHJvbGxlcjtcblx0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckaHR0cCddO1xuXHRmdW5jdGlvbiBDb250cm9sbGVyKCRodHRwKSB7XG5cdFx0dmFyIGN0cmwgPSB0aGlzO1xuXHRcblx0XHRjdHJsLnJvd3MgPSBbXTtcblx0XHRjdHJsLmNvbHVtbnMgPSBbeyBrZXk6ICdnZW5kZXInLCB0aXRsZTogJ0dlbmRlcicgfSwgeyBrZXk6ICdiaXJ0aGRheScsIHRpdGxlOiAnQmlydGhkYXknIH0sIHsga2V5OiAncmVnaW9uJywgdGl0bGU6ICdSZWdpb24nIH0sIHsga2V5OiAnbWVtYmVyU2luY2UnLCB0aXRsZTogJ01lbWJlciBTaW5jZScgfV07XG5cdFxuXHRcdCRodHRwLmdldCgnZGF0YS9wZW9wbGUvMTAwLmpzb24nKS50aGVuKGZ1bmN0aW9uIChyZXNwb25jZSkge1xuXHRcdFx0Y3RybC5yb3dzID0gcmVzcG9uY2UuZGF0YTtcblx0XHR9KTtcblx0fVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Ly8gaW1wb3J0IEdyaWRNb2RlbCBmcm9tICcuL2dyaWQubW9kZWwnO1xuXHQvLyBpbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXR5Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdFx0dGVtcGxhdGVVcmw6ICdxZ3JpZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGJpbmRpbmdzOiB7XG5cdFx0XHRyb3dzOiAnPCcsXG5cdFx0XHRjb2x1bW5zOiAnPCdcblx0XHR9XG5cdH07XG5cdFxuXHRcblx0Q29udHJvbGxlci4kaW5qZWN0ID0gW107XG5cdGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG5cdFx0Ly90aGlzLm1vZGVsID0gbmV3IEdyaWRNb2RlbCgpO1xuXHRcdC8vIFRPRE86IGludmVzdGlnYXRlIGhvdyB0byB0cmFjayBjaGFuZ2VzIGluIHRoaXMgY2FzZVxuXHRcdC8vIG9yIGdldCByaWQgb2YgJHNjb3BlIG9yIG9mIEdyaWRNb2RlbFxuXHRcdC8vVXRpbGl0eS5hc3NpZ24odGhpcy5tb2RlbCwgJHNjb3BlKTtcblx0fVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0dmFyIF9ncmlkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZ3JpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmlkKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHQoZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblx0XHRhbmd1bGFyLm1vZHVsZSgncWdyaWQnLCBbXSkuY29tcG9uZW50KCdxR3JpZCcsIF9ncmlkMi5kZWZhdWx0KS5ydW4oU2V0dXApO1xuXHRcblx0XHRTZXR1cC4kaW5qZWN0ID0gWyckdGVtcGxhdGVDYWNoZSddO1xuXHRcdGZ1bmN0aW9uIFNldHVwKCR0ZW1wbGF0ZUNhY2hlKSB7XG5cdFx0XHQkdGVtcGxhdGVDYWNoZS5wdXQoJ3FncmlkLmh0bWwnLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpKTtcblx0XHR9XG5cdH0pKGFuZ3VsYXIpO1xuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdChmdW5jdGlvbiAoYW5ndWxhcikge1xuXHRcblx0XHRhbmd1bGFyLm1vZHVsZSgncWdyaWQnKS5ydW4oU2V0dXApO1xuXHRcblx0XHRTZXR1cC4kaW5qZWN0ID0gWyckdGVtcGxhdGVDYWNoZSddO1xuXHRcdGZ1bmN0aW9uIFNldHVwKCkgLyokdGVtcGxhdGVDYWNoZSove1xuXHRcdFx0Ly8gaGVyZSdsbCBiZSBjdXN0b20gdGVtcGxhdGVzXG5cdFx0fVxuXHR9KShhbmd1bGFyKTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicWdyaWRcXFwiPlxcblxcdDx0YWJsZT5cXG5cXHRcXHQ8dGhlYWQ+XFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0aCBuZy1yZXBlYXQ9XFxcIiRjb2x1bW4gaW4gJGN0cmwuY29sdW1ucyB0cmFjayBieSAkaW5kZXhcXFwiPlxcblxcdFxcdFxcdFxcdDxsYWJlbD57eyRjb2x1bW4udGl0bGV9fTwvbGFiZWw+XFxuXFx0XFx0XFx0PC90aD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDwvdGhlYWQ+XFxuXFx0XFx0PHRib2R5PlxcblxcdFxcdDx0ciBuZy1yZXBlYXQ9XFxcIiRyb3cgaW4gJGN0cmwucm93c1xcXCI+XFxuXFx0XFx0XFx0PHRkIG5nLXJlcGVhdD1cXFwiJGNvbHVtbiBpbiAkY3RybC5jb2x1bW5zIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuXFx0XFx0XFx0XFx0e3skcm93WyRjb2x1bW4ua2V5XX19XFxuXFx0XFx0XFx0PC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDwvdGJvZHk+XFxuXFx0XFx0PHRmb290PlxcblxcdFxcdDwvdGZvb3Q+XFxuXFx0PC90YWJsZT5cXG48L2Rpdj5cIlxuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnVuZGxlLmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3NjcmlwdHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjg4YmY4OGMxZDE3NjliNTNkNmEiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTYW5kYm94IGZyb20gJy4vc2FuZGJveC9pbmRleCc7XG5cbnJlcXVpcmUoJy4uL3NyYy9pbmRleCcpO1xucmVxdWlyZSgnLi4vc3JjL3RoZW1lcy9kZWZhdWx0L2luZGV4Jyk7XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXHRhbmd1bGFyLm1vZHVsZSgnZGVtbycsIFsnbmdSb3V0ZScsICdxZ3JpZCddKVxuXHRcdC5jb25maWcoU2V0dXApXG5cdFx0LmNvbnRyb2xsZXIoJ0RlbW8uQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuXG5cdFNldHVwLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJ107XG5cdGZ1bmN0aW9uIFNldHVwKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXHRcdCRyb3V0ZVByb3ZpZGVyXG5cdFx0XHQud2hlbignLycsIHtcblx0XHRcdFx0dGVtcGxhdGU6ICdxZ3JpZCBkZW1vIHBhZ2UnXG5cdFx0XHR9KVxuXHRcdFx0LndoZW4oJy9zYW5kYm94Jywge1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3NhbmRib3gvaW5kZXguaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6IFNhbmRib3gsXG5cdFx0XHRcdGNvbnRyb2xsZXJBczogJyRjdHJsJ1xuXHRcdFx0fSk7XG5cblx0XHQkbG9jYXRpb25Qcm92aWRlclxuXHRcdFx0Lmh0bWw1TW9kZShmYWxzZSlcblx0XHRcdC5oYXNoUHJlZml4KCchJyk7XG5cdH1cblxuXHRDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcblx0ZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcblx0fVxuXG59KShhbmd1bGFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9kZW1vL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRodHRwJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cm9sbGVyKCRodHRwKSB7XG5cdGNvbnN0IGN0cmwgPSB0aGlzO1xuXG5cdGN0cmwucm93cyA9IFtdO1xuXHRjdHJsLmNvbHVtbnMgPSBbXG5cdFx0e2tleTogJ2dlbmRlcicsIHRpdGxlOiAnR2VuZGVyJ30sXG5cdFx0e2tleTogJ2JpcnRoZGF5JywgdGl0bGU6ICdCaXJ0aGRheSd9LFxuXHRcdHtrZXk6ICdyZWdpb24nLCB0aXRsZTogJ1JlZ2lvbid9LFxuXHRcdHtrZXk6ICdtZW1iZXJTaW5jZScsIHRpdGxlOiAnTWVtYmVyIFNpbmNlJ31cblx0XTtcblxuXHQkaHR0cC5nZXQoJ2RhdGEvcGVvcGxlLzEwMC5qc29uJylcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uY2UpIHtcblx0XHRcdGN0cmwucm93cyA9IHJlc3BvbmNlLmRhdGE7XG5cdFx0fSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lc2xpbnQtbG9hZGVyIS4vZGVtby9zYW5kYm94L2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgR3JpZE1vZGVsIGZyb20gJy4vZ3JpZC5tb2RlbCc7XG4vLyBpbXBvcnQgVXRpbGl0eSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0ZW1wbGF0ZVVybDogJ3FncmlkLmh0bWwnLFxuXHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRiaW5kaW5nczoge1xuXHRcdHJvd3M6ICc8Jyxcblx0XHRjb2x1bW5zOiAnPCdcblx0fVxufTtcblxuQ29udHJvbGxlci4kaW5qZWN0ID0gW107XG5mdW5jdGlvbiBDb250cm9sbGVyKCkge1xuXHQvL3RoaXMubW9kZWwgPSBuZXcgR3JpZE1vZGVsKCk7XG5cdC8vIFRPRE86IGludmVzdGlnYXRlIGhvdyB0byB0cmFjayBjaGFuZ2VzIGluIHRoaXMgY2FzZVxuXHQvLyBvciBnZXQgcmlkIG9mICRzY29wZSBvciBvZiBHcmlkTW9kZWxcblx0Ly9VdGlsaXR5LmFzc2lnbih0aGlzLm1vZGVsLCAkc2NvcGUpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcyIsImltcG9ydCBHcmlkIGZyb20gJy4vY29tcG9uZW50cy9ncmlkL2dyaWQnO1xuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblx0YW5ndWxhci5tb2R1bGUoJ3FncmlkJywgW10pXG5cdFx0LmNvbXBvbmVudCgncUdyaWQnLCBHcmlkKVxuXHRcdC5ydW4oU2V0dXApO1xuXG5cdFNldHVwLiRpbmplY3QgPSBbJyR0ZW1wbGF0ZUNhY2hlJ107XG5cdGZ1bmN0aW9uIFNldHVwKCR0ZW1wbGF0ZUNhY2hlKSB7XG5cdFx0JHRlbXBsYXRlQ2FjaGUucHV0KCdxZ3JpZC5odG1sJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyaWQvZ3JpZC5odG1sJykpO1xuXHR9XG59KShhbmd1bGFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vYm9keS5zY3NzJyk7XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdxZ3JpZCcpXG5cdFx0LnJ1bihTZXR1cCk7XG5cblx0U2V0dXAuJGluamVjdCA9IFsnJHRlbXBsYXRlQ2FjaGUnXTtcblx0ZnVuY3Rpb24gU2V0dXAoLyokdGVtcGxhdGVDYWNoZSovKSB7XG5cdFx0Ly8gaGVyZSdsbCBiZSBjdXN0b20gdGVtcGxhdGVzXG5cdH1cblxufSkoYW5ndWxhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL3RoZW1lcy9kZWZhdWx0L2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInFncmlkXFxcIj5cXG5cXHQ8dGFibGU+XFxuXFx0XFx0PHRoZWFkPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGggbmctcmVwZWF0PVxcXCIkY29sdW1uIGluICRjdHJsLmNvbHVtbnMgdHJhY2sgYnkgJGluZGV4XFxcIj5cXG5cXHRcXHRcXHRcXHQ8bGFiZWw+e3skY29sdW1uLnRpdGxlfX08L2xhYmVsPlxcblxcdFxcdFxcdDwvdGg+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8L3RoZWFkPlxcblxcdFxcdDx0Ym9keT5cXG5cXHRcXHQ8dHIgbmctcmVwZWF0PVxcXCIkcm93IGluICRjdHJsLnJvd3NcXFwiPlxcblxcdFxcdFxcdDx0ZCBuZy1yZXBlYXQ9XFxcIiRjb2x1bW4gaW4gJGN0cmwuY29sdW1ucyB0cmFjayBieSAkaW5kZXhcXFwiPlxcblxcdFxcdFxcdFxcdHt7JHJvd1skY29sdW1uLmtleV19fVxcblxcdFxcdFxcdDwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8L3Rib2R5PlxcblxcdFxcdDx0Zm9vdD5cXG5cXHRcXHQ8L3Rmb290PlxcblxcdDwvdGFibGU+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=