import { useEffect } from "react";

function Calendar(props) {
    const fetchData = async () => {
        const url = 'https://www.registrar.txst.edu/registration/ac.html';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.log(
                    "Bad request at registrar.txst.edu",
                    response.status
                )
            }
        } catch (e) {
            console.error("Failed to fetch at TXST", e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
}

export default Calendar;
