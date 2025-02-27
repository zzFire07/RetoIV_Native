import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const api = axios.create({
    baseURL: "https://retopadelbackend.onrender.com/",
});
// Agregar un interceptor para incluir el token en cada solicitud
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("authToken"); // Obtener token
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});
const apiService = {
    // Función para almacenar el token al iniciar sesión
    saveToken: async (token: string) => {
        await AsyncStorage.setItem("authToken", token);
    },
    // Función para eliminar el token al cerrar sesión
    removeToken: async () => {
        await AsyncStorage.removeItem("authToken");
    },
    // Llamadas de Usuarios
    getAllUsers: () => api.get("/user/getUsers"),
    getUserById: (userId: any) => api.get(`/user/getUserById/${userId}`),
    editUserTickets: (userId: any, newTicketsData: any) =>
        api.put(`/users/AddTickets/${userId}`, newTicketsData),
    // Llamadas de Paquetes
    createPackage: (packageData: any) =>
        api.post("/package/createPackage", packageData),
    deletePackage: (packageId: any) =>
        api.post(`/package/deletePackageByID/${packageId}`),
    editPackage: (packageId: any, packageData: any) =>
        api.put(`/package/updatePackageByID/${packageId}`, packageData),
    getAllPackages: () => api.get("/package/getPackages"),
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
};
export default apiService;