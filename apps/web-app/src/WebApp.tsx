import LandingPage from "./LandingPage";
import {AppVersion} from "@chums-components/ui/app-version";
import {useState} from "react";

export default function WebApp() {
    const [error, setError] = useState<string | null>(null);
    const errorHandler = (error: string|null) => {
        console.log('errorHandler', error);
        setError(error);
    }

    return (
        <div>
            <h2>Hello, World</h2>
            <LandingPage/>
            <div style={{display: 'flex', gap: 10}}>
                <AppVersion onError={errorHandler} />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
