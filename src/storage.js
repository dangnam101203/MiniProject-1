export default {
    save: (data) => {
        localStorage.setItem('user-list', JSON.stringify(data))
    },
    getUserList: () => {
       try {
           const data = localStorage.getItem('user-list')
           return data ? JSON.parse(data) : []
       } catch (error) {
           return []
       }
    }
}