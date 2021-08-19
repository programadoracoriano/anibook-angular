import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastController, ModalController} from '@ionic/angular';
@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.page.html',
  styleUrls: ['./create-topic.page.scss'],
})
export class CreateTopicPage implements OnInit {

  constructor(
    public api: ApiService,
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }

}
