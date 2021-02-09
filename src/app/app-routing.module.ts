import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './api/authguard/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate:[AuthguardGuard], data: {moduleName: 'home'}, loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'brands', canActivate:[AuthguardGuard], data: {moduleName: 'viewBrand'}, loadChildren: './brands/brands.module#BrandsPageModule' },
  { path: 'warehouse', canActivate:[AuthguardGuard], data: {moduleName: 'viewStore'}, loadChildren: './warehouse/warehouse/warehouse.module#WarehousePageModule' },
  { path: 'warehouse-transfer', canActivate:[AuthguardGuard], data: {moduleName: 'viewAttribute'}, loadChildren: './warehouse/warehouse-transfer/warehouse-transfer.module#WarehouseTransferPageModule' },
  { path: 'add-product', canActivate:[AuthguardGuard], data: {moduleName: 'createProduct'}, loadChildren: './products/add-product/add-product.module#AddProductPageModule' },
  { path: 'manage-products', canActivate:[AuthguardGuard], data: {moduleName: 'viewProduct'}, loadChildren: './products/manage-products/manage-products.module#ManageProductsPageModule' },
  { path: 'stock-report', loadChildren: './stock-report/stock-report.module#StockReportPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'company', canActivate:[AuthguardGuard], data: {moduleName: 'updateCompany'}, loadChildren: './company/company.module#CompanyPageModule' },
  { path: 'add-members', canActivate:[AuthguardGuard], data: {moduleName: 'createUser'}, loadChildren: './members/add-members/add-members.module#AddMembersPageModule' },
  { path: 'manage-members', canActivate:[AuthguardGuard], data: {moduleName: 'viewUser'}, loadChildren: './members/manage-members/manage-members.module#ManageMembersPageModule' },
  { path: 'add-permission', canActivate:[AuthguardGuard], data: {moduleName: 'createGroup'}, loadChildren: './permission/add-permission/add-permission.module#AddPermissionPageModule' },
  { path: 'manage-permission', canActivate:[AuthguardGuard], data: {moduleName: 'viewGroup'}, loadChildren: './permission/manage-permission/manage-permission.module#ManagePermissionPageModule' },
  { path: 'add-order', canActivate:[AuthguardGuard], data: {moduleName: 'createOrder'}, loadChildren: './orders/add-order/add-order.module#AddOrderPageModule' },
  { path: 'manage-orders', canActivate:[AuthguardGuard], data: {moduleName: 'viewOrder'}, loadChildren: './orders/manage-orders/manage-orders.module#ManageOrdersPageModule' },
  {
    path: 'add-brand', canActivate:[AuthguardGuard], data: {moduleName: 'createBrand'},
    loadChildren: () => import('./brands/add-brand/add-brand.module').then( m => m.AddBrandPageModule)
  },
  {
    path: 'add-warehouse', canActivate:[AuthguardGuard], data: {moduleName: 'createStore'},
    loadChildren: () => import('./warehouse/add-warehouse/add-warehouse.module').then( m => m.AddWarehousePageModule)
  },
  {
    path: 'edit-brand', canActivate:[AuthguardGuard], data: {moduleName: 'updateBrand'},
    loadChildren: () => import('./brands/edit-brand/edit-brand.module').then( m => m.EditBrandPageModule)
  },
  {
    path: 'edit-warehouse', canActivate:[AuthguardGuard], data: {moduleName: 'updateStore'},
    loadChildren: () => import('./warehouse/edit-warehouse/edit-warehouse.module').then( m => m.EditWarehousePageModule)
  },
  {
    path: 'edit-product', canActivate:[AuthguardGuard], data: {moduleName: 'updateProduct'},
    loadChildren: () => import('./products/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'edit-order', canActivate:[AuthguardGuard], data: {moduleName: 'updateOrder'},
    loadChildren: () => import('./orders/edit-order/edit-order.module').then( m => m.EditOrderPageModule)
  },
  {
    path: 'edit-members', canActivate:[AuthguardGuard], data: {moduleName: 'updateUser'},
    loadChildren: () => import('./members/edit-members/edit-members.module').then( m => m.EditMembersPageModule)
  },
  {
    path: 'edit-permission', canActivate:[AuthguardGuard], data: {moduleName: 'updateGroup'},
    loadChildren: () => import('./permission/edit-permission/edit-permission.module').then( m => m.EditPermissionPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'brands-product',
    loadChildren: () => import('./brands/brands-product/brands-product.module').then( m => m.BrandsProductPageModule)
  },
  {
    path: 'warehouse-product',
    loadChildren: () => import('./warehouse/warehouse-product/warehouse-product.module').then( m => m.WarehouseProductPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
