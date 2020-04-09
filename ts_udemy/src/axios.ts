export {};

//APIデータを取得した場合
import axios from 'axios'
const url: string = 'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123'
axios.get(url).then(res => {

  //インターフェースでオブジェクトの型を設定
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  //Articleで構成する配列であるという型
  const data: Article[] = res.data
  console.log(data)
})