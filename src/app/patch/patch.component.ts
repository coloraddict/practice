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
    selectedMedicine:string ='';
    selectedIndex;
    noRecords:boolean = false;
    modalReference;
    activeModal: NgbActiveModal;
    currentJustify = 'justified';
    currentUnit = 0;
    medicine_obj = {};
    tmp_list = [];
    pre_sales_list = [];
    post_sales_list = [];

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

        let medicineobj = this.dataService.getMedicines().subscribe(
      (data) => {
          this.medicine_list = data['records'];
          // this.activeModal = this.modalService.open(this.templateRef,{ ariaLabelledBy: "modal-basic-title", backdrop: "static", keyboard: false, windowClass: "modal-container" });
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
              }, 3000)
            }
          },
          error => { 
          }
        );
    }

    selectPatch(p_patch, id) {
      this.selectedPatch = p_patch.patch_name;

      let doctorobj = this.dataService.getDoctors(p_patch.patch_name).subscribe(
        (data) => {
            this.doctor_list = data['records'];
        },
        error => console.log(error)
      );
    }

    selectDoctor(p_doctorname, m) {
      this.selectedDoctor = p_doctorname;
      
      let medicineobj = this.dataService.getMedicines().subscribe(
        (data) => {
            this.medicine_list = data['records'];
            // this.activeModal = this.modalService.open(this.templateRef,{ ariaLabelledBy: "modal-basic-title", backdrop: "static", keyboard: false, windowClass: "modal-container" });
        },
        error => console.log(error)
      );
      m.dismiss('Cross click');
    }

    loadMedicines(){
      this.router.navigateByUrl('/drug_list');
    }

    displayUnit($event){
       this.currentUnit = $event;
       this.medicine_list[this.selectedIndex].med_unit = this.currentUnit;
    }

    collectUnitData($event){
      this.pre_sales_list = this.medicine_list.filter( (data, value) => {
        return data.med_unit > 0;
      });
    }

}