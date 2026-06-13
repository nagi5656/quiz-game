import customtkinter as ctk
from tkinter import messagebox
from PIL import Image, ImageTk, ImageSequence
import os
import sys

# =========================================================
# 基本設定
# =========================================================

ctk.set_appearance_mode("light")
ctk.set_default_color_theme("blue")

# =========================================================
# EXE資源路徑修正
# =========================================================

if getattr(sys, 'frozen', False):
    BASE_DIR = sys._MEIPASS
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# =========================================================
# 主視窗 — 先正常建立，取得螢幕尺寸後再全螢幕
# =========================================================

root = ctk.CTk()
root.title("互（ㄏㄨˋ）動（ㄉㄨㄥˋ）答（ㄉㄚˊ）題（ㄊㄧˊ）遊（ㄧㄡˊ）戲（ㄒㄧˋ）")
root.configure(fg_color="#d9c2a7")

root.update_idletasks()

SW = root.winfo_screenwidth()
SH = root.winfo_screenheight()

root.geometry(f"{SW}x{SH}+0+0")
root.overrideredirect(True)

# =========================================================
# GIF動畫類別
# =========================================================

class AnimatedGIF(ctk.CTkLabel):

    def __init__(self, master, path, size=(250, 250), delay=90):
        super().__init__(master, text="")
        self.frames = []
        gif = Image.open(path)
        for frame in ImageSequence.Iterator(gif):
            frame = frame.copy().resize(size)
            self.frames.append(ImageTk.PhotoImage(frame))
        self.delay = delay
        self.frame_index = 0
        self.animate()

    def animate(self):
        self.configure(image=self.frames[self.frame_index])
        self.frame_index = (self.frame_index + 1) % len(self.frames)
        self.after(self.delay, self.animate)

# =========================================================
# 圖片路徑
# =========================================================

peek_path    = os.path.join(BASE_DIR, "13.png")
pikachu_path = os.path.join(BASE_DIR, "皮卡丘_問號.jpg")
gif_path     = os.path.join(BASE_DIR, "會動的皮卡丘.gif")

# =========================================================
# 題目資料（題目與選項加注音）
# =========================================================

questions = {
    1: {
        "question": "1 + 1 = ?",
        "options": ["1", "2", "3", "4"],
        "answer": "2"
    },
    2: {
        "question": "台（ㄊㄞˊ）灣（ㄨㄢ）首（ㄕㄡˇ）都（ㄉㄨ）是（ㄕˋ）哪（ㄋㄚˇ）裡（ㄌㄧˇ）？",
        "options": [
            "高（ㄍㄠ）雄（ㄒㄩㄥˊ）",
            "台（ㄊㄞˊ）中（ㄓㄨㄥ）",
            "台（ㄊㄞˊ）北（ㄅㄟˇ）",
            "台（ㄊㄞˊ）南（ㄋㄢˊ）"
        ],
        "answer": "台（ㄊㄞˊ）北（ㄅㄟˇ）"
    },
    3: {
        "question": "Python 是（ㄕˋ）什（ㄕㄣˊ）麼（ㄇㄜ˙）？",
        "options": [
            "動（ㄉㄨㄥˋ）物（ㄨˋ）",
            "程（ㄔㄥˊ）式（ㄕˋ）語（ㄩˇ）言（ㄧㄢˊ）",
            "食（ㄕˊ）物（ㄨˋ）",
            "遊（ㄧㄡˊ）戲（ㄒㄧˋ）"
        ],
        "answer": "程（ㄔㄥˊ）式（ㄕˋ）語（ㄩˇ）言（ㄧㄢˊ）"
    },
    4: {
        "question": "3 × 3 = ?",
        "options": ["6", "7", "8", "9"],
        "answer": "9"
    },
}

for i in range(5, 17):
    questions[i] = {
        "question": f"這（ㄓㄜˋ）是（ㄕˋ）第（ㄉㄧˋ）{i}題（ㄊㄧˊ）",
        "options": ["A", "B", "C", "D"],
        "answer": "A"
    }

# =========================================================
# 版面尺寸
# =========================================================

SIDE_W  = int(SW * 0.17)
SIDE_H  = int(SH * 0.82)
SIDE_X  = SW - SIDE_W - int(SW * 0.015)
SIDE_Y  = int(SH * 0.09)

MAIN_W  = int(SW * 0.50)
MAIN_H  = int(SH * 0.80)
MAIN_X  = int(SW * 0.20)
MAIN_Y  = int(SH * 0.10)

GIF_SIZE = int(min(SW, SH) * 0.18)
GIF_X    = int(SW * 0.01)
GIF_Y    = int(SH * 0.50)

TITLE_FS = max(36, int(SH * 0.055))

# =========================================================
# 結束遊戲函式
# =========================================================

