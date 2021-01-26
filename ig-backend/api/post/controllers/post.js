'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);

      if (!data || !data.description) {
        ctx.throw(400, 'Please add a description!');
      }

      if (!files || !files.image) {
        ctx.throw(400, 'Please upload an image!');
      }

      const { user } = ctx.state;

      entity = await strapi.services.post.create({ ...data, ...{likes: 0, user} }, { files });
    } else {
      ctx.throw(400, 'You must submit a multi-part request!')
    }
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
