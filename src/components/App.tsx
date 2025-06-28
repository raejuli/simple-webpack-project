import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function App()
{
    return (
        <>
            <Header />
            <main>
                <Content />
            </main>
            <Footer />
        </>
    );
}