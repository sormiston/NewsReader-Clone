import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AboveFold from './AboveFold';
import Nav from './Layout';

export default function MainFeed() {
  const { REACT_APP_BASE_URL, REACT_APP_AIRTABLE_API_KEY } = process.env;
  const [news, setNews] = useState(null);
  const [heroArticle1, setHeroArticle1] = useState({});
  const [heroArticle2, setHeroArticle2] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(`${REACT_APP_BASE_URL}Content/?view=Grid%20view`, {
        headers: {
          Authorization: `Bearer ${REACT_APP_AIRTABLE_API_KEY}`,
        },
      });

      const randomize = (array) => {
        const result = [];
        while (array.length > 0) {
          const randomIndex = Math.floor(Math.random() * array.length);
          result.push(...array.splice(randomIndex, 1));
        }
        return result;
      };
      const randomizedNews = randomize(res.data.records);
      setHeroArticle1(randomizedNews.shift());
      setHeroArticle2(randomizedNews.shift());
      setNews(randomizedNews);
    };
    apiCall();
  }, [REACT_APP_AIRTABLE_API_KEY, REACT_APP_BASE_URL]);

  return (
    <Nav>
      <main>
        <nav className='level is-mobile has-text-centered'></nav>
        <div className='tabs is-centered is-fullwidth'>
          <ul>
            <li className='is-active'>
              <a>HOME</a>
            </li>
            <li>
              <a>POPULAR</a>
            </li>
            <li>
              <a>MOMENTUM</a>
            </li>
            <li>
              <a>CORONAVIRUS</a>
            </li>
            <li>
              <a>ONEZERO</a>
            </li>
            <li>
              <a>ELEMENTAL</a>
            </li>
            <li>
              <a>GEN</a>
            </li>
          </ul>
        </div>

        <AboveFold
          heroArticle1={heroArticle1}
          heroArticle2={heroArticle2}
          news={news}
        />
      </main>
    </Nav>
  );
}
