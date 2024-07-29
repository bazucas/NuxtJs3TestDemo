export default defineNuxtPlugin( () => {
    addRouteMiddleware((to, from) => {
        if(to.path === '/database') {
            return abortNavigation('Forbidden page')
        }
    })

    // addRouteMiddleware('denyLuis', (to, from) => {
    //     const name = to.params.name;
    //     if (name && name.toLowerCase() === 'luis') {
    //         return abortNavigation('The name Luis is not allowed');
    //     }
    // });

    addRouteMiddleware((to)=> {
        console.log('Global middleware')

        const name = to.params.name;
        if (name && name.toLowerCase() === 'luis') {
            return abortNavigation('The name Luis is not allowed');
        }

    }, {global: true})
})