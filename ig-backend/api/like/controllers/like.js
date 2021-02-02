'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const { create, delete } = require('../../post/controllers/post');


module.exports = {
  async create(ctx) {
    let entity;

    const { user } = ctx.state; // Logged in user
    const { post } = ctx.request.body;  // Id of post

    if (typeof post !== 'number') {
      ctx.throw(400, 'Please only pass the id for the post.');
    }

    const realPost = await strapi.services.post.findOne({
      id: post
    });
    if (!realPost) {
      ctx.throw(400, 'This post does not exist.');
    }

    const found = await strapi.services.like.findOne({
      user: user.id,
      post
    })
    if (found) {
      ctx.throw(400, 'You already liked this post.');
    }

    if (ctx.is('multipart')) {
      ctx.throw(400, "Please only make JSON requests.")
    } else {
      entity = await strapi.services.like.create({ post, user })
    }

    // Update the likes counter
    const { likes } = realPost;
    const updatedPost = await strapi.services.post.update({
      id: post
    }, {
      likes: likes + 1
    });

    return sanitizeEntity(entity, { model: strapi.models.like })
  },

  async delete(ctx) {
    const { user } = ctx.state;
    const { postId } = ctx.params;

    const post = parseInt(postId);

    if (typeof post !== 'number') {
      ctx.throw(400, 'Please only use the id of the post.')
    }

    const entity = await strapi.services.like.delete({
      post,
      user: user.id
    })

    if (entity.length) {
      const { likes } = entity[0].post;
      const { updatedPost } = await strapi.services.post.update({
        id: post
      },
      {
        likes: likes - 1
      })

      return sanitizeEntity(entity[0], { model: strapi.models.like })
    }
  }
};
