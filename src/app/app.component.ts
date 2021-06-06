import { SpacexService } from './spacex.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  IsLoading: Boolean = false;
  startYear = 2006;
  endYear = 2020;

  year:string="";
  launch:string="";
  land:string="";

  yearsCount = 0;
  years$: Observable<number[]> = of(this.getYears());

  data:any;
  constructor(private service: SpacexService){}

  ngOnInit(){
    this.IsLoading = true;
    this.service.getData()
    .subscribe(response=>{
      this.data = response;
      this.IsLoading = false;
    });
  }

  getYears():number[]{
    let launchYears: number[]=[];
    for(let i = this.startYear; i <= this.endYear; i++){
      launchYears.push(i);
    }
    this.yearsCount = launchYears.length;
    return launchYears;
  }

  setYear(event:any){
    let year = event.target.innerHTML

    //deselect previous
    if(this.year !== ""){
      (document.getElementById("year"+this.year) as HTMLElement).className = "col year"
    }

    //maintain current selection
    this.year = this.year == year ? "" : year;

    //select
    if(this.year !== ""){
      (document.getElementById("year"+this.year) as HTMLElement).className = "col year selected"
    }
    this.printSelection();
  }

  setLaunch(launch:string){
    //deselect previous
    if(this.launch !== ""){
      (document.getElementById("launch"+this.launch) as HTMLElement).className = "col year"
    }

    this.launch = this.launch == launch ? "" : launch;

    //select
    if(this.launch !== ""){
      (document.getElementById("launch"+this.launch) as HTMLElement).className = "col year selected"
    }
    this.printSelection();
  }

  setLand(land:string){
    //deselect previous
    if(this.land !== ""){
      (document.getElementById("land"+this.land) as HTMLElement).className = "col year"
    }

    this.land = this.land == land ? "" : land;

    //select
    if(this.land !== ""){
      (document.getElementById("land"+this.land) as HTMLElement).className = "col year selected"
    }
    this.printSelection();
  }
  
  printSelection(){
    let queryParam = "";
    if(this.launch!==""){
      queryParam = "&launch_success="+this.launch;
    }
    if(this.land!==""){
      queryParam = queryParam + "&land_success="+this.land;
    }
    if(this.year!==""){
      queryParam = queryParam + "&launch_year="+this.year;
    }
    this.IsLoading = true;
    this.service.getData(queryParam)
    .subscribe(response=>{
      this.data = response;
      this.IsLoading = false;
    });
  }

}
