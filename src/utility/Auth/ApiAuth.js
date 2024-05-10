import { toast } from "react-toastify";
import supabase from "../SupaBase/SupaBase";

export async function Login(email, password) {
	console.log(email, password);
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (error) throw new Error(error.message);
	console.log(data)
	return data;
}

export async function SignUp({ email, password }) {
	console.log(email, password);

	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});
	if (error) throw new Error(error.message);

	return data;
}

export async function GetUserInfo(){

}