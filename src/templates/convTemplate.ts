import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'
import { getLastComponent } from './lenTemplate'
export class ConvTemplate extends BaseExpressionTemplate {
  constructor (private keyword: string) {
    super()
  }
  buildCompletionItem (code: string, position: vsc.Position) {
    const dotIdx = code.lastIndexOf('.', position.character)
    const codeBeforeDot = code.substr(0, dotIdx)
    let lastComponent = getLastComponent(codeBeforeDot)

    let builder = CompletionItemBuilder
      .create(`${this.keyword}`, lastComponent)
      .description(`${this.keyword}(expr)`)
    if (this.keyword == "bytes") {
      builder.insertText('[]byte('+lastComponent+`)`)         
    }else{
      builder.insertText(`${this.keyword}(` + lastComponent + ')')
    }
    builder.deleteTextBeforeCursor(position, lastComponent.length + 1)

    return builder.build()
  }
}

export const build = () => [
  new ConvTemplate('string'),
  new ConvTemplate('int'),
  new ConvTemplate('float'),
  new ConvTemplate('bytes')
]