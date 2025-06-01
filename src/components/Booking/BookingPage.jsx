// BookingPage.js
import React from 'react';
import BookingHeader from './BookingHeader';
import SearchBar from './BookingSearchBar';
import GlobalAdventureCardSlider from './GlobalAdventureCardSlider';
import { FilterProvider } from './FilterContext'; // adjust path if needed


function BookingPage() {
  return (
    <FilterProvider>
      <div className='min-h-screen bg-gray-100'>
        <BookingHeader />
        <SearchBar />
        <GlobalAdventureCardSlider />
      </div>
    </FilterProvider>
  );
}

export default BookingPage;
