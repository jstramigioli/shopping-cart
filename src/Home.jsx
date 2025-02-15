import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to My Shopping Cart Project 🛒</h1>
            <h2 className={styles.subtitle}>
                This is a mock shopping website created as part of a React learning exercise. 
                Feel free to browse the store, add items to your cart, and experiment with the 
                shopping features—but keep in mind, this isn’t a real shop! No actual purchases 
                can be made here.
            </h2>
            <h3 className={styles.description}>
                The goal of this project is to practice React concepts like routing, state 
                management, and API integration. Have fun exploring, and thanks for stopping by!
            </h3>
        </div>
    );
}

export default Home;
