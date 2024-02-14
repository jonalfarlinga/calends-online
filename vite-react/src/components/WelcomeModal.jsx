export default function WelcomeModal() {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                    className="modal-title fs-5"
                    id="exampleModalLabel"
                >
                  Welcome!
                </h1>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
            <div className="modal-body">
                <p>This website will create an empty syllabus for your next className.</p>
                <p>On the form, select your institution, and fill in the relevant info for your semester and className session.</p>
                <p>Click the Get Calendar button to generate a table on the page. You can highlight and cut/paste the table to your favorite text editor!</p>
                <p>If you prefer a .docx output, you can get the terminal version of Calends <a href="https://github.com/jonalfarlinga/calends">here.</a></p>
            </div>
              <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
