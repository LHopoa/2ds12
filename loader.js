// 在窗口加载完成后执行的JavaScript代码
        window.onload = function() {
            // 隐藏loader
            var loader = document.getElementById("loader");
            loader.style.display = "none";

            // 显示content
            var content = document.getElementById("content");
            content.style.display = "block";
        };