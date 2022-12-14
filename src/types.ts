import {
  convertHexColorToRgbColor,
  convertNamedColorToHexColor,
  convertRgbColorToHexColor,
  isValidHexColor,
  EventHandler
} from '@create-figma-plugin/utilities'

// import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateShapesHandler extends EventHandler {
  name: 'CREATE_SHAPES'
  handler: (count: number, hue: number, sat: number, lig: number, hueDiff: number, satDiff: number, ligDiff: number) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
