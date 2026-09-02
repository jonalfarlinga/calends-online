import os
import sys

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from routers.calends import router as calends_router


app = FastAPI()

app.include_router(router=calends_router, prefix="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def resource_path(relative_path):
    '''resolve a path next to this file, or inside a PyInstaller bundle'''
    here = os.path.dirname(os.path.abspath(__file__))
    base_path = getattr(sys, "_MEIPASS", here)
    return os.path.join(base_path, relative_path)


# serve the built React frontend (present in packaged/portable builds)
static_dir = resource_path("static")
if os.path.isdir(static_dir):
    app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")
