const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')
const router = Router({prefix: '/api/v1/nutritions'})
const config = require('../helper/config')

router.get('/', bodyParser(), getNutrition)

// Make the actual CORS request.
async function getNutrition(ctx) {
  const data = ctx.request.body.ingredients
  const url = 
    `https://api.edamam.com/api/nutrition-details?app_id=${config.nutritionAPIConfig.APP_ID}&app_key=${config.nutritionAPIConfig.APP_KEY}`;
  const response = 
    await axios.post(url, data)
    .then((response) => {
      ctx.body = response.data;
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
}

module.exports = router