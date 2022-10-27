import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class ErrorTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('error', code)
      .description(`fmt.Errorf("Error:%w", err)`)
      .replace(`fmt.Errorf("\${1:{{expr}}}:%w", err)`, position, true)
      .build()
  }
}

export const build = () => [
  new ErrorTemplate()
]
