import os
from pathlib import Path
from json import dumps


def get_input():
    OUT_PATH = None
    INST = None

    while not INST:
        INST = input("\nSelect institution. \n"
                     "(press Enter to use default: TXST)\n"
                     "(type SUU for Southern Utah University) \n"
                     "(tpye CSV to import from a holidays.csv file) \n"
                     )
        if INST == "":
            INST = "TXST"
        elif INST == "SUU":
            pass
        elif INST == "CSV":
            pass
        else:
            print("Not a supported institution.")
            INST = None

    while not OUT_PATH:
        home = os.environ["HOMEDRIVE"] + os.environ['HOMEPATH']
        here = os.getcwd()

        OUT_PATH = input("\nEnter file path where you want the output stored."
                         f"\n(press Enter to use default: {home})"
                         f"\n(type 1 to use default: {here})\n")
        if OUT_PATH == "":
            OUT_PATH = home
        elif OUT_PATH == "1":
            OUT_PATH = here
        else:
            try:
                OUT_PATH = Path(OUT_PATH)
                if not os.path.exists(OUT_PATH):
                    print("bad path")
                    OUT_PATH = None
            except Exception as e:
                print(e)
                OUT_PATH = None
    config = {
        "INST": INST,
        "OUT_PATH": str(OUT_PATH)
    }
    return config


def write_config(config):
    file = open('files/config.json', 'w')
    json = dumps(config, indent=2)
    file.write(json)
    file.close()
    print("\n...Successfully wrote config.json\n")


if __name__ == "__main__":
    config = get_input()
    write_config(config)
