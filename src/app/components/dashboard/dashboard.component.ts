import { Component, ViewEncapsulation } from '@angular/core';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotCurrentState } from '../../model/current-state.interface';
import { ParkingLotMetaData } from '../../model/metadata.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  currentStateData!: ParkingLotCurrentState[];
  metaData!: ParkingLotMetaData[];
  currentParkingLot!: ParkingLotCurrentState | any;
  currentMetaData!: ParkingLotMetaData | any;

  constructor(private parkingLotService: ParkingLotService) {}

  ngOnInit(): void {
    this.getParkingLotData();
    this.getParkingLotMetaData();
  }

  getParkingLotData(): void {
    this.parkingLotService.getParkingLotCurrentStateData().subscribe((data) => {
      this.currentStateData = data;
      this.currentParkingLot = this.currentStateData[0];
      console.log('current state data', this.currentStateData);
    });
  }

  getParkingLotMetaData(): void {
    this.parkingLotService.getParkingLotMetaData().subscribe((data) => {
      this.metaData = data;
      this.currentMetaData = this.metaData[0];
      console.log('meta  data', this.metaData);
    });
  }

  onChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    console.log(value, this.currentStateData);
    this.currentParkingLot = this.currentStateData.find(
      (element) => element.parking_lot_id == Number(value)
    );

    console.log(this.currentParkingLot);
  }
}
