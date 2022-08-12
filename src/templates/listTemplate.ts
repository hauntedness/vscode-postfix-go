import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class ListTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    const dotIdx = code.lastIndexOf('.', position.character)
    const codeBeforeDot = code.substr(0, dotIdx)
    let lastComponent = getLastComponent(codeBeforeDot)

    let builder = CompletionItemBuilder
      .create('list', lastComponent)
      .description(`[]type{expr}`)
      .replace(`[]\${1:type}{${lastComponent}}`, position, true)
    builder.deleteTextBeforeCursor(position, lastComponent.length + 1)

    return builder.build()
  }
}

export const build = () => new ListTemplate()

function getLastComponent (input: string): string {
  if (input.length === 0) { return '' }
  let lastComponent = ''
  for (let i = 0; i < input.length; i++) {
    let character = input.substr(input.length - i - 1, 1)
    if (!character.match(/[a-zA-Z0-9\(\)\[\]\.]/)) {
      return lastComponent
    }

    lastComponent = character + lastComponent
  }
  return lastComponent
}
