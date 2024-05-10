import { useMutation } from "@tanstack/react-query";
import { Login } from "./ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin(setUserInfo) {
	const navigate = useNavigate();
	const { mutate: login, isLoading } = useMutation({
		mutationFn: ({ email, password }) => Login(email, password),
		onSuccess: (data) => {
			toast.success("Loged in Succesfully");
			setUserInfo(data);
			navigate("/user");
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
		},
	});
	return { login, isLoading };
}
