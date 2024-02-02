import { useEffect, useState, useCallback } from "react";

function Calendar(props) {
    const [dates, setDates] = useState([]);
    const [err, setErr] = useState('');

    const fetchData = useCallback(async () => {
        const url = "http://localhost:8000/api/";
        const pars = `${props.api}/${props.start}/${props.end}/${props.days}`;

        setErr('');
        setDates([]);
        try {
            const response = await fetch(url + pars);
            if (response.ok) {
                const data = await response.json();
                const importDates = [];
                console.log(data)
                let i = 0
                while (i < data.dates.length) {
                    importDates.push({
                        date: data.dates[i],
                        assn: data.holidays[i]
                    });
                    i++;
                }

                if (importDates.length > 0) {
                    setDates(importDates);
                } else {
                    setDates([{
                        date: "none",
                        assn: "No class meetings in range",
                }])
                }
            } else {
                setErr(
                    <div
                      className={"alert alert-warning alert-dismissible"}
                      role="alert">{`Invalid request at ${url}: ` + response.status}
                    </div>
                );
            }
        } catch (e) {
            setErr(
                <div
                  className={"alert alert-danger alert-dismissible"}
                  role="alert">{`Failed to fetch at ${url}: ` + e}
                </div>
            );
        }
    }, [props]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        <div id="calendar-box" className="mt-3 p-3 col">
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
          <div className='liveAlertPlaceholder'>{err}</div>
        </div>
        </>
    )
}

export default Calendar;
