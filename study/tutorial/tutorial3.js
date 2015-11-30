/**
 * 功能描述：
 * 使用方法:
 * 注意事件：
 * 引入来源：  作用：
 *
 * Created by LiuYuTao on 2015/11/30.
 */

var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList/>
        <CommentForm/>
      </div>
    );
  }
});
