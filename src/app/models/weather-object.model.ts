import { CloudModel } from './cloud.model';
import { CoordModel } from './coord.model';
import { MainModel } from './main.model';
import { SysModel } from './sys.model';
import { WeatherModel } from './weather.model';
import { WindModel } from './wind.model';

export class WeatherObjectModel {
    public clouds: CloudModel;
    public cod: number;
    public coord: CoordModel;
    public dt: number;
    public id: number;
    public main: MainModel;
    public name: string;
    public sys: SysModel;
    public visibility: number;
    public weather: WeatherModel;
    public wind: WindModel;

    constructor(clouds: CloudModel, cod: number, coord: CoordModel,
                dt: number, id: number, main: MainModel, name: string,
                sys: SysModel, visibility: number, weather: WeatherModel, 
                wind: WindModel) {
        this.clouds = clouds;
        this.cod = cod;
        this.coord = coord;
        this.dt = dt;
        this.id = id;
        this.main = main;
        this.name = name;
        this.sys = sys;
        this.visibility = visibility;
        this.weather = weather;
        this.wind = wind;
    }
}
