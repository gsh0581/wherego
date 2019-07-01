let defaultCity = '北京';
try {
    if(localStorage.city)
        defaultCity = localStorage.city
} catch (error) {
   new Error(error)
}
// actions: {
//     changeCity (ctx, city) {
//        ctx.commit('changeCity',city)
//     }
// },
export default {
    city: defaultCity
}