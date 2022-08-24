const ipc = require('electron').ipcRenderer;

setTimeout(function() {
    document.querySelectorAll("#start").forEach((ele) => {
        ele.addEventListener("click", function (e) {
            ipc.send('start', ele.getAttribute('url'));
        });
      });
}, 2000);
