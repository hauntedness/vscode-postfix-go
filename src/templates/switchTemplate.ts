import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate, BaseTemplate } from './baseTemplates'
import { getIndentCharacters } from '../utils'

abstract class BaseForTemplate extends BaseTemplate {
  abstract buildCompletionItem (code: string, position: vsc.Position, suffix: string)

  canUse (code: string): boolean {
    return true
  }
}

export class SwitchTemplate extends BaseForTemplate {
  buildCompletionItem (code: string, position: vsc.Position) {
    return CompletionItemBuilder
      .create('switch', code)
      .description('switch statemeent (Go)')
      .replace(`switch \${1:{{expr}}} {\ncase \${2:condition}: \n\${0}\n}`, position, true)
      .build()
  }
}

export const build = () => [
  new SwitchTemplate()
]