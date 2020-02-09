figma.showUI(__html__);
figma.ui.resize(600, 400);
const totalNodes = figma.currentPage.selection.length;
if (totalNodes !== 1) {
    throw "select only one rect";
}
const node = figma.currentPage.selection[0];
const w = node.width;
const h = node.height;
console.log(`w: ${w}, h: ${h}`);
figma.ui.postMessage({ pluginMessage: "hello world", canvasSize: { w, h } });
figma.ui.onmessage = msg => {
    if (msg.type === "draw-canvas") {
        console.log(msg);
    }
    figma.closePlugin();
};
