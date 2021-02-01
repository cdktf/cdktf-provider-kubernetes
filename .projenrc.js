const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: 'kubernetes@~> 1.0',
  eslint: false,
});

project.synth();
