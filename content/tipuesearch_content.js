var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository: https://github.com/s40723145/cd2020 \n Group repository: https://github.com/s40723110/cd2020ag3 \n Group website: https://s40723110.github.io/cd2020ag3/ \n \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Stream', 'text': 'test \n \n', 'tags': '', 'url': 'Stream.html'}, {'title': 'question-1', 'text': 'Q:利用"顯示器擷取"功能無法取得畫面 \n 因為我是用筆記型電腦且有獨立顯示卡，所以在執行OBS時會預設使用獨立顯示卡，此時需先在桌面點選滑鼠右鍵開啟獨立顯示卡的控制面板 \n \n 接著如下圖將OBS新增 \n \n 設定完成後重新啟動OBS即可正常顯示畫面 \n', 'tags': '', 'url': 'question-1.html'}, {'title': 'Assignment 1', 'text': '1.Describe how\xa0to\xa0do an efficient random grouping for this\xa0course or do the roll calling randomly? \n 2.Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain\xa0 CMSiMDE \xa0 website, \xa0 Pelican blog \xa0 and \xa0 Reveal.js \xa0 presentation on \xa0 Github ? \n 3.What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot? \n', 'tags': '', 'url': 'Assignment 1.html'}, {'title': 'Update Python', 'text': '先至 https://www.python.org/downloads/ 下載所需要的版本 \n 開啟Python3.8.2安裝檔後要選擇Customize installation(才能自行選擇檔案要放的位置) \n \n 在data的目錄下建立"py382"的資料夾並將所下載的Python檔案放至py382中 \n 利用SciTE開啟start_mdecourse.bat檔案，並將原先所設置的Python資料夾路徑設置改為剛剛安裝的py382 \n REM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n 完成路徑修改後重新啟動start_mdecourse.bat檔 \n 在命令列中輸入"python"即可看到當前版本 \n \n', 'tags': '', 'url': 'Update Python.html'}, {'title': 'question', 'text': '將Python版本升級後出現無法使用python wsgi.py開啟近端網站 \n 此時利用pip install來安裝所缺少的模組 \n \n \n \n \n 模組安裝成功後會出現"Successfully installed......" \n 此時即可跳出安裝指令 \n', 'tags': '', 'url': 'question.html'}, {'title': 'random grouping', 'text': '亂數分組程式流程: \n 1.抓出學員資料 \n 利用Python的requests模組來擷取網頁上的內容 \n 2.將抓出的資料轉為文字檔 \n 設定一變數將剛剛擷取出來的內容轉為文字檔方便之後做處理 \n 3.將文字檔內容轉為數列 \n 利用split語法將剛剛的文字內容以空格作為分割依據來建立一數列 \n 4.使用random模組將學員資料打亂 \n 將上述的數列內容由原本依照學號排序之順序改為亂數排序 \n 5.利用迴圈及判斷式列印文字 \n 利用第一層迴圈來顯示1~4組，接著利用判斷式來分辨目前分到第幾組了並再次利用迴圈來做組員分配 \n import requests\nimport random\nurl = "https://mde.tw/cd2020/downloads/2020spring_cd_2a_list.txt"\nMsource = requests.get(url)\n#print(Msource.text)\nmember = Msource.text\nmlist = member.split("\\n")\nmlist.pop()\n#print(member)\nmlen = len(mlist)\n#print(mlist[0:13])\nrandom.shuffle(mlist)\n\ng1 = 13\ng2 = 2*g1\ng3 = 3*g1\ng4 = int(mlen)\n\nprint("全班共",mlen,"人")\nfor i in range(1,5):\n    print("Group",i,":")\n    if (i == 1):\n        for j in range(0,g1):\n            print(mlist[j])\n            j += 1\n        print("-"*20)\n    elif (i == 2):\n        for m in range(g1,g2):\n            print(mlist[g1])\n            g1 += 1\n        print("-"*20)\n    elif (i==3):\n        for k in range(g2,g3):\n            print(mlist[g2])\n            g2 += 1\n        print("-"*20)\n    elif (i == 4):\n        for l in range(g3,g4):\n            print(mlist[g3])\n            g3 += 1\n        print("-"*20)\nprint(mlist) \n', 'tags': '', 'url': 'random grouping.html'}, {'title': 'portable system', 'text': '在建置可攜系統前須在資料夾中(例如:CD2020)先建立一data的資料夾供之後放置相關必要檔案和要分割的磁碟內容 \n 所需的檔案: \n Portable Git :以使用相關的git指令來操作 \n Python :使能執行相關python檔案和在SciTE中進行Python程式的編寫 \n SciTE :能利用此文字編輯器來進行不同程式語言的撰寫(e.g. Python、html) \n MSYS2 :能在windows環境下建立類linux環境 \n get-pip.py :使用Python時會需要相關套件，用pip來做管理較為方便 \n 建立可攜系統步驟: \n 將下載後的Portable Git檔案放置在CD2020\\data\\portablegit資料夾中 \n 將 下載後的Python檔案放置在CD2020\\data\\py382資料夾中 \n 將下載後的SciTE檔案放置在CD2020\\data\\wscite432資料夾中 \n 將下載後的MSYS2檔案放置在CD2020\\data\\msys64資料夾中 \n 將下載後的get-pip.py檔案放置在CD2020\\data資料夾中並執行 \n 在CD2020資料夾中建立一start.bat檔案，內容為: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nREM for putty\nSet GIT_HOME=%CDisk%:\\portablegit\\bin\\\nSet GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit \n 主要為設置路徑至上述檔案放置的資料夾、建立一分割磁碟Y、開啟命令列和開啟SciTE \n 再建立一stop.bat檔案供關閉用start.bat檔案開啟的相關內容 \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\ntaskkill /IM ShareX.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n', 'tags': '', 'url': 'portable system.html'}, {'title': 'Topic 1', 'text': 'Machanical Design Process \n Ch1 Successful\xa0 Design \n 前言: \n 此章節主要在介紹電子產品的外殼設計以及定義"成功的設計"。 \n 我們將討論設計者的角色在產品設定中的要求，設計者適合整體產品的開發圖，重要的溝通和起初的因素皆被考慮在開始設計時。 \n 在開始設計前先簡略地定義什麼是"電子產品"，它含有電路板且通常都有輸入輸出裝置例如LCD，舉例來說電子產品包括手機、數位相機、超聲波牙刷。 \n 電子產品的外殼是圍繞和支撐電路板，外殼讓裝置可供消費者使用，為了保護電子裝置來自於外在環境的震動(例如手機摔落)。 \n 在本質上，成功的外殼設計須符合產品書面規格並在設置的價格和時間內完成，現在開始探索這些外殼的設計過程。 \n 1.1 設計指南 \n 設計指南 \n \xa0 \xa0 \xa0 \xa0 設計者將會在作業上使用很多導覽，此文有意提供一般幫助且幫助增加設計者過去全部的經驗和他們現在的組織建立流程。 \n 電子產品外殼(EPE) \n \xa0 \xa0 \xa0 \xa0 電子產品由外部和內部結構元件組成的產品，它包含任何用於使用者接頭的硬體，用於任何連接線的連接器和任何使用者會實質感受到和看到的元件，許多電子外殼包含一個或多個PCBA，而且這些必須在一般使用下被嚴格保護。 \n \xa0 \xa0 \xa0 \xa0 一個外殼可以非常簡單或是極度複雜能由數千個零件組成，設計者的首要任務是定義他們正在設計的"系統"，這被包含在後續的章節，"外殼"此詞將會被以較不複雜的結束在此範圍，而解釋方法可以被延伸到更複雜的設計情況。 \n EPE設計者 \n \xa0 \xa0 \xa0 \xa0 這是負責設計電子產品外殼的人，在很多情況下，這是位機械工程師，但它可以是有機械工程背景或相關專業經驗的人，一位好的EPE設計者有以下特性: \n \n 理解和確認產品規格的能力 \n 能夠增加或幫忙建立產品規格 \n 為產品產生的問題建立有創意的解決方案 \n \n 因此EPE設計者需要有創造力和遵循專案的主要目標。 \n', 'tags': '', 'url': 'Topic 1.html'}, {'title': 'Authomatic', 'text': '', 'tags': '', 'url': 'Authomatic.html'}, {'title': 'course notes', 'text': '', 'tags': '', 'url': 'course notes.html'}, {'title': 'w7', 'text': '檢視個人網站及分組網站的h1命名、相關URL連結、網頁標題: \n \n h1的命名須一目了然，且將裡面內容分類好 \n 將分組倉儲、組員倉儲的連結附上，供別人方便連結 \n 網頁標題改至此課程名稱 \n \n 抽點學員檢驗YouTube直播 + OBS串流: \n \n 配合疫情情況不穩定檢驗各學員是否會利用網路來做相關遠距上課設定 \n 檢視課程及直播所需設備是否準備齊全 \n \n 說明期末專案內容: \n \n 說明專案所需的相關內容(Ex 繪製零件、遠端控制......) \n 說明控制車子移動所需要的硬體及程式 \n 呈現CoppeliaSim RemoteApi的應用 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '說明網際化之應用: \n \n 說明四輪車專案相關模組(Ex numpy、opencv、imutils)的安裝及應用 \n \n pip install opencv-python\n\npip install imutils \n \n 展示利用攝像頭及opencv做遠端的監控 \n 說明利用Leo editor相關程式語法 \n 說明利用authomatic讓使用者需要登入設定的信箱規格才能查看內容 \n \n 抽點學員檢驗YouTube直播 + OBS串流: \n \n 配合疫情情況不穩定檢驗各學員是否會利用網路來做相關遠距上課設定 \n 檢視課程及直播所需設備是否準備齊全 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '期中考週: \n \n 利用個人行事曆建立 Google Handout Meet，並利用meet錄製個人w1~w8內容 \n 填寫表單提送期中簡報URL和自評分數 \n \n 說明w9~w18任務 \n \n 利用Onshape繪製四輪車零件 \n 零組件轉檔至CoppeliaSim \n 轉入至CoppeliaSim之零組件檔案分割及零件從屬關係配置 \n 利用Python Remote Api進行四輪車控制 \n Remote Api配合Flask、Oauth2使四輪車在網際控制 \n 利用虛擬主機配合Ubuntu20.04進行網際控制 \n 整合上述6項完成此課程專案 \n \n 說明虛擬主機網路設定: \n \n NAT:僅提供網路連線，無法做其他功能 \n Bridged:能模擬一台實體主機，和實體主機相同位階 \n host only:僅能和實體主機進行通訊，沒有實際網路功能 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '說明Oauth2應用: \n \n 講解配合Google Api + Oauth2的應用及優點 \n 說明如何利用Google Api建立相關憑證 \n \n 說明四輪車可配合網際化之應用: \n \n 利用HTML form來搭配不同之四輪車展示(ex.下拉式選單) \n 配合csv模組將獲取的相關資料放入資料庫 \n \n 簡述Leo Editor開發人員歷程及運作團隊 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '複習Topic內容 \n \n 說明電子書內容所要表達的意涵 \n \n 使用虛擬主機啟動Ubuntu20.04 \n \n 網路設定說明 \n 示範建立網路連線 \n 在Linux系統下安裝套件 \n', 'tags': '', 'url': 'w11.html'}]};