"use strict";

/**
 * recipe router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/recipes/:slug",
      handler: "custom-controller.findBySlug"
    }
  ],
};