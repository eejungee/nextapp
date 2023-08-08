"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            // router를 통해 방금 생성한 글로 리디렉션 가능
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="nody"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
