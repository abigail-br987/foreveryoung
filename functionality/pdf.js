document.querySelector("#pdf-render-1").style.height = "0px";
document.querySelector("#pdf-render-2").style.height = "0px";
document.querySelector(".top-bar").style.display = "none";

function start_book(){
    document.querySelector(".cover").style.display = "none";
    document.querySelector("#pdf-render-1").style.height = "auto";
    document.querySelector("#pdf-render-2").style.height = "auto";
    document.querySelector(".top-bar").style.display = "block";
    document.querySelector(".canvas-container").classList.add("border");

    const url = "../assets/libro2.pdf";
    let pdfDoc = null,
        pageNum = 2,
        pageIsRendering = false,
        pageNumIsPending = null;

    const scale = 0.9,
        canvas1 = document.querySelector("#pdf-render-1"),
        ctx1 = canvas1.getContext("2d"),
        canvas2 = document.querySelector("#pdf-render-2"),
        ctx2 = canvas2.getContext("2d");

    const renderPage = (num, canvas, ctx) => {
        pageIsRendering = true;

        pdfDoc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderCtx = {
                canvasContext: ctx,
                viewport: viewport
            };

            page.render(renderCtx).promise.then(() => {
                pageIsRendering = false;
                if (pageNumIsPending !== null) {
                    renderPages(pageNumIsPending);
                    pageNumIsPending = null;
                }
            });

            if (canvas === canvas1) {
                document.querySelector("#page-num").textContent = num;
            } else {
                document.querySelector("#page-num-next").textContent = num;
            }
        });
    };

    const renderPages = num => {
        renderPage(num, canvas1, ctx1);
        if (num + 1 <= pdfDoc.numPages) {
            renderPage(num + 1, canvas2, ctx2);
        } else {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            document.querySelector("#page-num-next").textContent = "";
        }
    };

    const queueRenderPages = num => {
        if (pageIsRendering) {
            pageNumIsPending = num;
        } else {
            renderPages(num);
        }
    };

    const showPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }
        pageNum -= 2;
        if (pageNum < 1) pageNum = 2;
        queueRenderPages(pageNum);
    };

    const showNextPage = () => {
        if (pageNum + 2 > pdfDoc.numPages) {
            return;
        }
        pageNum += 2;
        queueRenderPages(pageNum);
    };

    pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        document.querySelector("#page-count").textContent = pdfDoc.numPages;
        renderPages(pageNum);
    });

    document.querySelector("#prev-page").addEventListener("click", showPrevPage);
    document.querySelector("#next-page").addEventListener("click", showNextPage);
}