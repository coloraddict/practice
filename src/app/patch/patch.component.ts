import { Component, ViewChild, ElementRef, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
 
@Component({
    selector: 'patch-list',
    templateUrl: 'patch.component.html',
    styleUrls: ['patch.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PatchList {

    closeResult: string;
    patch_list:any = [];
    area_list:any = [];
    doctor_list = [];
    medicine_list = [];
    selectedArea:string = '';
    selectedPatch:string = '';
    selectedDoctor:string = '';
    selectedMedicine:any;
    selectedIndex;
    noRecords:boolean = false;
    modalReference;
    activeModal: NgbActiveModal;
    currentJustify = 'justified';
    currentUnit = 0;
    medicine_obj = {};
    pre_tmp_list = [];
    pre_sales_list = [];
    post_sales_list = [];
    post_tmp_list = [];
    isAreaSelected:boolean = false;
    isPatchSelected:boolean = false;
    isDoctorSelected:boolean = false;
    isProductSelected:boolean = false;

    @ViewChild('medicineList') templateRef: TemplateRef<any>;
    
    constructor(private dataService: DataService, private modalService: NgbModal, private router: Router){
    
    }
    
    ngOnInit(){
        let area_obj = this.dataService.getArea().subscribe(
            (data) => {
                this.area_list = data['records'];
                // console.log(this.area_list);
            },
            error => console.log(error)
        )
    }
    
    openArea(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openPatch(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openDoctor(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openMedicine(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    addMedicineUnit(content, p_medicine, p_index){
      this.activeModal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: 'medicine-unit-selection'});
      this.selectedMedicine = p_medicine;
      this.selectedIndex = p_index;
      console.log(this.selectedMedicine);
    }
    
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
    }

    selectArea(p_area, id){
        this.selectedArea = p_area.area_name;
        this.isAreaSelected = true;
        let patchesobj = this.dataService.getPatches(p_area.area_id).subscribe(
          (data) => {
            if(data['records']){
              this.patch_list = data['records'];
            }
            if(data['message']) {
              this.noRecords = true;
              setTimeout( () => {
                this.noRecords = false;
                this.selectedArea = '';
                this.isAreaSelected = false;
              }, 1500)
            }
          },
          error => { 
          }
        );
    }

    selectPatch(p_patch, id) {
      this.selectedPatch = p_patch.patch_name;
      this.isPatchSelected = true;
      let doctorobj = this.dataService.getDoctors(p_patch.patch_name).subscribe(
        (data) => {
            this.doctor_list = data['records'];
        },
        error => console.log(error)
      );
    }

    selectDoctor(p_doctorname, m) {
      this.selectedDoctor = p_doctorname;
      this.isDoctorSelected = true;
      let medicineobj = this.dataService.getMedicines().subscribe(
        (data) => {
            this.medicine_list = data['records'];
            this.pre_tmp_list = JSON.parse(JSON.stringify(this.medicine_list));
            this.post_tmp_list = JSON.parse(JSON.stringify(this.medicine_list));
        },
        error => console.log(error)
      );
      m.dismiss('Cross click');
    }

    loadMedicines(){
      this.router.navigateByUrl('/drug_list');
    }

    displayPreSalesUnit($event){
       this.currentUnit = $event;
       this.pre_tmp_list[this.selectedIndex].med_unit = this.currentUnit;
    }

    collectPreSalesUnit($event){
      this.pre_sales_list = this.pre_tmp_list.filter( (data, value) => {
        return data.med_unit > 0;
      });
      this.isProductSelected = this.pre_sales_list.length>0;
    }

    displayPostSalesUnit($event){
       this.currentUnit = $event;
       this.post_tmp_list[this.selectedIndex].med_unit = this.currentUnit;
    }

    collectPostSalesUnit($event){
      this.post_sales_list = this.post_tmp_list.filter( (data, value) => {
        return data.med_unit > 0;
      });
    }

}