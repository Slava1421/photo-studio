import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg-diagram',
  templateUrl: './svg-diagram.component.html',
  styleUrls: ['./svg-diagram.component.scss']
})
export class SvgDiagramComponent {

  @ViewChild('svg') svg: any;

  arrPoints = [
    {
      key: 'point1',
      cx: 20,
      cy: 20
    },
    {
      key: 'point2',
      cx: 100,
      cy: 20
    }
  ];

  pushedMouse = false;
  pointKey: string;

  onMousedown(key): void {
    this.pushedMouse = true;
    this.pointKey = key;
  }

  onMouseup(e): void {
    this.pushedMouse = false;
  }

  onMove(e): void {
    

    const pt = this.svg.nativeElement.createSVGPoint();

    pt.x = e.clientX;
    pt.y = e.clientY;
    const s = pt.matrixTransform(this.svg.nativeElement.getScreenCTM().inverse());

    if (this.pushedMouse) {
       this.arrPoints.find(f => f.key === this.pointKey).cx = (s.x <= 20 ? 20 : s.x >= 100 ? 100 : s.x);
       this.arrPoints.find(f => f.key === this.pointKey).cy = (s.y <= 20 ? 20 : s.y >= 100 ? 100 : s.y);
    }
  }
}
