from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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
