import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";

export function withPublic(Component) {
	return function WithPublic(props) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/admin/respondent/onboard");
			return (<div className="flex w-full"><button type="button" className="bg-indigo-500 mx-auto " >
				<svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

				</svg>
				Processing...
			</button></div>);
		}
		return <Component auth={auth} {...props} />
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user) {
			router.replace("/signup");
			return (<div className="flex w-full"><button type="button" className="bg-indigo-500 mx-auto " >
				<svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

				</svg>
				Processing...
			</button></div>);
		}
		return <Component auth={auth} {...props} />;
	};
}