def quit_game():
    if messagebox.askokcancel(
        "結（ㄐㄧㄝˊ）束（ㄕㄨˋ）遊（ㄧㄡˊ）戲（ㄒㄧˋ）",
        "確（ㄑㄩㄝˋ）定（ㄉㄧㄥˋ）要（ㄧㄠˋ）結（ㄐㄧㄝˊ）束（ㄕㄨˋ）遊（ㄧㄡˊ）戲（ㄒㄧˋ）嗎（ㄇㄚ˙）？"
    ):
        root.destroy()

# =========================================================
# 結束按鈕
# =========================================================

quit_btn = ctk.CTkButton(
    root,
    text="✕  結（ㄐㄧㄝˊ）束（ㄕㄨˋ）",
    width=160, height=40,
    font=("微軟正黑體", 16, "bold"),
    fg_color="#8b2020", hover_color="#6b1515",
    text_color="white", corner_radius=12,
    command=quit_game,
)
quit_btn.place(x=SW - 175, y=12)

root.bind("<Escape>", lambda e: quit_game())

# =========================================================
# 標題
# =========================================================

title_label = ctk.CTkLabel(
    root,
    text="QUIZ GAME 答（ㄉㄚˊ）題（ㄊㄧˊ）遊（ㄧㄡˊ）戲（ㄒㄧˋ）",
    font=("微軟正黑體", TITLE_FS, "bold"),
    text_color="#4a3426",
)
title_label.place(x=int(SW * 0.28), y=int(SH * 0.02))

# =========================================================
# 左側 GIF 角色
# =========================================================

gif_label = AnimatedGIF(root, path=gif_path, size=(GIF_SIZE, GIF_SIZE), delay=90)
gif_label.place(x=GIF_X, y=GIF_Y)

# =========================================================
# 題號區背景
# =========================================================

main_frame = ctk.CTkFrame(
    root, width=MAIN_W, height=MAIN_H,
    fg_color="#bfa084", corner_radius=30,
)
main_frame.place(x=MAIN_X, y=MAIN_Y)

# =========================================================
# 側邊資訊欄
# =========================================================

side_panel = ctk.CTkFrame(
    root, width=SIDE_W, height=SIDE_H,
    fg_color="#b08b6d", corner_radius=30,
)
side_panel.place(x=SIDE_X, y=SIDE_Y)

side_title = ctk.CTkLabel(
    side_panel,
    text="遊（ㄧㄡˊ）戲（ㄒㄧˋ）資（ㄗ）訊（ㄒㄩㄣˋ）",
    font=("微軟正黑體", max(18, int(SH*0.028)), "bold"),
    text_color="#fff7ed",
)
side_title.pack(pady=(20, 10))

peek_image = ctk.CTkImage(
    light_image=Image.open(peek_path),
    size=(int(SIDE_W*0.52), int(SIDE_W*0.52)),
)
peek_label = ctk.CTkLabel(side_panel, image=peek_image, text="")
peek_label.pack(pady=(0, 6))

info_text = ctk.CTkLabel(
    side_panel,
    text=(
        "• 點（ㄉㄧㄢˇ）擊（ㄐㄧˊ）題（ㄊㄧˊ）號（ㄏㄠˋ）\n"
        "  開（ㄎㄞ）始（ㄕˇ）作（ㄗㄨㄛˋ）答（ㄉㄚˊ）\n\n"
        "• 答（ㄉㄚˊ）對（ㄉㄨㄟˋ）後（ㄏㄡˋ）\n"
        "  格（ㄍㄜˊ）子（ㄗ˙）會（ㄏㄨㄟˋ）亮（ㄌㄧㄤˋ）起（ㄑㄧˇ）\n\n"
        "• 綠（ㄌㄩˋ）色（ㄙㄜˋ）代（ㄉㄞˋ）表（ㄅㄧㄠˇ）\n"
        "  完（ㄨㄢˊ）成（ㄔㄥˊ）題（ㄊㄧˊ）目（ㄇㄨˋ）\n\n"
        "• 挑（ㄊㄧㄠ）戰（ㄓㄢˋ）全（ㄑㄩㄢˊ）部（ㄅㄨˋ）\n"
        "  16 題（ㄊㄧˊ）吧（ㄅㄚ˙）！"
    ),
    justify="left",
    font=("微軟正黑體", max(11, int(SH*0.017)),),
    text_color="#fff7ed",
)
info_text.pack(padx=16, pady=6)

pikachu_image = ctk.CTkImage(
    light_image=Image.open(pikachu_path),
    size=(int(SIDE_W*0.60), int(SIDE_W*0.60)),
)
pikachu_label = ctk.CTkLabel(side_panel, image=pikachu_image, text="")
pikachu_label.pack(pady=8)

complete_count = 0

