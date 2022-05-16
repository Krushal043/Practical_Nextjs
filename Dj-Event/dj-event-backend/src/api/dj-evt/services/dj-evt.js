'use strict';

/**
 * dj-evt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dj-evt.dj-evt');
