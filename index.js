/* jshint node: true */
'use strict';

module.exports = {
  name: 'Ember Uploader',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-uploader/dist/ember-uploader.named-amd.js', {
      exports: {
        'ember-uploader':            ['default'],
        'ember-uploader/uploader':   ['default'],
        'ember-uploader/s3':         ['default'],
        'ember-uploader/file-field': ['default']
      }
    });
  }
};
