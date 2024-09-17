import React from "react";

function About() {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="space-y-5 mt-20">
          <h2 className="md:text-4xl text-2xl text-center font-bold text-blue-500 mb-10 underline underline-offset-4">
            About Us
          </h2>
          <p className="text-xl text-center">
            Welcome to <span className="text-pink-500">BookStore</span>! At
            BookStore, we believe in the transformative power of books. Our
            mission is to make reading accessible to everyone, regardless of
            their budget. Whether you're a casual reader or a dedicated
            bibliophile, you'll find a diverse collection of books in our store
            that cater to all tastes and preferences.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl  font-bold text-red-500 mt-10 mb-10 md:text-left text-center">
            Our Story
          </h3>
          <p className="text-xl text-center">
            BookStore was founded on the passion for books and the desire to
            share that passion with the world. We started as a small community
            initiative, giving away books to those who couldn't afford them.
            Over the years, we have grown into a full-fledged bookstore,
            offering both free and paid books to readers across the globe.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl  font-bold text-red-500 mt-10 mb-10 md:text-left text-center">
            What We Offer
          </h3>
          <p className="text-xl text-center space-y-5">
            <p>
              Free Books: Our free book section is the heart of our store. We
              believe that everyone should have access to books, regardless of
              their financial situation. Here, you can find a wide range of
              genres, from classic literature to contemporary novels, all
              available for free.
            </p>
            <p>
              Paid Books: For those looking to expand their personal library, we
              offer a curated selection of paid books. These include the latest
              bestsellers, rare finds, and timeless classics. Purchasing books
              from our store helps us sustain our mission and continue providing
              free books to those in need.
            </p>
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl  font-bold text-red-500 mt-10 mb-10 md:text-left text-center">
            Our Values
          </h3>
          <p className="text-xl text-center space-y-7">
            <p>
              Accessibility: We are committed to making books accessible to
              everyone. Our free book program ensures that financial constraints
              don't stand in the way of enjoying a good read.
            </p>
            <p>
              Quality: We carefully select each book in our collection to ensure
              it meets our high standards of quality and relevance.
            </p>
            <p>
              Community: We strive to create a community of readers who share
              our love for books. Through events, book clubs, and online forums,
              we aim to connect readers and foster a culture of shared learning
              and growth.
            </p>
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl text-xl  font-bold text-red-500 mt-10 mb-10 md:text-left text-center">
            Join Us
          </h3>
          <p className="text-xl text-center space-y-7">
            <p>
              We invite you to explore our collection, participate in our
              events, and join our community of readers. Whether you're looking
              for your next great read or simply want to be part of a community
              that values the written word, BookStore is here for you.
            </p>
            <p>
              Thank you for being a part of our journey. Together, we can spread
              the joy of reading to every corner of the world.
            </p>
            <p>Happy Reading!</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
