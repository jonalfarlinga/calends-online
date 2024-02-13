import Calendar from './Calendar.jsx'
import { useState, useEffect } from 'react';

const initialData = {
    start: "",
    end: "",
    S: false,
    M: false,
    T: false,
    W: false,
    R: false,
    F: false,
    A: false,
    api: "",
};

function Form() {
    const [calendar, setCalendar] = useState('');
    const [formData, setFormData] = useState(initialData);
    const [apis, setAPIs] = useState([])
    const [err, setErr] = useState('')

    const getAPIs = async () => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/list`;

        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setAPIs(data.apis);
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
                  role="alert">{`Failed to fetch request at ${url}: ` + e}
                </div>
            );
        }
    }

    useEffect(() => {
        getAPIs()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let start = new Date(formData.start);
        let end = new Date(formData.end);
        if (end < start) {
            setErr(
                <div
                  className={"alert alert-warning alert-dismissible"}
                  role="alert">Start date must be earlier than end date.
                </div>
            )
        } else if (formData.S + formData.M + formData.T + formData.W +
            formData.R + formData.F + formData.A === 0) {
            setErr(
                <div
                  className={"alert alert-warning alert-dismissible"}
                  role="alert">At least one day of the week must be checked.
                </div>
            )
        } else {

            end = ("0" + (end.getUTCMonth() + 1)).slice(-2) +
                  ("0" + (end.getUTCDate())).slice(-2) +
                  ("" + end.getUTCFullYear()).slice(-2);
            start = ("0" + (start.getUTCMonth() + 1)).slice(-2) +
                    ("0" + (start.getUTCDate())).slice(-2) +
                    ("" + start.getUTCFullYear()).slice(-2);
            let days = "";
            if (formData.S) {days += "S"}
            if (formData.M) {days += "M"}
            if (formData.T) {days += "T"}
            if (formData.W) {days += "W"}
            if (formData.R) {days += "R"}
            if (formData.F) {days += "F"}
            if (formData.A) {days += "A"}

            setErr('');
            setCalendar(<Calendar start={start} end={end} days={days} api={formData.api}/>);
        }
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const handleCheck = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.checked
        });
    };

    return (
        <>
            <form className="mt-3 mb-3 col" onSubmit={handleSubmit}>
              <div className='liveAlertPlaceholder'>{err}</div>
              <div className="mb-3">
                <select
                  onChange={handleChange}
                  value={formData.api}
                  required id="api"
                  name="api"
                  className="form-select"
                >
                  <option value="">Choose an Academic Calendar</option>
                  {apis.map(api => {
                    return (
                      <option value={api.href} key={api.href}>
                        {api.name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={formData.start}
                  onChange={handleChange}
                  type="date"
                  required name="start"
                  id="start"
                  className="form-control"/>
                <label htmlFor="start">First day of class</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={formData.end}
                  onChange={handleChange}
                  type="date"
                  required name="end"
                  id="end"
                  className="form-control"/>
                <label htmlFor="end">Last day of class</label>
              </div>
              <div className="form-group mb-3" id="days-checklist">
                <h6>Days that class meets</h6>
                <div>
                  <input
                    checked={formData.S}
                    onChange={handleCheck}
                    type="checkbox"
                    name="S"
                    id="S"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="S"
                  >
                    Sunday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.M}
                    onChange={handleCheck}
                    type="checkbox"
                    name="M"
                    id="M"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="M"
                  >
                    Monday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.T}
                    onChange={handleCheck}
                    type="checkbox"
                    name="T"
                    id="T"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="M"
                  >
                    Tuesday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.W}
                    onChange={handleCheck}
                    type="checkbox"
                    name="W"
                    id="W"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="W"
                  >
                    Wednesday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.R}
                    onChange={handleCheck}
                    type="checkbox"
                    name="R"
                    id="R"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="R"
                  >
                    Thursday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.F}
                    onChange={handleCheck}
                    type="checkbox"
                    name="F"
                    id="F"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="F"
                  >
                    Friday
                  </label>
                </div>
                <div>
                  <input
                    checked={formData.A}
                    onChange={handleCheck}
                    type="checkbox"
                    name="A"
                    id="A"
                    className="form-check-input"/>
                  <label
                    className="form-check-label ms-1 me-3"
                    htmlFor="A"
                  >
                    Saturday
                  </label>
                </div>
              </div>
              <button className='btn btn-primary'>Get Calendar</button>
            </form>
            {calendar}
        </>
    )
}

export default Form;
