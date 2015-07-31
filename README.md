#  Ember Uploader

This is an npm package that contains the [Ember Uploader](https://github.com/benefitcloud/ember-uploader) library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) Addon.

## Installation

**Ember Uploader requires at least Ember CLI 0.0.44.**

To install simply run

```
npm install --save-dev ember-cli-uploader
ember generate ember-cli-uploader
```

in your Ember CLI project's root.

And, from your component:

````
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    // ...
  });
});
````

For the actual Ember Uploader repository see
https://github.com/benefitcloud/ember-uploader

## Known issues

* Generation does not work properly with ember-cli 0.2.3 and is fixed with 0.2.5
