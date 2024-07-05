import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1 className={`my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
          About Text Utilities
        </h1>
        <p>
          Welcome to Text Utilities, your one-stop solution for all your text
          processing needs! Our app is designed to provide a suite of powerful
          tools to manipulate and manage text efficiently and effectively.
          Whether you are a writer, developer, student, or anyone who works with
          text, Text Utilities has something for you.
        </p>

        <h2 className="mt-5">Our Mission</h2>
        <p>
          At Text Utilities, our mission is to simplify text processing tasks
          and enhance productivity. We aim to provide an intuitive and
          user-friendly platform where users can access a variety of text tools
          in one place.
        </p>

        <h2 className="mt-5">Key Features</h2>
        <ul>
          <li>
            <b>UpperCase Conversion:</b> Quickly convert all text to uppercase
            with a single click.
          </li>
          <li>
            <b>LowerCase Conversion:</b> Easily change all text to lowercase.
          </li>
          <li>
            <b>Text Reversal:</b> Reverse the entire text, making it read
            backward.
          </li>
          <li>
            <b>Copy to Clipboard:</b> Copy your text to the clipboard
            effortlessly.
          </li>
          <li>
            <b>Remove Extra Spaces:</b> Eliminate unnecessary spaces in your
            text for cleaner formatting.
          </li>
          <li>
            <b>Capitalize First Letter:</b> Automatically capitalize the first
            letter of each word.
          </li>
          <li>
            <b>Manage Sentences:</b> Capitalize the first letter of each
            sentence for better readability.
          </li>
          <li>
            <b>Clear All Text:</b> Quickly clear all text from the input field.
          </li>
        </ul>

        <h2 className="mt-5">Additional Features</h2>
        <ul>
          <li>
            <b>Word Count:</b> Instantly see the number of words in your text.
          </li>
          <li>
            <b>Character Count:</b> Get an accurate count of characters,
            excluding spaces.
          </li>
          <li>
            <b>Reading Time Estimation:</b> Estimate how long it will take to
            read your text.
          </li>
        </ul>

        <h2 className="mt-5">Why Choose Us?</h2>
        <p>
          <b>User-Friendly Interface:</b> Our app is designed with simplicity
          and ease of use in mind, ensuring that you can navigate and utilize
          our tools effortlessly.
        </p>
        <p>
          <b>Comprehensive Tools:</b> With a wide range of text utilities, you
          can handle multiple text processing tasks without needing multiple
          apps.
        </p>
        <p>
          <b>Continuous Improvement:</b> We are constantly updating and
          improving our app based on user feedback and the latest technology
          trends.
        </p>
        <hr />
        <div className="mt-5">
          <h2 className="mt-5">Contact Us</h2>
          <p>
            We love to hear from our users! If you have any feedback,
            suggestions, or questions, feel free to reach out to us. Your input
            helps us make Text Utilities better for everyone.
          </p>
          <ul className="list-unstyled">
            <li>
              <strong>Phone:</strong> +92 323 8744772
            </li>
            <li>
              <strong>Email:</strong> Sudaiskh31@gmail.com
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/sudais-khan12">
                github.com/sudais-khan12
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
