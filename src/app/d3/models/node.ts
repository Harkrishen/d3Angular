import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  name: string;
  parentApplication: string;
  linkCount: number = 0;

  constructor(id, parentApplication, name) {
    this.id = id;
    this.name = name;
  }

/*  normal = () => {
    return Math.sqrt(this.linkCount / APP_CONFIG.N);
  }*/

  get r() {
    return 50 ;
  }

  get fontSize() {
    return 10 + 'px';
  }

  get color() {
    return 'red'
  }
}
