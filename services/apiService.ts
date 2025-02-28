import axios from "axios";
const api = axios.create({ //instancia personalizada de axios
    baseURL: "https://retopadelbackend.onrender.com/", //url base
    headers: {
        //"token": localStorage.getItem("authToken") || ""
    },
});
api.interceptors.request.use( //modifico la request antes que se envie al servidor
    (config) => { //objeto config tiene la configuracion de la request
        //const token = localStorage.getItem("token");
        const token = "tocken"; // obtengo token almacenado
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // agregar token al header
        }
        return config;
});
const apiService = {
    //Llamadas de Usuarios
    getAllUsers: () => api.get("/user/getUsers"),
    getUserById: (userId: any)=> api.get(`/user/getUserById/${userId}`),
    editUserTickets: (userId: any, newTicketsData: any) => api.put(`/users/AddTickets/${userId}`, newTicketsData), //anadir y eliminar tickets o actualizar los tickets?
    

    //Llamadas de Paquetes
    createPackage: (packageData: any) => api.post("/package/createPackage", packageData),
    deletePackage: (packageId: any) => api.post(`/package/deletePackageByID/${packageId}`),
    editPackage: (packageId: any, packageData: any) => api.put(`/package/updatePackageByID/${packageId}`, packageData),
    getAllPackages: () => api.get("/package/getPackages"),
    getPackageById: (packageId: any) => api.get(`/package/getPackageById/${packageId}`),
    
    //Llamadas del historial de transacciones
    createTransaction: (userId: any, transactionData: any) => api.post(`/transaction/createTransaction/${userId}`, transactionData),
    deleteTransaction: (transactionId: any) => api.post(`/transaction/deleteTransactionById/${transactionId}`),
    getAllTransactions: () => api.get("/transaction/getTransactions"),
    getTransactionById: (transactionId: any) => api.get(`/transaction/getTransactionById/${transactionId}`),
}
export default apiService;