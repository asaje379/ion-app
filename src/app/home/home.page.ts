import { Component } from '@angular/core';
import { createAnimation } from "@ionic/core";
import { DbService } from '../service/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any[] = [];

  constructor(
    private service: DbService
  ) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any[]) => {
      this.data = res;
    });
    this.animate();
  }

  async animate() {
    const animationA = createAnimation()
      .addElement(document.querySelector('#logo'))
      .duration(1500)
      .keyframes([
        { offset: 0, transform: 'rotate(-360deg) scale(0)' },
        { offset: 0.5, transform: 'rotate(-180deg) scale(1.5)' },
        { offset: 1, transform: 'rotate(0deg) scale(1)' }
      ]);
    const animationB = createAnimation()
      .addElement(document.querySelector('.img-ctn'))
      .delay(1500)
      .duration(500)
      .keyframes([
        { offset: 0, height: '90vh' },
        { offset: 1, height: '52vh' },
      ]);
    animationA.play();
    animationB.play();
  }

}
