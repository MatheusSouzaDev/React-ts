import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

export function App() {
  const posts:PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/98562078?v=4",
        name: "Matheus Souza",
        role: "Student @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: '👉 jane.design/doctorcare' },
        {type: 'link', content:'#novoprojeto'}, 
        {type: 'link', content:'#nlw'},
        {type: 'link', content:'#rocketseat'},
      ],
      publishedAt: new Date("2023-07-03 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
        name: "Mayk Brito",
        role: "Educator @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: '👉 <a href="#">jane.design/doctorcare</a>' },
      ],
      publishedAt: new Date("2023-11-02 13:45:00"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: '👉 <a href="#">jane.design/doctorcare</a>' },
      ],
      publishedAt: new Date("2023-11-06 09:30:00"),
    },
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}