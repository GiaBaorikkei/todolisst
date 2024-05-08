import Post from './Post'

export default function ListPost() {
  const posts = [
    {
      id: 1001,
      title: "xinh đẹp ",
      content: "chỉ là tấm vé ưu tiên ",
      author: "Dương Hiệp",
    },
    {
      id: 1002,
      title: "tâm tính ",
      content: "mới là tấm vé thông hành vĩnh viễn ",
      author: "Dương Hiệp",
    },
  ]
  return (
    <div>
        <Post posts = {posts}></Post>
    </div>
  )
}