"use strict";

/**
 * recipe controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::recipe.recipe", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["featured_image", "categories"],
    };
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));
