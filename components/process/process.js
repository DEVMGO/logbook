import styles from './process.module.css';
import ProcessItem from "./process-item";

const Process = (props) => {

    const {processItems} = props;

    return (
      <section className={styles.process}>
          <div className={styles['process-wrapper']}>
              <ul>
                  {processItems.map((processItem) => (
                      <ProcessItem
                          key={processItem.id}
                          title={processItem.title}
                          description={processItem.description}
                          image={processItem.image}
                      />
                  ))}
              </ul>
          </div>
      </section>
    );
};

export default Process;