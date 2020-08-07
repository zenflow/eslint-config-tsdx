# eslint-config-tsdx

An ESLint shareable config with rules of [tsdx](https://github.com/formium/tsdx).

### Warning

Because of the way eslint resolves plugin modules, 
its documentation tells us that [a shareable config should include its plugin dependencies in "peerDependencies"](https://eslint.org/docs/developer-guide/shareable-configs.html#publishing-a-shareable-config),
meaning users of the config would need to install and depend on each plugin package themselves.
Parsers work the same way. 
This essentially describes [eslint issue #3458](https://github.com/eslint/eslint/issues/3458). 

For your convenience, 
instead of including plugins and parsers as "peerDependencies", 
we will include them as "dependencies" *and issue the following warning*:

**Do not install alternate versions of the following npm packages in your project:**

```
"@typescript-eslint/eslint-plugin": "2.x"
"@typescript-eslint/parser": "2.x"
"babel-eslint": "10.x"
"eslint-plugin-flowtype": "3.x || 4.x"
"eslint-plugin-import": "2.x"
"eslint-plugin-jsx-a11y": "6.x"
"eslint-plugin-prettier": "3.x"
"eslint-plugin-react": "7.x"
"eslint-plugin-react-hooks": "1.x || 2.x"
"prettier": "2.x"
```
