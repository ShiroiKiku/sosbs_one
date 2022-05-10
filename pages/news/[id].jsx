import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/New.module.scss";

export default function New() {
    const { query } = useRouter();

    return (
        <MainContainer>
            <div className={styles.new}>
                <h1>Новость {query.id}</h1>
            </div>
        </MainContainer>
    );
}
