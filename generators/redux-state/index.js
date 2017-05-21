'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the stupendous ' +
          chalk.red('generator-bh:redux-state') +
          ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'stateName',
        message: 'What would you like to call this redux-state?',
        default: 'data',
      },
      {
        type: 'confirm',
        name: 'hasSaga',
        message: 'Will the state contain sagas?',
        default: true,
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    var stateNameUpperCase = this.props.stateName.replace(/([A-Z])/g, '_$1');
    const props = {
      stateName: this.props.stateName,
      stateNameUpperCase: stateNameUpperCase.toUpperCase(),
    };

    const files = ['reducers.js', 'actions.js', 'BUILD'];

    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(props.stateName + '/' + file),
        props
      );
    });

    if (this.props.hasSaga) {
      this.fs.copyTpl(
        this.templatePath('sagas/BUILD'),
        this.destinationPath(props.stateName + '/sagas/BUILD'),
        props
      );
      this.fs.copyTpl(
        this.templatePath('sagas/index.js'),
        this.destinationPath(props.stateName + '/sagas/index.js'),
        props
      );
    }
  }

  install() {
    // this.installDependencies();
  }
};
