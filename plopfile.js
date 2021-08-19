module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'MyComponent'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/src/{{name}}.vue',
        templateFile: 'plop-template/src/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-template/__tests__/component.test.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/stories/{{name}}.stories.js',
        templateFile: 'plop-template/stories/component.stories.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/index.js',
        templateFile: 'plop-template/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/LiCENSE',
        templateFile: 'plop-template/LiCENSE'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'plop-template/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'plop-template/README.hbs'
      }
    ]
  })
}