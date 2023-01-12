"use strict";

/**
 * recipe controller
 */

const utils = require("@strapi/utils");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::recipe.recipe", ({ strapi }) => ({
 
  async findBySlug(ctx) {
    const { slug } = ctx.params

    ctx.query = {
      ...ctx.query,
      filters: {
          slug: slug
      },
      populate: ["deep"],
    };
    
    const { data, meta } = await super.find(ctx);

    return { data: data[0], meta }
  },
}));
