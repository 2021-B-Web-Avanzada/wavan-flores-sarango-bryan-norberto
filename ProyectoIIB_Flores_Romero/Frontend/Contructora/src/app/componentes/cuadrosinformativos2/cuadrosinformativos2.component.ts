import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuadrosinformativos2',
  templateUrl: './cuadrosinformativos2.component.html',
  styleUrls: ['./cuadrosinformativos2.component.css']
})
export class Cuadrosinformativos2Component implements OnInit {
  @Input()
  imagen="https://la.network/wp-content/uploads/2020/01/EDIFICIOS-2.jpg"
  @Input()
  titulo="titulo"
  @Input()
  tituloboton="texto"
  @Input()
  texto="fkkdlsfjskkd jdkdkd fjdjs jddks dkdmfdddfd dkkkfsjdk dkkdk dkfkkf sjdkfkkf skdkdk skkd sjfkfk skfkd fkdkd mdkfk sdkfk  dkfkfk fkffk kff" +
    " fkfkf kkkkffkdkd we dff sdfe smfk sfgmf skfkf skkfkf skfkgkf sfkfld sdkfek erkfkd kfddm kfkkd sskff skfkgf krkfkd smfkf sf,f,f mdf mmdm " +
    " mdk dfmfmfmfmf msre mfmfkdm dmvmmrkkd dmd,f,f, smf,,d  dmfmmf skkfmf skdkd"

  constructor() { }

  ngOnInit(): void {
  }

}
