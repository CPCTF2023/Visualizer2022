import type { WindowInfo } from '../stores/WindowSystem'
import { CanvasFrame } from './instances/CanvasFrame'
import { ClockFrame } from './instances/ClockFrame'

export const dummyWindow = {
  Component: null,
  title: 'Clock',
  rect: {
    x: 0,
    y: 0,
    width: 500,
    height: 500
  },
  visible: true,
  fullscreen: false
}

export const frames: Record<string, WindowInfo> = {
  visualizer: {
    Component: CanvasFrame,
    title: 'Visualizer',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true,
    fullscreen: true
  },
  clock: {
    Component: ClockFrame,
    title: 'Clock',
    rect: {
      x: 0,
      y: 0,
      width: 500,
      height: 500
    },
    visible: true,
    fullscreen: false
  }
}
