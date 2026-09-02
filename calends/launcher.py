import socket
import threading
import time
import webbrowser

import truststore
truststore.inject_into_ssl()

import uvicorn  # noqa: E402

from main import app  # noqa: E402

HOST = "127.0.0.1"


def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, 0))
        return s.getsockname()[1]


def open_browser(port):
    time.sleep(1.5)
    webbrowser.open(f"http://{HOST}:{port}")


def main():
    port = find_free_port()
    print("Calends Online is running.")
    print(f"If your browser did not open, go to http://{HOST}:{port}")
    print("Close this window to stop Calends Online.")

    threading.Thread(target=open_browser, args=(port,), daemon=True).start()
    uvicorn.run(app, host=HOST, port=port, log_level="warning")


if __name__ == "__main__":
    main()
