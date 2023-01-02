/**
 * cart controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::cart.cart', ({strapi}) =>( {

  async create (ctx) {
    // some logic here
    const id = ctx.state.user.id

    const entries = await strapi.entityService.create('api::cart.cart', {
      data: {
        products: ctx.request.body.data.products,
        user:id
     }
    })
    // some more logic
    return entries
  },

}))
