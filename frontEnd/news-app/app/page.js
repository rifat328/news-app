"use client";

import Dropdown from "@/components/Dropdown";

export default function Home() {
  return (
    <section>
      <h2>Your daily dose of news</h2>
      <Dropdown />
      <div className="result">
        <h2>result section by card</h2>
      </div>
    </section>
  );
}

// Build a small web app that allows users to:
//! Select a country from a dropdown or card design.
// Fetch top headlines for that country
// Display results in a simple card/list view

// !The news card will need to have the following information displaying:
// Cover image
// Title
// Small description of the post
// News Category badge
// News channel name
// And the card be linked to the news source page ( url)
// Date Created

//? API Doc: https://newsapi.org/
//? Key, ( preferable to created own key ): 5d5446192eeb45b795e163c7ad13f4a8
