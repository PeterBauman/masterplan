import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  nucleos: FirebaseListObservable<any>;
  bd: AngularFireDatabase;
  itemSelec: any;
  keySelec: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, af: AngularFireDatabase) {
    this.bd = af;
    this.itemSelec = this.navParams.get("item");

    if( typeof this.itemSelec !== "undefined"){                   //si ingresó a un subnúcleo
      console.log("Constructor5:" + this.itemSelec.$key);
      /*this.nucleos = af.list('/nucleos/' + this.itemSelec.$key);  

      //TODO traer los subnucleos
      this.nucleos = af.list('/nucleos/' + this.itemSelec.$key + "/hijos/");//*/
      this.keySelec = this.itemSelec.$key

    } else {  // cuando entra por primera vez
      this.nucleos = af.list('/nucleos'); 
      //this.nucleos = af.list('/users/0/nucleos'); //TODO con users
      this.keySelec = 0;
    }
  }

  itemTapped(event, item) {
    this.navCtrl.setRoot(ListPage, {
      item: item
    });
    console.log("item tapped:" + item);
  }

  irAHome(event, item) {
    this.navCtrl.setRoot(ListPage, {
      item: item
    });
  }

  calendario(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Calendario!',
      buttons: ['OK']
    });
    alert.present();
  }

  chats(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Chats!',
      buttons: ['OK']
    });
    alert.present();
  }

  notificaciones(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Notificaciones!',
      buttons: ['OK']
    });
    alert.present();
  }

  informacion(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Información!',
      buttons: ['OK']
    });
    alert.present();
  }

  mover(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Mover!',
      buttons: ['OK']
    });
    alert.present();
  }

  copiar(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Hola Copiar!',
      buttons: ['OK']
    });
    alert.present();
  }

  borrar(event, nucleo) {
    let alert = this.alertCtrl.create({
      title: 'Hola Borrar!',
      buttons: ['OK']
    });
    alert.present();
    this.nucleos.remove(nucleo);
  }

  agregarNucleo() {
    let prompt = this.alertCtrl.create({
      title: 'Nuevo núcleo',
      //message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'color',
          placeholder: 'Color'
        },
        {
          name: 'icono',
          placeholder: 'Icono'
        },
        {
          name: 'prioridad',
          placeholder: 'Prioridad'
        },
        {
          name: 'keyword',
          placeholder: 'Keyword'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked' + this.keySelec);

            //crea el núcleo
            var key = this.bd.database.ref('/nucleos').push(data).key;
            var nucleosRef = this.bd.database.ref('/nucleos/' + key + "/");
            nucleosRef.update({
              "padre": this.keySelec
            });

            //se lo asigna a su padre
            if(this.keySelec == 0) {
              console.log('Nivel 0');
              //this.bd.database.ref('users/0/nucleos').push({[key]: "true"});
              var nucleoPadreRef = this.bd.database.ref('users/0/nucleos/');
              nucleoPadreRef.update({
                [key]: "true"
              });
            } else {
              console.log('Nivel otro');
              var nucleoPadreRef = this.bd.database.ref('/nucleos/' + this.keySelec + "/subnucleos/");
              nucleoPadreRef.update({
                [key]: "true"
              });
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
/*
      /*var commentsRef = this.bd.database.ref("/nucleos");//new Firebase("https://awesome.firebaseio-demo.com/comments");
      var linkRef = this.bd.database.ref("/nucleos");//new Firebase("https://awesome.firebaseio-demo.com/links");
      
      var linkCommentsRef = linkRef.child(LINK_ID).child("subnucleos");
      
      linkCommentsRef.on("child_added", function(snap) {
        commentsRef.child(snap.key()).once("value", function() {
          // Render the comment on the link page.
        ));
      });*/

      /*var ref = this.bd.database.ref("dinosaurs");
      ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
        console.log(snapshot.key);
      });*/

      /*/var fb = new Firebase("https://examples-sql-queries.firebaseio.com/");
      this.bd.database.ref("/nucleos").child('subnucleos').once('value', function(userSnap) {
        this.bd.database.ref("/nucleos").child('media/123').once('value', function(mediaSnap) {
            console.log( extend({}, userSnap.val(), mediaSnap.val()) );
        });
      });*/
//this.bd.database.ref('nucleos').push
            //var id1 = this.nucleos.push(data).key;
//this.bd.database.app.database.set(id1);

            //TODO: tomar el Usuario 0
            //this.bd.database.ref('users/0/nucleos').push(id1);
            //this.bd.database.ref('users/0/nucleos').push( "true" );
            //this.bd.database.ref('users/0/nucleos').push({ id1: "true" });
            //this.bd.database.ref('users/0/nucleos').push(true);*/
            //this.bd.database.ref('users/0/nucleos').push([ {id1: true, "ghopper": true, "eclarke": true }]);
            
            /*this.bd.database.ref('users/0/nucleos').push({
              nucleo: id,
              valor: "true"           
            });*/

            //String key = mDatabase.child("posts").push().getKey();
            
            /*var postValues = {key: "true"};
            var id1 = this.nucleos.push(data).key;
            this.bd.database.ref('users/0/nucleos/').push(postValues);
new Firebase("http://gamma.firebase.com/MyUser").push(["cakes","bulldozers"]);
results in a tree like you'd expect, with MyUser receiving a uniquely named child who has children "0":"cakes" and "1":"bulldozers".

colour picker

<div>
<ion-list>
<ion-item>
  <ion-label> Couleur </ion-label>
</ion-item>
</ion-list>

<ion-grid>
<ion-row>
  <ion-col style="background:#330000" (tap)="setColor('#330000')"><div>col</div></ion-col>
  <ion-col style="background:#331900" (tap)="setColor('#331900')">&nbsp;</ion-col>
  <ion-col style="background:#333300" (tap)="setColor('#333300')">&nbsp;</ion-col>
  <ion-col style="background:#193300" (tap)="setColor('#193300')">&nbsp;</ion-col>
  <ion-col style="background:#003300" (tap)="setColor('#003300')">&nbsp;</ion-col>
  <ion-col style="background:#003319" (tap)="setColor('#003319')">&nbsp;</ion-col>
  <ion-col style="background:#003333" (tap)="setColor('#003333')">&nbsp;</ion-col>
  <ion-col style="background:#001933" (tap)="setColor('#001933')">&nbsp;</ion-col>
  <ion-col style="background:#000033" (tap)="setColor('#000033')">&nbsp;</ion-col>
  <ion-col style="background:#190033" (tap)="setColor('#190033')">&nbsp;</ion-col>
  <ion-col style="background:#330033" (tap)="setColor('#330033')">&nbsp;</ion-col>
  <ion-col style="background:#330019" (tap)="setColor('#330019')">&nbsp;</ion-col>
  <ion-col style="background:#000000" (tap)="setColor('#000000')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#660000" (tap)="setColor('#660000')">&nbsp;</ion-col>
  <ion-col style="background:#663300" (tap)="setColor('#663300')">&nbsp;</ion-col>
  <ion-col style="background:#666600" (tap)="setColor('#666600')">&nbsp;</ion-col>
  <ion-col style="background:#336600" (tap)="setColor('#336600')">&nbsp;</ion-col>
  <ion-col style="background:#006600" (tap)="setColor('#006600')">&nbsp;</ion-col>
  <ion-col style="background:#006633" (tap)="setColor('#006633')">&nbsp;</ion-col>
  <ion-col style="background:#006666" (tap)="setColor('#006666')">&nbsp;</ion-col>
  <ion-col style="background:#003366" (tap)="setColor('#003366')">&nbsp;</ion-col>
  <ion-col style="background:#000066" (tap)="setColor('#000066')">&nbsp;</ion-col>
  <ion-col style="background:#330066" (tap)="setColor('#330066')">&nbsp;</ion-col>
  <ion-col style="background:#660066" (tap)="setColor('#660066')">&nbsp;</ion-col>
  <ion-col style="background:#660033" (tap)="setColor('#660033')">&nbsp;</ion-col>
  <ion-col style="background:#202020" (tap)="setColor('#202020')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#990000" (tap)="setColor('#990000')">&nbsp;</ion-col>
  <ion-col style="background:#994C00" (tap)="setColor('#994C00')">&nbsp;</ion-col>
  <ion-col style="background:#999900" (tap)="setColor('#999900')">&nbsp;</ion-col>
  <ion-col style="background:#4C9900" (tap)="setColor('#4C9900')">&nbsp;</ion-col>
  <ion-col style="background:#009900" (tap)="setColor('#009900')">&nbsp;</ion-col>
  <ion-col style="background:#00994C" (tap)="setColor('#00994C')">&nbsp;</ion-col>
  <ion-col style="background:#009999" (tap)="setColor('#009999')">&nbsp;</ion-col>
  <ion-col style="background:#004C99" (tap)="setColor('#004C99')">&nbsp;</ion-col>
  <ion-col style="background:#000099" (tap)="setColor('#000099')">&nbsp;</ion-col>
  <ion-col style="background:#4C0099" (tap)="setColor('#4C0099')">&nbsp;</ion-col>
  <ion-col style="background:#990099" (tap)="setColor('#990099')">&nbsp;</ion-col>
  <ion-col style="background:#99004C" (tap)="setColor('#99004C')">&nbsp;</ion-col>
  <ion-col style="background:#404040" (tap)="setColor('#404040')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#CC0000" (tap)="setColor('#CC0000')">&nbsp;</ion-col>
  <ion-col style="background:#CC6600" (tap)="setColor('#CC6600')">&nbsp;</ion-col>
  <ion-col style="background:#CCCC00" (tap)="setColor('#CCCC00')">&nbsp;</ion-col>
  <ion-col style="background:#66CC00" (tap)="setColor('#66CC00')">&nbsp;</ion-col>
  <ion-col style="background:#00CC00" (tap)="setColor('#00CC00')">&nbsp;</ion-col>
  <ion-col style="background:#00CC66" (tap)="setColor('#00CC66')">&nbsp;</ion-col>
  <ion-col style="background:#00CCCC" (tap)="setColor('#00CCCC')">&nbsp;</ion-col>
  <ion-col style="background:#0066CC" (tap)="setColor('#0066CC')">&nbsp;</ion-col>
  <ion-col style="background:#0000CC" (tap)="setColor('#0000CC')">&nbsp;</ion-col>
  <ion-col style="background:#6600CC" (tap)="setColor('#6600CC')">&nbsp;</ion-col>
  <ion-col style="background:#CC00CC" (tap)="setColor('#CC00CC')">&nbsp;</ion-col>
  <ion-col style="background:#CC0066" (tap)="setColor('#CC0066')">&nbsp;</ion-col>
  <ion-col style="background:#606060" (tap)="setColor('#606060')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#FF0000" (tap)="setColor('#FF0000')">&nbsp;</ion-col>
  <ion-col style="background:#FF8000" (tap)="setColor('#FF8000')">&nbsp;</ion-col>
  <ion-col style="background:#FFFF00" (tap)="setColor('#FFFF00')">&nbsp;</ion-col>
  <ion-col style="background:#80FF00" (tap)="setColor('#80FF00')">&nbsp;</ion-col>
  <ion-col style="background:#00FF00" (tap)="setColor('#00FF00')">&nbsp;</ion-col>
  <ion-col style="background:#00FF80" (tap)="setColor('#00FF80')">&nbsp;</ion-col>
  <ion-col style="background:#00FFFF" (tap)="setColor('#00FFFF')">&nbsp;</ion-col>
  <ion-col style="background:#0080FF" (tap)="setColor('#0080FF')">&nbsp;</ion-col>
  <ion-col style="background:#0000FF" (tap)="setColor('#0000FF')">&nbsp;</ion-col>
  <ion-col style="background:#7F00FF" (tap)="setColor('#7F00FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF00FF" (tap)="setColor('#FF00FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF007F" (tap)="setColor('#FF007F')">&nbsp;</ion-col>
  <ion-col style="background:#808080" (tap)="setColor('#808080')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#FF3333" (tap)="setColor('#FF3333')">&nbsp;</ion-col>
  <ion-col style="background:#FF9933" (tap)="setColor('#FF9933')">&nbsp;</ion-col>
  <ion-col style="background:#FFFF33" (tap)="setColor('#FFFF33')">&nbsp;</ion-col>
  <ion-col style="background:#99FF33" (tap)="setColor('#99FF33')">&nbsp;</ion-col>
  <ion-col style="background:#33FF33" (tap)="setColor('#33FF33')">&nbsp;</ion-col>
  <ion-col style="background:#33FF99" (tap)="setColor('#33FF99')">&nbsp;</ion-col>
  <ion-col style="background:#33FFFF" (tap)="setColor('#33FFFF')">&nbsp;</ion-col>
  <ion-col style="background:#3399FF" (tap)="setColor('#3399FF')">&nbsp;</ion-col>
  <ion-col style="background:#3333FF" (tap)="setColor('#3333FF')">&nbsp;</ion-col>
  <ion-col style="background:#9933FF" (tap)="setColor('#9933FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF33FF" (tap)="setColor('#FF33FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF3399" (tap)="setColor('#FF3399')">&nbsp;</ion-col>
  <ion-col style="background:#A0A0A0" (tap)="setColor('#A0A0A0')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#FF6666" (tap)="setColor('#FF6666')">&nbsp;</ion-col>
  <ion-col style="background:#FFB266" (tap)="setColor('#FFB266')">&nbsp;</ion-col>
  <ion-col style="background:#FFFF66" (tap)="setColor('#FFFF66')">&nbsp;</ion-col>
  <ion-col style="background:#B2FF66" (tap)="setColor('#B2FF66')">&nbsp;</ion-col>
  <ion-col style="background:#66FF66" (tap)="setColor('#66FF66')">&nbsp;</ion-col>
  <ion-col style="background:#66FFB2" (tap)="setColor('#66FFB2')">&nbsp;</ion-col>
  <ion-col style="background:#66FFFF" (tap)="setColor('#66FFFF')">&nbsp;</ion-col>
  <ion-col style="background:#66B2FF" (tap)="setColor('#66B2FF')">&nbsp;</ion-col>
  <ion-col style="background:#6666FF" (tap)="setColor('#6666FF')">&nbsp;</ion-col>
  <ion-col style="background:#B266FF" (tap)="setColor('#B266FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF66FF" (tap)="setColor('#FF66FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF66B2" (tap)="setColor('#FF66B2')">&nbsp;</ion-col>
  <ion-col style="background:#C0C0C0" (tap)="setColor('#C0C0C0')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#FF9999" (tap)="setColor('#FF9999')">&nbsp;</ion-col>
  <ion-col style="background:#FFCC99" (tap)="setColor('#FFCC99')">&nbsp;</ion-col>
  <ion-col style="background:#FFFF99" (tap)="setColor('#FFFF99')">&nbsp;</ion-col>
  <ion-col style="background:#CCFF99" (tap)="setColor('#CCFF99')">&nbsp;</ion-col>
  <ion-col style="background:#99FF99" (tap)="setColor('#99FF99')">&nbsp;</ion-col>
  <ion-col style="background:#99FFCC" (tap)="setColor('#99FFCC')">&nbsp;</ion-col>
  <ion-col style="background:#99FFFF" (tap)="setColor('#99FFFF')">&nbsp;</ion-col>
  <ion-col style="background:#99CCFF" (tap)="setColor('#99CCFF')">&nbsp;</ion-col>
  <ion-col style="background:#9999FF" (tap)="setColor('#9999FF')">&nbsp;</ion-col>
  <ion-col style="background:#CC99FF" (tap)="setColor('#CC99FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF99FF" (tap)="setColor('#FF99FF')">&nbsp;</ion-col>
  <ion-col style="background:#FF99CC" (tap)="setColor('#FF99CC')">&nbsp;</ion-col>
  <ion-col style="background:#E0E0E0" (tap)="setColor('#E0E0E0')">&nbsp;</ion-col>
</ion-row>
<ion-row>
  <ion-col style="background:#FFCCCC" (tap)="setColor('#FFCCCC')">&nbsp;</ion-col>
  <ion-col style="background:#FFE5CC" (tap)="setColor('#FFE5CC')">&nbsp;</ion-col>
  <ion-col style="background:#FFFFCC" (tap)="setColor('#FFFFCC')">&nbsp;</ion-col>
  <ion-col style="background:#E5FFCC" (tap)="setColor('#E5FFCC')">&nbsp;</ion-col>
  <ion-col style="background:#CCFFCC" (tap)="setColor('#CCFFCC')">&nbsp;</ion-col>
  <ion-col style="background:#CCFFE5" (tap)="setColor('#CCFFE5')">&nbsp;</ion-col>
  <ion-col style="background:#CCFFFF" (tap)="setColor('#CCFFFF')">&nbsp;</ion-col>
  <ion-col style="background:#CCE5FF" (tap)="setColor('#CCE5FF')">&nbsp;</ion-col>
  <ion-col style="background:#CCCCFF" (tap)="setColor('#CCCCFF')">&nbsp;</ion-col>
  <ion-col style="background:#E5CCFF" (tap)="setColor('#E5CCFF')">&nbsp;</ion-col>
  <ion-col style="background:#FFCCFF" (tap)="setColor('#FFCCFF')">&nbsp;</ion-col>
  <ion-col style="background:#FFCCE5" (tap)="setColor('#FFCCE5')">&nbsp;</ion-col>
  <ion-col style="background:#FFFFFF" (tap)="setColor('#FFFFFF')">&nbsp;</ion-col>
</ion-row>
</ion-grid>
</div>
Have a good day

1 Reply

*/