import styles from "./Comment.module.css";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

interface CommentProps{
  content: string;
  onDeletComment: (comment:string) => void;
}

export function Comment({content,onDeletComment}:CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeletComment() {
    onDeletComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state)=>{
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/matheusSouzaDev.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Souza</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:38">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeletComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
