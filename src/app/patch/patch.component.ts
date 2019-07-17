import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
 
@Component({
    selector: 'patch-list',
    templateUrl: 'patch.component.html',
    styleUrls: ['patch.component.css']
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
    noRecords:boolean = false;
    modalReference;

    @ViewChild('medicine') elem:ElementRef;
    
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
      console.log(content);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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
              console.log(data['message']);
            }
          },
          error => { 
            console.log('hehehe');
            console.log(error);
          }
        );
    }

    selectPatch(p_patch, id) {
      this.selectedPatch = p_patch.patch_name;

      let doctorobj = this.dataService.getDoctors(p_patch.patch_name).subscribe(
        (data) => {
            this.doctor_list = data['records'];
            // console.log(this.doctor_list);
        },
        error => console.log(error)
      );
    }

    selectDoctor(p_doctorname, m) {
      this.selectedDoctor = p_doctorname;
      
      let medicineobj = this.dataService.getMedicines().subscribe(
        (data) => {
            this.medicine_list = data['records'];
            setTimeout( () => {
              this.openMedicine(this.elem.nativeElement);
            }, 2000);
            
            console.log(this.medicine_list);
        },
        error => console.log(error)
      );
      m.dismiss('Cross click');
      // this.modalReference.close();
    }

    loadMedicines(){
      this.router.navigateByUrl('/drug_list');
    }

}