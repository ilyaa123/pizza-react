import { Layout } from "../components/Layout"
import { NotFound } from "../components/NotFound/NotFound";

const Custom404 = () => {
    return (
        <Layout path="404" title="Страница не найдена">
            <NotFound />
        </Layout>
    )
}
export default Custom404;