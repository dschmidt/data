# Ember Data Changelog

### Ember Data 1.0.0-beta.5 _(January 11, 2014)_

* Normalize key in modelFor when a factory is not given.
* `store.filter` should always return a FilteredRecordArray.
* attrs with options should allow for key option.
* Fix windows builds.
* Add DS.Errors object
* Handle case of single object pushPayload.
* Create RecordArrays from recordArrayManager.
* Documentation

### Ember Data 1.0.0-beta.4 _(December 19, 2013)_

* Use the adapter host for host-relative URLs in `findHasMany`.
* Fix `asyncBelongsTo` resolution.
* Add `destroyRecord` to delete and save a record at once.
* Make it easier to override just the Ajax options.
* Normalize hasMany polymorphic types for `DS.ActiveModelSerializer`.
* Add basic embedded record support to `DS.ActiveModelSerializer`.
* `DS.Store#modelFor` now assigns a store even when a factory supplied.
* Fixes adding unsaved records to hasMany relationships after they are normalized from saved payload.
* Correctly define window/global `DS` namespace in IE7/8.
* Test against all Ember channels.
* Allow `recordIsLoaded` to be called with a string for the type.
* Removing deleted records from RecordArrays is now async.
* Normalize `links` in `DS.RESTSerializer.normalize`.
* Label promises.
* Many documentation fixes.

### Ember Data 1.0.0-beta.3 _(September 28, 2013)_

* Add `normalizePayload` to `RESTAdapter` for payload normalization that is the same
  across all requests.
* Add `record.toJSON()`
* Normalize relationships on payloads returned from saves.
* Rename `rootForType` to `pathForType` in `RESTAdapter`
* Add `serializeIntoHash` in `RESTAdapter` to enable alternate root keys
* Print Ember Data version in the debug output when Ember boots
* Add `typeFromRoot`
* Allow retries of records that were not found
* Add `pushPayload` for pushing out of band records that still go through the
  appropriate normalization logic.
* Add an API for registering custom pluralization rules (see
  4df69d14ef2677977f520986070a2fdc45664008)
* Add `unloadAll` on store
* Infer the type of hasMany and belongsTo relationships by inflecting the key
* Polymorphic relationship improvements
* ActiveModel Adapter for working with Rails-like servers, not included by default
  in the Ember Data build but available separately.
* `store.metadataFor(type)` to get metadata provided by `findAll`.
* `RecordArray#save`
* `store.getById` returns null if a record isn't found
* Fix a number of rollback-related cases
* Fix async belongsTo
* A number of `links`-related fixes
* Ensure that `didLoad` fires when a record is created for the first time
* Support primary and sideloaded data of the same type to be returned from array
  lookups (via `posts` and `_posts`).
* IE8 fixes
* Add `record.changedAttributes()`
* Properly handle absolute and relative links in the `RESTAdapter`
* Records become clean again if their properties are set back to the original values

### Ember Data 1.0.0-beta.2 _(September 04, 2013)_

* Add support for `host` and `namespace` in the RESTAdapter
* Always use shorthand (`post`, not `App.Post`) in models
* Always use shorthand (`custom` not `App.CustomAdapter`) when looking up adapters
* Support `store.all('post')`
* Add back support for `record.rollback()`
* Transforms should be registered via `App.DateTransform` (for `date`)
* Add back support for `since` token for find all fetches
* Add `keyForAttribute` and `keyForRelationship` hooks in the serializer
* Support for serializing many-to-none and many-to-many relationships in RESTSerializer
* Several fixes for DS.hasMany async
* RESTAdapter `buildURL` takes a string, not type
* RESTAdapter now has `rootForType` to convert a type into the root
* `store.update` to update some, but not all attributes
* Thanks to Paul Chavard, Toran Billups, Bradley Priest, Kasper Tidemann, Yann Mainier,
  Dali Zheng, Jeremy Green, Robert Jackson, Joe Bartels, Alexandre de Oliveria,
  Floren Jaby, Gordon Hempton, Ivan Vanderbyl, Johannes Würbach, Márcio Júnior,
  Nick Ragaz, Ricardo Mendes, Ryunosuke SATO, Sylvain Mina, and ssured

