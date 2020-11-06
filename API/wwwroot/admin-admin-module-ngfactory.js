(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module-ngfactory"],{

/***/ "./src/app/admin/admin.module.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/admin/admin.module.ngfactory.js ***!
  \*************************************************/
/*! exports provided: AdminModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModuleNgFactory", function() { return AdminModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _album_album_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../album/album.component.ngfactory */ "./src/app/album/album.component.ngfactory.js");
/* harmony import */ var _album_photo_details_photo_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../album/photo-details/photo-details.component.ngfactory */ "./src/app/album/photo-details/photo-details.component.ngfactory.js");
/* harmony import */ var _admin_panel_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-panel/admin-panel.component.ngfactory */ "./src/app/admin/admin-panel/admin-panel.component.ngfactory.js");
/* harmony import */ var _album_editor_album_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album-editor/album-editor.component.ngfactory */ "./src/app/admin/album-editor/album-editor.component.ngfactory.js");
/* harmony import */ var _photo_edit_photo_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photo-edit/photo-edit.component.ngfactory */ "./src/app/admin/photo-edit/photo-edit.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr/ngx-toastr.ngfactory */ "./node_modules/ngx-toastr/ngx-toastr.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory */ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js");
/* harmony import */ var _role_modal_role_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role-modal/role-modal.component.ngfactory */ "./src/app/admin/role-modal/role-modal.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-masonry-grid */ "./node_modules/ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _album_album_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../album/album-routing.module */ "./src/app/album/album-routing.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm2015/ngx-masonry.js");
/* harmony import */ var _album_album_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../album/album.module */ "./src/app/album/album.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _album_photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../album/photo-details/photo-details.component */ "./src/app/album/photo-details/photo-details.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var _album_editor_album_editor_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./album-editor/album-editor.component */ "./src/app/admin/album-editor/album-editor.component.ts");
/* harmony import */ var _photo_edit_photo_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./photo-edit/photo-edit.component */ "./src/app/admin/photo-edit/photo-edit.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 







































var AdminModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _album_album_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AlbumComponentNgFactory"], _album_photo_details_photo_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["PhotoDetailsComponentNgFactory"], _admin_panel_admin_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AdminPanelComponentNgFactory"], _album_editor_album_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AlbumEditorComponentNgFactory"], _photo_edit_photo_edit_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PhotoEditComponentNgFactory"], _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_8__["ToastNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ModalContainerComponentNgFactory"], _role_modal_role_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RoleModalComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__["NgMasonryGridService"], ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__["NgMasonryGridService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_14__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationConfig"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsetConfig"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsetConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_17__["PositioningService"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_17__["PositioningService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_18__["ComponentLoaderFactory"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_18__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_17__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["BsModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_18__["ComponentLoaderFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__["NgMasonryGridModule"], ng_masonry_grid__WEBPACK_IMPORTED_MODULE_12__["NgMasonryGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_14__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_14__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_23__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_23__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_14__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _album_album_routing_module__WEBPACK_IMPORTED_MODULE_27__["AlbumRoutingModule"], _album_album_routing_module__WEBPACK_IMPORTED_MODULE_27__["AlbumRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__["FileUploadModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_masonry__WEBPACK_IMPORTED_MODULE_29__["NgxMasonryModule"], ngx_masonry__WEBPACK_IMPORTED_MODULE_29__["NgxMasonryModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _album_album_module__WEBPACK_IMPORTED_MODULE_30__["AlbumModule"], _album_album_module__WEBPACK_IMPORTED_MODULE_30__["AlbumModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__["AdminRoutingModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__["AdminRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["ToastrModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_33__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_33__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"], _admin_module__WEBPACK_IMPORTED_MODULE_1__["AdminModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTES"], function () { return [[{ path: "", component: _album_album_component__WEBPACK_IMPORTED_MODULE_34__["AlbumComponent"] }, { path: ":id", component: _album_photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_35__["PhotoDetailsComponent"] }], [{ path: "", component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_36__["AdminPanelComponent"], data: _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__["ɵ0"] }, { path: "album-editor", component: _album_editor_album_editor_component__WEBPACK_IMPORTED_MODULE_37__["AlbumEditorComponent"], data: _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__["ɵ1"] }, { path: ":id/photo-edit", component: _photo_edit_photo_edit_component__WEBPACK_IMPORTED_MODULE_38__["PhotoEditComponent"], data: _admin_routing_module__WEBPACK_IMPORTED_MODULE_31__["ɵ2"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["TOAST_CONFIG"], { default: ngx_toastr__WEBPACK_IMPORTED_MODULE_32__["DefaultGlobalConfig"], config: { positionClass: "toast-bottom-right", preventDuplicates: true } }, [])]); });



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-ngfactory.js.map