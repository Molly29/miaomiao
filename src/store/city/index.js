const state= {
    name : window.localStorage.getItem('nowNm') || '北京',
    code :  window.localStorage.getItem('nowIId') || 10,
};



const mutations= {
    CITY_INFO(state,payload){
        state.name = payload.name;
        state.code = payload.code;
    }
};



const actions={
};


export default {
    namespaced : true,
    state,
    mutations,
    actions,
}