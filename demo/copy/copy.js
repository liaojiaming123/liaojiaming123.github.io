/**
 * @auth zhaodesheng
 * @param {String} text 需要复制的内容
 * @return {Boolean} 复制成功:true或者复制失败:false  执行完函数后，按ctrl + v试试
*/
function copy(text) {
    var textareaEl = document.createElement('textarea');
    textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
    textareaEl.value = text;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaEl);//移除DOM元素
    console.log("复制成功");
    return res;
}
/**
 * 返回当前元素的文本内容
 * @parm {DOM} element 当前DOM元素
 */
function selectText(element){
  return element.innerText;
}