export interface ParkingLotCurrentState {
  parking_lot_id: number;
  free: number;
  occupied: number;
  soon_due: number;
  due: number;
  overdue: number;
  ticket_issued: number;
  ticket_could_not_be_issued: number;
  entitled_to_park: number;
  entitled_to_park_safe: number;
  ignored: number;
  due_not_monitored: number;
  overdue_not_monitored: number;
  due_beacons: number;
  overdue_beacons: number;
  not_installed: number;
  total_parking_spaces: number;
  remember_for_later: number;
  soon_due_not_monitored: number;
  soon_due_beacons: number;
}
