import { Auth0Provider } from "@auth0/auth0-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Auth0Wrapper: React.FC<any> = props => {
    return (
        <Auth0Provider
            domain="dev-esmd7qrxdw3e1mzy.us.auth0.com"
            clientId="SvlQlDBM6fQmPKmkQXSJdXyrrteFOb4i"
            cacheLocation="localstorage"
            authorizationParams={{
                redirect_uri: window.location.origin + "/auth/login/callback"
            }}
        >
            {props.children}
        </Auth0Provider>
    )
}
