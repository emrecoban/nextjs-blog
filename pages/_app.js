import '../styles/globals.css';

export default function App({Component, pageProps}){
    return (
        <>
            <h1>x from <i>_app.js</i></h1>
            <Component {...pageProps} />
        </>
    );
}