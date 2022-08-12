import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate, BaseTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

export class MethodTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('method', code)
      .description('func (t *expr) method()')
      .replace(`func (t *{{expr}}) \${1:method}() {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export class FuncTemplate extends BaseExpressionTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('func', code)
      .description('func expr()')
      .replace(`func {{expr}}() {\n${getIndentCharacters()}\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new FuncTemplate(),
  new MethodTemplate()
]