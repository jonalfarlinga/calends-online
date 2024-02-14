export default function WelcomeModal() {
    return (
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="false">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                    class="modal-title fs-5"
                    id="exampleModalLabel"
                >
                  Welcome!
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </div>
            <div class="modal-body">
                <p>This website will create an empty syllabus for your next class.</p>
                <p>On the form, select your institution, and fill in the relevant info for your semester and class session.</p>
                <p>Click the "Get Calendar" button to generate a table on the page. You can highlight and cut/paste the table to your favorite text editor!</p>
            </div>
              <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                  Get Started
                </button>
                <button
                    type="button"
                    class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
