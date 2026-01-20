import Dropdown from "@/components/Dropdown";
("use client");

export default function Home() {
  return (
    <section>
      <h2>Your daily dose of news</h2>
      <Dropdown />
      <div class="result">
        <h2>result section by card</h2>
      </div>
    </section>
  );
}
