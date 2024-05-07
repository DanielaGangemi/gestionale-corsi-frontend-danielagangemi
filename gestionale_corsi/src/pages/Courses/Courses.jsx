import { Card } from "../../components/Card/Card";
import cardStyle from "./Courses.module.css"

const courses = [
    {
        ID_C: 1,
        Nome_Corso: "React base",
        Descrizione_breve: "Il corso fornisce le competenze di base per utilizzare react",
        Descrizione_completa: "Il corso React Base è progettato per fornire agli studenti le competenze fondamentali necessarie per utilizzare React efficacemente nello sviluppo di applicazioni web moderne. Durante il corso, gli studenti acquisiranno una comprensione approfondita dei concetti chiave di React, come i componenti, lo stato e le proprietà, nonché la gestione degli eventi. Saranno in grado di creare interfacce utente dinamiche e reattive utilizzando la libreria React, implementando le migliori pratiche e le tecniche di ottimizzazione.",
        Durata: 2,
        FK_CA: 1
    },
    {
        ID_C: 2,
        Nome_Corso: "Angular base",
        Descrizione_breve: "Il corso fornisce le competenze di base per utilizzare angular",
        Descrizione_completa: "Il corso Angular Base fornisce agli studenti le competenze di base necessarie per utilizzare il framework Angular nella creazione di applicazioni web moderne e scalabili. Durante il corso, gli studenti impareranno i concetti fondamentali di Angular, come i moduli, i componenti, il routing e la gestione dello stato. Saranno in grado di creare applicazioni web complesse utilizzando le funzionalità avanzate offerte da Angular, e avranno familiarità con le migliori pratiche di sviluppo e la struttura del codice organizzata.",
        Durata: 4,
        FK_CA: 1
    },
    {
        ID_C: 1,
        Nome_Corso: "Java base",
        Descrizione_breve: "Il corso fornisce le competenze di base per utilizzare Java",
        Descrizione_completa: "Il corso Java Base è progettato per fornire agli studenti una solida comprensione dei concetti di base del linguaggio di programmazione Java. Durante il corso, gli studenti impareranno a scrivere codice Java efficace e ben strutturato, utilizzando concetti come le classi, gli oggetti, i metodi e le strutture di controllo del flusso. Saranno in grado di creare applicazioni Java console e sviluppare una solida base per apprendere argomenti più avanzati come la programmazione orientata agli oggetti, le collezioni e la gestione delle eccezioni.",
        Durata: 6,
        FK_CA: 2
    },
    {
        ID_C: 1,
        Nome_Corso: "MySQL base",
        Descrizione_breve: "Il corso fornisce le competenze di base per utilizzare MySQL",
        Descrizione_completa: "Il corso MySQL Base fornisce agli studenti le competenze di base necessarie per utilizzare il database relazionale MySQL in progetti di sviluppo software. Durante il corso, gli studenti acquisiranno familiarità con concetti fondamentali come la creazione e la gestione delle tabelle, le query SQL per recuperare e manipolare dati, e la sicurezza dei database. Saranno in grado di progettare e implementare database MySQL efficienti e scalabili, e saranno preparati per approfondire gli argomenti avanzati relativi alla gestione dei database relazionali.",
        Durata: 1,
        FK_CA: 2
    },
]

export function Courses() {

    console.log(courses)

    return (
        <>
            <h1 className={cardStyle.title}>Lista di corsi</h1>

            <div className={cardStyle.card}>
                {courses.map((course, index) => (
                    <Card key={index} ID={course.ID_C} NomeCorso={course.Nome_Corso} Durata={course.Durata} DescrizioneBreve={course.Descrizione_breve} DescrizioneCompleta={course.Descrizione_completa}></Card>
                ))}
            </div>

        </>
    );
}