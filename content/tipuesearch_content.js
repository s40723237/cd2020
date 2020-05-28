var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': '學員名單 URL:      \n \n \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'week1-5', 'text': 'week2 \n 更新python3.8.2 \n 到\xa0 https://www.python.org/downloads/release/python-382/ https://www.python.org/downloads/release/python-382/ 下載\xa0 Windows x86-64 executable installer，載完後執行 python-3.8.2-amd64.exe \n \n 選擇 Modify \n \n 不要選擇 pip，並選擇 Next \n \n 接著選擇完你的下載目錄後就可以點選 Install 來安裝 \n \n 到自己原本可攜底下的 data 創一個 py383，並去剛剛下載對應的目錄，去複製 python 的檔案來 py383 貼上 \n 到 https://bootstrap.pypa.io/get-pip.py 頁面，滑鼠右鍵另存新檔到自己原本可攜底下 \n 到自己可攜底下的 wscite415 開啟\xa0Scite.exe 編輯器 ，把之前 start_mdecourse.bat 拖移進來並利用 Replace 來把原本的 py373 取代成 py383\xa0 \n \n 存檔後再重新開啟，讓系統重新讀取 \n 接著安裝 pip 和 cmsimde 所需模組 \n 先到\xa0 https://bootstrap.pypa.io/get-pip.py \xa0下載 get-pip.py，並用程式碼自動載入 \n \n 下面有網址可以下載已做好的cd2020 \n https://drive.google.com/file/d/1DIM8rOFdTgGUXP6ugSSueat7pbZOWCaN/view?usp=sharing \n 實際操作影片 \n \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n https://s40723114.github.io/cd2020/content/%E6%9B%B4%E6%96%B0Python%203.8.2.html \n 問題1開不起 Leo \n 開啟命令視窗，到 cmsimde 重新 pip install leo \n \n week3 \n Assignment 1 \n creat the\xa0 portable Python programming system for Windows 10 64bit system \n 先在隨身碟底下創一個 CD2020 的資料夾，並在裡面創一個 data \n 接著在 data 底下創 6 個資料夾，分別叫 PortableGit msys2 python383 wscite237 tmp home \n PortableGit \n 到\xa0 https://git-scm.com/download/win \xa0下載\xa0 64-bit Git for Windows Portable 下載完後，安裝檔案到 CD2020/data/PortableGit\xa0 \n msys2 \n 到\xa0 https://www.msys2.org/ \xa0下載 msys2-x86_64-20190524.exe\xa0下載完後，安裝檔案到 CD2020/data/msys2 \n python383 \n 到\xa0 https://www.python.org/downloads/release/python-382/ \xa0下載 Windows x86-64 executable installer 下載完後，安裝並複製檔案到 CD2020/data/python383 \n wscite237 \n 到\xa0 https://www.scintilla.org/SciTEDownload.html \xa0下載\xa0full 64-bit download ，下載完後，解壓縮檔案到 CD2020/data/wscite237輯器執行的 Scite.exe 編，打開 Options 下的 Global Options File 其中的預設值 code.page=0 修改設定為 code.page=65001，將 load.on.activate=1 前面的井字號拿掉 \n home \n 把舊的 2019fall/data/home 裡面複製\xa0.gitconfig 並貼到新的 home 裡 \n tcc \n 到\xa0 https://github.com/TinyCC/tinycc \xa0接著到命令提示字元裡 git clone\xa0 https://github.com/TinyCC/tinycc.git \xa0tcc \n Jupyterlab \n 到命令提示字元裡使用 pip install jupyterlab==2.0.1 就會自動安裝進去 \n Fossil SCM \n 到\xa0 https://www.fossil-scm.org/home/doc/trunk/www/index.wiki \xa0下載 fossil scm\xa0 下載完後，解壓縮檔案到 CD2020/data \n Flutter \n 到\xa0 https://github.com/flutter/flutter \xa0 接著到命令提示字元裡 git clone\xa0https://github.com/flutter/flutter.git -b stable \n vscode \n 到\xa0 https://github.com/microsoft/vscode \xa0接著到命令提示字元裡 git clone\xa0https://github.com/microsoft/vscode.git\xa0\xa0vscode \n tmp \n git clone 自己的倉儲 \n 安裝 pip 和 cmsimde 所需模組 \n 先到\xa0 https://bootstrap.pypa.io/get-pip.py \xa0下載 get-pip.py，並用程式碼自動載入 \n \n \n 實際操作影片 \n \n \n 參考網站 \n http://mde.tw/cd2020/content/KMOL2020.html \n https://gitter.im/mdecourse/wcm2020 \n http://mde.tw/cp2019/content/Mac%20Notebook.html \n https://s40723150.github.io/cd2020/content/W2.html \n week4 \n dart 轉 javascript \n 確認可攜系統有無 flutter 等等需要用到裡面 dart dks 的 dart2js \n 修改 SciTE cpp.properties \n # for Dart 1/7\nfile.patterns.dart=*.dart\n# for Dart 2/7\nfilter.dart=Dart(dart)|*.dart|\n# for Dart 3/7\n*filter.dart=$(filter.dart)\n# for Dart 4/7\nlexer.$(file.patterns.dart)=cpp\n# for Dart 5/7\n*language.dart=&Dart|dart||\n# for Dart 6/7\nkeywordclass.dart=\\\nabstract continue false new this \\\nas default  final   null throw \\\nassert deferred finally operator true \\\nasync do for    part try \\\nasync* dynamic get rethrow typedef \\\nawait else  if return var \\\nbreak enum  implements set void \\\ncase    export import static while \\\ncatch external in super with \\\nclass extends is    switch yield \\\nconst factory library sync* yield* \nkeywords.$(file.patterns.dart)=$(keywordclass.dart)\n# for Dart 7/7\ncommand.go.*.dart=dart.exe "$(FileNameExt)"\ncommand.compile.*.dart=dart2js -o $(FileName).js $(FileNameExt) \n 修完後的\xa0http://mde.tw/cp2019/downloads/Scite_cpp.properties_dart_added.7z， 解開壓縮後, 放入隨身系統\xa0data\\wscite415\\wscite 目錄中 \n 之後開啟編譯器，開啟檔案，開啟檔案，使用 tool 的 compile 就可以轉成 .js 檔 \n 實際影片 \n \xa0 \n \n \n 每組隨機抽選: \n 學員名單 URL: \n 2a \n 2b \n \n 每組抽選人數:      \n \n week2 開會紀錄 \n 分工內容: \n 40523253:亂數分組程式 40623117:亂數分組程式 40623252:4輪車 40723221 (group leader) :4輪車 40723222:4輪車 40723228:亂數分組程式 40723236:4輪車 40723237:可攜系統 40723240:4輪車 40723243:4輪車 40723244:可攜系統 40723249:可攜系統 40732331:4輪車\xa0 \n 注意事項: \n 1.視課堂進度上傳影片 2.不管會不會做每周都要push 3.可以從gitter上面提問 4.直播大家輪流主持，直播前半部分有教大家如何開直播了 5.git pull request每個人都要會之後要更改東西比較方便 6.不會做的可以去看我的網站我會盡可能提早更新，再不行就到gitter上面提問可以在這邊提問 gitter:https://gitter.im/mdecourse/cd2020 7.2020年3月26日到期assignment 1的pdf繳交請在時間內上傳到自己倉儲的download上 8.pdf上寫上進度，之後打分數依照pdf打分 \n 直播進程影片: \n \n', 'tags': '', 'url': 'week1-5.html'}, {'title': 'week6-10', 'text': 'Topic 0: From Digital\xa0to Industrial + Engineering Product Design Collaboration \n 1. DesignCollaborationProducts \xa0(中文) \n \n 2. IndustrialAndEngineeringProductDesignCollaboration   (中文) \n \n Topic 1: Mechanical Design Process \n 1. MechanicalDesignProcess   (中文) \n 安裝所需模組 \n pip install opencv-python\npip install imutils\npip install numpy \n \n \n week6 開會紀錄 \n 分工內容: \n topic0: 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic1: 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n 直播進程影片: \n \n week10開會紀錄 \n topic2: \n coppeliasim :40723221 \n MSModelingAndTFApproaches.pdf . 207頁:7人 40723249 40623117 40723221 40723228 40723236 40723237 40723243 \n MechatronicDesignCases.pdf . 46頁:2人 40723222 40723244 \n topic3: \n MechaFutureAndChallenges.pdf . 38頁:2人 40623252 40523253 \n MechaEducFutureNeed.pdf . 20頁:1人 40723240 \n 參考資料: CMS :http://mde.tw/cd2020pj1/content/CMS.html google用戶設置影片 :https://drive.google.com/file/d/1G4MzXUIbNRK7z2XdjtxXzhX51zHHwq85/view?usp=sharing \n 開會影片: \n', 'tags': '', 'url': 'week6-10.html'}, {'title': 'week11-15', 'text': 'assignment3 \n MSModelingAndTFApproaches(151-180)中文 \n week11 \n ubuntu設置 \n 下載ubuntu檔案 \n 到喜好設定的網路中新增一個NAT網路 \n 匯入ubuntu \n 去設定中的網路附加在到設定為僅限主機介面卡(host-only) \n 啟動ubuntu \n 密碼為kmol2020 \n 點選activites並且點選show application \n 點選LX terminal \n 輸入xterm& \n 輸入ls顯示資料 \n 輸入cd coppeliasim4_rev4 \n 輸入ls查看資料夾中之資料 \n 先輸入cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 \n 再輸入./coppeliaSim.sh \n week12 \n ubnutu對外連線(ipv4) \n 設定好埠號 \n 登入ubnutu \n 開啟Lxterminal並且輸入ifconfig並且輸入sudo apt install net-tools \n 輸入ping6 127.0.0.1做測試 \n 進入cd2020pj1資料夾中並且git pull \n 輸入sudo vi wsgi.py並且按下i編輯內容對host編輯設置為10.0.2.4 \n 按下esc且輸入:wq做存取 \n 取出cd2020pj1.leo檔案並用leo開啟 \n 用nav找到allowext7檔案位置並且新增ttt檔案 \n 到tmp輸入sudo vi oauth_scrum.txt \n 輸入python3 wsgi.py \n 進入https://127.0.0.1:18443/alogin進入後門並且輸入admin測試能否可以上傳ttt檔案 \n week11開會紀錄 \n 開會影片: \n', 'tags': '', 'url': 'week11-15.html'}]};