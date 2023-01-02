/**
 * cart controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::cart.cart', ({strapi}) => {

  return {
    async create(ctx) {
      const id = ctx.state.user.id
       // entry is the cart and published_at is the date of creation

      return await strapi.entityService.create('api::cart.cart', {
        data: {
          products: ctx.request.body.data.products,
          user: id
        }
      })
    },
  }
})
