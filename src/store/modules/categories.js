import axios from 'axios'

export default{
    namespaced: true,
    
    state:{
        items:[]
    },    
    actions:{
        fetchCategories(context){
            axios.get('/api/v1/categories')
            .then(res => {          
                const categories = res.categories;
                // context.commit('setCategories',categories);
                context.commit('setItems',{resource:'categories',items:categories}, {root:true});
                return context.state.categories
            })
        },
    }
}