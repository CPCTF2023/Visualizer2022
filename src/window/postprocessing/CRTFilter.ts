import {
  CLEAR_MODES,
  Filter,
  FilterSystem,
  Rectangle,
  RenderTexture
} from 'pixi.js'
import fragmentSrc from './CRTFragment.frag?raw'

export class CRTFilter extends Filter {
  constructor() {
    super(undefined, fragmentSrc, { dimensions: [0, 0], devicePixelRatio: 1 })
  }
  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clear: CLEAR_MODES
  ): void {
    const { width, height } = input.filterFrame as Rectangle

    this.uniforms.dimensions[0] = width
    this.uniforms.dimensions[1] = height
    this.uniforms.devicePixelRatio = window.devicePixelRatio
    filterManager.applyFilter(this, input, output, clear)
  }
}
