/**
 * cart controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::cart.cart', ({strapi}) => {
  return {
    async create(ctx) {
      ctx.request.body.data.user = ctx.state.user.id
      return await super.create(ctx)
    },
  }
})
