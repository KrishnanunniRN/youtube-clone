import React, { useState } from 'react';
import Header from './Header';
import Scroll from './Scroll';
import SideBar from './SideBar';
import './App.css';
import Card from './Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const cardData = [
    { imageUrl: 'https://i.ytimg.com/vi/Y75m1iWLw0M/mqdefault.jpg', title: 'Breaking News: Election Results', description: 'Live updates on the latest election outcomes.', category: "News" },
    { imageUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', title: 'Indie Pop Gems of the Year', description: 'Discover the best indie pop tracks released this year.', category: "Music" },
    { imageUrl: 'https://i.ytimg.com/vi/wvzDHMgmdUo/mqdefault.jpg', title: 'Ethical Considerations in AI Development', description: 'A discussion on the moral implications of advanced AI.', category: "AI" },
    { imageUrl: 'https://i.ytimg.com/vi/vjf774RKrLc/mqdefault.jpg', title: 'Securing Your RESTful APIs', description: 'Best practices for protecting your application programming interfaces.', category: "APIs" },
    { imageUrl: 'https://i.ytimg.com/vi/CJlbMg0v75s/mqdefault.jpg', title: 'The Magic of Tamil Cinema', description: 'A look into the iconic moments of Tamil film history.', category: "Tamil" },
    { imageUrl: 'https://i.ytimg.com/vi/H709fH-sB0U/mqdefault.jpg', title: 'Unforgettable Live Music Performances', description: 'Highlights from recent and legendary live concerts.', category: "Live" },
    { imageUrl: 'https://i.ytimg.com/vi/94bMKz1dlto/mqdefault.jpg', title: 'Psychological Thrillers That Will Grip You', description: 'Explore the best suspenseful and mind-bending thriller movies.', category: "Thrillers" },
    { imageUrl: 'https://i.ytimg.com/vi/mRcfCvTf5do/mqdefault.jpg', title: 'Witty and Heartfelt Dramedy Shows', description: 'Series that perfectly balance humor and serious themes.', category: "Dramedy" },
    { imageUrl: 'https://i.ytimg.com/vi/bgRcAaH3N-8/mqdefault.jpg', title: 'The Science Behind Black Holes', description: 'Understanding one of the universe\'s most mysterious phenomena.', category: "Science" },
    { imageUrl: 'https://i.ytimg.com/vi/Y75m1iWLw0M/mqdefault.jpg', title: 'Global Economic News Update', description: 'The latest news on the world\'s financial markets.', category: "News" },
    { imageUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', title: 'Electronic Dance Music Anthems', description: 'High-energy tracks from the world of EDM.', category: "Music" },
    { imageUrl: 'https://i.ytimg.com/vi/wvzDHMgmdUo/mqdefault.jpg', title: 'The Impact of AI on Creative Industries', description: 'How artificial intelligence is changing art, music, and writing.', category: "AI" },
    { imageUrl: 'https://i.ytimg.com/vi/vjf774RKrLc/mqdefault.jpg', title: 'Building Scalable APIs with GraphQL', description: 'A guide to developing efficient and flexible APIs.', category: "APIs" },
    { imageUrl: 'https://i.ytimg.com/vi/CJlbMg0v75s/mqdefault.jpg', title: 'Classic Hits from Tamil Cinema', description: 'Timeless and beloved songs from Tamil movies.', category: "Tamil" },
    { imageUrl: 'https://i.ytimg.com/vi/H709fH-sB0U/mqdefault.jpg', title: 'Behind the Scenes of a Live TV Show', description: 'An inside look at the production of a live broadcast.', category: "Live" },
    { imageUrl: 'https://i.ytimg.com/vi/94bMKz1dlto/mqdefault.jpg', title: 'Suspenseful Crime Thriller Novels', description: 'Recommended reading for fans of mystery and suspense.', category: "Thrillers" },
    { imageUrl: 'https://i.ytimg.com/vi/mRcfCvTf5do/mqdefault.jpg', title: 'Dark Humor in Dramedy: A Study', description: 'Exploring the use of dark comedy in dramatic storytelling.', category: "Dramedy" },
    { imageUrl: 'https://i.ytimg.com/vi/bgRcAaH3N-8/mqdefault.jpg', title: 'Quantum Physics Explained Simply', description: 'A beginner\'s guide to the fascinating world of quantum mechanics.', category: "Science" },
    { imageUrl: 'https://i.ytimg.com/vi/Y75m1iWLw0M/mqdefault.jpg', title: 'Business News: Market Trends', description: 'Analysis of current trends in the global business landscape.', category: "News" },
    { imageUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', title: 'Best of 90s Alternative Music', description: 'A nostalgic trip back to the sounds of 90s alternative rock.', category: "Music" },
    { imageUrl: 'https://i.ytimg.com/vi/wvzDHMgmdUo/mqdefault.jpg', title: 'AI in Healthcare: Innovations and Challenges', description: 'Examining the role of artificial intelligence in medical advancements.', category: "AI" },
    { imageUrl: 'https://i.ytimg.com/vi/vjf774RKrLc/mqdefault.jpg', title: 'Introduction to RESTful API Design', description: 'Fundamental principles for designing effective REST APIs.', category: "APIs" },
    { imageUrl: 'https://i.ytimg.com/vi/CJlbMg0v75s/mqdefault.jpg', title: 'The Evolution of Tamil Film Music', description: 'Tracing the history and changes in Tamil cinema soundtracks.', category: "Tamil" },
    { imageUrl: 'https://i.ytimg.com/vi/H709fH-sB0U/mqdefault.jpg', title: 'Preparing for a Live Stage Performance', description: 'Tips and tricks for artists getting ready for a live show.', category: "Live" },
    { imageUrl: 'https://i.ytimg.com/vi/94bMKz1dlto/mqdefault.jpg', title: 'Classic Psychological Thriller Films', description: 'Must-see movies that explore the depths of the human psyche.', category: "Thrillers" },
    { imageUrl: 'https://i.ytimg.com/vi/mRcfCvTf5do/mqdefault.jpg', title: 'The Art of Balancing Comedy and Drama', description: 'Techniques used in writing and performing dramedy.', category: "Dramedy" },
    { imageUrl: 'https://i.ytimg.com/vi/bgRcAaH3N-8/mqdefault.jpg', title: 'Quantum Physics Explained Simply', description: 'A beginner\'s guide to the fascinating world of quantum mechanics.', category: "Science" },
    { imageUrl: 'https://i.ytimg.com/vi/Y75m1iWLw0M/mqdefault.jpg', title: 'Technology News: Latest Gadget Reviews', description: 'Reviews and updates on the newest consumer electronics.', category: "News" },
    { imageUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg', title: 'Global Reggae Music Scene', description: 'Exploring the diverse sounds of reggae from around the world.', category: "Music" },
    { imageUrl: 'https://i.ytimg.com/vi/wvzDHMgmdUo/mqdefault.jpg', title: 'The Future of Robotics and Automation', description: 'Examining the advancements and potential of robotics.', category: "AI" },
  ];
    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const filteredCards = cardData.filter(card => {
    const categoryMatch = selectedCategory === 'All' || card.category.toLowerCase() === selectedCategory.toLowerCase();
    const searchTermMatch = searchTerm === '' ||
                             card.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchTermMatch;
  });

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <div className="d-flex">
        <SideBar />
        <div className="flex-grow-1 content-area">
          <Scroll onCategoryClick={handleCategoryClick} />
          <div className="p-3 card-list-container"style={{ backgroundColor: '#252525' }}>
            <div className="card-list">
              {filteredCards.map((card, index) => (
                <Card
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  category={card.category}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;