complete_label = ctk.CTkLabel(
    side_panel,
    text="已（ㄧˇ）完（ㄨㄢˊ）成（ㄔㄥˊ）\n0 / 16",
    font=("Arial", max(16, int(SH*0.024)), "bold"),
    text_color="#fff7ed",
)
complete_label.pack(pady=10)

def update_complete():
    complete_label.configure(text=f"已（ㄧˇ）完（ㄨㄢˊ）成（ㄔㄥˊ）\n{complete_count} / 16")

# =========================================================
# 儲存按鈕參照
# =========================================================

buttons = {}

# =========================================================
# 開啟題目視窗
# =========================================================

def open_question(number):

    root.withdraw()

    window = ctk.CTkToplevel(root)
    window.grab_set()
    window.title(f"第（ㄉㄧˋ）{number}題（ㄊㄧˊ）")
    window.configure(fg_color="#d9c2a7")

    window.update_idletasks()
    window.geometry(f"{SW}x{SH}+0+0")
    window.overrideredirect(True)
    window.attributes("-topmost", True)

    def on_close():
        root.deiconify()
        window.destroy()

    window.bind("<Escape>", lambda e: on_close())

    back_btn = ctk.CTkButton(
        window,
        text="← 返（ㄈㄢˇ）回（ㄏㄨㄟˊ）",
        width=150, height=40,
        font=("微軟正黑體", 16, "bold"),
        fg_color="#7a5c44", hover_color="#5e4433",
        text_color="white", corner_radius=12,
        command=on_close,
    )
    back_btn.place(x=20, y=12)

    quit_btn2 = ctk.CTkButton(
        window,
        text="✕  結（ㄐㄧㄝˊ）束（ㄕㄨˋ）",
        width=160, height=40,
        font=("微軟正黑體", 16, "bold"),
        fg_color="#8b2020", hover_color="#6b1515",
        text_color="white", corner_radius=12,
        command=quit_game,
    )
    quit_btn2.place(x=SW - 175, y=12)

    question_label = ctk.CTkLabel(
        window,
        text=questions[number]["question"],
        font=("微軟正黑體", max(28, int(SH * 0.048)), "bold"),
        text_color="#4a3426",
        wraplength=int(SW * 0.65),
    )
    question_label.pack(pady=int(SH * 0.12))

    def check_answer(choice):
        global complete_count
        if choice == questions[number]["answer"]:
            complete_count += 1
            update_complete()
            buttons[number].configure(
                text=f"✔\n{number}",
                fg_color="#7fb069", hover_color="#6a9955",
                text_color="#fff7ed", text_color_disabled="#fff7ed",
                state="disabled",
            )
            messagebox.showinfo(
                "答（ㄉㄚˊ）對（ㄉㄨㄟˋ）了（ㄌㄜ˙）！",
                "答（ㄉㄚˊ）對（ㄉㄨㄟˋ）了（ㄌㄜ˙）！🎉",
                parent=window
            )
            root.deiconify()
            window.destroy()
        else:
            messagebox.showerror(
                "再（ㄗㄞˋ）試（ㄕˋ）一（ㄧ）次（ㄘˋ）！",
                "答（ㄉㄚˊ）錯（ㄘㄨㄛˋ）了（ㄌㄜ˙），再（ㄗㄞˋ）試（ㄕˋ）一（ㄧ）次（ㄘˋ）！",
                parent=window
            )

    for option in questions[number]["options"]:
        ctk.CTkButton(
            window,
            text=option,
            width=int(SW * 0.26),
            height=int(SH * 0.10),
            font=("微軟正黑體", max(18, int(SH * 0.026)), "bold"),
            corner_radius=20,
            fg_color="#a06a4b", hover_color="#8b5e3c",
            text_color="white",
            command=lambda op=option: check_answer(op),
        ).pack(pady=int(SH * 0.016))

# =========================================================
# 建立 16 個題號按鈕
# =========================================================

BTN_W   = max(100, int(MAIN_W * 0.21))
BTN_H   = max(80,  int(MAIN_H * 0.19))
BTN_FS  = max(22,  int(SH * 0.030))
BTN_PAD = max(10,  int(MAIN_W * 0.022))

for i in range(1, 17):
    btn = ctk.CTkButton(
        main_frame,
        text=str(i),
        width=BTN_W, height=BTN_H,
        font=("微軟正黑體", BTN_FS, "bold"),
        corner_radius=24,
        fg_color="#a06a4b", hover_color="#8b5e3c",
        text_color="#fff7ed",
        border_width=3, border_color="#f7e7d3",
        command=lambda n=i: open_question(n),
    )
    btn.grid(row=(i-1)//4, column=(i-1)%4, padx=BTN_PAD, pady=BTN_PAD)
    buttons[i] = btn

# =========================================================
# 啟動
# =========================================================

root.mainloop()