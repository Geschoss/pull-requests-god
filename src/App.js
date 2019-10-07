import React, { useEffect, useState } from 'react';

import styles from './App.module.css';
import Island from './common/Island';

function App() {
    const [pulls, setPulls] = useState([]);

    useEffect(() => {
        fetch('http://10.219.150.97:8080/stash/getAllPullRequests', { mode: 'cors' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                return res;
            })
            .then(setPulls)

    }, []);

    return (<>
            <header className={styles.header}>Pull request gods</header>
            <div className={styles.content}>
                {pulls.map(({ author, date, messageContent, merged }) => {
                    return (
                        <Island key={`${author}-${date}`} author={author} date={date} merged={merged} msg={messageContent} />
                    )
                })}
            </div>
        </>
    );
}

export default App;
