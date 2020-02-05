import firebase from 'firebase/app'

export default {
    state: {},
    actions: {
        async login({dispatch, commit}, {email, password}){
            console.log("zzzzzzzzz",  email,  password    );
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
                console.log("zzzzzzzzz",       );
            }catch(e){throw e}
        },
        async logout(){
            await firebase.auth().signOut()
        },
        async register({dispatch},{email, password, name}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({name})
            }catch(e){
                console.log(e)
                throw e
            }
        },
        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    },

    mutations: {},
    getters: {},
    modules: {}
}
