export class CarData {
  public static getCars = (cb: any): void => {

    fetch('./assets/carData.json').then(response => {
      return response.json();
    }).then(data => {
      cb(data);
    }).catch(err => {
      // Do something for an error here
    });
  };
}
