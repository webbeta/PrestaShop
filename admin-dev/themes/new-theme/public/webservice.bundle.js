!function(n){function e(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=309)}({1:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},10:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(){var e=this;return r(this,n),{extend:function(n){return e.extend(n)}}}return a(n,[{key:"extend",value:function(n){var e=this;n.getContainer().on("click",".js-bulk-action-submit-btn",function(t){e.submit(t,n)})}},{key:"submit",value:function(n,e){var t=o(n.currentTarget),r=t.data("confirm-message");if(!(void 0!==r&&0<r.length)||confirm(r)){var a=o("#"+e.getId()+"_filter_form");a.attr("action",t.data("form-url")),a.attr("method",t.data("form-method")),a.submit()}}}]),n}();e.a=i},11:function(n,e,t){"use strict";(function(n){function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=n.$,o=function(){function n(e){t(this,n),this.selector=".ps-sortable-column",this.columns=a(e).find(this.selector)}return r(n,[{key:"attach",value:function(){var n=this;this.columns.on("click",function(e){var t=a(e.delegateTarget);n._sortByColumn(t,n._getToggledSortDirection(t))})}},{key:"sortBy",value:function(n,e){var t=this.columns.is('[data-sort-col-name="'+n+'"]');if(!t)throw new Error('Cannot sort by "'+n+'": invalid column');this._sortByColumn(t,e)}},{key:"_sortByColumn",value:function(n,e){window.location=this._getUrl(n.data("sortColName"),"desc"===e?"desc":"asc")}},{key:"_getToggledSortDirection",value:function(n){return"asc"===n.data("sortDirection")?"desc":"asc"}},{key:"_getUrl",value:function(n,e){var t=new URL(window.location.href),r=t.searchParams;return r.set("orderBy",n),r.set("sortOrder",e),t.toString()}}]),n}();e.a=o}).call(e,t(1))},12:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(){r(this,n)}return a(n,[{key:"extend",value:function(n){n.getContainer().on("click",".js-submit-row-action",function(n){n.preventDefault();var e=o(n.currentTarget),t=e.data("confirm-message");if(!t.length||confirm(t)){var r=e.data("method"),a=["GET","POST"].includes(r),i=o("<form>",{action:e.data("url"),method:a?r:"POST"}).appendTo("body");a||i.append(o("<input>",{type:"_hidden",name:"_method",value:r})),i.submit()}})}}]),n}();e.a=i},13:function(n,e,t){"use strict";(function(n){/**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var t=n.$,r=function(n,e){t.post(n).then(function(){return window.location.assign(e)})};e.a=r}).call(e,t(1))},16:function(n,e,t){"use strict";(function(n){function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=n.$,o=function(){function n(){t(this,n)}return r(n,[{key:"extend",value:function(n){var e=this;n.getContainer().find("table.table").find(".ps-togglable-row").on("click",function(n){n.preventDefault(),e._toggleValue(a(n.delegateTarget))})}},{key:"_toggleValue",value:function(n){var e=n.data("toggleUrl");this._submitAsForm(e)}},{key:"_submitAsForm",value:function(n){a("<form>",{action:n,method:"POST"}).appendTo("body").submit()}}]),n}();e.a=o}).call(e,t(1))},215:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=function(){function n(){var e=this;return r(this,n),{attachOn:function(n){return e._attachOn(n)}}}return a(n,[{key:"_attachOn",value:function(n){var e=this;document.querySelector(n).addEventListener("click",function(n){var t=n.currentTarget.attributes,r=t.getNamedItem("data-target-input-id").value,a=parseInt(t.getNamedItem("data-generated-value-length").value);document.querySelector("#"+r).value=e._generateValue(a)})}},{key:"_generateValue",value:function(n){for(var e="123456789ABCDEFGHIJKLMNPQRSTUVWXYZ",t="",r=1;r<=n;++r)t+=e.charAt(Math.floor(Math.random()*e.length));return t}}]),n}();e.a=o},24:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(e){var t=this;return r(this,n),this.$container=o(e),this.$container.on("click",".js-input-wrapper",function(n){var e=o(n.currentTarget);t._toggleChildTree(e)}),this.$container.on("click",".js-toggle-choice-tree-action",function(n){var e=o(n.currentTarget);t._toggleTree(e)}),{enableAutoCheckChildren:function(){return t.enableAutoCheckChildren()}}}return a(n,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',function(n){var e=o(n.currentTarget);e.closest("li").find('ul input[type="checkbox"]').prop("checked",e.is(":checked"))})}},{key:"_toggleChildTree",value:function(n){var e=n.closest("li");if(e.hasClass("expanded"))return void e.removeClass("expanded").addClass("collapsed");e.hasClass("collapsed")&&e.removeClass("collapsed").addClass("expanded")}},{key:"_toggleTree",value:function(n){var e=n.closest(".js-choice-tree-container"),t=n.data("action"),r={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};e.find("li").each(function(n,e){var a=o(e);a.hasClass(r.removeClass[t])&&a.removeClass(r.removeClass[t]).addClass(r.addClass[t])}),n.data("action",r.nextAction[t]),n.find(".material-icons").text(n.data(r.icon[t])),n.find(".js-toggle-text").text(n.data(r.text[t]))}}]),n}();e.a=i},246:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}/**
 * 2007-2019 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var a=window.$,o=function n(){return r(this,n),a('input[id^="webservice_key_permissions_all"]').on("change",function(n){var e=a(n.currentTarget),t=e.is(":checked");e.closest("tr").find('input:not(input[id="'+e.attr("id")+'"])').each(function(n,e){a(e).prop("checked",t)})}),{}};e.a=o},309:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(4),a=t(5),o=t(6),i=t(9),c=t(8),u=t(10),l=t(7),s=t(12),f=t(16),d=t(24),h=t(215),v=t(42),p=t(246);(0,window.$)(function(){var n=new r.a("webservice_key");n.addExtension(new o.a),n.addExtension(new i.a),n.addExtension(new a.a),n.addExtension(new f.a),n.addExtension(new l.a),n.addExtension(new u.a),n.addExtension(new s.a),n.addExtension(new c.a),new d.a("#webservice_key_shop_association").enableAutoCheckChildren(),new v.a,(new h.a).attachOn(".js-generator-btn"),new p.a})},4:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(e){r(this,n),this.id=e,this.$container=o("#"+this.id+"_grid")}return a(n,[{key:"getId",value:function(){return this.id}},{key:"getContainer",value:function(){return this.$container}},{key:"getHeaderContainer",value:function(){return this.$container.closest(".js-grid-panel").find(".js-grid-header")}},{key:"addExtension",value:function(n){n.extend(this)}}]),n}();e.a=i},42:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(){var e=this;r(this,n),o(document).on("click",".js-multiple-choice-table-select-column",function(n){return e.handleSelectColumn(n)})}return a(n,[{key:"handleSelectColumn",value:function(n){n.preventDefault();var e=o(n.target),t=e.data("column-checked");e.data("column-checked",!t),e.closest("table").find("tbody tr td:nth-child("+e.data("column-num")+") input[type=checkbox]").prop("checked",!t)}}]),n}();e.a=i},5:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=t(13),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=window.$,c=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){n.getContainer().on("click",".js-reset-search",function(n){t.i(a.a)(i(n.currentTarget).data("url"),i(n.currentTarget).data("redirect"))})}}]),n}();e.a=c},6:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=function(){function n(){r(this,n)}return a(n,[{key:"extend",value:function(n){n.getHeaderContainer().on("click",".js-common_refresh_list-grid-action",function(){location.reload()})}}]),n}();e.a=o},7:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=t(11),o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=function(){function n(){r(this,n)}return o(n,[{key:"extend",value:function(n){var e=n.getContainer().find("table.table");new a.a(e).attach()}}]),n}();e.a=i},8:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(){r(this,n)}return a(n,[{key:"extend",value:function(n){this._handleBulkActionCheckboxSelect(n),this._handleBulkActionSelectAllCheckbox(n)}},{key:"_handleBulkActionSelectAllCheckbox",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-select-all",function(t){var r=o(t.currentTarget),a=r.is(":checked");a?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n),n.getContainer().find(".js-bulk-action-checkbox").prop("checked",a)})}},{key:"_handleBulkActionCheckboxSelect",value:function(n){var e=this;n.getContainer().on("change",".js-bulk-action-checkbox",function(){n.getContainer().find(".js-bulk-action-checkbox:checked").length>0?e._enableBulkActionsBtn(n):e._disableBulkActionsBtn(n)})}},{key:"_enableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!1)}},{key:"_disableBulkActionsBtn",value:function(n){n.getContainer().find(".js-bulk-actions-btn").prop("disabled",!0)}}]),n}();e.a=i},9:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=window.$,i=function(){function n(){r(this,n)}return a(n,[{key:"extend",value:function(n){var e=this;n.getHeaderContainer().on("click",".js-common_show_query-grid-action",function(){return e._onShowSqlQueryClick(n)}),n.getHeaderContainer().on("click",".js-common_export_sql_manager-grid-action",function(){return e._onExportSqlManagerClick(n)})}},{key:"_onShowSqlQueryClick",value:function(n){var e=o("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n);var t=o("#"+n.getId()+"_grid_common_show_query_modal");t.modal("show"),t.on("click",".btn-sql-submit",function(){return e.submit()})}},{key:"_onExportSqlManagerClick",value:function(n){var e=o("#"+n.getId()+"_common_show_query_modal_form");this._fillExportForm(e,n),e.submit()}},{key:"_fillExportForm",value:function(n,e){var t=e.getContainer().find(".js-grid-table").data("query");n.find('textarea[name="sql"]').val(t),n.find('input[name="name"]').val(this._getNameFromBreadcrumb())}},{key:"_getNameFromBreadcrumb",value:function(){var n=o(".header-toolbar").find(".breadcrumb-item"),e="";return n.each(function(n,t){var r=o(t),a=0<r.find("a").length?r.find("a").text():r.text();0<e.length&&(e=e.concat(" > ")),e=e.concat(a)}),e}}]),n}();e.a=i}});