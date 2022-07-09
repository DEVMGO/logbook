import styles from './uploadigc.module.css';
import Dropzone from './dropzone';

const UploadIgc = () => {
    return (
        <>
            <section className={styles.upload_igc}>
                <div className={styles.box_upload}>
                    <Dropzone />
                </div>
            </section>
        </>
    );
}

export default UploadIgc;