# Clear the Clutter 🧹

Clear the Clutter is a lightweight Node.js utility that helps organize files in a directory by grouping them into folders based on their file extensions. Instead of deleting files, the script creates separate folders for each file type and moves the files accordingly.

Simply run the script inside any directory you want to organize.

---

## 🚀 Features

- Organizes files by their extensions  
- Automatically creates folders for each file type  
- Moves files safely without deleting them  
- Works on any directory  
- Fast and lightweight Node.js script  

---

## 🛠️ Tech Stack

- JavaScript  
- Node.js  
- File System (`fs`) module  
- Path (`path`) module  

---

## 📂 How It Works

Example:
Before:
📁 Downloads

├── app.exe

├── brave.exe

├── xyz.exe

├── image.png

├── x.png

├── z.png

├── photo1.jpg

├── photo2.jpg

├── photo3.jpg

├── notes.txt

├── study.txt

├── frontend.txt


After running the script:
📁 Downloads

├── exe/

│ └── app.exe

│  └── brave.exe
  
│  └── xyz.exe
  
├── png/

│ └── image.png

│ └── x.png

│ └── z.png

├── jpg/

│ └── photo1.jpg

│ └── photo2.jpg

│ └── photo3.jpg

├── txt/

│  └── notes.txt
  
│  └── study.txt
  
│  └── frontend.txt

