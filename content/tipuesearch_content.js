var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week2', 'text': '更新python3.8.2 \n 到\xa0 https://www.python.org/downloads/release/python-382/ https://www.python.org/downloads/release/python-382/ 下載\xa0 Windows x86-64 executable installer，載完後執行 python-3.8.2-amd64.exe \n \n 選擇 Modify \n \n 不要選擇 pip，並選擇 Next \n \n 接著選擇完你的下載目錄後就可以點選 Install 來安裝 \n \n 到自己原本可攜底下的 data 創一個 py383，並去剛剛下載對應的目錄，去複製 python 的檔案來 py383 貼上 \n 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到自己原本可攜底下 \n 到自己可攜底下的 wscite415 開啟\xa0Scite.exe 編輯器 ，把之前 start_mdecourse.bat 拖移進來並利用 Replace 來把原本的 py373 取代成 py383\xa0 \n \n 存檔後再重新開啟，讓系統重新讀取 \n 接著安裝 pip 和 cmsimde 所需模組 \n \n 實際操作影片 \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n https://s40723150.github.io/cd2020/content/W2.html \n https://s40723114.github.io/cd2020/content/%E6%9B%B4%E6%96%B0Python%203.8.2.html \n \n', 'tags': '', 'url': 'week2.html'}]};