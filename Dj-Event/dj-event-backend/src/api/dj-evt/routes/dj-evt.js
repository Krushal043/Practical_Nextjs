'use strict';

/**
 * dj-evt router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dj-evt.dj-evt');
