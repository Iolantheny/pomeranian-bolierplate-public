import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Blog = () => {
  return (
    <div className="blog">
      <h1>
        <Link to="/">{`< BLOG`}</Link>
      </h1>
      <div>
        <div className="post">
          <p className="post_date">30-11-2022</p>
          <h2 className="post_title">Why are we so nostalgic for the 1990s?</h2>
          <p className="post_text">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p className="post_text">
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
          <p className="post_author">Radosława Majdan</p>
          <p className="post_info">Senior Marketing Specialist</p>
        </div>{' '}
        <div className="post">
          <p className="post_date">30-11-2022</p>
          <h2 className="post_title">I make mistakes!</h2>
          <p className="post_text quote">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>
          <p className="quote_author">Marilyn Monroe</p>
          <p className="post_author">Radosława Majdan</p>
          <p className="post_info">Senior Marketing Specialist</p>
        </div>
        <div className="post">
          <p className="post_date">30-11-2022</p>
          <h2 className="post_title">
            18 Record-Breaking, Controversial, and Weird Facts{' '}
          </h2>
          <p className="post_text">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
          <ul>
            <li>
              <a href="https://wiadomosci.wp.pl/">WP.PL 1</a>
            </li>
            <li>
              <a href="https://wiadomosci.wp.pl/">WP.PL 2</a>
            </li>
            <li>
              <a href="https://onet.pl/">ONET.PL</a>
            </li>
          </ul>
          <p className="post_author">Radosława Majdan</p>
          <p className="post_info">Senior Marketing Specialist</p>
        </div>
      </div>
    </div>
  );
};
