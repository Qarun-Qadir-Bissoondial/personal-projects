module.exports = {
  name: 'doubles-order',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/doubles-order',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