### Ember Data 1.0.0-beta.1 _(September 01, 2013)_

* Added `DS.DebugAdapter` which extends `Ember.DataAdapter`
* Explain how to deal with embedded records
* Start on a transition guide
* Make willCommit while in flight a noop
* Update examples
* Move normalization and extraction to serializer
* `deleteRecord` when already deleted is a noop
* Explain "originally passed as an Array of IDs"
* Shortens unnecessary verbiage
* Add Promise Proxies
* Add back serializers
* More consistency for serializerFor
* Rename `NewJSONSerializer` to `JSONSerializer`
* Don't invalidate `data` if there's no new data
* Use the inflector instead of dumb pluralization
* `store.create({adapter:'name'})` uses the container
* Remove `resolveOn`
* Thread more promises through the adapter
* Fix invokeLifecycleCallbacks on still dirty record
* Initialize adapter in the store
* Support merging scenarios
* Start implementing merge semantics
* Remove references to references
* Remove unnecessary usage of references
* Remove leftover serializer code
* Add support for singular names in REST payloads
* Move extraction layers to adapter
* Added support for URL lookups
* Inject the default DS.Store if none is provided
* Add `findAll`, `findMany` and `findQuery` to RESTAdapter
* Add `findAll` plus request-type-specific extracts
* Make serializer respect primaryKey/attrs
* REST Adapter payload stuff
* Ember.Inflector: `Ember.String#pluralize` and `Ember.String#singularize`
* Remove `handlePromise` indirection.
* Queries are now using promises properly
* Share code between sync and async `hasMany`
* Unload test passing
* Adapter Interop test passing (plus findByIds)
* Get reloading passing
* Got record persistence test passing
* Records are no longer thenables
* Require application.Store to be defined - Fixes #1084
* Relationship changes operate on records
* Don't assign DS to window unless window exists - Fixes #681
* Client ID generation passing
* Eagerly generate the jQuery expando on window
* Allowing inverse relationships to be nullable.
* `fetchRecord` replaced `findById` here
* Eliminate lazy materialization from `belongsTo`
* Start consolidating API around records
* Make the data materialized again
* Add `debugInfo` to `DS.Model`
* Add `store.push` and `store.recordFor`
* Remove redundant `[]` from `Ember.A()` calls
* Bump ember-source
* Flatten model's `data` structure into single hash
* Fix deprecation warning
* Add serializerFor API to `DS.Store`
* Removed duplicate method declaration
* `save` method is not private
* Prevent resolution of jQuery's self fulfilling jqXHR thenable Since it resolves on another turn, it will cause needless and unwrappable auto-runs
* Rewrite the state machine to improve performance
* Add individual record to the buildURL signature.
* Update jQuery version for `rake test[all]`
* Remove unnecessary inspector for `object`
* Remove option to specify router
* Declared `ajaxHeaders`.
* Specify additional headers for RESTAdapter.
* Update supported ruby version
* Use `Ember.EnumerableUtils.map`
* Use `Ember.EnumerableUtils.indexOf`
* Use `Ember.EnumerableUtils.forEach`
* Modify code indent
* Bump ember-source to 1.0.0-rc.6
* Include the version number in the javascript.
* This expression makes my brain hurt, lets atleast expand this to two lines. (We need some sort of macro system to improve these assertions.
* Improve variable naming consistency
* Remove nested run loop.
* Allow metadata value to be zero
* Remove redundant serialized variable. :/
* Better serializeId implementation that takes empty strings into consideration and fixed a logic error in `isNaN(id)` check
* Id serialization correctly returns null for null or undefined id values rather than 0
* Remove bundled jQuery
* First pass at uncatchable assertions
* English, do you speak it?
* Remove unused variables
* Remove unused helper
* Remove unnecessary comment
* Remove unused tasks
* Support `Ember::Data::VERSION`
* Assert post is dirty
* Replace references to jQuery with Ember.$
* RESTAdapter: reject with xhr only
* Fix: record must be invalid on 422
* Add failing integration test to expose bug #1005
* Remove revision reference.
* Check against `null` and `undefined`


### Ember Data 0.13 _(May 28, 2013)_

* Initial Release
