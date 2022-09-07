# Postfix templates for Golang
[![Version](https://vsmarketplacebadge.apphb.com/version-short/fr-str.vscode-postfix-go-fr.svg
)](https://marketplace.visualstudio.com/items?itemName=fr-str.vscode-postfix-go-fr)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/fr-str.vscode-postfix-go-fr.svg
)](https://marketplace.visualstudio.com/items?itemName=fr-str.vscode-postfix-go-fr)

Forked from [vscode-postfix-ts](https://github.com/ipatalas/vscode-postfix-ts)
Forked from [vscode-postfix-go](https://github.com/yokoe/vscode-postfix-go)

![feature X](images/demo.gif)

Under development. Any suggestions are welcomed.

## Templates

All available templates (`expr` means the expression on which the template is applied):

| Template          | Outcome |
| -------:          | ------- |
| **.if**           | `if expr` |
| **.else**         | `if !expr` |
| **.nil**          | `if expr == nil` |
| **.nnil**         | `if expr != nil` |
| **.forr**         | `for index := range expr` |
| **.fori**         | `for i := 0; i < len(expr); i++` |
| **.for**          | `for index, element := range expr` |
| **.return**       | `return expr` |
| **.var**          | `name := expr` |
| **.const**        | `const name type = expr` |
| **.append**       | `expr = append(expr, element)` |
| **.len**          | `len(expr)` |
| **.print**        | `fmt.Println(expr)` |
| **.printf**       | `fmt.Printf("%+v\n", expr)` |
| **.error**        | `errors.New("expr")` |
| **.struct**       | `type expr struct` |
| **.interface**    | `type expr interface` |
| **.switch**       | `switch expr` |
| **.exist**        | `if v, ok := expr; !ok {}` |
| **.list**         | `[]type{expr}` |
| **.func**         | `func expr()` |
| **.method**       | `func (t *expr)` |
| **.type**         | `[]byte/string/int/float(expr)` |


## Author

[Sota Yokoe](https://github.com/yokoe) [(twitter)](https://twitter.com/croquette0212)

## Contributors
[Hamza Anis](https://github.com/HamzaAnis) [fr-str](https://github.com/fr-str)
