import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({ //instancia personalizada de axios
    baseURL: "https://retopadelbackend.onrender.com/", // url base
    headers: { // headers de la request
        "Content-Type": "application/json"
    },
});

api.interceptors.request.use( //modifico la request antes que se envie al servidor
    async (config) => { //objeto config tiene la configuracion de la request
        const token = await AsyncStorage.getItem("authToken"); //obtener token del storage
        console.log("Token:", token);
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`; // agregar token al header
        }
        return config;
});

const apiService = {

    // Llamadas de Usuarios
    logUser: () => api.post("/user/logUser"),
    getAllUsers: () => api.get("/user/getUsers"),
    getUserById: (userId: string) => api.get(`/user/getUserById/${userId}`),
    getUserByFirebaseId: (firebaseId: String) => api.get(`/user/getUserByFirebaseId/${firebaseId}`),
    addTickets: (userId: string, newTicketsData: any) =>
        api.post(`/user/addTickets/${userId}`, newTicketsData),
    addPhoneNumber: (userId: Number, phoneNumberData: String) => api.post(`/user/addPhoneNumber/${userId}`, {"phone_number": phoneNumberData}),

    // Llamadas de Paquetes
    createPackage: (packageData: any) =>
        api.post("/package/createPackage", packageData),
    deletePackage: (packageId: any) =>
        api.post(`/package/deletePackageByID/${packageId}`),
    editPackage: (packageId: any, packageData: any) =>
        api.put(`/package/updatePackageByID/${packageId}`, packageData),
    getAllPackages: () => 
        api.get("/package/getPackages")
    ,
    getPackageById: (packageId: any) =>
        api.get(`/package/getPackageById/${packageId}`),

    // Llamadas del historial de transacciones
    createTransaction: (userId: any, transactionData: any) =>
        api.post(`/transaction/createTransaction/${userId}`, transactionData),
    deleteTransaction: (transactionId: any) =>
        api.post(`/transaction/deleteTransactionById/${transactionId}`),
    getAllTransactions: () => api.get("/transaction/getTransactions"),
    getTransactionById: (transactionId: any) =>
        api.get(`/transaction/getTransactionById/${transactionId}`),

    // Llamadas para mercadopago
    validateBuy: (paymentId: string, userId: any, packageId: any) =>
        api.post(`/transaction/mercadopago/validateBuy`, { "payment_id": paymentId, "id_package": packageId, "user_id": userId }),
};
export default apiService;