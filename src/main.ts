import { once, showUI } from '@create-figma-plugin/utilities'

import { CloseHandler, CreateShapesHandler } from './types'
function HSLToRGB(h : number, s : number, l : number) {
  s /= 100;
  l /= 100;
  const k : number = n => (n + h / 30) % 12;
  const a : number = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [ f(0),  f(8), f(4)];
};



export default function () {
  once<CreateShapesHandler>('CREATE_SHAPES', function (count: number, hue: number, sat: number, lig: number, hueDiff: number, satDiff: number, ligDiff: number) {
    const nodes: Array<SceneNode> = []
    for (let i = 0; i < count; i++) {
      const shape = figma.createEllipse()
      shape.x = i * 120
      shape.resize(100, 100)

      let newhue: number = hue + ((hueDiff / (count - 1)) * i);
      let newsat: number = sat + ((satDiff /  (count - 1)) * i);
      let newlig : number = lig + ((ligDiff /  (count - 1)) * i);

      let newRGB : number[] = HSLToRGB(newhue, newsat, newlig)
      // let newRGB: number[] = [.4, .3, .9];
      // let newR : number = newRGB[0];

      shape.fills = [
        {
          // color: { b: i/5, g: 0, r: 1 },
          color: { b : newRGB[2], g: newRGB[1], r: newRGB[0]},
          type: 'SOLID'
        }
      ]
      figma.currentPage.appendChild(shape)
      nodes.push(shape)
    }
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
    figma.closePlugin()
  })
  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })
  showUI({
    height: 337,
    width: 360
  })
}
