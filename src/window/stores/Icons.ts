import iconSrc from './icons/clock-icon.png'
import visualizerSrc from './icons/visualizer-icon.png'

export interface IconInfo {
  src: string
  id: string
  title: string
}

export const icons: IconInfo[] = [
  {
    src: visualizerSrc,
    id: 'visualizer',
    title: 'Visualizer'
  },
  {
    src: iconSrc,
    id: 'clock',
    title: 'Clock.exe'
  },
  {
    src: iconSrc,
    id: 'readme',
    title: 'Readme.txt'
  }
]
