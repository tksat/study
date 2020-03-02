import React from 'react';

function App() {
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div>
          <label　htmlFor="title">タイトル</label>
          <input type="text" id="title" size="40"/>
        </div>
        <div>
          <label htmlFor="event">イベント</label>
          <input type="text" id="event" size="40"/>
        </div>
        <div>
          <button>イベントを作成</button>
          <button>全てのイベントを削除</button>
        </div>
      </form>

      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  );
}

export default App;
