import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as FileSaver from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoading = false;
  isModalOpen = false;
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController) { }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  dashList() {
    return this.http.get<any>(environment.base_url + 'dashboard/list');
  }

  /*  brand start */
  brandList() {
    return this.http.get<any>(environment.base_url + 'brand/list');
  }
  brandAdd(data) {
    return this.http.post<any>(environment.base_url + 'brand/add', data);
  }
  brandGet(data) {
    return this.http.get<any>(environment.base_url + 'brand/getRow/' + data.id);
  }
  brandEdit(data) {
    return this.http.post<any>(environment.base_url + 'brand/edit', data);
  }
  brandDelete(data) {
    console.log("ssssssssid", data)
    return this.http.get<any>(environment.base_url + 'brand/delete/' + data);
  }
  brandProducts(brandid) {
    return this.http.get<any>(environment.base_url + 'product/productbrand/' + brandid);
  }
  /*  brand  end */

  /*  warehouse  start */
  warehouseList() {
    return this.http.get<any>(environment.base_url + 'wareHouse/list');
  }
  warehouseAdd(data) {
    return this.http.post<any>(environment.base_url + 'wareHouse/add', data);
  }
  warehouseGet(data) {
    return this.http.get<any>(environment.base_url + 'wareHouse/getRow/' + data.id);
  }
  warehouseEdit(data) {
    return this.http.post<any>(environment.base_url + 'wareHouse/edit', data);
  }
  warehouseDelete(data) {
    return this.http.get<any>(environment.base_url + 'wareHouse/delete/' + data);
  }
  warehouseProducts(warehouseid) {
    return this.http.get<any>(environment.base_url + 'product/productwarehouse/' + warehouseid);
  }
  /* warehouse  end */

  /* warehouse transfer start*/
  ware_Transfer_list() {
    return this.http.get<any>(environment.base_url + 'warehouseTransfer/list');
  }
  /* warehouse transfer end*/

  /* order start*/
  orderList() {
    return this.http.get<any>(environment.base_url + 'order/list');
  }
  orderAdd(data) {
    return this.http.post<any>(environment.base_url + 'order/add', data);
  }
  orderGet(data) {
    return this.http.get<any>(environment.base_url + 'order/getRow/' + data.id);
  }
  orderEdit(data) {
    return this.http.post<any>(environment.base_url + 'order/edit', data);
  }
  orderDelete(data) {
    return this.http.get<any>(environment.base_url + 'order/delete/' + data);
  }
  productListorder() {
      return this.http.get<any>(environment.base_url + 'order/productList');
  }
  /* order end*/

  /* member start*/
  memberList() {
    return this.http.get<any>(environment.base_url + 'member/list');
  }
  memberAdd(data) {
    return this.http.post<any>(environment.base_url + 'member/add', data);
  }
  memberGet(data) {
    return this.http.get<any>(environment.base_url + 'member/getRow/' + data.id);
  }
  memberEdit(data) {
    return this.http.post<any>(environment.base_url + 'member/edit', data);
  }
  memberDelete(data) {
    return this.http.get<any>(environment.base_url + 'member/delete/' + data);
  }
  getPermisssionList() {
    return this.http.get<any>(environment.base_url + 'member/permissionList');
  }
  /* member end*/

  /* product start*/
  productList() {
    return this.http.get<any>(environment.base_url + 'product/list');
  }
  productAdd(data) {
    return this.http.post<any>(environment.base_url + 'product/add', data);
  }
  productGet(data) {
    console.log("gettt",data)
    return this.http.get<any>(environment.base_url + 'warehouseTransfer/getRow/' + data.id);
  }
  productEdit(data) {
    console.log("edirProduct",data)
    return this.http.post<any>(environment.base_url + 'product/edit', data);
  }
  productDelete(data) {
    return this.http.get<any>(environment.base_url + 'product/delete/' + data);
  }
  /* product end*/
  
  /* product dropdown list star */
  Itemlist() {
    return this.http.get<any>(environment.base_url + 'product/itemList');
  }
  categorylist() {
    return this.http.get<any>(environment.base_url + 'product/categoryList');
  }
  warehouselist() {
    return this.http.get<any>(environment.base_url + 'product/warehouseList');
  }
  /* product dropdown list end */

  stocklist(){
    return this.http.get<any>(environment.base_url + 'Stock/list')
  }

  /* company */
  comGet(data) {
    return this.http.get<any>(environment.base_url + 'company/companydata/' + data.id);
  }
  comEdit(data) {
    return this.http.post<any>(environment.base_url + 'company/edit', data);
  }
  comlist() {
    return this.http.get<any>(environment.base_url + 'company/currency');
  }

  /* search */
  searchlist() {
    return this.http.get<any>(environment.base_url + 'search/list');
  }

  /* permission */

 permissionList() {
    return this.http.get<any>(environment.base_url + 'group/list');
  }
  permissionAdd(data) {
    return this.http.post<any>(environment.base_url + 'group/add', data);
  }
  permissionGet(data) {
    return this.http.get<any>(environment.base_url + 'group/getRow/' + data.id);
  }
  permissionEdit(data) {
    console.log("*******",data)
    return this.http.post<any>(environment.base_url + 'group/edit', data);
  }
  permissionDelete(data) {
    return this.http.get<any>(environment.base_url + 'group/delete/' + data);
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }
 
}
