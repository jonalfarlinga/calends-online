import { useEffect, useState } from "react";

function Calendar(props) {
    const [dates, setDates] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/TXST_calendar/010124/050124/MW/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const importDates = [];
                let i=0
                while (i<data.dates.length) {
                    importDates.push({
                        date: data.dates[i],
                        assn: data.holidays[i]
                    });
                    i++;
                }
                setDates(importDates);
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

    return (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Topics</th>
                <th>Assignments</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date) => {
                return (
                    <tr key={date.date}>
                        <td>{date.date}</td>
                        <td></td>
                        <td>{date.assn}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </>
    )
}

export default Calendar;
