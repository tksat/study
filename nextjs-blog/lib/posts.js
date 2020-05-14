import fs from "fs"
import path from "path"
import remark from "remark"
import html from "remark-html"
import matter from "gray-matter"

//postsディレクトリー取得
//process.cwd => サービスの接待パスを取得
const postsDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  // posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    //replace => 文字を抜き出す
    const id = fileName.replace(/\.md$/, "")

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents)

    //データとidを合わせる
    return {
      id,
      ...matterResult.data,
    }
  })

  //日付のソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

//動的なパス名を返す

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // 以下のような配列を返します:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

//idの基づいてブログ記事を返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents)

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // データを id と組み合わせる
  return { id, contentHtml, ...matterResult.data }
}
