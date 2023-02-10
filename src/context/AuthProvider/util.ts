import { Api } from "../../services/api";


export async function LoginRequest(email: string, password: string) {
    try {
        const reqrest = await Api.post("login", {email, password});
        
        return reqrest.data;
    } catch (error) {
        return null;
    }
}