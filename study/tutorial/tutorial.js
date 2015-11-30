/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/11/30.
 */

var CommentBox = React.createClass({
  displayName: "CommentBox",

  reneder: function () {
    return React.createElement(
      "div",
      { className: "commentBox" },
      "Hello World! I am a CommentBox;"
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));

